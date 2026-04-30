import React, { useEffect, useMemo, useState } from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Link from "next/link";

const footerI18n = {
  fr: {
    followUs: "Suivez-nous :",
    companyTitle: "Notre Entreprise",
    about: "À Propos",
    solutions: "Nos Solutions",
    sectors: "Secteurs d'Activité",
    projects: "Nos Réalisations",
    contact: "Contact",
    contactTitle: "Contactez-nous",
    address: "Adresse",
    email: "Email",
    phone: "Téléphone",
    newsletter: "Newsletter",
    newsletterDesc: "Restez informé sur les dernières innovations en traçabilité et IoT.",
    newsletterPlaceholder: "Votre adresse email",
    newsletterAria: "S'abonner",
    copyright: "Tous droits réservés.",
    privacy: "Politique de confidentialité",
    legal: "Mentions légales",
    brandDesc:
      "Leader tunisien de la traçabilité intelligente. Nous accompagnons les entreprises dans leur transformation digitale grâce à nos solutions RFID, IoT et codes-barres haute performance.",
  },
  en: {
    followUs: "Follow us:",
    companyTitle: "Our Company",
    about: "About",
    solutions: "Our Solutions",
    sectors: "Industry Sectors",
    projects: "Our Projects",
    contact: "Contact",
    contactTitle: "Contact us",
    address: "Address",
    email: "Email",
    phone: "Phone",
    newsletter: "Newsletter",
    newsletterDesc: "Stay informed about the latest RFID and IoT innovations.",
    newsletterPlaceholder: "Your email address",
    newsletterAria: "Subscribe",
    copyright: "All rights reserved.",
    privacy: "Privacy Policy",
    legal: "Legal Notice",
    brandDesc:
      "Tunisian leader in smart traceability. We support companies in their digital transformation through high-performance RFID, IoT and barcode solutions.",
  },
  it: {
    followUs: "Seguici:",
    companyTitle: "La nostra azienda",
    about: "Chi siamo",
    solutions: "Le nostre soluzioni",
    sectors: "Settori",
    projects: "I nostri progetti",
    contact: "Contatto",
    contactTitle: "Contattaci",
    address: "Indirizzo",
    email: "Email",
    phone: "Telefono",
    newsletter: "Newsletter",
    newsletterDesc: "Resta aggiornato sulle ultime innovazioni RFID e IoT.",
    newsletterPlaceholder: "Il tuo indirizzo email",
    newsletterAria: "Iscriviti",
    copyright: "Tutti i diritti riservati.",
    privacy: "Politica sulla privacy",
    legal: "Note legali",
    brandDesc:
      "Leader tunisino nella tracciabilità intelligente. Supportiamo le aziende nella trasformazione digitale con soluzioni RFID, IoT e codici a barre ad alte prestazioni.",
  },
};

