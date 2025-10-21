import React, { useEffect, useRef, useState } from "react";
import "../styles/Projects.css";

/* ICONOS: usamos familias que ya tenés en el proyecto */
import { FaGithub, FaLock, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAngular, FaPython, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiDotnet, SiMysql, SiLeaflet,SiOpencv } from "react-icons/si";
import { DiMsqlServer, DiMysql, DiScrum } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloudstorage } from "react-icons/si";

//Mony images

import mony1 from "../assets/ProyetosIMG/Mony/login.png";
import mony2 from "../assets/ProyetosIMG/Mony/Analisis.png";
import mony3 from "../assets/ProyetosIMG/Mony/Cajas.png";
import mony4 from "../assets/ProyetosIMG/Mony/Compras.png";
import mony5 from "../assets/ProyetosIMG/Mony/Cupones.png";
import mony6 from "../assets/ProyetosIMG/Mony/DeliveryZona.png";
import mony7 from "../assets/ProyetosIMG/Mony/geodelivery zonas.png";
import mony8 from "../assets/ProyetosIMG/Mony/HistorialCajas.png";
import mony9 from "../assets/ProyetosIMG/Mony/Inicio.png";
import mony10 from "../assets/ProyetosIMG/Mony/MovimientosStock.png";
import mony11 from "../assets/ProyetosIMG/Mony/Productos.png";
import mony12 from "../assets/ProyetosIMG/Mony/recetas.png";
import mony13 from "../assets/ProyetosIMG/Mony/RRHH.png";
import mony14 from "../assets/ProyetosIMG/Mony/Stock.png";


//Veterinaria images
import vetlog from "../assets/ProyetosIMG/Veterinaria/login.png";
import vetmenu from "../assets/ProyetosIMG/Veterinaria/Menu.png";
import vetTurnos from "../assets/ProyetosIMG/Veterinaria/Turnos.png";
import vetPacientes from "../assets/ProyetosIMG/Veterinaria/Pacientes.png"; 
import vetProductos from "../assets/ProyetosIMG/Veterinaria/Productos.png";
import vetProveedores from "../assets/ProyetosIMG/Veterinaria/Proveedores.png";

//electorApp v1
import electinicio from "../assets/ProyetosIMG/SisElectv1/inicio.png";
import carDir from "../assets/ProyetosIMG/SisElectv1/carDir.png"
import carMov from "../assets/ProyetosIMG/SisElectv1/carMov.png"
import carVot from "../assets/ProyetosIMG/SisElectv1/carVot.png"
import PAdronElectoral from "../assets/ProyetosIMG/SisElectv1/PAdronElectoral.png"
import graficos from "../assets/ProyetosIMG/SisElectv1/graficos.png"
import compararDatos from "../assets/ProyetosIMG/SisElectv1/compararDatos.png"
import electorImp from "../assets/ProyetosIMG/SisElectv1/imprimir.png"
import posiciones from "../assets/ProyetosIMG/SisElectv1/posiciones.png"
import yavote from "../assets/ProyetosIMG/SisElectv1/yaVote.png"

//minInterior

import minInicio from "../assets/ProyetosIMG/minInterior/inicio.png";
import minMapa from "../assets/ProyetosIMG/minInterior/mapaComunas.png";
import minNov from "../assets/ProyetosIMG/minInterior/Novedades.png";
import minBusquedas from "../assets/ProyetosIMG/minInterior/quienesSomos.png";
import minReportes from "../assets/ProyetosIMG/minInterior/transmVivo.png";

//Distribuidora de bebidas
import disMenu from "../assets/ProyetosIMG/Distribuidor/menu.png";
import disLotes from "../assets/ProyetosIMG/Distribuidor/lsitadoLotes.png";
import disStock from "../assets/ProyetosIMG/Distribuidor/Stock.png";
import disProveedores from "../assets/ProyetosIMG/Distribuidor/Proveedores.png";
import disCrLot from "../assets/ProyetosIMG/Distribuidor/crearLote.png";

