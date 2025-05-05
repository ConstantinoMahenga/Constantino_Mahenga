import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useAppContext } from '../context/linguagemContex';
import styles from './Cabecalho.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, language, changeLanguage, texts } = useAppContext();

  const portugalFlagUrl = 'https://flagcdn.com/w40/pt.png';
  const ukFlagUrl = 'https://flagcdn.com/w40/gb.png';

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">CM</a>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          <li><a href="#about" onClick={() => setMenuOpen(false)} className={styles.navLink}>{texts?.navAbout || 'Sobre'}</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)} className={styles.navLink}>{texts?.navProjects || 'Projetos'}</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className={styles.navLink}>{texts?.navContact || 'Contato'}</a></li>
        </ul>
      </nav>

      <div className={styles.controls}>
        <div className={styles.languageSelector}>
          <img
            src={portugalFlagUrl}
            alt="PT"
            className={`${styles.flagIcon} ${language === 'pt' ? styles.active : ''}`}
            onClick={() => changeLanguage('pt')}
          />
          <img
            src={ukFlagUrl}
            alt="EN"
            className={`${styles.flagIcon} ${language === 'en' ? styles.active : ''}`}
            onClick={() => changeLanguage('en')}
          />
        </div>

        <button
          onClick={toggleTheme}
          className={styles.themeButton}
          aria-label={theme === 'light' ? texts?.ariaToggleDark : texts?.ariaToggleLight}
        >
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
