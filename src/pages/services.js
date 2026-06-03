import React, { useEffect, useState } from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Link from "next/link";
import { 
  FiSearch, 
  FiCpu, 
  FiLayers, 
  FiShield, 
  FiUsers, 
  FiArrowRight, 
  FiCheckCircle, 
  FiAward, 
  FiCheck,
  FiTrendingUp
} from 'react-icons/fi';

const IconComponent = ({ name, className }) => {
  const icons = {
    FiSearch: <FiSearch className={className} />,
    FiCpu: <FiCpu className={className} />,
    FiLayers: <FiLayers className={className} />,
    FiShield: <FiShield className={className} />,
    FiUsers: <FiUsers className={className} />,
  };
  return icons[name] || <FiCpu className={className} />;
};

const i18nContent = {
  fr: {
    metaTitle: "Services & Ingénierie RFID & IoT | RFIDIA",
    metaDesc: "Audit de site, intégration matérielle, middleware sur-mesure et support 24/7. RFIDIA conçoit votre architecture de traçabilité de A à Z.",
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
    footer: {
      followUs: "Suivez-nous :",
      companyTitle: "Notre Entreprise",
      about: "À propos",
      solutions: "Nos Solutions",
      services: "Nos Services",
      sectors: "Secteurs d'Activité",
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
      brandDesc: "Leader tunisien de la traçabilité intelligente. Nous accompagnons les entreprises dans leur transformation digitale grâce à nos solutions RFID, IoT et codes-barres haute performance.",
    },
    heroTag: "Nos Services & Expertise",
    heroTitle: "L'ingénierie de précision pour vos flux physiques.",
    heroDesc: "De la phase de conseil initiale à la maintenance opérationnelle continue, RFIDIA conçoit et intègre des solutions de traçabilité RFID & IoT sur mesure pour fiabiliser et automatiser vos opérations industrielles.",
    heroCta: "Parler à un ingénieur",
    heroSubCta: "Nos solutions",

    sectionServicesTag: "Champs d'intervention",
    sectionServicesTitle: "Des prestations conçues pour la performance terrain",
    sectionServicesDesc: "Nous intervenons sur l'ensemble de la chaîne de valeur pour transformer vos défis physiques en flux de données fiables.",

    servicesList: [
      {
        id: "audit",
        icon: "FiSearch",
        title: "Audit & Étude de Site",
        desc: "Analyse terrain rigoureuse de vos infrastructures logistiques, contraintes métalliques, environnements radiofréquences et cartographie précise de vos flux physiques.",
        deliverables: ["Spécification des cas d'usage", "Cartographie radiofréquence (RF)", "Étude de faisabilité & ROI"]
      },
      {
        id: "hardware",
        icon: "FiCpu",
        title: "Architecture & Intégration Matérielle",
        desc: "Sélection rigoureuse et positionnement millimétré des composants : tags durcis, antennes industrielles, portiques de quai et lecteurs mobiles RFID adaptés à votre secteur.",
        deliverables: ["Sélection tags (UHF, HF, Actifs)", "Installation de portiques industriels", "Calibration terrain & tests de lecture"]
      },
      {
        id: "software",
        icon: "FiLayers",
        title: "Middleware & Intégration SI",
        desc: "Connexion sécurisée de nos solutions avec vos ERP (SAP, Oracle) et WMS existants via notre middleware propriétaire, assurant une remontée de données sans couture.",
        deliverables: ["Passerelles ERP & WMS natives", "Filtrage & agrégation des lectures", "APIs sécurisées temps réel"]
      },
      {
        id: "support",
        icon: "FiShield",
        title: "Support & Maintenance Proactive",
        desc: "Supervision en temps réel des équipements, étalonnage régulier des antennes, support 24/7 et interventions physiques rapides pour garantir une continuité de service absolue.",
        deliverables: ["Supervision à distance du matériel", "Support technique & hotline 24/7", "Contrats SLA personnalisés"]
      },
      {
        id: "training",
        icon: "FiUsers",
        title: "Formation & Conduite du Changement",
        desc: "Programmes de formation sur mesure pour vos opérateurs terrain et administrateurs système afin de maximiser le taux d'adoption et le ROI de la technologie.",
        deliverables: ["Formation des opérateurs sur site", "Guides de bonnes pratiques RFID", "Suivi post-déploiement"]
      }
    ],

    methodologyTag: "Notre Démarche",
    methodologyTitle: "Du diagnostic au succès opérationnel",
    methodologyDesc: "Une méthodologie transparente et rigoureuse pour garantir un déploiement fluide et sans interruption d'activité.",
    methodologySteps: [
      {
        num: "01",
        phase: "Analyse & Cadrage",
        title: "Audit de vos flux physiques",
        desc: "Nous analysons vos processus actuels, identifions les goulots d'étranglement et cartographions les zones d'identification clés pour concevoir l'architecture idéale."
      },
      {
        num: "02",
        phase: "Prototypage & Lab",
        title: "Validation en environnement test",
        desc: "Nous testons différents types de tags et de puissances d'antennes sur vos propres échantillons physiques au sein de nos laboratoires pour garantir un taux de lecture de 99.9%."
      },
      {
        num: "03",
        phase: "Déploiement & Calibrage",
        title: "Installation physique et logicielle",
        desc: "Nos ingénieurs déploient le matériel sur site, configurent notre middleware et l'interfacent avec votre ERP/WMS existant sans perturber vos équipes."
      },
      {
        num: "04",
        phase: "Suivi & Optimisation",
        title: "Amélioration continue et support",
        desc: "Nous assurons la formation des équipes, la maintenance préventive et le réglage à distance des équipements pour maximiser le ROI de votre investissement."
      }
    ],

    techSectionTitle: "Intégration logicielle universelle",
    techSectionDesc: "Nos solutions s'interfacent directement avec vos outils existants via des connecteurs standardisés.",
    techWms: "Systèmes de Gestion d'Entrepôt (WMS)",
    techErp: "Progiciels de Gestion Intégrés (ERP)",
    techCustom: "Systèmes Métiers & APIs sur mesure",

    standardsTag: "Excellence Certifiée",
    standardsTitle: "Normes & Standards Internationaux",
    standardsDesc: "Chaque système conçu par RFIDIA respecte scrupuleusement les exigences mondiales pour garantir la durabilité et l'interopérabilité.",
    standardsList: [
      { title: "Standard GS1 EPCglobal Class 1 Gen 2", note: "Interopérabilité mondiale des étiquettes et codes RFID." },
      { title: "Normes ISO/IEC 18000", note: "Conformité totale sur les fréquences radio et la transmission." },
      { title: "Sécurisation & RGPD", note: "Chiffrement des identifiants et protection des données d'accès." }
    ],

    ctaTag: "Lancez votre projet",
    ctaTitle: "Prêt à connecter vos opérations ?",
    ctaDesc: "Contactez nos ingénieurs pour planifier un audit préliminaire ou une démonstration personnalisée dans vos locaux.",
    ctaBtnPrimary: "Prendre RDV avec un expert",
    ctaBtnSecondary: "Parcourir nos solutions"
  },
  en: {
    metaTitle: "Services & RFID/IoT Engineering | RFIDIA",
    metaDesc: "Site survey, hardware integration, custom middleware, and 24/7 support. RFIDIA designs your traceability architecture from A to Z.",
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
    footer: {
      followUs: "Follow us:",
      companyTitle: "Our Company",
      about: "About",
      solutions: "Our Solutions",
      services: "Our Services",
      sectors: "Industry Sectors",
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
      brandDesc: "Tunisian leader in smart traceability. We support companies in their digital transformation through high-performance RFID, IoT and barcode solutions.",
    },
    heroTag: "Our Services & Expertise",
    heroTitle: "Precision engineering for your physical workflows.",
    heroDesc: "From initial advisory to continuous operational maintenance, RFIDIA designs and integrates tailored RFID & IoT traceability solutions to secure and automate your industrial operations.",
    heroCta: "Talk to an engineer",
    heroSubCta: "Our solutions",

    sectionServicesTag: "Areas of Intervention",
    sectionServicesTitle: "Services built for field performance",
    sectionServicesDesc: "We operate across the entire value chain to turn physical operational challenges into reliable data streams.",

    servicesList: [
      {
        id: "audit",
        icon: "FiSearch",
        title: "Audit & Site Survey",
        desc: "Rigorous field analysis of your logistical infrastructures, metal constraints, radiofrequency environments, and precise mapping of your physical workflows.",
        deliverables: ["Use case specification", "Radiofrequency (RF) mapping", "Feasibility & ROI study"]
      },
      {
        id: "hardware",
        icon: "FiCpu",
        title: "Architecture & Hardware Integration",
        desc: "Rigorous selection and millimetric positioning of components: rugged tags, industrial antennas, dock portals, and mobile RFID readers suited for your industry.",
        deliverables: ["Tag selection (UHF, HF, Active)", "Industrial portal deployment", "On-site calibration & reading tests"]
      },
      {
        id: "software",
        icon: "FiLayers",
        title: "Middleware & SI Integration",
        desc: "Secure connection of our solutions with your existing ERP (SAP, Oracle) and WMS via our proprietary middleware, ensuring seamless data flows.",
        deliverables: ["Native ERP & WMS gateways", "Filtering & reading aggregation", "Secure real-time APIs"]
      },
      {
        id: "support",
        icon: "FiShield",
        title: "Support & Proactive Maintenance",
        desc: "Real-time hardware monitoring, regular antenna calibration, 24/7 support, and fast on-site interventions to guarantee absolute service continuity.",
        deliverables: ["Remote hardware health check", "24/7 hotline & technical support", "Tailored SLA contracts"]
      },
      {
        id: "training",
        icon: "FiUsers",
        title: "Training & Change Management",
        desc: "Custom training programs for your field operators and system administrators to maximize technology adoption rate and speed up ROI.",
        deliverables: ["On-site operator training", "RFID best practices guides", "Post-deployment follow-up"]
      }
    ],

    methodologyTag: "Our Process",
    methodologyTitle: "From audit to operational success",
    methodologyDesc: "A transparent and structured methodology to guarantee smooth deployment without operational downtime.",
    methodologySteps: [
      {
        num: "01",
        phase: "Analysis & Scoping",
        title: "Physical workflow audit",
        desc: "We analyze your current processes, identify physical bottlenecks, and map key reading zones to design the ideal RFID system layout."
      },
      {
        num: "02",
        phase: "Prototyping & Lab",
        title: "Validation in test environment",
        desc: "We test multiple tag styles and antenna powers on your actual physical samples inside our labs to guarantee a verified 99.9% read rate."
      },
      {
        num: "03",
        phase: "Deployment & Calibration",
        title: "Physical and software setup",
        desc: "Our engineers deploy the hardware on-site, configure our middleware, and interface it with your existing ERP/WMS without disrupting workflows."
      },
      {
        num: "04",
        phase: "Follow-up & Optimization",
        title: "Continuous improvement & support",
        desc: "We provide team training, preventive maintenance, and remote equipment calibration to maximize the ROI of your investment."
      }
    ],

    techSectionTitle: "Universal software integration",
    techSectionDesc: "Our solutions interface directly with your existing tools through standardized connectors.",
    techWms: "Warehouse Management Systems (WMS)",
    techErp: "Enterprise Resource Planning (ERP)",
    techCustom: "Custom business systems & APIs",

    standardsTag: "Certified Excellence",
    standardsTitle: "International Norms & Standards",
    standardsDesc: "Every system designed by RFIDIA strictly complies with global standards to ensure long-term durability and interoperability.",
    standardsList: [
      { title: "GS1 EPCglobal Class 1 Gen 2 Standard", note: "Global interoperability for tags and RFID codes." },
      { title: "ISO/IEC 18000 Standards", note: "Full compliance for radio frequencies and transmission." },
      { title: "Security & GDPR", note: "Encrypted identifiers and access data protection." }
    ],

    ctaTag: "Start your project",
    ctaTitle: "Ready to connect your operations?",
    ctaDesc: "Contact our engineers to schedule a preliminary audit or a customized demo at your facilities.",
    ctaBtnPrimary: "Book a meeting with an expert",
    ctaBtnSecondary: "Explore our solutions"
  },
  it: {
    metaTitle: "Servizi & Ingegneria RFID e IoT | RFIDIA",
    metaDesc: "Audit del sito, integrazione hardware, middleware su misura e supporto 24/7. RFIDIA progetta la tua architettura di tracciabilità da A a Z.",
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
    footer: {
      followUs: "Seguici:",
      companyTitle: "La nostra azienda",
      about: "Chi siamo",
      solutions: "Le nostre soluzioni",
      services: "I nostri servizi",
      sectors: "Settori",
      contact: "Contatto",
      contactTitle: "Contattaci",
      address: "Indirizzo",
      email: "Email",
      phone: "Telefono",
      newsletter: "Newsletter",
      newsletterDesc: "Resta aggiornato sulle ultime innovazioni RFID e IoT.",
      newsletterPlaceholder: "Il tuo email",
      newsletterAria: "Iscriviti",
      copyright: "Tutti i diritti riservati.",
      privacy: "Politica sulla privacy",
      legal: "Note legali",
      brandDesc: "Leader tunisino nella tracciabilità intelligente. Supportiamo le aziende nella trasformazione digitale con soluzioni RFID, IoT e codici a barre ad alte prestazioni.",
    },
    heroTag: "I Nostri Servizi & Competenza",
    heroTitle: "Ingegneria di precisione per i vostri flussi fisici.",
    heroDesc: "Dalla fase iniziale di consulenza alla manutenzione operativa continua, RFIDIA progetta e integra soluzioni di tracciabilità RFID e IoT su misura per rendere affidabili e automatizzare le vostre operazioni industriali.",
    heroCta: "Parla con un ingegnere",
    heroSubCta: "Le nostre soluzioni",

    sectionServicesTag: "Aree di Intervento",
    sectionServicesTitle: "Servizi progettati per la performance sul campo",
    sectionServicesDesc: "Interveniamo sull'intera catena del valore per trasformare le sfide fisiche in flussi di dati affidabili.",

    servicesList: [
      {
        id: "audit",
        icon: "FiSearch",
        title: "Audit & Studio del Sito",
        desc: "Analisi sul campo rigorosa delle vostre infrastrutture logistiche, vincoli metallici, ambienti a radiofrequenza e mappatura precisa dei flussi fisici.",
        deliverables: ["Specifica dei casi d'uso", "Mappatura radiofrequenza (RF)", "Studio di fattibilità & ROI"]
      },
      {
        id: "hardware",
        icon: "FiCpu",
        title: "Architettura & Integrazione Hardware",
        desc: "Selezione rigorosa e posizionamento millimetrico dei componenti: tag rinforzati, antenne industriali, varchi e lettori RFID mobili adatti al vostro settore.",
        deliverables: ["Selezione tag (UHF, HF, Attivi)", "Installazione di varchi industriali", "Calibrazione in loco e test di lettura"]
      },
      {
        id: "software",
        icon: "FiLayers",
        title: "Middleware & Integrazione SI",
        desc: "Connessione sicura delle nostre soluzioni con i vostri ERP (SAP, Oracle) e WMS esistenti tramite il nostro middleware proprietario, garantendo un flusso di dati continuo.",
        deliverables: ["Gateway ERP e WMS nativi", "Filtraggio e aggregazione letture", "API sicure in tempo reale"]
      },
      {
        id: "support",
        icon: "FiShield",
        title: "Supporto & Manutenzione Proattiva",
        desc: "Supervisione in tempo reale delle apparecchiature, calibrazione regolare delle antenne, supporto 24/7 e interventi fisici rapidi per garantire la continuità assoluta del servizio.",
        deliverables: ["Supervisione remota hardware", "Hotline & supporto tecnico 24/7", "Contratti SLA personalizzati"]
      },
      {
        id: "training",
        icon: "FiUsers",
        title: "Formazione & Gestione del Cambiamento",
        desc: "Programmi di formazione su misura per gli operatori sul campo e gli amministratori di sistema per massimizzare il tasso di adozione e il ROI della tecnologia.",
        deliverables: ["Formazione operatori in loco", "Guide alle buone pratiche RFID", "Supporto post-implementazione"]
      }
    ],

    methodologyTag: "Il Nostro Metodo",
    methodologyTitle: "Dall'audit al successo operativo",
    methodologyDesc: "Una metodologia trasparente e strutturata per garantire un'implementazione fluida e senza interruzioni operative.",
    methodologySteps: [
      {
        num: "01",
        phase: "Analisi & Scopo",
        title: "Audit dei flussi fisici",
        desc: "Analizziamo i processi attuali, identifichiamo i colli di bottiglia e mappiamo le aree di lettura chiave per progettare il sistema ideale."
      },
      {
        num: "02",
        phase: "Prototipazione & Lab",
        title: "Validazione in ambiente di test",
        desc: "Testiamo diversi modelli di tag e potenze di antenna sui vostri campioni fisici reali nei nostri laboratori per garantire un tasso di lettura del 99.9%."
      },
      {
        num: "03",
        phase: "Installazione & Taratura",
        title: "Installazione fisica e software",
        desc: "I nostri ingegneri installano l'hardware in loco, configurano il middleware e lo interfacciano con il vostro ERP/WMS esistente senza rallentare il lavoro."
      },
      {
        num: "04",
        phase: "Ottimizzazione & Supporto",
        title: "Miglioramento continuo e assistenza",
        desc: "Forniamo formazione per il personale, manutenzione preventiva e taratura remota per massimizzare il ROI del vostro investimento."
      }
    ],

    techSectionTitle: "Integrazione software universale",
    techSectionDesc: "Le nostre soluzioni si interfacciano direttamente con i vostri strumenti esistenti attraverso connettori standardizzati.",
    techWms: "Sistemi di Gestione del Magazzino (WMS)",
    techErp: "Pianificazione delle Risorse Enterprise (ERP)",
    techCustom: "Sistemi gestionali & API personalizzate",

    standardsTag: "Eccellenza Certificata",
    standardsTitle: "Norme & Standard Internazionali",
    standardsDesc: "Ogni sistema progettato da RFIDIA rispetta rigorosamente i requisiti globali per garantire durabilità e interoperabilità.",
    standardsList: [
      { title: "Standard GS1 EPCglobal Class 1 Gen 2", note: "Interoperabilità globale per tag e codici RFID." },
      { title: "Norme ISO/IEC 18000", note: "Piena conformità sulle frequenze radio e la trasmissione." },
      { title: "Sicurezza & GDPR", note: "Crittografia degli identificatori e protezione dei dati di accesso." }
    ],

    ctaTag: "Avvia il tuo progetto",
    ctaTitle: "Pronto a connettere le tue operazioni?",
    ctaDesc: "Contatta i nostri ingegneri per pianificare un audit preliminare o una demo personalizzata presso la tua azienda.",
    ctaBtnPrimary: "Fissa un incontro con un esperto",
    ctaBtnSecondary: "Esplora le nostre soluzioni"
  }
};

