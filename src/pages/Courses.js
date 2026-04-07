import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookIcon, GlobeIcon, CalculatorIcon, FlaskIcon, AtomIcon,
  LeafIcon, CodeIcon, LandmarkIcon, ClockIcon, ArrowRightIcon
} from '../icons/Icons';

const allCourses = [
  {
    id: 'romana',
    name: 'Limba română',
    icon: BookIcon,
    description: 'Pregătire completă BAC: analiză literară, comentariu, eseu argumentativ și gramatică conform subiectelor de examen.',
    lessons: 48,
    hours: 96,
    level: 'Clasele 10-12'
  },
  {
    id: 'engleza',
    name: 'Limba engleză',
    icon: GlobeIcon,
    description: 'Competențe lingvistice pentru BAC: reading, writing, listening și use of English la nivel B1-B2.',
    lessons: 52,
    hours: 104,
    level: 'Clasele 10-12'
  },
  {
    id: 'matematica',
    name: 'Matematica',
    icon: CalculatorIcon,
    description: 'Algebră, analiză matematică, geometrie și probabilități — toate temele din programa BAC cu subiecte rezolvate.',
    lessons: 64,
    hours: 128,
    level: 'Clasele 10-12'
  },
  {
    id: 'chimia',
    name: 'Chimia',
    icon: FlaskIcon,
    description: 'Chimie anorganică și organică pentru BAC: reacții, stoechiometrie, compuși organici și probleme de calcul.',
    lessons: 40,
    hours: 80,
    level: 'Clasele 10-12'
  },
  {
    id: 'fizica',
    name: 'Fizica',
    icon: AtomIcon,
    description: 'Mecanică, termodinamică, electricitate și optică — probleme tip BAC cu rezolvări detaliate pas cu pas.',
    lessons: 44,
    hours: 88,
    level: 'Clasele 10-12'
  },
  {
    id: 'biologie',
    name: 'Biologie',
    icon: LeafIcon,
    description: 'Anatomie, genetică, ecologie și biologie celulară pentru BAC — scheme, teste și simulări de examen.',
    lessons: 42,
    hours: 84,
    level: 'Clasele 10-12'
  },
  {
    id: 'informatica',
    name: 'Informatica',
    icon: CodeIcon,
    description: 'Algoritmi, programare, baze de date și rețele — pregătire BAC cu probleme practice și subiecte rezolvate.',
    lessons: 56,
    hours: 112,
    level: 'Clasele 10-12'
  },
  {
    id: 'istoria',
    name: 'Istoria românilor și universală',
    icon: LandmarkIcon,
    description: 'Evenimente-cheie, cronologie, eseuri istorice și analiză de documente conform programei BAC.',
    lessons: 46,
    hours: 92,
    level: 'Clasele 10-12'
  },
];

function Courses() {
  return (
    <div className="courses-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">PREGĂTIRE BACALAUREAT</span>
          <h1>Materiile de Examen</h1>
          <p>8 materii conform programei de bacalaureat a Republicii Moldova. Subiecte model, simulări de examen și rezolvări detaliate — totul pentru nota maximă la BAC.</p>
        </div>
      </section>

      <section className="courses-grid-section">
        <div className="section-container">
          <div className="courses-grid">
            {allCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-card-icon">
                  <course.icon size={32} color="#e8723a" />
                </div>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <div className="course-card-meta">
                  <span><BookIcon size={14} /> {course.lessons} lecții</span>
                  <span><ClockIcon size={14} /> {course.hours} ore</span>
                </div>
                <div className="course-card-level">{course.level}</div>
                <Link to="/register" className="course-card-btn">
                  Înscrie-te <ArrowRightIcon size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
