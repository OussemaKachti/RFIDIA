import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import 'flag-icons/css/flag-icons.min.css';
import { HiMenu, HiOutlineX } from 'react-icons/hi';
import { FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import OffCanvasMenu from './OffCanvasMenu';
import {
  navCompanyLinks,
  navCompanyPage,
} from '../../utils/data';
import {
  getSolutionsCatalog,
  getSolutionsMeta,
} from '../../utils/solutionsNavData';
import dynamic from 'next/dynamic';

// ── Category-level icons used in the mega-menu sidebar ───────────────
const CATEGORY_ICONS = {
  industries: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V10l6 4V10l6 4V7l6 4v10H3z" />
      <path d="M9 21v-4M15 21v-4M19 21v-4" />
    </svg>
  ),
  assets: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  traceability: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
    </svg>
  ),
  smart_ops: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M3 9h18" />
      <circle cx="15" cy="15" r="1.5" />
    </svg>
  ),
};

const Navbar = ({ navDark, insurance, classOption, language = 'fr', onLanguageChange, labels }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  const navLabels =
    labels ||
    {
      home: 'Accueil',
      about: 'A propos',
      solutions: 'Solutions',
      services: 'Services',
      contact: 'Contactez-nous',
      company: 'Entreprise',
      usefulLinks: 'Liens utiles',
      usefulPages: 'Pages utiles',
      language: 'Langue',
      french: 'Francais',
      english: 'English',
      italian: 'Italiano',
    };

  const solutionsCatalog = getSolutionsCatalog(language);
  const solutionsMeta = getSolutionsMeta(language);
  const safeActive = Math.min(activeCategory, solutionsCatalog.length - 1);
  const currentCategory = solutionsCatalog[safeActive] || solutionsCatalog[0];

  const languageOptions = [
    { key: 'fr', label: navLabels.french, flagSrc: '/a_rfidia/z_rfid/fr.png' },
    { key: 'en', label: navLabels.english, flagClass: 'fi fi-us' },
    { key: 'it', label: navLabels.italian, flagSrc: '/a_rfidia/z_rfid/it.png' },
  ];

  const selectedLanguage = languageOptions.find((opt) => opt.key === language) || languageOptions[0];

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`main-header ${navDark ? 'position-absolute' : ''
        } w-100 ${classOption} ${insurance && 'ins-header main-header w-100 z-10'
        }`}
    >
      <div className="rfidia-topbar d-none d-xl-block">
        <div className="container">
          <div className="rfidia-topbar__inner">
            <div className="rfidia-topbar__left">
              <a href="https://maps.google.com/?q=Ariana+1002+Tunisie" target="_blank" rel="noreferrer" className="rfidia-topbar__item">
                <FaMapMarkerAlt />
                <span>
                  Africa Mall Avenue Mustapha Hjeij Ariana 1002, Tunisie</span>
              </a>
              <a href="mailto:C.seif@rfidia.com
" className="rfidia-topbar__item">
                <HiOutlineMail />
                <span>C.seif@rfidia.com
