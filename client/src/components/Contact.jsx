import React from "react";
import "../styles/AboutContact.css";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact(){
  const EMAIL = "dfcaffeprog@gmail.com";
  const PHONE_E164 = "543812069920";
  const WHATSAPP_URL = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent("Hola Diego, te contacto desde tu portfolio 👋")}`;
  const MAILTO_URL   = `mailto:${EMAIL}?subject=${encodeURIComponent("Contacto desde tu portfolio")}&body=${encodeURIComponent("Hola Diego, te escribo desde tu portfolio.")}`;

  // TODO: pega tus URLs reales
  const GITHUB_URL   = "https://github.com/DiegoF23";
  const LINKEDIN_URL = "https://www.linkedin.com/in/diego-flores-7b433076/";

  return (
    <section id="contact" className="section contact">
      <div className="kicker">CONTACTO</div>
      <h2 className="section-title"></h2>
      <div className="contact-card">
        <div className="contact__grid">
          <div className="contact__line">
            <a className="contact__link" href={MAILTO_URL} aria-label={`Enviar email a ${EMAIL}`}>
              <FaEnvelope className="contact__icon" aria-hidden="true" />
              <span>{EMAIL}</span>
            </a>
          </div>

          <div className="contact__line">
            <a className="contact__link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Enviar WhatsApp">
              <FaWhatsapp className="contact__icon" aria-hidden="true" />
              <span>+{PHONE_E164}</span>
            </a>
          </div>

          <div className="contact__social">
            <a className="contact__social-link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub /><span>GitHub</span>
            </a>
            <a className="contact__social-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin /><span>LinkedIn</span>
            </a>
          </div>

          {/* Mapa (zona aproximada — Ciudadela, Av. Colón al 500) */}
          <div className="map" aria-label="Zona aproximada: San Miguel de Tucumán, barrio Ciudadela">
            <iframe
              title="San Miguel de Tucumán - zona Ciudadela (aprox)"
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
