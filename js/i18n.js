/**
 * i18n - Internationalization system
 * Simple, lightweight translation system for Diego Fagundez portfolio
 */

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      subtitle: "Software Engineer",
      greeting: {
        tooltip: "Hello · Konnichiwa"
      }
    },
    about: {
      title: "About",
      intro: "I am a Software Engineer passionate about quality, simplicity, and continuous improvement.",
      description: "With 5+ years of experience in software quality and 3 years focused on development, I bring a unique perspective that combines quality assurance expertise with modern software engineering. I specialize in backend development with Golang, Node.js/TypeScript, and Python. I believe in the philosophy of <em>kaizen</em> (continuous improvement) and apply it to every aspect of my work.",
      current: "Currently at Kavak, I work as a Software Engineer developing and maintaining microservices, managing ~10 projects across different technologies, and implementing monitoring solutions with DataDog and Grafana. I'm responsible for end-to-end development, from architecture to deployment."
    },
    experience: {
      title: "Experience",
      kavak: {
        date: "2021 - Present",
        title: "Software Engineer",
        description: "Leading e-commerce platform dedicated to buying, selling, and financing used cars globally. Joined the finance team during infrastructure refactoring from monolith to microservices.",
        resp1: "Backend development with Golang, Node.js/TypeScript, and Python",
        resp2: "Migrated 3 APIs from monolith to microservices using Node.js, developed 3 Golang APIs",
        resp3: "Currently managing ~10 projects including backends and backoffice frontends",
        resp4: "Implemented monitoring and metrics solutions using DataDog and Grafana",
        resp5: "End-to-end development responsibility, from design to deployment in production"
      },
      glamit: {
        date: "2019 - 2021",
        title: "QA Analyst",
        description: "360° e-commerce services company.",
        resp1: "Design and execution of manual and automated tests",
        resp2: "Development of automation frameworks from scratch",
        resp3: "API testing with Postman",
        resp4: "Feature and process documentation",
        resp5: "Quality assurance across multiple e-commerce projects"
      }
    },
    contact: {
      title: "Get In Touch",
      text: "I'm always open to new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out."
    },
    footer: {
      credit: "Designed & Built by Diego Fagundez",
      wabisabi: {
        tooltip: "Imperfection is beauty",
        text: "beauty in simplicity"
      }
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      contact: "Contacto"
    },
    hero: {
      subtitle: "Ingeniero de Software",
      greeting: {
        tooltip: "Hola · Konnichiwa"
      }
    },
    about: {
      title: "Sobre mí",
      intro: "Soy Ingeniero de Software apasionado por la calidad, la simplicidad y la mejora continua.",
      description: "Con más de 5 años de experiencia en calidad de software y 3 años enfocado en desarrollo, aporto una perspectiva única que combina expertise en aseguramiento de calidad con ingeniería de software moderna. Me especializo en desarrollo backend con Golang, Node.js/TypeScript y Python. Creo en la filosofía de <em>kaizen</em> (mejora continua) y la aplico en cada aspecto de mi trabajo.",
      current: "Actualmente en Kavak, trabajo como Ingeniero de Software desarrollando y manteniendo microservicios, gestionando ~10 proyectos en diferentes tecnologías, e implementando soluciones de monitoreo con DataDog y Grafana. Tengo responsabilidad de desarrollo de punta a punta, desde arquitectura hasta despliegue."
    },
    experience: {
      title: "Experiencia",
      kavak: {
        date: "2021 - Presente",
        title: "Ingeniero de Software",
        description: "Plataforma líder de e-commerce dedicada a la compra, venta y financiamiento de autos usados a nivel global. Ingresé al equipo de finanzas durante la refactorización de infraestructura de monolito a microservicios.",
        resp1: "Desarrollo backend con Golang, Node.js/TypeScript y Python",
        resp2: "Migré 3 APIs del monolito a microservicios usando Node.js, desarrollé 3 APIs en Golang",
        resp3: "Actualmente gestiono ~10 proyectos incluyendo backends y frontends de backoffice",
        resp4: "Implementé soluciones de monitoreo y métricas usando DataDog y Grafana",
        resp5: "Responsabilidad de desarrollo de punta a punta, desde diseño hasta despliegue en producción"
      },
      glamit: {
        date: "2019 - 2021",
        title: "Analista QA",
        description: "Empresa de servicios 360° de e-commerce.",
        resp1: "Diseño y ejecución de pruebas manuales y automatizadas",
        resp2: "Desarrollo de frameworks de automatización desde cero",
        resp3: "Pruebas de API con Postman",
        resp4: "Documentación de funcionalidades y procesos",
        resp5: "Aseguramiento de calidad en múltiples proyectos de e-commerce"
      }
    },
    contact: {
      title: "Contacto",
      text: "Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. Ya sea que tengas una pregunta o solo quieras saludar, no dudes en contactarme."
    },
    footer: {
      credit: "Diseñado y Construido por Diego Fagundez",
      wabisabi: {
        tooltip: "La imperfección es belleza",
        text: "belleza en la simplicidad"
      }
    }
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      contact: "Contato"
    },
    hero: {
      subtitle: "Engenheiro de Software",
      greeting: {
        tooltip: "Olá · Konnichiwa"
      }
    },
    about: {
      title: "Sobre",
      intro: "Sou Engenheiro de Software apaixonado por qualidade, simplicidade e melhoria contínua.",
      description: "Com mais de 5 anos de experiência em qualidade de software e 3 anos focado em desenvolvimento, trago uma perspectiva única que combina expertise em garantia de qualidade com engenharia de software moderna. Especializo-me em desenvolvimento backend com Golang, Node.js/TypeScript e Python. Acredito na filosofia de <em>kaizen</em> (melhoria contínua) e aplico-a em todos os aspectos do meu trabalho.",
      current: "Atualmente na Kavak, trabalho como Engenheiro de Software desenvolvendo e mantendo microsserviços, gerenciando ~10 projetos em diferentes tecnologias, e implementando soluções de monitoramento com DataDog e Grafana. Tenho responsabilidade de desenvolvimento de ponta a ponta, desde arquitetura até implantação."
    },
    experience: {
      title: "Experiência",
      kavak: {
        date: "2021 - Presente",
        title: "Engenheiro de Software",
        description: "Plataforma líder de e-commerce dedicada à compra, venda e financiamento de carros usados globalmente. Entrei na equipe de finanças durante a refatoração da infraestrutura de monolito para microsserviços.",
        resp1: "Desenvolvimento backend com Golang, Node.js/TypeScript e Python",
        resp2: "Migrei 3 APIs do monolito para microsserviços usando Node.js, desenvolvi 3 APIs em Golang",
        resp3: "Atualmente gerencio ~10 projetos incluindo backends e frontends de backoffice",
        resp4: "Implementei soluções de monitoramento e métricas usando DataDog e Grafana",
        resp5: "Responsabilidade de desenvolvimento de ponta a ponta, desde design até implantação em produção"
      },
      glamit: {
        date: "2019 - 2021",
        title: "Analista QA",
        description: "Empresa de serviços 360° de e-commerce.",
        resp1: "Design e execução de testes manuais e automatizados",
        resp2: "Desenvolvimento de frameworks de automação do zero",
        resp3: "Testes de API com Postman",
        resp4: "Documentação de funcionalidades e processos",
        resp5: "Garantia de qualidade em múltiplos projetos de e-commerce"
      }
    },
    contact: {
      title: "Entre em Contato",
      text: "Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma pergunta ou só quer dizer oi, sinta-se à vontade para entrar em contato."
    },
    footer: {
      credit: "Projetado e Construído por Diego Fagundez",
      wabisabi: {
        tooltip: "A imperfeição é beleza",
        text: "beleza na simplicidade"
      }
    }
  }
};

// Get nested property from object using dot notation
function getNestedProperty(obj, path) {
  return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

// Current language (default: English)
let currentLanguage = localStorage.getItem('language') || 'en';

// Change language function
function changeLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`Language '${lang}' not found. Falling back to English.`);
    lang = 'en';
  }

  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedProperty(translations[lang], key);
    
    if (translation) {
      element.innerHTML = translation;
    }
  });

  // Update tooltips (data-meaning attributes)
  document.querySelectorAll('[data-meaning-key]').forEach(element => {
    const key = element.getAttribute('data-meaning-key');
    const translation = getNestedProperty(translations[lang], key);
    
    if (translation) {
      element.setAttribute('data-meaning', translation);
    }
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', lang);

  // Console log for debugging
  console.log(`🌍 Language changed to: ${lang.toUpperCase()}`);
}

// Initialize language system
function initI18n() {
  // Set initial language
  changeLanguage(currentLanguage);

  // Add click listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });

  console.log('🎋 i18n system initialized');
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { changeLanguage, initI18n, translations };
}

