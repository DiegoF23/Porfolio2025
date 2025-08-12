import React from 'react';

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#home" className="nav__brand">DF</a>
        <nav className="nav__links" aria-label="Secciones">
          <a href="#home">Inicio</a>
          <a href="#experience">Experiencia</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
