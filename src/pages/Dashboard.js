import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookIcon, GlobeIcon, CalculatorIcon, FlaskIcon, AtomIcon,
  LeafIcon, CodeIcon, LandmarkIcon, TrendingUpIcon, AwardIcon,
  CalendarIcon, ClockIcon, CheckIcon, ArrowRightIcon
} from '../icons/Icons';

const courseData = {
  romana: { name: 'Limba română', icon: BookIcon, color: '#e8723a', totalLessons: 48 },
  engleza: { name: 'Limba engleză', icon: GlobeIcon, color: '#d4622e', totalLessons: 52 },
  matematica: { name: 'Matematica', icon: CalculatorIcon, color: '#c25522', totalLessons: 64 },
  chimia: { name: 'Chimia', icon: FlaskIcon, color: '#e8723a', totalLessons: 40 },
  fizica: { name: 'Fizica', icon: AtomIcon, color: '#d4622e', totalLessons: 44 },
  biologie: { name: 'Biologie', icon: LeafIcon, color: '#c25522', totalLessons: 42 },
  informatica: { name: 'Informatica', icon: CodeIcon, color: '#e8723a', totalLessons: 56 },
  istoria: { name: 'Istoria românilor și universală', icon: LandmarkIcon, color: '#d4622e', totalLessons: 46 },
};

const recentActivities = [
  { text: 'Ai rezolvat subiectul BAC 2025 la Limba română', time: 'Acum 2 ore', type: 'complete' },
  { text: 'Simulare BAC Matematica - Nota: 9.5', time: 'Ieri', type: 'test' },
  { text: 'Ai început capitolul "Mecanica Newtoniană" - Fizica', time: 'Acum 2 zile', type: 'start' },
  { text: 'Subiect complet rezolvat: Analiză Matematică', time: 'Acum 3 zile', type: 'award' },
];

const upcomingTasks = [
  { text: 'Simulare BAC Limba română - cronometrată', date: '10 Apr 2026', urgent: true },
  { text: 'Test capitol Informatica - Algoritmi', date: '15 Apr 2026', urgent: false },
  { text: 'Simulare BAC Chimie - subiect complet', date: '18 Apr 2026', urgent: false },
];

