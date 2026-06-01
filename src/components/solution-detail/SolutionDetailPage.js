import React, { useEffect, useState } from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Link from "next/link";

/**
 * Reusable, premium template for a single RFID solution detail page.
 *
 * Props (`data` should be a localized object via `getLocalized(lang)`):
 *  - eyebrow, title, lead, heroImage, heroBadges[]
 *  - kpis: [{ value, label }]
 *  - benefits: [{ title, desc, icon? (jsx) }]
 *  - useCases: [{ title, desc, image }]
 *  - features: [{ title, desc }]
 *  - cta: { title, desc, primary, secondary }
 *  - faqs: [{ q, a }]
 *  - accent: "#hex" (category color used as accent)
 */

const NAV_LABELS = {
  fr: { home: "Accueil", about: "À propos", solutions: "Solutions", services: "Services", contact: "Contact", company: "Entreprise", usefulLinks: "Liens utiles", usefulPages: "Pages utiles", language: "Langue", french: "Français", english: "English", italian: "Italiano" },
  en: { home: "Home", about: "About", solutions: "Solutions", services: "Services", contact: "Contact", company: "Company", usefulLinks: "Useful links", usefulPages: "Useful pages", language: "Language", french: "Français", english: "English", italian: "Italiano" },
  it: { home: "Home", about: "Chi siamo", solutions: "Soluzioni", services: "Servizi", contact: "Contatto", company: "Azienda", usefulLinks: "Link utili", usefulPages: "Pagine utili", language: "Lingua", french: "Français", english: "English", italian: "Italiano" },
};

const FOOTER_I18N = {
  fr: { followUs: "Suivez-nous :", companyTitle: "Notre Entreprise", about: "À Propos", solutions: "Nos Solutions", sectors: "Secteurs", projects: "Réalisations", contact: "Contact", contactTitle: "Contactez-nous", address: "Adresse", email: "Email", phone: "Téléphone", newsletter: "Newsletter", newsletterDesc: "Restez informé sur les dernières innovations RFID et IoT.", newsletterPlaceholder: "Votre adresse email", newsletterAria: "S'abonner", copyright: "Tous droits réservés.", privacy: "Politique de confidentialité", legal: "Mentions légales", brandDesc: "Leader tunisien de la traçabilité intelligente. Solutions RFID, IoT et codes-barres haute performance." },
  en: { followUs: "Follow us:", companyTitle: "Our Company", about: "About", solutions: "Our Solutions", sectors: "Sectors", projects: "Projects", contact: "Contact", contactTitle: "Contact us", address: "Address", email: "Email", phone: "Phone", newsletter: "Newsletter", newsletterDesc: "Stay informed about the latest RFID and IoT innovations.", newsletterPlaceholder: "Your email address", newsletterAria: "Subscribe", copyright: "All rights reserved.", privacy: "Privacy Policy", legal: "Legal Notice", brandDesc: "Tunisian leader in smart traceability. High-performance RFID, IoT and barcode solutions." },
  it: { followUs: "Seguici:", companyTitle: "La nostra azienda", about: "Chi siamo", solutions: "Le nostre soluzioni", sectors: "Settori", projects: "Progetti", contact: "Contatto", contactTitle: "Contattaci", address: "Indirizzo", email: "Email", phone: "Telefono", newsletter: "Newsletter", newsletterDesc: "Resta aggiornato sulle ultime innovazioni RFID e IoT.", newsletterPlaceholder: "Il tuo indirizzo email", newsletterAria: "Iscriviti", copyright: "Tutti i diritti riservati.", privacy: "Politica sulla privacy", legal: "Note legali", brandDesc: "Leader tunisino nella tracciabilità intelligente. Soluzioni RFID, IoT e codici a barre ad alte prestazioni." },
};

