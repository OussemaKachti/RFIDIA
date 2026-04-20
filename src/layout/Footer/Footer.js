import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaArrowRight
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = ({ footerLight, style, footerGradient, translations }) => {
  const t =
    translations ||
    {
      followUs: 'Suivez-nous :',
      companyTitle: 'Notre Entreprise',
      about: 'A Propos',
      solutions: 'Nos Solutions',
      sectors: "Secteurs d'Activite",
      projects: 'Nos Realisations',
      contact: 'Contact',
      contactTitle: 'Contactez-nous',
      address: 'Adresse',
      email: 'Email',
      phone: 'Telephone',
      newsletter: 'Newsletter',
      newsletterDesc: 'Restez informe sur les dernieres innovations en tracabilite et IoT.',
      newsletterPlaceholder: 'Votre adresse email',
      newsletterAria: "S'abonner",
      copyright: 'Tous droits reserves.',
      privacy: 'Politique de confidentialite',
      legal: 'Mentions legales',
      brandDesc:
        'Leader tunisien de la tracabilite intelligente. Nous accompagnons les entreprises dans leur transformation digitale grace a nos solutions RFID, IoT et codes-barres haute performance.',
    };
  return (
    <>
      <footer className="rfidia-footer position-relative">
        {/* Top Glow Effect */}
        <div className="rfidia-footer__glow" aria-hidden="true" />

        <div className="footer-top ptb-100">
          <div className="container">
            <div className="row g-5 justify-content-between">
              
              {/* BRAND COL */}
              <div className="col-lg-4 col-xl-4">
                <div className="rfidia-footer-brand">
                  <div className="mb-4">
                    <img
                      src="/a_rfidia/z_rfid/logo-RFIDIA-final.png"
                      alt="RFIDIA Technology"
                      className="img-fluid"
                      style={{ maxHeight: '55px', width: 'auto' }}
                    />
                  </div>
                  <p className="rfidia-footer-desc">
                    {t.brandDesc}
                  </p>
                  
                  <div className="rfidia-footer-social">
                    <span>{t.followUs}</span>
                    <ul className="list-unstyled list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" aria-label="YouTube"><FaYoutube /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* LINKS COL */}
              <div className="col-sm-6 col-lg-2">
                <div className="rfidia-footer-links">
                  <h3>{t.companyTitle}</h3>
                  <ul className="list-unstyled mb-0">
                    <li><Link href="/about-us"><a>{t.about}</a></Link></li>
                    <li><Link href="/services"><a>{t.solutions}</a></Link></li>
                    <li><Link href="/it-solution"><a>{t.sectors}</a></Link></li>
                    <li><Link href="/blogs"><a>{t.projects}</a></Link></li>
                    <li><Link href="/contact-us"><a>{t.contact}</a></Link></li>
                  </ul>
                </div>
              </div>

              {/* CONTACT COL */}
              <div className="col-sm-6 col-lg-3">
                <div className="rfidia-footer-contact">
                  <h3>{t.contactTitle}</h3>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <div className="icon-box"><FaMapMarkerAlt /></div>
                      <div className="text-box">
                        <strong>{t.address}</strong>
                        <span>Avenue de la République, Tunis 1002</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box"><HiOutlineMail /></div>
                      <div className="text-box">
                        <strong>{t.email}</strong>
                        <a href="mailto:contact@rfidia.com">contact@rfidia.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box"><FaPhoneAlt /></div>
                      <div className="text-box">
                        <strong>{t.phone}</strong>
                        <a href="tel:+21671234567">+216 71 234 567</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* NEWSLETTER COL */}
              <div className="col-lg-3 col-xl-3">
                <div className="rfidia-footer-newsletter">
                  <h3>{t.newsletter}</h3>
                  <p>{t.newsletterDesc}</p>
                  
                  <form className="rfidia-newsletter-form">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder={t.newsletterPlaceholder}
                        name="email"
                        required
                        autoComplete="off"
                      />
                      <button type="submit" aria-label={t.newsletterAria}>
                        <FaArrowRight />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="rfidia-footer-bottom py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-0 copyright-text">© {new Date().getFullYear()} RFIDIA. {t.copyright}</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <ul className="list-inline mb-0 footer-legal-links">
                  <li className="list-inline-item"><Link href="/privacy-policy"><a>{t.privacy}</a></Link></li>
                  <li className="list-inline-item"><Link href="/terms-condition"><a>{t.legal}</a></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
