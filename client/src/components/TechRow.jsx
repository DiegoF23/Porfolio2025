import React from 'react';

export default function TechRow(){
  return (
    <div className="techrow" aria-label="Tecnologías">
      {/* Íconos simples en SVG (placeholders) */}
      <svg viewBox="0 0 24 24" aria-label="HTML5"><path fill="currentColor" d="M3 3h18l-2 16-7 2-7-2L3 3zm4 4l1 9 4 1 4-1 1-9H7z"/></svg>
      <svg viewBox="0 0 24 24" aria-label="CSS3"><path fill="currentColor" d="M3 3h18l-2 16-7 2-7-2L3 3zm5 4h8l-1 7-4 1-4-1 1-7z"/></svg>
      <svg viewBox="0 0 24 24" aria-label="JS"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor"/><text x="8" y="17" fontSize="9" fill="currentColor">JS</text></svg>
      <svg viewBox="0 0 256 256" aria-label="React"><g fill="none" stroke="currentColor" strokeWidth="12"><circle cx="128" cy="128" r="18"/><ellipse cx="128" cy="128" rx="78" ry="28"/><ellipse cx="128" cy="128" rx="78" ry="28" transform="rotate(60 128 128)"/><ellipse cx="128" cy="128" rx="78" ry="28" transform="rotate(120 128 128)"/></g></svg>
      <svg viewBox="0 0 24 24" aria-label="Node"><polygon points="12,3 21,8 21,16 12,21 3,16 3,8" fill="none" stroke="currentColor"/></svg>
      <svg viewBox="0 0 24 24" aria-label="Git"><path d="M4 12l8-8 8 8-8 8-8-8z" fill="none" stroke="currentColor"/><circle cx="12" cy="9" r="1.2" fill="currentColor"/><circle cx="9" r="0" /></svg>
    </div>
  );
}