const Services = () => {
  const [language, setLanguage] = useState("fr");
  const [activeStep, setActiveStep] = useState(0);

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

  const t = i18nContent[language] || i18nContent.fr;

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar classOption="navbar-light" language={language} onLanguageChange={setLanguage} labels={t.navbar} />

      <main className="rf-services-page">
        {/* 1. Hero & Value Proposition */}
        <section className="srv-hero bg-light-soft">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-9 col-md-11">
                <div className="srv-badge-clean mb-3">{t.heroTag}</div>
                <h1 className="srv-title-clean mb-3">{t.heroTitle}</h1>
                <p className="srv-desc-clean mx-auto mb-4">{t.heroDesc}</p>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <Link href="/contact-us">
                    <a className="srv-btn-cyan">
                      {t.heroCta}
                      <FiArrowRight className="ms-2" />
                    </a>
                  </Link>
                  <Link href="/it-solution">
                    <a className="srv-btn-outline">
                      {t.heroSubCta}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The 5 Core Pillars Grid */}
        <section className="srv-grid-section bg-white py-80">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <div className="srv-badge-clean mb-3">{t.sectionServicesTag}</div>
                <h2 className="srv-section-title mb-3">{t.sectionServicesTitle}</h2>
                <p className="srv-section-desc">{t.sectionServicesDesc}</p>
              </div>
            </div>
            
            {/* Elegant 3/2 Hybrid Layout */}
            <div className="srv-pillars-layout">
              {t.servicesList.map((service, idx) => (
                <div className="srv-card" key={service.id}>
                  <div className="srv-card-header">
                    <div className="srv-icon-box">
                      <IconComponent name={service.icon} className="srv-icon text-cyan" />
                    </div>
                    <span className="srv-card-num">0{idx + 1}</span>
                  </div>
                  <h3 className="srv-card-title mt-3 mb-3">{service.title}</h3>
                  <p className="srv-card-desc mb-4">{service.desc}</p>
                  
                  <div className="srv-deliverables mt-auto pt-3 border-top">
                    {service.deliverables.map((del, dIdx) => (
                      <div className="srv-del-item" key={dIdx}>
                        <FiCheck className="text-cyan me-2 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Interactive Methodology Lifecycle */}
        <section className="srv-methodology bg-light-soft py-80">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <div className="srv-badge-clean mb-3">{t.methodologyTag}</div>
                <h2 className="srv-section-title mb-3">{t.methodologyTitle}</h2>
                <p className="srv-section-desc">{t.methodologyDesc}</p>
              </div>
            </div>

            {/* Stepper Navigation */}
            <div className="srv-stepper mb-5">
              {t.methodologySteps.map((step, idx) => (
                <button 
                  key={step.num}
                  className={`srv-step-btn ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <span className="step-num">{step.num}</span>
                  <span className="step-phase d-none d-md-block">{step.phase}</span>
                </button>
              ))}
            </div>

            {/* Step Detail Display Card */}
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="srv-step-detail-card">
                  <div className="row align-items-center g-4">
                    <div className="col-md-7">
                      <span className="detail-tag">{t.methodologySteps[activeStep].phase}</span>
                      <h3 className="detail-title mt-2 mb-3">{t.methodologySteps[activeStep].title}</h3>
                      <p className="detail-desc">{t.methodologySteps[activeStep].desc}</p>
                    </div>
                    <div className="col-md-5 text-center d-none d-md-block">
                      <div className="detail-visual-box">
                        <FiTrendingUp className="visual-icon text-cyan" />
                        <div className="visual-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Compatibility & Standards Double Section */}
        <section className="srv-tech bg-white py-80">
          <div className="container">
            <div className="row g-5 align-items-center">
              {/* Integration Specs */}
              <div className="col-lg-6">
                <div className="srv-tech-info">
                  <h2 className="srv-section-title text-start mb-3">{t.techSectionTitle}</h2>
                  <p className="srv-section-desc text-start mb-4">{t.techSectionDesc}</p>
                  
                  <div className="srv-tech-list">
                    <div className="srv-tech-item">
                      <div className="tech-icon-dot" />
                      <div>
                        <h4 className="tech-item-title">{t.techWms}</h4>
                        <span className="tech-item-sub">SAP EWM, Oracle WMS, Manhattan, Reflex, Generix...</span>
                      </div>
                    </div>
                    <div className="srv-tech-item">
                      <div className="tech-icon-dot" />
                      <div>
                        <h4 className="tech-item-title">{t.techErp}</h4>
                        <span className="tech-item-sub">SAP ECC/S4HANA, Oracle ERP, Microsoft Dynamics, Sage...</span>
                      </div>
                    </div>
                    <div className="srv-tech-item">
                      <div className="tech-icon-dot" />
                      <div>
                        <h4 className="tech-item-title">{t.techCustom}</h4>
                        <span className="tech-item-sub">Websockets, REST APIs, Webhooks, MQTT broker standard integrations.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* International Standards */}
              <div className="col-lg-6">
                <div className="srv-standards-card">
                  <div className="standards-badge mb-3">
                    <FiAward className="me-2" />
                    {t.standardsTag}
                  </div>
                  <h3 className="standards-card-title mb-3">{t.standardsTitle}</h3>
                  <p className="standards-card-desc mb-4">{t.standardsDesc}</p>
                  
                  <ul className="standards-list">
                    {t.standardsList.map((std, idx) => (
                      <li key={idx}>
                        <FiCheckCircle className="text-cyan me-3 flex-shrink-0 mt-1" />
                        <div>
                          <strong>{std.title}</strong>
                          <p className="std-note mb-0">{std.note}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Minimalist Elegant CTA */}
        {/* <section className="srv-cta-section py-80 bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="srv-cta-card">
                  <div className="srv-badge-clean mb-3">{t.ctaTag}</div>
                  <h2 className="srv-cta-title mb-3">{t.ctaTitle}</h2>
                  <p className="srv-cta-desc mx-auto mb-4">{t.ctaDesc}</p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <Link href="/contact-us">
                      <a className="srv-btn-cyan">
                        {t.ctaBtnPrimary}
                        <FiArrowRight className="ms-2" />
                      </a>
                    </Link>
                    <Link href="/it-solution">
                      <a className="srv-btn-outline">
                        {t.ctaBtnSecondary}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer translations={t.footer} />

      <style jsx>{`
        /* Global Minimal Style */
        .rf-services-page {
          font-family: 'Manrope', 'Inter', sans-serif;
          color: #0f1a3d;
          background-color: #ffffff;
        }

        .bg-light-soft {
          background-color: #f8fafc;
        }

        .py-80 {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .text-cyan {
          color: #4DC8C4 !important;
        }

        /* Badge system */
        .srv-badge-clean {
          display: inline-flex;
          align-items: center;
          padding: 6px 16px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background-color: rgba(77, 200, 196, 0.1);
          color: #4DC8C4;
          border: 1px solid rgba(77, 200, 196, 0.2);
        }

        /* Hero */
        .srv-hero {
          padding-top: 90px;
          padding-bottom: 75px;
          border-bottom: 1px solid #e2e8f0;
        }

        .srv-title-clean {
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          font-weight: 900;
          color: #0f1a3d;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .srv-desc-clean {
          font-size: clamp(1.05rem, 1.6vw, 1.2rem);
          color: #4f5d86;
          line-height: 1.7;
          max-width: 800px;
        }

        /* Section Heads */
        .srv-section-title {
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: #0f1a3d;
        }

        .srv-section-desc {
          font-size: 1.05rem;
          color: #4f5d86;
          line-height: 1.65;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Button design — brand teal pill (matches the header "Langue" button) */
        .srv-btn-cyan {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 12px 26px !important;
          border-radius: 999px !important;
          font-weight: 700 !important;
          font-size: 0.95rem !important;
          line-height: 1 !important;
          background: #4EC8C8 !important;
          background-image: none !important;
          background-color: #4EC8C8 !important;
          border: 1px solid #4EC8C8 !important;
          color: #ffffff !important;
          text-decoration: none !important;
          transition: background-color 0.25s ease, border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease !important;
          box-shadow: 0 8px 20px rgba(78, 200, 200, 0.28) !important;
          cursor: pointer !important;
        }

        .srv-btn-cyan :global(svg) {
          color: #ffffff !important;
        }

        .srv-btn-cyan:hover,
        .srv-btn-cyan:focus,
        .srv-btn-cyan:active {
          background: #36B8B8 !important;
          background-image: none !important;
          background-color: #36B8B8 !important;
          border-color: #36B8B8 !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 28px rgba(78, 200, 200, 0.38) !important;
        }

        /* Outline pill — same shape/size as .srv-btn-cyan, ghost variant */
        .srv-btn-outline {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 12px 26px !important;
          border-radius: 999px !important;
          font-weight: 700 !important;
          font-size: 0.95rem !important;
          line-height: 1 !important;
          background: transparent !important;
          background-image: none !important;
          background-color: transparent !important;
          color: #0f1a3d !important;
          text-decoration: none !important;
          border: 1px solid #0f1a3d !important;
          transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease !important;
          box-shadow: none !important;
          cursor: pointer !important;
        }

        .srv-btn-outline:hover,
        .srv-btn-outline:focus,
        .srv-btn-outline:active {
          background-color: #0f1a3d !important;
          border-color: #0f1a3d !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 28px rgba(15, 26, 61, 0.18) !important;
        }

        /* Pillars layout */
        .srv-pillars-layout {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }

        .srv-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(15, 26, 61, 0.01);
        }

        .srv-card:hover {
          transform: translateY(-6px);
          border-color: #4DC8C4;
          box-shadow: 0 20px 48px rgba(77, 200, 196, 0.08);
        }

        .srv-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .srv-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background-color: rgba(77, 200, 196, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .srv-card:hover .srv-icon-box {
          background-color: #4DC8C4;
        }

        .srv-card:hover .srv-icon-box :global(svg) {
          color: #ffffff !important;
        }

        .srv-icon {
          font-size: 24px;
        }

        .srv-card-num {
          font-size: 1.5rem;
          font-weight: 800;
          color: rgba(15, 26, 61, 0.15);
        }

        .srv-card-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f1a3d;
          line-height: 1.3;
        }

        .srv-card-desc {
          font-size: 0.98rem;
          color: #4f5d86;
          line-height: 1.6;
        }

        .srv-deliverables {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .srv-del-item {
          display: flex;
          align-items: flex-start;
          font-size: 0.88rem;
          font-weight: 600;
          color: #4f5d86;
        }

        /* Interactive Stepper */
        .srv-stepper {
          display: flex;
          justify-content: center;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .srv-step-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 8px;
          border: none;
          background: transparent;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }

        .srv-step-btn .step-num {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e2e8f0;
          color: #4f5d86;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }

        .srv-step-btn .step-phase {
          font-size: 0.9rem;
          font-weight: 700;
          color: #4f5d86;
        }

        .srv-step-btn.active .step-num {
          background: #4DC8C4;
          color: #0f1a3d;
          box-shadow: 0 0 0 4px rgba(77, 200, 196, 0.2);
        }

        .srv-step-btn.active .step-phase {
          color: #0f1a3d;
        }

        .srv-step-btn::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: transparent;
          transition: all 0.3s ease;
        }

        .srv-step-btn.active::after {
          background: #4DC8C4;
        }

        .srv-step-detail-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 12px 40px rgba(15, 26, 61, 0.03);
        }

        .detail-tag {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #4DC8C4;
        }

        .detail-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f1a3d;
        }

        .detail-desc {
          font-size: 1.05rem;
          color: #4f5d86;
          line-height: 1.7;
        }

        .detail-visual-box {
          position: relative;
          width: 140px;
          height: 140px;
          margin-left: auto;
          margin-right: auto;
          background: rgba(77, 200, 196, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-icon {
          font-size: 48px;
          z-index: 2;
        }

        .visual-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid rgba(77, 200, 196, 0.2);
          border-radius: 50%;
          animation: srvPulse 2.5s infinite ease-out;
        }

        @keyframes srvPulse {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        /* Integration Spec List */
        .srv-tech-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .srv-tech-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .tech-icon-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #4DC8C4;
          margin-top: 8px;
          box-shadow: 0 0 0 4px rgba(77, 200, 196, 0.15);
        }

        .tech-item-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f1a3d;
          margin-bottom: 4px;
        }

        .tech-item-sub {
          font-size: 0.92rem;
          color: #4f5d86;
        }

        /* Standards Card */
        .srv-standards-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 48px;
        }

        .standards-badge {
          display: inline-flex;
          align-items: center;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #4DC8C4;
        }

        .standards-card-title {
          font-size: 1.4rem;
          font-weight: 800;
        }

        .standards-card-desc {
          font-size: 0.98rem;
          color: #4f5d86;
          line-height: 1.6;
        }

        .standards-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .standards-list li {
          display: flex;
          align-items: flex-start;
        }

        .standards-list strong {
          color: #0f1a3d;
          font-size: 1rem;
        }

        .std-note {
          font-size: 0.88rem;
          color: #4f5d86;
          margin-top: 2px;
        }

        /* CTA Card */
        .srv-cta-card {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid #cbd5e1;
          border-radius: 28px;
          padding: 60px 48px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(15, 26, 61, 0.04);
        }

        .srv-cta-title {
          font-size: clamp(1.8rem, 3.2vw, 2.5rem);
          font-weight: 900;
          color: #0f1a3d;
          letter-spacing: -0.02em;
        }

        .srv-cta-desc {
          font-size: 1.1rem;
          color: #4f5d86;
          line-height: 1.7;
          max-width: 680px;
        }

        /* Responsive adaptations */
        @media (max-width: 768px) {
          .srv-hero {
            padding-top: 60px;
            padding-bottom: 50px;
          }
          .py-80 {
            padding-top: 50px;
            padding-bottom: 50px;
          }
          .srv-step-detail-card {
            padding: 30px 20px;
          }
          .srv-cta-card {
            padding: 40px 24px;
          }
          .srv-standards-card {
            padding: 30px 24px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Services;
