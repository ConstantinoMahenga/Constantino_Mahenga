// src/pages/About.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Importa o hook do contexto onde estão as traduções do About e de Skills
// Verifique o nome/caminho correto. Pode ser AppContext ou AboutContext.
// Vamos assumir AboutContext, conforme seu código anterior.
import { useAboutContext } from '../context/aboutContext'; // Verifique o caminho correto
// Ajuste se o nome do arquivo for minúsculo: import { useAboutContext } from '../context/aboutContext';

// Importa o CSS Module
import styles from './About.module.css';

// --- Importar Ícones de Diferentes Pacotes ---
import {
  // Simple Icons (si)
  SiReact, SiLaravel, SiPhp, SiPython, SiGit, SiGithub, SiFirebase,
  SiMysql, SiNodedotjs, SiJavascript, SiFlutter, SiBootstrap,
  SiTailwindcss, SiMui, SiHtml5, SiCss3, SiAmazon
} from 'react-icons/si';
// Tabler Icons (tb) - Exemplo para React Native
import { TbBrandReactNative } from 'react-icons/tb';
// Font Awesome (fa) - Para Java
import { FaJava } from 'react-icons/fa';
// --------------------------------------------


// --- Componente Reutilizável para Blocos de Texto (Animados) ---
const AboutBlock = ({ title, description, align }) => {
  const { ref, inView } = useInView({
    threshold: 0.30, // Usa o threshold que você definiu
    triggerOnce: false // Permite animar entrada/saída
  });

  return (
    <div
      ref={ref}
      className={`
        ${styles.aboutBlock}
        ${align === 'left' ? styles.alignLeft : styles.alignRight}
        ${inView ? styles.isVisible : ''}
      `}
    >
      {title && <h3 className={styles.blockTitle}>{title}</h3>}
      {description && <p className={styles.blockDescription}>{description}</p>}
    </div>
  );
};
// --- Fim do Componente AboutBlock ---


// --- Componente Principal da Seção About ---
const About = () => {
  // Obtém os textos traduzidos do AboutContext
  const { aboutTexts: texts } = useAboutContext();

  // --- Lista de Habilidades com Ícones (Ícone de Java corrigido) ---
  const skillsData = [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React JS', icon: SiReact },
    { name: 'React Native', icon: TbBrandReactNative },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'PHP', icon: SiPhp },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Java', icon: FaJava }, // <<< USA FaJava AGORA
    { name: 'Python', icon: SiPython },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Material UI', icon: SiMui },
    { name: 'AWS', icon: SiAmazon},
  

  ];
  // --- Fim da Lista de Habilidades ---

  // Tratamento inicial caso os textos ainda não tenham carregado
  if (!texts) {
    return <section id="about" className={styles.aboutSection}>Carregando Sobre...</section>;
  }

  // Estrutura os dados dos blocos usando os textos carregados
  const blocksData = [
    { title: texts.block1Title, desc: texts.block1Desc, align: 'left' },
    { title: texts.block2Title, desc: texts.block2Desc, align: 'right' },
    { title: texts.block3Title, desc: texts.block3Desc, align: 'left' },
    { title: texts.block4Title, desc: texts.block4Desc, align: 'right' },
    { title: texts.block5Title, desc: texts.block5Desc, align: 'left' },
    { title: texts.block6Title, desc: texts.block6Desc, align: 'right' },
  ];

  return (
    <section id="about" className={styles.aboutSection}>

      {/* Título Geral Opcional */}
      {/* {texts.sectionTitle && <h2 className={styles.sectionTitle}>{texts.sectionTitle}</h2>} */}

      {/* Container para os blocos de texto alternados e animados */}
       <div className={styles.aboutContainer}>
        {blocksData.map((block, index) => (
          (block.title || block.desc) && (
             <AboutBlock
                key={`block-${index}`}
                title={block.title}
                description={block.desc}
                align={block.align}
            />
          )
        ))}
      </div>

      {/* Área da Seção de Habilidades */}
      <div className={styles.skillsArea}>
        {/* Título da Seção de Habilidades (Traduzido) */}
        <h2 className={styles.skillsSectionTitle}>
          {texts.skillsTitle || 'Habilidades'} {/* Usa skillsTitle do contexto */}
        </h2>
        {/* Grid contendo os cards de cada habilidade */}
        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <div key={`skill-${index}`} className={styles.skillCard}>
              {/* Renderiza o componente de ícone */}
              <skill.icon className={styles.skillIcon} aria-hidden="true" />
              {/* Nome da habilidade */}
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;