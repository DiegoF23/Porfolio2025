import '../styles/Hero.css';
import { TECH_LIST } from "../constants/techMap";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t, cvFile } = useLanguage();
  const LOOP = [...TECH_LIST, ...TECH_LIST];

  return (
    <section id="home" className="section section--hero">
      <div className="container hero">
        <header className="hero__copy" aria-label={t.hero.greeting}>
          <div className="hero__kicker">{t.hero.greeting}</div>
          <h1 className="hero__name" aria-label="Diego Flores">
            <span className="hero__name-line">Diego</span>
            <span className="hero__name-line">Flores</span>
          </h1>
          <p className="hero__tagline">
            {t.hero.tagline}
          </p>
          <div className="hero__cta" role="group" aria-label={t.hero.viewCV}>
            <a className="btn btn--solid" href={cvFile} target="_blank" rel="noopener noreferrer">{t.hero.viewCV}</a>
            <a className="btn btn--ghost" href={cvFile} download>{t.hero.downloadCV}</a>
          </div>
        </header>

        <div className="hero__photo-wrapper" aria-label="Foto de perfil">
          <div className="hero__photo">
            <img className="photo-full" src="/profile.webp" alt="Diego Flores" />
          </div>
        </div>

        <div className="hero__icons" role="region" aria-label={t.hero.techAria}>
          <div className="marquee" aria-live="off">
            <ul className="track track--icons">
              {LOOP.map((t, i) => (
                <li
                  key={`${t.id}-${i}`}
                  className="i"
                  data-label={t.label}
                  title={t.label}
                  aria-label={t.label}
                >
                  <t.Icon aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
