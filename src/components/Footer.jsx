// src/components/Footer.jsx
import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram, FiMail } from 'react-icons/fi'; // Escolha os ícones desejados
import styles from './Footer.module.css'; // CSS Module para o Footer

const Footer = () => {
  // === Meus dados ===
  const linkedinUrl = "https://www.linkedin.com/in/constantino-mahenga/";
  const githubUrl = "https://github.com/ConstantinoMahenga";
  const instagramUrl = "https://www.instagram.com/constantinojosemahenga/";
  const emailAddress = "mailto:constantinomahenga@gmail.com";
  // ====================================

  // Ano atual para o copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {/* LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil no LinkedIn"
          title="LinkedIn" // Tooltip
          className={styles.socialLink}
        >
          <FiLinkedin className={styles.icon} />
        </a>

        {/* GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil no GitHub"
           title="GitHub"
          className={styles.socialLink}
        >
          <FiGithub className={styles.icon} />
        </a>

        {/* Instagram */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil no Instagram"
           title="Instagram"
          className={styles.socialLink}
        >
          <FiInstagram className={styles.icon} />
        </a>

        {/* Email */}
        <a
          href={emailAddress}
          aria-label="Enviar Email"
           title="Enviar Email"
          className={styles.socialLink}
           // target="_blank" não é usual para mailto, mas pode ser adicionado se desejado
        >
          <FiMail className={styles.icon} />
        </a>
      </div>

      <div className={styles.copyright}>
        {/* Use o seu nome aqui */}
        © {2024} Constantino Mahenga. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;