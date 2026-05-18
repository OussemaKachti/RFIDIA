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
    metaTitle: "Solution École | RFIDIA",
    metaDesc:
      "Sécurisez les parcours, maîtrisez le patrimoine pédagogique et simplifiez les inventaires grâce à la traçabilité RFID adaptée aux établissements scolaires.",
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
    heroEyebrow: "Éducation & traçabilité",
    heroTitleA: "Une école",
    heroTitleB: "sereine",
    heroTitleC: "Patrimoine pédagogique maîtrisé",
    heroSub:
      "RFIDIA accompagne les établissements avec des dispositifs respectueux de la communauté éducative : sécurisation des accès, visibilité sur le matériel pédagogique et inventaires plus fiables — sans surcharge pour les équipes.",
    heroCta1: "Échanger sur mon projet",
    heroCta2: "Toutes les solutions",
    kpis: [
      { v: "100%", l: "Parcours sécurisés" },
      { v: "-40%", l: "Écarts d’inventaire" },
      { v: "x5", l: "Relevés rapides" },
    ],
    modulesTitle: "Ce que la solution peut couvrir",
    modulesDesc:
      "Modules combinables selon votre maturité et vos infrastructures : pilote puis montée en charge maîtrisée.",
    modules: [
      {
        title: "Contrôle d’accès et flux",
        desc: "Badges, lecteurs et règles horaires pour fluidifier les entrées-sorties et sécuriser les espaces sensibles.",
      },
      {
        title: "Inventaire & étiquetage RFID",
        desc: "Identification unique des ressources, relevés mobiles rapides et réconciliation avec vos listes ou logiciels.",
      },
      {
        title: "Suivi des actifs pédagogiques",
        desc: "Visibilité sur les attributions, les mouvements entre salles ou sites et l’historique pour limiter les pertes.",
      },
      {
        title: "Tableaux de bord sobres",
        desc: "Indicateurs lisibles : état du parc, alertes utiles et exports pour vos reporting internes.",
      },
      {
        title: "Intégration SI",
        desc: "Échanges contrôlés avec vos outils existants (référentiels, GMAO légère ou solutions métiers).",
      },
      {
        title: "Formation & accompagnement",
        desc: "Montée en compétence des équipes, documentation claire et support pour ancrer les usages dans la durée.",
      },
    ],
    journeyTitle: "Un déploiement structuré, sans surprise",
    journeyDesc:
      "Quatre étapes éprouvées pour avancer avec clarté et mesurer les bénéfices sur le terrain.",
    journey: [
      { n: "01", t: "Diagnostic & cadrage", d: "Ateliers avec vos équipes, priorités, conformité et périmètre fonctionnel." },
      { n: "02", t: "Conception & pilote", d: "Architecture technique, choix des supports RFID et expérimentation sur un site pilote." },
      { n: "03", t: "Déploiement & intégration", d: "Installation encadrée, paramétrage, raccordements utiles et validation des flux réels." },
      { n: "04", t: "Adoption & amélioration", d: "Formation, support, indicateurs de suivi et ajustements pour pérenniser les usages." },
    ],
    proofTitle: "Où cela fait la différence",
    proofDesc:
      "Des contextes concrets où nos clients gagnent en sérénité opérationnelle au quotidien.",
    proofs: [
      "Collèges, lycées et campus : circulations aux heures de pointe et espaces mutualisés.",
      "Bibliothèques et médiathèques : prêts, collections mobiles et inventaires cycliques plus rapides.",
      "Ateliers, laboratoires et salles techniques : équipements sensibles suivis avec précision.",
      "Internats et résidences : gestion des accès et des ressources partagées selon vos protocoles.",
    ],
    ctaTitle: "Présentez-nous votre établissement",
    ctaSub:
      "Nous vous répondons avec une vision réaliste : objectifs, calendrier et périmètre adaptés à votre communauté scolaire.",
    ctaBtn: "Contacter RFIDIA",
    ctaAlt: "Retour à l’accueil solutions",
  },
  en: {
    metaTitle: "School Solution | RFIDIA",
    metaDesc:
      "Secure journeys, master educational assets and streamline inventories with RFID traceability designed for schools and campuses.",
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
    heroEyebrow: "Education & traceability",
    heroTitleA: "A calmer school",
    heroTitleB: "environment",
    heroTitleC: "with educational assets under control",
    heroSub:
      "RFIDIA supports schools with respectful, field-proven approaches: access security, visibility on teaching equipment and more reliable inventories — without burdening staff.",
    heroCta1: "Discuss my project",
    heroCta2: "All solutions",
    kpis: [
      { v: "100%", l: "Safer journeys" },
      { v: "-40%", l: "Inventory gaps" },
      { v: "x5", l: "Fast counts" },
    ],
    modulesTitle: "What the solution can cover",
    modulesDesc: "Composable modules based on your maturity: we favour pilot phases and controlled scale-up.",
    modules: [
      {
        title: "Access & flow control",
        desc: "Badges, readers and time rules to smooth entries and exits and secure spaces that require it.",
      },
      {
        title: "RFID labeling & inventory",
        desc: "Unique resource IDs, mobile fast counts and reconciliation with your lists or management tools.",
      },
      {
        title: "Teaching asset tracking",
        desc: "Visibility on assignments, moves between rooms or sites and history to limit losses.",
      },
      {
        title: "Clear dashboards",
        desc: "Readable indicators for teams: fleet status, meaningful alerts and exports for internal reporting.",
      },
      {
        title: "Systems integration",
        desc: "Controlled exchanges with your existing stack (directories, lightweight CMMS or business tools).",
      },
      {
        title: "Training & support",
        desc: "Skills building, clear documentation and support to sustain adoption over time.",
      },
    ],
    journeyTitle: "Structured rollout, no surprises",
    journeyDesc: "Four proven steps to move forward with clarity and measure benefits.",
    journey: [
      { n: "01", t: "Discovery & scoping", d: "Workshops with your teams, priorities, compliance and functional perimeter." },
      { n: "02", t: "Design & pilot", d: "Technical architecture, RFID media choices and pilot on a site or building." },
      { n: "03", t: "Deployment & integration", d: "Supervised installation, configuration, connections as needed and validation in real conditions." },
      { n: "04", t: "Adoption & improvement", d: "Training, support, follow-up metrics and refinements for long-term usage." },
    ],
    proofTitle: "Where it matters most",
    proofDesc: "Typical contexts where schools gain operational peace of mind.",
    proofs: [
      "Middle schools, high schools and campuses: peak-time circulation and shared facilities.",
      "Libraries and media centers: loans, mobile collections and faster cyclical inventories.",
      "Workshops, labs and technical rooms: sensitive or high-value equipment tracked with precision.",
      "Boarding and residences: access and shared resources aligned with your protocols.",
    ],
    ctaTitle: "Tell us about your institution",
    ctaSub:
      "We respond with a realistic view: goals, timeline and scope suited to your school community.",
    ctaBtn: "Contact RFIDIA",
    ctaAlt: "Back to solutions hub",
  },
  it: {
    metaTitle: "Soluzione Scuola | RFIDIA",
    metaDesc:
      "Percorsi più sicuri, patrimonio didattico sotto controllo e inventari semplificati con tracciabilità RFID per istituti scolastici.",
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
    heroEyebrow: "Istruzione & tracciabilità",
    heroTitleA: "Un ambiente scolastico più",
    heroTitleB: "sereno",
    heroTitleC: "e un patrimonio didattico più controllato",
    heroSub:
      "RFIDIA affianca gli istituti con approcci rispettosi e concreti: sicurezza degli accessi, visibilità sul materiale didattico e inventari più affidabili — senza appesantire il personale.",
    heroCta1: "Parliamo del progetto",
    heroCta2: "Tutte le soluzioni",
    kpis: [
      { v: "100%", l: "Percorsi sicuri" },
      { v: "-40%", l: "Gap inventario" },
      { v: "x5", l: "Rilevazioni rapide" },
    ],
    modulesTitle: "Cosa può coprire la soluzione",
    modulesDesc: "Moduli combinabili in base alla maturità: privilegiamo pilota e scalabilità controllata.",
    modules: [
      {
        title: "Controllo accessi e flussi",
        desc: "Badge, lettori e regole orarie per fluidificare entrate/uscite e proteggere gli spazi necessari.",
      },
      {
        title: "Etichettatura RFID e inventario",
        desc: "Identificazione univoca, rilevazioni mobili veloci e riconciliazione con elenchi o gestionali.",
      },
      {
        title: "Monitoraggio asset didattici",
        desc: "Visibilità su assegnazioni, spostamenti tra aule o sedi e storico per limitare le perdite.",
      },
      {
        title: "Dashboard chiare",
        desc: "Indicatori leggibili: stato parco, alert significativi ed export per reporting interno.",
      },
      {
        title: "Integrazione IT",
        desc: "Scambi controllati con gli strumenti esistenti (anagrafiche, GMAO leggera o applicazioni di settore).",
      },
      {
        title: "Formazione e supporto",
        desc: "Aggiornamento del personale, documentazione chiara e assistenza per radicare gli usi nel tempo.",
      },
    ],
    journeyTitle: "Un rollout strutturato",
    journeyDesc: "Quattro fasi per avanzare con chiarezza e misurare i benefici sul campo.",
    journey: [
      { n: "01", t: "Analisi e perimetro", d: "Workshop con le squadre, priorità, conformità e ambito funzionale." },
      { n: "02", t: "Progetto e pilota", d: "Architettura tecnica, scelta supporti RFID e sperimentazione su un sito pilota." },
      { n: "03", t: "Deploy e integrazione", d: "Installazione guidata, configurazione, collegamenti utili e validazione dei flussi reali." },
      { n: "04", t: "Adozione e miglioramento", d: "Formazione, supporto, KPI di follow-up e aggiustamenti per consolidare gli usi." },
    ],
    proofTitle: "Dove fa la differenza",
    proofDesc: "Contesti tipici in cui si guadagna serenità operativa.",
    proofs: [
      "Scuole secondarie e campus: circolazione nelle ore di punta e spazi condivisi.",
      "Biblioteche e mediateche: prestiti, collezioni mobili e inventari ciclici più rapidi.",
      "Laboratori e aule tecniche: attrezzature sensibili tracciate con precisione.",
      "Convitti e residenze: accessi e risorse condivise secondo i protocolli.",
    ],
    ctaTitle: "Presentate il vostro istituto",
    ctaSub:
      "Rispondiamo con obiettivi, calendario e perimetro adatti alla vostra comunita scolastica.",
    ctaBtn: "Contatta RFIDIA",
    ctaAlt: "Torna alle soluzioni",
  },
};

