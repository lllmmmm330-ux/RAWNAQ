// Clean, dependency-free Web Audio synthesizer for classic library reading ambiance
class LibraryAudioService {
  private ctx: AudioContext | null = null;
  private noiseNode: AudioNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying = false;
  private currentMode: 'silent' | 'fireplace' | 'library-rain' = 'silent';

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMode(mode: 'silent' | 'fireplace' | 'library-rain', volume = 0.25) {
    this.stop();
    this.currentMode = mode;

    if (mode === 'silent') {
      return;
    }

    try {
      this.initContext();
      if (!this.ctx) return;

      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Generate soft pink/brown crackle or gentle rain texture
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        if (mode === 'fireplace') {
          // Warm crackle: lowpass + random tiny pop spikes
          lastOut = (lastOut + 0.02 * white) / 1.02;
          const pop = Math.random() > 0.998 ? (Math.random() * 0.4 - 0.2) : 0;
          data[i] = (lastOut * 0.7 + pop) * 0.5;
        } else {
          // Gentle study rain: smoothed brown noise
          lastOut = (lastOut + 0.04 * white) / 1.04;
          data[i] = lastOut * 0.35;
        }
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      // Filter for warm classic room tone
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(mode === 'fireplace' ? 650 : 850, this.ctx.currentTime);

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 1.2);

      noise.connect(filter);
      filter.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      noise.start();
      this.noiseNode = noise;
      this.isPlaying = true;
    } catch {
      // Audio playback might be restricted until user gesture; handled gracefully
      this.isPlaying = false;
    }
  }

  public setVolume(volume: number) {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.linearRampToValueAtTime(Math.max(0, Math.min(1, volume)), this.ctx.currentTime + 0.1);
    }
  }

  public stop() {
    if (this.gainNode && this.ctx) {
      try {
        this.gainNode.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.4);
      } catch {
        // ignore
      }
    }
    setTimeout(() => {
      if (this.noiseNode) {
        try {
          (this.noiseNode as AudioBufferSourceNode).stop();
          this.noiseNode.disconnect();
        } catch {
          // ignore
        }
        this.noiseNode = null;
      }
    }, 500);
    this.isPlaying = false;
  }

  public getStatus() {
    return { isPlaying: this.isPlaying, mode: this.currentMode };
  }
}

export const libraryAudio = new LibraryAudioService();