</span>
              </a>
              <a href="tel:+216 27 224 949" className="rfidia-topbar__item">
                <FaPhoneAlt />
                <span>+216 27 224 949</span>
              </a>
            </div>
            <div className="rfidia-topbar__right">
              <a href="https://www.linkedin.com/in/rfidtunisie/" target="_blank" rel="noreferrer" aria-label="Facebook" className="rfidia-topbar__social">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/rfidtunisie/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rfidia-topbar__social">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-xl z-50 ${navDark ? 'navbar-dark' : 'navbar-light'
          } sticky-header ${scroll > headerTop ? 'affix' : ''}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
              {scroll > headerTop || !navDark ? (
                <img
                  src="/a_rfidia/z_rfid/logo-RFIDIA-final.png"
                  alt="logo"
                  className="img-fluid logo-color"
                  style={{ maxHeight: '54px', width: 'auto' }}
                />
              ) : (
                <img
                  src="/logo-white.png"
                  alt="logo"
                  className="img-fluid logo-white"
                  style={{ maxHeight: '48px', width: 'auto' }}
                />
              )}
            </a>
          </Link>
          <button
            className="navbar-toggler position-absolute right-0 border-0"
            id="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </button>
          <div className="clearfix"></div>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li>
                <Link href="/it-solution">
                  <a className="nav-link">{navLabels.home}</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <a className="nav-link">{navLabels.about}</a>
                </Link>
              </li>
              <li className="nav-item dropdown sm-mega">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {navLabels.solutions ?? 'Solutions'}
                </a>
                <div className="dropdown-menu border-0 py-0 sm-mega__menu">
                  <div className="sm-mega__inner">
                    <div className="sm-mega__cols">
                      {solutionsCatalog.map((cat) => (
                        <div className="sm-mega__col" key={cat.key}>
                          <div className="sm-mega__col-head">
                            <span
                              className="sm-mega__col-ico"
                              style={{ '--cat-accent': cat.accent }}
                              aria-hidden
                            >
                              {CATEGORY_ICONS[cat.key]}
                            </span>
                            <div>
                              <span className="sm-mega__col-title">{cat.title}</span>
                              <span className="sm-mega__col-sub">{cat.subtitle}</span>
                            </div>
                          </div>
                          <ul className="sm-mega__list">
                            {cat.items.map((item) => (
                              <li key={item.id}>
                                <Link href={item.href} passHref>
                                  <a
                                    className="sm-mega__link"
                                    style={{ '--cat-accent': cat.accent }}
                                  >
                                    <span className="sm-mega__link-title">{item.title}</span>
                                    <span className="sm-mega__link-desc">{item.description}</span>
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="sm-mega__footer">
                      <div className="sm-mega__footer-text">
                        <strong>{solutionsMeta.cta.title}</strong>
                        <span>{solutionsMeta.cta.desc}</span>
                      </div>
                      <div className="sm-mega__footer-actions">
                        <Link href="/it-solution" passHref>
                          <a className="sm-mega__link-all">
                            {solutionsMeta.viewAll}
                            <svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </Link>
                        <Link href="/contact-us" passHref>
                          <a className="sm-mega__cta-btn">
                            {solutionsMeta.cta.btn}
                            <svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/services">
                  <a className="nav-link">{navLabels.services}</a>
                </Link>
              </li>

              <li>
                <Link href="/contact-us">
                  <a className="nav-link">{navLabels.contact}</a>
                </Link>
              </li>
              {false && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {navLabels.company}
                  </a>
                  <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                    <div className="dropdown-grid rounded-custom width-full">
                      <div className="dropdown-grid-item">
                        <h6 className="drop-heading">{navLabels.usefulLinks}</h6>
                        {navCompanyLinks.map((navLink, i) => (
                          <div key={i + 1}>
                            <Link href={navLink.href}>
                              <a className="dropdown-link px-0">
                                <span className="me-2">{navLink.icon}</span>
                                <span className="drop-title mb-0">
                                  {navLink.title}{' '}
                                </span>
                              </a>
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div className="dropdown-grid-item radius-right-side bg-light">
                        <h6 className="drop-heading">{navLabels.usefulPages}</h6>
                        {navCompanyPage.map((navPage, i) => (
                          <div key={i + 1}>
                            <Link href={navPage.href}>
                              <a className="dropdown-link">
                                <span className="me-2">{navPage.icon}</span>
                                <span className="drop-title mb-0">
                                  {navPage.title}{' '}
                                </span>
                              </a>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>

          <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
            <div className="dropdown rfidia-lang-dropdown">
              <button
                className="rfidia-lang-trigger dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedLanguage.flagClass ? (
                  <span className={`${selectedLanguage.flagClass} rfidia-lang-flag-img`}></span>
                ) : (
                  <img
                    src={selectedLanguage.flagSrc}
                    alt={selectedLanguage.label}
                    className="rfidia-lang-flag-img"
                  />
                )}
                <span className="rfidia-lang-trigger__label">{selectedLanguage.key.toUpperCase()}</span>
                <svg className="rfidia-lang-trigger__chevron" width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <ul className="dropdown-menu dropdown-menu-end rfidia-lang-menu">
                {languageOptions.map((option) => (
                  <li key={option.key}>
                    <button
                      type="button"
                      className={`rfidia-lang-item${language === option.key ? ' active' : ''}`}
                      onClick={() => onLanguageChange && onLanguageChange(option.key)}
                    >
                      {option.flagClass ? (
                        <span className={`${option.flagClass} rfidia-lang-flag-img`}></span>
                      ) : (
                        <img
                          src={option.flagSrc}
                          alt={option.label}
                          className="rfidia-lang-flag-img"
                        />
                      )}
                      <span>{option.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="offcanvas offcanvas-end d-xl-none"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center mt-4">
              <Link href="/">
                <a className="d-flex align-items-center mb-md-0 text-decoration-none">
                  <img
                    src="/a_rfidia/z_rfid/logo-RFIDIA-final.png"
                    alt="logo"
                    className="img-fluid ps-2"
                    style={{ maxHeight: '42px', width: 'auto' }}
                  />
                </a>
              </Link>
              <button
                type="button"
                className="close-btn text-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>

            <OffCanvasMenu
              language={language}
              onLanguageChange={onLanguageChange}
              labels={navLabels}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
