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
    metaTitle: "Solution Textile | RFIDIA",
    metaDesc:
      "Traçabilité textile de bout en bout : production, qualité, stock, omnicanal, lutte anti-contrefaçon et expérience client renforcée.",
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
    heroEyebrow: "Textile • Traçabilité & performance",
    heroTitleA: "Chaque pièce",
    heroTitleB: "traçable",
    heroTitleC: "du fil à la vente",
    heroSub:
      "RFIDIA connecte vos ateliers, vos entrepôts et vos points de vente avec une traçabilité unitaire fiable. Résultat : inventaires rapides, meilleure disponibilité des tailles/couleurs, réduction des pertes, et une expérience client plus fluide.",
    heroCta1: "Obtenir une démo",
    heroCta2: "Voir toutes les solutions",
    kpis: [
      { v: "x10", l: "Vitesse d’inventaire" },
      { v: "+15%", l: "Disponibilité en rayon" },
      { v: "-35%", l: "Pertes & inconnus" },
    ],
    modulesTitle: "Des modules qui couvrent toute la chaîne textile",
    modulesDesc:
      "De la production à l’omnicanal : vous déployez par étapes, avec un ROI mesurable à chaque étape.",
    modules: [
      {
        title: "Traçabilité unitaire (EPC)",
        desc: "Identifiant unique par article, association à vos référentiels (SKU, lot, taille, couleur) et historisation des mouvements.",
      },
      {
        title: "Contrôle qualité & conformité",
        desc: "Contrôles en sortie de ligne, détection des écarts, et sécurisation des étapes sensibles (reconditionnement, retours).",
      },
      {
        title: "Stock & inventaires rapides",
        desc: "Inventaires tournants sans immobiliser l’activité, fiabilisation des stocks et réduction des ruptures.",
      },
      {
        title: "Préparation & expédition",
        desc: "Lecture groupée, contrôle de complétude des colis, réduction des erreurs de préparation et preuve d’expédition.",
      },
      {
        title: "Retail : réception & mise en rayon",
        desc: "Réception accélérée, localisation en réserve/rayon, et meilleure disponibilité des tailles/couleurs pour le client.",
      },
      {
        title: "Anti-contrefaçon & authenticité",
        desc: "Mécanismes d’authentification possibles (selon vos choix) et lutte contre les articles non conformes dans la chaîne.",
      },
    ],
    journeyTitle: "Un parcours simple, des gains immédiats",
    journeyDesc:
      "Une logique “scan & go” pour les équipes : moins de saisie, plus de fiabilité et de pilotage.",
    journey: [
      { n: "01", t: "Encoder", d: "Encodage RFID au bon moment (atelier, dépôt, réception) selon votre process." },
      { n: "02", t: "Synchroniser", d: "Connexion à vos données produit (SKU, variantes, commandes, retours)." },
      { n: "03", t: "Lire & contrôler", d: "Lectures rapides pour inventaires, expédition et réception, avec règles d’écarts." },
      { n: "04", t: "Piloter", d: "Dashboards : disponibilité, écarts, rotation, retours, performance opérationnelle." },
    ],
    proofTitle: "Pourquoi vos clients adhèrent",
    proofDesc:
      "Parce que la promesse est simple : trouver le bon produit plus vite, avec moins d’erreurs, et un service plus fiable.",
    proofs: [
      "Meilleure disponibilité des tailles/couleurs (moins de ventes perdues)",
      "Réduction des écarts et des pertes (traçabilité unitaire)",
      "Réception et inventaires plus rapides (efficacité terrain)",
      "Qualité de données améliorée pour l’omnicanal (click&collect, retours)",
    ],
    ctaTitle: "Prêt à rendre votre chaîne textile plus performante ?",
    ctaSub:
      "Décrivez vos sites (atelier, dépôt, boutiques), vos volumes et vos objectifs : nous vous proposons un plan de déploiement clair et progressif.",
    ctaBtn: "Contactez RFIDIA",
    ctaAlt: "Retour à l’accueil solutions",
  },
  en: {
    metaTitle: "Textile Solution | RFIDIA",
    metaDesc:
      "End-to-end textile traceability: production, quality, stock, omnichannel, anti-counterfeit and stronger customer experience.",
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
    heroEyebrow: "Textile • Traceability & performance",
    heroTitleA: "Every item",
    heroTitleB: "traceable",
    heroTitleC: "from production to retail",
    heroSub:
      "RFIDIA connects your factories, warehouses and stores with reliable item-level traceability. Faster inventories, better size/color availability, fewer losses and a smoother customer experience.",
    heroCta1: "Get a demo",
    heroCta2: "All solutions",
    kpis: [
      { v: "x10", l: "Inventory speed" },
      { v: "+15%", l: "On-shelf availability" },
      { v: "-35%", l: "Losses & unknowns" },
    ],
    modulesTitle: "Modules covering the entire textile chain",
    modulesDesc: "From production to omnichannel: roll out step-by-step with measurable ROI.",
    modules: [
      {
        title: "Item-level traceability (EPC)",
        desc: "Unique ID per item, linkage to your master data (SKU, variants) and auditable movement history.",
      },
      {
        title: "Quality & compliance",
        desc: "End-of-line checks, discrepancy detection and secured sensitive steps (repackaging, returns).",
      },
      {
        title: "Stock & fast counts",
        desc: "Cycle counts without operational shutdown, improved stock accuracy and fewer stock-outs.",
      },
      {
        title: "Picking & shipping",
        desc: "Bulk reads, carton completeness checks, fewer picking errors and shipping proof.",
      },
      {
        title: "Retail receiving & shelf",
        desc: "Faster receiving, backroom/shelf visibility and improved size/color availability for shoppers.",
      },
      {
        title: "Anti-counterfeit & authenticity",
        desc: "Optional authenticity mechanisms (depending on your choices) to reduce non-compliant items.",
      },
    ],
    journeyTitle: "Simple journey, fast wins",
    journeyDesc: "A scan-and-go logic for teams: less typing, more accuracy and control.",
    journey: [
      { n: "01", t: "Encode", d: "RFID encoding at the right step (factory, DC, receiving) based on your process." },
      { n: "02", t: "Sync", d: "Connect to product data (SKU, variants), orders and returns." },
      { n: "03", t: "Read & control", d: "Fast reads for inventory, shipping and receiving with discrepancy rules." },
      { n: "04", t: "Operate", d: "Dashboards: availability, gaps, rotation, returns and operational performance." },
    ],
    proofTitle: "Why customers adopt it",
    proofDesc: "Because the promise is simple: find the right product faster with fewer mistakes.",
    proofs: [
      "Better size/color availability (fewer lost sales)",
      "Lower gaps and losses (item-level traceability)",
      "Faster receiving and inventories (floor efficiency)",
      "Cleaner data for omnichannel (click&collect, returns)",
    ],
    ctaTitle: "Ready to level up your textile supply chain?",
    ctaSub:
      "Share your sites (factory, DC, stores), volumes and objectives — we’ll propose a clear, progressive rollout plan.",
    ctaBtn: "Contact RFIDIA",
    ctaAlt: "Back to solutions hub",
  },
  it: {
    metaTitle: "Soluzione Tessile | RFIDIA",
    metaDesc:
      "Tracciabilità tessile end-to-end: produzione, qualità, stock, omnicanale, anti-contraffazione ed esperienza cliente.",
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
    heroEyebrow: "Tessile • Tracciabilità & performance",
    heroTitleA: "Ogni capo",
    heroTitleB: "tracciabile",
    heroTitleC: "dalla produzione alla vendita",
    heroSub:
      "RFIDIA collega fabbriche, magazzini e punti vendita con tracciabilità unitaria affidabile. Inventari più rapidi, migliore disponibilità taglie/colori, meno perdite e un’esperienza cliente più fluida.",
    heroCta1: "Richiedi una demo",
    heroCta2: "Tutte le soluzioni",
    kpis: [
      { v: "x10", l: "Velocità inventario" },
      { v: "+15%", l: "Disponibilità a scaffale" },
      { v: "-35%", l: "Perdite & gap" },
    ],
    modulesTitle: "Moduli per tutta la filiera tessile",
    modulesDesc: "Dalla produzione all’omnicanale: rollout a fasi con ROI misurabile.",
    modules: [
      {
        title: "Tracciabilità unitaria (EPC)",
        desc: "ID unico per capo, collegamento ai dati master (SKU, varianti) e storico movimenti auditabile.",
      },
      {
        title: "Qualità & conformità",
        desc: "Check fine linea, rilevazione scostamenti e sicurezza su fasi sensibili (repack, resi).",
      },
      {
        title: "Stock & inventari rapidi",
        desc: "Cycle count senza fermo, stock più accurato e meno rotture.",
      },
      {
        title: "Picking & spedizione",
        desc: "Letture massiva, controllo completezza colli, meno errori di preparazione e prova spedizione.",
      },
      {
        title: "Retail: ricevimento & scaffale",
        desc: "Ricevimento più veloce, visibilità backroom/scaffale e migliore disponibilità taglie/colori.",
      },
      {
        title: "Anti-contraffazione & autenticità",
        desc: "Meccanismi opzionali (secondo le scelte) per ridurre articoli non conformi lungo la catena.",
      },
    ],
    journeyTitle: "Percorso semplice, benefici immediati",
    journeyDesc: "Logica scan&go: meno inserimenti manuali, più affidabilità e controllo.",
    journey: [
      { n: "01", t: "Codifica", d: "Codifica RFID nel punto giusto (fabbrica, DC, ricevimento) secondo il processo." },
      { n: "02", t: "Sincronizza", d: "Connessione a dati prodotto (SKU, varianti), ordini e resi." },
      { n: "03", t: "Leggi & controlla", d: "Letture rapide per inventario, spedizione e ricevimento con regole scostamenti." },
      { n: "04", t: "Governa", d: "Dashboard: disponibilità, gap, rotazione, resi e performance operative." },
    ],
    proofTitle: "Perché i clienti la adottano",
    proofDesc: "Promessa semplice: trovare il prodotto giusto più velocemente, con meno errori.",
    proofs: [
      "Maggiore disponibilità taglie/colori (meno vendite perse)",
      "Riduzione gap e perdite (tracciabilità unitaria)",
      "Ricevimento e inventari più veloci (efficienza)",
      "Dati migliori per l’omnicanale (click&collect, resi)",
    ],
    ctaTitle: "Pronto a rendere la filiera tessile più efficiente?",
    ctaSub:
      "Condividi siti (fabbrica, DC, negozi), volumi e obiettivi: proponiamo un piano di rollout chiaro e progressivo.",
    ctaBtn: "Contatta RFIDIA",
    ctaAlt: "Torna alle soluzioni",
  },
};

