import React, { useState } from 'react';

const WEB3FORMS_KEY = '920f18db-f76d-4ac7-9f1e-46cb70d4372f';

const ContactForm = ({ content }) => {
  const t =
    content ||
    {
      heading: 'Parlez-nous de votre projet',
      desc: 'Dites-nous ce que vous souhaitez optimiser. Nous vous repondrons avec une proposition adaptee a votre activite et a vos objectifs.',
      firstName: 'Prenom',
      lastName: 'Nom',
      phone: 'Telephone',
      email: 'Email',
      projectType: 'Type de projet',
      projectTypePlaceholder: 'Selectionnez',
      projectTypeOptions: ['Site web', 'Application mobile', 'Solution RFID / IoT', 'Autre'],
      budget: 'Budget approximatif',
      budgetPlaceholder: 'Votre budget',
      buildQuestion: "Qu'est-ce que vous voulez construire?",
      buildPlaceholder: 'Decrivez votre besoin',
      message: 'Message',
      messagePlaceholder: 'Expliquez-nous votre besoin',
      submit: 'Envoyer le message',
    };

  const messageLabel = t.buildQuestion || t.message;
  const messagePlaceholder = t.buildPlaceholder || t.messagePlaceholder;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nouveau message de ${formData.firstName} ${formData.lastName} — RFIDIA`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', phone: '', email: '', projectType: '', budget: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      className="contact-us-form pt-60 pb-120"
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-5 col-md-8">
            <div className="section-heading">
              <h2>{t.heading}</h2>
              <p>{t.desc}</p>
            </div>

            {status === 'success' ? (
              <div style={{
                background: 'linear-gradient(135deg, #e8fdf5, #d1fae5)',
                border: '1px solid #6ee7b7',
                borderRadius: '16px',
                padding: '32px 24px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✅</div>
                <h4 style={{ color: '#065f46', marginBottom: '8px' }}>Message envoyé !</h4>
                <p style={{ color: '#047857', margin: 0 }}>
                  Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{
                    marginTop: '20px',
                    background: '#059669',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 24px',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="register-form">
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="mb-1">
                      {t.firstName} <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder={t.firstName}
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="mb-1">{t.lastName}</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder={t.lastName}
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="phone" className="mb-1">
                      {t.phone} <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        required
                        placeholder={t.phone}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email" className="mb-1">
                      {t.email} <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        placeholder={t.email}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="projectType" className="mb-1">
                      {t.projectType} <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <select
                        className="form-control"
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>{t.projectTypePlaceholder}</option>
                        {(t.projectTypeOptions || []).map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="budget" className="mb-1">
                      {t.budget} <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="budget"
                        name="budget"
                        required
                        placeholder={t.budgetPlaceholder || t.budget}
                        value={formData.budget}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="yourMessage" className="mb-1">
                      {messageLabel} <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <textarea
                        className="form-control"
                        id="yourMessage"
                        name="message"
                        required
                        placeholder={messagePlaceholder}
                        style={{ height: '120px' }}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {status === 'error' && (
                  <div style={{
                    background: '#fef2f2',
                    border: '1px solid #fca5a5',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    color: '#b91c1c',
                    marginBottom: '16px',
                    fontSize: '0.9rem',
                  }}>
                    Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary mt-4"
                  disabled={status === 'loading'}
                  style={{ opacity: status === 'loading' ? 0.7 : 1 }}
                >
                  {status === 'loading' ? 'Envoi en cours...' : t.submit}
                </button>
              </form>
            )}
          </div>

          <div className="col-lg-7 col-md-10 mt-5 mt-lg-0">
            <div
              className="rounded-custom custom-shadow overflow-hidden position-relative"
              style={{
                minHeight: '640px',
                border: '1px solid #dbe7fb',
                borderRadius: '28px',
                boxShadow: '0 28px 80px rgba(15, 23, 42, 0.12)',
                background: '#fff',
              }}
            >
              <iframe
                title="RFIDIA - Africa Mall Ariana"
                src="https://www.google.com/maps?q=Africa%20Mall%20Ariana%20Tunisie&z=16&output=embed"
                width="100%"
                height="640"
                style={{ border: 0, display: 'block', width: '100%', minHeight: '640px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
