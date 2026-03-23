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
      projects: "Projects",
      contact: "Contact",
      themeToggleToLight: "Switch to light mode",
      themeToggleToDark: "Switch to dark mode"
    },
    hero: {
      subtitle: "Software Engineer",
      greeting: {
        tooltip: "Hello · Konnichiwa"
      }
    },
    about: {
      title: "About",
      intro: "I'm a Software Engineer who cares about clarity, reliability, and continuous improvement.",
      description: "I've spent <strong>nine years</strong> in technology, with a <strong>longer foundation in software quality</strong> and the <strong>last four years focused on development</strong>. I work mainly with <strong>Node.js</strong> and <strong>event-driven</strong> architectures, and I'm actively growing in <strong>MongoDB</strong> and <strong>AWS</strong>. I still use Golang, Python, and TypeScript when the problem calls for them. I believe in <em>kaizen</em>—small, steady progress—and apply it to how I build software.",
      current: "At <strong>IOL (Invertir Online)</strong>, I'm on the team building the app that lets Argentine residents invest internationally, with a path toward serving more people across Latin America. The work is Node.js on AWS, with an event-driven mindset end to end."
    },
    experience: {
      title: "Experience",
      iol: {
        date: "2026 - Present",
        title: "Software Engineer",
        description: "IOL (Invertir Online) — online broker building products for international investing, starting with Argentine residents and a vision to scale across Latin America.",
        resp1: "Backend development with Node.js in an event-driven architecture",
        resp2: "Working with MongoDB, AWS services, and asynchronous integration patterns",
        resp3: "Collaboration with product and engineering in iterative, agile delivery",
        resp4: "Ownership from technical design through production operations",
        resp5: "Learning and applying cloud-native practices in a regulated domain"
      },
      kavak: {
        date: "2021 - 2025",
        title: "Software Engineer",
        description: "Leading e-commerce platform for buying, selling, and financing used cars globally. Joined finance during infrastructure refactoring from monolith to microservices.",
        resp1: "Backend development with Golang, Node.js/TypeScript, and Python",
        resp2: "Migrated APIs from monolith to microservices; built new services in Node.js and Golang",
        resp3: "Maintained multiple backends and backoffice frontends across teams",
        resp4: "Monitoring and metrics with DataDog and Grafana",
        resp5: "End-to-end delivery from design to production deployment"
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
    projects: {
      title: "Projects",
      kadencia: {
        badge: "Live",
        tagline: "Training routines & workouts",
        description: "Create, save, and run workout routines with Supabase auth and Postgres. Import routines from text or photos using OCR and AI-assisted parsing (Gemini or Hugging Face). Built with SvelteKit.",
        feature1: "Auth & cloud data",
        feature2: "AI-assisted import",
        feature3: "Sessions & history"
      },
      kaizen: {
        badge: "Live",
        tagline: "Minimalist Productivity App",
        description: "Personal project embodying the philosophy of continuous improvement. Capture ideas, execute tasks incrementally, and track small daily improvements.",
        feature1: "Ideas capture",
        feature2: "Task management",
        feature3: "Time blocking"
      },
      vizu: {
        badge: "Live",
        tagline: "Mermaid diagrams in the browser",
        description: "Lightweight editor for Mermaid.js: live preview, zoom, multiple diagrams, PNG export and clipboard copy—single HTML, no install required.",
        feature1: "Live preview",
        feature2: "Export PNG / JSON",
        feature3: "Zero build step"
      },
      kumostudio: {
        badge: "Live",
        tagline: "Personal studio brand",
        description: "Kumo Studio is my umbrella for product work: a SaaS-first focus on gyms, CrossFit boxes, art centers, and similar venues—solving their main operational pains and exploring how AI can improve workflows and member experience. Custom builds and consulting are available when they fit.",
        service1: "SaaS for venues & studios",
        service2: "AI for processes & UX",
        service3: "Custom development & consulting",
        status: "SaaS products are in development; the studio site, services, and contact are live."
      },
      link: {
        openApp: "Open app",
        visitSite: "Visit site",
        viewOnGitHub: "View on GitHub"
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
      projects: "Proyectos",
      contact: "Contacto",
      themeToggleToLight: "Cambiar a modo claro",
      themeToggleToDark: "Cambiar a modo oscuro"
    },
    hero: {
      subtitle: "Ingeniero de Software",
      greeting: {
        tooltip: "Hola · Konnichiwa"
      }
    },
    about: {
      title: "Sobre mí",
      intro: "Soy Ingeniero de Software y me importan la claridad, la confiabilidad y la mejora continua.",
      description: "Llevo <strong>nueve años</strong> en tecnología, con una <strong>base más larga en calidad de software</strong> y los <strong>últimos cuatro años</strong> enfocados en desarrollo. Trabajo principalmente con <strong>Node.js</strong> y arquitecturas <strong>orientadas a eventos</strong>, y estoy profundizando en <strong>MongoDB</strong> y <strong>AWS</strong>. Sigo usando Golang, Python y TypeScript cuando el problema lo pide. Creo en el <em>kaizen</em>—progreso pequeño y constante—y lo aplico a cómo construyo software.",
      current: "En <strong>IOL (Invertir online)</strong> integro el equipo que construye la app para que residentes en Argentina puedan invertir en el exterior, con miras a escalar a más personas en Latinoamérica. El stack es Node.js en AWS, con mentalidad event-driven de punta a punta."
    },
    experience: {
      title: "Experiencia",
      iol: {
        date: "2026 - Presente",
        title: "Ingeniero de Software",
        description: "IOL (Invertir online) — broker online con productos de inversión internacional, primero para residentes en Argentina y con visión de expansión en Latinoamérica.",
        resp1: "Desarrollo backend con Node.js en arquitectura orientada a eventos",
        resp2: "Trabajo con MongoDB, servicios AWS e integraciones asíncronas",
        resp3: "Colaboración con producto e ingeniería en entregas ágiles iterativas",
        resp4: "Responsabilidad desde el diseño técnico hasta operación en producción",
        resp5: "Aprendizaje y aplicación de prácticas cloud en un dominio regulado"
      },
      kavak: {
        date: "2021 - 2025",
        title: "Ingeniero de Software",
        description: "Plataforma líder de e-commerce de compra, venta y financiamiento de autos usados. Ingresé a finanzas durante la migración de monolito a microservicios.",
        resp1: "Desarrollo backend con Golang, Node.js/TypeScript y Python",
        resp2: "Migración de APIs del monolito a microservicios; nuevos servicios en Node.js y Golang",
        resp3: "Mantenimiento de varios backends y frontends de backoffice",
        resp4: "Monitoreo y métricas con DataDog y Grafana",
        resp5: "Entrega de punta a punta, de diseño a despliegue en producción"
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
    projects: {
      title: "Proyectos",
      kadencia: {
        badge: "En vivo",
        tagline: "Rutinas y entrenos",
        description: "Creá, guardá y ejecutá rutinas de entrenamiento con Supabase y Postgres. Importación desde texto o foto con OCR y parsing asistido por IA (Gemini o Hugging Face). Stack: SvelteKit.",
        feature1: "Auth y datos en la nube",
        feature2: "Import con IA",
        feature3: "Sesiones e historial"
      },
      kaizen: {
        badge: "En vivo",
        tagline: "App de productividad minimalista",
        description: "Proyecto personal que encarna la filosofía de mejora continua. Captura ideas, ejecuta tareas de forma incremental y registra pequeños avances diarios.",
        feature1: "Captura de ideas",
        feature2: "Gestión de tareas",
        feature3: "Bloques de tiempo"
      },
      vizu: {
        badge: "En vivo",
        tagline: "Diagramas Mermaid en el navegador",
        description: "Editor liviano para Mermaid.js: vista previa en vivo, zoom, varios diagramas, exportación a PNG y copia al portapapeles—un solo HTML, sin instalación.",
        feature1: "Vista previa en vivo",
        feature2: "Exportar PNG / JSON",
        feature3: "Sin build"
      },
      kumostudio: {
        badge: "En vivo",
        tagline: "Marca de estudio personal",
        description: "Kumo Studio es mi contenedor de producto: foco principal en un SaaS para gimnasios, boxes de CrossFit, centros de arte y espacios similares—resolver su dolor operativo principal y ver cómo la IA puede mejorar procesos y experiencia de usuarios. Desarrollo a medida y consultoría cuando encajen.",
        service1: "SaaS para espacios y estudios",
        service2: "IA en procesos y experiencia",
        service3: "Desarrollo a medida y consultoría",
        status: "Los productos SaaS siguen en desarrollo; el sitio del estudio, servicios y contacto ya están publicados."
      },
      link: {
        openApp: "Abrir app",
        visitSite: "Visitar sitio",
        viewOnGitHub: "Ver en GitHub"
      }
    },
    contact: {
      title: "Contacto",
      text: "Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. Ya sea que tengas una pregunta o solo quieras saludar, no dudes en contactarme."
    },
    footer: {
      credit: "Diseñado y construido por Diego Fagundez",
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
      projects: "Projetos",
      contact: "Contato",
      themeToggleToLight: "Mudar para modo claro",
      themeToggleToDark: "Mudar para modo escuro"
    },
    hero: {
      subtitle: "Engenheiro de Software",
      greeting: {
        tooltip: "Olá · Konnichiwa"
      }
    },
    about: {
      title: "Sobre",
      intro: "Sou Engenheiro de Software e prezo clareza, confiabilidade e melhoria contínua.",
      description: "Há <strong>nove anos</strong> em tecnologia, com uma <strong>base mais longa em qualidade de software</strong> e os <strong>últimos quatro anos</strong> focados em desenvolvimento. Trabalho principalmente com <strong>Node.js</strong> e arquiteturas <strong>orientadas a eventos</strong>, e estou aprofundando <strong>MongoDB</strong> e <strong>AWS</strong>. Ainda uso Golang, Python e TypeScript quando o problema pede. Acredito em <em>kaizen</em>—progresso pequeno e constante—e aplico isso ao que construo.",
      current: "Na <strong>IOL (Invertir Online)</strong>, faço parte do time que constrói o app para investimento internacional de residentes na Argentina, com caminho para escalar na América Latina. O stack é Node.js na AWS, com visão event-driven ponta a ponta."
    },
    experience: {
      title: "Experiência",
      iol: {
        date: "2026 - Presente",
        title: "Engenheiro de Software",
        description: "IOL (Invertir Online) — corretora online com produtos de investimento internacional, primeiro para residentes na Argentina e visão de expansão na América Latina.",
        resp1: "Desenvolvimento backend com Node.js em arquitetura orientada a eventos",
        resp2: "Trabalho com MongoDB, serviços AWS e integrações assíncronas",
        resp3: "Colaboração com produto e engenharia em entregas ágeis iterativas",
        resp4: "Responsabilidade do desenho técnico à operação em produção",
        resp5: "Aprendizado e aplicação de práticas cloud em domínio regulado"
      },
      kavak: {
        date: "2021 - 2025",
        title: "Engenheiro de Software",
        description: "Plataforma líder de e-commerce de compra, venda e financiamento de carros usados. Entrei em finanças durante a migração de monólito para microsserviços.",
        resp1: "Desenvolvimento backend com Golang, Node.js/TypeScript e Python",
        resp2: "Migração de APIs do monólito para microsserviços; novos serviços em Node.js e Golang",
        resp3: "Manutenção de vários backends e frontends de backoffice",
        resp4: "Monitoramento e métricas com DataDog e Grafana",
        resp5: "Entrega ponta a ponta, do design à implantação em produção"
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
    projects: {
      title: "Projetos",
      kadencia: {
        badge: "Ao vivo",
        tagline: "Rotinas e treinos",
        description: "Crie, salve e execute rotinas de treino com Supabase e Postgres. Importação por texto ou foto com OCR e parsing assistido por IA (Gemini ou Hugging Face). Stack: SvelteKit.",
        feature1: "Auth e dados na nuvem",
        feature2: "Importação com IA",
        feature3: "Sessões e histórico"
      },
      kaizen: {
        badge: "Ao vivo",
        tagline: "App de produtividade minimalista",
        description: "Projeto pessoal com a filosofia de melhoria contínua. Capture ideias, execute tarefas de forma incremental e acompanhe pequenos avanços diários.",
        feature1: "Captura de ideias",
        feature2: "Gestão de tarefas",
        feature3: "Blocos de tempo"
      },
      vizu: {
        badge: "Ao vivo",
        tagline: "Diagramas Mermaid no navegador",
        description: "Editor leve para Mermaid.js: pré-visualização ao vivo, zoom, vários diagramas, exportação PNG e cópia para a área de transferência—um único HTML, sem instalação.",
        feature1: "Pré-visualização ao vivo",
        feature2: "Exportar PNG / JSON",
        feature3: "Sem build"
      },
      kumostudio: {
        badge: "Ao vivo",
        tagline: "Marca de estúdio pessoal",
        description: "Kumo Studio é meu guarda-chuva de produto: foco principal em SaaS para academias, boxes de CrossFit, centros de arte e espaços similares—resolver a dor operacional e explorar como IA pode melhorar processos e experiência. Desenvolvimento sob medida e consultoria quando fizer sentido.",
        service1: "SaaS para espaços e estúdios",
        service2: "IA em processos e experiência",
        service3: "Desenvolvimento sob medida e consultoria",
        status: "Produtos SaaS em desenvolvimento; o site do estúdio, serviços e contato já estão no ar."
      },
      link: {
        openApp: "Abrir app",
        visitSite: "Visitar site",
        viewOnGitHub: "Ver no GitHub"
      }
    },
    contact: {
      title: "Entre em Contato",
      text: "Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma pergunta ou só quer dizer oi, sinta-se à vontade para entrar em contato."
    },
    footer: {
      credit: "Projetado e construído por Diego Fagundez",
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

function getPortfolioI18nString(keyPath) {
  const lang = localStorage.getItem('language') || 'en';
  return getNestedProperty(translations[lang], keyPath) || '';
}

window.getPortfolioI18nString = getPortfolioI18nString;

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

  document.dispatchEvent(new CustomEvent('portfolioLangChange'));
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
  module.exports = { changeLanguage, initI18n, translations, getPortfolioI18nString };
}
