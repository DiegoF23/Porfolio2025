import React from 'react';
import './Hero.css';

export default function Hero() {
  const techIcons = [
    { id: 'html',    label: 'HTML5',    shape: 'diamond',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 3h18l-2 16-7 2-7-2L3 3zm4 4l1 9 4 1 4-1 1-9H7z"/></svg>) },
    { id: 'css',     label: 'CSS3',     shape: 'hex',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 3h18l-2 16-7 2-7-2L3 3zm5 4h8l-1 7-4 1-4-1 1-7z"/></svg>) },
    { id: 'js',      label: 'JavaScript', shape: 'circle',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor"/><text x="8" y="17" fontSize="9" fill="currentColor">JS</text></svg>) },
    { id: 'react',   label: 'React',    shape: 'hex',
      svg: (<svg viewBox="0 0 256 256" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="12"><circle cx="128" cy="128" r="18"/><ellipse cx="128" cy="128" rx="78" ry="28"/><ellipse cx="128" cy="128" rx="78" ry="28" transform="rotate(60 128 128)"/><ellipse cx="128" cy="128" rx="78" ry="28" transform="rotate(120 128 128)"/></g></svg>) },
    { id: 'angular', label: 'Angular',  shape: 'diamond',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 21,8 18.5,20 12,22 5.5,20 3,8" fill="none" stroke="currentColor"/><path d="M12 7l4 9h-2l-.8-2H10.8L10 16H8l4-9z" fill="currentColor"/></svg>) },
    { id: 'node',    label: 'Node.js',  shape: 'diamond',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,3 21,8 21,16 12,21 3,16 3,8" fill="none" stroke="currentColor"/></svg>) },
    { id: 'express', label: 'Express',  shape: 'circle',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><text x="3" y="15" fontSize="9" fill="currentColor">Ex</text></svg>) },
    { id: 'mysql',   label: 'MySQL',    shape: 'hex',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor"/><text x="6" y="15" fontSize="7" fill="currentColor">My</text></svg>) },
    { id: 'sqlsrv',  label: 'SQL Server', shape: 'hex',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor"/><text x="6" y="15" fontSize="7" fill="currentColor">SQL</text></svg>) },
    { id: 'csharp',  label: 'C#',       shape: 'circle',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor"/><text x="9" y="15" fontSize="8" fill="currentColor">C#</text></svg>) },
    { id: 'dotnet',  label: '.NET',     shape: 'diamond',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="6" width="14" height="12" rx="2" fill="none" stroke="currentColor"/><text x="7" y="14" fontSize="7" fill="currentColor">.NET</text></svg>) },
    { id: 'git',     label: 'Git',      shape: 'circle',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12l8-8 8 8-8 8-8-8z" fill="none" stroke="currentColor"/><circle cx="12" cy="9" r="1.2" fill="currentColor"/></svg>) },
    { id: 'python',  label: 'Python',   shape: 'hex',
      svg: (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h5a3 3 0 013 3v2H9a3 3 0 01-3-3V7a1 1 0 011-1zM16 18h-5a3 3 0 01-3-3v-2h7a3 3 0 013 3v1a1 1 0 01-1 1z" fill="none" stroke="currentColor"/></svg>) },
  ];
  const loop = [...techIcons, ...techIcons];

  return (
    <section id="home" className="section section--hero">
      <div className="container hero">
        {/* ====== COPY ====== */}
        <header className="hero__copy" aria-label="Presentación">
          <div className="hero__kicker">HOLA, SOY</div>

          <h1 className="hero__name" aria-label="Diego Flores">
            <span className="hero__name-line">Diego</span>
            <span className="hero__name-line">Flores</span>
          </h1>

          <p className="hero__tagline">
            Desarrollador de software especializado en aplicaciones web y de escritorio.
          </p>

          <div className="hero__cta" role="group" aria-label="Currículum">
            <a
              className="btn btn--solid"
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver CV
            </a>
            <a
              className="btn btn--ghost"
              href="/cv.pdf"
              download="CV_Diego_Flores.pdf"
            >
              Descargar CV
            </a>
          </div>
        </header>

        {/* ====== FOTO ====== */}
        <div className="hero__photo" aria-label="Foto de perfil">
          <img className="photo-full" src="/profile.jpeg" alt="Diego Flores" />
          <span className="fade-bottom" aria-hidden="true"></span>
        </div>

        {/* ====== ICONOS – carrusel infinito ====== */}
        <div className="hero__icons" role="region" aria-label="Tecnologías">
          <div className="marquee" aria-live="off">
            <ul className="track">
              {loop.map((t, i) => (
                <li
                  key={`${t.id}-${i}`}
                  className={`tech ${t.shape}`}
                  data-label={t.label}
                  title={t.label}
                  aria-label={t.label}
                >
                  <span className="tech__badge" aria-hidden="true"></span>
                  {t.svg}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
