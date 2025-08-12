import React from 'react';

const FALLBACK = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto y sus características.',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200'
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto y sus características.',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200'
  }
];

function ProjectCard({p}){
  return (
    <article className="card">
      <div className="project__img">
        <img src={p.imageUrl} alt={p.title} loading="lazy" />
      </div>
      <h3 style={{margin:'14px 0 6px', fontSize:'20px', fontWeight:800}}>{p.title}</h3>
      <p className="subtle">{p.description}</p>
    </article>
  );
}

export default function Projects({items=[]}){
  const list = Array.isArray(items) && items.length ? items.slice(0,2) : FALLBACK;
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="kicker">PROYECTOS</div>
        <div className="projects__grid" style={{marginTop:'18px'}}>
          {list.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
