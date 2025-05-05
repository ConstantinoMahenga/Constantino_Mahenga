// src/context/AboutContext.jsx
import React, { createContext, useContext } from 'react';
// Ajuste o caminho se o seu AppContext/LinguagemContext estiver em outro lugar
import { useAppContext } from './linguagemContex';

const AboutContext = createContext();

export const AboutProvider = ({ children }) => {
  const { language } = useAppContext();

  const aboutTranslations = {
    pt: {
      sectionTitle: "Conheça-me Melhor",
      block1Title: "Minha Jornada",
      block1Desc: "Comecei minha aventura na programação por motivo de Universidade e acabei me apaixondando por isso. Desde então, tenho me dedicado a aprender e a construir projetos que visam mudar o mundo, principalmente aqui na minha região Moçambique Africa.",
      block2Title: "Filosofia de Desenvolvimento e trabalho",
      block2Desc: "Acredito em código limpo, performance otimizada e design centrado no usuário. A colaboração e a comunicação são chave para o sucesso de qualquer projeto.",
      block3Title: "Tecnologias Favoritas",
      block3Desc: "Tenho um carinho especial por React (Javascript), Flutter e Laravel (PHP), mas estou sempre explorando novas ferramentas como Python e GO para expandir meu arsenal.",
      block4Title: "Além do Código",
      block4Desc: "Quando não estou programando, gosto de assistir anime, jogar futebol e acompanhar as últimas novidades em inteligencia artificial.",
      block5Title: "Objetivos Futuros",
      block5Desc: "Estou focado em aprofundar meus conhecimentos em Inteligência Artificial, DevOps e contribuir para projetos desafiadores.",
      block6Title: "Vamos Conectar!",
      block6Desc: "Se você tem um projeto em mente, uma pergunta ou apenas quer trocar ideias sobre tecnologia, sinta-se à vontade para entrar em contato!",
      // ========== ADICIONAR ESTA LINHA ==========
      skillsTitle: "Habilidades Principais",
      // ==========================================
    },
    en: {
      sectionTitle: "Get to Know Me Better",
      block1Title: "My Journey",
      block1Desc: "I started my programming journey for university and ended up falling in love with it. Since then, I've been dedicated to learning and building projects that aim to change the world, especially here in my region Mozambique Africa.",
      block2Title: "Development Philosophy",
      block2Desc: "I believe in clean code, optimized performance, and user-centered design. Collaboration and communication are key to the success of any project.",
      block3Title: "Favorite Technologies",
      block3Desc: "I have a special fondness for React (Javascript), Flutter, and Laravel (PHP), but I'm always exploring new tools like Python and GO to expand my arsenal.",
      block4Title: "Beyond the Code",
      block4Desc: "When I'm not coding, I enjoy watching anime, playing football, and keeping up with the latest news in artificial intelligence.",
      block5Title: "Future Goals",
      block5Desc: "I'm focused on deepening my knowledge in Artificial Intelligence, DevOps, and contributing to challenging projects.",
      block6Title: "Let's Connect!",
      block6Desc: "If you have a project in mind, a question, or just want to exchange ideas about technology, feel free to get in touch!",
      // ========== ADD THIS LINE ==========
      skillsTitle: "Core Skills",
      // ===================================
    }
  };

  const aboutTexts = aboutTranslations[language];

  return (
    <AboutContext.Provider value={{ aboutTexts }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAboutContext = () => {
  const context = useContext(AboutContext);
  if (!context) { throw new Error('useAboutContext must be used within an AboutProvider'); }
  return context;
};