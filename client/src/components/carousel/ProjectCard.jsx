import { useState } from "react";
import { FaGithub, FaLock } from "react-icons/fa";
import { TECH_MAP } from "../../constants/techMap";
import { useLanguage } from "../../context/LanguageContext";
import Carousel from "./Carousel";
import Lightbox from "./Lightbox";

function TechIcon({ code, hidden = false }) {
  const item = TECH_MAP[code];
  if (!item) return null;
  const { Icon, label } = item;
  return (
    <span
      className="tech-pill"
      title={hidden ? undefined : label}
      aria-label={hidden ? undefined : label}
      aria-hidden={hidden || undefined}
    >
      <Icon />
    </span>
  );
}

export default function ProjectCard({ p }) {
  const [expanded, setExpanded] = useState(false);
  const [showLb, setShowLb] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const { lang, t } = useLanguage();

  const description = p.description[lang] || p.description.es;
  const summary = p.summary?.[lang] || p.summary?.es || description;
  const outcome = p.outcome?.[lang] || p.outcome?.es;
  const title = p.title[lang] || p.title.es;
  const hasLong = Boolean(description && summary && description !== summary);
  const techList = p.tech || [];
  const metrics = p.metrics || [];
  const shouldMarqueeTech = techList.length > 7;
  const techAria = lang === "es" ? "Tecnologías del proyecto" : "Project technologies";
  const categoryLabel = {
    featured: lang === "es" ? "Destacado" : "Featured",
    professional: lang === "es" ? "Profesional" : "Professional",
    educational: lang === "es" ? "Formación" : "Educational",
  };

  const openLightbox = (idx = 0) => { setLbIndex(idx); setShowLb(true); };
  const closeLightbox = () => setShowLb(false);

  return (
    <article className={`card project-card${p.featured ? " project-card--featured" : ""}`}>
      <div className="project__img">
        <Carousel images={p.images || []} onOpen={openLightbox} />
      </div>

      {!!techList.length && (
        <div
          className={`project__tech${shouldMarqueeTech ? " project__tech--marquee" : ""}`}
          aria-label={techAria}
        >
          <div className="project__tech-track">
            {techList.map((code, i) => <TechIcon key={`${code}-${i}`} code={code} />)}
            {shouldMarqueeTech && techList.map((code, i) => (
              <TechIcon key={`${code}-duplicate-${i}`} code={code} hidden />
            ))}
          </div>
        </div>
      )}

      <div className="project__meta">
        <span className="project__badge">{categoryLabel[p.category] || categoryLabel.professional}</span>
      </div>

      <h3 className="project__title">{title}</h3>

      <p className="project__desc">
        {expanded && hasLong ? description : summary}
      </p>

      {outcome && <p className="project__outcome">{outcome}</p>}

      {!!metrics.length && (
        <ul className="project__metrics" aria-label={lang === "es" ? "Impacto del proyecto" : "Project impact"}>
          {metrics.map((metric, i) => {
            const label = metric.label?.[lang] || metric.label?.es || "";
            return (
              <li key={`${label}-${metric.value}-${i}`} className="project__metric">
                {label && <span className="project__metric-label">{label}</span>}
                <span className="project__metric-value">{metric.value}</span>
              </li>
            );
          })}
        </ul>
      )}

      <div className="project__actions">
        {hasLong && (
          <button className="btn btn--ghost xs" onClick={() => setExpanded((v) => !v)}>
            {expanded ? t.projects.viewLess : t.projects.viewMore}
          </button>
        )}

        <div className="project__repo">
          {p.github
            ? (
              <a
                className="repo-link"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                title={t.projects.github}
                aria-label={t.projects.github}
              >
                <FaGithub />
                <span>{t.projects.github}</span>
              </a>
            )
            : (
              <span className="repo-private" title={t.projects.private} aria-label={t.projects.private}>
                <FaLock />
                <span>{t.projects.private}</span>
              </span>
            )
          }
        </div>
      </div>

      {showLb && (
        <Lightbox images={p.images || []} startIndex={lbIndex} onClose={closeLightbox} />
      )}
    </article>
  );
}