const SolutionTextile = () => {
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
      primary: "#E0305A",
      primary2: "#FF7A94",
      ink: "#121727",
      soft: "#FFF6F8",
      line: "rgba(18, 23, 39, 0.10)",
    }),
    []
  );

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar language={language} onLanguageChange={setLanguage} labels={t.navbar} />

      <main className="txl">
        {/* HERO (no blue) */}
        <section className="txl-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="txl-eyebrow">{t.heroEyebrow}</div>
                <h1 className="txl-title">
                  {t.heroTitleA} <span className="txl-title__accent">{t.heroTitleB}</span>
                  <br />
                  {t.heroTitleC}
                </h1>
                <p className="txl-sub">{t.heroSub}</p>

                <div className="txl-actions">
                  <Link href="/contact-us" passHref>
                    <a className="txl-btn txl-btn--primary">{t.heroCta1}</a>
                  </Link>
                  <Link href="/it-solution" passHref>
                    <a className="txl-btn txl-btn--ghost">{t.heroCta2}</a>
                  </Link>
                </div>

                <div className="txl-kpis">
                  {t.kpis.map((k) => (
                    <div className="txl-kpi" key={k.l}>
                      <div className="txl-kpi__v">{k.v}</div>
                      <div className="txl-kpi__l">{k.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="txl-visual">
                  <div className="txl-visual__frame">
                    <img src="/a_rfidia/z_rfid/rfid6.png" alt="" />
                  </div>
                  <div className="txl-chip txl-chip--tl">
                    <span className="txl-chip__dot" />
                    {t.kpis[1]?.l}
                  </div>
                  <div className="txl-chip txl-chip--br">
                    <span className="txl-chip__dot" />
                    {t.kpis[0]?.l}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section className="txl-section">
          <div className="container">
            <div className="txl-head">
              <h2>{t.modulesTitle}</h2>
              <p>{t.modulesDesc}</p>
            </div>

            <div className="txl-grid">
              {t.modules.map((m) => (
                <article className="txl-card" key={m.title}>
                  <div className="txl-card__top" />
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY + PROOF */}
        <section className="txl-section txl-section--soft">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <div className="txl-head txl-head--left">
                  <h2>{t.journeyTitle}</h2>
                  <p>{t.journeyDesc}</p>
                </div>

                <div className="txl-proof">
                  <div className="txl-proof__title">{t.proofTitle}</div>
                  <div className="txl-proof__desc">{t.proofDesc}</div>
                  <ul className="txl-list">
                    {t.proofs.map((x) => (
                      <li key={x}>
                        <span className="txl-list__icon" aria-hidden>
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
                <div className="txl-flow">
                  {t.journey.map((f, idx) => (
                    <div className="txl-flow__row" key={f.n}>
                      <div className="txl-flow__n">{f.n}</div>
                      <div className="txl-flow__body">
                        <h3>{f.t}</h3>
                        <p>{f.d}</p>
                      </div>
                      {idx < t.journey.length - 1 && <div className="txl-flow__line" aria-hidden />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="txl-cta">
          <div className="container">
            <div className="txl-cta__inner">
              <div>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaSub}</p>
              </div>
              <div className="txl-cta__actions">
                <Link href="/contact-us" passHref>
                  <a className="txl-btn txl-btn--dark">{t.ctaBtn}</a>
                </Link>
                <Link href="/it-solution" passHref>
                  <a className="txl-btn txl-btn--ghost-dark">{t.ctaAlt}</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer footerGradient translations={footerT} />

      <style jsx>{`
        .txl {
          --accent: ${accent.primary};
          --accent2: ${accent.primary2};
          --ink: ${accent.ink};
          --soft: ${accent.soft};
          --line: ${accent.line};
          color: var(--ink);
          background: #fff;
          font-family: "Manrope", sans-serif;
        }

        /* HERO: white/pink, no blue */
        .txl-hero {
          padding: 110px 0 70px;
          background: radial-gradient(1000px 380px at 15% 10%, rgba(224, 48, 90, 0.16), transparent 60%),
            radial-gradient(900px 420px at 85% 20%, rgba(78, 200, 200, 0.10), transparent 58%),
            linear-gradient(180deg, #ffffff 0%, #ffffff 60%, rgba(255, 246, 248, 0.75) 100%);
          border-bottom: 1px solid rgba(18, 23, 39, 0.06);
        }

        .txl-eyebrow {
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
          background: rgba(224, 48, 90, 0.10);
          border: 1px solid rgba(224, 48, 90, 0.18);
          width: fit-content;
          margin-bottom: 18px;
        }

        .txl-title {
          font-size: clamp(2.1rem, 4.5vw, 3.85rem);
          font-weight: 900;
          line-height: 1.12;
          margin: 0 0 18px;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .txl-title__accent {
          background: linear-gradient(120deg, var(--accent) 0%, var(--accent2) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .txl-sub {
          color: rgba(18, 23, 39, 0.72);
          font-size: 1.06rem;
          line-height: 1.75;
          max-width: 560px;
          margin: 0 0 22px;
        }

        .txl-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
        }
        .txl-btn {
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
        .txl-btn--primary {
          background: linear-gradient(120deg, var(--accent) 0%, #b31538 100%);
          color: #ffffff;
          box-shadow: 0 16px 34px rgba(224, 48, 90, 0.22);
        }
        .txl-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 42px rgba(224, 48, 90, 0.28);
          color: #ffffff;
        }
        .txl-btn--ghost {
          background: rgba(255, 255, 255, 0.55);
          color: var(--ink);
          border-color: rgba(18, 23, 39, 0.12);
          backdrop-filter: blur(10px);
        }
        .txl-btn--ghost:hover {
          transform: translateY(-2px);
          border-color: rgba(18, 23, 39, 0.18);
          color: var(--ink);
        }

        .txl-kpis {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          max-width: 520px;
        }
        .txl-kpi {
          border-radius: 16px;
          padding: 14px 14px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 10px 30px rgba(18, 23, 39, 0.06);
        }
        .txl-kpi__v {
          font-weight: 900;
          font-size: 1.25rem;
          color: var(--ink);
          margin-bottom: 2px;
          letter-spacing: -0.02em;
        }
        .txl-kpi__l {
          font-size: 0.86rem;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.35;
        }

        .txl-visual {
          position: relative;
          padding: 10px 0 14px;
        }
        .txl-visual__frame {
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 34px 70px rgba(18, 23, 39, 0.12);
          background: #fff;
        }
        .txl-visual__frame img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
          filter: saturate(1.02) contrast(1.02);
        }

        .txl-chip {
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
        .txl-chip__dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 0 4px rgba(224, 48, 90, 0.14);
        }
        .txl-chip--tl {
          top: 22px;
          left: 18px;
        }
        .txl-chip--br {
          bottom: 22px;
          right: 18px;
        }

        .txl-section {
          padding: 74px 0;
        }
        .txl-section--soft {
          background: linear-gradient(180deg, rgba(255, 246, 248, 0.95) 0%, rgba(255, 246, 248, 0.55) 100%);
          border-top: 1px solid rgba(18, 23, 39, 0.06);
          border-bottom: 1px solid rgba(18, 23, 39, 0.06);
        }

        .txl-head {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 34px;
        }
        .txl-head--left {
          text-align: left;
          margin: 0 0 22px;
          max-width: 520px;
        }
        .txl-head h2 {
          font-size: clamp(1.65rem, 2.8vw, 2.35rem);
          font-weight: 900;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .txl-head p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
          font-size: 1.02rem;
        }

        .txl-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        @media (max-width: 991px) {
          .txl-grid {
            grid-template-columns: 1fr;
          }
          .txl-kpis {
            grid-template-columns: 1fr;
          }
          .txl-visual__frame img {
            height: 360px;
          }
          .txl-hero {
            padding: 100px 0 54px;
          }
        }

        .txl-card {
          border-radius: 22px;
          background: #fff;
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 18px 46px rgba(18, 23, 39, 0.08);
          padding: 18px 18px 16px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .txl-card__top {
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(90deg, rgba(224, 48, 90, 0.95), rgba(78, 200, 200, 0.45));
        }
        .txl-card:hover {
          transform: translateY(-6px);
          border-color: rgba(224, 48, 90, 0.24);
          box-shadow: 0 26px 70px rgba(18, 23, 39, 0.10);
        }
        .txl-card h3 {
          font-size: 1.06rem;
          font-weight: 900;
          margin: 10px 0 8px;
          letter-spacing: -0.01em;
        }
        .txl-card p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
          font-size: 0.98rem;
        }

        .txl-proof {
          margin-top: 18px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(18, 23, 39, 0.10);
          padding: 18px 18px;
          box-shadow: 0 18px 50px rgba(18, 23, 39, 0.08);
        }
        .txl-proof__title {
          font-weight: 900;
          font-size: 1.05rem;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .txl-proof__desc {
          color: rgba(18, 23, 39, 0.70);
          line-height: 1.65;
          margin-bottom: 12px;
        }

        .txl-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }
        .txl-list li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: rgba(18, 23, 39, 0.78);
          line-height: 1.55;
        }
        .txl-list__icon {
          width: 30px;
          height: 30px;
          border-radius: 10px;
          background: rgba(224, 48, 90, 0.12);
          color: rgba(18, 23, 39, 0.85);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          border: 1px solid rgba(224, 48, 90, 0.16);
        }

        .txl-flow {
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 24px 70px rgba(18, 23, 39, 0.10);
          padding: 18px 16px;
          position: relative;
        }
        .txl-flow__row {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 14px;
          padding: 14px 10px 18px;
          position: relative;
        }
        .txl-flow__n {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          background: linear-gradient(135deg, rgba(224, 48, 90, 0.95), rgba(255, 122, 148, 0.88));
          color: rgba(255, 255, 255, 0.96);
          box-shadow: 0 14px 34px rgba(224, 48, 90, 0.18);
        }
        .txl-flow__body h3 {
          margin: 2px 0 6px;
          font-weight: 900;
          font-size: 1.05rem;
        }
        .txl-flow__body p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
        }
        .txl-flow__line {
          position: absolute;
          left: 36px;
          top: 64px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, rgba(224, 48, 90, 0.36), rgba(224, 48, 90, 0));
        }

        .txl-cta {
          padding: 62px 0 86px;
          background: #fff;
        }
        .txl-cta__inner {
          border-radius: 28px;
          background: radial-gradient(900px 420px at 20% 20%, rgba(224, 48, 90, 0.22), transparent 55%),
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
        .txl-cta__inner h2 {
          color: #fff;
          font-weight: 900;
          margin: 0 0 8px;
          font-size: clamp(1.55rem, 2.5vw, 2.1rem);
          letter-spacing: -0.02em;
        }
        .txl-cta__inner p {
          margin: 0;
          color: rgba(255, 255, 255, 0.80);
          line-height: 1.65;
          max-width: 540px;
        }
        .txl-cta__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .txl-btn--dark {
          background: linear-gradient(120deg, var(--accent) 0%, #b31538 100%);
          color: #ffffff;
          box-shadow: 0 18px 46px rgba(224, 48, 90, 0.22);
        }
        .txl-btn--dark:hover {
          transform: translateY(-2px);
          color: #ffffff;
        }
        .txl-btn--ghost-dark {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
        }
        .txl-btn--ghost-dark:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.26);
          color: rgba(255, 255, 255, 0.96);
        }
      `}</style>
    </Layout>
  );
};

export default SolutionTextile;

