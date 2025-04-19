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
      "about.description": `✨ I'm Yassin Abdelaziz 🎮، a passionate young game developer! 🚀💻
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
      "footer.accounts": "My Accounts"
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
      "footer.accounts": "حساباتي"
  }
};

// Theme and language management
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  document.body.classList.add(`${savedTheme}-theme`);
  
  // Language preference
  const savedLang = localStorage.getItem('lang') || 'en';
  if (savedLang === 'ar') {
      document.body.classList.add('rtl');
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
  } else {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
  }
  
  // Update translations
  updateTranslations(savedLang);
  
  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
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
  const langToggle = document.getElementById('langToggle');
  langToggle.addEventListener('click', function() {
      if (document.body.classList.contains('rtl')) {
          // Switch to English
          document.body.classList.remove('rtl');
          document.documentElement.lang = 'en';
          document.documentElement.dir = 'ltr';
          updateTranslations('en');
          localStorage.setItem('lang', 'en');
      } else {
          // Switch to Arabic
          document.body.classList.add('rtl');
          document.documentElement.lang = 'ar';
          document.documentElement.dir = 'rtl';
          updateTranslations('ar');
          localStorage.setItem('lang', 'ar');
      }
  });
  
  // Back to top button
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
          backToTopBtn.style.display = 'block';
          setTimeout(() => {
              backToTopBtn.classList.add('show');
          }, 10);
      } else {
          backToTopBtn.classList.remove('show');
          setTimeout(() => {
              backToTopBtn.style.display = 'none';
          }, 300);
      }
  });
  
  backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  
  // Hamburger menu for mobile
  const hamburger = document.querySelector('.hamburger');
  const navControls = document.querySelector('.nav-controls');
  
  hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navControls.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on links
  document.querySelectorAll('.navigation a, .control-btn').forEach(element => {
      element.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
              hamburger.classList.remove('active');
              navControls.classList.remove('active');
          }
      });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              const headerHeight = document.querySelector('header').offsetHeight;
              const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
              
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Project modal functionality
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  const closeModal = document.querySelector('.close-modal');
  
  projectCards.forEach(card => {
      const viewDetailsBtn = card.querySelector('.view-details');
      if (viewDetailsBtn) {
          viewDetailsBtn.addEventListener('click', function() {
              const title = card.querySelector('h3').textContent;
              const description = card.querySelector('p').textContent;
              const imgSrc = card.querySelector('img').src;
              const downloadLink = card.querySelector('a.project-btn').href;
              
              document.getElementById('modalTitle').textContent = title;
              document.getElementById('modalDescription').textContent = description;
              document.getElementById('modalImage').src = imgSrc;
              document.getElementById('modalLink').href = downloadLink;
              
              modal.style.display = 'block';
              document.body.style.overflow = 'hidden';
          });
      }
  });
  
  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
  });
  
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
      }
  });
  
  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 50);
  });
});

// Update all translatable elements
function updateTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
          el.textContent = translations[lang][key];
          
          // Set direction for input fields
          if (lang === 'ar' && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
              el.dir = 'rtl';
          }
      }
  });
  
  // Update page title
  document.title = lang === 'ar' ? 'ما وراء جودوت' : 'Beyond Godot';
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
      metaDescription.content = lang === 'ar' 
          ? 'ياسين عبد العزيز | مطور ألعاب متخصص في محرك جودوت. تصفح معرض أعمالي ومشاريعي!' 
          : 'Yassin Abdelaziz | Game Developer specializing in Godot Engine. Check out my portfolio and projects!';
  }
}