//tiendaOnline
import addCarrito from "../assets/ProyetosIMG/tiendaOnline/addCarrito.png";
import carrito from "../assets/ProyetosIMG/tiendaOnline/carrito.png";
import inicio from "../assets/ProyetosIMG/tiendaOnline/inicio.png";

//electorapp v2
import electv2inicio from "../assets/ProyetosIMG/sisEcectv2/inicio.png";
import electdia from "../assets/ProyetosIMG/sisEcectv2/diaElect.png";
import electv2opc from "../assets/ProyetosIMG/sisEcectv2/opcPremium.png";
import electv2post from "../assets/ProyetosIMG/sisEcectv2/postElecc.png";
import electv2ref from "../assets/ProyetosIMG/sisEcectv2/referentes.png";
import electv2vot from "../assets/ProyetosIMG/sisEcectv2/votantes.png";

// aulaInt

import apagarLuces from "../assets/ProyetosIMG/AulaInt/apagarLuces.png";
import encenderLuces from "../assets/ProyetosIMG/AulaInt/encenderLuces.png";
import demo from "../assets/ProyetosIMG/AulaInt/demo.mp4";

/* ====== DEMO DATA (4 proyectos diversos) ====== */
const FALLBACK = [
  {
    id: 1,
    title: "🍽️ La Mony - Sistema Integral de Gestión Gastronómica",
    description:
      "Este sistema representa una solución full stack avanzada para la gestión integral de un negocio gastronómico, abarcando todas las áreas operativas: stock, compras, ventas, RRHH, delivery, producción, análisis financiero y más. Construido con React, Node.js, Express y MySQL, implementa autenticación JWT y despliegue optimizado en un VPS Hostinger para garantizar disponibilidad constante y seguridad de datos. Módulos Principales Stock y Producción: control de movimientos, registros automáticos de ingresos/egresos y actualización por insumo o categoría. Cajas y Finanzas: cierres diarios automáticos, control de faltantes/sobrantes, historial de operaciones y balance consolidado. Compras y Proveedores: seguimiento de gastos, integración con cajas y análisis comparativo por períodos. Recetarios: gestión completa de recetas con ingredientes, costos, pasos y videos tutoriales integrados. Recursos Humanos: control de asistencia, horarios, actividades adicionales y cálculo de sueldos. GeoDelivery: módulo interactivo con mapas dinámicos para delimitar zonas de reparto y calcular costos por área. Análisis y Reportes: visualización de métricas con gráficos dinámicos (ingresos, egresos, compras, ventas, producción). Aspectos Técnicos Destacados Arquitectura modular MVC con separación clara entre controladores, rutas y servicios. Interfaz moderna, responsiva y fluida desarrollada en React Hooks y Context API. Autenticación robusta con JSON Web Tokens (JWT) y control de sesiones por rol. API REST segura, validada y documentada. Panel administrativo completo para sucursales, usuarios y permisos.  Resultado Una herramienta empresarial totalmente funcional y escalable, diseñada para optimizar el flujo de trabajo de locales gastronómicos, brindando trazabilidad total desde la materia prima hasta la caja final del día.",
    images: [
      mony6,
      mony9,
      mony7,
      mony4,
      mony5,
      mony3,
      mony1,
      mony8,
      mony2,
      mony10,
      mony11,
      mony12,
      mony13,
      mony14
    ],
    tech: ["html", "css", "js","react","leaflet", "node", "express", "mysql", "git","Hostinger"],
    github: null, // privado
  },
  {
    id: 2,
    title: "🗳️ Sistema Electoral – C# .NET + SQL Server (Azure)",
    description:
      "Aplicación de escritorio desarrollada en conjunto con MA PROGRAMACION, en C# (.NET WinForms) con base de datos SQL Server alojada en Azure, diseñada para la gestión integral de procesos electorales. Permite administrar dirigentes, movilizadores y votantes, registrar resultados en tiempo real y generar estadísticas visuales precisas. Principales funciones: Inicio de sesión con roles y control de acceso. Registro jerárquico de dirigentes, movilizadores y votantes. Seguimiento de participación (“Ya voté”) en tiempo real. Carga y comparación de resultados post elecciones. Gráficos y reportes PDF sobre votos y gastos de campaña. Desarrollado para un entorno político real, priorizando seguridad, eficiencia y disponibilidad en la nube mediante SQL Azure y arquitectura modular en capas.",
    images: [
      electinicio,
      carDir,
      carMov,
      carVot,
      PAdronElectoral,
      graficos,
      compararDatos,
      electorImp,
      posiciones,
      yavote
    ],
    tech: [ "dotnet", "csharp", "sqlserver", "git", "azure"],
    github: null,
  },
  {
    id: 3,
    title: "Patitas - Veterinaria",
    description:
      "Proyecto de finalizacion de cursado para una veterinaria local con solucion a Turnos, historia clínica, registro de médicos veterinarios, seguimiento de pacientes y notificaciones. Construido en equipo con foco en backend.",
    images: [
      vetlog,
      vetmenu,
      vetTurnos,
      vetPacientes,
      vetProductos,
      vetProveedores
    ],
    tech: ["html", "css", "js","react", "node", "express", "mysql","git","scrum"],
    github: "https://github.com/DiegoF23/proyectoFinal", // privado
  },
  {
    id: 4,
    title: "Ministerio del Interior – Sitio Institucional (reforma)",
    description:
      "En colaboración con Zeus Agencia,  Rediseño y modernización del sitio del Ministerio del Interior de Tucumán, enfocada en estructura de contenidos, accesibilidad y visualización territorial. Se implementó una UI clara y responsive con componentes modulares en React. Principales funciones: Sección institucional con misión, funciones e historia; bloques destacados y citas del ministro. Mapa interactivo de Tucumán (Leaflet + GeoJSON): selección de departamentos, realce por hover/click y panel lateral con comunas y enlaces oficiales. Novedades por categorías (infraestructura, salud, educación, tecnología) con imagen, resumen y “leer más”. Navegación ágil, diseño responsive y buenas prácticas de accesibilidad (focus/teclas, contraste, etiquetado). Stack y enfoque técnico: Frontend: React, React-Leaflet, CSS modular. Datos geográficos: GeoJSON mergeado (departamentos ↔ comunas ↔ recursos). UX/Perf: carga diferida de imágenes, layout estable, componentes reutilizables. Resultado: un portal institucional más claro, rápido y navegable, con un mapa interactivo que facilita el acceso a información territorial y enlaces por comuna, listo para comunicación pública y actualización continua.",
    images: [
      minInicio,
      minMapa,
      minNov,
      minBusquedas,
      minReportes
    ],
    tech: ["html", "css", "js", "react","leaflet", "git"],
    github: null,
  },
  {
    id: 5,
    title: "🏭 Sistema de Gestión para Distribuidora de Bebidas",
    description:
      "Proyecto desarrollado como parte de un equipo ágil bajo metodología Scrum, enfocado en optimizar la logística y control de inventarios de una distribuidora nacional de bebidas. El sistema fue implementado con un stack React + Node.js + MySQL, estructurado en componentes modulares y escalables. Incluye funcionalidades clave como: Gestión de productos, proveedores, clientes y stock en tiempo real. Control de lotes con trazabilidad por fecha de vencimiento y código. Visualización dinámica mediante dashboards interactivos. Arquitectura organizada en carpetas controllers, routes, contexts y layouts, aplicando buenas prácticas de clean code. Durante el desarrollo se trabajó con versionado en Git, planificación en sprints, y revisiones iterativas con el equipo para garantizar entregas continuas y de alta calidad.",
    images: [
      disMenu,
      disLotes,
      disStock,
      disProveedores,
      disCrLot
    ],
    tech: ["html", "css", "js", "react","node", "express", "mysql","git","scrum"],
    github: "https://github.com/DiegoF23/Distribuidor.git",
  },
  {
    id: 6,
    title: "🛒 E-Commerce React + Node.js + MySQL",
    description:
      "Proyecto educativo desarrollado para enseñar fundamentos de programación full stack a estudiantes de la carrera. El sistema simula una tienda online con frontend en React y backend en Node.js + Express, conectado a MySQL. Principales funciones: Catálogo de productos con búsqueda dinámica y cards interactivas. Carrito de compras en modal con persistencia en LocalStorage. Flujo de compra completo y simulación de pago con validaciones. Backend estructurado en controllers, routes y config (buenas prácticas de arquitectura). Notificaciones, animaciones y diseño responsive. Creado con fines didácticos para enseñar arquitectura por capas, consumo de APIs REST, manipulación de estado en React y principios de UX funcional aplicada al desarrollo web.",
    images: [
      inicio,
      addCarrito,
      carrito
    ],
    tech: ["html", "css", "js", "react", "git","node", "express", "mysql"],
    github: "https://github.com/DiegoF23/cursoReactNodeEcommerce.git",
  },
  {
    id: 7,
    title: "🗳️ ElectorApp v2 — Plataforma electoral ",
    description:
      "Desarrollada en equipo bajo Scrum, en colaboración con Zeus Agencia y MA Programación como proveedor principal de software. Stack: React (SPA), Node/Express (API REST), MySQL, control de versiones con Git y despliegue en Hostinger. Módulos clave: Dashboard con KPIs y gráficos, gestión de Referentes, Dirigentes, Movilizadores y Votantes, consulta de padrón, presupuestos, vehículos y reportes. Día Electoral (live): seguimiento en tiempo real por franja horaria y zona; estado de participación. Post Elecciones: panel comparativo (precargados vs. escrutados), diferencia y rendimiento por mesa. Productividad: alta usabilidad, filtros, detección de duplicados, acciones rápidas (incl. contacto por WhatsApp) y exportes. Calidad: arquitectura modular, roles/ permisos, validaciones en frontend/backend y registros auditables. Ideal para equipos políticos que necesitan trazabilidad completa del proceso electoral y analítica accionable, desde la carga previa hasta el análisis post comicio.",
    images: [
     electv2inicio,
     electdia,
     electv2opc,
     electv2post,
     electv2ref,
     electv2vot
    ],
    tech: ["html", "css", "js", "react", "git","node", "express", "mysql","Hostinger"],
    github: null,
  },
  {
    id: 8,
    title: "🎓 Proyecto de Automatización Inteligente de Aulas — Detección de Presencia y Control Ambiental (Python)",
    description:
      "Desarrollado en equipo como trabajo final de materia, este proyecto aplica visión por computadora e inteligencia ambiental para optimizar el consumo energético en entornos educativos. El sistema utiliza una cámara con reconocimiento visual para detectar la presencia de alumnos en el aula. Si se detecta ocupación, enciende automáticamente las luces y, según las condiciones de temperatura, activa ventiladores o aire acondicionado para mantener un ambiente confortable. En ausencia de personas, apaga todos los dispositivos para reducir el consumo eléctrico. Tecnologías y Enfoque: Lenguaje: Python, Librerías: OpenCV, NumPy, time, os, entre otras. Conceptos aplicados: detección de rostros, control de hardware, automatización por eventos, procesamiento de imágenes en tiempo real. Diseño modular y escalable para futuras integraciones con sensores IoT o control remoto. ",
    images: [
      
       { src: demo, type: "video", poster: apagarLuces, autoplayMs: 6000 },
    
    ],
    tech: ["python","opencv","git"],
    github: "https://github.com/DiegoF23/AulaInteligente.git",
  },
];

