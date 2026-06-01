// Mony images
import mony1 from "../assets/ProyetosIMG/Mony/login.webp";
import mony2 from "../assets/ProyetosIMG/Mony/Analisis.webp";
import mony3 from "../assets/ProyetosIMG/Mony/Cajas.webp";
import mony4 from "../assets/ProyetosIMG/Mony/Compras.webp";
import mony5 from "../assets/ProyetosIMG/Mony/Cupones.webp";
import mony6 from "../assets/ProyetosIMG/Mony/DeliveryZona.webp";
import mony7 from "../assets/ProyetosIMG/Mony/geodelivery zonas.webp";
import mony8 from "../assets/ProyetosIMG/Mony/HistorialCajas.webp";
import mony9 from "../assets/ProyetosIMG/Mony/Inicio.webp";
import mony10 from "../assets/ProyetosIMG/Mony/MovimientosStock.webp";
import mony11 from "../assets/ProyetosIMG/Mony/Productos.webp";
import mony12 from "../assets/ProyetosIMG/Mony/recetas.webp";
import mony13 from "../assets/ProyetosIMG/Mony/RRHH.webp";
import mony14 from "../assets/ProyetosIMG/Mony/Stock.webp";

// Veterinaria images
import vetlog from "../assets/ProyetosIMG/Veterinaria/login.webp";
import vetmenu from "../assets/ProyetosIMG/Veterinaria/Menu.webp";
import vetTurnos from "../assets/ProyetosIMG/Veterinaria/Turnos.webp";
import vetPacientes from "../assets/ProyetosIMG/Veterinaria/Pacientes.webp";
import vetProductos from "../assets/ProyetosIMG/Veterinaria/Productos.webp";
import vetProveedores from "../assets/ProyetosIMG/Veterinaria/proveedores.webp";

// ElectorApp v1
import electinicio from "../assets/ProyetosIMG/SisElectv1/inicio.webp";
import carDir from "../assets/ProyetosIMG/SisElectv1/carDir.webp";
import carMov from "../assets/ProyetosIMG/SisElectv1/carMov.webp";
import carVot from "../assets/ProyetosIMG/SisElectv1/carVot.webp";
import PAdronElectoral from "../assets/ProyetosIMG/SisElectv1/PAdronElectoral.webp";
import graficos from "../assets/ProyetosIMG/SisElectv1/graficos.webp";
import compararDatos from "../assets/ProyetosIMG/SisElectv1/compararDatos.webp";
import electorImp from "../assets/ProyetosIMG/SisElectv1/imprimir.webp";
import posiciones from "../assets/ProyetosIMG/SisElectv1/posiciones.webp";
import yavote from "../assets/ProyetosIMG/SisElectv1/yaVote.webp";

// MinInterior
import minInicio from "../assets/ProyetosIMG/minInterior/inicio.webp";
import minMapa from "../assets/ProyetosIMG/minInterior/mapaComunas.webp";
import minNov from "../assets/ProyetosIMG/minInterior/Novedades.webp";
import minBusquedas from "../assets/ProyetosIMG/minInterior/quienesSomos.webp";
import minReportes from "../assets/ProyetosIMG/minInterior/transmVivo.webp";

// Distribuidora de bebidas
import disMenu from "../assets/ProyetosIMG/Distribuidor/menu.webp";
import disLotes from "../assets/ProyetosIMG/Distribuidor/lsitadoLotes.webp";
import disStock from "../assets/ProyetosIMG/Distribuidor/stock.webp";
import disProveedores from "../assets/ProyetosIMG/Distribuidor/proveedores.webp";
import disCrLot from "../assets/ProyetosIMG/Distribuidor/crearLote.webp";

// Tienda Online
import addCarrito from "../assets/ProyetosIMG/tiendaOnline/addCarrito.webp";
import carrito from "../assets/ProyetosIMG/tiendaOnline/carrito.webp";
import inicio from "../assets/ProyetosIMG/tiendaOnline/inicio.webp";

// ElectorApp v2
import electv2inicio from "../assets/ProyetosIMG/sisEcectv2/inicio.webp";
import electdia from "../assets/ProyetosIMG/sisEcectv2/diaElect.webp";
import electv2opc from "../assets/ProyetosIMG/sisEcectv2/opcPremium.webp";
import electv2post from "../assets/ProyetosIMG/sisEcectv2/postElecc.webp";
import electv2ref from "../assets/ProyetosIMG/sisEcectv2/referentes.webp";
import electv2vot from "../assets/ProyetosIMG/sisEcectv2/votantes.webp";

