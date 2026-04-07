import React, { useState } from 'react';
import { ChevronDownIcon, HelpCircleIcon } from '../icons/Icons';

const faqData = [
  {
    category: 'General',
    questions: [
      {
        q: 'Ce este Learnify?',
        a: 'Learnify este o platformă digitală de pregătire pentru examenul de bacalaureat, destinată elevilor din clasele 10-12 din Republica Moldova. Oferim lecții structurate, subiecte model, simulări de examen și urmărirea progresului în timp real.'
      },
      {
        q: 'Cine poate folosi Learnify?',
        a: 'Platforma este destinată elevilor din clasele 10-12 care se pregătesc pentru bacalaureat. De asemenea, profesorii și părinții pot accesa platforma pentru a urmări progresul elevilor.'
      },
      {
        q: 'Este Learnify gratuit?',
        a: 'Da, în prezent Learnify oferă acces gratuit la toate funcționalitățile de bază. Planificăm introducerea unor funcții premium în viitor, dar materialele de pregătire BAC de bază vor rămâne gratuite.'
      },
      {
        q: 'Cum mă ajută Learnify să iau BAC-ul?',
        a: 'Platforma oferă subiecte tip BAC din anii anteriori, simulări cronometrate, rezolvări detaliate pas cu pas și analize ale greșelilor tale frecvente. Progresul tău este monitorizat pentru fiecare materie, iar sistemul îți recomandă exact ce capitole trebuie să repeți.'
      },
    ]
  },
  {
    category: 'Materii de Examen',
    questions: [
      {
        q: 'De ce pot alege doar 4 materii?',
        a: 'Limita de 4 materii este concepută pentru a te ajuta să te concentrezi pe disciplinele de examen cele mai importante. La BAC susții un număr limitat de probe, iar focalizarea pe cele alese duce la rezultate semnificativ mai bune.'
      },
      {
        q: 'Pot schimba materiile după înregistrare?',
        a: 'Nu, materiile selectate la înregistrare sunt permanente și nu pot fi modificate ulterior. Aceasta este pentru a încuraja angajamentul serios față de pregătirea ta. Alege cu atenție!'
      },
      {
        q: 'Ce materii sunt disponibile?',
        a: 'Oferim 8 materii din programa BAC: Limba română, Limba engleză, Matematica, Chimia, Fizica, Biologie, Informatica și Istoria românilor și universală. Toate sunt aliniate la programa de examen oficială.'
      },
      {
        q: 'Cum sunt structurate lecțiile?',
        a: 'Fiecare materie conține capitole conform programei BAC, cu teorie sintetizată, exerciții de fixare, subiecte model rezolvate și simulări de examen cronometrate. Progresul tău este salvat automat.'
      },
    ]
  },
  {
    category: 'Cont și Securitate',
    questions: [
      {
        q: 'Cum îmi creez un cont?',
        a: 'Apasă butonul "Înregistrare" din meniu, completează datele tale personale (clasă 10, 11 sau 12), selectează exact 4 materii de examen și finalizează procesul. Vei avea acces imediat la platformă.'
      },
      {
        q: 'Sunt datele mele în siguranță?',
        a: 'Absolut. Folosim criptare TLS 1.3 pentru transmiterea datelor și AES-256 pentru stocarea lor. Respectăm reglementările GDPR și nu partajăm datele tale cu terți.'
      },
      {
        q: 'Am uitat parola. Ce fac?',
        a: 'Contactează echipa de suport prin formularul din pagina de Suport sau trimite un email la suport@learnify.md. Te vom ajuta să-ți resetezi parola.'
      },
    ]
  },
  {
    category: 'Tehnic',
    questions: [
      {
        q: 'Pe ce dispozitive funcționează Learnify?',
        a: 'Learnify funcționează pe orice dispozitiv cu browser web modern: computer, tabletă sau telefon mobil. Recomandăm Chrome, Firefox sau Safari pentru cea mai bună experiență.'
      },
      {
        q: 'Am nevoie de internet permanent?',
        a: 'Da, Learnify necesită o conexiune la internet activă. Planificăm introducerea unui mod offline în viitor.'
      },
      {
        q: 'Pot descărca subiecte pentru pregătire offline?',
        a: 'Momentan nu, dar lucrăm la o funcție de export PDF pentru subiectele model și rezolvări, pe care le vei putea printa sau salva pe dispozitiv.'
      },
    ]
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (catIndex, qIndex) => {
    const key = `${catIndex}-${qIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="faq-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">SUPORT</span>
          <h1>Întrebări Frecvente</h1>
          <p>Găsește răspunsuri la cele mai comune întrebări despre platforma Learnify.</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-container">
          <div className="faq-layout">
            {faqData.map((category, catIndex) => (
              <div key={catIndex} className="faq-category">
                <div className="faq-category-header">
                  <HelpCircleIcon size={22} color="#e8723a" />
                  <h3>{category.category}</h3>
                </div>
                <div className="faq-list">
                  {category.questions.map((item, qIndex) => {
                    const key = `${catIndex}-${qIndex}`;
                    const isOpen = openIndex === key;
                    return (
                      <div key={qIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                        <button className="faq-question" onClick={() => toggleQuestion(catIndex, qIndex)}>
                          <span>{item.q}</span>
                          <ChevronDownIcon size={20} />
                        </button>
                        {isOpen && (
                          <div className="faq-answer">
                            <p>{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
