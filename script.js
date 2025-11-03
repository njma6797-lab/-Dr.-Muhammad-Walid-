// ================================
// كتاب التمريض - script.js
// يحتوي 100 صفحة: الصفحات الأولى مفصّلة، والباقي مولّد من قالب.
// يظهر الترحيب 5 ثواني ثم يفتح الكتاب.
// يوجد فهرس قابل للنقر، وروابط بحث YouTube/Facebook/Instagram لكل صفحة.
// زر واتساب جاهز للتواصل.
// ================================

document.addEventListener('DOMContentLoaded', () => {
  const welcome = document.getElementById('welcome');
  const bookSection = document.getElementById('bookSection');
  const pageBox = document.getElementById('page');
  const tocList = document.getElementById('tocList');
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  const pageCounter = document.getElementById('pageCounter');
  const gotoInput = document.getElementById('gotoInput');
  const gotoBtn = document.getElementById('gotoBtn');
  const resourcesEl = document.getElementById('resources');
  const downloadPdfBtn = document.getElementById('downloadPdf');

  // ======== صفحات مفصّلة (أول 15 صفحة) ========
  const detailedPages = [
    {
      title: "المقدمة: دور الممرض/الممرضة",
      text: "الممرض هو الركن الأساسي في رعاية المريض، يقوم بتطبيق أوامر الطبيب، مراقبة العلامات الحيوية، تقديم الأدوية، وتقديم الرعاية الإنسانية. يتطلب العمل حفظ أسرار المرضى، التواصل الفعّال، ومهارات تقنية متنوعة.",
      image: "https://source.unsplash.com/800x500/?nurse,clinic,care",
      topics: ["أخلاقيات المهنة","مسؤوليات الممرضة"]
    },
    {
      title: "تقييم المريض (Assessment)",
      text: "التقييم الشامل يشمل جمع التاريخ المرضي، فحص الحالة العامة، قياس العلامات الحيوية (الضغط، النبض، التنفس، الحرارة)، وفحص الوعي والألم. سجل الملاحظات بدقة وأبلغ الطاقم الطبي عن أي تغيرات.",
      image: "https://source.unsplash.com/800x500/?vitals,medical",
      topics: ["فحص العلامات الحيوية","تاريخ المرض"]
    },
    {
      title: "العلامات الحيوية وكيفية قياسها",
      text: "الضغط: استخدم جهاز الضغط مع الكفة المناسبة واحسب الضغط الانقباضي/الانبساطي. النبض: عدد النبضات في الدقيقة (الشريان الكعبري أو السباتي). درجة الحرارة: فموية/محورية. التنفس: عدد النفس/دقيقة. تقييم ألم المريض وتوثيقه.",
      image: "https://source.unsplash.com/800x500/?blood-pressure,thermometer",
      topics: ["ضغط الدم","النبض","درجة الحرارة"]
    },
    {
      title: "إعطاء الأدوية: قواعد السلامة",
      text: "التأكد من 5 قواعد: المريض الصحيح، الدواء الصحيح، الجرعة الصحيحة، الطريق الصحيح، الوقت الصحيح. تحقق من الحساسية ودوام المريض. دوّن كل إعطاء وراقب التأثيرات الجانبية.",
      image: "https://source.unsplash.com/800x500/?medication,pharmacy",
      topics: ["الأدوية الوريدية","الأدوية عن طريق الفم"]
    },
    {
      title: "العلاج الوريدي (IV Therapy) — أساسيات",
      text: "إدخال وريد مركزي أو وريدي طرفي يحتاج تعقيمًا دقيقًا، اختيار ممر مناسب، مراقبة تسرب السوائل، وملاحظة أي علامات التهاب أو انسداد. احرص على تغيير محاليل بشكل آمن وتدوين كل إدارة حقنة.",
      image: "https://source.unsplash.com/800x500/?iv,infusion",
      topics: ["محاليل وريدي","مضاعفات IV"]
    },
    {
      title: "القسطرة البولية (تركيب القسطرة) — خطوات عامة",
      text: "تعقيم اليدين، تحضير مواد التعقيم، شرح الإجراء للمريض، وضع مريضة في وضعية مناسبة، تنظيف منطقة الإحليل، إدخال القسطرة بلطف حتى تخرج البول، تأمين القسطرة وتسجيل حجم البول. راقب علامات العدوى.",
      image: "https://source.unsplash.com/800x500/?catheter,urinary",
      topics: ["مراقبة البول","الوقاية من العدوى"]
    },
    {
      title: "العناية بالجروح وتضميدها",
      text: "نظف الجرح بمحلول معقم، استخدم تقنية العقيمة إن لزم، ضع ضماد مناسب مع القدرة على امتصاص الإفرازات، وتحقق من علامات العدوى مثل الاحمرار، الألم المتزايد أو ارتفاع الحرارة.",
      image: "https://source.unsplash.com/800x500/?wound-care,bandage",
      topics: ["تقنيات تضميد","الوقاية من العدوى"]
    },
    {
      title: "الوقاية من العدوى (Infection control)",
      text: "غسل اليدين فعّال للغاية، استخدام معدات الوقاية الشخصية PPE، عزل المرضى المصابين بأمراض معدية، وتعقيم الأدوات والأسطح بانتظام. التثقيف المستمر للفريق ضروري لتقليل انتقال العدوى.",
      image: "https://source.unsplash.com/800x500/?infection-control,mask",
      topics: ["PPE","تعقيم"]
    },
    {
      title: "تقنيات العقيمة (Aseptic Technique)",
      text: "التقنية العقيمة تمنع دخول الميكروبات إلى مناطق معرضة. تشمل التعقيم، تغطية الأدوات، استخدام أقمشة معقمة، والعمل في بيئة نظيفة مع تقليل اللمس.",
      image: "https://source.unsplash.com/800x500/?aseptic,sterile",
      topics: ["التعقيم","العمليات الجراحية"]
    },
    {
      title: "مراقبة التغذية وإعطاء التغذية المعوية",
      text: "تقييم حالة التغذية، حساب حاجة السعرات والبروتين، تركيب التغذية الأنفية أو عن طريق أنبوب المعدة إذا لزم، ملاحظة علامات التسريب أو الإنسداد وتبديل الأنبوب حسب البروتوكول.",
      image: "https://source.unsplash.com/800x500/?feeding,tube",
      topics: ["تغذية أنبوبية","تقييم تغذية"]
    },
    {
      title: "نقل ومساعدة المريض وحماية السقوط",
      text: "تحضير المعدات مثل مشاية، حزام نقل، تدريب الفريق، استخدام تقنية الرفع الصحيحة لتفادي إصابة الظهر، تقييم خطر السقوط ووضع علامات تحذيرية إذا لزم.",
      image: "https://source.unsplash.com/800x500/?patient-transfer,lift",
      topics: ["المتانة","تقليل السقوط"]
    },
    {
      title: "الإسعافات الأولية الأساسية (BLS) — أساسيات الإنعاش",
      text: "تقييم الوعي والاستجابة، الاتصال بالإسعاف، البدء بالضغط على الصدر بمعدل 100-120 ضغط/دقيقة، فتح مجرى الهواء، إعطاء تنفس إصطناعي إذا كان مناسبًا، واستخدام جهاز الصدمات الكهربائية AED إذا توفر.",
      image: "https://source.unsplash.com/800x500/?cpr,first-aid",
      topics: ["CPR","AED"]
    },
    {
      title: "تخطيط الأدوية وإدارة المخاطر الدوائية",
      text: "تعرف إلى الأدوية الشائعة، موانع الاستعمال، التداخلات الدوائية، ومراعاة جرعات المرضى الذين يعانون من قصور كلوي أو كبدي. راقب تداخلات الأدوية وقيّم الضرر المحتمل.",
      image: "https://source.unsplash.com/800x500/?drug-safety,pharmacology",
      topics: ["تداخلات دوائية","جرعات خاصة"]
    },
    {
      title: "التوثيق والتقارير (Documentation)",
      text: "التوثيق الدقيق والمحدّث مهم للسلامة القانونية والسريرية. سجل كل تدخل، أوقات الأدوية، ملاحظات عن المريض، وصف التغير في الحالة وأي تعليمات طبية.",
      image: "https://source.unsplash.com/800x500/?medical-records,chart",
      topics: ["سجلات المرضى","تقرير الأحداث"]
    },
    {
      title: "التواصل مع المريض وأخلاقيات الرعاية",
      text: "التواصل الفعال يتضمن الاستماع، الوضوح، احترام الخصوصية، ومراعاة الثقافة. اطلب موافقة مستنيرة قبل الإجراءات وشرح المخاطر والفوائد بطريقة بسيطة.",
      image: "https://source.unsplash.com/800x500/?nurse-communication,patient",
      topics: ["موافقة مستنيرة","السرية"]
    }
  ];

  // ======== باقي الصفحات: مولدة من قالب (85 صفحة) ========
  const pages = [...detailedPages];
  const templateTopics = [
    "قياس الضغط", "قياس النبض", "قياس الحرارة", "قياس التنفس", "مقياس الألم",
    "العناية بالأنابيب", "تعليم المرضى", "إدارة الألم", "تقنيات الحقن",
    "العناية بالعيون", "التعامل مع الأمراض المزمنة", "التمريض النفسي",
    "تمريض الأطفال", "تمريض المسنين", "الرعاية في المستشفيات", "التخطيط للرعاية",
    "إدارة الحالات الحرجة", "التخطيط للتمريض المنزلي", "مبادئ الإحالة الطبية",
    "تنظيف وتعقيم الأدوات", "إدارة النفايات الطبية", "المراقبة بعد الجراحة",
    "التغذية لـ الحالات الحرجة", "تثقيف أسر المرضى", "التعامل مع الطوارئ",
    "التعامل مع الحروق", "رعاية الجروح المزمنة", "الوقاية من الجلطات", "تنفس صناعي",
    "دعم حياة حديثي الولادة", "عناية ما بعد العمليات القيصرية", "الرعاية في العناية المركزة"
  ];

  // نولّد بضعة صفحات حتى نصل لـ100
  let idx = pages.length + 1;
  while (pages.length < 100) {
    const topic = templateTopics[(pages.length - detailedPages.length) % templateTopics.length];
    pages.push({
      title: `الدرس ${idx}: ${topic}`,
      text: `شرح مختصر عن ${topic}. هذه صفحة مُولَّدة تلقائيًا يمكنك تعديل النص لتصبح أكثر تفصيلاً. تتضمن خطوات عملية، ملاحظات أمان، وأمثلة سريرية.`,
      image: `https://source.unsplash.com/800x500/?${encodeURIComponent(topic)},nursing,medical,${idx}`,
      topics: [topic]
    });
    idx++;
  }

  // ربط البيانات بالواجهة
  function populateTOC() {
    tocList.innerHTML = '';
    pages.forEach((p, i) => {
      const li = document.createElement('li');
      li.textContent = `${i+1}. ${p.title}`;
      li.addEventListener('click', () => {
        currentPage = i;
        showPage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      tocList.appendChild(li);
    });
  }

  // عرض صفحة واحدة مع موارد بحثية
  let currentPage = 0;
  function showPage() {
    const p = pages[currentPage];
    pageBox.innerHTML = `
      <h2>${p.title}</h2>
      <p>${p.text}</p>
      <img src="${p.image}" alt="${p.title}">
    `;
    pageCounter.textContent = `صفحة ${currentPage+1} من ${pages.length}`;

    // موارد: روابط بحث في اليوتيوب والفيسبوك والانستاجرام حول الموضوع
    resourcesEl.innerHTML = '<strong>موارد للفائدة:</strong><br>';
    const q = encodeURIComponent(p.title.replace(/[^a-zA-Z0-9\u0600-\u06FF ]/g, ' '));
    const yt = `https://www.youtube.com/results?search_query=${q}`;
    const ig = `https://www.instagram.com/explore/tags/${q.replace(/%20/g, '')}/`;
    const fb = `https://www.facebook.com/search/top?q=${q}`;
    resourcesEl.innerHTML += `<a href="${yt}" target="_blank" rel="noopener">بحث في YouTube</a> • `;
    resourcesEl.innerHTML += `<a href="${ig}" target="_blank" rel="noopener">بحث في Instagram</a> • `;
    resourcesEl.innerHTML += `<a href="${fb}" target="_blank" rel="noopener">بحث في Facebook</a>`;
  }

  // أزرار التنقل
  nextBtn.addEventListener('click', () => {
    currentPage = (currentPage + 1) % pages.length;
    showPage();
  });
  prevBtn.addEventListener('click', () => {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    showPage();
  });

  gotoBtn.addEventListener('click', () => {
    const n = Number(gotoInput.value);
    if (!n || n < 1 || n > pages.length) {
      alert(`اكتب رقم صفحة بين 1 و ${pages.length}`);
      return;
    }
    currentPage = n - 1;
    showPage();
  });

  // تحميل PDF - هنا سننشئ ملف نصي مختصر للتحميل (محتوى مُختصر للعرض)
  downloadPdfBtn.addEventListener('click', () => {
    // نص مختصر لعدة صفحات (مخصص للتحميل كبداية)
    let content = '';
    for (let i = 0; i < Math.min(10, pages.length); i++) {
      content += `${i+1}. ${pages[i].title}\n\n${pages[i].text}\n\n\n`;
    }
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nursing_summary.txt';
    a.click();
    URL.revokeObjectURL(url);
  });

  // إظهار الترحيب 5 ثواني ثم إظهار الكتاب
  setTimeout(() => {
    welcome.classList.add('fade-out');
    setTimeout(() => {
      welcome.style.display = 'none';
      bookSection.classList.remove('hidden');
      populateTOC();
      showPage();
    }, 900);
  }, 5000);
});