// AulaInt
import apagarLuces from "../assets/ProyetosIMG/AulaInt/ApagarLuces.webp";
import demo from "../assets/ProyetosIMG/AulaInt/demo.mp4";

export const PROJECTS = [
  {
    id: 1,
    category: "featured",
    featured: true,
    title: {
      es: "🍽️ La Mony - Sistema Integral de Gestión Gastronómica",
      en: "🍽️ La Mony - Restaurant Management System",
    },
    summary: {
      es: "Plataforma full stack para operar un negocio gastronómico de punta a punta: stock, cajas, compras, RRHH, delivery y reportes en una sola herramienta.",
      en: "Full-stack platform that runs a restaurant business end to end: inventory, cash desks, purchasing, HR, delivery, and reporting in one tool.",
    },
    outcome: {
      es: "Centraliza la operación diaria y mejora la trazabilidad del negocio desde la materia prima hasta la caja final.",
      en: "Centralizes day-to-day operations and improves traceability from raw materials to the final daily cash close.",
    },
    metrics: [
      { label: { es: "Cobertura", en: "Coverage" }, value: "Stock · RRHH · Delivery" },
      { label: { es: "Arquitectura", en: "Architecture" }, value: "React + Node + MySQL" },
      { label: { es: "Producción", en: "Production" }, value: "JWT + VPS deployment" },
    ],
    description: {
      es: "Solución full stack avanzada para la gestión integral de un negocio gastronómico. Incluye stock, compras, ventas, RRHH, delivery, producción y análisis financiero con arquitectura modular MVC, autenticación JWT y despliegue optimizado en VPS.",
      en: "Advanced full-stack solution for comprehensive restaurant operations. It covers inventory, purchasing, sales, HR, delivery, production, and finance with modular MVC architecture, JWT authentication, and optimized VPS deployment.",
    },
    images: [mony6, mony9, mony7, mony4, mony5, mony3, mony1, mony8, mony2, mony10, mony11, mony12, mony13, mony14],
    tech: ["html", "css", "js", "react", "leaflet", "node", "express", "mysql", "git", "mercadopago", "googlemaps", "hostinger"],
    github: null,
  },
  {
    id: 7,
    category: "featured",
    featured: true,
    title: {
      es: "🗳️ ElectorApp v2 — Plataforma electoral",
      en: "🗳️ ElectorApp v2 — Electoral Platform",
    },
    summary: {
      es: "SPA electoral para seguimiento operativo antes, durante y después de la elección, con KPIs, padrones, referentes y reportes accionables.",
      en: "Electoral SPA for operational tracking before, during, and after election day, with KPIs, voter rolls, field roles, and actionable reporting.",
    },
    outcome: {
      es: "Le dio al equipo político visibilidad operativa y analítica accionable durante todo el proceso electoral.",
      en: "Gave the political team operational visibility and actionable analytics throughout the electoral process.",
    },
    metrics: [
      { label: { es: "Modo", en: "Mode" }, value: "Live election tracking" },
      { label: { es: "Calidad", en: "Quality" }, value: "Roles + validations" },
      { label: { es: "Stack", en: "Stack" }, value: "React + Node + MySQL" },
    ],
    description: {
      es: "Desarrollada en equipo con Zeus Agencia y MA Programación. Reúne dashboard, padrón, referentes, presupuestos, vehículos y seguimiento en vivo del día electoral con validaciones y registros auditables.",
      en: "Built with Zeus Agency and MA Programming. It combines dashboards, voter roll search, field team management, budgets, vehicles, and live election-day tracking with validations and auditable records.",
    },
    images: [electv2inicio, electdia, electv2opc, electv2post, electv2ref, electv2vot],
    tech: ["html", "css", "js", "react", "git", "node", "express", "mysql", "hostinger"],
    github: null,
  },
  {
    id: 2,
    category: "professional",
    featured: false,
    title: {
      es: "🗳️ Sistema Electoral – C# .NET + SQL Server (Azure)",
      en: "🗳️ Electoral System – C# .NET + SQL Server (Azure)",
    },
    summary: {
      es: "Aplicación de escritorio para gestión electoral con roles, seguimiento en tiempo real y reportes para operación política.",
      en: "Desktop application for electoral management with role-based access, real-time tracking, and reporting for political operations.",
    },
    outcome: {
      es: "Ordena el padrón operativo y acelera el seguimiento de participación y resultados en contextos reales.",
      en: "Brings structure to operational voter data and speeds up participation and results tracking in real environments.",
    },
    metrics: [
      { label: { es: "Cliente", en: "Context" }, value: "Political operations" },
      { label: { es: "Base de datos", en: "Database" }, value: "SQL Server on Azure" },
    ],
    description: {
      es: "Aplicación de escritorio en C# WinForms con SQL Server en Azure para administrar dirigentes, movilizadores y votantes, registrar resultados y generar estadísticas y reportes PDF.",
      en: "Desktop application in C# WinForms with SQL Server on Azure to manage leaders, mobilizers, and voters, record results, and generate charts and PDF reports.",
    },
    images: [electinicio, carDir, carMov, carVot, PAdronElectoral, graficos, compararDatos, electorImp, posiciones, yavote],
    tech: ["dotnet", "csharp", "sqlserver", "git", "azure"],
    github: null,
  },
  {
    id: 4,
    category: "professional",
    featured: false,
    title: {
      es: "Ministerio del Interior – Sitio Institucional (reforma)",
      en: "Ministry of Interior – Institutional Website (redesign)",
    },
    summary: {
      es: "Rediseño institucional orientado a claridad, accesibilidad y navegación territorial con mapa interactivo y contenido modular.",
      en: "Institutional redesign focused on clarity, accessibility, and territorial navigation with an interactive map and modular content.",
    },
    outcome: {
      es: "Hizo más claro el acceso a información pública y simplificó la exploración territorial del sitio.",
      en: "Made public information clearer to reach and simplified territorial exploration across the site.",
    },
    metrics: [
      { label: { es: "UX", en: "UX" }, value: "Accessible navigation" },
      { label: { es: "Mapa", en: "Map" }, value: "Leaflet + GeoJSON" },
    ],
    description: {
      es: "Rediseño y modernización del sitio del Ministerio del Interior de Tucumán con React, React-Leaflet y CSS modular, priorizando estructura de contenidos, accesibilidad y visualización territorial.",
      en: "Redesign and modernization of the Tucumán Ministry of Interior website with React, React-Leaflet, and modular CSS, prioritizing content structure, accessibility, and territorial visualization.",
    },
    images: [minInicio, minMapa, minNov, minBusquedas, minReportes],
    tech: ["html", "css", "js", "react", "leaflet", "git"],
    github: null,
  },
  {
    id: 5,
    category: "professional",
    featured: false,
    title: {
      es: "🏭 Sistema de Gestión para Distribuidora de Bebidas",
      en: "🏭 Beverage Distribution Management System",
    },
    summary: {
      es: "Sistema para logística e inventario con trazabilidad por lotes, dashboards y estructura modular para un equipo ágil.",
      en: "Logistics and inventory system with batch traceability, dashboards, and modular structure for an agile team.",
    },
    outcome: {
      es: "Mejoró visibilidad operativa sobre stock, proveedores y vencimientos en un flujo logístico más complejo.",
      en: "Improved operational visibility over stock, suppliers, and expirations in a more complex logistics workflow.",
    },
    metrics: [
      { label: { es: "Trabajo", en: "Mode" }, value: "Agile team delivery" },
      { label: { es: "Trazabilidad", en: "Traceability" }, value: "Batches + expiration control" },
    ],
    description: {
      es: "Proyecto de equipo con React, Node.js y MySQL para optimizar logística y control de inventarios. Incluye productos, proveedores, clientes, stock en tiempo real y trazabilidad por lotes.",
      en: "Team project built with React, Node.js, and MySQL to optimize logistics and inventory control. It includes products, suppliers, customers, real-time stock, and batch traceability.",
    },
    images: [disMenu, disLotes, disStock, disProveedores, disCrLot],
    tech: ["html", "css", "js", "react", "node", "express", "mysql", "git", "scrum"],
    github: "https://github.com/DiegoF23/Distribuidor.git",
  },
  {
    id: 3,
    category: "educational",
    featured: false,
    title: {
      es: "Patitas - Veterinaria",
      en: "Patitas - Veterinary Clinic",
    },
    summary: {
      es: "Proyecto académico en equipo para turnos, historia clínica y seguimiento de pacientes con foco fuerte en backend.",
      en: "Academic team project for appointments, medical records, and patient tracking with a strong backend focus.",
    },
    outcome: {
      es: "Sirvió para consolidar trabajo colaborativo y bases de arquitectura backend aplicada a un caso real local.",
      en: "Helped consolidate collaborative work and backend architecture fundamentals applied to a local real-world case.",
    },
    metrics: [
      { label: { es: "Tipo", en: "Type" }, value: "Academic final project" },
      { label: { es: "Foco", en: "Focus" }, value: "Backend collaboration" },
    ],
    description: {
      es: "Proyecto final de cursado para una veterinaria local con turnos, historia clínica, registro de veterinarios, seguimiento de pacientes y notificaciones.",
      en: "Final course project for a local veterinary clinic with appointments, medical records, veterinarian registration, patient tracking, and notifications.",
    },
    images: [vetlog, vetmenu, vetTurnos, vetPacientes, vetProductos, vetProveedores],
    tech: ["html", "css", "js", "react", "node", "express", "mysql", "git", "scrum"],
    github: "https://github.com/DiegoF23/proyectoFinal",
  },
  {
    id: 8,
    category: "educational",
    featured: false,
    title: {
      es: "🎓 Proyecto de Automatización Inteligente de Aulas — Detección de Presencia y Control Ambiental (Python)",
      en: "🎓 Smart Classroom Automation Project — Presence Detection & Environmental Control (Python)",
    },
    summary: {
      es: "Proyecto de visión por computadora que automatiza iluminación y climatización según presencia y condiciones del aula.",
      en: "Computer vision project that automates lighting and climate control based on classroom presence and conditions.",
    },
    outcome: {
      es: "Explora automatización orientada a eficiencia energética y demuestra integración entre software y entorno físico.",
      en: "Explores energy-efficiency automation and shows how software can integrate with the physical environment.",
    },
    metrics: [
      { label: { es: "Área", en: "Area" }, value: "Computer vision + automation" },
      { label: { es: "Stack", en: "Stack" }, value: "Python + OpenCV" },
    ],
    description: {
      es: "Trabajo final de materia que usa visión por computadora para detectar presencia y accionar luces, ventilación o aire acondicionado según ocupación y temperatura.",
      en: "Final course assignment that uses computer vision to detect presence and trigger lights, ventilation, or air conditioning based on occupancy and temperature.",
    },
    images: [{ src: demo, type: "video", poster: apagarLuces, autoplayMs: 6000 }],
    tech: ["python", "opencv", "git"],
    github: "https://github.com/DiegoF23/AulaInteligente.git",
  },
  {
    id: 6,
    category: "educational",
    featured: false,
    title: {
      es: "🛒 E-Commerce React + Node.js + MySQL",
      en: "🛒 E-Commerce React + Node.js + MySQL",
    },
    summary: {
      es: "Proyecto educativo para enseñar fundamentos full stack con catálogo, carrito, flujo de compra y arquitectura por capas.",
      en: "Educational project to teach full-stack fundamentals through catalog, cart, checkout flow, and layered architecture.",
    },
    outcome: {
      es: "Funciona como demostración pedagógica de arquitectura, estado en React y consumo de APIs REST.",
      en: "Works as a teaching demo for architecture, React state management, and REST API consumption.",
    },
    metrics: [
      { label: { es: "Propósito", en: "Purpose" }, value: "Teaching full-stack basics" },
      { label: { es: "Recorrido", en: "Journey" }, value: "Catalog → cart → checkout" },
    ],
    description: {
      es: "Proyecto educativo con React, Node.js, Express y MySQL para simular una tienda online con búsqueda, carrito persistente y flujo de compra completo.",
      en: "Educational project with React, Node.js, Express, and MySQL that simulates an online store with search, persistent cart, and a full purchase flow.",
    },
    images: [inicio, addCarrito, carrito],
    tech: ["html", "css", "js", "react", "git", "node", "express", "mysql"],
    github: "https://github.com/DiegoF23/cursoReactNodeEcommerce.git",
  },
];
