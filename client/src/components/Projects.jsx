import { PROJECTS } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import ProjectCard from "./carousel/ProjectCard";
import "../styles/Projects.css";

export default function Projects() {
  const { lang, t } = useLanguage();
  const intro = lang === "es"
    ? "Casos reales donde se ve producto, backend, despliegue y criterio de interfaz."
    : "Real projects showing product thinking, backend work, deployment, and interface craft.";

  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="projects__header">
          <div className="kicker">{t.projects.title}</div>
          <p className="projects__intro">{intro}</p>
        </header>
        <div className="projects__grid">
          {PROJECTS.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
