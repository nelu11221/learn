import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MailIcon, LockIcon, GraduationCapIcon } from '../icons/Icons';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = localStorage.getItem('learnify_user');
    if (stored) {
      const user = JSON.parse(stored);
      if (user.email === email && user.password === password) {
        onLogin(user);
        navigate('/dashboard');
        return;
      }
    }
    setError('Email sau parolă incorectă. Încearcă din nou.');
  };

  return (
    <div className="login-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Autentificare</h1>
          <p>Conectează-te la contul tău Learnify pentru a continua pregătirea pentru BAC.</p>
        </div>
      </section>

      <section className="login-section">
        <div className="section-container">
          <div className="login-card">
            <div className="login-card-header">
              <GraduationCapIcon size={32} color="#e8723a" />
              <h3>Bine ai revenit!</h3>
              <p>Introdu datele tale pentru a te conecta</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <div className="input-wrapper">
                  <MailIcon size={16} color="#999" />
                  <input
                    type="email"
                    placeholder="emailul@tău.md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Parola</label>
                <div className="input-wrapper">
                  <LockIcon size={16} color="#999" />
                  <input
                    type="password"
                    placeholder="Parola ta"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {error && <div className="form-error">{error}</div>}

              <button type="submit" className="btn btn-primary btn-full">
                Conectează-te
              </button>
            </form>

            <div className="login-footer">
              <p>Nu ai un cont? <Link to="/register">Înregistrează-te</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
