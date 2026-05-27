import "../styles/AboutContact.css";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const WHATSAPP_URL = `https://wa.me/${t.contact.phone}?text=${encodeURIComponent(t.contact.whatsappMessage)}`;
  const MAILTO_URL = `mailto:${t.contact.email}?subject=${encodeURIComponent(t.contact.emailSubject)}&body=${encodeURIComponent(t.contact.emailBody)}`;

  const GITHUB_URL = "https://github.com/DiegoF23";
  const LINKEDIN_URL = "https://www.linkedin.com/in/diego-flores-7b433076";
  const INSTAGRAM_URL = "https://www.instagram.com/diegofloresdev/?igsh=MWtybW9scmoycWZ1aw%3D%3D#";

  return (
    <section id="contact" className="section contact">
      <div className="kicker">{t.contact.title}</div>
      <div className="contact-card">
        <div className="contact__grid">
          <div className="contact__social">
            <a className="contact__social-link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label={t.contact.github}>
              <FaGithub /><span>{t.contact.github}</span>
            </a>
            <a className="contact__social-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={t.contact.instagram}>
              <CiInstagram /><span>{t.contact.instagram}</span>
            </a>
            <a className="contact__social-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label={t.contact.linkedin}>
              <FaLinkedin /><span>{t.contact.linkedin}</span>
            </a>
          </div>
          <div className="contact__line">
            <a className="contact__link" href={MAILTO_URL} aria-label={`Email ${t.contact.email}`}>
              <FaEnvelope className="contact__icon" aria-hidden="true" />
              <span>{t.contact.email}</span>
            </a>
          </div>

          <div className="contact__line">
            <a className="contact__link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="contact__icon" aria-hidden="true" />
              <span>+{t.contact.phone}</span>
            </a>
          </div>

          <div className="map" aria-label={t.contact.mapAria}>
            <iframe
              title={t.contact.mapAria}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={
                "https://www.google.com/maps/embed?pb=" +
                "!1m18!1m12!1m3!1d3415.341814245707!2d-65.2189!3d-26.8284" +
                "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1f0b" +
                "2d8e1b%3A0x0!2sAv%20Col%C3%B3n%20500%2C%20San%20Miguel%20de%20Tucum%C3%A1n" +
                "!5e0!3m2!1ses-419!2sar!4v1690000000000"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
