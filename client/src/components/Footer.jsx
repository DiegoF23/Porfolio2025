import "../styles/AboutContact.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLanguage();
  const LINKEDIN_URL = "https://www.linkedin.com/in/diego-flores-aguirres-7b433076/";
  const GITHUB_URL = "https://github.com/DiegoF23";
  const WHATSAPP_URL = `https://wa.me/${t.contact.phone}?text=${encodeURIComponent(t.contact.whatsappMessage)}`;
  const MAILTO_URL = `mailto:${t.contact.email}?subject=${encodeURIComponent(t.contact.emailSubject)}&body=${encodeURIComponent(t.contact.emailBody)}`;
  const copy = lang === "es"
    ? {
        title: "Hablemos",
        subtitle: "Si querés revisar casos reales o conversar sobre una oportunidad, tenés acceso directo a mis enlaces clave.",
        links: "Explorar",
        contact: "Contacto directo",
        top: "Volver arriba",
      }
    : {
        title: "Let’s talk",
        subtitle: "If you want to review real work or discuss an opportunity, my key links are one click away.",
        links: "Explore",
        contact: "Direct contact",
        top: "Back to top",
      };

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__lead">
          <div className="kicker">{copy.title}</div>
          <p>{copy.subtitle}</p>
        </div>

        <div className="site-footer__cols">
          <div className="site-footer__col">
            <h3>{copy.links}</h3>
            <a href="#home">{t.nav.home}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#about">{lang === "es" ? "Sobre mí" : "About"}</a>
            <a href="#contact">{lang === "es" ? "Contacto" : "Contact"}</a>
          </div>

          <div className="site-footer__col">
            <h3>{copy.contact}</h3>
            <a href={MAILTO_URL}><FaEnvelope aria-hidden="true" /> <span>{t.contact.email}</span></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" /> <span>+{t.contact.phone}</span></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><FaLinkedin aria-hidden="true" /> <span>LinkedIn</span></a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> <span>GitHub</span></a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
          <a href="#home">{copy.top}</a>
        </div>
      </div>
    </footer>
  );
}
