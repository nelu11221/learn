import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GraduationCapIcon, MenuIcon, XIcon } from '../icons/Icons';

function Navbar({ user, onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    navigate('/');
    setMobileOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
          <GraduationCapIcon size={28} color="#e8723a" />
          <span>LEARNIFY</span>
        </Link>

        <div className={`navbar-links ${mobileOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            Platformă
          </Link>
          <Link
            to="/cursuri"
            className={`nav-link ${location.pathname === '/cursuri' ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            Cursuri
          </Link>
          <Link
            to="/faq"
            className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/suport"
            className={`nav-link ${location.pathname === '/suport' ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            Suport
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                Panou
              </Link>
              <Link
                to="/cabinet"
                className={`nav-link ${location.pathname === '/cabinet' ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                Cabinet
              </Link>
              <button className="nav-btn nav-btn-outline" onClick={handleLogout}>
                Deconectare
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-btn nav-btn-outline" onClick={() => setMobileOpen(false)}>
                Autentificare
              </Link>
              <Link to="/register" className="nav-btn nav-btn-primary" onClick={() => setMobileOpen(false)}>
                Înregistrare
              </Link>
            </>
          )}
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
