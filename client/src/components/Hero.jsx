import React from 'react';
import '../styles/Hero.css';

/* Icons */
import { FaHtml5, FaCss3Alt, FaPython, FaNodeJs, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiLeaflet, SiOpencv, SiTypescript, SiDotnet, SiAngular,SiMercadopago,SiGooglemaps   } from "react-icons/si";
import { DiMsqlServer, DiMysql, DiScrum } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb"; // ✅ reemplazo de C#

export default function Hero() {
  const TECHS = [
    { id: 'html',     label: 'HTML5',      Icon: FaHtml5 },
    { id: 'css',      label: 'CSS3',       Icon: FaCss3Alt },
    { id: 'js',       label: 'JavaScript', Icon: IoLogoJavascript },
    { id: 'ts',       label: 'TypeScript', Icon: SiTypescript },
    { id: 'python',   label: 'Python',     Icon: FaPython },
    { id: 'csharp',   label: 'C#',         Icon: TbBrandCSharp },
    { id: 'dotnet',   label: '.NET',       Icon: SiDotnet },
    { id: 'node',     label: 'Node.js',    Icon: FaNodeJs },
    { id: 'express',  label: 'Express',    Icon: SiExpress },
    { id: 'react',    label: 'React',      Icon: FaReact },
    { id: 'angular',  label: 'Angular',    Icon: SiAngular },
    { id: 'leaflet',  label: 'Leaflet',    Icon: SiLeaflet },
    { id: 'opencv',   label: 'OpenCV',     Icon: SiOpencv },
    { id: 'sqlsrv',   label: 'SQL Server', Icon: DiMsqlServer },
    { id: 'mysql',    label: 'MySQL',      Icon: DiMysql },
    { id: 'git',      label: 'Git',        Icon: FaGitAlt },
    { id: 'scrum',    label: 'SCRUM',      Icon: DiScrum },
    { id: 'mercadopago', label: 'Mercado Pago', Icon: SiMercadopago },
    { id: 'googlemaps', label: 'Google Maps', Icon: SiGooglemaps },

  ];
  const LOOP = [...TECHS, ...TECHS];

  return (
    <section id="home" className="section section--hero">
      <div className="container hero">
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
            <a className="btn btn--solid" href="/cv.pdf" target="_blank" rel="noopener noreferrer">Ver CV</a>
            <a className="btn btn--ghost" href="/cv.pdf" download="CV_Diego_Flores.pdf">Descargar CV</a>
          </div>
        </header>

        <div className="hero__photo" aria-label="Foto de perfil">
          <img className="photo-full" src="/profile.jpeg" alt="Diego Flores" />
          <span className="fade-bottom" aria-hidden="true"></span>
        </div>

        <div className="hero__icons" role="region" aria-label="Tecnologías">
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
