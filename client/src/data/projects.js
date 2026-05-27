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
    title: {
      es: "🍽️ La Mony - Sistema Integral de Gestión Gastronómica",
      en: "🍽️ La Mony - Restaurant Management System",
    },
    description: {
      es: "Este sistema representa una solución full stack avanzada para la gestión integral de un negocio gastronómico, abarcando todas las áreas operativas: stock, compras, ventas, RRHH, delivery, producción, análisis financiero y más. Construido con React, Node.js, Express y MySQL, implementa autenticación JWT y despliegue optimizado en un VPS Hostinger para garantizar disponibilidad constante y seguridad de datos. Módulos Principales Stock y Producción: control de movimientos, registros automáticos de ingresos/egresos y actualización por insumo o categoría. Cajas y Finanzas: cierres diarios automáticos, control de faltantes/sobrantes, historial de operaciones y balance consolidado. Compras y Proveedores: seguimiento de gastos, integración con cajas y análisis comparativo por períodos. Recetarios: gestión completa de recetas con ingredientes, costos, pasos y videos tutoriales integrados. Recursos Humanos: control de asistencia, horarios, actividades adicionales y cálculo de sueldos. GeoDelivery: módulo interactivo con mapas dinámicos para delimitar zonas de reparto y calcular costos por área. Análisis y Reportes: visualización de métricas con gráficos dinámicos (ingresos, egresos, compras, ventas, producción). Aspectos Técnicos Destacados Arquitectura modular MVC con separación clara entre controladores, rutas y servicios. Interfaz moderna, responsiva y fluida desarrollada en React Hooks y Context API. Autenticación robusta con JSON Web Tokens (JWT) y control de sesiones por rol. API REST segura, validada y documentada. Panel administrativo completo para sucursales, usuarios y permisos.  Resultado Una herramienta empresarial totalmente funcional y escalable, diseñada para optimizar el flujo de trabajo de locales gastronómicos, brindando trazabilidad total desde la materia prima hasta la caja final del día.",
      en: "This system represents an advanced full-stack solution for comprehensive restaurant business management, covering all operational areas: stock, purchases, sales, HR, delivery, production, financial analysis and more. Built with React, Node.js, Express and MySQL, it implements JWT authentication and optimized deployment on a Hostinger VPS to ensure constant availability and data security. Main Modules: Stock and Production - movement control, automatic income/expense records and updates by supply or category. Cash and Finance - automatic daily closings, shortage/surplus control, operation history and consolidated balance. Purchases and Suppliers - expense tracking, cash integration and comparative analysis by periods. Recipes - complete recipe management with ingredients, costs, steps and integrated tutorial videos. Human Resources - attendance control, schedules, additional activities and salary calculation. GeoDelivery - interactive module with dynamic maps to define delivery zones and calculate costs by area. Analysis and Reports - metrics visualization with dynamic charts (income, expenses, purchases, sales, production). Technical Highlights: Modular MVC architecture with clear separation between controllers, routes and services. Modern, responsive and fluid interface developed with React Hooks and Context API. Robust authentication with JSON Web Tokens (JWT) and role-based session control. Secure, validated and documented REST API. Complete administrative panel for branches, users and permissions. Result: A fully functional and scalable business tool, designed to optimize workflow for restaurants, providing total traceability from raw materials to the final daily cash register.",
    },
    images: [mony6, mony9, mony7, mony4, mony5, mony3, mony1, mony8, mony2, mony10, mony11, mony12, mony13, mony14],
    tech: ["html", "css", "js", "react", "leaflet", "node", "express", "mysql", "git", "mercadopago", "googlemaps", "hostinger"],
    github: null,
  },
  {
    id: 2,
    title: {
      es: "🗳️ Sistema Electoral – C# .NET + SQL Server (Azure)",
      en: "🗳️ Electoral System – C# .NET + SQL Server (Azure)",
    },
    description: {
      es: "Aplicación de escritorio desarrollada en conjunto con MA PROGRAMACION, en C# (.NET WinForms) con base de datos SQL Server alojada en Azure, diseñada para la gestión integral de procesos electorales. Permite administrar dirigentes, movilizadores y votantes, registrar resultados en tiempo real y generar estadísticas visuales precisas. Principales funciones: Inicio de sesión con roles y control de acceso. Registro jerárquico de dirigentes, movilizadores y votantes. Seguimiento de participación (\"Ya voté\") en tiempo real. Carga y comparación de resultados post elecciones. Gráficos y reportes PDF sobre votos y gastos de campaña. Desarrollado para un entorno político real, priorizando seguridad, eficiencia y disponibilidad en la nube mediante SQL Azure y arquitectura modular en capas.",
      en: "Desktop application developed jointly with MA PROGRAMMING, in C# (.NET WinForms) with SQL Server database hosted on Azure, designed for comprehensive electoral process management. It allows managing leaders, mobilizers and voters, registering results in real-time and generating precise visual statistics. Main functions: Login with roles and access control. Hierarchical registration of leaders, mobilizers and voters. Real-time participation tracking (\"I voted\"). Post-election results loading and comparison. Charts and PDF reports on votes and campaign expenses. Developed for a real political environment, prioritizing security, efficiency and cloud availability through SQL Azure and layered modular architecture.",
    },
    images: [electinicio, carDir, carMov, carVot, PAdronElectoral, graficos, compararDatos, electorImp, posiciones, yavote],
    tech: ["dotnet", "csharp", "sqlserver", "git", "azure"],
    github: null,
  },
  {
    id: 3,
    title: {
      es: "Patitas - Veterinaria",
      en: "Patitas - Veterinary Clinic",
    },
    description: {
      es: "Proyecto de finalizacion de cursado para una veterinaria local con solucion a Turnos, historia clínica, registro de médicos veterinarios, seguimiento de pacientes y notificaciones. Construido en equipo con foco en backend.",
      en: "End-of-course project for a local veterinary clinic with solutions for appointments, medical records, veterinarian registration, patient tracking and notifications. Built as a team with backend focus.",
    },
    images: [vetlog, vetmenu, vetTurnos, vetPacientes, vetProductos, vetProveedores],
    tech: ["html", "css", "js", "react", "node", "express", "mysql", "git", "scrum"],
    github: "https://github.com/DiegoF23/proyectoFinal",
  },
  {
    id: 4,
    title: {
      es: "Ministerio del Interior – Sitio Institucional (reforma)",
      en: "Ministry of Interior – Institutional Website (redesign)",
    },
    description: {
      es: "En colaboración con Zeus Agencia, Rediseño y modernización del sitio del Ministerio del Interior de Tucumán, enfocada en estructura de contenidos, accesibilidad y visualización territorial. Se implementó una UI clara y responsive con componentes modulares en React. Principales funciones: Sección institucional con misión, funciones e historia; bloques destacados y citas del ministro. Mapa interactivo de Tucumán (Leaflet + GeoJSON): selección de departamentos, realce por hover/click y panel lateral con comunas y enlaces oficiales. Novedades por categorías (infraestructura, salud, educación, tecnología) con imagen, resumen y \"leer más\". Navegación ágil, diseño responsive y buenas prácticas de accesibilidad (focus/teclas, contraste, etiquetado). Stack y enfoque técnico: Frontend: React, React-Leaflet, CSS modular. Datos geográficos: GeoJSON mergeado (departamentos ↔ comunas ↔ recursos). UX/Perf: carga diferida de imágenes, layout estable, componentes reutilizables. Resultado: un portal institucional más claro, rápido y navegable, con un mapa interactivo que facilita el acceso a información territorial y enlaces por comuna, listo para comunicación pública y actualización continua.",
      en: "In collaboration with Zeus Agency, redesign and modernization of the Ministry of Interior of Tucumán website, focused on content structure, accessibility and territorial visualization. A clear and responsive UI was implemented with modular React components. Main functions: Institutional section with mission, functions and history; featured blocks and minister quotes. Interactive map of Tucumán (Leaflet + GeoJSON): department selection, hover/click highlighting and side panel with communes and official links. News by categories (infrastructure, health, education, technology) with image, summary and \"read more\". Agile navigation, responsive design and accessibility best practices (focus/keys, contrast, labeling). Technical stack: Frontend: React, React-Leaflet, modular CSS. Geographic data: Merged GeoJSON (departments ↔ communes ↔ resources). UX/Perf: lazy image loading, stable layout, reusable components. Result: a clearer, faster and more navigable institutional portal, with an interactive map that facilitates access to territorial information and links by commune.",
    },
    images: [minInicio, minMapa, minNov, minBusquedas, minReportes],
    tech: ["html", "css", "js", "react", "leaflet", "git"],
    github: null,
  },
  {
    id: 5,
    title: {
      es: "🏭 Sistema de Gestión para Distribuidora de Bebidas",
      en: "🏭 Beverage Distribution Management System",
    },
    description: {
      es: "Proyecto desarrollado como parte de un equipo ágil bajo metodología Scrum, enfocado en optimizar la logística y control de inventarios de una distribuidora nacional de bebidas. El sistema fue implementado con un stack React + Node.js + MySQL, estructurado en componentes modulares y escalables. Incluye funcionalidades clave como: Gestión de productos, proveedores, clientes y stock en tiempo real. Control de lotes con trazabilidad por fecha de vencimiento y código. Visualización dinámica mediante dashboards interactivos. Arquitectura organizada en carpetas controllers, routes, contexts y layouts, aplicando buenas prácticas de clean code. Durante el desarrollo se trabajó con versionado en Git, planificación en sprints, y revisiones iterativas con el equipo para garantizar entregas continuas y de alta calidad.",
      en: "Project developed as part of an agile team under Scrum methodology, focused on optimizing logistics and inventory control for a national beverage distributor. The system was implemented with a React + Node.js + MySQL stack, structured in modular and scalable components. Key features include: Product, supplier, customer and real-time stock management. Batch control with expiration date and code traceability. Dynamic visualization through interactive dashboards. Architecture organized in controllers, routes, contexts and layouts folders, applying clean code best practices. During development, version control with Git, sprint planning and iterative reviews with the team were used to ensure continuous and high-quality deliveries.",
    },
    images: [disMenu, disLotes, disStock, disProveedores, disCrLot],
    tech: ["html", "css", "js", "react", "node", "express", "mysql", "git", "scrum"],
    github: "https://github.com/DiegoF23/Distribuidor.git",
  },
  {
    id: 6,
    title: {
      es: "🛒 E-Commerce React + Node.js + MySQL",
      en: "🛒 E-Commerce React + Node.js + MySQL",
    },
    description: {
      es: "Proyecto educativo desarrollado para enseñar fundamentos de programación full stack a estudiantes de la carrera. El sistema simula una tienda online con frontend en React y backend en Node.js + Express, conectado a MySQL. Principales funciones: Catálogo de productos con búsqueda dinámica y cards interactivas. Carrito de compras en modal con persistencia en LocalStorage. Flujo de compra completo y simulación de pago con validaciones. Backend estructurado en controllers, routes y config (buenas prácticas de arquitectura). Notificaciones, animaciones y diseño responsive. Creado con fines didácticos para enseñar arquitectura por capas, consumo de APIs REST, manipulación de estado en React y principios de UX funcional aplicada al desarrollo web.",
      en: "Educational project developed to teach full-stack programming fundamentals to students. The system simulates an online store with React frontend and Node.js + Express backend, connected to MySQL. Main features: Product catalog with dynamic search and interactive cards. Shopping cart in modal with LocalStorage persistence. Complete purchase flow and payment simulation with validations. Backend structured in controllers, routes and config (architecture best practices). Notifications, animations and responsive design. Created for educational purposes to teach layered architecture, REST API consumption, React state management and functional UX principles applied to web development.",
    },
    images: [inicio, addCarrito, carrito],
    tech: ["html", "css", "js", "react", "git", "node", "express", "mysql"],
    github: "https://github.com/DiegoF23/cursoReactNodeEcommerce.git",
  },
  {
    id: 7,
    title: {
      es: "🗳️ ElectorApp v2 — Plataforma electoral",
      en: "🗳️ ElectorApp v2 — Electoral Platform",
    },
    description: {
      es: "Desarrollada en equipo bajo Scrum, en colaboración con Zeus Agencia y MA Programación como proveedor principal de software. Stack: React (SPA), Node/Express (API REST), MySQL, control de versiones con Git y despliegue en Hostinger. Módulos clave: Dashboard con KPIs y gráficos, gestión de Referentes, Dirigentes, Movilizadores y Votantes, consulta de padrón, presupuestos, vehículos y reportes. Día Electoral (live): seguimiento en tiempo real por franja horaria y zona; estado de participación. Post Elecciones: panel comparativo (precargados vs. escrutados), diferencia y rendimiento por mesa. Productividad: alta usabilidad, filtros, detección de duplicados, acciones rápidas (incl. contacto por WhatsApp) y exportes. Calidad: arquitectura modular, roles/permisos, validaciones en frontend/backend y registros auditables. Ideal para equipos políticos que necesitan trazabilidad completa del proceso electoral y analítica accionable, desde la carga previa hasta el análisis post comicio.",
      en: "Developed as a team under Scrum, in collaboration with Zeus Agency and MA Programming as main software provider. Stack: React (SPA), Node/Express (REST API), MySQL, version control with Git and deployment on Hostinger. Key modules: Dashboard with KPIs and charts, management of Referents, Leaders, Mobilizers and Voters, voter roll query, budgets, vehicles and reports. Election Day (live): real-time tracking by time slot and zone; participation status. Post Elections: comparative panel (pre-loaded vs. counted), difference and performance per table. Productivity: high usability, filters, duplicate detection, quick actions (including WhatsApp contact) and exports. Quality: modular architecture, roles/permissions, frontend/backend validations and auditable records. Ideal for political teams needing complete electoral process traceability and actionable analytics.",
    },
    images: [electv2inicio, electdia, electv2opc, electv2post, electv2ref, electv2vot],
    tech: ["html", "css", "js", "react", "git", "node", "express", "mysql", "hostinger"],
    github: null,
  },
  {
    id: 8,
    title: {
      es: "🎓 Proyecto de Automatización Inteligente de Aulas — Detección de Presencia y Control Ambiental (Python)",
      en: "🎓 Smart Classroom Automation Project — Presence Detection & Environmental Control (Python)",
    },
    description: {
      es: "Desarrollado en equipo como trabajo final de materia, este proyecto aplica visión por computadora e inteligencia ambiental para optimizar el consumo energético en entornos educativos. El sistema utiliza una cámara con reconocimiento visual para detectar la presencia de alumnos en el aula. Si se detecta ocupación, enciende automáticamente las luces y, según las condiciones de temperatura, activa ventiladores o aire acondicionado para mantener un ambiente confortable. En ausencia de personas, apaga todos los dispositivos para reducir el consumo eléctrico. Tecnologías y Enfoque: Lenguaje: Python, Librerías: OpenCV, NumPy, time, os, entre otras. Conceptos aplicados: detección de rostros, control de hardware, automatización por eventos, procesamiento de imágenes en tiempo real. Diseño modular y escalable para futuras integraciones con sensores IoT o control remoto.",
      en: "Developed as a team project for a final course assignment, this project applies computer vision and environmental intelligence to optimize energy consumption in educational environments. The system uses a camera with visual recognition to detect student presence in the classroom. If occupancy is detected, it automatically turns on lights and, depending on temperature conditions, activates fans or air conditioning to maintain a comfortable environment. In the absence of people, it turns off all devices to reduce electricity consumption. Technologies and Approach: Language: Python, Libraries: OpenCV, NumPy, time, os, among others. Applied concepts: face detection, hardware control, event-driven automation, real-time image processing. Modular and scalable design for future integrations with IoT sensors or remote control.",
    },
    images: [
      { src: demo, type: "video", poster: apagarLuces, autoplayMs: 6000 },
    ],
    tech: ["python", "opencv", "git"],
    github: "https://github.com/DiegoF23/AulaInteligente.git",
  },
];
