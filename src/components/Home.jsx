// src/pages/Home.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useAppContext } from '../context/linguagemContex'; // Ou seu contexto correto
import styles from './Home.module.css'; // Seu CSS Module

const Home = () => {
  const { texts, theme, language } = useAppContext();
  const programmingImageUrl = 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'; // Sua imagem

  // === URL e Nome do Arquivo para Download ===
  const fileId = "1BVnHJI5CA1q_Tw9gWTbaVhGrY8U5ysBR";
  const cvDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const cvFilename = "Constantino_Mahenga_CV.pdf"; // << NOME SUGERIDO PARA O ARQUIVO BAIXADO (Use .pdf, .docx, etc.)
  // ==========================================

  return (
    <section className={`${styles.homeSection} ${theme === 'dark' ? styles.darkMode : ''}`}>
      <div className={styles.textContainer}>
        <TypeAnimation
          key={language}
          sequence={texts.animatedTextSequence}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          className={styles.animatedText}
          speed={50}
          deletionSpeed={65}
          style={{ minHeight: '2.5em', display: 'block' }}
        />
        <p className={styles.welcome}>{texts.welcome}</p>

        {/* === BOTÃO DE DOWNLOAD DO CV === */}
        <a
          href={cvDownloadUrl}
          download={cvFilename}          // << Ativa o download e sugere o nome do arquivo
          className={styles.ctaButton}   // << Usa a MESMA classe do seu botão anterior para manter o estilo
          target="_blank"                // << Abre em nova aba (boa prática para downloads)
          rel="noopener noreferrer"      // << Medida de segurança
          title="Baixar Curriculum Vitae" // << Tooltip opcional
        >
          Curriculum Vitae {/* << Texto visível do botão */}
        </a>
        {/* ============================= */}

        {/* Se você tinha outro botão CTA, pode remover ou colocar este ao lado dele */}
        {/* <button className={styles.ctaButton}>Ver Projetos</button> */}

      </div>

      <div className={styles.imageContainer}>
        <img
            src={programmingImageUrl}
            alt="Ilustração ou foto de programação"
            className={styles.programmingImage}
            loading="lazy"
        />
      </div>
    </section>
  );
};

export default Home;