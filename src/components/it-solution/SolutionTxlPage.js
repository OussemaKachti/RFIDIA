import React, { useEffect, useMemo, useState } from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Link from "next/link";

/*
 * Generic premium template for any RFIDIA solution detail page.
 * Visual style aligned with solution-sante / solution-entrepot.
 *
 * Props:
 *   theme    = { primary, secondary, dark, softTint, glow }
 *   heroImage = "/path/to/image.png"
 *   copy     = { fr, en, it } with the shape produced by buildSolution
 */

const NAVBAR_I18N = {
  fr: { home: "Accueil", about: "À propos", solutions: "Solutions", services: "Services", contact: "Contact", company: "Entreprise", usefulLinks: "Liens utiles", usefulPages: "Pages utiles", language: "Langue", french: "Français", english: "English", italian: "Italiano" },
  en: { home: "Home", about: "About", solutions: "Solutions", services: "Services", contact: "Contact", company: "Company", usefulLinks: "Useful links", usefulPages: "Useful pages", language: "Language", french: "Français", english: "English", italian: "Italiano" },
  it: { home: "Home", about: "Chi siamo", solutions: "Soluzioni", services: "Servizi", contact: "Contatto", company: "Azienda", usefulLinks: "Link utili", usefulPages: "Pagine utili", language: "Lingua", french: "Francese", english: "Inglese", italian: "Italiano" },
};

const FOOTER_I18N = {
  fr: { followUs: "Suivez-nous :", companyTitle: "Notre Entreprise", about: "À Propos", solutions: "Nos Solutions", sectors: "Secteurs d'Activité", projects: "Nos Réalisations", contact: "Contact", contactTitle: "Contactez-nous", address: "Adresse", email: "Email", phone: "Téléphone", newsletter: "Newsletter", newsletterDesc: "Restez informé sur les dernières innovations en traçabilité et IoT.", newsletterPlaceholder: "Votre adresse email", newsletterAria: "S'abonner", copyright: "Tous droits réservés.", privacy: "Politique de confidentialité", legal: "Mentions légales", brandDesc: "Leader tunisien de la traçabilité intelligente. Nous accompagnons les entreprises dans leur transformation digitale grâce à nos solutions RFID, IoT et codes-barres haute performance." },
  en: { followUs: "Follow us:", companyTitle: "Our Company", about: "About", solutions: "Our Solutions", sectors: "Industry Sectors", projects: "Our Projects", contact: "Contact", contactTitle: "Contact us", address: "Address", email: "Email", phone: "Phone", newsletter: "Newsletter", newsletterDesc: "Stay informed about the latest RFID and IoT innovations.", newsletterPlaceholder: "Your email address", newsletterAria: "Subscribe", copyright: "All rights reserved.", privacy: "Privacy Policy", legal: "Legal Notice", brandDesc: "Tunisian leader in smart traceability. We support companies in their digital transformation through high-performance RFID, IoT and barcode solutions." },
  it: { followUs: "Seguici:", companyTitle: "La nostra azienda", about: "Chi siamo", solutions: "Le nostre soluzioni", sectors: "Settori", projects: "I nostri progetti", contact: "Contatto", contactTitle: "Contattaci", address: "Indirizzo", email: "Email", phone: "Telefono", newsletter: "Newsletter", newsletterDesc: "Resta aggiornato sulle ultime innovazioni RFID e IoT.", newsletterPlaceholder: "Il tuo indirizzo email", newsletterAria: "Iscriviti", copyright: "Tutti i diritti riservati.", privacy: "Politica sulla privacy", legal: "Note legali", brandDesc: "Leader tunisino nella tracciabilità intelligente. Supportiamo le aziende nella trasformazione digitale con soluzioni RFID, IoT e codici a barre ad alte prestazioni." },
};

