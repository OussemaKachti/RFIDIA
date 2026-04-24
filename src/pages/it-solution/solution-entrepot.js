import React, { useEffect, useState } from "react";
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

const copy = {
  fr: {
    metaTitle: "Système Entrepôt | RFIDIA",
    metaDesc:
      "Inventaire en temps réel, réduction des erreurs de préparation et traçabilité bout en bout : une solution RFID & IoT pensée pour les opérations d’entrepôt.",
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
    heroBadge: "Logistique & entrepôts",
    heroTitle1: "Un entrepôt",
    heroTitleAccent: "visible",
    heroTitle2: "en temps réel, du quai à l’expédition",
    heroSub:
      "RFIDIA déploie des solutions de traçabilité et d’automatisation pour fiabiliser les stocks, accélérer la préparation de commandes et réduire les écarts — avec une intégration progressive adaptée à vos process et à votre WMS/ERP.",
    heroCtaPrimary: "Demander un diagnostic",
    heroCtaSecondary: "Toutes les solutions",
    float1: "Inventaire instantané",
    float2: "Erreurs réduites",
    painsTitle: "Les points de friction que nous adressons",
    painsDesc:
      "Nos équipes partent de la réalité terrain : flux, contraintes de lecture, qualité des données et performance opérationnelle.",
    pains: [
      {
        title: "Écarts de stock et ruptures",
        desc: "Limiter les erreurs de saisie, améliorer la fiabilité des inventaires et réduire l’impact des écarts sur le service client.",
      },
      {
        title: "Préparation de commandes",
        desc: "Accélérer le picking, sécuriser la consolidation et diminuer les erreurs de colisage grâce à la lecture groupée.",
      },
      {
        title: "Traçabilité des flux",
        desc: "Suivre les mouvements (réception, mise en stock, transferts, expédition) avec une historisation exploitable.",
      },
    ],
    pillarsTitle: "Une solution modulaire, orientée résultats",
    pillarsDesc:
      "Vous choisissez les briques utiles, puis on industrialise progressivement pour sécuriser le ROI.",
    pillars: [
      {
        title: "Réception & identification",
        desc: "Étiquetage RFID, association lots/produits, contrôle à quai et rapprochement avec les documents d’entrée.",
      },
      {
        title: "Stockage & localisation",
        desc: "Positionnement précis, gestion des emplacements et visibilité multi-zones (réserve, picking, cross-dock).",
      },
      {
        title: "Préparation & contrôle",
        desc: "Guidage de préparation, contrôle de complétude et validation automatique avant expédition.",
      },
      {
        title: "Inventaires rapides",
        desc: "Inventaires tournants plus fréquents, réduction des immobilisations et meilleure qualité de stock.",
      },
      {
        title: "Dashboards & alertes",
        desc: "Indicateurs opérationnels, anomalies détectées et exports pour vos rituels de pilotage.",
      },
      {
        title: "Intégration SI",
        desc: "Connexion avec WMS/ERP (API, fichiers, événements), gouvernance des référentiels et traçabilité des échanges.",
      },
    ],
    opsTitle: "Cas d’usage entrepôt",
    opsDesc: "Des scénarios concrets pour gagner en vitesse, qualité et conformité.",
    ops: [
      "Contrôle réception : lecture groupée, détection des manquants/excédents et mise à jour automatique des statuts.",
      "Inventaires tournants : relevés rapides par zone, comparaisons et plans de correction ciblés.",
      "Préparation : validation de la complétude des bacs/colis, réduction des erreurs de picking.",
      "Expédition : contrôle final, preuve de chargement et historisation pour audit.",
    ],
    rolloutTitle: "Méthode de déploiement (pilot → scale)",
    rolloutDesc:
      "Une approche sûre : pilote mesurable, industrialisation, puis extension à d’autres flux/sites.",
    rollout: [
      {
        step: "01",
        title: "Diagnostic terrain",
        desc: "Cartographie des flux, points de lecture, contraintes radio, KPIs et cible de performance.",
      },
      {
        step: "02",
        title: "Pilote & mesure",
        desc: "Zone pilote, matériel et paramétrage, mesures avant/après, validation avec l’exploitation.",
      },
      {
        step: "03",
        title: "Industrialisation",
        desc: "Standardisation, durcissement des process, sécurisation des interfaces et formation.",
      },
      {
        step: "04",
        title: "Extension",
        desc: "Montée en charge multi-zones / multi-sites, support, monitoring et amélioration continue.",
      },
    ],
    ctaTitle: "On évalue votre entrepôt en 30 minutes",
    ctaSub:
      "Partagez vos flux, vos volumes et vos outils : nous revenons avec un plan d’implémentation clair et réaliste.",
    ctaBtn: "Contactez RFIDIA",
    ctaSecondary: "Retour à l’accueil solutions",
  },
  en: {
    metaTitle: "Warehouse System | RFIDIA",
    metaDesc:
      "Real-time inventory, fewer picking mistakes and end-to-end traceability: an RFID & IoT solution designed for warehouse operations.",
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
    heroBadge: "Logistics & warehouses",
    heroTitle1: "A warehouse",
    heroTitleAccent: "visible",
    heroTitle2: "in real time, from inbound to shipping",
    heroSub:
      "RFIDIA deploys traceability and automation solutions to improve stock accuracy, speed up order preparation and reduce discrepancies — with progressive integration suited to your processes and WMS/ERP.",
    heroCtaPrimary: "Request a discovery call",
    heroCtaSecondary: "All solutions",
    float1: "Instant inventory",
    float2: "Fewer mistakes",
    painsTitle: "Operational frictions we solve",
    painsDesc:
      "We start from reality on the floor: flows, read constraints, data quality and operational performance.",
    pains: [
      {
        title: "Stock discrepancies & shortages",
        desc: "Reduce manual entry mistakes, improve inventory reliability and minimize service impact.",
      },
      {
        title: "Order preparation",
        desc: "Speed up picking, secure consolidation and reduce packing errors thanks to bulk reading.",
      },
      {
        title: "Flow traceability",
        desc: "Track movements (inbound, put-away, transfers, shipping) with an auditable history.",
      },
    ],
    pillarsTitle: "Modular solution, outcome-driven",
    pillarsDesc: "Choose what you need, then scale safely to secure ROI.",
    pillars: [
      {
        title: "Inbound & identification",
        desc: "RFID labeling, lot/product association, dock control and reconciliation with inbound docs.",
      },
      {
        title: "Storage & location",
        desc: "Accurate placement, location management and multi-zone visibility (reserve, picking, cross-dock).",
      },
      {
        title: "Picking & verification",
        desc: "Picking guidance, completeness checks and automated validation before shipping.",
      },
      {
        title: "Fast inventories",
        desc: "More frequent cycle counts, less downtime and better stock quality.",
      },
      {
        title: "Dashboards & alerts",
        desc: "Operational KPIs, anomaly detection and exports for your control routines.",
      },
      {
        title: "Systems integration",
        desc: "Connect with WMS/ERP (APIs, files, events), master data governance and trace exchange.",
      },
    ],
    opsTitle: "Warehouse use cases",
    opsDesc: "Concrete scenarios to gain speed, quality and compliance.",
    ops: [
      "Inbound control: bulk reads, missing/extra detection and automatic status updates.",
      "Cycle counts: fast zone reads, comparisons and targeted correction plans.",
      "Picking: validate tote/carton completeness and reduce picking mistakes.",
      "Shipping: final control, loading proof and auditable history for investigations.",
    ],
    rolloutTitle: "Rollout method (pilot → scale)",
    rolloutDesc: "A safe approach: measurable pilot, industrialization, then expansion to other flows/sites.",
    rollout: [
      {
        step: "01",
        title: "On-site discovery",
        desc: "Flow mapping, read points, RF constraints, KPIs and target performance.",
      },
      {
        step: "02",
        title: "Pilot & measure",
        desc: "Pilot zone, hardware and configuration, before/after metrics and operations validation.",
      },
      {
        step: "03",
        title: "Industrialize",
        desc: "Standardize, harden processes, secure interfaces and train teams.",
      },
      {
        step: "04",
        title: "Expand",
        desc: "Scale to multi-zones / multi-sites with support, monitoring and continuous improvement.",
      },
    ],
    ctaTitle: "We assess your warehouse in 30 minutes",
    ctaSub:
      "Share your flows, volumes and tools — we’ll come back with a clear, realistic implementation plan.",
    ctaBtn: "Contact RFIDIA",
    ctaSecondary: "Back to solutions hub",
  },
  it: {
    metaTitle: "Sistema Magazzino | RFIDIA",
    metaDesc:
      "Inventario in tempo reale, meno errori di picking e tracciabilità end-to-end: una soluzione RFID & IoT per operazioni di magazzino.",
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
    heroBadge: "Logistica & magazzini",
    heroTitle1: "Un magazzino",
    heroTitleAccent: "visibile",
    heroTitle2: "in tempo reale, dal ricevimento alla spedizione",
    heroSub:
      "RFIDIA implementa soluzioni di tracciabilità e automazione per migliorare l’accuratezza delle scorte, velocizzare la preparazione ordini e ridurre gli scostamenti — con integrazione progressiva su processi e WMS/ERP.",
    heroCtaPrimary: "Richiedi una valutazione",
    heroCtaSecondary: "Tutte le soluzioni",
    float1: "Inventario istantaneo",
    float2: "Meno errori",
    painsTitle: "Attriti operativi che risolviamo",
    painsDesc:
      "Partiamo dal campo: flussi, vincoli di lettura, qualità dati e performance operative.",
    pains: [
      {
        title: "Scostamenti stock e rotture",
        desc: "Ridurre errori manuali, aumentare affidabilità inventari e minimizzare impatti sul servizio.",
      },
      {
        title: "Preparazione ordini",
        desc: "Velocizzare il picking, rendere sicura la consolidazione e ridurre errori di confezionamento.",
      },
      {
        title: "Tracciabilità dei flussi",
        desc: "Tracciare movimenti (ricevimento, stoccaggio, trasferimenti, spedizione) con storico auditabile.",
      },
    ],
    pillarsTitle: "Soluzione modulare, orientata ai risultati",
    pillarsDesc: "Si parte in modo graduale e si scala in sicurezza per garantire ROI.",
    pillars: [
      {
        title: "Inbound e identificazione",
        desc: "Etichettatura RFID, associazione lotti/prodotti, controllo al dock e riconciliazione documenti.",
      },
      {
        title: "Stoccaggio e localizzazione",
        desc: "Posizionamento, gestione ubicazioni e visibilità multi-zona (riserva, picking, cross-dock).",
      },
      {
        title: "Picking e controllo",
        desc: "Guidance di preparazione, check completezza e validazione automatica pre-spedizione.",
      },
      {
        title: "Inventari rapidi",
        desc: "Cycle count più frequenti, meno fermo e migliore qualità stock.",
      },
      {
        title: "Dashboard e alert",
        desc: "KPI operativi, anomalie e export per il controllo.",
      },
      {
        title: "Integrazione IT",
        desc: "Connessione a WMS/ERP (API, file, eventi), governance anagrafiche e tracciabilità scambi.",
      },
    ],
    opsTitle: "Casi d’uso magazzino",
    opsDesc: "Scenari concreti per velocità, qualità e conformità.",
    ops: [
      "Controllo ricevimento: lettura massiva, rilevazione mancanti/eccedenze e aggiornamento stati.",
      "Inventari: letture rapide per zona, confronti e piani di correzione mirati.",
      "Picking: validazione completezza di contenitori/collo e riduzione errori di picking.",
      "Spedizione: controllo finale, prova di carico e storico per audit.",
    ],
    rolloutTitle: "Metodo di rollout (pilot → scale)",
    rolloutDesc:
      "Approccio sicuro: pilota misurabile, industrializzazione e poi estensione ad altri flussi/siti.",
    rollout: [
      {
        step: "01",
        title: "Analisi sul campo",
        desc: "Mappatura flussi, punti di lettura, vincoli RF, KPI e obiettivi.",
      },
      {
        step: "02",
        title: "Pilota e misure",
        desc: "Zona pilota, hardware e configurazione, metriche prima/dopo e validazione operativa.",
      },
      {
        step: "03",
        title: "Industrializzazione",
        desc: "Standardizzazione, hardening processi, sicurezza interfacce e formazione.",
      },
      {
        step: "04",
        title: "Estensione",
        desc: "Scalabilità multi-zona / multi-sito con supporto, monitoring e miglioramento continuo.",
      },
    ],
    ctaTitle: "Valutiamo il tuo magazzino in 30 minuti",
    ctaSub:
      "Condividi flussi, volumi e strumenti: ti proponiamo un piano chiaro e realistico.",
    ctaBtn: "Contatta RFIDIA",
    ctaSecondary: "Torna alle soluzioni",
  },
};

