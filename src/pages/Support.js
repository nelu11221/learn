import React, { useState } from 'react';
import {
  SendIcon, MailIcon, HeadphonesIcon, ClockIcon, ShieldIcon, UserIcon
} from '../icons/Icons';

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="support-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">SUPORT</span>
          <h1>Contactează-ne</h1>
          <p>Ai o întrebare despre pregătirea BAC sau o problemă cu platforma? Echipa noastră îți stă la dispoziție. Răspundem în maxim 2 ore.</p>
        </div>
      </section>

      <section className="support-section">
        <div className="section-container">
          <div className="support-layout">
            {/* Left side */}
            <div className="support-info">
              <h3>Vorbește cu Learnify</h3>
              <p>Scrie-ne un mesaj și te vom contacta cât mai rapid posibil. Suntem aici să te ajutăm cu orice problemă legată de platformă.</p>

              <div className="support-features">
                <div className="support-feature">
                  <ClockIcon size={20} color="#e8723a" />
                  <span>Răspuns în maxim 2 ore</span>
                </div>
                <div className="support-feature">
                  <HeadphonesIcon size={20} color="#e8723a" />
                  <span>Suport în limba română</span>
                </div>
                <div className="support-feature">
                  <ShieldIcon size={20} color="#e8723a" />
                  <span>Datele tale sunt confidențiale</span>
                </div>
              </div>

              <div className="support-quote">
                <p>"Echipa de suport ne-a rezolvat problema în mai puțin de o oră. Elevii noștri au acces neîntrerupt la pregătirea BAC."</p>
                <div className="support-quote-author">
                  <strong>DIRECTOR ADJUNCT</strong>
                  <span>Liceul Teoretic, Bălți</span>
                </div>
              </div>

              <div className="support-contact-methods">
                <div className="contact-method">
                  <MailIcon size={18} color="#e8723a" />
                  <div>
                    <strong>Email</strong>
                    <span>suport@learnify.md</span>
                  </div>
                </div>
                <div className="contact-method">
                  <HeadphonesIcon size={18} color="#e8723a" />
                  <div>
                    <strong>Telefon</strong>
                    <span>+373 22 123 456</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="support-form-card">
              {submitted ? (
                <div className="support-success">
                  <div className="success-icon">
                    <SendIcon size={32} color="#e8723a" />
                  </div>
                  <h3>Mesaj trimis cu succes!</h3>
                  <p>Îți mulțumim pentru mesaj. Echipa noastră va reveni cu un răspuns în cel mai scurt timp posibil.</p>
                  <button className="btn btn-primary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '', category: '' }); }}>
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <>
                  <h3>Trimite un mesaj</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Nume</label>
                      <div className="input-wrapper">
                        <UserIcon size={16} color="#999" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Numele tău"
                          value={formData.name}
                          onChange={handleChange}
                          required
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
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Categorie</label>
                      <select name="category" value={formData.category} onChange={handleChange} required>
                        <option value="">Selectează categoria</option>
                        <option value="cont">Probleme cu contul</option>
                        <option value="cursuri">Întrebări despre cursuri</option>
                        <option value="tehnic">Probleme tehnice</option>
                        <option value="sugestii">Sugestii</option>
                        <option value="altele">Altele</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Subiect</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subiectul mesajului"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Mesaj</label>
                      <textarea
                        name="message"
                        placeholder="Descrie problema sau întrebarea ta..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-full">
                      <SendIcon size={16} />
                      Trimite Mesajul
                    </button>

                    <div className="form-footer-info">
                      <div className="form-footer-item">
                        <ClockIcon size={14} color="#999" />
                        <span>Răspundem în 2 ore</span>
                      </div>
                      <div className="form-footer-item">
                        <ShieldIcon size={14} color="#999" />
                        <span>Datele nu sunt stocate</span>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
