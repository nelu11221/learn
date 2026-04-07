import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCapIcon } from '../icons/Icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <GraduationCapIcon size={28} color="#fff" />
              <span>LEARNIFY</span>
            </div>
            <p className="footer-desc">
              Platforma de pregătire BAC pentru elevii din clasele 10-12 din Republica Moldova. Pregătește-te inteligent, obține nota maximă.
            </p>
          </div>
          <div className="footer-col">
            <h4>Platformă</h4>
            <Link to="/cursuri">Cursuri</Link>
            <Link to="/dashboard">Panou de Control</Link>
            <Link to="/faq">Întrebări Frecvente</Link>
          </div>
          <div className="footer-col">
            <h4>Companie</h4>
            <Link to="/suport">Suport</Link>
            <Link to="/cabinet">Cabinet Personal</Link>
            <Link to="/register">Înregistrare</Link>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <Link to="/">Termeni și Condiții</Link>
            <Link to="/">Politica de Confidențialitate</Link>
            <Link to="/">GDPR</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Learnify. Toate drepturile rezervate. Făcut cu dedicație în Moldova.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
