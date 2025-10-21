import React, { useEffect, useMemo, useRef, useState } from "react";
import '../styles/Nav.css';

export default function Nav() {
  const navRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  // Elemento que scrollea (document)
  const scrollEl = useMemo(
    () => document.scrollingElement || document.documentElement || document.body,
    []
  );

  // Alto del header desde la CSS var --nav-h (fallback a 64)
  const getNavH = () => {
    const root = document.documentElement;
    const val = getComputedStyle(root).getPropertyValue("--nav-h").trim();
    const px = parseInt(val.replace("px", ""), 10);
    return Number.isFinite(px) && px > 0 ? px : (navRef.current?.offsetHeight || 64);
  };

  // Scroll suave con compensación del header fijo
  const smoothScrollToId = (hash) => {
    const target = document.querySelector(hash);
    if (!target) return;
    const navH = getNavH();
    const top = target.getBoundingClientRect().top + window.scrollY - navH;
    scrollEl.scrollTo({ top, behavior: "smooth" });
  };

  // Clicks del nav (sin depender del CSS global)
  const onLinkClick = (e, hash) => {
    e.preventDefault();
    smoothScrollToId(hash);
  };

  // Mostrar/ocultar botón “arriba” con scroll listener (sin IO)
  useEffect(() => {
    const threshold = 120; // aparece apenas salís del hero
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShowTop((window.scrollY || 0) > threshold);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header ref={navRef} className="nav">
        <div className="container nav__inner">
          <a href="#home" className="nav__brand" onClick={(e)=>onLinkClick(e, "#home")}>DF</a>
          <nav className="nav__links" aria-label="Secciones">
            <a href="#home" onClick={(e)=>onLinkClick(e, "#home")}>Inicio</a>
            <a href="#projects" onClick={(e)=>onLinkClick(e, "#projects")}>Proyectos</a>
            <a href="#about-contact" onClick={(e)=>onLinkClick(e, "#about-contact")}>Sobre mí • Contacto</a>
          </nav>
        </div>
      </header>

      {/* Botón volver arriba */}
      <button
        type="button"
        className={`to-top ${showTop ? "show" : ""}`}
        aria-label="Volver arriba"
        onClick={() => scrollEl.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M6 14l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  );
}
