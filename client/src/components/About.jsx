import React from "react";
import "../styles/AboutContact.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="kicker">SOBRE MÍ</div>

      {/* Bloque estilo “código” */}
      <div className="about-code card" aria-label="Sobre mí en formato código">
        <div className="about-code__header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="file">about.ts</span>
        </div>

        <pre className="about-code__body" tabIndex={0}>
{`// Perfil breve
`}<span className="kw">const</span> <span className="id">about</span> <span className="op">=</span> <span className="p">{`{`}</span>{`
  `}<span className="key">name</span><span className="op">:</span> <span className="str">"Diego Flores"</span><span className="op">,</span>{`
  `}<span className="key">age</span><span className="op">:</span> <span className="num">31</span><span className="op">,</span>{`
  `}<span className="key">basedIn</span><span className="op">:</span> <span className="str">"San Miguel de Tucumán"</span><span className="op">,</span>{`
  `}<span className="key">traits</span><span className="op">:</span> <span className="arr">[</span><span className="str">"autodidacta"</span><span className="op">,</span> <span className="str">"apasionado por nuevos retos"</span><span className="arr">]</span><span className="op">,</span>{`
  `}<span className="key">journey</span><span className="op">:</span> <span className="str">"Descubrí la programación en 2011 (Pascal), avancé con C y C++ en 2013 y consolidé mi base académica en la UTN (Técnico Universitario en Programación, 2022–2024)."</span><span className="op">,</span>{`
  `}<span className="key">focus</span><span className="op">:</span> <span className="str">"Full-stack con fuerte orientación al backend, criterio de producto y experiencia de usuario."</span><span className="op">,</span>{`
  `}<span className="key">whatIDo</span><span className="op">:</span> <span className="str">"Transformo requerimientos en soluciones medibles, escalables y mantenibles."</span><span className="op">,</span>{`
  `}<span className="key">domains</span><span className="op">:</span> <span className="arr">[</span><span className="str">"gastronómico"</span><span className="op">,</span> <span className="str">"educativo"</span><span className="op">,</span> <span className="str">"salud animal"</span><span className="op">,</span> <span className="str">"política"</span><span className="arr">]</span><span className="op">,</span>{`
  `}<span className="key">teamwork</span><span className="op">:</span> <span className="str">"Disfruto trabajar en equipo, dar/recibir feedback y cuidar la calidad end-to-end (datos, APIs, UX, despliegue)."</span><span className="op">,</span>{`
  `}<span className="key">stackOps</span><span className="op">:</span> <span className="str">"Git • prácticas ágiles (Scrum) • despliegues en Hostinger / Google Cloud / Azure (ocasionalmente AWS)."</span><span className="op">,</span>{`
  `}<span className="key">goal</span><span className="op">:</span> <span className="str">"Sumarme a un equipo apasionado para combinar calidad técnica e impacto en negocio y seguir creciendo."</span>{`
`}<span className="p">{`}`}</span><span className="op">;</span>
        </pre>
      </div>

      {/* CTA estilizado (tal cual lo tenías) */}
      <div className="cta-code">
        <h3 className="cta-q">¿En mente algún proyecto?</h3>
        <div className="code-line" aria-label="Trabajemos juntos">
          <span className="code-punc">{'{'}</span>
          <span className="code-key">Trabajemos</span>
          <span className="code-punc">:</span>
          <span className="code-str code-text">'juntos!'</span>
          <span className="code-punc">{'}'}</span>
          <span className="cursor">▌</span>
        </div>
      </div>
    </section>
  );
}
