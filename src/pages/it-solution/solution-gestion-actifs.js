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
    metaTitle: "Gestion des Actifs | RFIDIA",
    metaDesc:
      "Localisez, sécurisez et optimisez vos équipements critiques grâce à la traçabilité RFID/IoT : inventaires rapides, réduction des pertes et pilotage du parc.",
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
    heroTag: "Asset Management • Traçabilité & contrôle",
    heroTitleA: "Vos actifs,",
    heroTitleB: "toujours",
    heroTitleC: "au bon endroit",
    heroSub:
      "RFIDIA vous apporte une visibilité fiable sur vos équipements (outillage, IT, maintenance, instruments, contenants). Moins de pertes, moins de temps de recherche, et des inventaires rapides — avec des indicateurs concrets pour piloter le parc et la disponibilité.",
    heroCta1: "Auditer mon parc",
    heroCta2: "Voir toutes les solutions",
    stats: [
      { v: "-40%", l: "Pertes & écarts" },
      { v: "-60%", l: "Temps de recherche" },
      { v: "+20%", l: "Disponibilité" },
    ],
    valueTitle: "Ce que vous gagnez (vraiment)",
    valueDesc:
      "Une solution orientée usage : localiser, sécuriser, inventorier et décider — sans complexifier le terrain.",
    values: [
      {
        title: "Inventaires rapides et fiables",
        desc: "Inventaires tournants plus fréquents, sans immobiliser les équipes. Réconciliation claire et historique exploitable.",
      },
      {
        title: "Réduction des pertes",
        desc: "Traçabilité des mouvements, responsabilisation des flux, détection d’anomalies et alertes utiles sur les écarts.",
      },
      {
        title: "Disponibilité opérationnelle",
        desc: "Meilleure localisation, moins de ruptures de service, et planification plus simple des interventions et prêts.",
      },
    ],
    scopeTitle: "Couverture fonctionnelle",
    scopeDesc:
      "Modules combinables selon votre environnement : RFID, codes-barres, IoT, et intégrations SI (ERP/GMAO).",
    scope: [
      {
        title: "Identification & référentiel",
        desc: "Étiquetage RFID et référentiel des actifs (catégories, criticité, affectations, sites et zones).",
      },
      {
        title: "Localisation & mouvements",
        desc: "Lectures mobiles / points fixes pour suivre entrées-sorties, transferts, prêts et retours.",
      },
      {
        title: "Inventaire & audit",
        desc: "Inventaires par zone, par équipe ou par campagne, avec rapprochement automatique et rapports d’écarts.",
      },
      {
        title: "Maintenance & cycle de vie",
        desc: "Historique, interventions et alertes : suivi des équipements critiques et aide à la décision sur le renouvellement.",
      },
      {
        title: "Sécurité & conformité",
        desc: "Zones sensibles, logs, règles d’accès (selon périmètre) et traçabilité pour audit interne.",
      },
      {
        title: "Intégration SI",
        desc: "Connexion à vos outils (ERP, GMAO, ITSM) via API/fichiers/événements, selon vos contraintes.",
      },
    ],
    useTitle: "Cas d’usage typiques",
    useDesc: "Exemples où les équipes voient la différence dès les premières semaines.",
    uses: [
      "Équipements de maintenance : outillage, instruments, pièces critiques.",
      "Actifs IT : PC portables, terminaux mobiles, lecteurs, imprimantes.",
      "Matériels partagés : laboratoires, ateliers, salles techniques, contenants réutilisables.",
      "Suivi multi-sites : transferts entre sites, stocks tampons, prêts inter-départements.",
    ],
    ctaTitle: "Rendez votre parc d’actifs plus fiable",
    ctaSub:
      "Dites-nous vos sites, vos catégories d’actifs et vos contraintes : on vous propose un plan de déploiement clair, progressif et mesurable.",
    ctaBtn: "Contactez RFIDIA",
    ctaAlt: "Retour à l’accueil solutions",
  },
  en: {
    metaTitle: "Asset Management | RFIDIA",
    metaDesc:
      "Locate, secure and optimize critical equipment with RFID/IoT traceability: faster inventories, fewer losses and better fleet control.",
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
    heroTag: "Asset Management • Traceability & control",
    heroTitleA: "Your assets,",
    heroTitleB: "always",
    heroTitleC: "in the right place",
    heroSub:
      "RFIDIA delivers reliable visibility across your equipment (tools, IT, maintenance devices, instruments, returnable containers). Fewer losses, less time searching and faster inventories — with clear KPIs to manage availability and lifecycle.",
    heroCta1: "Assess my fleet",
    heroCta2: "All solutions",
    stats: [
      { v: "-40%", l: "Losses & gaps" },
      { v: "-60%", l: "Search time" },
      { v: "+20%", l: "Availability" },
    ],
    valueTitle: "What you truly gain",
    valueDesc: "A usage-first solution: locate, secure, count and decide — without floor complexity.",
    values: [
      {
        title: "Fast, reliable inventories",
        desc: "More frequent cycle counts without stopping operations. Clean reconciliation and auditable history.",
      },
      {
        title: "Loss reduction",
        desc: "Movement traceability, anomaly detection and meaningful alerts on discrepancies.",
      },
      {
        title: "Operational availability",
        desc: "Better location, fewer service disruptions and easier planning for maintenance and lending.",
      },
    ],
    scopeTitle: "Functional coverage",
    scopeDesc: "Composable modules: RFID, barcodes, IoT and system integrations (ERP/CMMS).",
    scope: [
      {
        title: "Identification & master data",
        desc: "RFID tagging and asset master data (categories, criticality, assignments, sites and zones).",
      },
      {
        title: "Location & movements",
        desc: "Mobile reads / fixed points to track check-in/out, transfers, loans and returns.",
      },
      {
        title: "Inventory & audit",
        desc: "Counts by zone/team/campaign with automatic reconciliation and discrepancy reporting.",
      },
      {
        title: "Maintenance & lifecycle",
        desc: "History and alerts: manage critical equipment and support renewal decisions.",
      },
      {
        title: "Security & compliance",
        desc: "Sensitive zones, logs and traceability for internal audits (scope-dependent).",
      },
      {
        title: "Systems integration",
        desc: "Connect to your tools (ERP, CMMS, ITSM) via APIs/files/events depending on constraints.",
      },
    ],
    useTitle: "Typical use cases",
    useDesc: "Where teams feel the difference within the first weeks.",
    uses: [
      "Maintenance equipment: tools, instruments, critical parts.",
      "IT assets: laptops, mobile terminals, readers, printers.",
      "Shared equipment: labs, workshops, technical rooms, returnable containers.",
      "Multi-site tracking: transfers, buffer stocks and cross-department lending.",
    ],
    ctaTitle: "Make your asset fleet reliable",
    ctaSub:
      "Share your sites, asset categories and constraints — we’ll propose a clear, measurable rollout plan.",
    ctaBtn: "Contact RFIDIA",
    ctaAlt: "Back to solutions hub",
  },
  it: {
    metaTitle: "Gestione Asset | RFIDIA",
    metaDesc:
      "Localizza, proteggi e ottimizza attrezzature critiche con tracciabilità RFID/IoT: inventari rapidi, meno perdite e governance del parco.",
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
    heroTag: "Asset Management • Tracciabilità & controllo",
    heroTitleA: "I tuoi asset,",
    heroTitleB: "sempre",
    heroTitleC: "nel posto giusto",
    heroSub:
      "RFIDIA offre visibilità affidabile su attrezzature (utensili, IT, strumenti, contenitori). Meno perdite, meno tempo di ricerca e inventari più rapidi — con KPI chiari per disponibilità e ciclo di vita.",
    heroCta1: "Valuta il parco",
    heroCta2: "Tutte le soluzioni",
    stats: [
      { v: "-40%", l: "Perdite & gap" },
      { v: "-60%", l: "Tempo di ricerca" },
      { v: "+20%", l: "Disponibilità" },
    ],
    valueTitle: "Cosa ottieni davvero",
    valueDesc: "Soluzione orientata all’uso: localizzare, proteggere, inventariare e decidere — senza complessità.",
    values: [
      {
        title: "Inventari rapidi e affidabili",
        desc: "Cycle count più frequenti senza fermare le operazioni. Riconciliazione chiara e storico auditabile.",
      },
      {
        title: "Riduzione perdite",
        desc: "Tracciabilità movimenti, rilevazione anomalie e alert utili sugli scostamenti.",
      },
      {
        title: "Disponibilità operativa",
        desc: "Migliore localizzazione, meno interruzioni e pianificazione più semplice di manutenzione e prestiti.",
      },
    ],
    scopeTitle: "Copertura funzionale",
    scopeDesc: "Moduli combinabili: RFID, barcode, IoT e integrazioni (ERP/CMMS).",
    scope: [
      {
        title: "Identificazione & anagrafiche",
        desc: "Etichettatura RFID e master data (categorie, criticità, assegnazioni, siti e zone).",
      },
      {
        title: "Localizzazione & movimenti",
        desc: "Letture mobili / punti fissi per ingressi/uscite, trasferimenti, prestiti e resi.",
      },
      {
        title: "Inventario & audit",
        desc: "Inventari per zona/team/campagna con riconciliazione automatica e report scostamenti.",
      },
      {
        title: "Manutenzione & lifecycle",
        desc: "Storico e alert: gestione asset critici e supporto decisioni di rinnovo.",
      },
      {
        title: "Sicurezza & conformità",
        desc: "Zone sensibili, log e tracciabilità per audit (in base al perimetro).",
      },
      {
        title: "Integrazione sistemi",
        desc: "Connessione a strumenti (ERP, CMMS, ITSM) via API/file/eventi secondo vincoli.",
      },
    ],
    useTitle: "Casi d’uso tipici",
    useDesc: "Dove i team vedono benefici nelle prime settimane.",
    uses: [
      "Attrezzature manutenzione: utensili, strumenti, parti critiche.",
      "Asset IT: laptop, terminali mobili, lettori, stampanti.",
      "Materiali condivisi: laboratori, officine, sale tecniche, contenitori riutilizzabili.",
      "Multi-sito: trasferimenti, stock tampone e prestiti tra reparti.",
    ],
    ctaTitle: "Rendi affidabile il parco asset",
    ctaSub: "Condividi siti, categorie e vincoli: proponiamo un piano chiaro e misurabile.",
    ctaBtn: "Contatta RFIDIA",
    ctaAlt: "Torna alle soluzioni",
  },
};

