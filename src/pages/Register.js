import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookIcon, GlobeIcon, CalculatorIcon, FlaskIcon, AtomIcon,
  LeafIcon, CodeIcon, LandmarkIcon, CheckIcon, UserIcon, MailIcon, LockIcon
} from '../icons/Icons';

const availableCourses = [
  { id: 'romana', name: 'Limba română', icon: BookIcon },
  { id: 'engleza', name: 'Limba engleză', icon: GlobeIcon },
  { id: 'matematica', name: 'Matematica', icon: CalculatorIcon },
  { id: 'chimia', name: 'Chimia', icon: FlaskIcon },
  { id: 'fizica', name: 'Fizica', icon: AtomIcon },
  { id: 'biologie', name: 'Biologie', icon: LeafIcon },
  { id: 'informatica', name: 'Informatica', icon: CodeIcon },
  { id: 'istoria', name: 'Istoria românilor și universală', icon: LandmarkIcon },
];

function Register({ onRegister }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    school: '',
    grade: '',
  });
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleCourse = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    } else if (selectedCourses.length < 4) {
      setSelectedCourses([...selectedCourses, courseId]);
    }
  };

  const handleStep1 = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Completează toate câmpurile obligatorii.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Parolele nu se potrivesc.');
      return;
    }
    if (formData.password.length < 6) {
      setError('Parola trebuie să aibă cel puțin 6 caractere.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCourses.length !== 4) {
      setError('Trebuie să selectezi exact 4 cursuri.');
      return;
    }
    setError('');
    const userData = {
      ...formData,
      courses: selectedCourses,
      registeredAt: new Date().toISOString(),
      progress: {},
    };
    selectedCourses.forEach(courseId => {
      userData.progress[courseId] = {
        percentage: 0,
        lessonsCompleted: 0,
        lastAccessed: null,
        grade: null,
      };
    });
    onRegister(userData);
    navigate('/dashboard');
  };

  return (
    <div className="register-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Creează un Cont</h1>
          <p>Înregistrează-te pentru a accesa platforma de pregătire BAC. Alege 4 materii de examen pe care vrei să le aprofundezi.</p>
        </div>
      </section>

      <section className="register-section">
        <div className="section-container">
          <div className="register-layout">
            {/* Left side info */}
            <div className="register-info">
              <h3>Bine ai venit la Learnify</h3>
              <p>Înregistrează-te pentru a primi acces la platforma de pregătire BAC. Alege-ți materiile de examen și începe pregătirea astăzi.</p>
              <div className="register-steps">
                <div className={`register-step ${step >= 1 ? 'active' : ''}`}>
                  <div className="step-number">{step > 1 ? <CheckIcon size={16} color="#fff" /> : '1'}</div>
                  <div>
                    <h4>Date Personale</h4>
                    <p>Completează informațiile tale de bază</p>
                  </div>
                </div>
                <div className={`register-step ${step >= 2 ? 'active' : ''}`}>
                  <div className="step-number">2</div>
                  <div>
                    <h4>Selectare Materii BAC</h4>
                    <p>Alege exact 4 materii de examen din cele disponibile</p>
                  </div>
                </div>
              </div>

              <div className="register-note">
                <LockIcon size={18} color="#e8723a" />
                <div>
                  <strong>Important:</strong> Materiile selectate la înregistrare nu pot fi modificate ulterior din cabinet. Alege cu atenție!
                </div>
              </div>

              <div className="register-quote">
                <p>"Datorită Learnify, elevii mei au obținut cu 15% mai mult la simularea BAC față de anul trecut."</p>
                <div className="register-quote-author">
                  <strong>PROFESOR DE MATEMATICĂ</strong>
                  <span>Liceul Teoretic, Chișinău</span>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="register-form-card">
              <h3>Înregistrare la Learnify</h3>

              {step === 1 ? (
                <form onSubmit={handleStep1}>
                  <div className="form-group">
                    <label>Nume complet</label>
                    <div className="input-wrapper">
                      <UserIcon size={16} color="#999" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Numele și prenumele"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <div className="input-wrapper">
                      <MailIcon size={16} color="#999" />
                      <input
                        type="email"
                        name="email"
                        placeholder="emailul@tău.md"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Școala (opțional)</label>
                      <input
                        type="text"
                        name="school"
                        placeholder="Numele școlii"
                        value={formData.school}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Clasa</label>
                      <select name="grade" value={formData.grade} onChange={handleChange}>
                        <option value="">Selectează</option>
                        {[10,11,12].map(g => (
                          <option key={g} value={g}>Clasa {g}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Parola</label>
                    <div className="input-wrapper">
                      <LockIcon size={16} color="#999" />
                      <input
                        type="password"
                        name="password"
                        placeholder="Minim 6 caractere"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Confirmă parola</label>
                    <div className="input-wrapper">
                      <LockIcon size={16} color="#999" />
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Repetă parola"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {error && <div className="form-error">{error}</div>}

                  <button type="submit" className="btn btn-primary btn-full">
                    Continuă - Selectare Materii
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className="course-select-info">
                    Selectează exact <strong>4 materii de examen</strong> din cele 8 disponibile.
                    Ai selectat <strong>{selectedCourses.length}/4</strong>.
                  </p>

                  <div className="course-select-grid">
                    {availableCourses.map((course) => {
                      const isSelected = selectedCourses.includes(course.id);
                      const isDisabled = !isSelected && selectedCourses.length >= 4;
                      return (
                        <div
                          key={course.id}
                          className={`course-select-item ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                          onClick={() => !isDisabled && toggleCourse(course.id)}
                        >
                          <div className="course-select-check">
                            {isSelected && <CheckIcon size={14} color="#fff" />}
                          </div>
                          <course.icon size={22} color={isSelected ? '#e8723a' : '#666'} />
                          <span>{course.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  {error && <div className="form-error">{error}</div>}

                  <div className="form-buttons">
                    <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>
                      Înapoi
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={selectedCourses.length !== 4}
                    >
                      Finalizează Înregistrarea
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
