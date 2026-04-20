import React from "react";
import Link from "next/link";
import {
  navCompanyLinks,
  navCompanyPage,
  offcanvasMenuData,
} from "../../utils/data";

const OffCanvasMenu = ({ language = 'fr', onLanguageChange, labels }) => {
  const navLabels =
    labels ||
    {
      home: 'Accueil',
      about: 'A propos',
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

  const languageOptions = [
    { key: 'fr', label: navLabels.french, flagSrc: '/a_rfidia/z_rfid/fr.png' },
    { key: 'en', label: navLabels.english, flagSrc: '/a_rfidia/z_rfid/am.png' },
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
              <img
                src={selectedLanguage.flagSrc}
                alt={selectedLanguage.label}
                className="rfidia-lang-flag-img"
              />
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
                  <img
                    src={option.flagSrc}
                    alt={option.label}
                    className="rfidia-lang-flag-img"
                  />
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
