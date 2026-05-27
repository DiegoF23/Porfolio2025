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

  const MAX_CH = 140;
  const description = p.description[lang] || p.description.es;
  const title = p.title[lang] || p.title.es;
  const hasLong = description && description.length > MAX_CH;
  const preview = hasLong ? description.slice(0, MAX_CH).trim() + "…" : description;
  const techList = p.tech || [];
  const shouldMarqueeTech = techList.length > 7;
  const techAria = lang === "es" ? "Tecnologías del proyecto" : "Project technologies";

  const openLightbox = (idx = 0) => { setLbIndex(idx); setShowLb(true); };
  const closeLightbox = () => setShowLb(false);

  return (
    <article className="card project-card">
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

      <h3 className="project__title">{title}</h3>

      <p className="project__desc">
        {expanded ? description : preview}
      </p>

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
