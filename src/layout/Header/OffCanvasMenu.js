import React, { useState } from "react";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import {
  navCompanyLinks,
  navCompanyPage,
  offcanvasMenuData,
} from "../../utils/data";
import {
  getSolutionsCatalog,
  getSolutionsMeta,
} from "../../utils/solutionsNavData";

// ── Category-level icons (same as Navbar) ───────────────────────────
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

const OffCanvasMenu = ({ language = 'fr', onLanguageChange, labels }) => {
  const [openCategory, setOpenCategory] = useState(null);

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

  const languageOptions = [
    { key: 'fr', label: navLabels.french, flagSrc: '/a_rfidia/z_rfid/fr.png' },
    { key: 'en', label: navLabels.english, flagClass: 'fi fi-us' },
    { key: 'it', label: navLabels.italian, flagSrc: '/a_rfidia/z_rfid/it.png' },
  ];

  const selectedLanguage = languageOptions.find((opt) => opt.key === language) || languageOptions[0];

  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle d-flex justify-content-between"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {navLabels.home}
          </a>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
            <div className="dropdown-grid rounded-custom width-half">
              <div className="dropdown-grid-item">
                <h6 className="drop-heading">{navLabels.home}</h6>
                {offcanvasMenuData.map((navH, i) => (
                  <span key={i + 1}>
                    <Link href={navH.href}>
                      <a
                        className="dropdown-link"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {i + 1}
                        </span>
                        <span className="dropdown-info mb-0">
                          <span className="drop-title">{navH.title}</span>
                          <span>{navH.info}</span>
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/about-us">
            <a className="nav-link">{navLabels.about}</a>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle d-flex justify-content-between"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {navLabels.solutions ?? 'Solutions'}
          </a>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white w-100">
            <div className="rfidia-mobile-solutions">
              {solutionsCatalog.map((cat, idx) => {
                const isOpen = openCategory === idx;
                return (
                  <div
                    key={cat.key}
                    className={`rfidia-mobile-cat${isOpen ? ' is-open' : ''}`}
                    style={{ '--cat-accent': cat.accent }}
                  >
                    <button
                      type="button"
                      className="rfidia-mobile-cat__head"
                      aria-expanded={isOpen}
                      onClick={() => setOpenCategory(isOpen ? null : idx)}
                    >
                      <span className="rfidia-mobile-cat__ico" aria-hidden>
                        {CATEGORY_ICONS[cat.key]}
                      </span>
                      <span className="rfidia-mobile-cat__title">
                        <strong>{cat.title}</strong>
                        <span>{cat.subtitle}</span>
                      </span>
                      <span className="rfidia-mobile-cat__chevron" aria-hidden>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="rfidia-mobile-cat__list">
                        {cat.items.map((item) => (
                          <Link href={item.href} key={item.id}>
                            <a
                              className="rfidia-mobile-cat__item"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            >
                              <img src={item.image} alt="" />
                              <span>{item.title}</span>
                            </a>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <Link href="/it-solution">
                <a
                  className="rfidia-mobile-cat__item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{
                    justifyContent: 'center',
                    background: '#1a2150',
                    color: '#fff !important',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    marginTop: '6px',
                  }}
                >
                  <span style={{ color: '#fff' }}>{solutionsMeta.viewAll}</span>
                </a>
              </Link>
            </div>
          </div>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/services">
            <a className="nav-link">{navLabels.services}</a>
          </Link>
        </li>

        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/contact-us">
            <a className="nav-link">{navLabels.contact}</a>
          </Link>
        </li>
        {false && (
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle d-flex justify-content-between"
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
                    <span key={i + 1}>
                      <Link href={navLink.href}>
                        <a
                          className="dropdown-link px-0"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        >
                          <span className="me-2">{navLink.icon}</span>
                          <span className="drop-title mb-0">
                            {navLink.title}{" "}
                          </span>
                        </a>
                      </Link>
                    </span>
                  ))}
                </div>
                <div className="dropdown-grid-item radius-right-side bg-light">
                  <h6 className="drop-heading">{navLabels.usefulPages}</h6>
                  {navCompanyPage.map((navPage, i) => (
                    <span key={i + 1}>
                      <Link href={navPage.href}>
                        <a
                          className="dropdown-link"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        >
                          <span className="me-2">{navPage.icon}</span>
                          <span className="drop-title mb-0">
                            {navPage.title}{" "}
                          </span>
                        </a>
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        )}
      </ul>
      <div className="action-btns mt-4 ps-3">
        <div className="dropdown rfidia-lang-dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="rfidia-lang-current">
              {selectedLanguage.flagClass ? (
                <span className={`${selectedLanguage.flagClass} rfidia-lang-flag-img`}></span>
              ) : (
                <img
                  src={selectedLanguage.flagSrc}
                  alt={selectedLanguage.label}
                  className="rfidia-lang-flag-img"
                />
              )}
              <span>{navLabels.language}: {selectedLanguage.key.toUpperCase()}</span>
            </span>
          </button>
          <ul className="dropdown-menu shadow border-0 rounded-custom rfidia-lang-menu">
            {languageOptions.map((option) => (
              <li key={option.key}>
                <button
                  type="button"
                  className={`dropdown-item rfidia-lang-item${language === option.key ? ' active' : ''}`}
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
    </div>
  );
};

export default OffCanvasMenu;
