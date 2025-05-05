// src/App.jsx
import React from 'react';
import { AppProvider, useAppContext } from './context/linguagemContex'; // AppContext é necessário pelo AboutProvider
import { AboutProvider } from './context/aboutContext'; // Importa o novo Provider
import Header from './components/Cabecalho';
import Home from './components/Home';
import About from './components/Sobre';
import { ContactProvider } from './context/ContactContext'; // << Para Contact
import Contact from './components/Contacto';
import Footer from './components/Footer';


// import './App.css';

function AppContent() {
  // Use este componente interno para garantir que useAppContext() seja chamado dentro do AppProvider
  const { language } = useAppContext(); // Exemplo se precisasse do idioma aqui
  console.log("AppContent renderizando com idioma:", language); // Debug

  return (
    <>
      {/* <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> {/* Layout para empurrar footer para baixo */}
      <Header /> 
      <main>
        <Home />
        {/* Envolve SÓ o About com seu Provider específico */}
        <AboutProvider>
          <About />
        </AboutProvider>

        {/* Envolve SÓ o Contact com seu Provider específico */}
        <ContactProvider>
          <Contact />
        </ContactProvider>
        {/* Outras seções */}
      </main>
      <Footer />
    </>
  );
}


function App() {
  return (
    // AppProvider envolve tudo para fornecer idioma e tema globais
    <AppProvider>
        <AppContent />
    </AppProvider>
  );
}

export default App;

