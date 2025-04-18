// Translation dictionary
const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "AboutMe",
        "nav.works": "MyWorks",
        "nav.contact": "ContactMe",
        "hero.name": "I'm Yassin",
        "hero.title": "Developer at Godot",
        "hero.hire": "Hire Me",
        "hero.cv": "Download CV",
        "about.title1": "About",
        "about.title2": "me",
        "about.description": `✨ I'm Yassin Abdelaziz 🎮، a passionate young game developer! �💻
🔥 At just 12 years old 🎂, I'm already crafting 2D & 3D games, bringing ideas to life through code! 🧩🎨
💡 I love exploring new technologies, solving problems 🛠️, and constantly improving my skills in game development! 🎯🎮
⚡ I enjoy using GDScript and other tools to create fun & engaging experiences! 🎭🕹️
🌟 Always excited to learn more 📚 and take on new challenges in the world of coding & game design! 🏆✨
👾 Feel free to connect with me if you're interested in my projects! 🤝🚀`,
        "works.title1": "My Recent",
        "works.title2": "Works",
        "contact.title1": "Contact",
        "contact.title2": "Me",
        "footer.built": "Built By YassinDev.",
        "footer.accounts": "My Accounts",
        "footer.tools": "Developers Tools"
    },
    ar: {
        "nav.home": "الرئيسية",
        "nav.about": "عني",
        "nav.works": "أعمالي",
        "nav.contact": "اتصل بي",
        "hero.name": "أنا ياسين",
        "hero.title": "مطور في جودوت",
        "hero.hire": "وظفني",
        "hero.cv": "تحميل السيرة",
        "about.title1": "معلومات",
        "about.title2": "عني",
        "about.description": `✨ أنا ياسين عبد العزيز 🎮، مطور ألعاب شاب متحمس! 🚀💻
🔥 في سن 12 عامًا فقط 🎂، أقوم بالفعل بصنع ألعاب 2D و 3D، أحول الأفكار إلى واقع من خلال البرمجة! 🧩🎨
💡 أحب استكشاف التقنيات الجديدة، وحل المشكلات 🛠️، وتحسين مهاراتي باستمرار في تطوير الألعاب! 🎯🎮
⚡ أستمتع باستخدام GDScript وأدوات أخرى لخلق تجارب ممتعة وجذابة! 🎭🕹️
🌟 دائمًا متحمس لتعلم المزيد 📚 وتحدي نفسي في عالم البرمجة وتصميم الألعاب! 🏆✨
👾 لا تتردد في التواصل معي إذا كنت مهتمًا بمشاريعي! 🤝🚀`,
        "works.title1": "أحدث",
        "works.title2": "أعمالي",
        "contact.title1": "اتصل",
        "contact.title2": "بي",
        "footer.built": "تم التطوير بواسطة ياسين ديف.",
        "footer.accounts": "حساباتي",
        "footer.tools": "أدوات المطورين"
    }
};

// Theme and language management
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    document.body.classList.add(`${savedTheme}-theme`);
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');
    
    // Check saved theme preference
    document.body.classList.add(`${savedTheme}-theme`);
    
    // Check saved language preference
    const savedLang = localStorage.getItem('lang') || 'en';
    if (savedLang === 'ar') {
        document.body.classList.add('rtl');
    }
    updateTranslations(savedLang);
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Language toggle functionality
    langToggle.addEventListener('click', function() {
        if (document.body.classList.contains('rtl')) {
            document.body.classList.remove('rtl');
            updateTranslations('en');
            localStorage.setItem('lang', 'en');
        } else {
            document.body.classList.add('rtl');
            updateTranslations('ar');
            localStorage.setItem('lang', 'ar');
        }
    });
    
    // Update all translatable elements
    function updateTranslations(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = translations[lang][key] || el.textContent;
        });
    }
});
// انتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // حدد الزر
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    // أظهر أو أخفي الزر بناءً على موقع التمرير
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) { // إذا تم التمرير لأكثر من 300 بكسل
        backToTopBtn.style.display = 'block';
        backToTopBtn.classList.add('show'); // إذا كنت تستخدم تأثير التلاشي
      } else {
        backToTopBtn.style.display = 'none';
        backToTopBtn.classList.remove('show');
      }
    });
    
    // اضغط على الزر للعودة للأعلى بسلاسة
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault(); // لمنع السلوك الافتراضي (إن وجد)
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // تمرير سلس
      });
      
      // (اختياري) إضافة تأثير اضغط على الزر
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    });
  });
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // دوران سريع عند النقر
    btn.style.transform = 'rotate(360deg)';
    btn.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      btn.style.transform = 'rotate(0deg)';
    }, 600);
  });
  const hours = new Date().getHours();
  if (hours > 18 || hours < 6) {
    btn.style.background = 'linear-gradient(145deg, #4b6cb7 0%, #182848 100%)';
  }
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
  });
  
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  });
// تنشيط عند التمرير
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  });
