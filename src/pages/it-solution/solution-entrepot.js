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
    metaTitle: "Système Entrepôt & Logistique | RFIDIA",
    metaDesc:
      "Inventaire en temps réel, automatisation des quais de réception/expédition et pilotage des flux logistiques grâce à la technologie RFID industrielle.",
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
    heroEyebrow: "Logistique • Traçabilité & temps réel",
    heroTitleA: "Entrepôt",
    heroTitleB: "connecté",
    heroTitleC: "Flux automatisés, zéro erreur",
    heroSub:
      "RFIDIA transforme la gestion de votre entrepôt grâce à des portiques RFID et des terminaux mobiles de pointe. Accélérez vos réceptions, fiabilisez vos expéditions et réalisez vos inventaires en un temps record sans bloquer votre exploitation.",
    heroCta1: "Obtenir une démo",
    heroCta2: "Toutes les solutions",
    kpis: [
      { v: "x10", l: "Vitesse d'inventaire" },
      { v: "99.9%", l: "Fiabilité expéditions" },
      { v: "-50%", l: "Temps de recherche" },
    ],
    modulesTitle: "Des modules conçus pour l'excellence logistique",
    modulesDesc:
      "Une couverture complète de vos processus d'entrepôt pour maximiser votre productivité et éliminer les litiges clients.",
    modules: [
      {
        title: "Réception automatisée (Quais RFID)",
        desc: "Lecture instantanée et sans contact des palettes et cartons dès leur passage à quai, avec rapprochement automatique des commandes.",
      },
      {
        title: "Gestion dynamique des emplacements",
        desc: "Suivi précis de la localisation des palettes et conteneurs pour optimiser l'espace de stockage et réduire les temps de recherche.",
      },
      {
        title: "Inventaire tournant ultra-rapide",
        desc: "Réalisation d'inventaires fréquents via des terminaux mobiles RFID sans interruption de l'activité logistique.",
      },
      {
        title: "Contrôle d'expédition 100% fiable",
        desc: "Vérification instantanée de la conformité des chargements avant le départ du camion pour éradiquer les erreurs de livraison.",
      },
      {
        title: "Suivi des supports de manutention",
        desc: "Traçabilité unitaire de vos palettes, rolls, bacs et conteneurs consignés pour éviter les pertes et optimiser les rotations.",
      },
      {
        title: "Intégration WMS & ERP fluide",
        desc: "Interfaçage standardisé avec vos systèmes existants (SAP, Manhattan, Reflex, Oracle) pour un pilotage centralisé en temps réel.",
      },
    ],
    journeyTitle: "Un déploiement maîtrisé, un ROI rapide",
    journeyDesc:
      "Une méthodologie éprouvée pour digitaliser vos entrepôts sans perturber vos opérations quotidiennes.",
    journey: [
      { n: "01", t: "Audit & Étude de site", d: "Analyse de vos flux, contraintes métalliques/environnementales et définition de l'architecture matérielle RFID." },
      { n: "02", t: "Installation & Paramétrage", d: "Mise en place des portiques de quai, antennes et configuration des terminaux mobiles selon vos processus." },
      { n: "03", t: "Interfaçage WMS / ERP", d: "Connexion sécurisée de notre middleware RFIDIA avec votre système d'information pour la remontée automatique des données." },
      { n: "04", t: "Formation & Exploitation", d: "Accompagnement de vos caristes et opérateurs pour une prise en main immédiate et un pilotage autonome." },
    ],
    proofTitle: "Pourquoi les directeurs logistiques nous choisissent",
    proofDesc:
      "Parce que l'automatisation RFID apporte une transparence totale et supprime les goulots d'étranglement.",
    proofs: [
      "Élimination des pénalités clients grâce au contrôle infaillible des expéditions.",
      "Gain de productivité majeur sur les quais de déchargement et de chargement.",
      "Fiabilité absolue des stocks évitant les ruptures et les surstockages de sécurité.",
      "Visibilité en temps réel sur l'ensemble de la chaîne d'approvisionnement.",
    ],
    ctaTitle: "Prêt à moderniser votre plateforme logistique ?",
    ctaSub:
      "Partagez avec nos ingénieurs la configuration de votre entrepôt et le volume de vos expéditions pour recevoir une étude personnalisée.",
    ctaBtn: "Contactez un expert RFIDIA",
    ctaAlt: "Retour à l'accueil solutions",
  },
  en: {
    metaTitle: "Warehouse System & Logistics | RFIDIA",
    metaDesc:
      "Real-time inventory, automated dock doors, and streamlined logistics flow using industrial RFID technology.",
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
    heroEyebrow: "Logistics • Traceability & Real-Time",
    heroTitleA: "A connected",
    heroTitleB: "warehouse",
    heroTitleC: "for automated and error-free workflows",
    heroSub:
      "RFIDIA transforms your warehouse management through industrial RFID portals and advanced mobile terminals. Speed up receiving, ensure 100% shipping accuracy, and perform inventories in record time without stopping operations.",
    heroCta1: "Get a demo",
    heroCta2: "All solutions",
    kpis: [
      { v: "x10", l: "Inventory speed" },
      { v: "99.9%", l: "Shipping accuracy" },
      { v: "-50%", l: "Search time" },
    ],
    modulesTitle: "Modules built for logistics excellence",
    modulesDesc:
      "Comprehensive coverage of your warehouse processes to maximize productivity and eliminate shipping disputes.",
    modules: [
      {
        title: "Automated Receiving (RFID Docks)",
        desc: "Instant, contactless reading of pallets and cartons as they pass through dock doors, with automated PO matching.",
      },
      {
        title: "Dynamic Location Management",
        desc: "Accurate tracking of pallet and container locations to optimize storage space and minimize search times.",
      },
      {
        title: "Ultra-Fast Cycle Counts",
        desc: "Frequent inventory audits using RFID mobile terminals without disrupting daily warehouse activity.",
      },
      {
        title: "100% Reliable Shipping Control",
        desc: "Instant load verification before the truck leaves the dock to eradicate delivery errors and penalties.",
      },
      {
        title: "Returnable Transport Item Tracking",
        desc: "Unit tracking of pallets, roll cages, totes, and containers to prevent losses and optimize rotation.",
      },
      {
        title: "Seamless WMS & ERP Integration",
        desc: "Standardized interfacing with your existing systems (SAP, Manhattan, Reflex, Oracle) for real-time central management.",
      },
    ],
    journeyTitle: "Controlled rollout, rapid ROI",
    journeyDesc:
      "A proven methodology to digitalize your warehouse without disrupting daily operations.",
    journey: [
      { n: "01", t: "Audit & Site Survey", d: "Analysis of your material flows, environmental constraints, and definition of the optimal RFID hardware architecture." },
      { n: "02", t: "Installation & Setup", d: "Deployment of dock portals, antennas, and configuration of mobile readers tailored to your standard operating procedures." },
      { n: "03", t: "WMS / ERP Interfacing", d: "Secure connection of our RFIDIA middleware with your IT system for automated data synchronization." },
      { n: "04", t: "Training & Operation", d: "Hands-on training for forklift drivers and warehouse staff for immediate adoption and autonomous management." },
    ],
    proofTitle: "Why logistics directors choose us",
    proofDesc:
      "Because RFID automation provides total transparency and eliminates operational bottlenecks.",
    proofs: [
      "Elimination of customer penalties through infallible shipping verification.",
      "Major productivity gains at receiving and shipping docks.",
      "Absolute stock accuracy preventing stockouts and excess safety buffer stock.",
      "Real-time visibility across the entire supply chain operations.",
    ],
    ctaTitle: "Ready to modernize your logistics platform?",
    ctaSub:
      "Share your warehouse configuration and shipping volumes with our engineers to receive a customized study.",
    ctaBtn: "Contact an RFIDIA expert",
    ctaAlt: "Back to solutions hub",
  },
  it: {
    metaTitle: "Sistema Magazzino & Logistica | RFIDIA",
    metaDesc:
      "Inventario in tempo reale, automazione delle baie di carico e gestione dei flussi logistici con tecnologia RFID industriale.",
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
    heroEyebrow: "Logistica • Tracciabilità & Tempo Reale",
    heroTitleA: "Un magazzino",
    heroTitleB: "connesso",
    heroTitleC: "per flussi automatizzati e senza errori",
    heroSub:
      "RFIDIA trasforma la gestione del tuo magazzino attraverso varchi RFID industriali e terminali mobili avanzati. Accelera le ricezioni, garantisci l'accuratezza delle spedizioni al 100% ed esegui inventari a tempo di record senza interrompere l'attività.",
    heroCta1: "Richiedi una demo",
    heroCta2: "Tutte le soluzioni",
    kpis: [
      { v: "x10", l: "Velocità inventario" },
      { v: "99.9%", l: "Accuratezza spedizioni" },
      { v: "-50%", l: "Tempo di ricerca" },
    ],
    modulesTitle: "Moduli progettati per l'eccellenza logistica",
    modulesDesc:
      "Copertura completa dei processi di magazzino per massimizzare la produttività ed eliminare i contenziosi con i clienti.",
    modules: [
      {
        title: "Ricezione automatizzata (Baie RFID)",
        desc: "Lettura istantanea e senza contatto di pallet e cartoni al passaggio dal varco, con riconciliazione automatica degli ordini.",
      },
      {
        title: "Gestione dinamica delle ubicazioni",
        desc: "Tracciamento accurato della posizione di pallet e contenitori per ottimizzare lo spazio di stoccaggio e ridurre i tempi di ricerca.",
      },
      {
        title: "Inventari rotativi ultra-rapidi",
        desc: "Audit di inventario frequenti tramite terminali mobili RFID senza interrompere l'attività logistica quotidiana.",
      },
      {
        title: "Controllo spedizioni 100% affidabile",
        desc: "Verifica istantanea del carico prima della partenza del camion per sradicare errori di consegna e penali.",
      },
      {
        title: "Tracciamento supporti logistici (RTI)",
        desc: "Tracciabilità unitaria di pallet, roll container, cassette e contenitori a rendere per evitare perdite e ottimizzare la rotazione.",
      },
      {
        title: "Integrazione WMS & ERP fluida",
        desc: "Interfacciamento standardizzato con i sistemi esistenti (SAP, Manhattan, Reflex, Oracle) per una gestione centralizzata in tempo reale.",
      },
    ],
    journeyTitle: "Rollout controllato, ROI rapido",
    journeyDesc:
      "Una metodologia collaudata per digitalizzare i tuoi magazzini senza interrompere le normali operazioni.",
    journey: [
      { n: "01", t: "Audit & Site Survey", d: "Analisi dei flussi, vincoli ambientali e definizione dell'architettura hardware RFID ottimale." },
      { n: "02", t: "Installazione & Setup", d: "Posa di portali di banchina, antenne e configurazione dei lettori mobili secondo le procedure operative." },
      { n: "03", t: "Interfacciamento WMS / ERP", d: "Connessione sicura del nostro middleware RFIDIA con il tuo sistema informatico per la sincronizzazione automatica dei dati." },
      { n: "04", t: "Formazione & Gestione", d: "Formazione pratica per carrellisti e operatori per un'adozione immediata e una gestione autonoma." },
    ],
    proofTitle: "Perché i direttori logistici ci scelgono",
    proofDesc:
      "Perché l'automazione RFID offre una trasparencia totale ed elimina i colli di bottiglia operativi.",
    proofs: [
      "Eliminazione delle penali dei clienti grazie alla verifica infallibile delle spedizioni.",
      "Notevoli guadagni di produttività sulle banchine di carico e scarico.",
      "Assoluta precisione delle scorte che evita rotture di stock e scorte di sicurezza in eccesso.",
      "Visibilità in tempo reale sull'intera catena di approvvigionamento.",
    ],
    ctaTitle: "Pronto a modernizzare la tua piattaforma logistica?",
    ctaSub:
      "Condividi la configurazione del tuo magazzino e i volumi di spedizione con i nostri ingegneri per ricevere uno studio personalizzato.",
    ctaBtn: "Contatta un esperto RFIDIA",
    ctaAlt: "Torna alle soluzioni",
  },
};

