// src/pages/Contact.jsx
import React, { useState, useRef } from 'react'; // Adicionado useRef
import emailjs from '@emailjs/browser';        // Importa emailjs
import { useContactContext } from '../context/ContactContext'; // Contexto das traduções
import styles from './Contact.module.css';

// Lê as variáveis de ambiente (fora do componente)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { contactTexts: texts } = useContactContext();
  const form = useRef(); // Referência para o elemento <form>

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se as variáveis de ambiente foram carregadas
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error("Erro: Variáveis de ambiente do EmailJS não configuradas corretamente no .env");
        setSubmissionStatus('error');
        // Poderia adicionar uma mensagem mais específica para o usuário aqui
        // if (texts) { texts.contactError = "Erro de configuração. Contacte o suporte."; }
        return; // Impede o envio
    }


    setSubmissionStatus('sending');

    // === PREPARA OS PARÂMETROS PARA O TEMPLATE EMAILJS ===
    // !! IMPORTANTE: As chaves aqui (from_name, from_email, message)
    // !! DEVEM CORRESPONDER EXATAMENTE às variáveis {{...}} no seu template EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      // Pode adicionar mais parâmetros se precisar, ex:
      // to_name: "Constantino Mahenga" // Se tiver {{to_name}} no template
    };
    // =====================================================

    // === ENVIA O EMAIL USANDO EMAILJS ===
    emailjs.send(
        SERVICE_ID,     // Seu Service ID
        TEMPLATE_ID,    // Seu Template ID
        templateParams, // Os dados do formulário mapeados para as variáveis do template
        PUBLIC_KEY      // Sua Public Key
      )
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSubmissionStatus('success');
          // Limpa o formulário
          setName('');
          setEmail('');
          setMessage('');
          // Opcional: Reseta a mensagem de status após algum tempo
          setTimeout(() => setSubmissionStatus(null), 5000);
      })
      .catch((error) => {
          console.error('EmailJS Error:', error.text || JSON.stringify(error));
          setSubmissionStatus('error');
           // Opcional: Reseta a mensagem de status após algum tempo
          setTimeout(() => setSubmissionStatus(null), 7000);
      });
    // ================================
  };

  // --- O restante do JSX permanece quase igual ---
  if (!texts) {
    return <section id="contact" className={styles.contactSection}>Carregando Contato...</section>;
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>{texts.contactTitle}</h2>

        {/* Adiciona a ref ao formulário */}
        <form ref={form} onSubmit={handleSubmit} className={styles.contactForm}>
          {/* Campo Nome */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>{texts.contactNameLabel}</label>
            <input
              type="text" id="name" name="from_name" /* name="from_name" ajuda EmailJS se usar sendForm */
              className={styles.formInput}
              placeholder={texts.contactNamePlaceholder}
              value={name} onChange={(e) => setName(e.target.value)} required
              disabled={submissionStatus === 'sending'}
            />
          </div>

          {/* Campo Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>{texts.contactEmailLabel}</label>
            <input
              type="email" id="email" name="from_email" /* name="from_email" */
              className={styles.formInput}
              placeholder={texts.contactEmailPlaceholder}
              value={email} onChange={(e) => setEmail(e.target.value)} required
              disabled={submissionStatus === 'sending'}
            />
          </div>

          {/* Campo Mensagem */}
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>{texts.contactMessageLabel}</label>
            <textarea
              id="message" name="message" rows="6" /* name="message" */
              className={styles.formTextarea}
              placeholder={texts.contactMessagePlaceholder}
              value={message} onChange={(e) => setMessage(e.target.value)} required
              disabled={submissionStatus === 'sending'}
            ></textarea>
          </div>

           {/* Mensagens de Status */}
          <div className={styles.statusMessageContainer}>
             {/* ... (mensagens de status como antes) ... */}
             {submissionStatus === 'sending' && <p className={styles.statusMessage}>{texts.contactSending}</p>}
             {submissionStatus === 'success' && <p className={`${styles.statusMessage} ${styles.success}`}>{texts.contactSuccess}</p>}
             {submissionStatus === 'error' && <p className={`${styles.statusMessage} ${styles.error}`}>{texts.contactError}</p>}
          </div>

          {/* Botão Enviar */}
          <button type="submit" className={styles.submitButton} disabled={submissionStatus === 'sending'}>
             {submissionStatus === 'sending' ? texts.contactSending : texts.contactSendButton}
           </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;