const i18n = {
  fr: {
    metaTitle: "Solution Hôtellerie | RFIDIA",
    metaDesc:
      "Expérience client fluide, opérations maîtrisées : traçabilité RFID et automatisation pour l’hôtellerie (linge, équipements, accès, maintenance).",
    navbar: {
      home: "Accueil",
      about: "À propos",
      solutions: "Solutions",
      services: "Services",
      contact: "Contactez-nous",
      company: "Entreprise",
      usefulLinks: "Liens utiles",
      usefulPages: "Pages utiles",
      language: "Langue",
      french: "Français",
      english: "English",
      italian: "Italiano",
    },
    heroEyebrow: "Hôtellerie • Excellence opérationnelle",
    heroTitleA: "Des opérations",
    heroTitleB: "invisibles",
    heroTitleC: "pour un service remarquable",
    heroSub:
      "RFIDIA aide les hôtels à gagner en qualité et en rapidité : gestion du linge, traçabilité des équipements, inventaires rapides et indicateurs utiles — avec un déploiement discret, pensé pour l’expérience client.",
    heroCta1: "Parler à un expert",
    heroCta2: "Voir toutes les solutions",
    kpis: [
      { v: "-30%", l: "Temps d’inventaire" },
      { v: "+25%", l: "Disponibilité du linge" },
      { v: "-40%", l: "Pertes & écarts" },
    ],
    stackTitle: "Une solution pensée pour le terrain",
    stackDesc:
      "Une approche hôtelière : des process simples, une visibilité immédiate, et une intégration progressive.",
    stack: [
      {
        title: "Linge & blanchisserie",
        desc: "Suivi des cycles, contrôle des sorties/retours, amélioration de la disponibilité et réduction des pertes.",
      },
      {
        title: "Équipements & minibar",
        desc: "Traçabilité des équipements mobiles, rationalisation des stocks et alertes utiles sur les manquants.",
      },
      {
        title: "Accès & zones sensibles",
        desc: "Contrôle d’accès selon les rôles, journalisation, et conformité pour les espaces techniques.",
      },
      {
        title: "Maintenance & interventions",
        desc: "Historique des mouvements, suivi des interventions, et visibilité sur l’état du parc d’équipements.",
      },
    ],
    flowTitle: "Du détail au pilotage",
    flowDesc:
      "Une chaîne simple, sans friction, pour améliorer l’efficacité sans perturber les opérations.",
    flow: [
      { n: "01", t: "Identifier", d: "Étiquetage RFID et référentiel des actifs (linge, équipements, zones)." },
      { n: "02", t: "Lire", d: "Lectures mobiles ou points fixes selon vos flux (étages, lingerie, quais)." },
      { n: "03", t: "Contrôler", d: "Règles & contrôles : complétude, anomalies, alertes utiles." },
      { n: "04", t: "Décider", d: "Tableaux de bord clairs : stocks, disponibilités, écarts, tendances." },
    ],
    highlightTitle: "Pourquoi ça marche dans l’hôtellerie",
    highlightDesc:
      "On optimise ce qui compte : disponibilité, qualité de service, et tranquillité opérationnelle.",
    highlights: [
      "Process discrets, sans impact sur le client",
      "Données exploitables par les équipes (Housekeeping, F&B, Maintenance)",
      "Inventaires rapides et réconciliation fiable",
      "Montée en charge progressive (pilot → déploiement)",
    ],
    ctaTitle: "Construisons une expérience opérationnelle premium",
    ctaSub:
      "Partagez votre typologie d’hôtel, vos volumes linge et vos flux : nous proposons un plan clair, réaliste et adapté.",
    ctaBtn: "Contactez RFIDIA",
    ctaAlt: "Retour à l’accueil solutions",
  },
  en: {
    metaTitle: "Hospitality Solution | RFIDIA",
    metaDesc:
      "Smooth guest experience, controlled operations: RFID traceability & automation for hospitality (linen, equipment, access, maintenance).",
    navbar: {
      home: "Home",
      about: "About",
      solutions: "Solutions",
      services: "Services",
      contact: "Contact us",
      company: "Company",
      usefulLinks: "Useful links",
      usefulPages: "Useful pages",
      language: "Language",
      french: "French",
      english: "English",
      italian: "Italian",
    },
    heroEyebrow: "Hospitality • Operational excellence",
    heroTitleA: "Invisible",
    heroTitleB: "operations",
    heroTitleC: "for remarkable service",
    heroSub:
      "RFIDIA helps hotels improve quality and speed: linen management, equipment traceability, faster inventories and clear KPIs — with a discreet rollout designed around the guest experience.",
    heroCta1: "Talk to an expert",
    heroCta2: "All solutions",
    kpis: [
      { v: "-30%", l: "Inventory time" },
      { v: "+25%", l: "Linen availability" },
      { v: "-40%", l: "Losses & gaps" },
    ],
    stackTitle: "Designed for real hotel operations",
    stackDesc:
      "A hospitality-first approach: simple processes, instant visibility and progressive integration.",
    stack: [
      {
        title: "Linen & laundry",
        desc: "Track cycles, control outbound/returns, improve availability and reduce losses.",
      },
      {
        title: "Equipment & minibar",
        desc: "Trace mobile equipment, rationalize stocks and trigger helpful missing-item alerts.",
      },
      {
        title: "Access & sensitive areas",
        desc: "Role-based access control, logging and compliance for technical spaces.",
      },
      {
        title: "Maintenance & interventions",
        desc: "Movement history, intervention tracking and visibility on equipment fleet status.",
      },
    ],
    flowTitle: "From details to control",
    flowDesc:
      "A simple chain that improves efficiency without disrupting daily operations.",
    flow: [
      { n: "01", t: "Identify", d: "RFID labeling and master data for assets (linen, equipment, zones)." },
      { n: "02", t: "Read", d: "Mobile reads or fixed points depending on your flows (floors, laundry, docks)." },
      { n: "03", t: "Control", d: "Rules & checks: completeness, anomalies, meaningful alerts." },
      { n: "04", t: "Decide", d: "Clean dashboards: stocks, availability, gaps and trends." },
    ],
    highlightTitle: "Why it fits hospitality",
    highlightDesc:
      "We optimize what matters: availability, service quality and operational peace of mind.",
    highlights: [
      "Discreet processes with no guest impact",
      "Actionable data for teams (Housekeeping, F&B, Maintenance)",
      "Fast inventories and reliable reconciliation",
      "Progressive scale-up (pilot → rollout)",
    ],
    ctaTitle: "Let’s build premium operations",
    ctaSub:
      "Share your hotel profile, linen volumes and flows — we’ll provide a clear, realistic plan.",
    ctaBtn: "Contact RFIDIA",
    ctaAlt: "Back to solutions hub",
  },
  it: {
    metaTitle: "Soluzione Ospitalità | RFIDIA",
    metaDesc:
      "Esperienza ospite fluida, operazioni sotto controllo: tracciabilità RFID e automazione per ospitalità (biancheria, attrezzature, accessi, manutenzione).",
    navbar: {
      home: "Home",
      about: "Chi siamo",
      solutions: "Soluzioni",
      services: "Servizi",
      contact: "Contattaci",
      company: "Azienda",
      usefulLinks: "Link utili",
      usefulPages: "Pagine utili",
      language: "Lingua",
      french: "Francese",
      english: "Inglese",
      italian: "Italiano",
    },
    heroEyebrow: "Ospitalità • Eccellenza operativa",
    heroTitleA: "Operazioni",
    heroTitleB: "invisibili",
    heroTitleC: "per un servizio eccellente",
    heroSub:
      "RFIDIA aiuta gli hotel a migliorare qualità e velocità: gestione biancheria, tracciabilità attrezzature, inventari rapidi e KPI chiari — con rollout discreto pensato per l’esperienza ospite.",
    heroCta1: "Parla con un esperto",
    heroCta2: "Tutte le soluzioni",
    kpis: [
      { v: "-30%", l: "Tempo inventario" },
      { v: "+25%", l: "Disponibilità biancheria" },
      { v: "-40%", l: "Perdite & gap" },
    ],
    stackTitle: "Pensata per le operations",
    stackDesc:
      "Approccio hospitality-first: processi semplici, visibilità immediata e integrazione progressiva.",
    stack: [
      {
        title: "Biancheria & lavanderia",
        desc: "Traccia i cicli, controlla uscite/rientri, migliora disponibilità e riduci perdite.",
      },
      {
        title: "Attrezzature & minibar",
        desc: "Tracciamento attrezzature mobili, razionalizzazione stock e alert su mancanze.",
      },
      {
        title: "Accessi & aree sensibili",
        desc: "Controllo accessi per ruoli, log e conformità per aree tecniche.",
      },
      {
        title: "Manutenzione & interventi",
        desc: "Storico movimenti, tracking interventi e visibilità sul parco attrezzature.",
      },
    ],
    flowTitle: "Dal dettaglio al controllo",
    flowDesc:
      "Una catena semplice per aumentare efficienza senza interrompere le attività quotidiane.",
    flow: [
      { n: "01", t: "Identifica", d: "Etichettatura RFID e anagrafiche asset (biancheria, attrezzature, zone)." },
      { n: "02", t: "Leggi", d: "Letture mobili o punti fissi secondo i flussi (piani, lavanderia, dock)." },
      { n: "03", t: "Controlla", d: "Regole e check: completezza, anomalie, alert utili." },
      { n: "04", t: "Decidi", d: "Dashboard chiare: stock, disponibilità, gap e trend." },
    ],
    highlightTitle: "Perché funziona in hotel",
    highlightDesc:
      "Ottimizziamo ciò che conta: disponibilità, qualità servizio e serenità operativa.",
    highlights: [
      "Processi discreti, senza impatto sull’ospite",
      "Dati utili per i team (Housekeeping, F&B, Maintenance)",
      "Inventari rapidi e riconciliazione affidabile",
      "Scalabilità progressiva (pilot → rollout)",
    ],
    ctaTitle: "Costruiamo operations premium",
    ctaSub:
      "Condividi profilo hotel, volumi biancheria e flussi: proponiamo un piano chiaro e realistico.",
    ctaBtn: "Contatta RFIDIA",
    ctaAlt: "Torna alle soluzioni",
  },
};

