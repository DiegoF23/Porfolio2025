/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const LANG_STORAGE_KEY = "portfolio-lang";

const translations = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      aboutContact: "Sobre mí · Contacto",
    },
    hero: {
      greeting: "HOLA, SOY",
      tagline: "Desarrollador de software especializado en aplicaciones web y de escritorio.",
      viewCV: "Ver CV",
      downloadCV: "Descargar CV",
      techAria: "Tecnologías",
    },
    projects: {
      title: "PROYECTOS",
      viewMore: "Ver más",
      viewLess: "Ver menos",
      github: "GitHub",
      private: "Privado",
      openImage: "Abrir imagen",
      previous: "Anterior",
      next: "Siguiente",
      goToView: "Ir a la vista",
      close: "Cerrar",
      image: "Imagen",
      vista: "Vista",
    },
    about: {
      title: "SOBRE MÍ",
      projectInMind: "¿En mente algún proyecto?",
      letsWork: "Trabajemos",
      together: "'juntos!'",
    },
    contact: {
      title: "CONTACTO",
      email: "dfcaffeprog@gmail.com",
      phone: "543812069920",
      whatsappMessage: "Hola Diego, te contacto desde tu portfolio 👋",
      emailSubject: "Contacto desde tu portfolio",
      emailBody: "Hola Diego, te escribo desde tu portfolio.",
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      mapAria: "San Miguel de Tucumán - zona Ciudadela (aprox)",
    },
    footer: {
      copyright: "Diego Flores",
    },
    theme: {
      toggle: "Cambiar tema",
      dark: "Oscuro",
      light: "Claro",
    },
    lang: {
      toggle: "Cambiar idioma",
      es: "ES",
      en: "EN",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      aboutContact: "About · Contact",
    },
    hero: {
      greeting: "HI, I'M",
      tagline: "Software developer specialized in web and desktop applications.",
      viewCV: "View CV",
      downloadCV: "Download CV",
      techAria: "Technologies",
    },
    projects: {
      title: "PROJECTS",
      viewMore: "View more",
      viewLess: "View less",
      github: "GitHub",
      private: "Private",
      openImage: "Open image",
      previous: "Previous",
      next: "Next",
      goToView: "Go to view",
      close: "Close",
      image: "Image",
      vista: "View",
    },
    about: {
      title: "ABOUT ME",
      projectInMind: "Got a project in mind?",
      letsWork: "Let's work",
      together: "'together!'",
    },
    contact: {
      title: "CONTACT",
      email: "dfcaffeprog@gmail.com",
      phone: "543812069920",
      whatsappMessage: "Hi Diego, I'm reaching out from your portfolio 👋",
      emailSubject: "Contact from your portfolio",
      emailBody: "Hi Diego, I'm writing from your portfolio.",
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      mapAria: "San Miguel de Tucumán - Ciudadela area (approx)",
    },
    footer: {
      copyright: "Diego Flores",
    },
    theme: {
      toggle: "Toggle theme",
      dark: "Dark",
      light: "Light",
    },
    lang: {
      toggle: "Change language",
      es: "ES",
      en: "EN",
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    return saved || "es";
  });

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = translations[lang];

  // Cache-buster to prevent browser from serving stale PDF in viewer
  const CV_VERSION = "20260527";
  const cvFile = lang === "en" ? `/cv-en.pdf?v=${CV_VERSION}` : `/cv.pdf?v=${CV_VERSION}`;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, cvFile }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
