import { useEffect, useMemo, useRef, useState } from "react";
import '../styles/Nav.css';
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Nav() {
  const navRef = useRef(null);
  const [showTop, setShowTop] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const scrollEl = useMemo(
    () => document.scrollingElement || document.documentElement || document.body,
    []
  );

  const getNavH = () => {
    const root = document.documentElement;
    const val = getComputedStyle(root).getPropertyValue("--nav-h").trim();
    const px = parseInt(val.replace("px", ""), 10);
    return Number.isFinite(px) && px > 0 ? px : (navRef.current?.offsetHeight || 64);
  };

  const smoothScrollToId = (hash) => {
    const target = document.querySelector(hash);
    if (!target) return;
    const navH = getNavH();
    const top = target.getBoundingClientRect().top + window.scrollY - navH;
    scrollEl.scrollTo({ top, behavior: "smooth" });
  };

  const onLinkClick = (e, hash) => {
    e.preventDefault();
    smoothScrollToId(hash);
  };

  useEffect(() => {
    const threshold = 120;
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
          <a href="#home" className="nav__brand" onClick={(e) => onLinkClick(e, "#home")} aria-label="Diego Flores">
            <img className="nav__brand-icon" src="/df-icon.svg" alt="" aria-hidden="true" />
          </a>
          <nav className="nav__links" aria-label={lang === "es" ? "Navegación principal" : "Main navigation"}>
            <a href="#home" onClick={(e) => onLinkClick(e, "#home")}>{t.nav.home}</a>
            <a href="#projects" onClick={(e) => onLinkClick(e, "#projects")}>{t.nav.projects}</a>
            <a href="#about-contact" onClick={(e) => onLinkClick(e, "#about-contact")}>{t.nav.aboutContact}</a>
          </nav>
          <div className="nav__controls">
            <button
              className="nav__toggle"
              onClick={toggleLang}
              aria-label={t.lang.toggle}
              title={t.lang.toggle}
            >
              {lang === "es" ? "ES" : "EN"}
            </button>
            <button
              className="nav__toggle"
              onClick={toggleTheme}
              aria-label={t.theme.toggle}
              title={t.theme.toggle}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </header>

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