function hexToRgba(hex, alpha) {
  if (!hex) return `rgba(77,200,196,${alpha})`;
  const h = hex.replace("#", "");
  const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const r = parseInt(v.substring(0, 2), 16);
  const g = parseInt(v.substring(2, 4), 16);
  const b = parseInt(v.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const SolutionTxlPage = ({ theme, heroImage, copy }) => {
  const [language, setLanguage] = useState("fr");

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

  const t = (copy && copy[language]) || (copy && copy.fr) || {};
  const navbarLabels = NAVBAR_I18N[language] || NAVBAR_I18N.fr;
  const footerLabels = FOOTER_I18N[language] || FOOTER_I18N.fr;

  const palette = useMemo(() => {
    const primary = theme?.primary || "#4DC8C4";
    const secondary = theme?.secondary || "#A7F0EA";
    const dark = theme?.dark || "#121727";
    return {
      primary,
      secondary,
      dark,
      tint12: hexToRgba(primary, 0.12),
      tint22: hexToRgba(primary, 0.22),
      tint26: hexToRgba(primary, 0.26),
      glow18: hexToRgba(primary, 0.18),
      glow22: hexToRgba(primary, 0.22),
      shadow34: hexToRgba(primary, 0.34),
    };
  }, [theme]);

  const kpis = t.kpis || [];
  const modules = t.modules || [];
  const journey = t.journey || [];
  const proofs = t.proofs || [];
  const applications = t.applications || [];
  const verticals = t.verticals || [];

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar language={language} onLanguageChange={setLanguage} labels={navbarLabels} />

      <main className="med">
        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="med-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                {t.heroEyebrow && <div className="med-tag">{t.heroEyebrow}</div>}
                <h1 className="med-title">
                  {t.heroTitleA}{" "}
                  <span className="med-title__accent">{t.heroTitleB}</span>
                  <br />
                  {t.heroTitleC}
                </h1>
                <p className="med-sub">{t.heroSub}</p>

                <div className="med-actions">
                  <Link href="/contact-us" passHref>
                    <a className="med-btn med-btn--primary">{t.heroCta1}</a>
                  </Link>
                  <Link href="/it-solution" passHref>
                    <a className="med-btn med-btn--ghost">{t.heroCta2}</a>
                  </Link>
                </div>

                {kpis.length > 0 && (
                  <div className="med-stats">
                    {kpis.slice(0, 3).map((s, i) => (
                      <div className="med-stat" key={s.l || i}>
                        <div className="med-stat__v">{s.v}</div>
                        <div className="med-stat__l">{s.l}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="col-lg-6">
                <div className="med-visual">
                  <div className="med-visual__frame">
                    <img src={heroImage} alt={t.heroTitleA || ""} />
                  </div>
                  <div className="med-visual__glass" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MODULES / COVERAGE ──────────────────────────────── */}
        {modules.length > 0 && (
          <section className="med-section">
            <div className="container">
              <div className="med-head">
                <h2>{t.modulesTitle}</h2>
                <p>{t.modulesDesc}</p>
              </div>
              <div className="med-grid">
                {modules.map((a) => (
                  <article className="med-card" key={a.title}>
                    <div className="med-card__top" />
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── APPLICATIONS / USE CASES (numbered grid) ─────────── */}
        {applications.length > 0 && (
          <section className="med-section med-section--soft">
            <div className="container">
              <div className="med-head">
                <h2>{t.applicationsTitle}</h2>
                <p>{t.applicationsDesc}</p>
              </div>
              <div className="med-apps">
                {applications.map((a, i) => (
                  <article className="med-app" key={a.title}>
                    <div className="med-app__num">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── VERTICALS / SUB-INDUSTRIES (chips) ────────────────── */}
        {verticals.length > 0 && (
          <section className="med-section">
            <div className="container">
              <div className="med-head">
                <h2>{t.verticalsTitle}</h2>
                <p>{t.verticalsDesc}</p>
              </div>
              <div className="med-verticals">
                {verticals.map((v) => (
                  <span className="med-vertical" key={v.name}>
                    <span className="med-vertical__dot" aria-hidden />
                    <span className="med-vertical__body">
                      <strong>{v.name}</strong>
                      <span>{v.desc}</span>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── METHOD + PROOF ──────────────────────────────────── */}
        {(journey.length > 0 || proofs.length > 0) && (
          <section className="med-section med-section--soft">
            <div className="container">
              <div className="row g-5 align-items-start">
                <div className="col-lg-5">
                  <div className="med-head med-head--left">
                    <h2>{t.journeyTitle}</h2>
                    <p>{t.journeyDesc}</p>
                  </div>
                  {proofs.length > 0 && (
                    <div className="med-proof">
                      <div className="med-proof__title">{t.proofTitle}</div>
                      <div className="med-proof__desc">{t.proofDesc}</div>
                      <ul className="med-list">
                        {proofs.map((x) => (
                          <li key={x}>
                            <span className="med-list__icon" aria-hidden />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="col-lg-7">
                  <div className="med-flow">
                    {journey.map((m, idx) => (
                      <div className="med-flow__row" key={m.n || idx}>
                        <div className="med-flow__n">{m.n}</div>
                        <div className="med-flow__body">
                          <h3>{m.t}</h3>
                          <p>{m.d}</p>
                        </div>
                        {idx < journey.length - 1 && <div className="med-flow__line" aria-hidden />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="med-cta">
          <div className="container">
            <div className="med-cta__inner">
              <div>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaSub}</p>
              </div>
              <div className="med-cta__actions">
                <Link href="/contact-us" passHref>
                  <a className="med-btn med-btn--dark">{t.ctaBtn}</a>
                </Link>
                <Link href="/it-solution" passHref>
                  <a className="med-btn med-btn--ghost-dark">{t.ctaAlt}</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer footerGradient translations={footerLabels} />

      <style jsx>{`
        .med {
          --accent: ${palette.primary};
          --accent2: ${palette.secondary};
          --accent-dark: ${palette.dark};
          --ink: #121727;
          color: var(--ink);
          background: #fff;
          font-family: "Manrope", sans-serif;
        }
        .med-hero {
          padding: 60px 0 70px;
          background:
            radial-gradient(980px 420px at 15% 10%, ${palette.tint22}, transparent 60%),
            radial-gradient(900px 420px at 85% 20%, rgba(30, 42, 74, 0.06), transparent 58%),
            linear-gradient(180deg, #ffffff 0%, #ffffff 60%, ${hexToRgba(palette.secondary, 0.18)} 100%);
          border-bottom: 1px solid rgba(18, 23, 39, 0.06);
        }
        .med-tag {
          display: inline-flex;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(18, 23, 39, 0.65);
          background: ${palette.tint12};
          border: 1px solid ${palette.tint22};
          margin-bottom: 18px;
          width: fit-content;
        }
        .med-title {
          font-size: clamp(2.05rem, 4.5vw, 3.7rem);
          font-weight: 900;
          line-height: 1.12;
          margin: 0 0 18px;
          letter-spacing: -0.02em;
        }
        .med-title__accent {
          background: linear-gradient(120deg, var(--accent) 0%, var(--accent2) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .med-sub {
          color: rgba(18, 23, 39, 0.72);
          font-size: 1.06rem;
          line-height: 1.75;
          max-width: 560px;
          margin: 0 0 22px;
        }
        .med-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
        }
        .med-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 20px;
          border-radius: 14px;
          font-weight: 800;
          text-decoration: none;
          border: 1px solid transparent;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            background 0.25s ease, color 0.25s ease;
        }
        .med-btn--primary {
          background: linear-gradient(120deg, var(--accent) 0%, var(--accent-dark) 100%);
          color: #fff;
          box-shadow: 0 16px 34px ${palette.glow22};
        }
        .med-btn--primary:hover {
          transform: translateY(-2px);
          color: #fff;
          box-shadow: 0 18px 42px ${palette.tint26};
        }
        .med-btn--ghost {
          background: rgba(255, 255, 255, 0.55);
          color: var(--ink);
          border-color: rgba(18, 23, 39, 0.12);
          backdrop-filter: blur(10px);
        }
        .med-btn--ghost:hover {
          transform: translateY(-2px);
          color: var(--ink);
          border-color: rgba(18, 23, 39, 0.18);
        }
        .med-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          max-width: 560px;
        }
        .med-stat {
          border-radius: 16px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(18, 23, 39, 0.1);
          box-shadow: 0 10px 30px rgba(18, 23, 39, 0.06);
        }
        .med-stat__v {
          font-weight: 900;
          font-size: 1.25rem;
          margin-bottom: 2px;
          letter-spacing: -0.02em;
          background: linear-gradient(120deg, var(--accent) 0%, var(--accent-dark) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .med-stat__l {
          font-size: 0.86rem;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.35;
        }
        .med-visual {
          position: relative;
          padding: 10px 0 14px;
        }
        .med-visual__frame {
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(18, 23, 39, 0.1);
          box-shadow: 0 34px 70px rgba(18, 23, 39, 0.12);
          background: #fff;
        }
        .med-visual__frame img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
        }
        .med-visual__glass {
          position: absolute;
          inset: 16px;
          border-radius: 22px;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02));
          border: 1px solid ${palette.glow18};
          opacity: 0.9;
        }
        .med-section {
          padding: 74px 0;
        }
        .med-section--soft {
          background: linear-gradient(180deg, ${hexToRgba(palette.secondary, 0.16)} 0%, ${hexToRgba(palette.secondary, 0.08)} 100%);
          border-top: 1px solid rgba(18, 23, 39, 0.06);
          border-bottom: 1px solid rgba(18, 23, 39, 0.06);
        }
        .med-head {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 34px;
        }
        .med-head--left {
          text-align: left;
          margin: 0 0 22px;
          max-width: 520px;
        }
        .med-head h2 {
          font-size: clamp(1.65rem, 2.8vw, 2.35rem);
          font-weight: 900;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .med-head p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
          font-size: 1.02rem;
        }
        .med-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        @media (max-width: 991px) {
          .med-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .med-stats { grid-template-columns: 1fr; }
          .med-visual__frame img { height: 360px; }
          .med-hero { padding: 100px 0 54px; }
        }
        @media (max-width: 640px) {
          .med-grid { grid-template-columns: 1fr; }
        }
        .med-card {
          border-radius: 22px;
          background: #fff;
          border: 1px solid rgba(18, 23, 39, 0.1);
          box-shadow: 0 18px 46px rgba(18, 23, 39, 0.08);
          padding: 22px 20px 18px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .med-card__top {
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(90deg, ${palette.tint26}, ${hexToRgba(palette.dark, 0.25)});
        }
        .med-card:hover {
          transform: translateY(-6px);
          border-color: ${palette.tint26};
          box-shadow: 0 26px 70px rgba(18, 23, 39, 0.1);
        }
        .med-card h3 {
          font-size: 1.06rem;
          font-weight: 900;
          margin: 10px 0 8px;
          letter-spacing: -0.01em;
        }
        .med-card p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
          font-size: 0.98rem;
        }
        .med-proof {
          margin-top: 18px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(18, 23, 39, 0.1);
          padding: 22px 22px;
          box-shadow: 0 18px 50px rgba(18, 23, 39, 0.08);
        }
        .med-proof__title {
          font-weight: 900;
          font-size: 1.05rem;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .med-proof__desc {
          color: rgba(18, 23, 39, 0.7);
          line-height: 1.65;
          margin-bottom: 12px;
        }
        .med-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }
        .med-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          color: rgba(18, 23, 39, 0.78);
          line-height: 1.55;
        }
        .med-list__icon {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 0 5px ${palette.tint12};
          margin-top: 7px;
          flex-shrink: 0;
        }
        .med-flow {
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(18, 23, 39, 0.1);
          box-shadow: 0 24px 70px rgba(18, 23, 39, 0.1);
          padding: 18px 20px;
          position: relative;
        }
        .med-flow__row {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 14px;
          padding: 14px 10px 18px;
          position: relative;
        }
        .med-flow__n {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          background: linear-gradient(135deg, ${palette.tint26}, ${hexToRgba(palette.secondary, 0.88)});
          color: rgba(18, 23, 39, 0.92);
          box-shadow: 0 14px 34px ${palette.glow18};
        }
        .med-flow__body h3 {
          margin: 2px 0 6px;
          font-weight: 900;
          font-size: 1.05rem;
        }
        .med-flow__body p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
        }
        .med-flow__line {
          position: absolute;
          left: 36px;
          top: 64px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, ${palette.tint22}, ${hexToRgba(palette.primary, 0)});
        }
        /* APPLICATIONS GRID */
        .med-apps {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }
        @media (max-width: 991px) { .med-apps { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .med-apps { grid-template-columns: 1fr; } }
        .med-app {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(18, 23, 39, 0.1);
          border-radius: 18px;
          padding: 20px 18px 18px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
        }
        .med-app::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(380px 200px at 100% 0%, ${palette.tint12}, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .med-app:hover {
          transform: translateY(-4px);
          border-color: ${palette.tint26};
          box-shadow: 0 22px 56px rgba(18, 23, 39, 0.1);
        }
        .med-app:hover::before { opacity: 1; }
        .med-app__num {
          font-family: 'Manrope', sans-serif;
          font-weight: 900;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          color: var(--accent);
          background: ${palette.tint12};
          padding: 6px 10px; border-radius: 8px;
          display: inline-block;
          margin-bottom: 12px;
        }
        .med-app h3 {
          font-family: 'Manrope', sans-serif;
          font-weight: 900;
          font-size: 1rem;
          color: var(--ink);
          margin: 0 0 6px;
          line-height: 1.3;
          letter-spacing: -0.01em;
          position: relative; z-index: 1;
        }
        .med-app p {
          font-size: 0.92rem;
          line-height: 1.6;
          color: rgba(18, 23, 39, 0.68);
          margin: 0;
          position: relative; z-index: 1;
        }
        /* VERTICALS CHIPS */
        .med-verticals {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        @media (max-width: 991px) { .med-verticals { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .med-verticals { grid-template-columns: 1fr; } }
        .med-vertical {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(18, 23, 39, 0.1);
          border-radius: 14px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .med-vertical:hover {
          transform: translateY(-2px);
          border-color: ${palette.tint26};
          box-shadow: 0 14px 30px rgba(18, 23, 39, 0.08);
        }
        .med-vertical__dot {
          width: 10px; height: 10px;
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 0 5px ${palette.tint12};
          margin-top: 6px;
          flex-shrink: 0;
        }
        .med-vertical__body { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .med-vertical__body strong {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: 0.92rem;
          color: var(--ink);
          letter-spacing: -0.005em;
        }
        .med-vertical__body span {
          font-size: 0.82rem;
          color: rgba(18, 23, 39, 0.65);
          line-height: 1.5;
        }
        .med-cta {
          padding: 62px 0 86px;
          background: #fff;
        }
        .med-cta__inner {
          border-radius: 28px;
          background:
            radial-gradient(900px 420px at 20% 20%, ${palette.tint26}, transparent 55%),
            radial-gradient(900px 420px at 80% 15%, rgba(30, 42, 74, 0.08), transparent 55%),
            linear-gradient(120deg, ${palette.dark} 0%, #1b2440 70%, ${palette.dark} 100%);
          padding: clamp(2rem, 4vw, 3rem);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 28px 80px rgba(18, 23, 39, 0.18);
        }
        .med-cta__inner h2 {
          color: #fff;
          font-weight: 900;
          margin: 0 0 8px;
          font-size: clamp(1.55rem, 2.5vw, 2.1rem);
          letter-spacing: -0.02em;
        }
        .med-cta__inner p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.65;
          max-width: 560px;
        }
        .med-cta__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .med-btn--dark {
          background: linear-gradient(120deg, var(--accent) 0%, var(--accent-dark) 100%);
          color: #fff;
          box-shadow: 0 18px 46px ${palette.glow22};
        }
        .med-btn--dark:hover {
          transform: translateY(-2px);
          color: #fff;
        }
        .med-btn--ghost-dark {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
        }
        .med-btn--ghost-dark:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.26);
          color: rgba(255, 255, 255, 0.96);
        }
      `}</style>
    </Layout>
  );
};

export default SolutionTxlPage;