const SolutionEntrepot = () => {
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
      primary: "#2563eb",
      primary2: "#3b82f6",
      primaryDark: "#1e3a8a",
      ink: "#121727",
      soft: "#eff6ff",
      line: "rgba(18, 23, 39, 0.10)",
    }),
    []
  );

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar language={language} onLanguageChange={setLanguage} labels={t.navbar} />

      <main className="txl">
        {/* HERO */}
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
                    <img src="/a_rfidia/z_logistique/z_logistique.png" alt="Système Entrepôt RFIDIA" />
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

        /* HERO: blue accent */
        .txl-hero {
          padding: 60px 0 70px;
          background: radial-gradient(1000px 380px at 15% 10%, rgba(37, 99, 235, 0.12), transparent 60%),
            radial-gradient(900px 420px at 85% 20%, rgba(59, 130, 246, 0.10), transparent 58%),
            linear-gradient(180deg, #ffffff 0%, #ffffff 60%, rgba(239, 246, 255, 0.85) 100%);
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
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.16);
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
          background: linear-gradient(120deg, var(--accent) 0%, ${accent.primaryDark} 100%);
          color: #ffffff;
          box-shadow: 0 16px 34px rgba(37, 99, 235, 0.22);
        }
        .txl-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 42px rgba(37, 99, 235, 0.28);
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
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.14);
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
          background: linear-gradient(180deg, rgba(239, 246, 255, 0.95) 0%, rgba(239, 246, 255, 0.55) 100%);
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
          background: linear-gradient(90deg, rgba(37, 99, 235, 0.95), rgba(59, 130, 246, 0.55));
        }
        .txl-card:hover {
          transform: translateY(-6px);
          border-color: rgba(37, 99, 235, 0.22);
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
          background: rgba(37, 99, 235, 0.10);
          color: rgba(18, 23, 39, 0.85);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          border: 1px solid rgba(37, 99, 235, 0.14);
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
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.96), rgba(59, 130, 246, 0.88));
          color: rgba(255, 255, 255, 0.96);
          box-shadow: 0 14px 34px rgba(37, 99, 235, 0.18);
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
          background: linear-gradient(180deg, rgba(37, 99, 235, 0.32), rgba(37, 99, 235, 0));
        }

        .txl-cta {
          padding: 62px 0 86px;
          background: #fff;
        }
        .txl-cta__inner {
          border-radius: 28px;
          background: radial-gradient(900px 420px at 20% 20%, rgba(37, 99, 235, 0.28), transparent 55%),
            radial-gradient(900px 420px at 80% 15%, rgba(59, 130, 246, 0.12), transparent 55%),
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
          background: linear-gradient(120deg, var(--accent) 0%, #1e3a8a 100%);
          color: #ffffff;
          box-shadow: 0 18px 46px rgba(37, 99, 235, 0.22);
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

export default SolutionEntrepot;