const SolutionHotellerie = () => {
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

  const t = i18n[language] || i18n.fr;
  const footerT = footerI18n[language] || footerI18n.fr;

  const accent = useMemo(
    () => ({
      primary: "#7B5EA7",
      primary2: "#B59AD9",
      ink: "#121727",
      soft: "#FAF7F0",
      line: "rgba(18, 23, 39, 0.10)",
    }),
    []
  );

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar language={language} onLanguageChange={setLanguage} labels={t.navbar} />

      <main className="htl">
        {/* HERO (no blue background) */}
        <section className="htl-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="htl-eyebrow">{t.heroEyebrow}</div>
                <h1 className="htl-title">
                  {t.heroTitleA} <span className="htl-title__accent">{t.heroTitleB}</span>
                  <br />
                  {t.heroTitleC}
                </h1>
                <p className="htl-sub">{t.heroSub}</p>

                <div className="htl-actions">
                  <Link href="/contact-us" passHref>
                    <a className="htl-btn htl-btn--primary">{t.heroCta1}</a>
                  </Link>
                  <Link href="/it-solution" passHref>
                    <a className="htl-btn htl-btn--ghost">{t.heroCta2}</a>
                  </Link>
                </div>

                <div className="htl-kpis">
                  {t.kpis.map((k) => (
                    <div className="htl-kpi" key={k.l}>
                      <div className="htl-kpi__v">{k.v}</div>
                      <div className="htl-kpi__l">{k.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="htl-visual">
                  <div className="htl-visual__frame">
                    <img src="/a_rfidia/z_rfid/rfid14.png" alt="" />
                  </div>
                  <div className="htl-chip htl-chip--tl">
                    <span className="htl-chip__dot" />
                    {t.kpis[1]?.l}
                  </div>
                  <div className="htl-chip htl-chip--br">
                    <span className="htl-chip__dot" />
                    {t.kpis[0]?.l}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className="htl-section">
          <div className="container">
            <div className="htl-head">
              <h2>{t.stackTitle}</h2>
              <p>{t.stackDesc}</p>
            </div>

            <div className="htl-stack">
              {t.stack.map((s) => (
                <article className="htl-card" key={s.title}>
                  <div className="htl-card__accent" aria-hidden />
                  <div className="htl-card__content">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FLOW */}
        <section className="htl-section htl-section--soft">
          <div className="container">
            <div className="htl-head htl-head--wide">
              <h2>{t.flowTitle}</h2>
              <p>{t.flowDesc}</p>
            </div>

            <div className="row g-5 align-items-stretch htl-flow-grid">
              <div className="col-lg-5">
                <div className="htl-highlight htl-highlight--panel">
                  <div className="htl-highlight__title">{t.highlightTitle}</div>
                  <div className="htl-highlight__desc">{t.highlightDesc}</div>
                  <ul className="htl-list">
                    {t.highlights.map((x) => (
                      <li key={x}>
                        <span className="htl-list__icon" aria-hidden>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M20 6L9 17l-5-5"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="htl-flow htl-flow--panel">
                  {t.flow.map((f, idx) => (
                    <div className="htl-flow__row" key={f.n}>
                      <div className="htl-flow__n">{f.n}</div>
                      <div className="htl-flow__body">
                        <h3>{f.t}</h3>
                        <p>{f.d}</p>
                      </div>
                      {idx < t.flow.length - 1 && <div className="htl-flow__line" aria-hidden />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="htl-cta">
          <div className="container">
            <div className="htl-cta__inner">
              <div>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaSub}</p>
              </div>
              <div className="htl-cta__actions">
                <Link href="/contact-us" passHref>
                  <a className="htl-btn htl-btn--dark">{t.ctaBtn}</a>
                </Link>
                <Link href="/it-solution" passHref>
                  <a className="htl-btn htl-btn--ghost-dark">{t.ctaAlt}</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer footerGradient translations={footerT} />

      <style jsx>{`
        .htl {
          --accent: ${accent.primary};
          --accent2: ${accent.primary2};
          --ink: ${accent.ink};
          --soft: ${accent.soft};
          --line: ${accent.line};
          color: var(--ink);
          background: #fff;
          font-family: "Manrope", sans-serif;
        }

        /* HERO: white/cream, no blue */
        .htl-hero {
          padding: 110px 0 70px;
          background: radial-gradient(1000px 380px at 15% 10%, rgba(123, 94, 167, 0.18), transparent 60%),
            radial-gradient(900px 420px at 85% 20%, rgba(78, 200, 200, 0.12), transparent 58%),
            linear-gradient(180deg, #ffffff 0%, #ffffff 60%, rgba(250, 247, 240, 0.6) 100%);
          border-bottom: 1px solid rgba(18, 23, 39, 0.06);
        }

        .htl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(18, 23, 39, 0.65);
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(123, 94, 167, 0.10);
          border: 1px solid rgba(123, 94, 167, 0.22);
          width: fit-content;
          margin-bottom: 18px;
        }

        .htl-title {
          font-size: clamp(2.1rem, 4.5vw, 3.85rem);
          font-weight: 900;
          line-height: 1.12;
          margin: 0 0 18px;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .htl-title__accent {
          background: linear-gradient(120deg, var(--accent) 0%, var(--accent2) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .htl-sub {
          color: rgba(18, 23, 39, 0.72);
          font-size: 1.06rem;
          line-height: 1.75;
          max-width: 560px;
          margin: 0 0 22px;
        }

        .htl-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
        }
        .htl-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 20px;
          border-radius: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease;
          border: 1px solid transparent;
          white-space: nowrap;
        }
        .htl-btn--primary {
          background: linear-gradient(120deg, var(--accent) 0%, #5b4190 100%);
          color: #ffffff;
          box-shadow: 0 16px 34px rgba(123, 94, 167, 0.22);
        }
        .htl-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 42px rgba(123, 94, 167, 0.28);
          color: #ffffff;
        }
        .htl-btn--ghost {
          background: rgba(255, 255, 255, 0.55);
          color: var(--ink);
          border-color: rgba(18, 23, 39, 0.12);
          backdrop-filter: blur(10px);
        }
        .htl-btn--ghost:hover {
          transform: translateY(-2px);
          border-color: rgba(18, 23, 39, 0.18);
          color: var(--ink);
        }

        .htl-kpis {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          max-width: 520px;
        }
        .htl-kpi {
          border-radius: 16px;
          padding: 14px 14px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 10px 30px rgba(18, 23, 39, 0.06);
        }
        .htl-kpi__v {
          font-weight: 900;
          font-size: 1.25rem;
          color: var(--ink);
          margin-bottom: 2px;
          letter-spacing: -0.02em;
        }
        .htl-kpi__l {
          font-size: 0.86rem;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.35;
        }

        .htl-visual {
          position: relative;
          padding: 10px 0 14px;
        }
        .htl-visual__frame {
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 34px 70px rgba(18, 23, 39, 0.12);
          background: #fff;
        }
        .htl-visual__frame img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
          filter: saturate(1.02) contrast(1.02);
        }

        .htl-chip {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.70);
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 14px 40px rgba(18, 23, 39, 0.10);
          font-weight: 800;
          font-size: 0.85rem;
          color: rgba(18, 23, 39, 0.78);
          backdrop-filter: blur(10px);
        }
        .htl-chip__dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 0 4px rgba(123, 94, 167, 0.18);
        }
        .htl-chip--tl {
          top: 22px;
          left: 18px;
        }
        .htl-chip--br {
          bottom: 22px;
          right: 18px;
        }

        .htl-section {
          padding: 74px 0;
        }
        .htl-section--soft {
          background: linear-gradient(180deg, rgba(250, 247, 240, 0.95) 0%, rgba(250, 247, 240, 0.55) 100%);
          border-top: 1px solid rgba(18, 23, 39, 0.06);
          border-bottom: 1px solid rgba(18, 23, 39, 0.06);
        }

        .htl-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 34px;
        }
        .htl-head--left {
          text-align: left;
          margin: 0 0 22px;
          max-width: 520px;
        }
        .htl-head--wide {
          max-width: 740px;
          margin: 0 auto 34px;
        }
        .htl-head h2 {
          font-size: clamp(1.65rem, 2.8vw, 2.35rem);
          font-weight: 900;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .htl-head p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
          font-size: 1.02rem;
        }

        .htl-stack {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }
        .htl-stack > * {
          height: 100%;
        }
        @media (max-width: 991px) {
          .htl-stack {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 991px) {
          .htl-stack {
            grid-template-columns: 1fr;
          }
          .htl-kpis {
            grid-template-columns: 1fr;
          }
          .htl-visual__frame img {
            height: 360px;
          }
          .htl-hero {
            padding: 100px 0 54px;
          }
        }

        .htl-card {
          border-radius: 16px;
          background: #fff;
          border: 1px solid rgba(18, 23, 39, 0.06);
          box-shadow: 0 12px 30px rgba(18, 23, 39, 0.06);
          padding: 22px 20px;
          position: relative;
          overflow: hidden;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
          display: flex;
          gap: 12px;
          align-items: stretch;
          height: 100%;
        }
        .htl-card__accent {
          width: 6px;
          height: 56px;
          border-radius: 8px;
          flex: 0 0 auto;
          background: linear-gradient(180deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 6px 18px rgba(123, 94, 167, 0.12);
        }
        .htl-card__content {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .htl-card:hover {
          transform: translateY(-6px);
          border-color: rgba(123, 94, 167, 0.16);
          box-shadow: 0 28px 70px rgba(18, 23, 39, 0.10);
        }
        .htl-card h3 {
          font-size: 1.02rem;
          font-weight: 900;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }
        .htl-card p {
          margin: 0;
          color: rgba(18, 23, 39, 0.74);
          line-height: 1.6;
          font-size: 0.975rem;
        }

        .htl-highlight {
          margin: 0;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(18, 23, 39, 0.08);
          padding: 22px 20px;
          box-shadow: 0 16px 42px rgba(18, 23, 39, 0.08);
          align-self: stretch;
          width: 100%;
          min-height: 360px;
        }
        .htl-highlight--panel,
        .htl-flow--panel {
          height: 100%;
        }
        .htl-flow-grid > [class*="col-"] {
          display: flex;
        }
        .htl-highlight__title {
          font-weight: 900;
          font-size: 1.05rem;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .htl-highlight__desc {
          color: rgba(18, 23, 39, 0.70);
          line-height: 1.65;
          margin-bottom: 12px;
        }

        .htl-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }
        .htl-list li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: rgba(18, 23, 39, 0.78);
          line-height: 1.55;
        }
        .htl-list__icon {
          width: 30px;
          height: 30px;
          border-radius: 10px;
          background: rgba(123, 94, 167, 0.14);
          color: rgba(18, 23, 39, 0.85);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          border: 1px solid rgba(123, 94, 167, 0.20);
        }

        .htl-flow {
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(18, 23, 39, 0.08);
          box-shadow: 0 16px 44px rgba(18, 23, 39, 0.08);
          padding: 22px 20px;
          position: relative;
          align-self: stretch;
          width: 100%;
          min-height: 360px;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 991px) {
          .htl-highlight {
            margin-top: 18px;
            min-height: auto;
          }

          .htl-flow {
            min-height: auto;
          }
        }
        .htl-flow__row {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 14px;
          padding: 12px 10px 16px;
          position: relative;
          align-items: start;
        }
        .htl-flow__n {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          background: linear-gradient(135deg, rgba(123, 94, 167, 0.95), rgba(181, 154, 217, 0.88));
          color: rgba(255, 255, 255, 0.96);
          box-shadow: 0 10px 26px rgba(123, 94, 167, 0.16);
        }
        .htl-flow__body h3 {
          margin: 2px 0 6px;
          font-weight: 900;
          font-size: 1.05rem;
        }
        .htl-flow__body p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
        }
        .htl-flow__line {
          position: absolute;
          left: 36px;
          top: 52px;
          bottom: 8px;
          width: 2px;
          background: linear-gradient(180deg, rgba(123, 94, 167, 0.42), rgba(123, 94, 167, 0));
        }

        .htl-cta {
          padding: 62px 0 86px;
          background: #fff;
        }
        .htl-cta__inner {
          border-radius: 28px;
          background: radial-gradient(900px 420px at 20% 20%, rgba(123, 94, 167, 0.22), transparent 55%),
            radial-gradient(900px 420px at 80% 15%, rgba(78, 200, 200, 0.10), transparent 55%),
            linear-gradient(120deg, #121727 0%, #1b2440 70%, #121727 100%);
          padding: clamp(2rem, 4vw, 3rem);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          border: 1px solid rgba(255, 255, 255, 0.10);
          box-shadow: 0 28px 80px rgba(18, 23, 39, 0.18);
        }
        .htl-cta__inner h2 {
          color: #fff;
          font-weight: 900;
          margin: 0 0 8px;
          font-size: clamp(1.55rem, 2.5vw, 2.1rem);
          letter-spacing: -0.02em;
        }
        .htl-cta__inner p {
          margin: 0;
          color: rgba(255, 255, 255, 0.80);
          line-height: 1.65;
          max-width: 520px;
        }
        .htl-cta__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .htl-btn--dark {
          background: linear-gradient(120deg, var(--accent) 0%, #5b4190 100%);
          color: #ffffff;
          box-shadow: 0 18px 46px rgba(123, 94, 167, 0.22);
        }
        .htl-btn--dark:hover {
          transform: translateY(-2px);
          color: #ffffff;
        }
        .htl-btn--ghost-dark {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
        }
        .htl-btn--ghost-dark:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.26);
          color: rgba(255, 255, 255, 0.96);
        }
      `}</style>
    </Layout>
  );
};

export default SolutionHotellerie;

