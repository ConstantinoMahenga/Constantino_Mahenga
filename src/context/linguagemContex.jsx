// src/context/AppContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// Cria o contexto com o nome correto
const AppContext = createContext();

// Exporta o Provider com o nome correto
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  const [language, setLanguage] = useState(() => {
     const savedLang = localStorage.getItem('language');
     return savedLang || 'pt';
  });

  // Efeitos para tema e idioma (sem alterações)
  useEffect(() => {
    const root = window.document.documentElement;
    const oldTheme = theme === 'dark' ? 'light' : 'dark';
    root.classList.remove(oldTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

   useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Funções de toggle (sem alterações)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Nome (sem alterações)
  const YOUR_NAME = "Constantino Mahenga";

  // ============ Traduções - CORRIGIDO ============
  const translations = {
    pt: {
      // Home
      animatedTextSequence: [
        `Olá! Chamo-me ${YOUR_NAME}`, 2000, '', 500,
        'Sou Desenvolvedor Web', 1500, '',
        'Desenvolvedor de aplicações móveis', 1500, '',
        'Especialista em Desktop', 1500, '',

        'Desenvolvedor de Software', 1500, '',
        'Seja bem-vindo ao meu portfólio', 1500, '',
      ],
      welcome: "Desenvolvedor de Software moçambicano,  especializado em transformar ideias em produtos digitais funcionais e visualmente impactantes. Trabalho com startups, pequenas empresas e empreendedores que precisam tirar seus projetos do papel — rápido e com qualidade. Tenho experiência no desenvolvimento de aplicações web, mobile e desktop usando tecnologias modernas como React, TypeScript, Node.js, Firebase, Laravel e Flutter. Já desenvolvi desde apps de saude, beleza e plataformas de streaming até sistemas de reservas (venda de bilhetes de shows) e lojas online, sempre com foco na performance, usabilidade e design responsivo. Entrego soluções completas: da prototipagem à publicação, com código limpo, comunicação clara e prazos cumpridos.Se você precisa de um desenvolvedor confiável, que entende do negócio e cuida do seu projeto como se fosse dele, estou pronto para colaborar. Vamos construir algo incrível juntos ...",

      // **** Header - CHAVES ADICIONADAS ****
      navAbout: "Sobre",
      navProjects: "Projectos",
      navContact: "Contacto",
      ariaToggleDark: "Mudar para modo escuro",
      ariaToggleLight: "Mudar para modo claro",
      // ***********************************
    },
    en: {
       // Home
      animatedTextSequence: [
        `Hi! My name is ${YOUR_NAME}`, 2000, '', 500,
        "I'm a Web Developer", 1500, '',
        'Mobile Programmer', 1500, '',
        'Desktop Specialist', 1500, '',
        'Software Developer', 1500, '',	
        'Welcome to my portfolio', 1500, '',
      ],
      welcome: "Mozambican Software Developer, specialized in transforming ideas into functional and visually impactful digital products. I work with startups, small businesses, and entrepreneurs who need to get their projects off the ground quickly and with quality. I have experience in developing web, mobile, and desktop applications using modern technologies such as React, TypeScript, Node.js, Firebase, Laravel, and Flutter. I have developed everything from health and beauty apps to streaming platforms and reservation systems (ticket sales for shows) and online stores, always focusing on performance, usability, and responsive design. I deliver complete solutions: from prototyping to publishing, with clean code, clear communication, and deadlines met. If you need a reliable developer who understands the business and cares for your project as if it were his own, I'm ready to collaborate. Let's build something amazing together ...",
      // **** Header - CHAVES ADICIONADAS ****
      navAbout: "About",
      navProjects: "Projects",
      navContact: "Contact",
      ariaToggleDark: "Switch to dark mode",
      ariaToggleLight: "Switch to light mode",
      // ***********************************
    }
  };
  // =================================================

  // Calcula os textos atuais (sem alterações)
  const texts = translations[language];

  // Log para depuração (opcional, remova depois de confirmar que funciona)
  console.log("Contexto fornecendo texts:", texts);

  // Retorna o Provider com os valores corretos
  return (
    // Usa AppContext.Provider
    <AppContext.Provider value={{ theme, toggleTheme, language, changeLanguage, texts }}>
      {children}
    </AppContext.Provider>
  );
};

// Exporta o hook usando o contexto correto
export const useAppContext = () => {
  // Usa useContext(AppContext)
  const context = useContext(AppContext);
  if (!context) {
    // A mensagem de erro deve corresponder ao Provider
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};