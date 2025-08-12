import React from 'react';

export default function Contact(){
  return (
    <section id="contact" className="section">
      <div className="container contactrow">
        <div>
          <div className="kicker">CONTACTO</div>
        </div>
        <div className="contact__info">
          <div>diego@example.com</div>
          <div style={{marginTop:6}}>+34 123 456 769</div>
        </div>
        <div className="footer" style={{gridColumn: '1 / -1'}}>
          © {new Date().getFullYear()} Diego Flores
        </div>
      </div>
    </section>
  );
}
