import React from 'react';
import {
  BsFillChatSquareTextFill,
  BsFillEnvelopeFill,
  BsTelephoneInbound,
} from 'react-icons/bs';

const ContactCard = ({ content }) => {
  const t =
    content ||
    {
      chatTitle: 'Echangez avec nous',
      chatDescPrefix: 'Notre equipe est disponible pour vous accompagner du',
      chatDescStrong: 'lundi au vendredi',
      writeToUs: 'Nous ecrire',
      emailTitle: 'Envoyez un email',
      emailDesc: 'Ecrivez-nous pour discuter de votre projet.',
      callTitle: 'Appelez-nous',
      callDesc: "Besoin d'un echange direct ? Appelez-nous.",
    };

  const cards = [
    { key: 'chat', icon: <BsFillChatSquareTextFill />, tag: '01', accent: '#4ECDC4', title: t.chatTitle,
      desc: (<>{t.chatDescPrefix} <strong>{t.chatDescStrong}</strong>.</>),
      cta: t.writeToUs, href: 'mailto:contact@rfidia.com', type: 'ghost' },
    { key: 'email', icon: <BsFillEnvelopeFill />, tag: '02', accent: '#2563EB', title: t.emailTitle,
      desc: t.emailDesc, cta: 'contact@rfidia.com', href: 'mailto:contact@rfidia.com', type: 'primary' },
    { key: 'call', icon: <BsTelephoneInbound />, tag: '03', accent: '#7C3AED', title: t.callTitle,
      desc: t.callDesc, cta: '+216 94 103 351', href: 'tel:+21694103351', type: 'ghost' },
  ];

  return (
    <section className="cu-cards-section">
      <div className="cu-cards-section__bg" aria-hidden>
        <span className="cu-cards-section__orb cu-cards-section__orb--a" />
        <span className="cu-cards-section__orb cu-cards-section__orb--b" />
      </div>
      <div className="container position-relative">
        <div className="cu-cards-grid">
          {cards.map((c) => (
            <article key={c.key} className="cu-card" style={{ '--accent': c.accent }}>
              <span className="cu-card__tag">{c.tag}</span>
              <span className="cu-card__halo" aria-hidden />
              <span className="cu-card__icon" aria-hidden>{c.icon}</span>
              <h3 className="cu-card__title">{c.title}</h3>
              <p className="cu-card__desc">{c.desc}</p>
              <a href={c.href} className={`cu-card__cta cu-card__cta--${c.type}`}>
                <span>{c.cta}</span>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