const SECTION_LABELS = {
  fr: { benefits: "Bénéfices clés", useCases: "Cas d'usage concrets", features: "Capacités de la plateforme", faq: "Questions fréquentes", overview: "Aperçu" },
  en: { benefits: "Key benefits", useCases: "Real-world use cases", features: "Platform capabilities", faq: "Frequently asked questions", overview: "Overview" },
  it: { benefits: "Benefici chiave", useCases: "Casi d'uso reali", features: "Capacità piattaforma", faq: "Domande frequenti", overview: "Panoramica" },
};

const CtaArrow = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const Chevron = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const SolutionDetailPage = ({ getLocalized, fallbackLang = "fr" }) => {
  const [language, setLanguage] = useState(fallbackLang);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("rfidia_lang");
    if (saved && ["fr", "en", "it"].includes(saved)) setLanguage(saved);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("rfidia_lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const data = getLocalized(language);
  const labels = SECTION_LABELS[language] || SECTION_LABELS.fr;
  const accent = data.accent || "#2563eb";

  return (
    <Layout title={data.metaTitle} desc={data.metaDesc}>
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        labels={NAV_LABELS[language] || NAV_LABELS.fr}
      />

      <main className="sd" style={{ "--sd-accent": accent }}>
        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="sd-hero">
          <div className="sd-hero__bg" aria-hidden>
            <span className="sd-hero__glow sd-hero__glow--a" />
            <span className="sd-hero__glow sd-hero__glow--b" />
            <span className="sd-hero__grid" />
          </div>
          <div className="container position-relative">
            {/* Breadcrumb */}
            <nav className="sd-crumbs" aria-label="Breadcrumb">
              <Link href="/it-solution"><a>{NAV_LABELS[language].solutions}</a></Link>
              <span aria-hidden> / </span>
              <span className="sd-crumbs__current">{data.title}</span>
            </nav>

            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="sd-eyebrow">
                  <span className="sd-eyebrow__dot" />
                  {data.eyebrow}
                </span>
                <h1 className="sd-hero__title">{data.title}</h1>
                <p className="sd-hero__lead">{data.lead}</p>

                <div className="sd-hero__actions">
                  <Link href="/contact-us" passHref>
                    <a className="sd-btn sd-btn--primary">
                      {data.cta.primary}
                      <CtaArrow />
                    </a>
                  </Link>
                  <Link href="/it-solution" passHref>
                    <a className="sd-btn sd-btn--ghost">{data.cta.secondary}</a>
                  </Link>
                </div>

                {data.heroBadges && data.heroBadges.length > 0 && (
                  <div className="sd-hero__badges">
                    {data.heroBadges.map((b) => (
                      <span className="sd-hero__badge" key={b}>
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                          <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="col-lg-6">
                <div className="sd-hero__visual">
                  <div className="sd-hero__visual-frame">
                    <img src={data.heroImage} alt={data.title} />
                  </div>
                  {data.kpis && data.kpis[0] && (
                    <div className="sd-hero__kpi sd-hero__kpi--a">
                      <strong>{data.kpis[0].value}</strong>
                      <span>{data.kpis[0].label}</span>
                    </div>
                  )}
                  {data.kpis && data.kpis[1] && (
                    <div className="sd-hero__kpi sd-hero__kpi--b">
                      <strong>{data.kpis[1].value}</strong>
                      <span>{data.kpis[1].label}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {data.kpis && data.kpis.length > 0 && (
              <div className="sd-kpis">
                {data.kpis.map((k) => (
                  <div className="sd-kpi" key={k.label}>
                    <strong>{k.value}</strong>
                    <span>{k.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── BENEFITS ────────────────────────────────────────────── */}
        {data.benefits && data.benefits.length > 0 && (
          <section className="sd-section">
            <div className="container">
              <header className="sd-section__head">
                <span className="sd-section__eyebrow">{labels.benefits}</span>
                <h2>{data.benefitsTitle || labels.benefits}</h2>
                {data.benefitsSubtitle && <p>{data.benefitsSubtitle}</p>}
              </header>

              <div className="sd-benefits">
                {data.benefits.map((b, i) => (
                  <article className="sd-benefit" key={b.title} style={{ "--delay": `${i * 60}ms` }}>
                    <div className="sd-benefit__ico" aria-hidden>
                      {b.icon || (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                      )}
                    </div>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── USE CASES ───────────────────────────────────────────── */}
        {data.useCases && data.useCases.length > 0 && (
          <section className="sd-section sd-section--alt">
            <div className="container">
              <header className="sd-section__head">
                <span className="sd-section__eyebrow">{labels.useCases}</span>
                <h2>{data.useCasesTitle || labels.useCases}</h2>
                {data.useCasesSubtitle && <p>{data.useCasesSubtitle}</p>}
              </header>

              <div className="sd-cases">
                {data.useCases.map((u, idx) => (
                  <article className={`sd-case${idx % 2 === 1 ? " sd-case--reverse" : ""}`} key={u.title}>
                    <div className="sd-case__body">
                      <span className="sd-case__step">{String(idx + 1).padStart(2, "0")}</span>
                      <h3>{u.title}</h3>
                      <p>{u.desc}</p>
                      {u.points && u.points.length > 0 && (
                        <ul className="sd-case__points">
                          {u.points.map((p) => (
                            <li key={p}>
                              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="sd-case__media">
                      <img src={u.image} alt={u.title} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FEATURES (platform / capabilities) ──────────────────── */}
        {data.features && data.features.length > 0 && (
          <section className="sd-section">
            <div className="container">
              <header className="sd-section__head">
                <span className="sd-section__eyebrow">{labels.features}</span>
                <h2>{data.featuresTitle || labels.features}</h2>
                {data.featuresSubtitle && <p>{data.featuresSubtitle}</p>}
              </header>

              <div className="sd-features">
                {data.features.map((f, i) => (
                  <div className="sd-feature" key={f.title}>
                    <span className="sd-feature__num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="sd-section sd-section--alt">
            <div className="container">
              <div className="row g-5 align-items-start">
                <div className="col-lg-4">
                  <span className="sd-section__eyebrow">{labels.faq}</span>
                  <h2 className="sd-section__title">{data.faqTitle || labels.faq}</h2>
                  <p className="sd-section__lead">{data.faqSubtitle}</p>
                  <Link href="/contact-us" passHref>
                    <a className="sd-btn sd-btn--primary sd-mt">
                      {data.cta.primary} <CtaArrow />
                    </a>
                  </Link>
                </div>
                <div className="col-lg-8">
                  {data.faqs.map((f, i) => {
                    const open = openFaq === i;
                    return (
                      <div className={`sd-faq${open ? " is-open" : ""}`} key={f.q}>
                        <button
                          type="button"
                          className="sd-faq__q"
                          aria-expanded={open}
                          onClick={() => setOpenFaq(open ? -1 : i)}
                        >
                          <span>{f.q}</span>
                          <span className="sd-faq__icon" aria-hidden><Chevron /></span>
                        </button>
                        <div className="sd-faq__a">
                          <p>{f.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── FINAL CTA ───────────────────────────────────────────── */}
        <section className="sd-cta-section">
          <div className="container">
            <div className="sd-cta">
              <div className="sd-cta__glow" aria-hidden />
              <div className="sd-cta__body">
                <h2>{data.cta.title}</h2>
                <p>{data.cta.desc}</p>
              </div>
              <div className="sd-cta__actions">
                <Link href="/contact-us" passHref>
                  <a className="sd-btn sd-btn--white">
                    {data.cta.primary} <CtaArrow />
                  </a>
                </Link>
                <Link href="/it-solution" passHref>
                  <a className="sd-btn sd-btn--ghost-light">{data.cta.secondary}</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer footerGradient translations={FOOTER_I18N[language] || FOOTER_I18N.fr} />
    </Layout>
  );
};

export default SolutionDetailPage;
