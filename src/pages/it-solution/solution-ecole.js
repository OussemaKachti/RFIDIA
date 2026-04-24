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

const pageCopy = {
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
    heroBadge: "Éducation & traçabilité",
    heroTitle1: "Une école plus",
    heroTitleAccent: "sereine",
    heroTitle2: "et un patrimoine pédagogique mieux maîtrisé",
    heroSub:
      "RFIDIA accompagne les établissements avec des dispositifs respectueux de la communauté éducative : sécurisation des accès, visibilité sur le matériel pédagogique et processus d’inventaire plus fiables — sans surcharge pour les équipes.",
    heroCtaPrimary: "Échanger sur mon projet",
    heroCtaSecondary: "Toutes les solutions",
    challengesTitle: "Des enjeux concrets au quotidien",
    challengesDesc:
      "Chaque établissement est unique ; nos déploiements s’alignent sur vos priorités : sécurité, organisation et soutien aux équipes enseignantes et administratives.",
    challenges: [
      {
        title: "Sécurité des personnes et des biens",
        desc: "Maîtriser les flux aux heures d’affluence, sécuriser les zones sensibles et garder une visibilité claire sur les équipements partagés.",
      },
      {
        title: "Patrimoine pédagogique dispersé",
        desc: "Tablettes, supports numériques, matériel de laboratoire ou de sport : suivre les attributions et limiter les pertes sans multiplier les contrôles manuels.",
      },
      {
        title: "Temps administratif précieux",
        desc: "Réduire les écarts d’inventaire et les recherches d’objets grâce à des relevés rapides et des données centralisées exploitables par votre équipe.",
      },
    ],
    valueTitle: "Une approche respectueuse et pragmatique",
    valueDesc: "La technologie au service de l’école, pas l’inverse.",
    valueP1:
      "Nous concevons des parcours simples pour les élèves et le personnel, avec une gouvernance des données adaptée au secteur public et aux exigences de protection des personnes. Chaque projet est cadré avec vos équipes : direction, vie scolaire, informatique et partenaires.",
    valueP2:
      "L’objectif est clair : renforcer la tranquillité des lieux, améliorer la traçabilité des ressources pédagogiques et offrir des indicateurs utiles pour décider — en restant à l’écoute des contraintes du terrain.",
    featuresTitle: "Ce que la solution peut couvrir",
    featuresDesc:
      "Modules combinables selon votre maturité et vos infrastructures : nous privilégions les étapes pilotes et une montée en charge maîtrisée.",
    features: [
      {
        title: "Contrôle d’accès et flux",
        desc: "Badges, lecteurs et règles horaires pour fluidifier les entrées-sorties et sécuriser les espaces qui le nécessitent.",
      },
      {
        title: "Inventaire & étiquetage RFID",
        desc: "Identification unique des ressources, relevés mobiles rapides et réconciliation avec vos listes ou votre logiciel de gestion.",
      },
      {
        title: "Suivi des actifs pédagogiques",
        desc: "Visibilité sur les attributions, les mouvements entre salles ou sites et l’historique des opérations pour limiter les pertes.",
      },
      {
        title: "Tableaux de bord sobres",
        desc: "Indicateurs lisibles pour les équipes : état du parc, alertes utiles et exports pour vos reporting internes.",
      },
      {
        title: "Intégration SI",
        desc: "Échanges contrôlés avec vos outils existants (référentiels, GMAO légère ou solutions métiers) selon vos choix d’architecture.",
      },
      {
        title: "Formation & accompagnement",
        desc: "Montée en compétence des équipes, documentation claire et support pour ancrer les usages dans la durée.",
      },
    ],
    useCasesTitle: "Où cela fait la différence",
    useCasesDesc: "Exemples de contextes où nos clients gagnent en sérénité opérationnelle.",
    useCases: [
      "Collèges, lycées et campus : circulations aux heures de pointe, salles spécialisées et espaces mutualisés.",
      "Bibliothèques et médiathèques : prêts, collections mobiles et inventaires cycliques plus rapides.",
      "Ateliers, laboratoires et salles techniques : équipements sensibles ou coûteux suivis avec précision.",
      "Internats et résidences : gestion des accès et des ressources partagées selon vos protocoles.",
    ],
    processTitle: "Un déploiement structuré, sans surprise",
    processDesc: "Quatre étapes éprouvées pour avancer avec clarté et mesurer les bénéfices.",
    process: [
      {
        step: "01",
        title: "Diagnostic & cadrage",
        desc: "Ateliers avec vos équipes, identification des priorités, conformité et périmètre fonctionnel.",
      },
      {
        step: "02",
        title: "Conception & pilote",
        desc: "Architecture technique, choix des supports RFID et expérimentation sur un site ou un bâtiment pilote.",
      },
      {
        step: "03",
        title: "Déploiement & intégration",
        desc: "Installation encadrée, paramétrage, raccordements utiles et validation des flux réels.",
      },
      {
        step: "04",
        title: "Adoption & amélioration",
        desc: "Formation, support, indicateurs de suivi et ajustements pour pérenniser les usages.",
      },
    ],
    ctaTitle: "Présentez-nous votre établissement",
    ctaSub:
      "Nous vous répondons avec une vision réaliste : objectifs, calendrier et périmètre adaptés à votre communauté scolaire.",
    ctaBtn: "Contacter RFIDIA",
    ctaSecondary: "Retour à l’accueil solutions",
    floatLabel1: "Parcours sécurisés",
    floatLabel2: "Actifs visibles",
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
    heroBadge: "Education & traceability",
    heroTitle1: "A calmer school",
    heroTitleAccent: "environment",
    heroTitle2: "with educational assets under control",
    heroSub:
      "RFIDIA supports schools with respectful, field-proven approaches: access security, visibility on teaching equipment and more reliable inventories — without burdening staff.",
    heroCtaPrimary: "Discuss my project",
    heroCtaSecondary: "All solutions",
    challengesTitle: "Real challenges, every day",
    challengesDesc:
      "Each institution is unique. Our rollouts align with your priorities: safety, organization and support for teaching and administrative teams.",
    challenges: [
      {
        title: "People and asset safety",
        desc: "Manage peak-time flows, secure sensitive areas and keep clear visibility on shared equipment.",
      },
      {
        title: "Spread-out teaching assets",
        desc: "Track assignments for tablets, lab or sports gear and reduce losses without endless manual checks.",
      },
      {
        title: "Valuable administrative time",
        desc: "Shrink inventory gaps and time spent searching for items with fast RFID reads and centralized, actionable data.",
      },
    ],
    valueTitle: "Respectful, pragmatic delivery",
    valueDesc: "Technology in service of the school — not the other way around.",
    valueP1:
      "We design simple journeys for students and staff, with data governance suited to public-sector expectations. Every project is framed with your teams: leadership, student life, IT and partners.",
    valueP2:
      "The goal is clear: strengthen peace of mind on site, improve traceability of teaching resources and provide indicators that help you decide — grounded in real operational constraints.",
    featuresTitle: "What the solution can cover",
    featuresDesc:
      "Composable modules based on your maturity and infrastructure: we favour pilot phases and controlled scale-up.",
    features: [
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
    useCasesTitle: "Where it matters most",
    useCasesDesc: "Typical contexts where schools gain operational peace of mind.",
    useCases: [
      "Middle schools, high schools and campuses: peak-time circulation, specialized rooms and shared facilities.",
      "Libraries and media centers: loans, mobile collections and faster cyclical inventories.",
      "Workshops, labs and technical rooms: sensitive or high-value equipment tracked with precision.",
      "Boarding and residences: access and shared resources aligned with your protocols.",
    ],
    processTitle: "Structured rollout, no surprises",
    processDesc: "Four proven steps to move forward with clarity and measure benefits.",
    process: [
      {
        step: "01",
        title: "Discovery & scoping",
        desc: "Workshops with your teams, priorities, compliance and functional perimeter.",
      },
      {
        step: "02",
        title: "Design & pilot",
        desc: "Technical architecture, RFID media choices and pilot on a site or building.",
      },
      {
        step: "03",
        title: "Deployment & integration",
        desc: "Supervised installation, configuration, connections as needed and validation in real conditions.",
      },
      {
        step: "04",
        title: "Adoption & improvement",
        desc: "Training, support, follow-up metrics and refinements for long-term usage.",
      },
    ],
    ctaTitle: "Tell us about your institution",
    ctaSub:
      "We respond with a realistic view: goals, timeline and scope suited to your school community.",
    ctaBtn: "Contact RFIDIA",
    ctaSecondary: "Back to solutions hub",
    floatLabel1: "Safer journeys",
    floatLabel2: "Visible assets",
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
    heroBadge: "Istruzione & tracciabilità",
    heroTitle1: "Un ambiente scolastico più",
    heroTitleAccent: "sereno",
    heroTitle2: "e un patrimonio didattico più controllato",
    heroSub:
      "RFIDIA affianca gli istituti con approcci rispettosi e concreti: sicurezza degli accessi, visibilità sul materiale didattico e inventari più affidabili — senza appesantire il personale.",
    heroCtaPrimary: "Parliamo del progetto",
    heroCtaSecondary: "Tutte le soluzioni",
    challengesTitle: "Sfide reali, ogni giorno",
    challengesDesc:
      "Ogni istituto è unico; i nostri progetti seguono le vostre priorità: sicurezza, organizzazione e supporto a docenti e staff amministrativo.",
    challenges: [
      {
        title: "Sicurezza di persone e beni",
        desc: "Gestire i flussi nei momenti di punta, proteggere le aree sensibili e avere chiarezza sugli strumenti condivisi.",
      },
      {
        title: "Patrimonio didattico disperso",
        desc: "Tablet, laboratori, attrezzature sportive: seguire le assegnazioni e ridurre le perdite senza controlli manuali continui.",
      },
      {
        title: "Tempo amministrativo prezioso",
        desc: "Ridurre gap di inventario e ricerche grazie a letture RFID rapide e dati centralizzati utilizzabili dal team.",
      },
    ],
    valueTitle: "Un approccio rispettoso e pragmatico",
    valueDesc: "La tecnologia al servizio della scuola, non il contrario.",
    valueP1:
      "Progettiamo percorsi semplici per studenti e personale, con governance dei dati adeguata al settore pubblico. Ogni iniziativa è definita con direzione, vita scolastica, IT e partner.",
    valueP2:
      "Obiettivo chiaro: maggiore tranquillità nei luoghi, tracciabilità delle risorse didattiche e indicatori utili per decidere — nel rispetto dei vincoli operativi.",
    featuresTitle: "Cosa può coprire la soluzione",
    featuresDesc:
      "Moduli combinabili in base alla maturità e alle infrastrutture: privilegiamo pilota e scalabilità controllata.",
    features: [
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
    useCasesTitle: "Dove fa la differenza",
    useCasesDesc: "Contesti tipici in cui si guadagna serenità operativa.",
    useCases: [
      "Scuole secondarie e campus: circolazione nelle ore di punta, laboratori e spazi condivisi.",
      "Biblioteche e mediateche: prestiti, collezioni mobili e inventari ciclici più rapidi.",
      "Laboratori e aule tecniche: attrezzature sensibili o di valore tracciate con precisione.",
      "Convitti e residenze: accessi e risorse condivise secondo i vostri protocolli.",
    ],
    processTitle: "Un rollout strutturato",
    processDesc: "Quattro fasi collaudate per avanzare con chiarezza e misurare i benefici.",
    process: [
      {
        step: "01",
        title: "Diagnosi e perimetro",
        desc: "Workshop con i team, priorità, conformità e ambito funzionale.",
      },
      {
        step: "02",
        title: "Progetto e pilota",
        desc: "Architettura, scelta dei supporti RFID e sperimentazione su un sito pilota.",
      },
      {
        step: "03",
        title: "Deploy e integrazione",
        desc: "Installazione supervisionata, configurazione, collegamenti utili e validazione sul campo.",
      },
      {
        step: "04",
        title: "Adozione e miglioramento",
        desc: "Formazione, supporto, indicatori e affinamenti per durata nel tempo.",
      },
    ],
    ctaTitle: "Raccontaci il tuo istituto",
    ctaSub:
      "Rispondiamo con una visione realistica: obiettivi, tempi e perimetro adatti alla comunità scolastica.",
    ctaBtn: "Contatta RFIDIA",
    ctaSecondary: "Torna alle soluzioni",
    floatLabel1: "Percorsi più sicuri",
    floatLabel2: "Asset visibili",
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

const SolutionEcolePage = () => {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("rfidia_lang");
    if (saved && ["fr", "en", "it"].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("rfidia_lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = pageCopy[language] || pageCopy.fr;
  const footerT = footerI18n[language] || footerI18n.fr;

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar language={language} onLanguageChange={setLanguage} labels={t.navbar} />

      <main className="rl sol-ecole">
        <section className="rl-hero sol-ecole-hero">
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
                <div className="rl-hero__visual sol-ecole-hero-visual">
                  <img
                    src="/a_rfidia/z_school/school2.png"
                    alt=""
                    className="rl-hero__img sol-ecole-hero-img"
                  />
                  <div className="rl-hero__float rl-hero__float--tl sol-ecole-float">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>{t.floatLabel1}</span>
                  </div>
                  <div className="rl-hero__float rl-hero__float--br sol-ecole-float sol-ecole-float--secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M4 7h16M4 12h10M4 17h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>{t.floatLabel2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sol-ecole-section sol-ecole-section--muted">
          <div className="container">
            <div className="rl-section-head">
              <SectionDivider />
              <h2>{t.challengesTitle}</h2>
              <p>{t.challengesDesc}</p>
            </div>
            <div className="row g-4">
              {t.challenges.map((c, i) => (
                <div className="col-lg-4" key={c.title}>
                  <article className="sol-ecole-card" style={{ "--delay": `${i * 0.06}s` }}>
                    <span className="sol-ecole-card__index" aria-hidden>
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

        <section className="sol-ecole-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 order-lg-2">
                <div className="sol-ecole-value-visual">
                  <div className="sol-ecole-value-frame">
                    <img src="/a_rfidia/z_rfid/rfid4.png" alt="" />
                  </div>
                  <div className="sol-ecole-value-badge">
                    <span className="sol-ecole-value-badge__dot" />
                    RFIDIA × Éducation
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="rl-section-head text-lg-start mx-lg-0">
                  <SectionDivider />
                  <h2 className="text-lg-start">{t.valueTitle}</h2>
                  <p className="text-lg-start mx-lg-0">{t.valueDesc}</p>
                </div>
                <p className="sol-ecole-prose">{t.valueP1}</p>
                <p className="sol-ecole-prose">{t.valueP2}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sol-ecole-section sol-ecole-section--muted">
          <div className="container">
            <div className="rl-section-head">
              <SectionDivider />
              <h2>{t.featuresTitle}</h2>
              <p>{t.featuresDesc}</p>
            </div>
            <div className="sol-ecole-feature-grid">
              {t.features.map((f) => (
                <article className="sol-ecole-feature" key={f.title}>
                  <div className="sol-ecole-feature__accent" aria-hidden />
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sol-ecole-section">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5">
                <div className="rl-section-head text-lg-start mx-lg-0">
                  <SectionDivider />
                  <h2 className="text-lg-start">{t.useCasesTitle}</h2>
                  <p className="text-lg-start mx-lg-0">{t.useCasesDesc}</p>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="sol-ecole-use-list">
                  {t.useCases.map((line) => (
                    <li key={line}>
                      <span className="sol-ecole-use-list__icon" aria-hidden>
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

        <section className="sol-ecole-section sol-ecole-section--process">
          <div className="container">
            <div className="rl-section-head">
              <SectionDivider />
              <h2>{t.processTitle}</h2>
              <p>{t.processDesc}</p>
            </div>
            <div className="sol-ecole-process">
              {t.process.map((step, idx) => (
                <div className="sol-ecole-process__row" key={step.step}>
                  <div className="sol-ecole-process__step">{step.step}</div>
                  <div className="sol-ecole-process__body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                  {idx < t.process.length - 1 && <div className="sol-ecole-process__connector" aria-hidden />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sol-ecole-cta">
          <div className="container">
            <div className="sol-ecole-cta__inner">
              <div>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaSub}</p>
              </div>
              <div className="sol-ecole-cta__actions">
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
        .sol-ecole-hero-visual {
          position: relative;
        }
        .sol-ecole-hero-img {
          border-radius: var(--rl-radius-lg, 22px);
          box-shadow: var(--rl-shadow-lg, 0 20px 60px rgba(6, 15, 46, 0.15));
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .sol-ecole-float {
          backdrop-filter: blur(10px);
        }
        .sol-ecole-float--secondary {
          border-color: rgba(255, 255, 255, 0.2);
        }
        .sol-ecole-section {
          padding: 72px 0;
          font-family: "Manrope", sans-serif;
        }
        .sol-ecole-section--muted {
          background: linear-gradient(
            to bottom,
            rgba(170, 205, 220, 0.12),
            rgba(170, 205, 220, 0.06)
          );
        }
        .sol-ecole-section--process {
          background: var(--rl-white, #fff);
        }
        .sol-ecole-card {
          background: var(--rl-surface, #fff);
          border-radius: var(--rl-radius-lg, 22px);
          padding: 1.75rem 1.75rem 1.5rem;
          border: 1px solid var(--rl-border, #e1e8f8);
          box-shadow: var(--rl-shadow-sm, 0 2px 12px rgba(6, 15, 46, 0.06));
          height: 100%;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease;
          animation: sol-ecole-fade-up 0.7s ease both;
          animation-delay: var(--delay, 0s);
        }
        .sol-ecole-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--rl-shadow-md, 0 8px 32px rgba(6, 15, 46, 0.1));
        }
        .sol-ecole-card__index {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #4ec8c8;
          display: block;
          margin-bottom: 0.75rem;
        }
        .sol-ecole-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--rl-navy, #1e2a4a);
          margin-bottom: 0.65rem;
        }
        .sol-ecole-card p {
          margin: 0;
          color: var(--rl-muted, #4f6289);
          line-height: 1.6;
          font-size: 0.98rem;
        }
        .sol-ecole-prose {
          color: var(--rl-muted, #4f6289);
          line-height: 1.75;
          font-size: 1.02rem;
          max-width: 540px;
        }
        .sol-ecole-value-visual {
          position: relative;
          padding: 1rem 0.5rem 2rem;
        }
        .sol-ecole-value-frame {
          border-radius: var(--rl-radius-xl, 32px);
          overflow: hidden;
          border: 1px solid var(--rl-border, #e1e8f8);
          box-shadow: var(--rl-shadow-md, 0 8px 32px rgba(6, 15, 46, 0.1));
        }
        .sol-ecole-value-frame img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
        }
        .sol-ecole-value-badge {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background: var(--rl-navy, #1e2a4a);
          color: #fff;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.65rem 1.35rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 12px 32px rgba(30, 42, 74, 0.35);
          white-space: nowrap;
        }
        .sol-ecole-value-badge__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ec8c8;
        }
        .sol-ecole-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 991px) {
          .sol-ecole-feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 575px) {
          .sol-ecole-feature-grid {
            grid-template-columns: 1fr;
          }
        }
        .sol-ecole-feature {
          background: #fff;
          border-radius: var(--rl-radius-lg, 22px);
          padding: 1.5rem 1.35rem 1.35rem;
          border: 1px solid var(--rl-border, #e1e8f8);
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .sol-ecole-feature:hover {
          border-color: rgba(78, 200, 200, 0.45);
          box-shadow: 0 12px 36px rgba(78, 200, 200, 0.12);
        }
        .sol-ecole-feature__accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #4ec8c8, #7adddd);
          opacity: 0.85;
        }
        .sol-ecole-feature h3 {
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--rl-navy, #1e2a4a);
          margin: 0.35rem 0 0.5rem;
        }
        .sol-ecole-feature p {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.55;
          color: var(--rl-muted, #4f6289);
        }
        .sol-ecole-use-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .sol-ecole-use-list li {
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
        .sol-ecole-use-list li:hover {
          transform: translateX(4px);
          box-shadow: var(--rl-shadow-sm, 0 2px 12px rgba(6, 15, 46, 0.06));
        }
        .sol-ecole-use-list li:last-child {
          margin-bottom: 0;
        }
        .sol-ecole-use-list__icon {
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
        .sol-ecole-use-list span:last-child {
          color: var(--rl-text, #0b1640);
          line-height: 1.55;
          font-size: 0.98rem;
        }
        .sol-ecole-process {
          max-width: 820px;
          margin: 0 auto;
          position: relative;
        }
        .sol-ecole-process__row {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 1.25rem 1.5rem;
          position: relative;
          padding-bottom: 2.5rem;
        }
        .sol-ecole-process__step {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, #4ec8c8, #52b4d8);
          color: #fff;
          font-weight: 800;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(78, 200, 200, 0.35);
        }
        .sol-ecole-process__body h3 {
          font-size: 1.12rem;
          font-weight: 700;
          color: var(--rl-navy, #1e2a4a);
          margin-bottom: 0.4rem;
        }
        .sol-ecole-process__body p {
          margin: 0;
          color: var(--rl-muted, #4f6289);
          line-height: 1.6;
        }
        .sol-ecole-process__connector {
          position: absolute;
          left: 27px;
          top: 58px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, rgba(78, 200, 200, 0.5), rgba(78, 200, 200, 0));
        }
        .sol-ecole-cta {
          padding: 56px 0 80px;
          font-family: "Manrope", sans-serif;
        }
        .sol-ecole-cta__inner {
          background: linear-gradient(120deg, #1e2a4a 0%, #253764 55%, #1a3a52 100%);
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
        .sol-ecole-cta__inner h2 {
          color: #fff;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .sol-ecole-cta__inner p {
          color: rgba(255, 255, 255, 0.82);
          margin: 0;
          max-width: 460px;
          line-height: 1.6;
        }
        .sol-ecole-cta__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        @keyframes sol-ecole-fade-up {
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

export default SolutionEcolePage;