/* ====== Mapa de tecnologías -> icono + etiqueta ====== */
const TECH_MAP = {
  html:    { label: "HTML5",       Icon: FaHtml5 },
  css:     { label: "CSS3",        Icon: FaCss3Alt },
  js:      { label: "JavaScript",  Icon: IoLogoJavascript },
  react:   { label: "React",       Icon: FaReact },
  angular: { label: "Angular",     Icon: FaAngular },
  node:    { label: "Node.js",     Icon: FaNodeJs },
  express: { label: "Express",     Icon: SiExpress },
  mysql:   { label: "MySQL",       Icon: DiMysql /* o SiMysql */ },
  sqlserver:{label: "SQL Server",  Icon: DiMsqlServer },
  csharp:  { label: "C#",          Icon: TbBrandCSharp },
  dotnet:  { label: ".NET",        Icon: SiDotnet },
  python:  { label: "Python",      Icon: FaPython },
  git:     { label: "Git",         Icon: FaGitAlt },
  scrum:   { label: "SCRUM",       Icon: DiScrum  },
  leaflet:   { label: "leaflet",       Icon: SiLeaflet  },
  azure:   { label: "Azure",       Icon: VscAzure  },
  Hostinger:   { label: "VPS Hostinger",       Icon: SiGooglecloudstorage  },
  opencv :  { label: "OpenCV",      Icon: SiOpencv  },
};

