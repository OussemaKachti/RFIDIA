import React from 'react';

const ContactForm = ({ content }) => {
  const t =
    content ||
    {
      heading: 'Parlez-nous de votre projet',
      desc:
        'Dites-nous ce que vous souhaitez optimiser. Nous vous repondrons avec une proposition adaptee a votre activite et a vos objectifs.',
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
              <p>
                {t.desc}
              </p>
            </div>
            <form action="#" className="register-form">
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
                      required
                      placeholder={t.firstName}
                      aria-label={t.firstName}
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="lastName" className="mb-1">
                    {t.lastName}
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder={t.lastName}
                      aria-label={t.lastName}
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
                      required
                      placeholder={t.phone}
                      aria-label={t.phone}
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
                      required
                      placeholder={t.email}
                      aria-label={t.email}
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
                      required
                      aria-label={t.projectType}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t.projectTypePlaceholder}
                      </option>
                      {(t.projectTypeOptions || []).map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
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
                      required
                      placeholder={t.budgetPlaceholder || t.budget}
                      aria-label={t.budget}
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
                      required
                      placeholder={messagePlaceholder}
                      style={{ height: '120px' }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                {t.submit}
              </button>
            </form>
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