function Dashboard({ user, setUser }) {
  const [simulatedProgress] = useState(() => {
    // Generate some demo progress for display
    const progress = {};
    if (user && user.courses) {
      user.courses.forEach((courseId, index) => {
        const base = 15 + index * 20 + Math.floor(Math.random() * 15);
        progress[courseId] = {
          percentage: Math.min(base, 95),
          lessonsCompleted: Math.floor((base / 100) * (courseData[courseId]?.totalLessons || 40)),
          grade: (7 + Math.random() * 3).toFixed(1),
          lastAccessed: 'Astăzi',
        };
      });
    }
    return progress;
  });

  if (!user) {
    return (
      <div className="dashboard-page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1>Panou de Control</h1>
            <p>Trebuie să fii autentificat pentru a accesa panoul de control.</p>
            <Link to="/login" className="btn btn-primary">Autentifică-te</Link>
          </div>
        </section>
      </div>
    );
  }

  const totalProgress = user.courses
    ? Math.round(user.courses.reduce((sum, id) => sum + (simulatedProgress[id]?.percentage || 0), 0) / user.courses.length)
    : 0;

  const totalLessons = user.courses
    ? user.courses.reduce((sum, id) => sum + (simulatedProgress[id]?.lessonsCompleted || 0), 0)
    : 0;

  const avgGrade = user.courses
    ? (user.courses.reduce((sum, id) => sum + parseFloat(simulatedProgress[id]?.grade || 0), 0) / user.courses.length).toFixed(1)
    : 0;

  return (
    <div className="dashboard-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Bine ai venit, {user.name}!</h1>
          <p>Urmărește-ți pregătirea pentru BAC. Ai {user.courses?.length || 0} materii de examen active.</p>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-container">
          {/* Stats Overview */}
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUpIcon size={24} color="#e8723a" />
              </div>
              <div className="stat-info">
                <span className="stat-value">{totalProgress}%</span>
                <span className="stat-label">Progres General</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <BookIcon size={24} color="#e8723a" />
              </div>
              <div className="stat-info">
                <span className="stat-value">{totalLessons}</span>
                <span className="stat-label">Lecții Completate</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <AwardIcon size={24} color="#e8723a" />
              </div>
              <div className="stat-info">
                <span className="stat-value">{avgGrade}</span>
                <span className="stat-label">Nota Medie</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <CalendarIcon size={24} color="#e8723a" />
              </div>
              <div className="stat-info">
                <span className="stat-value">{user.courses?.length || 0}</span>
                <span className="stat-label">Cursuri Active</span>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="dashboard-grid">
            {/* Active Courses */}
            <div className="dashboard-main">
              <div className="dashboard-card">
                <div className="dashboard-card-header">
                  <h3>Cursurile Tale Active</h3>
                  <span className="badge">{user.courses?.length || 0} cursuri</span>
                </div>
                <div className="courses-list">
                  {user.courses?.map((courseId) => {
                    const course = courseData[courseId];
                    const progress = simulatedProgress[courseId];
                    if (!course) return null;
                    const IconComp = course.icon;
                    return (
                      <div key={courseId} className="course-progress-item">
                        <div className="course-progress-header">
                          <div className="course-progress-icon" style={{ background: course.color + '15' }}>
                            <IconComp size={22} color={course.color} />
                          </div>
                          <div className="course-progress-info">
                            <h4>{course.name}</h4>
                            <span>{progress?.lessonsCompleted || 0} din {course.totalLessons} lecții</span>
                          </div>
                          <div className="course-progress-grade">
                            <span className="grade-value">{progress?.grade || '-'}</span>
                            <span className="grade-label">nota</span>
                          </div>
                        </div>
                        <div className="progress-bar-wrapper">
                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{
                                width: `${progress?.percentage || 0}%`,
                                background: `linear-gradient(90deg, ${course.color}, ${course.color}dd)`
                              }}
                            />
                          </div>
                          <span className="progress-percentage">{progress?.percentage || 0}%</span>
                        </div>
                        <button className="btn btn-sm btn-outline course-continue-btn">
                          Continuă <ArrowRightIcon size={14} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Weekly Schedule */}
              <div className="dashboard-card">
                <div className="dashboard-card-header">
                  <h3>Orar Săptămânal</h3>
                </div>
                <div className="schedule-grid">
                  {['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri'].map((day, i) => (
                    <div key={day} className="schedule-day">
                      <span className="schedule-day-name">{day}</span>
                      <div className="schedule-slots">
                        {user.courses?.slice(0, 2).map((courseId, j) => {
                          const course = courseData[courseId];
                          if (!course || (i + j) % 3 === 0) return null;
                          return (
                            <div key={courseId} className="schedule-slot" style={{ borderLeft: `3px solid ${course.color}` }}>
                              <span className="schedule-slot-time">{8 + j * 2}:00 - {9 + j * 2}:00</span>
                              <span className="schedule-slot-name">{course.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="dashboard-sidebar">
              {/* Recent Activity */}
              <div className="dashboard-card">
                <div className="dashboard-card-header">
                  <h3>Activitate Recentă</h3>
                </div>
                <div className="activity-list">
                  {recentActivities.map((activity, i) => (
                    <div key={i} className="activity-item">
                      <div className={`activity-dot ${activity.type}`} />
                      <div className="activity-info">
                        <p>{activity.text}</p>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming */}
              <div className="dashboard-card">
                <div className="dashboard-card-header">
                  <h3>Termene Apropiate</h3>
                </div>
                <div className="tasks-list">
                  {upcomingTasks.map((task, i) => (
                    <div key={i} className={`task-item ${task.urgent ? 'urgent' : ''}`}>
                      <div className="task-check">
                        <ClockIcon size={14} color={task.urgent ? '#ef4444' : '#999'} />
                      </div>
                      <div className="task-info">
                        <p>{task.text}</p>
                        <span>{task.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="dashboard-card streak-card">
                <div className="streak-content">
                  <AwardIcon size={32} color="#e8723a" />
                  <h4>Serie de 7 zile!</h4>
                  <p>Continuă să înveți în fiecare zi pentru a-ți menține seria.</p>
                  <div className="streak-days">
                    {['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D'].map((d, i) => (
                      <div key={d} className={`streak-day ${i < 5 ? 'active' : ''}`}>
                        <CheckIcon size={12} color={i < 5 ? '#fff' : '#ccc'} />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