const SolutionEcole = () => {
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
      primary: "#1E2A4A",
      primary2: "#4EC8C4",
      primaryDark: "#121727",
      ink: "#121727",
      soft: "#F4F7FC",
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
                    <img src="/a_rfidia/z_school/school.png" alt="" />
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
          padding: 60px 0 70px;
          background: radial-gradient(1000px 380px at 15% 10%, rgba(30, 42, 74, 0.14), transparent 60%),
            radial-gradient(900px 420px at 85% 20%, rgba(78, 200, 196, 0.12), transparent 58%),
            linear-gradient(180deg, #ffffff 0%, #ffffff 60%, rgba(244, 247, 252, 0.85) 100%);
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
          background: rgba(30, 42, 74, 0.08);
          border: 1px solid rgba(30, 42, 74, 0.16);
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
          box-shadow: 0 16px 34px rgba(30, 42, 74, 0.22);
        }
        .txl-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 42px rgba(30, 42, 74, 0.28);
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
          box-shadow: 0 0 0 4px rgba(30, 42, 74, 0.14);
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
          background: linear-gradient(180deg, rgba(244, 247, 252, 0.95) 0%, rgba(244, 247, 252, 0.55) 100%);
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
          background: linear-gradient(90deg, rgba(30, 42, 74, 0.95), rgba(78, 200, 196, 0.55));
        }
        .txl-card:hover {
          transform: translateY(-6px);
          border-color: rgba(30, 42, 74, 0.22);
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
          background: rgba(30, 42, 74, 0.10);
          color: rgba(18, 23, 39, 0.85);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          border: 1px solid rgba(30, 42, 74, 0.14);
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
          background: linear-gradient(135deg, rgba(30, 42, 74, 0.96), rgba(78, 200, 196, 0.88));
          color: rgba(255, 255, 255, 0.96);
          box-shadow: 0 14px 34px rgba(30, 42, 74, 0.18);
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
          background: linear-gradient(180deg, rgba(30, 42, 74, 0.32), rgba(30, 42, 74, 0));
        }

        .txl-cta {
          padding: 62px 0 86px;
          background: #fff;
        }
        .txl-cta__inner {
          border-radius: 28px;
          background: radial-gradient(900px 420px at 20% 20%, rgba(30, 42, 74, 0.28), transparent 55%),
            radial-gradient(900px 420px at 80% 15%, rgba(78, 200, 196, 0.12), transparent 55%),
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
          box-shadow: 0 18px 46px rgba(30, 42, 74, 0.22);
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

export default SolutionEcole;