const SolutionGestionActifs = () => {
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

  const theme = useMemo(
    () => ({
      accent: "#3B5FA0",
      accent2: "#7FA6E6",
      ink: "#121727",
    }),
    []
  );

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar language={language} onLanguageChange={setLanguage} labels={t.navbar} />

      <main className="ast">
        <section className="ast-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="ast-tag">{t.heroTag}</div>
                <h1 className="ast-title">
                  {t.heroTitleA} <span className="ast-title__accent">{t.heroTitleB}</span>
                  <br />
                  {t.heroTitleC}
                </h1>
                <p className="ast-sub">{t.heroSub}</p>
                <div className="ast-actions">
                  <Link href="/contact-us" passHref>
                    <a className="ast-btn ast-btn--primary">{t.heroCta1}</a>
                  </Link>
                  <Link href="/it-solution" passHref>
                    <a className="ast-btn ast-btn--ghost">{t.heroCta2}</a>
                  </Link>
                </div>

                <div className="ast-stats">
                  {t.stats.map((s) => (
                    <div className="ast-stat" key={s.l}>
                      <div className="ast-stat__v">{s.v}</div>
                      <div className="ast-stat__l">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="ast-visual">
                  <div className="ast-visual__frame">
                    <img src="/a_rfidia/z_rfid/z_assets.png" alt="" />
                  </div>
                  <div className="ast-visual__ring" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ast-section ast-section--soft">
          <div className="container">
            <div className="ast-head">
              <h2>{t.valueTitle}</h2>
              <p>{t.valueDesc}</p>
            </div>
            <div className="ast-grid3">
              {t.values.map((v) => (
                <article className="ast-card" key={v.title}>
                  <div className="ast-card__top" />
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ast-section">
          <div className="container">
            <div className="ast-head">
              <h2>{t.scopeTitle}</h2>
              <p>{t.scopeDesc}</p>
            </div>
            <div className="ast-grid">
              {t.scope.map((m) => (
                <article className="ast-mini" key={m.title}>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ast-section ast-section--soft">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <div className="ast-head ast-head--left">
                  <h2>{t.useTitle}</h2>
                  <p>{t.useDesc}</p>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="ast-list">
                  {t.uses.map((x) => (
                    <li key={x}>
                      <span className="ast-list__i" aria-hidden />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="ast-cta">
          <div className="container">
            <div className="ast-cta__inner">
              <div>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaSub}</p>
              </div>
              <div className="ast-cta__actions">
                <Link href="/contact-us" passHref>
                  <a className="ast-btn ast-btn--dark">{t.ctaBtn}</a>
                </Link>
                <Link href="/it-solution" passHref>
                  <a className="ast-btn ast-btn--ghost-dark">{t.ctaAlt}</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer footerGradient translations={footerT} />

      <style jsx>{`
        .ast {
          --accent: ${theme.accent};
          --accent2: ${theme.accent2};
          --ink: ${theme.ink};
          color: var(--ink);
          background: #fff;
          font-family: "Manrope", sans-serif;
        }

        .ast-hero {
          padding: 110px 0 70px;
          background: radial-gradient(980px 420px at 15% 10%, rgba(59, 95, 160, 0.18), transparent 60%),
            radial-gradient(900px 420px at 85% 20%, rgba(78, 200, 200, 0.10), transparent 58%),
            linear-gradient(180deg, #ffffff 0%, #ffffff 60%, rgba(245, 248, 255, 0.55) 100%);
          border-bottom: 1px solid rgba(18, 23, 39, 0.06);
        }
        .ast-tag {
          display: inline-flex;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(18, 23, 39, 0.65);
          background: rgba(59, 95, 160, 0.10);
          border: 1px solid rgba(59, 95, 160, 0.18);
          margin-bottom: 18px;
          width: fit-content;
        }
        .ast-title {
          font-size: clamp(2.1rem, 4.5vw, 3.85rem);
          font-weight: 900;
          line-height: 1.12;
          margin: 0 0 18px;
          letter-spacing: -0.02em;
        }
        .ast-title__accent {
          background: linear-gradient(120deg, var(--accent) 0%, var(--accent2) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ast-sub {
          color: rgba(18, 23, 39, 0.72);
          font-size: 1.06rem;
          line-height: 1.75;
          max-width: 560px;
          margin: 0 0 22px;
        }
        .ast-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
        }
        .ast-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 20px;
          border-radius: 14px;
          font-weight: 800;
          text-decoration: none;
          border: 1px solid transparent;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease;
        }
        .ast-btn--primary {
          background: linear-gradient(120deg, var(--accent) 0%, #24457d 100%);
          color: #fff;
          box-shadow: 0 16px 34px rgba(59, 95, 160, 0.22);
        }
        .ast-btn--primary:hover {
          transform: translateY(-2px);
          color: #fff;
          box-shadow: 0 18px 42px rgba(59, 95, 160, 0.28);
        }
        .ast-btn--ghost {
          background: rgba(255, 255, 255, 0.55);
          color: var(--ink);
          border-color: rgba(18, 23, 39, 0.12);
          backdrop-filter: blur(10px);
        }
        .ast-btn--ghost:hover {
          transform: translateY(-2px);
          color: var(--ink);
          border-color: rgba(18, 23, 39, 0.18);
        }
        .ast-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          max-width: 540px;
        }
        .ast-stat {
          border-radius: 16px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 10px 30px rgba(18, 23, 39, 0.06);
        }
        .ast-stat__v {
          font-weight: 900;
          font-size: 1.25rem;
          margin-bottom: 2px;
          letter-spacing: -0.02em;
        }
        .ast-stat__l {
          font-size: 0.86rem;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.35;
        }

        .ast-visual {
          position: relative;
          padding: 10px 0 14px;
        }
        .ast-visual__frame {
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 34px 70px rgba(18, 23, 39, 0.12);
          background: #fff;
        }
        .ast-visual__frame img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
        }
        .ast-visual__ring {
          position: absolute;
          inset: -30px;
          border-radius: 36px;
          pointer-events: none;
          border: 1px solid rgba(59, 95, 160, 0.18);
          box-shadow: inset 0 0 0 1px rgba(78, 200, 200, 0.08);
          mask-image: radial-gradient(circle at 50% 50%, black 55%, transparent 68%);
          opacity: 0.9;
        }

        .ast-section {
          padding: 74px 0;
        }
        .ast-section--soft {
          background: linear-gradient(180deg, rgba(245, 248, 255, 0.85) 0%, rgba(245, 248, 255, 0.45) 100%);
          border-top: 1px solid rgba(18, 23, 39, 0.06);
          border-bottom: 1px solid rgba(18, 23, 39, 0.06);
        }
        .ast-head {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 34px;
        }
        .ast-head--left {
          text-align: left;
          margin: 0 0 22px;
          max-width: 520px;
        }
        .ast-head h2 {
          font-size: clamp(1.65rem, 2.8vw, 2.35rem);
          font-weight: 900;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .ast-head p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
          font-size: 1.02rem;
        }
        .ast-grid3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .ast-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        @media (max-width: 991px) {
          .ast-grid3,
          .ast-grid {
            grid-template-columns: 1fr;
          }
          .ast-stats {
            grid-template-columns: 1fr;
          }
          .ast-visual__frame img {
            height: 360px;
          }
          .ast-hero {
            padding: 100px 0 54px;
          }
        }
        .ast-card {
          border-radius: 22px;
          background: #fff;
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 18px 46px rgba(18, 23, 39, 0.08);
          padding: 18px 18px 16px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .ast-card__top {
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(90deg, rgba(59, 95, 160, 0.95), rgba(78, 200, 200, 0.45));
        }
        .ast-card:hover {
          transform: translateY(-6px);
          border-color: rgba(59, 95, 160, 0.22);
          box-shadow: 0 26px 70px rgba(18, 23, 39, 0.10);
        }
        .ast-card h3 {
          font-size: 1.06rem;
          font-weight: 900;
          margin: 10px 0 8px;
          letter-spacing: -0.01em;
        }
        .ast-card p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
          font-size: 0.98rem;
        }
        .ast-mini {
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 18px 46px rgba(18, 23, 39, 0.06);
          padding: 18px;
        }
        .ast-mini h3 {
          font-size: 1.02rem;
          font-weight: 900;
          margin: 0 0 8px;
        }
        .ast-mini p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
        }
        .ast-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 12px;
        }
        .ast-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(18, 23, 39, 0.10);
          border-radius: 18px;
          box-shadow: 0 16px 44px rgba(18, 23, 39, 0.06);
        }
        .ast-list__i {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 0 5px rgba(59, 95, 160, 0.12);
          margin-top: 7px;
          flex-shrink: 0;
        }

        .ast-cta {
          padding: 62px 0 86px;
          background: #fff;
        }
        .ast-cta__inner {
          border-radius: 28px;
          background: radial-gradient(900px 420px at 20% 20%, rgba(59, 95, 160, 0.26), transparent 55%),
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
        .ast-cta__inner h2 {
          color: #fff;
          font-weight: 900;
          margin: 0 0 8px;
          font-size: clamp(1.55rem, 2.5vw, 2.1rem);
          letter-spacing: -0.02em;
        }
        .ast-cta__inner p {
          margin: 0;
          color: rgba(255, 255, 255, 0.80);
          line-height: 1.65;
          max-width: 540px;
        }
        .ast-cta__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ast-btn--dark {
          background: linear-gradient(120deg, var(--accent) 0%, #24457d 100%);
          color: #fff;
          box-shadow: 0 18px 46px rgba(59, 95, 160, 0.22);
        }
        .ast-btn--dark:hover {
          transform: translateY(-2px);
          color: #fff;
        }
        .ast-btn--ghost-dark {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
        }
        .ast-btn--ghost-dark:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.26);
          color: rgba(255, 255, 255, 0.96);
        }
      `}</style>
    </Layout>
  );
};

export default SolutionGestionActifs;

