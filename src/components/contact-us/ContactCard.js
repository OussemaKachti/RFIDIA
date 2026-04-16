import React from 'react';
import {
  BsFillChatSquareTextFill,
  BsFillEnvelopeFill,
  BsTelephoneInbound,
} from 'react-icons/bs';

const ContactCard = () => {
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
                <h5>Échangez avec nous</h5>
                <p>
                  Notre équipe est disponible pour vous accompagner du{' '}
                  <strong>lundi au vendredi</strong>.
                </p>
              </div>
              <a
                href="mailto:contact@rfidia.tn"
                className="btn btn-link mt-auto"
              >
                Nous écrire
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillEnvelopeFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Envoyez un email</h5>
                <p>
                  Écrivez-nous pour discuter de votre projet et recevoir une réponse rapide.
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
                <h5>Appelez-nous</h5>
                <p>
                  Besoin d’un échange direct ? Appelez-nous pour parler de votre besoin.
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
