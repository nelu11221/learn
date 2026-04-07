import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserIcon, MailIcon, BookIcon, GlobeIcon, CalculatorIcon,
  FlaskIcon, AtomIcon, LeafIcon, CodeIcon, LandmarkIcon,
  LockIcon, CalendarIcon, AwardIcon, ShieldIcon
} from '../icons/Icons';

const courseIcons = {
  romana: BookIcon,
  engleza: GlobeIcon,
  matematica: CalculatorIcon,
  chimia: FlaskIcon,
  fizica: AtomIcon,
  biologie: LeafIcon,
  informatica: CodeIcon,
  istoria: LandmarkIcon,
};

const courseNames = {
  romana: 'Limba română',
  engleza: 'Limba engleză',
  matematica: 'Matematica',
  chimia: 'Chimia',
  fizica: 'Fizica',
  biologie: 'Biologie',
  informatica: 'Informatica',
  istoria: 'Istoria românilor și universală',
};

function Cabinet({ user }) {
  if (!user) {
    return (
      <div className="cabinet-page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1>Cabinet Personal</h1>
            <p>Trebuie să fii autentificat pentru a accesa cabinetul personal.</p>
            <Link to="/login" className="btn btn-primary">Autentifică-te</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="cabinet-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Cabinet Personal</h1>
          <p>Vizualizează informațiile contului tău și cursurile selectate.</p>
        </div>
      </section>

      <section className="cabinet-section">
        <div className="section-container">
          <div className="cabinet-layout">
            {/* Profile Card */}
            <div className="cabinet-sidebar">
              <div className="profile-card">
                <div className="profile-avatar">
                  <UserIcon size={48} color="#fff" />
                </div>
                <h3>{user.name}</h3>
                <p className="profile-email">
                  <MailIcon size={14} /> {user.email}
                </p>
                {user.school && <p className="profile-detail"><ShieldIcon size={14} /> {user.school}</p>}
                {user.grade && <p className="profile-detail"><BookIcon size={14} /> Clasa {user.grade}</p>}
                <p className="profile-detail">
                  <CalendarIcon size={14} /> Membru din {new Date(user.registeredAt).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long' })}
                </p>
              </div>

              <div className="cabinet-card">
                <h4>Statistici Rapide</h4>
                <div className="cabinet-stats">
                  <div className="cabinet-stat">
                    <span className="cabinet-stat-value">{user.courses?.length || 0}</span>
                    <span className="cabinet-stat-label">Cursuri</span>
                  </div>
                  <div className="cabinet-stat">
                    <span className="cabinet-stat-value">7</span>
                    <span className="cabinet-stat-label">Zile Serie</span>
                  </div>
                  <div className="cabinet-stat">
                    <span className="cabinet-stat-value">23</span>
                    <span className="cabinet-stat-label">Lecții</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="cabinet-main">
              {/* Courses - Locked */}
              <div className="cabinet-card">
                <div className="cabinet-card-header">
                  <h3>Materiile de Examen</h3>
                  <div className="locked-badge">
                    <LockIcon size={14} />
                    <span>Blocat</span>
                  </div>
                </div>
                <div className="locked-notice">
                  <LockIcon size={16} color="#e8723a" />
                  <p>Materiile de examen au fost selectate la înregistrare și nu pot fi modificate. Această politică asigură angajamentul serios față de pregătirea ta pentru BAC.</p>
                </div>
                <div className="cabinet-courses">
                  {user.courses?.map((courseId) => {
                    const IconComp = courseIcons[courseId];
                    const name = courseNames[courseId];
                    if (!IconComp) return null;
                    return (
                      <div key={courseId} className="cabinet-course-item">
                        <div className="cabinet-course-icon">
                          <IconComp size={22} color="#e8723a" />
                        </div>
                        <div className="cabinet-course-info">
                          <h4>{name}</h4>
                          <span>Curs activ</span>
                        </div>
                        <div className="cabinet-course-lock">
                          <LockIcon size={16} color="#ccc" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Account Info */}
              <div className="cabinet-card">
                <div className="cabinet-card-header">
                  <h3>Informații Cont</h3>
                </div>
                <div className="cabinet-info-grid">
                  <div className="info-row">
                    <span className="info-label">Nume complet</span>
                    <span className="info-value">{user.name}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Email</span>
                    <span className="info-value">{user.email}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Școala</span>
                    <span className="info-value">{user.school || 'Nespecificat'}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Clasa</span>
                    <span className="info-value">{user.grade ? `Clasa ${user.grade}` : 'Nespecificat'}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Data înregistrării</span>
                    <span className="info-value">{new Date(user.registeredAt).toLocaleDateString('ro-RO')}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="cabinet-card">
                <div className="cabinet-card-header">
                  <h3>Realizări</h3>
                </div>
                <div className="achievements-grid">
                  {[
                    { name: 'Prima Lecție', desc: 'Ai completat prima lecție BAC', unlocked: true },
                    { name: 'Serie de 7 Zile', desc: 'Ai studiat 7 zile consecutiv', unlocked: true },
                    { name: 'Nota 10', desc: 'Ai obținut 10 la o simulare BAC', unlocked: false },
                    { name: 'Gata de BAC', desc: 'Ai completat toată programa la o materie', unlocked: false },
                  ].map((achievement, i) => (
                    <div key={i} className={`achievement-item ${achievement.unlocked ? 'unlocked' : ''}`}>
                      <AwardIcon size={28} color={achievement.unlocked ? '#e8723a' : '#ddd'} />
                      <h5>{achievement.name}</h5>
                      <p>{achievement.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cabinet;
