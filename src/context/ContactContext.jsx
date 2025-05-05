// src/context/ContactContext.jsx
import React, { createContext, useContext } from 'react';
// Importa o hook do contexto principal para LER o idioma
import { useAppContext } from './linguagemContex'; // Verifique o caminho correto

const ContactContext = createContext();

// Traduções específicas do Formulário de Contato
const contactTranslations = {
    pt: {
      contactTitle: "Entre em Contacto",
      contactNameLabel: "Nome",
      contactNamePlaceholder: "Qual é o seu nome?",
      contactEmailLabel: "Email",
      contactEmailPlaceholder: "O seu melhor email",
      contactMessageLabel: "Mensagem",
      contactMessagePlaceholder: "Escreva aqui a sua mensagem...",
      contactSendButton: "Enviar Mensagem",
      contactSending: "A enviar...",
      contactSuccess: "Mensagem enviada com sucesso! Obrigado.",
      contactError: "Erro ao enviar. Por favor, tente novamente.",
    },
    en: {
      contactTitle: "Get In Touch",
      contactNameLabel: "Name",
      contactNamePlaceholder: "What's your name?",
      contactEmailLabel: "Email",
      contactEmailPlaceholder: "Your best email address",
      contactMessageLabel: "Message",
      contactMessagePlaceholder: "Write your message here...",
      contactSendButton: "Send Message",
      contactSending: "Sending...",
      contactSuccess: "Message sent successfully! Thank you.",
      contactError: "Error sending message. Please try again.",
    }
};

export const ContactProvider = ({ children }) => {
  // Obtém o idioma atual do contexto principal (AppContext)
  const { language } = useAppContext();

  // Seleciona as traduções corretas com base no idioma do AppContext
  const contactTexts = contactTranslations[language];

  return (
    <ContactContext.Provider value={{ contactTexts }}>
      {children}
    </ContactContext.Provider>
  );
};

// Hook customizado para usar este contexto específico de Contato
export const useContactContext = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContactContext must be used within a ContactProvider');
  }
  return context;
};