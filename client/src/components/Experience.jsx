import React from 'react';

function Row({title, company, time, children}) {
  return (
    <article className="card">
      <h3 className="exp__title">{title}</h3>
      <div className="exp__meta">{company} · {time}</div>
      <p className="exp__desc">{children}</p>
    </article>
  );
}

export default function Experience(){
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="kicker">EXPERIENCIA</div>
        <div className="grid-2" style={{marginTop: '18px'}}>
          <Row title="Desarrollador Web" company="Empresa Ejemplo" time="2021 — Presente">
            Responsable del desarrollo de aplicaciones web utilizando tecnologías modernas.
          </Row>
          <Row title="Desarrollador Backend" company="Otra Empresa" time="2018 — 2021">
            Diseño e implementación de API y servicios Backend.
          </Row>
        </div>
      </div>
    </section>
  );
}