/* ====== Componente: Carrusel (por tarjeta) ====== */
function Carousel({ images = [], auto = true, interval = 3500, onOpen }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const videoTimeoutRef = useRef(null);

  // Normalizo: strings -> { src, type:'image' }
  const slides = (images || []).map((it) =>
    typeof it === "string" ? { src: it, type: "image" } : it
  );
  const size = slides.length;

  const isVideo = (i) => slides[i]?.type === "video";

  // util: limpiar timers
  const clearAll = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    if (videoTimeoutRef.current) { clearTimeout(videoTimeoutRef.current); videoTimeoutRef.current = null; }
  };

  // util: armar intervalo para imágenes
  const startImageInterval = () => {
    if (!auto || size <= 1) return;
    if (isVideo(index)) return; // si es video, lo maneja el otro efecto
    clearAll();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % size);
    }, interval);
  };

  // Auto-play para imágenes (cuando el slide actual es imagen)
  useEffect(() => {
    startImageInterval();
    return clearAll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, interval, size, index]); // reacciona cuando cambia el index

  // Manejo especial de VIDEO
  useEffect(() => {
    if (!auto || size < 1) return;

    // limpio timeouts previos
    if (videoTimeoutRef.current) {
      clearTimeout(videoTimeoutRef.current);
      videoTimeoutRef.current = null;
    }

    // si no es video, nada
    if (!isVideo(index)) return;

    const slide = slides[index];
    const ms = Number(slide?.autoplayMs) || 0;

    if (size === 1) {
      // solo 1 video: loop infinito (sin timers)
      return; // el <video loop> se encarga
    }

    if (ms > 0) {
      // avanza por tiempo
      videoTimeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % size);
      }, ms);
      return () => clearTimeout(videoTimeoutRef.current);
    }

    // sin autoplayMs: avanza cuando termina el video
    const el = document.getElementById(`carousel-video-${index}`);
    if (el) {
      const onEnded = () => setIndex((i) => (i + 1) % size);
      el.addEventListener("ended", onEnded);
      return () => el.removeEventListener("ended", onEnded);
    }
  }, [auto, size, index, slides]);

  // Pausar al pasar el mouse, reanudar al salir
  const pauseAllTimers = () => clearAll();
  const resumeIfNeeded = () => startImageInterval();

  // Pausar cuando la pestaña queda oculta (ahorra recursos)
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        clearAll();
      } else {
        startImageInterval();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, auto, interval, size]);

  const go = (i) => setIndex(((i % size) + size) % size);
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  if (!size) return null;

  return (
    <div className="carousel" onMouseEnter={pauseAllTimers} onMouseLeave={resumeIfNeeded}>
      <div className="carousel__viewport">
        <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => (
            <div key={i} className="carousel__slide">
              {s.type === "video" ? (
                <video
                  id={`carousel-video-${i}`}
                  className="carousel__media"
                  src={s.src}
                  poster={s.poster}
                  muted
                  playsInline
                  autoPlay
                  controls={false}
                  loop={size === 1 || Boolean(s.loop)}   // ← loop si solo hay 1 slide
                  onClick={() => onOpen?.(i)}            // ← índice correcto
                />
              ) : (
                <button
                  className="carousel__imgbtn"
                  onClick={() => onOpen?.(i)}            // ← índice correcto
                  aria-label={`Abrir imagen ${i + 1} de ${size}`}
                >
                  <img className="carousel__media" src={s.src} alt={`Vista ${i + 1}`} loading="lazy" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {size > 1 && (
        <>
          <button className="carousel__arrow left" onClick={prev} aria-label="Anterior">‹</button>
          <button className="carousel__arrow right" onClick={next} aria-label="Siguiente">›</button>

          <div className="carousel__dots" role="tablist" aria-label="Indicadores">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => go(i)}
                aria-label={`Ir a la vista ${i + 1}`}
                aria-selected={i === index}
                role="tab"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}



/* ====== Lightbox / Modal simple ====== */
function Lightbox({ images = [], startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const slides = (images || []).map(it =>
    typeof it === "string" ? { src: it, type: "image" } : it
  );
  const size = slides.length;
  const go = (i) => setIndex(((i % size) + size) % size);
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index]);

  if (!size) return null;

  const s = slides[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true">
      <div className="lightbox__backdrop" onClick={onClose} />
      <div className="lightbox__content">
        {s.type === "video" ? (
          <video
            className="lightbox__media"
            src={s.src}
            poster={s.poster}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img className="lightbox__media" src={s.src} alt={`Imagen ${index + 1}`} />
        )}

        {size > 1 && (
          <>
            <button className="lightbox__arrow left" onClick={prev} aria-label="Anterior">‹</button>
            <button className="lightbox__arrow right" onClick={next} aria-label="Siguiente">›</button>
          </>
        )}
        <button className="lightbox__close" onClick={onClose} aria-label="Cerrar">✕</button>

        <div className="lightbox__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => go(i)}
              aria-label={`Ir a la vista ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


/* ====== Tarjeta de proyecto ====== */
function ProjectCard({ p }) {
  const [expanded, setExpanded] = useState(false);
  const [showLb, setShowLb] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  const MAX_CH = 140; // longitud de preview antes de "Ver más"
  const hasLong = p.description && p.description.length > MAX_CH;
  const preview = hasLong ? p.description.slice(0, MAX_CH).trim() + "…" : p.description;

  const openLightbox = (idx = 0) => { setLbIndex(idx); setShowLb(true); };
  const closeLightbox = () => setShowLb(false);

  const TechIcon = ({ code }) => {
    const item = TECH_MAP[code];
    if (!item) return null;
    const { Icon, label } = item;
    return (
      <span className="tech-pill" title={label} aria-label={label}>
        <Icon />
      </span>
    );
  };

  return (
    <article className="card project-card">
      {/* Tech pills en esquina */}
      {!!p.tech?.length && (
        <div className="project__tech">
          {p.tech.map((t, i) => <TechIcon key={i} code={t} />)}
        </div>
      )}

      {/* Carrusel */}
      <div className="project__img">
        <Carousel images={p.images || []} onOpen={openLightbox} />
      </div>

      <h3 className="project__title">{p.title}</h3>

      <p className="project__desc">
        {expanded ? p.description : preview}
      </p>

      <div className="project__actions">
        {hasLong && (
          <button className="btn btn--ghost xs" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Ver menos" : "Ver más"}
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
                title="Ver en GitHub"
                aria-label="Ver en GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            )
            : (
              <span className="repo-private" title="Repositorio privado" aria-label="Repositorio privado">
                <FaLock />
                <span>Privado</span>
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

/* ====== Lista de proyectos ====== */
export default function Projects({ items = [] }) {
  const list = Array.isArray(items) && items.length ? items.slice(0, 4) : FALLBACK;
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="kicker">PROYECTOS</div>
        <div className="projects__grid" style={{ marginTop: "18px" }}>
          {list.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
