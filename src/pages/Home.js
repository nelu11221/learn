import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookIcon, GlobeIcon, CalculatorIcon, FlaskIcon, AtomIcon,
  LeafIcon, CodeIcon, LandmarkIcon, ShieldIcon, ClockIcon,
  CheckIcon, PlayIcon, ArrowRightIcon, StarIcon, AwardIcon, TrendingUpIcon,
  LockIcon, GraduationCapIcon
} from '../icons/Icons';

const courses = [
  { name: 'Limba română', icon: BookIcon, color: '#e8723a' },
  { name: 'Limba engleză', icon: GlobeIcon, color: '#d4622e' },
  { name: 'Matematica', icon: CalculatorIcon, color: '#c25522' },
  { name: 'Chimia', icon: FlaskIcon, color: '#e8723a' },
  { name: 'Fizica', icon: AtomIcon, color: '#d4622e' },
  { name: 'Biologie', icon: LeafIcon, color: '#c25522' },
  { name: 'Informatica', icon: CodeIcon, color: '#e8723a' },
  { name: 'Istoria românilor și universală', icon: LandmarkIcon, color: '#d4622e' },
];

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="hero-container">
          <div className="hero-top">
            <div className="hero-badge">
              <StarIcon size={14} color="#e8723a" />
              <span>PLATFORMA #1 DE PREGĂTIRE BAC DIN MOLDOVA</span>
            </div>
          </div>

          <div className="hero-center">
            <h1 className="hero-title">
              Pregătește-te pentru<br />
              <span className="hero-title-accent">Bacalaureat</span>
            </h1>
            <p className="hero-subtitle">
              Learnify pregătește elevii din clasele 10-12 pentru examenul de bacalaureat.
              Subiecte tip BAC, simulări cronometrate și feedback instant.
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn btn-hero-primary btn-lg">
                Începe Pregătirea
                <ArrowRightIcon size={18} />
              </Link>
              <Link to="/cursuri" className="btn btn-hero-outline btn-lg">
                Vezi Materiile
              </Link>
            </div>
          </div>

          <div className="hero-subjects">
            {courses.map((course, i) => (
              <div key={i} className="hero-subject-pill">
                <course.icon size={16} color="#fff" />
                <span>{course.name}</span>
              </div>
            ))}
          </div>

          {/* Floating Stats */}
          <div className="hero-float hero-float-left">
            <div className="hero-float-card">
              <div className="hero-float-icon">
                <TrendingUpIcon size={20} color="#e8723a" />
              </div>
              <div>
                <span className="hero-float-number">94%</span>
                <span className="hero-float-label">Rata de promovare</span>
              </div>
            </div>
          </div>

          <div className="hero-float hero-float-right">
            <div className="hero-float-card">
              <div className="hero-float-icon">
                <AwardIcon size={20} color="#e8723a" />
              </div>
              <div>
                <span className="hero-float-number">8.7</span>
                <span className="hero-float-label">Nota medie BAC</span>
              </div>
            </div>
          </div>

          <div className="hero-bottom-bar">
            <div className="hero-bottom-item">
              <ShieldIcon size={18} color="rgba(255,255,255,0.7)" />
              <span>Conținut verificat de profesori examinatori</span>
            </div>
            <div className="hero-bottom-divider" />
            <div className="hero-bottom-item">
              <CheckIcon size={18} color="rgba(255,255,255,0.7)" />
              <span>Subiecte actualizate 2026</span>
            </div>
            <div className="hero-bottom-divider" />
            <div className="hero-bottom-item">
              <ClockIcon size={18} color="rgba(255,255,255,0.7)" />
              <span>Simulări cronometrate tip examen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section - "The Engine" equivalent */}
      <section className="platform-section">
        <div className="section-container">
          <span className="section-label">PLATFORMĂ</span>
          <h2 className="section-title">Motorul de Pregătire BAC</h2>
          <p className="section-desc">
            Rezolvă subiecte tip BAC. Primești înapoi un verdict clar, greșeli specifice,
            sugestii de corectare și un registru complet de evidență. Aceleași criterii
            ca la examen. Aceeași evaluare. De fiecare dată.
          </p>
          <div className="platform-flow">
            <div className="flow-card">
              <div className="flow-items">
                <div className="flow-item">
                  <BookIcon size={18} /> <span>Lecții</span>
                </div>
                <div className="flow-item">
                  <CalculatorIcon size={18} /> <span>Teste</span>
                </div>
                <div className="flow-item">
                  <CodeIcon size={18} /> <span>Exerciții</span>
                </div>
                <div className="flow-item">
                  <FlaskIcon size={18} /> <span>Laboratoare</span>
                </div>
              </div>
              <div className="flow-center">
                <div className="flow-engine">
                  <GlobeIcon size={20} color="#e8723a" />
                  <span>Learnify AI</span>
                </div>
              </div>
              <div className="flow-items">
                <div className="flow-item">
                  <CheckIcon size={18} color="#22c55e" /> <span>Conținut Clar</span>
                </div>
                <div className="flow-item">
                  <ArrowRightIcon size={18} color="#e8723a" /> <span>Progres</span>
                </div>
                <div className="flow-item">
                  <TrendingUpIcon size={18} color="#3b82f6" /> <span>Analiză</span>
                </div>
                <div className="flow-item">
                  <AwardIcon size={18} color="#f59e0b" /> <span>Certificate</span>
                </div>
              </div>
            </div>
            <div className="flow-props">
              <span className="flow-prop">Personalizat</span>
              <span className="flow-prop">Adaptiv</span>
              <span className="flow-prop">Interactiv</span>
              <span className="flow-prop">Urmărit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section - "Compose" equivalent */}
      <section className="compose-section">
        <div className="section-container">
          <div className="compose-grid">
            <div className="compose-left">
              <span className="section-label">CURSURI</span>
              <h2 className="section-title">Alege-ți Parcursul</h2>
              <p className="section-label-sub">DEFINEȘTE STRATEGIA TA PENTRU BAC</p>

              <div className="compose-feature">
                <BookIcon size={20} color="#e8723a" />
                <div>
                  <h4>Materii de Examen</h4>
                  <p>8 materii conform programei de bacalaureat a Republicii Moldova,
                  cu subiecte model și bareme de corectare.</p>
                </div>
              </div>

              <div className="compose-feature">
                <ShieldIcon size={20} color="#e8723a" />
                <div>
                  <h4>Selectare Personalizată</h4>
                  <p>Alege exact 4 materii la înregistrare. Concentrează-te pe disciplinele
                  de examen care contează cel mai mult pentru tine.</p>
                </div>
              </div>

              <div className="compose-feature">
                <ClockIcon size={20} color="#e8723a" />
                <div>
                  <h4>Simulări BAC în Timp Real</h4>
                  <p>Rezolvă teste cronometrate identice cu cele de la examen.
                  Urmărește-ți scorul și vezi exact unde trebuie să mai lucrezi.</p>
                </div>
              </div>
            </div>

            <div className="compose-right">
              <div className="compose-card">
                <div className="compose-card-header">
                  <span>CURSURI DISPONIBILE</span>
                  <div className="compose-logo">
                    <GraduationCapIcon size={16} color="#e8723a" />
                    <span>LEARNIFY</span>
                  </div>
                </div>
                <div className="compose-card-body">
                  {courses.map((course, i) => (
                    <div key={i} className="compose-course-row">
                      <div className="compose-course-icon" style={{ color: course.color }}>
                        <course.icon size={16} color={course.color} />
                      </div>
                      <span className="compose-course-name">{course.name}</span>
                      <span className="compose-course-tag">Disponibil</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="security-section">
        <div className="section-container">
          <h2 className="section-title center">Siguranță și Calitate</h2>
          <div className="security-grid">
            <div className="security-card">
              <ShieldIcon size={28} color="#1a1a1a" />
              <h4>Date Protejate</h4>
              <p>Criptare TLS 1.3 în tranzit. AES-256 în repaus. Datele elevilor sunt în siguranță.</p>
            </div>
            <div className="security-card active">
              <LockIcon size={28} color="#e8723a" />
              <h4>Acces Controlat</h4>
              <p>Autentificare securizată. Permisiuni bazate pe rol. Acces limitat per utilizator.</p>
            </div>
            <div className="security-card">
              <ClockIcon size={28} color="#1a1a1a" />
              <h4>Evidență Completă</h4>
              <p>Jurnal complet de activitate. Fiecare acțiune este înregistrată și auditabilă.</p>
            </div>
            <div className="security-card">
              <GlobeIcon size={28} color="#1a1a1a" />
              <h4>Disponibilitate</h4>
              <p>Platformă cloud. Disponibilă 24/7. Acces din orice dispozitiv conectat la internet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Center */}
      <section className="trust-section">
        <div className="section-container">
          <div className="trust-card">
            <span className="trust-label">CENTRU DE ÎNCREDERE</span>
            <h2 className="trust-title">
              Conținut conform programei BAC. Verificat de profesori examinatori.
              Subiecte actualizate anual. Conform GDPR.
            </h2>
            <Link to="/faq" className="btn btn-outline-dark btn-sm">
              VEZI DETALII
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
