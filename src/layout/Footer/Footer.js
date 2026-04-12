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

const Footer = ({ footerLight, style, footerGradient }) => {
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
                    <Image
                      width={220}
                      height={64}
                      src="/a_rfidia/z_rfid/logo-RFIDIA-final.png"
                      alt="RFIDIA Technology"
                      className="img-fluid"
                    />
                  </div>
                  <p className="rfidia-footer-desc">
                    Leader tunisien de la traçabilité intelligente. Nous accompagnons les entreprises dans leur transformation digitale grâce à nos solutions RFID, IoT et codes-barres haute performance.
                  </p>
                  
                  <div className="rfidia-footer-social">
                    <span>Suivez-nous :</span>
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
                  <h3>Notre Entreprise</h3>
                  <ul className="list-unstyled mb-0">
                    <li><Link href="/about-us"><a>À Propos</a></Link></li>
                    <li><Link href="/services"><a>Nos Solutions</a></Link></li>
                    <li><Link href="/it-solution"><a>Secteurs d'Activité</a></Link></li>
                    <li><Link href="/blogs"><a>Nos Réalisations</a></Link></li>
                    <li><Link href="/contact-us"><a>Contact</a></Link></li>
                  </ul>
                </div>
              </div>

              {/* CONTACT COL */}
              <div className="col-sm-6 col-lg-3">
                <div className="rfidia-footer-contact">
                  <h3>Contactez-nous</h3>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <div className="icon-box"><FaMapMarkerAlt /></div>
                      <div className="text-box">
                        <strong>Adresse</strong>
                        <span>Avenue de la République, Tunis 1002</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box"><HiOutlineMail /></div>
                      <div className="text-box">
                        <strong>Email</strong>
                        <a href="mailto:contact@rfidia.com">contact@rfidia.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box"><FaPhoneAlt /></div>
                      <div className="text-box">
                        <strong>Téléphone</strong>
                        <a href="tel:+21671234567">+216 71 234 567</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* NEWSLETTER COL */}
              <div className="col-lg-3 col-xl-3">
                <div className="rfidia-footer-newsletter">
                  <h3>Newsletter</h3>
                  <p>Restez informé sur les dernières innovations en traçabilité et IoT.</p>
                  
                  <form className="rfidia-newsletter-form">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Votre adresse email"
                        name="email"
                        required
                        autoComplete="off"
                      />
                      <button type="submit" aria-label="S'abonner">
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
                <p className="mb-0 copyright-text">© {new Date().getFullYear()} RFIDIA. Tous droits réservés.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <ul className="list-inline mb-0 footer-legal-links">
                  <li className="list-inline-item"><Link href="/privacy-policy"><a>Politique de confidentialité</a></Link></li>
                  <li className="list-inline-item"><Link href="/terms-condition"><a>Mentions légales</a></Link></li>
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
