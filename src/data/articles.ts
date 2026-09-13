import { Article, Language } from '../types';

export const ARTICLES_BY_LANG: Record<Language, Article[]> = {
  ar: [
    {
      id: 'football-art-magic',
      manuscriptNumber: 'المخطوطة الأولى • خزانة الفنون',
      shelfLocation: 'الرف الشرقي • ديوان الجسد والإيقاع والأسطورة رونالدو',
      title: 'سحر كرة القدم وفنونها: سيمفونية المستطيل الأخضر وعظمة الدون كريستيانو رونالدو',
      subtitle: 'حين يتحول العشب إلى مسرح، والكرة إلى ريشة ترسم ملاحم الشغف والانضباط البدني الإعجازي',
      category: 'فلسفة الرياضة وفنون الحركة',
      readTime: '٧ دقائق قراءة',
      dateArabic: '١٥ ربيع الأول ١٤٤٨ هـ',
      author: {
        name: 'هشام بن زبير القرطبي',
        role: 'باحث في فلسفة الجماليات والرياضة العالمية',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/ronaldo_football_pitch_1789294167336.jpg',
      imageCaption: 'الأسطورة كريستيانو رونالدو في كامل تركيزه وشغفه على المستطيل الأخضر، يجسد أسمى معاني العزيمة والانضباط البدني والاحترافية المطلقة.',
      goldFoilVerse: {
        verse: 'وربّ حركةٍ في الأرض تحسبها لعباً .. وفي طياتها سرُّ الوجودِ تدفّقا',
        poet: 'من وحي أدب الحركة والمنافسة',
      },
      leadParagraph: 'ليست كرة القدم مجرد إحدى عشر ساقاً تلاحق كرة من جلد منفوخ بالهواء، بل هي طقس إنساني كوني يختزل تراجيديات الإغريق وملاحم الفرسان، ويترجم هندسة الفضاء والوقت في تسعين دقيقة من النبض المتسارع. وفي طليعة هذا المجد الإنساني يقف الدون كريستيانو رونالدو كأيقونة حية حوّلت الإرادة إلى نحتٍ عضليٍّ متناسق، والارتقاء في الهواء إلى طيرانٍ يتحدى قوانين نيوتن.',
      sections: [
        {
          title: 'أولاً: باليه الجسد وأسطورة الانضباط عند كريستيانو رونالدو',
          content: [
            'حين يروغ اللاعب خصمه بحركة خاطفة أو يرتقي فوق المدافعين بارتفاع يفوق المترين ونصف، لا يمارس مجرد قفزة عادية؛ بل يكتب ببدنه شعراً ديناميكياً يحير علماء الفيزياء. يُعد كريستيانو رونالدو نموذجاً نادراً للإنسان الذي سخر كل دقيقة من حياته لصقل الآلة البيولوجية؛ قفزاته الرأسية الشهيرة التي يبقى فيها معلقاً في الهواء وكأنه يتحدى الجاذبية هي لوحة تشكيلية بالغة الإتقان.',
            'لقد أدرك الفيلسوف ألبير كامو، حارس المرمى الأسبق، هذا البعد الأخلاقي حين كتب: «كل ما أعرفه بيقين عن الأخلاق وواجبات الرجال، إنما أدين به لكرة القدم». واليوم، يعلمنا رونالدو أن الموهبة وحدها بذرة تموت دون ماء الانضباط الصارم، وأن العظمة تُصنع في الساعات الهادئة بعيداً عن أضواء الكاميرات.',
          ],
          subQuote: {
            text: '«الموهبة دون تفانٍ وعمل دؤوب لا تعني شيئاً؛ الإصرار على الانتصار كل يوم هو الفارق الحقيقي.»',
            source: 'كريستيانو رونالدو - مذكرات الاحتراف والبطولة',
          },
        },
        {
          title: 'ثانياً: التكتيك كشطرنج حيّ وسرعة الحسم',
          content: [
            'تطور اللعبة التكتيكي عبر العصور يماثل ارتقاء الحضارات الفكرية؛ من أسلوب "الكرة الشاملة" الهولندية إلى الضغط العالي والتحولات الخاطفة المعاصرة. في هذا النسق، يظهر المهاجم الهداف كقناص يقرأ تموجات المدافعين في أجزاء من الثانية، مقتنصاً أنصاف المساحات لتحويلها إلى أهداف حاسمة تهز قلوب الملايين في المدرجات.',
            'إن الجري بدون كرة، وتوقيت الانطلاق لكسر مصيدة التسلل، والتسديد بقوة تتجاوز مائة كيلومتر في الساعة، كلها معادلات رياضية وهندسية ينجزها العقل البشري تحت ضغط زمني هائل وصخب هادر.',
          ],
        },
        {
          title: 'ثالثاً: دراما التسعين دقيقة ووحدة المشاعر الإنسانية',
          content: [
            'ما الذي يجعل مدرجاً كاملاً يرتجف في الدقيقة التسعين؟ إنه الشغف البدائي بالانتماء، والبحث عن الخلاص الرمزي في عالم استنزفته المادية. في الملاعب تصبح الهتافات صلوات استسقاء للفرح، وتتحول المدرجات إلى لوحات فسيفسائية تتلاشى فيها الفوارق الطبقية والعرقية.',
            'وحين تطلق الصافرة احتفالاً بهدف تاريخي وتتزين الشاشات باحتفالية القفزة والدوران الشهيرة (Siuuu)، تتوحد أرجاء المعمورة في صرخة حماسية تنبض بالحياة والشغف المتجدد.',
          ],
        },
      ],
      keyInsights: [
        'كرة القدم فن درامي وحركي يعيد صياغة العلاقة بين الإرادة الفردية والعمل الجماعي.',
        'كريستيانو رونالدو يمثل ذروة الانضباط الاحترافي وتحويل الإصرار النفسي إلى إنجاز تاريخي متواصل.',
        'التكتيك الرياضي الحديث هو تطبيق عملي لهندسة الفضاء والفيزياء الحركية تحت أقصى درجات الضغط.',
      ],
      concludingThoughts: 'ستبقى كرة القدم ذلك الملاذ الروحي الذي نلجأ إليه لنتعلم أن الشغف المقرون بالعمل لا يخيب أبداً، وأن أساطير مثل رونالدو يخلدون لأنهم أثبتوا أن حدود الجسد البشري قابلة للتمدد كلما اشتعلت في القلب شعلة الطموح.',
      tags: ['كرة القدم', 'كريستيانو رونالدو', 'فلسفة الرياضة', 'تكتيك', 'الانضباط والنجاح'],
    },
    {
      id: 'istanbul-tourism-bridge',
      manuscriptNumber: 'المخطوطة الثانية • خزانة الأسفار',
      shelfLocation: 'الرف الأوسط • خزانة الشرق والغرب وديوان البوسفور',
      title: 'إسطنبول: ملتقى القارات وقِبلة الأسفار وسحر التاريخ الخالد',
      subtitle: 'رحلة بين الشرق والغرب على ضفاف البوسفور، حيث تتعانق المآذن العثمانية مع نسائم البحر العتيق',
      category: 'أدب الرحلات والمدن الخالدة',
      readTime: '٩ دقائق قراءة',
      dateArabic: '٢٠ ربيع الأول ١٤٤٨ هـ',
      author: {
        name: 'د. ليلى بنت منصور الأندلسية',
        role: 'أستاذة التاريخ العثماني ومقارنة الحضارات',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/istanbul_bosphorus_1789293824561.jpg',
      imageCaption: 'مآذن وقباب جامع أورتاكوي تتألق تحت شمس المغيب فوق مياه مضيق البوسفور، حيث تعبر السفن بين قارتي آسيا وأوروبا.',
      goldFoilVerse: {
        verse: 'لو كانتِ الدنيا بلاداً واحداً .. لكانتْ إسطنبولُ عاصمتها بلاريبِ',
        poet: 'نابليون بونابرت (في وصف حسناء البوسفور)',
      },
      leadParagraph: 'ليست إسطنبول مدينة كباقي المدن، بل هي رواية أزلية خطتها يد الزمان بحبر البوسفور الأزرق. هي المدينة الوحيدة في المعمورة التي تضع قدماً في آسيا وأخرى في أوروبا، وكأنها جسر سماوي شُيّد لتعانق فيه حضارة الشرق سكينة الغرب. في أزقتها المرصوفة بالحجارة العتيقة، تفوح رائحة القهوة العثمانية بالهيل ممزوجة بنسيم بحر مرمرة وصيحات النوارس المحلقة فوق قباب السلاطين.',
      sections: [
        {
          title: 'أولاً: عبقرية المكان وسحر مضيق البوسفور',
          content: [
            'حين تبحر العبّارة البحرية من رصيف "أمينونو" متجهة نحو الجانب الآسيوي في "كاديكوي"، يشعر المسافر وكأنه ينساب بين ضفتين من الذاكرة والخلود. على اليمين تلوح قلعة روملي حصار بحجارتها التي بناها السلطان الشاب محمد الفاتح في ثمانين يوماً، وعلى اليسار ترتفع قصور السلاطين الخشبية كأنها قوارب نجاة من زمن الأنس والأبهة.',
            'البوسفور ليس ممراً مائياً للملاحة فحسب؛ بل هو رئة المدينة وروحها، تتغير ألوانه مع تبدل الفصول، من الأزرق الفيروزي في ظهيرات الصيف إلى الرمادي الشاعري حين يلفه ضباب الشتاء.',
          ],
          subQuote: {
            text: '«في إسطنبول، لا تشاهد التاريخ في المتاحف المغلقة، بل تتنفسه في الهواء، وتمشي عليه في الأزقة، وتسمعه في رنين فناجين الشاي الخزفية.»',
            source: 'أورهان باموق - إسطنبول: الذكريات والمدينة',
          },
        },
        {
          title: 'ثانياً: آيا صوفيا والسلطان أحمد: حوار القباب والمآذن',
          content: [
            'في ساحة السلطان أحمد، يقف الزائر مبهوراً بحوارٍ معماريٍّ مهيب بين صرحين غير مسبوقين في تاريخ العمارة الدينية: آيا صوفيا بقبتها السابحة في الضوء والفسيفساء البيزنطية الذهبية، والمسجد الأزرق بمآذنه الست وبلاطه الإزنيقي البديع الذي يحاكي زرقة السماء.',
            'هنا تلتقي الأديان وتتصالح الذاكرة؛ وحين يرتفع أذان المغرب وتضاء القناديل النحاسية، تنهمر مشاعر السكينة على القلوب، وتتحول الساحة إلى ملتقى للبشر من كل لون ولغة.',
          ],
        },
        {
          title: 'ثالثاً: البازار الكبير وسحر الأسواق التراثية',
          content: [
            'في "البازار الكبير" (Grand Bazaar)، الذي يعد من أقدم وأكبر الأسواق المسقوفة في العالم، يضيع الزائر داخل شبكة تضم أكثر من ستين زقاقاً وأربعة آلاف دكان. تتراص على رفوفه أواني النحاس المطروق يدوياً، والسجاد الحريري المحبوك بنقوش كرجية وسلجوقية، وفوانيس الفسيفساء الملونة التي تلقي ظلالاً أشبه بقصص ألف ليلة وليلة.',
          ],
        },
      ],
      keyInsights: [
        'إسطنبول تمثل العاصمة الجغرافية والثقافية الأهم التي جمعت بين الحضارتين البيزنطية والعثمانية.',
        'مضيق البوسفور يمنح المدينة شخصيتها البحرية الفريدة ويجعل التنقل اليومي تجربة سياحية متكاملة.',
        'تتفرد الأسواق التاريخية بكونها متاحف حية حية تنبض بالتجارة والتقاليد الحرفية المتوارثة منذ قرون.',
      ],
      concludingThoughts: 'من زار إسطنبول مرّة، ترك قطعة من روحه في مياه البوسفور؛ فهي مدينة لا تودع زائريها بل تعدهم دائماً بلقاء جديد وذاكرة لن تشيخ أبداً.',
      tags: ['إسطنبول', 'تركيا', 'البوسفور', 'آيا صوفيا', 'أدب الرحلات', 'السياحة والتاريخ'],
    },
    {
      id: 'nasa-space-ambition',
      manuscriptNumber: 'المخطوطة الثالثة • خزانة الفلك',
      shelfLocation: 'الرف الشمالي • ديوان النجوم والمجرات وأرصاد السماء',
      title: 'ناسا وطموح البشرية نحو الفضاء: رحلة استكشاف المجهول وسبر أغوار الكون',
      subtitle: 'من هبوط أبولو على القمر إلى عيون جيمس ويب الراصدة لميلاد المجرات الأولى',
      category: 'علوم الفلك واستكشاف الكون',
      readTime: '٨ دقائق قراءة',
      dateArabic: '٢٥ ربيع الأول ١٤٤٨ هـ',
      author: {
        name: 'بروفيسور سفيان بن خلدون',
        role: 'باحث في فيزياء الفلك والمسبارات الفضائية',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/space_exploration_1789293835789.jpg',
      imageCaption: 'تلسكوب جيمس ويب الفضائي بألواحه السداسية المذهبة يعانق السديم اللوني في أعماق الكون السحيق.',
      goldFoilVerse: {
        verse: 'وفي السماءِ نجومٌ لا عِدادَ لها .. يُهدي بها اللهُ أقواماً إذا نَظروا',
        poet: 'من ديوان حكمة الفلكيين',
      },
      leadParagraph: 'منذ أن رفع الإنسان الأول بصره إلى قبة السماء المرصعة بالنجوم، لم تتوقف رغبة البشرية في فك ألغاز هذا الفراغ السرمدي المظلم. وحين تأسست وكالة الطيران والفضاء الأمريكية (ناسا) عام ١٩٥٨، لم تكن مجرد مشروع تقني للدولة، بل غدت ممثلاً لطموح النوع البشري بأكمله في كسر قيود كوكبه الأزرق والبحث عن أصول الوجود في أقاصي المجرات.',
      sections: [
        {
          title: 'أولاً: من أبولو إلى أرتميس: موطئ أقدام في الرماد القمري',
          content: [
            'في العشرين من يوليو ١٩٦٩، حين وطئت قدم نيل أرمسترونغ سطح القمر ونطق عبارته: «خطوة صغيرة لإنسان، لكنها قفزة عملاقة للبشرية»، تبدد المستحيل. كانت مهمات أبولو إنجازاً هندسياً وإنسانياً هائلاً تحقق بحواسيب بدائية لا تملك جزءاً من قوة الهاتف المحمول اليوم.',
            'واليوم، تعود ناسا عبر برنامج "أرتميس" لتبني قاعدة دائمة على القمر تمهد للقفزة الكبرى القادمة: الهبوط البشري الأول على الكوكب الأحمر، المريخ.',
          ],
          subQuote: {
            text: '«إننا نختار الذهاب إلى القمر في هذا العقد وفعل الأشياء الأخرى، ليس لأنها سهلة، بل لأنها صعبة للغاية.»',
            source: 'جون كينيدي - خطاب جامعة رايس ١٩٦٢',
          },
        },
        {
          title: 'ثانياً: تلسكوب جيمس ويب: آلة الزمن الكونية',
          content: [
            'يمثل تلسكوب جيمس ويب الفضائي (JWST) جوهرة التاج في تكنولوجيا الرصد الفلكي الحديثة. بألواحه السداسية المطلية بذرات الذهب الخالص ودرعه الحراري الضخم، يقبع على بعد ١.٥ مليون كيلومتر من الأرض ليرصد الأشعة تحت الحمراء القادمة من أقدم المجرات التي تشكلت بعد الانفجار العظيم بأقل من ثلاثمائة مليون سنة.',
            'كل صورة يلتقطها ويب ليست مجرد لقطة فوتوغرافية، بل هي رحلة بالزمن إلى الوراء لأكثر من ثلاثة عشر مليار سنة، تعرض أمامنا ولادة النجوم وغموض الثقوب السوداء الفائقة.',
          ],
        },
        {
          title: 'ثالثاً: رحلة البحث عن موطن جديد والحياة خارج الأرض',
          content: [
            'من مسبار "فوياجر" الذي عبر حدود المجموعة الشمسية حاملاً أسطوانة الذهب بأصوات وتحيات كوكب الأرض، إلى مركبات "بيرسيفيرانس" و"كيوريوسيتي" التي تجوب وديان المريخ بحثاً عن آثار مياه قديمة، تثبت ناسا أن الفضول العلمي هو أطهر وأنبل ما يميز الإنسان.',
          ],
        },
      ],
      keyInsights: [
        'استكشاف الفضاء يدفع حدود الابتكار التقني ويثمر تطبيقات طبية وبيئية تنفع البشرية على الأرض.',
        'تلسكوب جيمس ويب أعاد صياغة فهمنا لنشأة المجرات الأولى وتطور البنية الكونية.',
        'العودة إلى القمر عبر برنامج أرتميس هي المنصة الأساسية لتمهيد الطريق لرحلات المريخ المأهولة.',
      ],
      concludingThoughts: 'سيبقى الفضاء الواسع مرآة نتأمل فيها تواضعنا وعظمتنا في آنٍ واحد؛ فنحن ذرات غبار نجمي وعى ذاته وبدأ يبحث عن جذوره في أعماق السماء.',
      tags: ['ناسا', 'الفضاء', 'جيمس ويب', 'المريخ', 'أبولو', 'الفيزياء الكونية'],
    },
    {
      id: 'dubai-futuristic-architecture',
      manuscriptNumber: 'المخطوطة الرابعة • خزانة العمران',
      shelfLocation: 'الرف الغربي • ديوان الهندسة وصروح المستقبل الأيقونية',
      title: 'عمارة دبي المستقبلية: حين تُعانق الرمال السحاب وتُصاغ المعجزات الحضرية',
      subtitle: 'استكشاف برج خليفة ومتحف المستقبل ونخلة جميرا كأيقونات معمارية تتحدى قوانين المستحيل',
      category: 'فنون العمارة والهندسة الحضرية',
      readTime: '٨ دقائق قراءة',
      dateArabic: '٢٨ ربيع الأول ١٤٤٨ هـ',
      author: {
        name: 'م. طارق بن عبد الرحمن البغدادي',
        role: 'استشاري التخطيط الحضري والهندسة المعمارية',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/dubai_architecture_1789293848369.jpg',
      imageCaption: 'برج خليفة يشق عباب السحاب الذهبي متوجاً سماء دبي، ومتحف المستقبل يسطع بخطوطه العربية المنحوتة بالضوء.',
      goldFoilVerse: {
        verse: 'إن المآثرَ في البلادِ شواهدٌ .. تدلُّ على عزمِ البناةِ وسؤدَدِ',
        poet: 'من روائع شعر العمران والنهضة',
      },
      leadParagraph: 'في غضون بضعة عقود، استطاعت دبي أن تقلب مفاهيم التخطيط الحضري وتتحول من واحة ساحلية هادئة إلى مختبر عالمي للهندسة المعمارية الأكثر جرأة وابتكاراً في القرن الحادي والعشرين. هنا، لا تتبع العمارة الوظيفة فحسب، بل تصبح بياناً فلسفياً يؤكد أن الإرادة الإنسانية قادرة على تحويل كثبان الرمال إلى عاصمة تطل من المستقبل وتلهم العالم.',
      sections: [
        {
          title: 'أولاً: برج خليفة: قمة الصروح الإنسانية في عنان السماء',
          content: [
            'بارتفاع يبلغ ٨٢٨ متراً، لا يقف برج خليفة كأطول مبنى شيده الإنسان فحسب، بل كإنجاز هندسي فذ استلهم تصميمه المعماري أدريان سميث من زهرة الهيمينوكاليس الصحراوية. قاعدته الثلاثية الفروع ونواته الخرسانية السداسية صُممت لمقاومة دوامات الرياح العاتية في الطبقات العليا من الغلاف الجوي.',
            'إن مشاهدة الغروب مرتين في نفس اليوم من قاعدة البرج ثم من قمته عبر مصاعد تنطلق بسرعة عشرة أمتار في الثانية، تمنح الزائر إحساساً حقيقياً بالتحليق خارج حدود الزمان والمكان.',
          ],
          subQuote: {
            text: '«المستقبل لا ينتظر المترددين، ومن يريد أن يصنع التاريخ عليه أن يمتلك الجرأة لسباق الزمن.»',
            source: 'صاحب السمو الشيخ محمد بن راشد آل مكتوم - ومضات من فكر',
          },
        },
        {
          title: 'ثانياً: متحف المستقبل: أعجوبة هندسية دون أعمدة',
          content: [
            'وصفته الأوساط الهندسية العالمية بأنه "أجمل مبنى على وجه الأرض". يتميز شكله الحلقي الأنبوبي (Torus) بأنه شُيّد بالكامل دون عمود داخلي واحد، وتزدان واجهته الفولاذية المكونة من ١٠٢٤ قطعة بأبيات شعرية كُتبت بخط الثلث العربي الأصيل صاغها الفنان مطر بن لاحج وتضيء ليلاً بنور فتان.',
            'إنه ليس متحفاً للماضي بل بوابة لما بعد خمسين عاماً، يدمج الذكاء الاصطناعي والاستدامة البيئية في تجربة حسية غامرة.',
          ],
        },
        {
          title: 'ثالثاً: نخلة جميرا والاستدامة الذكية: إعادة تشكيل السواحل',
          content: [
            'تُعد جزيرة نخلة جميرا الاصطناعية أكبر مشروع استصلاح بحري شهده العالم، حيث استُخدمت ملايين الأطنان من الصخور والرمال دون ذرة خرسانة واحدة في الهيكل الأساسي كاسر الأمواج، مشكّلة نخلة خضراء تسبح في الخليج العربي يمكن رؤيتها بوضوح من الفضاء الخارجي.',
            'واليوم تتجه المدينة بقوة نحو الطاقة المتجددة من خلال مجمع محمد بن راشد للطاقة الشمسية، والتنقل الذاتي، والمباني خالية الكربون.',
          ],
        },
      ],
      keyInsights: [
        'دبي نجحت في جعل العمارة محركاً رئيسياً للهوية الاقتصادية والسياحية العالمية.',
        'متحف المستقبل يمثل نموذجاً ثورياً في توظيف التراث الخطي العربي مع أحدث تقنيات التصميم البارامتري.',
        'المدينة تشهد تحولاً استراتيجياً نحو الاستدامة البيئية والمباني الذكية الصديقة للمناخ.',
      ],
      concludingThoughts: 'تقف دبي اليوم دليلاً ساطعاً على أن العمارة ليست مجرد قوالب إسمنتية وزجاجية، بل هي أحلام أمة آمنت بأن لا شيء مستحيل إذا ما تسلحت بالعلم والعزيمة ورؤية المستقبل الواعدة.',
      tags: ['دبي', 'برج خليفة', 'متحف المستقبل', 'العمارة المعاصرة', 'الهندسة والابتكار', 'الاستدامة'],
    },
  ],
  en: [
    {
      id: 'football-art-magic',
      manuscriptNumber: 'Manuscript I • Gallery of Kinetic Arts',
      shelfLocation: 'Eastern Shelf • Codex of Rhythm, Mastery & Cristiano Ronaldo',
      title: 'The Art & Magic of Football: A Symphony on Green Turf and the Glory of Cristiano Ronaldo',
      subtitle: 'Where lush grass becomes a grand amphitheater, and unyielding discipline sculpts legendary athletic immortality',
      category: 'Philosophy of Sport & Athletic Beauty',
      readTime: '7 min read',
      dateArabic: 'Autumn Edition • Royal Scribe Registry',
      author: {
        name: 'Hisham Al-Qurtubi',
        role: 'Scholar of Global Sport Aesthetics & Athletic Philosophy',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/ronaldo_football_pitch_1789294167336.jpg',
      imageCaption: 'The legend Cristiano Ronaldo in supreme athletic focus upon the pitch, embodying the utmost heights of discipline, aerial majesty, and relentless winning drive.',
      goldFoilVerse: {
        verse: 'What mortals deem as mere recreational play, holds within its cadence the very secret of relentless will.',
        poet: 'Ancient Maxim of Chivalric Contests',
      },
      leadParagraph: 'Football is never merely twenty-two players chasing a sphere of stitched leather; it is a universal human ritual compressing Greek tragedy, heroic epics, and fluid spatial geometry into ninety breathless minutes. At the absolute vanguard of this sporting majesty stands Cristiano Ronaldo—an athletic colossus who transformed sheer willpower into sculptured perfection, elevating aerial leaps into gravity-defying masterstrokes.',
      sections: [
        {
          title: 'I. The Ballet of Form and Cristiano Ronaldo’s Relentless Discipline',
          content: [
            'When a player glides past a challenger or leaps two and a half meters into the air, suspended as though physics has halted, it is dynamic poetry etched in muscle and nerve. Cristiano Ronaldo stands as the supreme archetype of an athlete who dedicated every breath to refining the human biological instrument. His iconic soaring headers, hovering in mid-air above backlines, belong alongside classical sculpture in their poise and execution.',
            'Albert Camus, former goalkeeper and Nobel laureate, famously wrote: "All that I know most surely about morality and the obligations of men, I owe it to football." Ronaldo exemplifies this ethos: natural talent is but a seed; only the unyielding water of daily sacrifice and monastic discipline turns it into timeless greatness.',
          ],
          subQuote: {
            text: '«Talent without dedicated daily toil is nothing; the relentless hunger to conquer every challenge is the true divine spark.»',
            source: 'Cristiano Ronaldo - Chronicles of Victory and Legacy',
          },
        },
        {
          title: 'II. Spatial Chess on an Emerald Board',
          content: [
            'Tactical evolution across decades mirrors the intellectual rise of civilizations—from Dutch Total Football erasing positional boundaries to modern razor-sharp transitions and high-press symphonies. Within this tapestry, the master striker operates as a chess grandmaster, calculating defensive currents in fractions of a second.',
            'Curving a ball around defensive walls at over one hundred kilometers per hour is an instinctual calculation of calculus and aerodynamics executed under deafening stadium thunder.',
          ],
        },
        {
          title: 'III. The 90-Minute Human Drama and Global Unity',
          content: [
            'What causes millions of souls across continents to erupt simultaneously in the 94th minute? It is the primal yearning for communion and triumph in an often monotonous world. In stadiums, songs become collective hymns of celebration where barriers of language and origin dissolve.',
            'When the final whistle sounds and the world resounds with Ronaldo’s triumphant turn and cry of "Siuuu", humanity celebrates not just a sport, but the sheer ecstasy of human potential realized.',
          ],
        },
      ],
      keyInsights: [
        'Football bridges primal emotion and high cerebral geometry across cultures and generations.',
        'Cristiano Ronaldo embodies the ultimate triumph of relentless work ethic and mental fortitude over human limits.',
        'Contemporary tactical schemes operate as live spatial algorithms executed under high pressure.',
      ],
      concludingThoughts: 'Football remains our weekly sacred theater, reminding us that hope flickers until the final whistle blows, and that legends like Ronaldo endure because they proved that the boundaries of human excellence are made to be transcended.',
      tags: ['Football', 'Cristiano Ronaldo', 'Sports Philosophy', 'Tactics', 'Human Excellence'],
    },
    {
      id: 'istanbul-tourism-bridge',
      manuscriptNumber: 'Manuscript II • Gallery of Grand Voyages',
      shelfLocation: 'Central Shelf • Codex of the Bosphorus & Continental Crossroads',
      title: 'Istanbul: Crossroads of Continents, Eternal Spires & the Magic of the Bosphorus',
      subtitle: 'A journey along the legendary strait where Byzantine grandeur, Ottoman splendor, and sea breezes unite',
      category: 'Travel Literature & Historic Cities',
      readTime: '9 min read',
      dateArabic: 'Autumn Edition • Royal Scribe Registry',
      author: {
        name: 'Dr. Layla Al-Andalusi',
        role: 'Professor of Mediterranean Heritage and Ottoman Studies',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/istanbul_bosphorus_1789293824561.jpg',
      imageCaption: 'The graceful minarets and domes of Ortaköy Mosque bathed in golden twilight along the Bosphorus, where ships glide between Europe and Asia.',
      goldFoilVerse: {
        verse: 'If the Earth were a single state, Istanbul would be its rightful imperial capital.',
        poet: 'Napoleon Bonaparte (On the Queen of Cities)',
      },
      leadParagraph: 'Istanbul is not merely a city; it is an epic novel inscribed by centuries with the deep azure ink of the Bosphorus. It is the only metropolis on Earth spanning two continents, planting one foot in Europe and the other in Asia, like a celestial bridge where Western cadence embraces Eastern tranquility. Through its cobblestone alleys, the aroma of cardamom-infused Turkish coffee weaves with salty sea mist and the cries of gulls circling imperial domes.',
      sections: [
        {
          title: 'I. The Genius of Place & the Bosphorus Strait',
          content: [
            'As the ferry departs the wooden docks of Eminönü toward the Asian shores of Kadıköy, travelers glide between two banks of living memory. On one flank rises the fortress of Rumelihisarı, built by young Sultan Mehmed in just eighty days; on the other, pastel-hued wooden yalı mansions stand as serene guardians of a bygone courtly elegance.',
            'The Bosphorus is not merely a maritime conduit; it is the beating heart of Istanbul, its waters shifting from sapphire blue in midsummer to poetic slate gray amidst winter fogs.',
          ],
          subQuote: {
            text: '«In Istanbul, history is not preserved in sterile museums; you inhale it in the salty air, tread upon it in courtyards, and hear it in the clatter of tulip-shaped tea glasses.»',
            source: 'Orhan Pamuk - Istanbul: Memories and the City',
          },
        },
        {
          title: 'II. Hagia Sophia and the Blue Mosque: An Architectural Dialogue',
          content: [
            'Standing in Sultanahmet Square, one is held captive by an ethereal dialogue between two masterworks of religious architecture. Hagia Sophia, with its floating golden dome and Byzantine mosaics, gazes across gardens at the Blue Mosque, crowned with six minarets and twenty thousand Iznik tiles echoing the sky.',
            'When the dusk call to prayer echoes over the marble fountains, quietude descends upon travelers from every corner of the globe.',
          ],
        },
        {
          title: 'III. The Grand Bazaar: A Labyrinth of Ancient Craftsmanship',
          content: [
            'Inside the Grand Bazaar—one of the world\'s oldest covered markets—one enters a vaulted city of sixty streets and four thousand shops. Hand-hammered copper vessels, silk carpets woven with Seljuk motifs, and stained mosaic lanterns cast kaleidoscopic shadows worthy of Arabian Nights.',
          ],
        },
      ],
      keyInsights: [
        'Istanbul represents the paramount geopolitical and cultural nexus connecting European and Asian histories.',
        'The Bosphorus strait gives the city its maritime rhythm, transforming daily transport into scenic journeys.',
        'Living historic bazaars preserve centuries of artisanal heritage, guild tradition, and cross-cultural trade.',
      ],
      concludingThoughts: 'Whoever sets foot in Istanbul leaves a fragment of their soul along the shores of the Golden Horn; it is a city that never bids farewell, but forever whispers a promise of return.',
      tags: ['Istanbul', 'Turkey', 'Bosphorus', 'Hagia Sophia', 'Travel Literature', 'History'],
    },
    {
      id: 'nasa-space-ambition',
      manuscriptNumber: 'Manuscript III • Gallery of Celestial Sciences',
      shelfLocation: 'Northern Shelf • Codex of Observatories, Nebulae & Deep Cosmos',
      title: 'NASA & Humanity\'s Cosmic Quest: Venturing into the Unknown Depths of Space',
      subtitle: 'From Apollo\'s first footprints in lunar dust to the James Webb peering into the dawn of the universe',
      category: 'Astrophysics & Deep Space Exploration',
      readTime: '8 min read',
      dateArabic: 'Autumn Edition • Royal Scribe Registry',
      author: {
        name: 'Prof. Sufyan Ibn Khaldun',
        role: 'Senior Astrophysicist & Space Mission Analyst',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/space_exploration_1789293835789.jpg',
      imageCaption: 'The James Webb Space Telescope with its gold-plated hexagonal beryllium mirrors gleaming against deep cosmic nebulae.',
      goldFoilVerse: {
        verse: 'Countless are the stars across the velvet skies, beacons by which curious minds chart the voyage of existence.',
        poet: 'From the Astronomers\' Codex',
      },
      leadParagraph: 'Ever since our ancestors first raised their eyes to the star-dusted night sky, humanity has harbored an inextinguishable hunger to comprehend the cosmic abyss. When NASA was established in 1958, it was not merely an agency of engineering; it became the standard-bearer for our species’ quest to transcend our cradle and seek our origins among the distant stars.',
      sections: [
        {
          title: 'I. From Apollo to Artemis: Footsteps in the Lunar Ash',
          content: [
            'On July 20, 1969, when Neil Armstrong took his initial step onto lunar soil and uttered the words: "That\'s one small step for man, one giant leap for mankind," the impossible crumbled into reality. The Apollo landings were achieved with computational power that pales in comparison to the smartphone in your pocket today.',
            'Now, through the Artemis program, NASA is returning to the Moon to construct permanent bases, forging the gateway to humanity’s next giant leap: crewed missions to Mars.',
          ],
          subQuote: {
            text: '«We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.»',
            source: 'John F. Kennedy - Rice University Address, 1962',
          },
        },
        {
          title: 'II. The James Webb Telescope: Cosmic Time Machine',
          content: [
            'Orbiting 1.5 million kilometers from Earth at Lagrange Point 2, the James Webb Space Telescope (JWST) is the pinnacle of astronomical observation. Its eighteen beryllium-gold hexagonal mirrors capture infrared photons that began their journey over 13.5 billion years ago, just after the Big Bang.',
            'Every composite image released is not merely a photograph; it is an expedition backward through deep time, revealing primordial galaxies and the atmospheric chemistry of distant exoplanets.',
          ],
        },
        {
          title: 'III. Seeking New Earths and Cosmic Life',
          content: [
            'From Voyager 1 crossing the heliopause into interstellar space—carrying the Golden Record with the greetings and music of Earth—to the Perseverance rover drilling Martian lakebeds for biosignatures, NASA reaffirms that scientific curiosity is the purest expression of the human spirit.',
          ],
        },
      ],
      keyInsights: [
        'Space exploration yields vital technological, medical, and environmental spin-offs benefiting life on Earth.',
        'The James Webb Space Telescope revolutionized astrophysics by capturing light from the universe\'s earliest eras.',
        'The lunar Artemis missions establish the orbital infrastructure necessary for interplanetary journeys to Mars.',
      ],
      concludingThoughts: 'The vastness of space remains the ultimate mirror of our shared human condition: we are stardust brought to consciousness, gazing back into the celestial furnace whence we came.',
      tags: ['NASA', 'Space Exploration', 'James Webb', 'Mars', 'Apollo', 'Astrophysics'],
    },
    {
      id: 'dubai-futuristic-architecture',
      manuscriptNumber: 'Manuscript IV • Gallery of Civic Wonders',
      shelfLocation: 'Western Shelf • Codex of Modern Engineering & Visionary Megastructures',
      title: 'Dubai\'s Futuristic Architecture: Where Desert Sands Touch the Clouds in Urban Triumph',
      subtitle: 'Exploring the Burj Khalifa, Museum of the Future, and Palm Jumeirah as marvels of design that defy gravity',
      category: 'Contemporary Architecture & Urban Innovation',
      readTime: '8 min read',
      dateArabic: 'Autumn Edition • Royal Scribe Registry',
      author: {
        name: 'Eng. Tariq Al-Baghdadi',
        role: 'Principal Urban Design Consultant & Architectural Historian',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/dubai_architecture_1789293848369.jpg',
      imageCaption: 'Burj Khalifa soaring through golden clouds above Dubai\'s skyline, while the Museum of the Future gleams with illuminated Arabic calligraphy.',
      goldFoilVerse: {
        verse: 'Noble monuments upon the land stand as eternal witnesses to the boundless ambition and valor of their builders.',
        poet: 'Ode to Architectural Feats',
      },
      leadParagraph: 'In just a few audacious decades, Dubai transformed the doctrines of modern urban planning. Emerging from a tranquil coastal trading oasis, it created a living global laboratory for the boldest architecture of the twenty-first century. Here, form does not merely follow function; architecture becomes a philosophical testament proving that visionary leadership can turn desert dunes into a beacon of tomorrow.',
      sections: [
        {
          title: 'I. Burj Khalifa: The Crown Jewel of Human Heights',
          content: [
            'Rising 828 meters above the Arabian Gulf, the Burj Khalifa is not merely the world\'s tallest structure; it is an engineering marvel designed by Adrian Smith, inspired by the regional desert flower Hymenocallis. Its tripartite Y-shaped footprint and buttressed core neutralize the violent wind vortices of the upper atmosphere.',
            'Ascending at ten meters per second, visitors can witness the sun set over the horizon twice on the same evening—first from the base, and moments later from the observation deck high above the clouds.',
          ],
          subQuote: {
            text: '«The future belongs to those who can imagine it, design it, and execute it. It does not wait for the hesitant.»',
            source: 'H.H. Sheikh Mohammed bin Rashid Al Maktoum - Flashes of Thought',
          },
        },
        {
          title: 'II. Museum of the Future: The Columnless Torus Marvel',
          content: [
            'Hailed across international design circles as "the most beautiful building on Earth", the Museum of the Future stands without a single interior load-bearing column. Its gleaming stainless-steel facade, composed of 1,024 bespoke panels, is carved with Arabic calligraphy penned by artist Mattar bin Lahej that glows with ethereal luminescence at night.',
            'It serves not as an archive of the past, but an active incubator of future technologies, quantum computing, and bio-engineered habitats.',
          ],
        },
        {
          title: 'III. Palm Jumeirah & Sustainable Urban Living',
          content: [
            'The artificial archipelago of Palm Jumeirah represents the largest maritime land-reclamation initiative in human history, formed with millions of tons of natural stone and seabed sand without a single grain of steel reinforcing in its breakwater foundation.',
            'Today, Dubai pairs these monumental feats with eco-conscious masterplans: solar megaprojects, autonomous transit, and green net-zero energy districts.',
          ],
        },
      ],
      keyInsights: [
        'Dubai pioneered architectural tourism as a primary economic engine and cultural statement.',
        'The Museum of the Future harmonizes classical Arabic calligraphy with cutting-edge parametric design.',
        'Next-generation projects pivot decisively toward green energy, desert agriculture, and climate-resilient engineering.',
      ],
      concludingThoughts: 'Dubai proves that modern architecture is far more than glass, steel, and concrete; it is the physical realization of a society that believes no dream is too grand when guided by science, perseverance, and vision.',
      tags: ['Dubai', 'Burj Khalifa', 'Museum of the Future', 'Architecture', 'Urban Innovation', 'Sustainability'],
    },
  ],
  tr: [
    {
      id: 'football-art-magic',
      manuscriptNumber: 'Yazma I • Beden Sanatları Galerisi',
      shelfLocation: 'Doğu Rafı • Ritim, Ustalık ve Cristiano Ronaldo Divanı',
      title: 'Futbolun Büyüsü ve Sanatı: Yeşil Sahada Bir Senfoni ve Cristiano Ronaldo\'nun Mirası',
      subtitle: 'Çimin bir tiyatroya, topun ise fırçaya dönüştüğü yerde azim ve estetik buluşuyor',
      category: 'Spor Felsefesi ve Hareket Estetiği',
      readTime: '7 dk okuma',
      dateArabic: 'Güz Cildi • Saray Yazıcıları Kaydı',
      author: {
        name: 'Hişam bin Zübeyr El-Kurtubi',
        role: 'Küresel Spor Estetiği ve Felsefesi Araştırmacısı',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/ronaldo_football_pitch_1789294167336.jpg',
      imageCaption: 'Efsane Cristiano Ronaldo yeşil sahada mutlak odaklanma ve ihtişam içinde; sarsılmaz disiplinin, havada asılı kalan sıçrayışların ve zafer arzusunun timsali.',
      goldFoilVerse: {
        verse: 'Fani gözlerin sadece bir oyun sandığı bu ahenk, içinde insan iradesinin en yüce sırrını saklar.',
        poet: 'Kadim Er Meydanı Şiirlerinden',
      },
      leadParagraph: 'Futbol asla sadece hava dolu meşin yuvarlağın peşinden koşan yirmi iki ayaktan ibaret değildir. O, Antik Yunan trajedilerini, şövalye destanlarını ve uzamsal geometriyi doksan dakikalık soluksuz bir nabızda buluşturan evrensel bir insan ritüelidir. Bu görkemli sahnenin öncüsü ise iradeyi kusursuz bir heykele dönüştüren, yerçekimine meydan okuyan sıçrayışlarıyla efsaneleşen Cristiano Ronaldo\'dur.',
      sections: [
        {
          title: 'I. Beden Balesi ve Cristiano Ronaldo\'nun Sarsılmaz Disiplini',
          content: [
            'Bir futbolcu rakibini zarif bir çalımla geçtiğinde veya iki buçuk metreyi aşan bir sıçrayışla havada asılı kaldığında, yalnızca fiziksel bir hareket yapmaz; kaslarıyla dinamik bir şiir yazar. Cristiano Ronaldo, biyolojik mekanizmasını mükemmelleştirmeye adanmış bir sporcu dehasının zirvesidir. Savunmaların üzerinden havada adeta duraksayarak yaptığı kafa vuruşları, birer heykeltıraşlık şaheseridir.',
            'Cezayir asıllı filozof ve eski kaleci Albert Camus şöyle demiştir: «Ahlak ve insanın görevleri hakkında kesin olarak bildiğim ne varsa, hepsini futbola borçluyum.» Ronaldo bu ahlakın canlı örneğidir: Yetenek tek başına solup giden bir tohumdur; ona can veren ise her gün sessizce dökülen ter ve tavizsiz disiplindir.',
          ],
          subQuote: {
            text: '«Adanmışlık ve alın teri olmadan yetenek bir hiçtir; her gün yeniden kazanma arzusu ise gerçek farkı yaratır.»',
            source: 'Cristiano Ronaldo - Zafer ve Profesyonellik Hatıratı',
          },
        },
        {
          title: 'II. Zümrüt Zemin Üzerinde Canlı Satranç',
          content: [
            'Oyunun taktiksel evrimi, insanlık düşüncesinin yükselişine benzer; Hollanda Total Futbolu\'ndan günümüzün yıldırım hızındaki geçiş hücumlarına kadar her sistem mekânın yeniden yorumlanmasıdır. Burada forvet oyuncusu, savunma hatlarındaki en ufak boşlukları saliseler içinde sezen bir satranç ustası gibi hareket eder.',
            'Topun havada Magnus etkisiyle kavis alarak kalenin doksan tabir edilen köşesine çarpması, diferansiyel hesap ile estetiğin sahadaki nikâhıdır.',
          ],
        },
        {
          title: 'III. Doksan Dakikalık İnsan Dramı ve Ortak Coşku',
          content: [
            'Doksanıncı dakikada atılan bir golle binlerce insanı aynı anda gözyaşlarına ve sevince boğan duygu nedir? Monotonlaşan dünyada saf bir aidiyet ve zafer arayışıdır. Tribünlerdeki tezahüratlar sevinç dualarına dönüşür, sınıf ve köken farkları silinip gider.',
            'Hakemin bitiş düdüğüyle birlikte stadyumu inleten Ronaldo\'nun meşhur "Siuuu" haykırışı, tüm dünyada insan azminin ve coşkusunun ortak kutlaması haline gelir.',
          ],
        },
      ],
      keyInsights: [
        'Futbol, kitleleri birleştiren, bireysel deha ile kolektif uyumu harmanlayan evrensel bir sahne sanatıdır.',
        'Cristiano Ronaldo, profesyonel adanmışlığın ve psikolojik kararlılığın tarihteki en büyük temsilcilerindendir.',
        'Modern taktik sistemler, yüksek baskı altında mekân ve zamanın en verimli kullanımını hedefler.',
      ],
      concludingThoughts: 'Futbol, umudun son düdüğe kadar asla tükenmediğini fısıldayan manevi bir sığınak olmaya devam edecektir. Ronaldo gibi efsaneler ise insan bedeninin ve iradesinin sınırlarının aşılabileceğini kanıtladıkları için unutulmaz kalacaktır.',
      tags: ['Futbol', 'Cristiano Ronaldo', 'Spor Felsefesi', 'Taktik', 'Disiplin ve Başarı'],
    },
    {
      id: 'istanbul-tourism-bridge',
      manuscriptNumber: 'Yazma II • Büyük Seyahatler Galerisi',
      shelfLocation: 'Orta Raf • Boğaziçi ve Kıtalararası Kavşak Divanı',
      title: 'İstanbul: Kıtaların Kavşağı, Ölümsüz Kubbeler ve Boğaz\'ın Büyüsü',
      subtitle: 'Boğaz kıyılarında Doğu ile Batı\'nın, Osmanlı zarafeti ile kadim deniz rüzgarlarının kucaklaşması',
      category: 'Seyahat Edebiyatı ve Tarihi Şehirler',
      readTime: '9 dk okuma',
      dateArabic: 'Güz Cildi • Saray Yazıcıları Kaydı',
      author: {
        name: 'Dr. Leyla El-Endülüsi',
        role: 'Osmanlı Tarihi ve Akdeniz Medeniyetleri Uzmanı',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/istanbul_bosphorus_1789293824561.jpg',
      imageCaption: 'Ortaköy Camii\'nin zarif kubbe ve minareleri, Asya ile Avrupa arasında gemilerin süzüldüğü Boğaziçi\'nin altın günbatımı ışığında parıldıyor.',
      goldFoilVerse: {
        verse: 'Dünya tek bir ülke olsaydı, şüphesiz başkenti İstanbul olurdu.',
        poet: 'Napolyon Bonapart (Boğaz\'ın İncisi Hakkında)',
      },
      leadParagraph: 'İstanbul alelade bir şehir değildir; zamanın bizzat Boğaz\'ın lacivert mürekkebiyle yazdığı ölümsüz bir romandır. Bir ayağını Asya\'ya, diğerini Avrupa\'ya basan yeryüzündeki tek metropoldür. Arnavut kaldırımlı kadim sokaklarında kakuleli Türk kahvesinin kokusu, Marmara\'nın tuzlu meltemi ve sultan camilerinin kubbeleri üzerinde süzülen martıların sesleriyle harmanlanır.',
      sections: [
        {
          title: 'I. Mekânın Dehası ve Boğaziçi\'nin Efsunu',
          content: [
            'Eminönü iskelesinden kalkan bir vapurla Kadıköy\'e doğru süzülürken, yolcu iki hatıra kıyısı arasında aktığını hisseder. Bir yanda genç Fatih Sultan Mehmed\'in seksen günde inşa ettirdiği Rumeli Hisarı\'nın kudretli taşları, diğer yanda asırlık ahşap yalılar geçmişin zarafetini fısıldar.',
            'Boğaz sadece bir su yolu değil, şehrin nefes alan ruhudur; mevsimlerle rengi değişir, yaz günleri firuzeye, kış puslarında ise hüzünlü kurşuniye bürünür.',
          ],
          subQuote: {
            text: '«İstanbul\'da tarih kapalı müzelerde sergilenmez; onu havada solur, sokaklarında yürür, ince belli çay bardaklarının sesinde dinlersiniz.»',
            source: 'Orhan Pamuk - İstanbul: Hatıralar ve Şehir',
          },
        },
        {
          title: 'II. Ayasofya ve Sultanahmet: Kutsal Kubbelerin Diyaloğu',
          content: [
            'Sultanahmet Meydanı\'nda duran bir gezgin, mimarlık tarihinin iki şaheseri arasındaki ebedi diyaloğa şahit olur: Işıkla yıkanan altın mozaikli kubbesiyle Ayasofya ve karşısında gökyüzünün mavisini kıskandıran çinileri ve altı minaresiyle Sultanahmet Camii.',
            'Akşam ezanı yankılanıp kandiller yandığında, dünyanın dört bir yanından gelen insanların kalbine aynı derin huzur dökülür.',
          ],
        },
        {
          title: 'III. Kapalıçarşı: Kadim Zanaatkârların Labirenti',
          content: [
            'Dünyanın en eski ve en büyük çarşılarından biri olan Kapalıçarşı\'da, altmış sokak ve dört bin dükkândan oluşan büyüleyici bir labirent uzanır. Dövme bakır kaplar, el dokuması ipek halılar ve rengarenk mozaik lambalar, Binbir Gece Masalları\'nı aratmayan bir atmosfer yaratır.',
          ],
        },
      ],
      keyInsights: [
        'İstanbul, Doğu ile Batı medeniyetlerini hem coğrafi hem de kültürel olarak birbirine bağlayan eşsiz bir merkezdir.',
        'Boğaziçi, şehrin denizci karakterini belirler ve günlük ulaşımı bile benzersiz bir seyir zevkine dönüştürür.',
        'Tarihi çarşılar, yüzyıllardır süregelen zanaat geleneklerinin ve ticaret ahlakının yaşayan abideleridir.',
      ],
      concludingThoughts: 'İstanbul\'a bir kez ayak basan, ruhunun bir parçasını Boğaz\'ın serin sularında bırakır; zira o şehir kimseye veda etmez, yalnızca daima yeniden buluşmayı vadeder.',
      tags: ['İstanbul', 'Türkiye', 'Boğaziçi', 'Ayasofya', 'Seyahat Edebiyatı', 'Tarih ve Kültür'],
    },
    {
      id: 'nasa-space-ambition',
      manuscriptNumber: 'Yazma III • Gökbilim Galerisi',
      shelfLocation: 'Kuzey Rafı • Yıldızlar, Nebulalar ve Derin Uzay Divanı',
      title: 'NASA ve İnsanlığın Uzay Tutkusu: Bilinmeyene Yolculuk ve Kozmik Sırlar',
      subtitle: 'Ay\'a ilk adımdan James Webb\'in evrenin ilk ışıklarını yakalayan gözlerine uzanan serüven',
      category: 'Astrofizik ve Derin Uzay Araştırmaları',
      readTime: '8 dk okuma',
      dateArabic: 'Güz Cildi • Saray Yazıcıları Kaydı',
      author: {
        name: 'Prof. Süfyan İbn Haldun',
        role: 'Astrofizikçi ve Uzay Araştırmaları Uzmanı',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/space_exploration_1789293835789.jpg',
      imageCaption: 'James Webb Uzay Teleskobu\'nun saf altın kaplama altıgen berilyum aynaları, derin uzayın renkli nebulalarına karşı parlıyor.',
      goldFoilVerse: {
        verse: 'Gökyüzünde sayısız yıldızlar parlar; tefekkür eden akıllar onlarla varoluşun yolunu bulur.',
        poet: 'Müneccimbaşı Divanı\'ndan',
      },
      leadParagraph: 'İlk insan gökyüzünün yıldızlarla bezeli kubbesine baktığı andan itibaren, insanlık bu karanlık sonsuzluğun sırlarını çözme arzusundan hiç vazgeçmedi. 1958\'de Amerikan Havacılık ve Uzay Dairesi (NASA) kurulduğunda, bu sadece bir devlet projesi değil; tüm insan türünün mavi gezegenin sınırlarını aşıp köklerini arama cüretinin simgesiydi.',
      sections: [
        {
          title: 'I. Apollo\'dan Artemis\'e: Ay Tozundaki İlk Ayak İzleri',
          content: [
            '20 Temmuz 1969\'da Neil Armstrong Ay yüzeyine basıp «İnsan için küçük, insanlık için dev bir adım» sözlerini söylediğinde imkânsız kelimesi tarihe karıştı. Apollo görevleri, bugünkü sıradan bir cep telefonunun gücüne bile sahip olmayan ilkel bilgisayarlarla başarılmış bir mühendislik zaferiydi.',
            'Bugün NASA, Artemis programı ile Ay\'da kalıcı üsler kurmak ve oradan kızıl gezegen Mars\'a insanlı ilk yolculuğu başlatmak üzere yeniden hazırlanıyor.',
          ],
          subQuote: {
            text: '«Bu on yıl içinde Ay\'a gitmeyi ve diğer zorlukları aşmayı kolay oldukları için değil, tam tersine son derece çetin oldukları için seçiyoruz.»',
            source: 'John F. Kennedy - Rice Üniversitesi Konuşması, 1962',
          },
        },
        {
          title: 'II. James Webb Teleskobu: Kozmik Zaman Makinesi',
          content: [
            'Dünya\'dan 1.5 milyon kilometre ötede konuşlanan James Webb Uzay Teleskobu (JWST), astronomi tarihinin taç mücevheridir. Saf altın kaplamalı berilyum aynaları, Büyük Patlama\'dan hemen sonra doğan ilk galaksilerden gelen kızılötesi ışığı yakalar.',
            'Webb\'in çektiği her bir kare, yalnızca bir fotoğraf değil; evrenin on üç milyar yıl önceki bebeklik çağlarına yapılan büyülü bir zaman yolculuğudur.',
          ],
        },
        {
          title: 'III. Yeni Yaşam ve Evrenin Derinlikleri',
          content: [
            'Güneş Sistemi\'nin dışına çıkıp yıldızlararası boşluğa ulaşan Voyager 1\'in taşıdığı altın plaktan, Mars kraterlerinde su ve yaşam izi arayan Perseverance aracına kadar her görev, insan merakının en soylu erdem olduğunu gösterir.',
          ],
        },
      ],
      keyInsights: [
        'Uzay araştırmaları tıp, malzeme bilimi ve yapay zekâ alanlarında yeryüzündeki yaşama doğrudan fayda sağlayan teknolojiler üretir.',
        'James Webb Teleskobu, ilk galaksilerin ve ötegezegen atmosferlerinin anlaşılmasında devrim yaratmıştır.',
        'Artemis Ay programı, Mars yolculuğu için gerekli olan kalıcı istasyonların temellerini atmaktadır.',
      ],
      concludingThoughts: 'Göklerin sonsuzluğu bize hem ne kadar küçük olduğumuzu hem de merakımız sayesinde ne denli yüce ufuklara uzanabileceğimizi hatırlatan en berrak aynadır.',
      tags: ['NASA', 'Uzay', 'James Webb', 'Mars', 'Apollo', 'Astrofizik ve Bilim'],
    },
    {
      id: 'dubai-futuristic-architecture',
      manuscriptNumber: 'Yazma IV • Kentsel Harikalar Galerisi',
      shelfLocation: 'Batı Rafı • Modern Mühendislik ve Fütüristik Mimari Divanı',
      title: 'Dubai\'nin Fütüristik Mimarisi: Çöl Kumlarının Bulutlarla Buluştuğu Kentsel Mucize',
      subtitle: 'İmkânsızın sınırlarını zorlayan Burç Halife, Gelecek Müzesi ve Palmiye Adaları',
      category: 'Çağdaş Mimari ve Kentsel Yenilik',
      readTime: '8 dk okuma',
      dateArabic: 'Güz Cildi • Saray Yazıcıları Kaydı',
      author: {
        name: 'Müh. Tarık El-Bağdadi',
        role: 'Kentsel Tasarım Danışmanı ve Mimarlık Tarihçisi',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
      },
      image: '/src/assets/images/dubai_architecture_1789293848369.jpg',
      imageCaption: 'Burç Halife Dubai semalarında altın bulutları delip geçerken, Gelecek Müzesi ışık saçan Arap hat sanatıyla parıldıyor.',
      goldFoilVerse: {
        verse: 'Yeryüzündeki azametli eserler, onları inşa edenlerin sarsılmaz azmine ve yüce gayesine şahittir.',
        poet: 'İmar ve Medeniyet Destanlarından',
      },
      leadParagraph: 'Birkaç on yıl gibi kısa bir sürede Dubai, modern şehirciliğin bütün kurallarını yeniden yazdı. Sakin bir sahil kasabasından, yirmi birinci yüzyılın en cüretkâr mimari deney laboratuvarına dönüştü. Burada mimarlık sadece işleve tabi değildir; insan iradesinin çöl kumlarını bile geleceğin başkentine dönüştürebileceğini haykıran felsefi bir bildiridir.',
      sections: [
        {
          title: 'I. Burç Halife: İnsanlığın Göğe Ulaşan Zirvesi',
          content: [
            '828 metre yüksekliğiyle Burç Halife, sadece dünyanın en yüksek yapısı değil, aynı zamanda çöl çiçeği Hymenocallis\'ten ilham alan bir mühendislik harikasıdır. Üç kanatlı taban yapısı ve altıgen beton çekirdeği, atmosferin üst katmanlarındaki sert rüzgâr girdaplarını sönümleyecek biçimde tasarlanmıştır.',
            'Saniyede on metre hızla yükselen asansörleriyle aynı gün içinde gün batımını iki kez izlemek—önce zemin kattan, ardından bulutların üzerinden—zamana meydan okuyan bir duygu verir.',
          ],
          subQuote: {
            text: '«Gelecek tereddüt edenleri beklemez; tarihi yazmak isteyenler zamanla yarışma cesaretine sahip olmalıdır.»',
            source: 'Şeyh Muhammed bin Raşid El Maktum - Fikir Parıltıları',
          },
        },
        {
          title: 'II. Gelecek Müzesi: Kolonsuz Halka Şaheseri',
          content: [
            'Dünya mimarlık çevrelerince "yeryüzünün en güzel binası" ilan edilen Gelecek Müzesi, tek bir iç taşıyıcı kolon olmaksızın inşa edilen simit (Torus) formuyla dikkat çeker. 1024 paslanmaz çelik panelden oluşan dış cephesi, sanatçı Mattar bin Lahej tarafından yazılan ve geceleri ışıldayan sülüs hat sanatıyla bezelidir.',
            'Burası geçmişin değil, elli yıl sonrasının müzesidir; yapay zekâ, biyoteknoloji ve sürdürülebilirliği büyüleyici bir deneyimde buluşturur.',
          ],
        },
        {
          title: 'III. Palmiye Adaları ve Çevre Dostu Akıllı Şehirler',
          content: [
            'Yapay Palmiye Adası (Palm Jumeirah), dalgakıran temelinde tek bir gram çelik donatı kullanılmadan, milyonlarca ton doğal taş ve deniz kumuyla inşa edilmiş tarihin en büyük deniz ıslah projesidir.',
            'Bugün Dubai, bu anıtsal başarıları güneş enerjisi santralleri, sürücüsüz ulaşım ağları ve sıfır karbonlu yeşil yapılarla taçlandırarak sürdürülebilir bir geleceğe öncülük etmektedir.',
          ],
        },
      ],
      keyInsights: [
        'Dubai, ikonik mimariyi küresel ekonomik cazibe ve turizm vizyonunun merkezine yerleştirmiştir.',
        'Gelecek Müzesi, geleneksel hat sanatını parametrik dijital tasarımla kusursuzca kaynaştırmıştır.',
        'Şehir, yenilenebilir enerji ve iklim dirençli akıllı binalara yönelik kapsamlı bir dönüşüm gerçekleştirmektedir.',
      ],
      concludingThoughts: 'Dubai, mimarinin sadece beton ve camdan ibaret olmadığını; bilime, vizyona ve sarsılmaz bir inanca dayandığında insan aklının sınır tanımayacağını tüm dünyaya ispatlamıştır.',
      tags: ['Dubai', 'Burç Halife', 'Gelecek Müzesi', 'Modern Mimari', 'Kentsel İnovasyon', 'Sürdürülebilirlik'],
    },
  ],
};

export const getArticlesByLanguage = (lang: Language): Article[] => {
  return ARTICLES_BY_LANG[lang] || ARTICLES_BY_LANG.ar;
};

// Default Arabic dataset for backwards compatibility
export const ARTICLES_DATA: Article[] = ARTICLES_BY_LANG.ar;

export const LIBRARY_PROVERBS = [
  {
    quote: 'الكتاب وعاء مُلئ علماً، وظرفٌ حُشي ظَرفاً، وبستانٌ يُحمل في رِدن، وروضةٌ تُقلب في حجر.',
    author: 'الجاحظ - كتاب الحيوان',
  },
  {
    quote: 'إذا أردت أن تعيش بعد موتك، فاكتب شيئاً يستحق القراءة، أو افعل شيئاً يستحق الكتابة.',
    author: 'حكمة خزانة الحكمة البغدادية',
  },
  {
    quote: 'قراءة الكتب الجيدة هي بمثابة التحاور مع أنبل عقول القرون الماضية.',
    author: 'رينيه ديكارت',
  },
];
