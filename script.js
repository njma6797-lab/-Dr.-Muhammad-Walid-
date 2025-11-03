// script.js
document.addEventListener('DOMContentLoaded', () => {
  // عناصر DOM
  const welcome = document.getElementById('welcome');
  const app = document.getElementById('app');
  const bookSection = document.getElementById('app');
  const pageEl = document.getElementById('page');
  const tocList = document.getElementById('tocList');
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
  const gotoInput = document.getElementById('gotoInput');
  const gotoBtn = document.getElementById('gotoBtn');

  // رقم واتساب جاهز (ثابت)
  whatsappBtn.href = "https://wa.me/201028792185";

  // صفحات: عينة أولية مفصلة ثم مولد
  const detailed = [
    {
      title: "المقدمة: مهنة التمريض ومسؤولياتها",
      text: `الممرض هو العمود الفقري لأي نظام رعاية صحية... 
(محتوى تفصيلي نموذجي — يمكنك تطوير النص لاحقًا بإضافة تفاصيل إكلينيكية، خطوات عملية، وصور عملية).`,
      image: "https://source.unsplash.com/1000x600/?nurse,clinic"
    },
    {
      title: "التقييم السريري للمريض",
      text: `التقييم يشمل التاريخ المرضي، الفحص البدني، قياس العلامات الحيوية، وتوثيق الملاحظات...`,
      image: "https://source.unsplash.com/1000x600/?vitals,medical"
    },
    {
      title: "العلامات الحيوية وكيفية قياسها",
      text: `قياس الضغط، النبض، التنفس، درجة الحرارة، تشبع الأكسجين...`,
      image: "https://source.unsplash.com/1000x600/?blood-pressure,thermometer"
    },
    {
      title: "إعطاء الأدوية: إرشادات السلامة",
      text: `تأكد من القواعد الخمسة: المريض الصحيح، الدواء الصحيح، الجرعة، الطريق، الوقت...`,
      image: "https://source.unsplash.com/1000x600/?medication,pharmacy"
    },
    {
      title: "العلاج الوريدي (IV Therapy)",
      text: `اختيار الوريد، تعقيم، مراقبة التسريب، استبدال المحاليل وفقًا للبروتوكول...`,
      image: "https://source.unsplash.com/1000x600/?iv,infusion"
    },
    {
      title: "القسطرة البولية (خطوات وآمان)",
      text: `التحضير، التعقيم، طريقة الإدخال، متابعة حالة البول والوقاية من العدوى...`,
      image: "https://source.unsplash.com/1000x600/?catheter,urinary"
    },
    {
      title: "العناية بالجروح وتضميد الجروح",
      text: `تنظيف الجروح، اختيار الضماد، ومتى يحتاج الجرح لتدخل جراحي أو مضاد حيوي...`,
      image: "https://source.unsplash.com/1000x600/?wound-care,bandage"
    },
    {
      title: "الإسعافات الأولية والإنعاش الأساسي (BLS)",
      text: `خطوات CPR الأساسية، استخدام AED، وكيفية التعامل مبدئيًا مع مريض دون وعي...`,
      image: "https://source.unsplash.com/1000x600/?cpr,first-aid"
    }
  ];

  // إنشاء 100 صفحة: نضع الـ detailed ثم نولد الباقي من قالب
  const pages = [];
  pages.push(...detailed);
  const templates = [
    "رعاية مرضى ما بعد العمليات",
    "التعامل مع مرضى السكري",
    "رعاية مرضى القلب",
    "تقنيات قياس الألم",
    "العناية بالمرضى المسنين",
    "تمريض الأطفال",
    "الوقاية من العدوى",
    "التواصل مع المرضى والأسر",
    "التوثيق الطبي",
    "نقل المرضى بآمان"
  ];
  let i = pages.length + 1;
  while (pages.length < 100) {
    const topic = templates[(pages.length - detailed.length) % templates.length];
    pages.push({
      title: `الدرس ${i}: ${topic}`,
      text: `هذه صفحة مفصلة عن ${topic}. اشرح هنا الخطوات الأساسية، الاحتياطات، الأمثلة العملية، وملاحظات السلامة. يمكنك تعديل النص لاحقًا ليصبح أكثر تفصيلاً حسب المطلوب.`,
      image: `https://source.unsplash.com/1000x600/?${encodeURIComponent(topic)},medical,${i}`
    });
    i++;
  }

  // populate TOC
  function buildTOC() {
    tocList.innerHTML = '';
    pages.forEach((p, idx) => {
      const li = document.createElement('li');
      li.textContent = `${idx+1}. ${p.title}`;
      li.addEventListener('click', () => {
        current = idx;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      tocList.appendChild(li);
    });
  }

  // state
  let current = 0;

  function render() {
    const p = pages[current];
    pageEl.innerHTML = `<h2>${p.title}</h2><p>${p.text}</p><img src="${p.image}" alt="${p.title}">`;
    pageCounter.textContent = `صفحة ${current+1} من ${pages.length}`;
    // resources links (بحث سريع)
    const q = encodeURIComponent(p.title.replace(/[^ \u0600-\u06FF\w]/g,' '));
    resources.innerHTML = `<strong>موارد:</strong> 
      <a href="https://www.youtube.com/results?search_query=${q}" target="_blank">البحث في يوتيوب</a> • 
      <a href="https://www.instagram.com/explore/tags/${q.replace(/%20/g,'')}" target="_blank">بحث إنستجرام</a> • 
      <a href="https://www.facebook.com/search/top?q=${q}" target="_blank">بحث فيسبوك</a>`;
    // like count from localStorage
    const key = `like_page_${current}`;
    const cnt = parseInt(localStorage.getItem(key) || '0', 10);
    likeCount.textContent = cnt;
  }

  // navigation
  prevBtn.addEventListener('click', () => {
    current = (current - 1 + pages.length) % pages.length;
    render();
  });
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % pages.length;
    render();
  });

  // like toggle (increment)
  likeBtn.addEventListener('click', () => {
    const key = `like_page_${current}`;
    let cnt = parseInt(localStorage.getItem(key) || '0', 10);
    cnt = cnt + 1;
    localStorage.setItem(key, cnt);
    likeCount.textContent = cnt;
  });

  // notes modal
  addNoteBtn.addEventListener('click', () => {
    noteModal.classList.remove('hidden');
    noteText.value = localStorage.getItem(`note_page_${current}`) || '';
    noteMsg.textContent = '';
  });
  closeNote.addEventListener('click', () => {
    noteModal.classList.add('hidden');
  });
  saveNote.addEventListener('click', () => {
    const v = noteText.value.trim();
    localStorage.setItem(`note_page_${current}`, v);
    noteMsg.textContent = 'تم حفظ الملاحظة محلياً';
    setTimeout(() => noteMsg.textContent = '', 2000);
    setTimeout(()=> noteModal.classList.add('hidden'), 800);
  });

  // goto
  if (gotoBtn && gotoInput) {
    gotoBtn.addEventListener('click', () => {
      const n = Number(gotoInput.value);
      if (!n || n < 1 || n > pages.length) { alert(`أدخل رقم صفحة بين 1 و ${pages.length}`); return; }
      current = n - 1; render(); window.scrollTo({ top:0, behavior:'smooth' });
    });
  }

  // welcome sequence: show welcome 5s, then fade and show app, then show whatsapp
  setTimeout(() => {
    welcome.classList.add('fade-out');
    setTimeout(() => {
      welcome.style.display = 'none';
      document.getElementById('app').classList.remove('hidden');
      buildTOC();
      render();
      // show whatsapp
      whatsappBtn.classList.remove('hidden');
    }, 900);
  }, 5000);

  // initial state: hide app & whatsapp
  document.getElementById('app').classList.add('hidden');
  whatsappBtn.classList.add('hidden');
});