const SectionDivider = () => (
  <div className="rl-section-divider-wrap">
    <div className="rl-section-divider">
      <span className="rl-section-divider__line" />
      <img src="/a_rfidia/z_rfid/logo-RFIDIA2.png" alt="RFIDIA" className="rl-section-divider__logo" />
      <span className="rl-section-divider__line" />
    </div>
  </div>
);

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

  const t = copy[language] || copy.fr;
  const footerT = footerI18n[language] || footerI18n.fr;

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar language={language} onLanguageChange={setLanguage} labels={t.navbar} />

      <main className="rl sol-entrepot">
        <section className="rl-hero sol-entrepot-hero">
          <div className="rl-hero__bg-grid" aria-hidden />
          <div className="rl-hero__glow rl-hero__glow--left" aria-hidden />
          <div className="rl-hero__glow rl-hero__glow--right" aria-hidden />

          <div className="container position-relative">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="rl-badge rl-badge--light">
                  <span className="rl-badge__dot" />
                  {t.heroBadge}
                </span>
                <h1 className="rl-hero__title">
                  {t.heroTitle1} <span className="rl-gradient-text">{t.heroTitleAccent}</span>
                  <br />
                  {t.heroTitle2}
                </h1>
                <p className="rl-hero__sub">{t.heroSub}</p>
                <div className="rl-hero__actions">
                  <Link href="/contact-us" passHref>
                    <a className="rl-btn rl-btn--primary">
                      {t.heroCtaPrimary}
                      <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </Link>
                  <Link href="/it-solution" passHref>
                    <a className="rl-btn rl-btn--ghost">{t.heroCtaSecondary}</a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="rl-hero__visual sol-entrepot-visual">
                  <img
                    src="/a_rfidia/z_logistique/z_logistique.png"
                    alt=""
                    className="rl-hero__img sol-entrepot-img"
                  />
                  <div className="rl-hero__float rl-hero__float--tl sol-entrepot-float">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.29 7 12 12l8.71-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22V12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{t.float1}</span>
                  </div>
                  <div className="rl-hero__float rl-hero__float--br sol-entrepot-float sol-entrepot-float--secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{t.float2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sol-entrepot-section sol-entrepot-section--muted">
          <div className="container">
            <div className="rl-section-head">
              <SectionDivider />
              <h2>{t.painsTitle}</h2>
              <p>{t.painsDesc}</p>
            </div>
            <div className="row g-4">
              {t.pains.map((c, i) => (
                <div className="col-lg-4" key={c.title}>
                  <article className="sol-entrepot-card" style={{ "--delay": `${i * 0.06}s` }}>
                    <span className="sol-entrepot-card__index" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sol-entrepot-section">
          <div className="container">
            <div className="rl-section-head">
              <SectionDivider />
              <h2>{t.pillarsTitle}</h2>
              <p>{t.pillarsDesc}</p>
            </div>
            <div className="sol-entrepot-grid">
              {t.pillars.map((f) => (
                <article className="sol-entrepot-feature" key={f.title}>
                  <div className="sol-entrepot-feature__accent" aria-hidden />
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sol-entrepot-section sol-entrepot-section--muted">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <div className="rl-section-head text-lg-start mx-lg-0">
                  <SectionDivider />
                  <h2 className="text-lg-start">{t.opsTitle}</h2>
                  <p className="text-lg-start mx-lg-0">{t.opsDesc}</p>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="sol-entrepot-use-list">
                  {t.ops.map((line) => (
                    <li key={line}>
                      <span className="sol-entrepot-use-list__icon" aria-hidden>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="sol-entrepot-section sol-entrepot-section--process">
          <div className="container">
            <div className="rl-section-head">
              <SectionDivider />
              <h2>{t.rolloutTitle}</h2>
              <p>{t.rolloutDesc}</p>
            </div>
            <div className="sol-entrepot-process">
              {t.rollout.map((step, idx) => (
                <div className="sol-entrepot-process__row" key={step.step}>
                  <div className="sol-entrepot-process__step">{step.step}</div>
                  <div className="sol-entrepot-process__body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                  {idx < t.rollout.length - 1 && <div className="sol-entrepot-process__connector" aria-hidden />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sol-entrepot-cta">
          <div className="container">
            <div className="sol-entrepot-cta__inner">
              <div>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaSub}</p>
              </div>
              <div className="sol-entrepot-cta__actions">
                <Link href="/contact-us" passHref>
                  <a className="rl-btn rl-btn--white">{t.ctaBtn}</a>
                </Link>
                <Link href="/it-solution" passHref>
                  <a className="rl-btn rl-btn--ghost-white">{t.ctaSecondary}</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer footerGradient translations={footerT} />

      <style jsx>{`
        .sol-entrepot-img {
          border-radius: var(--rl-radius-lg, 22px);
          box-shadow: var(--rl-shadow-lg, 0 20px 60px rgba(6, 15, 46, 0.15));
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .sol-entrepot-float {
          backdrop-filter: blur(10px);
        }
        .sol-entrepot-section {
          padding: 72px 0;
          font-family: "Manrope", sans-serif;
        }
        .sol-entrepot-section--muted {
          background: linear-gradient(to bottom, rgba(170, 205, 220, 0.12), rgba(170, 205, 220, 0.06));
        }
        .sol-entrepot-card {
          background: var(--rl-surface, #fff);
          border-radius: var(--rl-radius-lg, 22px);
          padding: 1.75rem 1.75rem 1.5rem;
          border: 1px solid var(--rl-border, #e1e8f8);
          box-shadow: var(--rl-shadow-sm, 0 2px 12px rgba(6, 15, 46, 0.06));
          height: 100%;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease;
          animation: sol-entrepot-fade-up 0.7s ease both;
          animation-delay: var(--delay, 0s);
        }
        .sol-entrepot-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--rl-shadow-md, 0 8px 32px rgba(6, 15, 46, 0.1));
        }
        .sol-entrepot-card__index {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #4ec8c8;
          display: block;
          margin-bottom: 0.75rem;
        }
        .sol-entrepot-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--rl-navy, #1e2a4a);
          margin-bottom: 0.65rem;
        }
        .sol-entrepot-card p {
          margin: 0;
          color: var(--rl-muted, #4f6289);
          line-height: 1.6;
          font-size: 0.98rem;
        }
        .sol-entrepot-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 991px) {
          .sol-entrepot-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 575px) {
          .sol-entrepot-grid {
            grid-template-columns: 1fr;
          }
        }
        .sol-entrepot-feature {
          background: #fff;
          border-radius: var(--rl-radius-lg, 22px);
          padding: 1.5rem 1.35rem 1.35rem;
          border: 1px solid var(--rl-border, #e1e8f8);
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .sol-entrepot-feature:hover {
          border-color: rgba(78, 200, 200, 0.45);
          box-shadow: 0 12px 36px rgba(78, 200, 200, 0.12);
        }
        .sol-entrepot-feature__accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #4ec8c8, #52b4d8);
          opacity: 0.9;
        }
        .sol-entrepot-feature h3 {
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--rl-navy, #1e2a4a);
          margin: 0.35rem 0 0.5rem;
        }
        .sol-entrepot-feature p {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.55;
          color: var(--rl-muted, #4f6289);
        }
        .sol-entrepot-use-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .sol-entrepot-use-list li {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.1rem 1.25rem;
          background: #fff;
          border-radius: 14px;
          border: 1px solid var(--rl-border, #e1e8f8);
          margin-bottom: 0.85rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .sol-entrepot-use-list li:hover {
          transform: translateX(4px);
          box-shadow: var(--rl-shadow-sm, 0 2px 12px rgba(6, 15, 46, 0.06));
        }
        .sol-entrepot-use-list li:last-child {
          margin-bottom: 0;
        }
        .sol-entrepot-use-list__icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(78, 200, 200, 0.15);
          color: #2a9d8f;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sol-entrepot-use-list span:last-child {
          color: var(--rl-text, #0b1640);
          line-height: 1.55;
          font-size: 0.98rem;
        }
        .sol-entrepot-process {
          max-width: 820px;
          margin: 0 auto;
          position: relative;
        }
        .sol-entrepot-process__row {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 1.25rem 1.5rem;
          position: relative;
          padding-bottom: 2.5rem;
        }
        .sol-entrepot-process__step {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, #4ec8c8, #2563eb);
          color: #fff;
          font-weight: 800;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.25);
        }
        .sol-entrepot-process__body h3 {
          font-size: 1.12rem;
          font-weight: 700;
          color: var(--rl-navy, #1e2a4a);
          margin-bottom: 0.4rem;
        }
        .sol-entrepot-process__body p {
          margin: 0;
          color: var(--rl-muted, #4f6289);
          line-height: 1.6;
        }
        .sol-entrepot-process__connector {
          position: absolute;
          left: 27px;
          top: 58px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, rgba(37, 99, 235, 0.45), rgba(37, 99, 235, 0));
        }
        .sol-entrepot-cta {
          padding: 56px 0 80px;
          font-family: "Manrope", sans-serif;
        }
        .sol-entrepot-cta__inner {
          background: linear-gradient(120deg, #1e2a4a 0%, #253764 55%, #0b3a5d 100%);
          border-radius: var(--rl-radius-xl, 32px);
          padding: clamp(2rem, 4vw, 3rem);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.75rem;
          box-shadow: var(--rl-shadow-lg, 0 20px 60px rgba(6, 15, 46, 0.15));
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .sol-entrepot-cta__inner h2 {
          color: #fff;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .sol-entrepot-cta__inner p {
          color: rgba(255, 255, 255, 0.82);
          margin: 0;
          max-width: 460px;
          line-height: 1.6;
        }
        .sol-entrepot-cta__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        @keyframes sol-entrepot-fade-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Layout>
  );
};

export default SolutionEntrepot;

