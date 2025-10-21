import React from "react";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import "../styles/AboutContact.css";

/**
 * Wrapper de “Sobre mí” + “Contacto”.
 * - Desktop: 2 columnas
 * - Mobile: 1 columna (apilados)
 * - Usa .container para alinear con el resto del layout
 */
export default function AboutContact() {
  return (
    <section id="about-contact" className="section">
      <div className="container about-contact">
        {/* hijos directos del grid */}
        <About />
        <Contact />
      </div>
    </section>
  );
}
