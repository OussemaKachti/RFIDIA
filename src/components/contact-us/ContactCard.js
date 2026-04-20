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
      emailDesc: 'Ecrivez-nous pour discuter de votre projet et recevoir une reponse rapide.',
      callTitle: 'Appelez-nous',
      callDesc: "Besoin d'un echange direct ? Appelez-nous pour parler de votre besoin.",
    };

  return (
    <section className="contact-promo ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillChatSquareTextFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>{t.chatTitle}</h5>
                <p>
                  {t.chatDescPrefix}{' '}
                  <strong>{t.chatDescStrong}</strong>.
                </p>
              </div>
              <a
                href="mailto:contact@rfidia.tn"
                className="btn btn-link mt-auto"
              >
                {t.writeToUs}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillEnvelopeFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>{t.emailTitle}</h5>
                <p>
                  {t.emailDesc}
                </p>
              </div>
              <a
                href="mailto:contact@rfidia.tn"
                className="btn btn-primary mt-auto"
              >
                contact@rfidia.tn
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsTelephoneInbound />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>{t.callTitle}</h5>
                <p>
                  {t.callDesc}
                </p>
              </div>
              <a href="tel:+21600000000" className="btn btn-link mt-auto">
                +216 94 103 351
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
