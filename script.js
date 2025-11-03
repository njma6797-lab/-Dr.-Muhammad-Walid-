// script.js — موسوعة التمريض (نسخة: 10 صفحات مفصلة + قوالب حتى 100)
document.addEventListener('DOMContentLoaded', () => {
  // عناصر DOM
  const welcome = document.getElementById('welcome');
  const app = document.getElementById('app');
  const toc = document.getElementById('toc');
  const tocList = document.getElementById('tocList');
  const pageEl = document.getElementById('page');
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  const pageCounter = document.getElementById('pageCounter');
  const likeBtn = document.getElementById('likeBtn');
  const likeCount = document.getElementById('likeCount');
  const resources = document.getElementById('resources');
  const addNoteBtn = document.getElementById('addNoteBtn');
  const noteModal = document.getElementById('noteModal');
  const noteText = document.getElementById('noteText');
  const saveNote = document.getElementById('saveNote');
  const closeNote = document.getElementById('closeNote');
  const noteMsg = document.getElementById('noteMsg');
  const whatsappBtn = document.getElementById('whatsappBtn');
  const toggleToc = document.getElementById('toggleToc');

  // رقم واتساب
  whatsappBtn.href = "https://wa.me/201028792185";

  // ==== صفحات مفصلة: أول 10 صفحات (كل صفحة ~200-300 كلمة) ====
  const pages = [
    {
      title: "1. أهمية مهنة التمريض ودورها في النظام الصحي",
      text: `تُعتبر مهنة التمريض إحدى الركائز الأساسية في أي منظومة صحية متكاملة. يقوم الممرض بدور الوسيط بين المريض والفريق الطبي: يراقب حالة المريض، يطبق تعليمات الأطباء، ويقدّم الرعاية اليومية التي تضمن سلامة وراحة المريض. الأدوار تشمل توفير العناية المباشرة، رصد العلامات الحيوية، إعطاء الأدوية، تقديم الرعاية التلطيفية، والمشاركة في برامج التثقيف الصحي. 

الممرض ليس مجرد منفّذ لتعليمات بل هو مهني صحي يحتاج إلى تدريب سريري ومعرفة علمية قوية؛ فالتفريق بين عرض وآخر قد ينقذ حياة مريض. بالإضافة لذلك، الممرض مسؤول عن التوثيق الدقيق لكل إجراءات الرعاية، وهو ما يسّهل التواصل بين الفرق الطبية ويضمن استمرارية الرعاية. أخلاقيات التمريض تتضمن السرية، الاحترام، والحفاظ على كرامة المريض، كما أن مهارات التواصل الفعّال تساعد في تقليل القلق لدى المريض وزيادة التزامه بالعلاج.`,
      image: "https://source.unsplash.com/1000x600/?nurse,healthcare,team"
    },
    {
      title: "2. التقييم السريري: خطوات عملية وملاحظات مهمة",
      text: `التقييم السليم للمريض يبدأ بجمع التاريخ المرضي بدقّة: الشكوى الرئيسية، زمن بدء الأعراض، الأمراض المزمنة، الأدوية الحالية، والحساسيات. يلي ذلك الفحص البدني المنهجي (الرأس، الصدر، البطن، الأطراف)، مع قياس العلامات الحيوية: الضغط، النبض، التنفس، درجة الحرارة، وتشبع الأكسجين. 

يجب توثيق كل قيمة مع زمن القياس والظروف (مثل الوضعية أثناء القياس)، لأن التغيرات الصغيرة قد تعكس تطورات هامة. في حالات الطوارئ، يصبح التقييم المتكرر ضرورياً (كل دقائق معدودة حسب الحالة). ملاحظات عملية: استخدم قفازات عند الحاجة، تأكد من صلاحية الأدوات، واستشر الطبيب فور وجود قيم شاذة أو علامات تدهور مفاجئ.`,
      image: "https://source.unsplash.com/1000x600/?vitals,monitor,clinic"
    },
    {
      title: "3. العلامات الحيوية: كيفية القياس وتفسير النتائج",
      text: `العلامات الحيوية (Vital signs) هي مؤشرات أساسية لحالة المريض. تشمل ضغط الدم (Systolic/Diastolic)، معدل الضربات القلبية، معدل التنفس، درجة الحرارة، وتشبع الأكسجين. لقياس الضغط، اختر كفة مناسبة لمحيط الذراع، دع المريض مسترخياً لبضع دقائق، وقراءة القيم بدقة. النبض يقاس عادة من الشريان الكعبري ويجري احتسابه لمدة 30 ثانية وضربه في 2 للحصول على القيمة الدقيقة. 

التنفس يُعدّ على مدار دقيقة كاملة إن لزم للتأكد من انتظامه، وملاحظة أي صوت صفير. تشبع الأكسجين يوفر لمحة عن كفاءة التهوية والتبادل الغازي. عندما تكون القيم خارج النطاق الطبيعي، دوّن ملاحظات مفصلة وأبلغ الطاقم الطبي لاتخاذ الإجراءات اللازمة مثل الأكسجين التكميلي أو التدخل العلاجي.`,
      image: "https://source.unsplash.com/1000x600/?blood-pressure,thermometer"
    },
    {
      title: "4. إعطاء الأدوية: قواعد أمان حاسمة",
      text: `إعطاء الأدوية عمل دقيق يتطلب اتباع مبادئ صارمة لتقليل الأخطاء الدوائية. اتبع دائماً "الخمسة الصحيحة": المريض الصحيح، الدواء الصحيح، الجرعة الصحيحة، الطريق الصحيح، والوقت الصحيح. قبل إعطاء الدواء تحقق من هوية المريض عبر بطاقة الهوية أو السوار الطبي، واطلع على سجل الحساسية. 

بالنسبة للأدوية الوريدية، تحقق من صلاحية المحلول، مظهره، وطريقة التسريب ومعدل الجمع. سجّل كل إعطاء بوضوح في ملف المريض، وراقب العلامات الحيوية لاحقاً لاكتشاف آثار جانبية محتملة. تواصل مع الصيدلي في حالة أي شكوك حول التوافق أو التخفيفات المطلوبة للمرضى ذوي قصور كلوي أو كبدي.`,
      image: "https://source.unsplash.com/1000x600/?medication,pharmacy"
    },
    {
      title: "5. العلاج الوريدي (IV Therapy): اختيار الوريد وتعقيم المكان",
      text: `العلاج الوريدي شائع لكنه يحمل مخاطر إن لم يتم بطريقة صحيحة. اختر وريدًا مناسبًا بأكبر قطر ممكن لتقليل فشل الخط الوريدي، وابتعد عن المفاصل المتحركة إن أمكن. نظف الجلد بمطهر مناسب واتّبع أسلوبًا عقيمًا عند إدخال الكانيولا. ثبّت الكانيولا بشريط مناسب ودوّن وقت الإدخال ونوع المحلول.

راقب مكان الإدخال لاحقًا بحثاً عن تورّم، احمرار، أو ألم قد يشير إلى تسرب أو تهيّج وريدي. في حال التهيّج، أوقف التسريب واطلع الطبيب. استخدم مضخات التسريب الدقيقة عندما تكون الجرعات حساسة، وسجّل كل ضبط للمعدل ووقت البدء والانتهاء.`,
      image: "https://source.unsplash.com/1000x600/?iv,infusion"
    },
    {
      title: "6. تركيب القسطرة البولية: خطوات السلامة والوقاية من العدوى",
      text: `تركيب القسطرة البولية يتطلب تعليمًا دقيقًا واحتياطات تعقيم صارمة لتقليل التهاب المسالك البولية المرتبط بالرعاية الصحية. تأكد من الحصول على موافقة المريض وشرح الإجراء. جهّز كافة الأدوات المعقمة: قسطرة Foley، سرنجة، محلول معقم، وقفازات معقمة. نظف منطقة الإحليل جيدًا قبل الإدخال.

بعد خروج البول، املأ بالون التثبيت بالمحلول المعقم واستمر في مراقبة لون وكميات البول. ثبت الكيس تحت مستوى المثانة لمنع الارتجاع. استبدل القسطرة وفق الآليّات المتبعة وتجنب الاستخدام طويل الأمد إن لم يكن ضرورياً لتقليل خطر العدوى.`,
      image: "https://source.unsplash.com/1000x600/?catheter,urinary"
    },
    {
      title: "7. العناية بالجروح وتضميدها: مبادئ وتسلسل الإجراءات",
      text: `العناية الصحيحة بالجروح تسرّع الشفاء وتقلل خطر العدوى. ابدأ بتقييم الجرح: النوع (سطحي، قطعي، خراج)، كمية الإفراز، وجود نخر أو عدمه. نظّف الجرح بمحلول ملحي معقم أو محلول وفق تعليمات المستشفى. استخدم تقنية معقمة عند التعامل مع الجروح المفتوحة أو الجراحية.

اختر الضماد المناسب: ضمادات ماصة للإفرازات، وضمادات حاجز للجروح الجافة. علّم المريض أو مقدم الرعاية كيفية تغيير الضماد وموعد مراجعة الطبيب. دوّن تفاصيل التغيير: التاريخ، مظهر الجرح، ولون/كمية الإفرازات. أي علامات احمرار متصاعد أو ألم شديد تحتاج تقييمًا فوريًا.',
      image: "https://source.unsplash.com/1000x600/?wound-care,bandage"
    },
    {
      title: "8. الإسعافات الأولية والإنعاش القلبي الرئوي (BLS)",
      text: `الإسعافات الأولية هي فرق الساعات الأولى في إنقاذ حياة المريض. عند مواجهة مريض فاقداً للوعي: تأكد من السلامة، انطق واهتز المريض لتقييم الاستجابة، افتح مجرى الهواء، وتحقق من التنفس. إذا لم يتنفس، ابدأ بالضغطات الصدرية بقوة وعمق مناسب (5-6 سم لدى البالغ) ومعدل 100-120 ضغطة/دقيقة، وطبق دورات 30:2 للضغطات والتنفس (حسب الإرشادات المحلية).

استعن بجهاز صدمات كهربائية تلقائي (AED) عند توفره مع اتباع تعليماته الصوتية. سجّل كافة الإجراءات: وقت البدء، الإجراءات المتخذة، واستجابة المريض، لتقرير الطوارئ لاحقاً.',
      image: "https://source.unsplash.com/1000x600/?cpr,first-aid"
    },
    {
      title: "9. التغذية السريرية وإدارة أنابيب التغذية",
      text: `التغذية السريرية أساسية للمرضى غير القادرين على تناول الغذاء فموياً. قبل بدء أي تغذية، قِم بتقييم حاجة المريض من السعرات والبروتين وفق حالته السريرية. تركيب أنبوب أنفي معدي (NG) أو أنبوب تربوي يتطلب تأكيد وضع الأنبوب قبل إعطاء أي تغذية (أشعة أو خطوات تحقق سريرية).

ابدأ بمعدلات بطيئة وزِد تدريجياً مع مراقبة علامات التسريب أو القلس المعدي المريئي. عند التغذية الوريدية الكاملة، راقب مكونات المحاليل، مستويات الجلوكوز، وعلامات العدوى في موقع القسطرة المركزية. دوّن كل جرعة ومعدل تغذية وتحقق من تغذية المريض يومياً.',
      image: "https://source.unsplash.com/1000x600/?feeding,tube"
    },
    {
      title: "10. توثيق الرعاية وأخلاقيات التعامل مع المريض",
      text: `التوثيق الدقيق عنصر لا غنى عنه في الرعاية الصحية؛ هو السبيل لتتبع تقدم المريض، حكم جودة الرعاية، وحماية الفريق قانونياً. اكتب كل إجراء بوضوح: الزمن، وصف الإجراء، استجابة المريض، وأية تعليمات طبية. استخدم لغة مهنية واضحة وخالية من الاختصارات الغامضة.

أخلاقيات التمريض تشمل احترام الخصوصية، السرية، والحصول على موافقة مستنيرة قبل أي إجراء. عامل المريض بكرامة واستمع لمخاوفه وطمأنه عندما يلزم. التواصل الجيد مع الأسرة يخفف قلقهم ويزيد التزامهم بالخطة العلاجية.`,
      image: "https://source.unsplash.com/1000x600/?medical-records,doctor-nurse"
    }
  ];

  // ==== نولّد باقي الصفحات كقوالب حتى 100 ====
  const templateTopics = [
    "رعاية ما بعد العمليات", "التعامل مع مرضى السكري", "رعاية قلبية", "تقنيات الحقن",
    "تمريض الأطفال", "تمريض المسنين", "الوقاية من العدوى", "التوثيق الطبي", "إدارة الألم",
    "نقل المريض بأمان", "التعامل مع الحروق", "الرعاية في العناية المركزة", "تثقيف المرضى",
    "التعامل مع الأدوية الخطرة", "الوقاية من السقوط", "التعامل مع الصدمات", "التنفس الصناعي",
    "دعم الحياة لحديثي الولادة", "رعاية الجروح المزمنة", "التعامل مع الأمراض المزمنة"
  ];

  while (pages.length < 100) {
    const topic = templateTopics[(pages.length - 10) % templateTopics.length];
    const idx = pages.length + 1;
    pages.push({
      title: `${idx}. ${topic}`,
      text: `هذه صفحة نموذجية عن "${topic}". المحتوى هنا قالب قابل للتعديل: اكتب خطوات العملية، ملاحظات السلامة، أمثلة سريرية، وأنشطة تعليمية للممرض. اطلب منّي استبدال هذه القوالب بنصوص مطولة (300 كلمة) وسأجهز لك دفعات إضافية بسرعة.`,
      image: `https://source.unsplash.com/1000x600/?${encodeURIComponent(topic)},medical,${idx}`
    });
  }

  // ====== وظائف العرض والتفاعل ======
  function buildTOC() {
    tocList.innerHTML = '';
    pages.forEach((p, i) => {
      const li = document.createElement('li');
      li.textContent = `${i+1}. ${p.title}`;
      li.dataset.idx = i;
      li.addEventListener('click', () => {
        current = i; render(); highlightTOC(); window.scrollTo({top:0, behavior:'smooth'});
      });
      tocList.appendChild(li);
    });
  }

  function highlightTOC() {
    const items = tocList.querySelectorAll('li');
    items.forEach((el, j) => el.classList.toggle('active', j === current));
  }

  let current = 0;

  function render() {
    const p = pages[current];
    pageEl.innerHTML = `<h2>${p.title}</h2><p>${p.text}</p><img src="${p.image}" alt="${p.title}">`;
    pageCounter.textContent = `صفحة ${current+1} من ${pages.length}`;
    highlightTOC();
    // موارد بحثية
    const q = encodeURIComponent(p.title.replace(/[^ \u0600-\u06FF\w]/g,' ').trim());
    resources.innerHTML = `<strong>موارد:</strong> 
      <a href="https://www.youtube.com/results?search_query=${q}" target="_blank">بحث يوتيوب</a> • 
      <a href="https://www.instagram.com/explore/tags/${q.replace(/%20/g,'')}/" target="_blank">بحث إنستجرام</a> • 
      <a href="https://www.facebook.com/search/top?q=${q}" target="_blank">بحث فيسبوك</a>`;
    // تحديث إعجابات
    const cnt = parseInt(localStorage.getItem(`like_page_${current}`) || '0', 10);
    likeCount.textContent = cnt;
  }

  // أزرار التنقل
  prevBtn.addEventListener('click', () => { current = (current - 1 + pages.length) % pages.length; render(); window.scrollTo({top:0, behavior:'smooth'}); });
  nextBtn.addEventListener('click', () => { current = (current + 1) % pages.length; render(); window.scrollTo({top:0, behavior:'smooth'}); });

  // اعجاب
  likeBtn.addEventListener('click', () => {
    const key = `like_page_${current}`;
    let cnt = parseInt(localStorage.getItem(key) || '0', 10);
    cnt = cnt + 1;
    localStorage.setItem(key, cnt);
    likeCount.textContent = cnt;
  });

  // ملاحظات
  addNoteBtn.addEventListener('click', () => {
    noteModal.classList.remove('hidden');
    noteText.value = localStorage.getItem(`note_page_${current}`) || '';
    noteMsg.textContent = '';
  });
  closeNote.addEventListener('click', () => { noteModal.classList.add('hidden'); });
  saveNote.addEventListener('click', () => {
    const v = noteText.value.trim();
    localStorage.setItem(`note_page_${current}`, v);
    noteMsg.textContent = 'تم حفظ الملاحظة محلياً';
    setTimeout(()=> { noteMsg.textContent=''; noteModal.classList.add('hidden'); }, 900);
  });

  // تoggle TOC للهواتف
  toggleToc.addEventListener('click', () => { toc.classList.toggle('hidden'); });

  // بدء الترحيب: 5 ثوانٍ ثم ظهور التطبيق والواتساب
  function startAppAfterWelcome(){
    setTimeout(() => {
      welcome.classList.add('fade-out');
      setTimeout(() => {
        welcome.style.display = 'none';
        app.classList.remove('hidden');
        app.setAttribute('aria-hidden','false');
        whatsappBtn.classList.remove('hidden');
        buildTOC();
        render();
      }, 900);
    }, 5000);
  }

  // اضبط الحالة الابتدائية
  app.classList.add('hidden');
  whatsappBtn.classList.add('hidden');
  startAppAfterWelcome();

  // دعم فتح صفحة مباشرة عبر الرابط ?p=5
  const urlParams = new URLSearchParams(window.location.search);
  const pnum = parseInt(urlParams.get('p'), 10);
  if (!isNaN(pnum) && pnum >= 1 && pnum <= pages.length) {
    current = pnum - 1;
  }

  // تسهيلات: مفاتيح التنقل
  document.addEventListener('keydown', (e) => {
    if (app.classList.contains('hidden')) return;
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  });

});
