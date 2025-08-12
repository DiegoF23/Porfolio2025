import React from 'react';
import './Hero.css';

export default function Hero(){

    const tech = [
  { id: 'html',    label: 'HTML5', shape: 'diamond',
    svg: (<svg viewBox="0 0 24 24" role="img" aria-label="HTML5"><path fill="currentColor" d="M3 3h18l-2 16-7 2-7-2L3 3zm4 4l1 9 4 1 4-1 1-9H7z"/></svg>) },
  { id: 'css',     label: 'CSS3',  shape: 'hex',
    svg: (<svg viewBox="0 0 24 24" role="img" aria-label="CSS3"><path fill="currentColor" d="M3 3h18l-2 16-7 2-7-2L3 3zm5 4h8l-1 7-4 1-4-1 1-7z"/></svg>) },
  { id: 'js',      label: 'JavaScript', shape: 'circle',
    svg: (<svg viewBox="0 0 24 24" role="img" aria-label="JavaScript"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor"/><text x="8" y="17" fontSize="9" fill="currentColor">JS</text></svg>) },
  { id: 'react',   label: 'React', shape: 'hex',
    svg: (<svg viewBox="0 0 256 256" role="img" aria-label="React"><g fill="none" stroke="currentColor" strokeWidth="12"><circle cx="128" cy="128" r="18"/><ellipse cx="128" cy="128" rx="78" ry="28"/><ellipse cx="128" cy="128" rx="78" ry="28" transform="rotate(60 128 128)"/><ellipse cx="128" cy="128" rx="78" ry="28" transform="rotate(120 128 128)"/></g></svg>) },
  { id: 'node',    label: 'Node.js', shape: 'diamond',
    svg: (<svg viewBox="0 0 24 24" role="img" aria-label="Node"><polygon points="12,3 21,8 21,16 12,21 3,16 3,8" fill="none" stroke="currentColor"/></svg>) },
  { id: 'git',     label: 'Git', shape: 'circle',
    svg: (<svg viewBox="0 0 24 24" role="img" aria-label="Git"><path d="M4 12l8-8 8 8-8 8-8-8z" fill="none" stroke="currentColor"/><circle cx="12" cy="9" r="1.2" fill="currentColor"/></svg>) },
];


  return (
    <section id="home" className="section">
      <div className="container hero">
        {/* Columna izquierda */}
        <div className="hero__copy">
          <div className="kicker">HOLA, SOY</div>
          <h1 className="h-title">Diego Flores</h1>
          <p className="subtle" style={{ maxWidth: '48ch', marginTop: 14 }}>
            Desarrollador de software especializado en aplicaciones web y de escritorio.
          </p>
        </div>

        {/* Foto COMPLETA (sin recortes) */}
      {/* Foto COMPLETA con overlays controlados */}
<div className="hero__photo">
  <img className="photo-full" src="/profile.jpeg" alt="Diego Flores" />
  {/* Overlays solo en bordes (blur) */}
  <span className="edge edge-top" aria-hidden="true"></span>
  <span className="edge edge-left" aria-hidden="true"></span>
  <span className="edge edge-right" aria-hidden="true"></span>
  {/* Fade del último 10% inferior (sin blur) */}
  <span className="fade-bottom" aria-hidden="true"></span>
</div>


     <div className="hero__icons" aria-label="Tecnologías">
  <ul className="tech-belt">
    {tech.map(t => (
      <li key={t.id} className={`tech ${t.shape}`} title={t.label} aria-label={t.label}>
        <span className="tech__badge" aria-hidden="true"></span>
        {t.svg}
      </li>
    ))}
  </ul>
</div>
      </div>
    </section>
  );
}
