import "../styles/AboutContact.css";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t, lang } = useLanguage();
  const content = lang === "es"
    ? {
        eyebrow: "Executive profile",
        title: "Lo que aporto",
        lead: "Desarrollo software con foco en resolver problemas operativos y de gestión de forma clara, mantenible y útil para el día a día de un equipo.",
        cards: [
          { title: "Backend con criterio de negocio", body: "Diseño lógica, datos y flujos pensando en estabilidad, trazabilidad y decisiones reales del negocio." },
          { title: "Producto y claridad", body: "Bajo complejidad técnica a herramientas que un equipo puede entender, usar y sostener." },
          { title: "UX funcional", body: "Priorizo interfaces claras, recorridos simples y señales visuales que acompañen el trabajo diario." },
          { title: "Entrega end-to-end", body: "Puedo cubrir desde estructura y APIs hasta interfaz, validaciones y puesta en producción." },
        ],
        impactLabel: "Cómo genero impacto",
        impacts: [
          "Operaciones y gestión interna",
          "Automatización de procesos",
          "Visualización y trazabilidad de datos",
          "Plataformas administrativas",
          "Interfaces para uso diario en entornos reales",
        ],
        journeyLabel: "Recorrido",
        journey: "Me formé con base académica formal en la UTN y la fui consolidando con práctica constante y proyectos aplicados a problemas reales.",
        closing: "Busco aportar en cualquier contexto donde el software pueda ordenar, simplificar o hacer más confiable una operación.",
      }
    : {
        eyebrow: "Executive profile",
        title: "What I bring",
        lead: "I build software focused on solving operational and business problems in a way that is clear, maintainable, and genuinely useful for day-to-day teams.",
        cards: [
          { title: "Backend with business judgment", body: "I design logic, data, and workflows around stability, traceability, and real operating needs." },
          { title: "Product and clarity", body: "I turn technical complexity into tools that teams can understand, use, and sustain." },
          { title: "Functional UX", body: "I prioritize clear interfaces, simple flows, and visual cues that support everyday work." },
          { title: "End-to-end delivery", body: "I can contribute from structure and APIs to interface, validation, and release readiness." },
        ],
        impactLabel: "How I create impact",
        impacts: [
          "Operations and internal management",
          "Process automation",
          "Data visibility and traceability",
          "Administrative platforms",
          "Interfaces for daily use in real environments",
        ],
        journeyLabel: "Journey",
        journey: "My foundation comes from formal training at UTN, strengthened through consistent practice and projects applied to real-world problems.",
        closing: "I want to contribute wherever software can organize, simplify, or make an operation more reliable.",
      };

  return (
    <section id="about" className="section about">
      <div className="kicker">{t.about.title}</div>

      <div className="about-panel card" aria-label={t.about.title}>
        <div className="about-panel__header">
          <span className="about-panel__eyebrow">{content.eyebrow}</span>
          <span className="about-panel__file">Profile brief</span>
        </div>
        <h2 className="about-panel__title">{content.title}</h2>
        <p className="about-panel__lead">{content.lead}</p>
        <div className="about-highlights">
          {content.cards.map((card) => (
            <article key={card.title} className="about-highlight">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <div className="about-facts">
          <div className="about-fact">
            <span className="about-fact__label">{content.impactLabel}</span>
            <ul className="about-impact-list">
              {content.impacts.map((impact) => <li key={impact}>{impact}</li>)}
            </ul>
          </div>
          <div className="about-fact">
            <span className="about-fact__label">{content.journeyLabel}</span>
            <p>{content.journey}</p>
            <p className="about-fact__closing">{content.closing}</p>
          </div>
        </div>
      </div>

      <div className="cta-code">
        <h3 className="cta-q">{t.about.projectInMind}</h3>
        <div className="code-line" aria-label={t.about.letsWork}>
          <span className="code-punc">{'{'}</span>
          <span className="code-key">{t.about.letsWork}</span>
          <span className="code-punc">:</span>
          <span className="code-str code-text">{t.about.together}</span>
          <span className="code-punc">{'}'}</span>
          <span className="cursor">▌</span>
        </div>
      </div>
    </section>
  );
}
