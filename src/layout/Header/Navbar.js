import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

import OffCanvasMenu from './OffCanvasMenu';
import {
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
} from '../../utils/data';
import dynamic from 'next/dynamic';

const Navbar = ({ navDark, insurance, classOption, language = 'fr', onLanguageChange, labels }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

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
      className={`main-header ${
        navDark ? 'position-absolute' : ''
      } w-100 ${classOption} ${
        insurance && 'ins-header main-header w-100 z-10'
      }`}
    >
      <nav
        className={`navbar navbar-expand-xl z-50 ${
          navDark ? 'navbar-dark' : 'navbar-light'
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {navLabels.home}
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full">
                    <div className="dropdown-grid-item">
                      <h6 className="drop-heading">{navLabels.home}</h6>
                      {navHomeOne.map((navH, i) => (
                        <span key={i + 1}>
                          <Link href={navH.href}>
                            <a className="dropdown-link">
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
                    <div className="dropdown-grid-item radius-right-side bg-light">
                      <h6 className="drop-heading">{navLabels.home}</h6>
                      {navHomeTwo.map((navH, i) => (
                        <span key={i + 10}>
                          <Link href={navH.href}>
                            <a className="dropdown-link">
                              <span className="demo-list bg-primary rounded text-white fw-bold">
                                {i + 10}
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
              <li>
                <Link href="about-us">
                  <a className="nav-link">{navLabels.about}</a>
                </Link>
              </li>
              <li>
                <Link href="services">
                  <a className="nav-link">{navLabels.services}</a>
                </Link>
              </li>

              <li>
                <Link href="/contact-us">
                  <a className="nav-link">{navLabels.contact}</a>
                </Link>
              </li>
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
            </ul>
          </div>

          <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
            <div className="dropdown rfidia-lang-dropdown">
              <button
                className={insurance ? 'ins-btn ins-primary-btn dropdown-toggle' : 'btn btn-primary dropdown-toggle'}
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
              <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-custom rfidia-lang-menu">
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
