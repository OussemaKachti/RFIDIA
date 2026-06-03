import React, { useState } from 'react';

const ContactForm = ({ content }) => {
  const t = content || {
    heading: 'Parlez-nous de votre projet',
    desc: 'Dites-nous ce que vous souhaitez optimiser.',
    firstName: 'Prenom', lastName: 'Nom', phone: 'Telephone', email: 'Email',
    projectType: 'Type de projet', projectTypePlaceholder: 'Selectionnez',
    projectTypeOptions: ['Site web', 'Application mobile', 'Solution RFID / IoT', 'Autre'],
    budget: 'Budget approximatif', budgetPlaceholder: 'Votre budget',
    buildQuestion: "Qu'est-ce que vous voulez construire?", buildPlaceholder: 'Decrivez votre besoin',
    message: 'Message', messagePlaceholder: 'Expliquez-nous votre besoin', submit: 'Envoyer le message',
  };
  const messageLabel = t.buildQuestion || t.message;
  const messagePlaceholder = t.buildPlaceholder || t.messagePlaceholder;
  const [focused, setFocused] = useState('');

  return (
    <section className="cu-form-section">
      <div className="cu-form-section__bg" aria-hidden>
        <span className="cu-form-section__grid" />
      </div>
      <div className="container position-relative">
        <div className="cu-form-layout">
          <div className="cu-form-col">
            <span className="cu-form-eyebrow">
              <span className="cu-form-eyebrow__dot" />
              RFIDIA
            </span>
            <h2 className="cu-form-title">{t.heading}</h2>
            <p className="cu-form-lead">{t.desc}</p>

            <form action="#" className="cu-form" onSubmit={(e) => e.preventDefault()}>
              <div className="cu-form__row">
                <div className={`cu-field${focused === 'firstName' ? ' is-focus' : ''}`}>
                  <label htmlFor="firstName" className="cu-field__label">
                    {t.firstName}<span className="cu-field__star">*</span>
                  </label>
                  <input id="firstName" type="text" required placeholder={t.firstName}
                    className="cu-field__input"
                    onFocus={() => setFocused('firstName')} onBlur={() => setFocused('')} />
                </div>
                <div className={`cu-field${focused === 'lastName' ? ' is-focus' : ''}`}>
                  <label htmlFor="lastName" className="cu-field__label">{t.lastName}</label>
                  <input id="lastName" type="text" placeholder={t.lastName}
                    className="cu-field__input"
                    onFocus={() => setFocused('lastName')} onBlur={() => setFocused('')} />
                </div>
              </div>
              <div className="cu-form__row">
                <div className={`cu-field${focused === 'phone' ? ' is-focus' : ''}`}>
                  <label htmlFor="phone" className="cu-field__label">
                    {t.phone}<span className="cu-field__star">*</span>
                  </label>
                  <input id="phone" type="text" required placeholder={t.phone}
                    className="cu-field__input"
                    onFocus={() => setFocused('phone')} onBlur={() => setFocused('')} />
                </div>
                <div className={`cu-field${focused === 'email' ? ' is-focus' : ''}`}>
                  <label htmlFor="email" className="cu-field__label">
                    {t.email}<span className="cu-field__star">*</span>
                  </label>
                  <input id="email" type="email" required placeholder={t.email}
                    className="cu-field__input"
                    onFocus={() => setFocused('email')} onBlur={() => setFocused('')} />
                </div>
              </div>
              <div className="cu-form__row">
                <div className={`cu-field${focused === 'projectType' ? ' is-focus' : ''}`}>
                  <label htmlFor="projectType" className="cu-field__label">
                    {t.projectType}<span className="cu-field__star">*</span>
                  </label>
                  <select id="projectType" required defaultValue=""
                    className="cu-field__input cu-field__input--select"
                    onFocus={() => setFocused('projectType')} onBlur={() => setFocused('')}>
                    <option value="" disabled>{t.projectTypePlaceholder}</option>
                    {(t.projectTypeOptions || []).map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className={`cu-field${focused === 'budget' ? ' is-focus' : ''}`}>
                  <label htmlFor="budget" className="cu-field__label">
                    {t.budget}<span className="cu-field__star">*</span>
                  </label>
                  <input id="budget" type="text" required placeholder={t.budgetPlaceholder || t.budget}
                    className="cu-field__input"
                    onFocus={() => setFocused('budget')} onBlur={() => setFocused('')} />
                </div>
              </div>
              <div className={`cu-field${focused === 'yourMessage' ? ' is-focus' : ''}`}>
                <label htmlFor="yourMessage" className="cu-field__label">
                  {messageLabel}<span className="cu-field__star">*</span>
                </label>
                <textarea id="yourMessage" required placeholder={messagePlaceholder}
                  className="cu-field__input cu-field__input--textarea"
                  onFocus={() => setFocused('yourMessage')} onBlur={() => setFocused('')} />
              </div>
              <button type="submit" className="cu-form__submit">
                <span>{t.submit}</span>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>

          <div className="cu-map-col">
            <div className="cu-map">
              <div className="cu-map__head">
                <div>
                  <span className="cu-map__eyebrow">Office</span>
                  <strong>Africa Mall, Ariana</strong>
                  <span>Avenue Mustapha Hjeij, Tunisia</span>
                </div>
                <a href="https://maps.google.com/?q=Africa+Mall+Avenue+Mustapha+Hjeij+Ariana+1002+Tunisie"
                  target="_blank" rel="noreferrer" className="cu-map__open" aria-label="Open in Google Maps">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className="cu-map__frame">
                <iframe title="RFIDIA - Africa Mall Ariana"
                  src="https://www.google.com/maps?q=Africa%20Mall%20Ariana%20Tunisie&z=16&output=embed"
                  width="100%" height="100%" style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
