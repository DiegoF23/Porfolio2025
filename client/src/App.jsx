import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import AboutContact from './components/AboutContact.jsx';
import Footer from './components/Footer.jsx';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { lang } = useLanguage();
  const skipLabel = lang === 'es' ? 'Saltar al contenido' : 'Skip to content';

  return (
    <>
      <a className="skip-link" href="#main-content">{skipLabel}</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Projects />
        <AboutContact />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
