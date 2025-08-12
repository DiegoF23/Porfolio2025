import React from 'react';

export default function About(){
  return (
    <section id="experience" className="section">
      <div className="container twocol">
        {/* Izquierda: About me */}
        <div>
          <div className="kicker">ABOUT ME</div>
          <p className="subtle" style={{ marginTop: 10, maxWidth: '60ch' }}>
            He acumulado experiencia en software para clientes exigentes y entornos robustos.
            Me enfoco en calidad, performance y DX.
          </p>
        </div>

        {/* Derecha: experiencia destacada */}
        <article className="card">
          <h3 className="exp__title">Desarrollador Backend</h3>
          <div className="exp__meta">Otra Empresa · 2021 — 2021</div>
          <p className="exp__desc">
            Diseño e implementación de APIs y servicios Backend. Métricas, pruebas y performance.
          </p>
        </article>
      </div>
    </section>
  );
}
