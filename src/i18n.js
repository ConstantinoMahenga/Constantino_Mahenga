import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      greeting: [
        'Hello! My name is {{name}}',
        'I am a Web Developer',
        'Mobile and Desktop Programmer',
        'Welcome to my portfolio',
      ]
    }
  },
  pt: {
    translation: {
      greeting: [
        'Olá! Chamo-me {{name}}',
        'Sou Desenvolvedor Web',
        'Programador Mobile e Desktop',
        'Seja bem-vindo ao meu portfólio',
      ]
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
