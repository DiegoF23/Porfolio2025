import React, { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import AboutContact from './components/AboutContact.jsx'; // 👈 nuevo
import Footer from './components/Footer.jsx';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let cancelled = false;
    const timer = setTimeout(() => { if (!cancelled) setProjects([]); }, 2000);
    fetch(`${API_URL}/api/projects`)
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(data => { if (!cancelled) setProjects(Array.isArray(data) ? data : []); })
      .catch(() => { if (!cancelled) setProjects([]); })
      .finally(() => clearTimeout(timer));
    return () => { cancelled = true; clearTimeout(timer); };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects items={projects} />
        {/* 👇 About + Contact lado a lado en desktop / apilados en mobile */}
        <AboutContact />
        <Footer />
      </main>
      
    </>
  );
}
