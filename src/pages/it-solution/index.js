import React, { useEffect, useState } from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Projets déployés" },
  { value: "10+", label: "Années d'expérience" },
  { value: "98%", label: "Satisfaction client" },
  { value: "15+", label: "Secteurs couverts" },
];

const solutions = [
  {
    title: "Traçabilité & Identification",
    description: "Identification fiable et traçabilité continue de vos produits, équipements et flux, du point d'entrée au point de sortie.",
    image: "/a_rfidia/z_rfid/rfid14.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="sol-icon">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 8h18M9 12h6M6 16h4M14 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    accent: "#2563eb",
  },
  {
    title: "Visibilité temps réel (IoT)",
    description: "Suivi en temps réel de vos opérations grâce aux capteurs IoT, tableaux de bord live et alertes instantanées.",
    image: "/a_rfidia/z_rfid/rfid10.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="sol-icon">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v10M9 10h6M9 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    accent: "#7c3aed",
  },
  {
    title: "Contrôle d'accès",
    description: "Sécurisation des accès physiques avec règles personnalisées, journalisation des passages et contrôle centralisé.",
    image: "/a_rfidia/z_rfid/rfid22.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="sol-icon">
        <rect x="4" y="6" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="6" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 4h6M14 4h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    accent: "#f59e0b",
  },
];

const sectors = [
  {
    id: "01",
    title: "Secteur Industriel",
    description:
      "Traçabilité de production, suivi d'équipements, contrôle qualité et pilotage des opérations en usine.",
    image: "/a_rfidia/z_industriel/z_industriel.png",
    tag: "Industrie",
  },
  {
    id: "02",
    title: "Chaîne Logistique",
    description:
      "Visibilité de bout en bout des flux, inventaires fiables et réduction des pertes sur la chaîne logistique.",
    image: "/a_rfidia/z_logistique/z_logistique.png",
    tag: "Logistique",
  },
  {
    id: "03",
    title: "Santé",
    description:
      "Suivi des dispositifs médicaux, sécurisation des stocks sensibles et amélioration des parcours internes.",
    image: "/a_rfidia/z_medical/z_medical3.png",
    tag: "Médical",
  },
  {
    id: "04",
    title: "Éducation & Écoles",
    description:
      "Gestion de l'accès aux établissements, suivi de présence du matériel, et sécurisation du parcours étudiant.",
    image: "/a_rfidia/z_school/school.png",
    tag: "Éducation",
  },
];

const virtualizationServices = [
  {
    num: "01",
    title: "Évaluation et Planification",
    desc: "Audit de vos besoins en performance et capacité pour choisir la bonne architecture et planifier vos ressources.",
    image: "/a_rfidia/z_rfid/rfid11.png",
  },
  {
    num: "02",
    title: "Conception de l'Architecture Virtualisée",
    desc: "Configuration des hôtes et des VM avec allocation optimale CPU, mémoire, stockage et réseau.",
    image: "/a_rfidia/z_rfid/rfid22.png",
  },
  {
    num: "03",
    title: "Migration et Déploiement",
    desc: "Migration de vos applications, tests de validation et ajustements pour un déploiement fiable.",
    image: "/a_rfidia/z_rfid/rfid8.png",
  },
  {
    num: "04",
    title: "Gestion et Maintenance",
    desc: "Supervision continue, sauvegarde, reprise après sinistre et maintenance proactive pour éviter les interruptions.",
    image: "/a_rfidia/z_rfid/rfid23.png",
  },
];

const consultingServices = [
  {
    title: "Évaluation personnalisée des infrastructures IT",
    desc: "Audit complet de vos systèmes, identification des goulots d'étranglement et recommandations alignées avec vos objectifs métier.",
  },
  {
    title: "Implémentation de solutions technologiques innovantes",
    desc: "Conseil et déploiement de plateformes logicielles, cloud et matériel de pointe dans le respect des délais et du budget.",
  },
  {
    title: "Gestion de projets IT complexes",
    desc: "Pilotage de bout en bout avec coordination des équipes, gestion proactive des risques et communication transparente.",
  },
  {
    title: "Optimisation des processus et automatisation",
    desc: "Amélioration des flux de travail et automatisation des tâches répétitives pour accroître l'efficacité opérationnelle et réduire les coûts.",
  },
  {
    title: "Formation continue et support technique",
    desc: "Accompagnement de vos équipes pour une adoption rapide des outils et support continu pour protéger vos investissements.",
  },
  {
    title: "Maintenance proactive",
    desc: "Surveillance continue pour identifier et corriger les incidents avant impact, afin de maintenir la disponibilité de vos systèmes.",
  },
];

const warehouseBenefits = [
  "Mise en stock et suivi des flux en temps réel",
  "Suppression des écarts entre stock théorique et stock réel",
  "Vérification immédiate de la conformité des commandes à expédier",
  "Lecture groupée et automatisée des articles à stocker",
  "Monitoring et historisation des expéditions",
  "Réduction des erreurs logistiques et traçabilité renforcée",
];

const partners = [
  { name: "Confidoo", logo: "/a_rfidia/z_rfid/confidoo.png", tagline: "Plateforme de confiance numérique" },
  { name: "Tagstream", logo: "/a_rfidia/z_rfid/tagstream.png", tagline: "Suivi des actifs en temps réel" },
  { name: "Visus Groupe", logo: "/a_rfidia/z_rfid/visus.png", tagline: "Solutions de traçabilité avancées" },
];

const testimonials = [
  {
    image: "/a_rfidia/z_rfid/amr.jfif",
    quote:
      "Leurs solutions, entièrement paramétrables, correspondent parfaitement à nos exigences. L'interfaçage avec notre système d'information s'est fait sans adaptation de notre côté. Diagnostic personnalisé, déploiement sur site et contrat de maintenance : un accompagnement sur mesure.",
    name: "Amira Ben Saleh",
    company: "Directrice des Systèmes d'Information",
  },
  {
    image: "/a_rfidia/z_rfid/img1.jfif",
    quote:
      "RFIDIA nous accompagne depuis plus de trois ans. Leur approche au cas par cas et leurs solutions sur mesure se sont parfaitement intégrées à notre environnement. Nous avons réduit nos coûts et gagné en agilité, grâce à la sécurisation de nos flux logistiques et l'automatisation des tâches chronophages.",
    name: "Mohamed Ben Ali",
    company: "Directeur de la Production",
  },
  {
    image: "/a_rfidia/z_rfid/samia.jfif",
    quote:
      "RFIDIA nous accompagne depuis plus de trois ans. Leur approche au cas par cas et leurs solutions sur mesure se sont parfaitement intégrées à notre environnement. Nous avons réduit nos coûts et gagné en agilité, grâce à la sécurisation de nos flux logistiques et l'automatisation des tâches chronophages.",
    name: "Samia Ben Mahmoud",
    company: "Responsable Logistique",
  },
];

const faqs = [
  {
    question: "Quelles solutions propose RFIDIA ?",
    answer:
      "Nous proposons des solutions RFID, IoT, codes-barres et systèmes embarqués pour la traçabilité, l'automatisation et la performance opérationnelle. Chaque solution est adaptée aux besoins spécifiques de votre secteur.",
  },
  {
    question: "Les solutions sont-elles adaptées à mon activité ?",
    answer:
      "Oui. Nos déploiements sont pensés sur mesure selon votre secteur, vos contraintes terrain et vos objectifs métiers. Nous intervenons dans l'industrie, la logistique, la santé, le retail et bien d'autres domaines.",
  },
  {
    question: "Comment se déroule un projet avec RFIDIA ?",
    answer:
      "Nous commençons par un audit approfondi de vos processus, puis nous assurons la conception, l'intégration matérielle et logicielle, la mise en production et le suivi post-déploiement. Vous êtes accompagné à chaque étape.",
  },
  {
    question: "Assurez-vous la sécurité des données ?",
    answer:
      "Oui. Nous appliquons les bonnes pratiques de sécurité à chaque étape : architecture sécurisée, contrôle des accès, chiffrement des échanges de données et maintenance régulière pour assurer la continuité de service.",
  },
];

const i18nContent = {
  fr: {
    navbar: {
      home: "Accueil",
      about: "A propos",
      services: "Services",
      contact: "Contactez-nous",
      company: "Entreprise",
      usefulLinks: "Liens utiles",
      usefulPages: "Pages utiles",
      language: "Langue",
      french: "Francais",
      english: "English",
      italian: "Italiano",
    },
    footer: {
      followUs: "Suivez-nous :",
      companyTitle: "Notre Entreprise",
      about: "A Propos",
      solutions: "Nos Solutions",
      sectors: "Secteurs d'Activite",
      projects: "Nos Realisations",
      contact: "Contact",
      contactTitle: "Contactez-nous",
      address: "Adresse",
      email: "Email",
      phone: "Telephone",
      newsletter: "Newsletter",
      newsletterDesc: "Restez informe sur les dernieres innovations en tracabilite et IoT.",
      newsletterPlaceholder: "Votre adresse email",
      newsletterAria: "S'abonner",
      copyright: "Tous droits reserves.",
      privacy: "Politique de confidentialite",
      legal: "Mentions legales",
      brandDesc:
        "Leader tunisien de la tracabilite intelligente. Nous accompagnons les entreprises dans leur transformation digitale grace a nos solutions RFID, IoT et codes-barres haute performance.",
    },
    pageTitle: "RFIDIA",
    pageDesc:
      "RFIDIA, leader tunisien en solutions de tracabilite intelligente: RFID, IoT, codes-barres et systemes embarques.",
    heroBadge: "Solutions de Tracabilite Intelligente",
    heroTitlePrefix: "Technologie",
    heroTitleAccent: "RFID & IoT",
    heroTitleSuffix: "pour votre entreprise",
    heroSub:
      "RFIDIA accompagne les entreprises dans leur transformation digitale avec des solutions fiables, evolutives et adaptees a la realite terrain.",
    heroBtnPrimary: "Decouvrir nos solutions",
    heroBtnGhost: "Nous contacter",
    heroFloatRealtime: "Tracabilite temps reel",
    heroFloatFast: "Deploiement rapide",
    sectionAbout: "A propos",
    sectionAboutTitle: "La ou les services IT rencontrent l'",
    sectionAboutAccent: "innovation",
    sectionAboutP1:
      "RFIDIA accompagne les entreprises dans leur transformation digitale grace a des solutions RFID, IoT et logicielles fiables, evolutives et orientees resultats.",
    sectionAboutP2:
      "Notre equipe combine expertise metier, integration systeme et accompagnement operationnel pour transformer vos processus en avantages competitifs durables.",
    aboutBtn1: "En savoir plus",
    aboutBtn2: "Parlons de votre projet",
    aboutPoint1Title: "Integration fluide",
    aboutPoint1Desc: "Connexion native avec ERP, WMS et outils existants.",
    aboutPoint2Title: "Visibilite temps reel",
    aboutPoint2Desc: "Suivi des actifs, audits et indicateurs decisionnels instantanes.",
    aboutPoint3Title: "Support dedie",
    aboutPoint3Desc: "Accompagnement continu, maintenance proactive et montee en competence.",
    aboutPoint4Title: "Scalabilite",
    aboutPoint4Desc: "Architecture pensee pour accompagner votre croissance future.",
    sections: {
      solutionsTitle: "Nos Solutions Cles",
      solutionsDesc:
        "Trois piliers complementaires pour renforcer votre performance : identification, visibilite temps reel et controle d'acces.",
      servicesTitle: "Nos Services de Virtualisation",
      servicesDesc:
        "De l'evaluation a la maintenance, nous optimisons votre infrastructure IT avec une approche fiable et evolutive.",
      sectorsTitle: "Secteurs & Cas d'Usage",
      sectorsDesc: "Decouvrez comment nos solutions s'adaptent a vos processus metiers.",
      testimonialsTitle: "Temoignages clients",
      testimonialsDesc:
        "Ils nous font confiance pour leurs projets de tracabilite et d'automatisation.",
      partnersTitle: "Ils nous font confiance",
      partnersDesc:
        "RFIDIA collabore avec des acteurs reconnus pour vous garantir des solutions technologiques de premier plan.",
      faqTitle: "Questions frequentes",
      faqDesc: "Besoin de plus d'info sur nos solutions RFID et IoT ?",
      faqBtn: "Contactez-nous",
    },
    misc: {
      solutionLabel: "Solution",
      viewSolution: "Voir la solution",
      stepLabel: "Etape",
      caseUsage: "Cas d'usage",
      rfidiaSolutions: "Solutions RFIDIA",
      discover: "Decouvrir",
    },
    statsLabels: stats.map((s) => s.label),
    solutionTexts: solutions.map((s) => ({ title: s.title, description: s.description })),
    sectorTexts: sectors.map((s) => ({ title: s.title, description: s.description, tag: s.tag })),
    virtualizationTexts: virtualizationServices.map((s) => ({ title: s.title, desc: s.desc })),
    testimonialTexts: testimonials.map((t) => ({ quote: t.quote, name: t.name, company: t.company })),
    faqTexts: faqs.map((f) => ({ question: f.question, answer: f.answer })),
  },
  en: {
    navbar: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact us",
      company: "Company",
      usefulLinks: "Useful links",
      usefulPages: "Useful pages",
      language: "Language",
      french: "Francais",
      english: "English",
      italian: "Italiano",
    },
    footer: {
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
    pageTitle: "RFIDIA",
    pageDesc:
      "RFIDIA, Tunisian leader in smart traceability solutions: RFID, IoT, barcodes and embedded systems.",
    heroBadge: "Smart Traceability Solutions",
    heroTitlePrefix: "Technology",
    heroTitleAccent: "RFID & IoT",
    heroTitleSuffix: "for your business",
    heroSub:
      "RFIDIA helps companies accelerate digital transformation with reliable, scalable solutions adapted to real field operations.",
    heroBtnPrimary: "Discover our solutions",
    heroBtnGhost: "Contact us",
    heroFloatRealtime: "Real-time traceability",
    heroFloatFast: "Fast deployment",
    sectionAbout: "About",
    sectionAboutTitle: "Where IT services meet",
    sectionAboutAccent: "innovation",
    sectionAboutP1:
      "RFIDIA supports companies in their digital transformation with reliable, scalable and result-driven RFID, IoT and software solutions.",
    sectionAboutP2:
      "Our team combines domain expertise, system integration and operational support to turn your processes into sustainable competitive advantages.",
    aboutBtn1: "Learn more",
    aboutBtn2: "Discuss your project",
    aboutPoint1Title: "Seamless integration",
    aboutPoint1Desc: "Native connectivity with ERP, WMS and existing tools.",
    aboutPoint2Title: "Real-time visibility",
    aboutPoint2Desc: "Asset tracking, audits and instant decision-making indicators.",
    aboutPoint3Title: "Dedicated support",
    aboutPoint3Desc: "Continuous guidance, proactive maintenance and skills development.",
    aboutPoint4Title: "Scalability",
    aboutPoint4Desc: "Architecture designed to support your future growth.",
    sections: {
      solutionsTitle: "Our Key Solutions",
      solutionsDesc:
        "Three complementary pillars to improve your performance: identification, real-time visibility and access control.",
      servicesTitle: "Our Virtualization Services",
      servicesDesc:
        "From assessment to maintenance, we optimize your IT infrastructure with a reliable and scalable approach.",
      sectorsTitle: "Sectors & Use Cases",
      sectorsDesc: "Discover how our solutions adapt to your business processes.",
      testimonialsTitle: "Client testimonials",
      testimonialsDesc: "They trust us for their traceability and automation projects.",
      partnersTitle: "Trusted by leading organizations",
      partnersDesc:
        "RFIDIA works with recognized partners to deliver top-tier technology solutions.",
      faqTitle: "Frequently asked questions",
      faqDesc: "Need more information about our RFID and IoT solutions?",
      faqBtn: "Contact us",
    },
    misc: {
      solutionLabel: "Solution",
      viewSolution: "View solution",
      stepLabel: "Step",
      caseUsage: "Use case",
      rfidiaSolutions: "RFIDIA Solutions",
      discover: "Discover",
    },
    statsLabels: ["Deployed projects", "Years of experience", "Client satisfaction", "Covered sectors"],
    solutionTexts: [
      {
        title: "Traceability & Identification",
        description:
          "Reliable identification and continuous traceability of your products, assets and flows from entry point to exit point.",
      },
      {
        title: "Real-time Visibility (IoT)",
        description:
          "Real-time monitoring of operations through IoT sensors, live dashboards and instant alerts.",
      },
      {
        title: "Access Control",
        description:
          "Secure physical access with custom rules, access logs and centralized control.",
      },
    ],
    sectorTexts: [
      {
        title: "Industrial Sector",
        description:
          "Production traceability, equipment tracking, quality control and operations management in factories.",
        tag: "Industry",
      },
      {
        title: "Supply Chain",
        description:
          "End-to-end flow visibility, reliable inventory and reduced losses across the supply chain.",
        tag: "Logistics",
      },
      {
        title: "Healthcare",
        description:
          "Medical device tracking, sensitive stock protection and improved internal workflows.",
        tag: "Medical",
      },
      {
        title: "Education & Schools",
        description:
          "Access management, attendance and asset tracking, and safer student journeys.",
        tag: "Education",
      },
    ],
    virtualizationTexts: [
      {
        title: "Assessment and Planning",
        desc: "Audit your performance and capacity needs to choose the right architecture and plan resources.",
      },
      {
        title: "Virtualized Architecture Design",
        desc: "Configure hosts and VMs with optimal allocation of CPU, memory, storage and network.",
      },
      {
        title: "Migration and Deployment",
        desc: "Migrate your applications, validate with tests and fine-tune for reliable deployment.",
      },
      {
        title: "Management and Maintenance",
        desc: "Continuous monitoring, backup, disaster recovery and proactive maintenance to avoid disruptions.",
      },
    ],
    testimonialTexts: [
      {
        quote:
          "Their fully customizable solutions perfectly match our requirements. Integration with our information system required no adaptation on our side. Personalized diagnostics, on-site deployment and maintenance contract: a tailor-made support.",
        name: "Amira Ben Saleh",
        company: "Information Systems Director",
      },
      {
        quote:
          "RFIDIA has supported us for over three years. Their case-by-case approach and tailored solutions integrated perfectly into our environment. We reduced costs and gained agility by securing our logistics flows and automating time-consuming tasks.",
        name: "Mohamed Ben Ali",
        company: "Production Director",
      },
      {
        quote:
          "RFIDIA has supported us for over three years. Their case-by-case approach and tailored solutions integrated perfectly into our environment. We reduced costs and gained agility by securing our logistics flows and automating time-consuming tasks.",
        name: "Samia Ben Mahmoud",
        company: "Logistics Manager",
      },
    ],
    faqTexts: [
      {
        question: "What solutions does RFIDIA provide?",
        answer:
          "We provide RFID, IoT, barcode and embedded solutions for traceability, automation and operational performance. Each solution is tailored to your sector-specific needs.",
      },
      {
        question: "Are your solutions suitable for my business?",
        answer:
          "Yes. Our deployments are custom-designed according to your sector, field constraints and business goals. We work across industry, logistics, healthcare, retail and more.",
      },
      {
        question: "How does a project with RFIDIA work?",
        answer:
          "We start with a detailed process audit, then handle design, hardware/software integration, go-live and post-deployment support. You are guided at each stage.",
      },
      {
        question: "Do you ensure data security?",
        answer:
          "Yes. We apply security best practices at every stage: secure architecture, access control, encrypted data exchange and regular maintenance for service continuity.",
      },
    ],
  },
  it: {
    navbar: {
      home: "Home",
      about: "Chi siamo",
      services: "Servizi",
      contact: "Contattaci",
      company: "Azienda",
      usefulLinks: "Link utili",
      usefulPages: "Pagine utili",
      language: "Lingua",
      french: "Francais",
      english: "English",
      italian: "Italiano",
    },
    footer: {
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
        "Leader tunisino nella tracciabilita intelligente. Supportiamo le aziende nella trasformazione digitale con soluzioni RFID, IoT e codici a barre ad alte prestazioni.",
    },
    pageTitle: "RFIDIA",
    pageDesc:
      "RFIDIA, leader tunisino nelle soluzioni di tracciabilita intelligente: RFID, IoT, codici a barre e sistemi embedded.",
    heroBadge: "Soluzioni di Tracciabilita Intelligente",
    heroTitlePrefix: "Tecnologia",
    heroTitleAccent: "RFID & IoT",
    heroTitleSuffix: "per la tua azienda",
    heroSub:
      "RFIDIA accompagna le aziende nella trasformazione digitale con soluzioni affidabili, scalabili e adatte alla realta operativa.",
    heroBtnPrimary: "Scopri le nostre soluzioni",
    heroBtnGhost: "Contattaci",
    heroFloatRealtime: "Tracciabilita in tempo reale",
    heroFloatFast: "Implementazione rapida",
    sectionAbout: "Chi siamo",
    sectionAboutTitle: "Dove i servizi IT incontrano",
    sectionAboutAccent: "l'innovazione",
    sectionAboutP1:
      "RFIDIA supporta le aziende nella trasformazione digitale con soluzioni RFID, IoT e software affidabili, scalabili e orientate ai risultati.",
    sectionAboutP2:
      "Il nostro team combina competenze di settore, integrazione di sistemi e supporto operativo per trasformare i processi in vantaggi competitivi duraturi.",
    aboutBtn1: "Scopri di piu",
    aboutBtn2: "Parliamo del tuo progetto",
    aboutPoint1Title: "Integrazione fluida",
    aboutPoint1Desc: "Connessione nativa con ERP, WMS e strumenti esistenti.",
    aboutPoint2Title: "Visibilita in tempo reale",
    aboutPoint2Desc: "Tracciamento asset, audit e indicatori decisionali immediati.",
    aboutPoint3Title: "Supporto dedicato",
    aboutPoint3Desc: "Affiancamento continuo, manutenzione proattiva e crescita delle competenze.",
    aboutPoint4Title: "Scalabilita",
    aboutPoint4Desc: "Architettura progettata per sostenere la crescita futura.",
    sections: {
      solutionsTitle: "Le nostre soluzioni chiave",
      solutionsDesc:
        "Tre pilastri complementari per migliorare le performance: identificazione, visibilita in tempo reale e controllo accessi.",
      servicesTitle: "I nostri servizi di virtualizzazione",
      servicesDesc:
        "Dalla valutazione alla manutenzione, ottimizziamo la tua infrastruttura IT con un approccio affidabile e scalabile.",
      sectorsTitle: "Settori e casi d'uso",
      sectorsDesc: "Scopri come le nostre soluzioni si adattano ai tuoi processi aziendali.",
      testimonialsTitle: "Testimonianze clienti",
      testimonialsDesc: "Ci scelgono per progetti di tracciabilita e automazione.",
      partnersTitle: "Si fidano di noi",
      partnersDesc:
        "RFIDIA collabora con partner riconosciuti per offrirti soluzioni tecnologiche di alto livello.",
      faqTitle: "Domande frequenti",
      faqDesc: "Hai bisogno di maggiori informazioni sulle nostre soluzioni RFID e IoT?",
      faqBtn: "Contattaci",
    },
    misc: {
      solutionLabel: "Soluzione",
      viewSolution: "Vedi soluzione",
      stepLabel: "Fase",
      caseUsage: "Caso d'uso",
      rfidiaSolutions: "Soluzioni RFIDIA",
      discover: "Scopri",
    },
    statsLabels: ["Progetti implementati", "Anni di esperienza", "Soddisfazione clienti", "Settori coperti"],
    solutionTexts: [
      {
        title: "Tracciabilita e identificazione",
        description:
          "Identificazione affidabile e tracciabilita continua di prodotti, asset e flussi dal punto di ingresso al punto di uscita.",
      },
      {
        title: "Visibilita in tempo reale (IoT)",
        description:
          "Monitoraggio in tempo reale delle operazioni tramite sensori IoT, dashboard live e avvisi istantanei.",
      },
      {
        title: "Controllo accessi",
        description:
          "Messa in sicurezza degli accessi fisici con regole personalizzate, registri passaggi e controllo centralizzato.",
      },
    ],
    sectorTexts: [
      {
        title: "Settore industriale",
        description:
          "Tracciabilita della produzione, monitoraggio delle attrezzature, controllo qualita e gestione operativa in fabbrica.",
        tag: "Industria",
      },
      {
        title: "Catena logistica",
        description:
          "Visibilita end-to-end dei flussi, inventari affidabili e riduzione delle perdite lungo la supply chain.",
        tag: "Logistica",
      },
      {
        title: "Sanita",
        description:
          "Tracciamento dei dispositivi medici, protezione delle scorte sensibili e miglioramento dei processi interni.",
        tag: "Medicale",
      },
      {
        title: "Istruzione e scuole",
        description:
          "Gestione degli accessi, monitoraggio presenze e materiali, maggiore sicurezza nel percorso studente.",
        tag: "Istruzione",
      },
    ],
    virtualizationTexts: [
      {
        title: "Valutazione e pianificazione",
        desc: "Analisi di performance e capacita per scegliere l'architettura corretta e pianificare le risorse.",
      },
      {
        title: "Progettazione architettura virtualizzata",
        desc: "Configurazione host e VM con allocazione ottimale di CPU, memoria, storage e rete.",
      },
      {
        title: "Migrazione e deployment",
        desc: "Migrazione applicazioni, test di validazione e ottimizzazioni per un rilascio affidabile.",
      },
      {
        title: "Gestione e manutenzione",
        desc: "Monitoraggio continuo, backup, disaster recovery e manutenzione proattiva per evitare interruzioni.",
      },
    ],
    testimonialTexts: [
      {
        quote:
          "Le loro soluzioni, totalmente configurabili, rispondono perfettamente alle nostre esigenze. L'integrazione con il nostro sistema informativo e avvenuta senza adattamenti da parte nostra. Diagnosi personalizzata, deployment on-site e contratto di manutenzione: un supporto su misura.",
        name: "Amira Ben Saleh",
        company: "Direttrice Sistemi Informativi",
      },
      {
        quote:
          "RFIDIA ci supporta da oltre tre anni. Il loro approccio caso per caso e le soluzioni su misura si sono integrate perfettamente nel nostro ambiente. Abbiamo ridotto i costi e migliorato l'agilita grazie alla sicurezza dei flussi logistici e all'automazione delle attivita ripetitive.",
        name: "Mohamed Ben Ali",
        company: "Direttore di Produzione",
      },
      {
        quote:
          "RFIDIA ci supporta da oltre tre anni. Il loro approccio caso per caso e le soluzioni su misura si sono integrate perfettamente nel nostro ambiente. Abbiamo ridotto i costi e migliorato l'agilita grazie alla sicurezza dei flussi logistici e all'automazione delle attivita ripetitive.",
        name: "Samia Ben Mahmoud",
        company: "Responsabile Logistica",
      },
    ],
    faqTexts: [
      {
        question: "Quali soluzioni offre RFIDIA?",
        answer:
          "Offriamo soluzioni RFID, IoT, codici a barre e sistemi embedded per tracciabilita, automazione e performance operative. Ogni soluzione e personalizzata in base al settore.",
      },
      {
        question: "Le soluzioni sono adatte alla mia attivita?",
        answer:
          "Si. I nostri progetti sono su misura in base a settore, vincoli operativi e obiettivi aziendali. Operiamo in industria, logistica, sanita, retail e altri ambiti.",
      },
      {
        question: "Come si svolge un progetto con RFIDIA?",
        answer:
          "Partiamo da un audit approfondito dei processi, poi seguiamo progettazione, integrazione hardware/software, messa in produzione e supporto post-go-live.",
      },
      {
        question: "Garantite la sicurezza dei dati?",
        answer:
          "Si. Applichiamo best practice di sicurezza in ogni fase: architettura sicura, controllo accessi, cifratura degli scambi e manutenzione regolare.",
      },
    ],
  },
};

const ItSolution = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('rfidia_lang');
    if (saved && ['fr', 'en', 'it'].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('rfidia_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = i18nContent[language] || i18nContent.fr;

  const localizedStats = stats.map((item, idx) => ({
    ...item,
    label: t.statsLabels[idx] || item.label,
  }));

  const localizedSolutions = solutions.map((item, idx) => ({
    ...item,
    title: t.solutionTexts[idx]?.title || item.title,
    description: t.solutionTexts[idx]?.description || item.description,
  }));

  const localizedSectors = sectors.map((item, idx) => ({
    ...item,
    title: t.sectorTexts[idx]?.title || item.title,
    description: t.sectorTexts[idx]?.description || item.description,
    tag: t.sectorTexts[idx]?.tag || item.tag,
  }));

  const localizedVirtualizationServices = virtualizationServices.map((item, idx) => ({
    ...item,
    title: t.virtualizationTexts[idx]?.title || item.title,
    desc: t.virtualizationTexts[idx]?.desc || item.desc,
  }));

  const localizedTestimonials = testimonials.map((item, idx) => ({
    ...item,
    quote: t.testimonialTexts[idx]?.quote || item.quote,
    name: t.testimonialTexts[idx]?.name || item.name,
    company: t.testimonialTexts[idx]?.company || item.company,
  }));

  const localizedFaqs = faqs.map((item, idx) => ({
    ...item,
    question: t.faqTexts[idx]?.question || item.question,
    answer: t.faqTexts[idx]?.answer || item.answer,
  }));

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const SectionDivider = () => (
    <div className="rl-section-divider-wrap">
      <div className="rl-section-divider">
        <span className="rl-section-divider__line" />
        <img
          src="/a_rfidia/z_rfid/logo-RFIDIA2.png"
          alt="RFIDIA"
          className="rl-section-divider__logo"
        />
        <span className="rl-section-divider__line" />
      </div>
    </div>
  );

  return (
    <Layout
      title={t.pageTitle}
      desc={t.pageDesc}
    >
      <Navbar language={language} onLanguageChange={setLanguage} labels={t.navbar} />

      <main className="rl">

        {/* ── HERO ── */}
        <section className="rl-hero">
          <div className="rl-hero__bg-grid" aria-hidden />
          <div className="rl-hero__glow rl-hero__glow--left" aria-hidden />
          <div className="rl-hero__glow rl-hero__glow--right" aria-hidden />

          <div className="container position-relative">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="rl-badge">
                  <span className="rl-badge__dot" />
                  {t.heroBadge}
                </span>
                <h1 className="rl-hero__title">
                  {t.heroTitlePrefix} <span className="rl-gradient-text">{t.heroTitleAccent}</span><br />
                  {t.heroTitleSuffix}
                </h1>
                <p className="rl-hero__sub">
                  {t.heroSub}
                </p>
                <div className="rl-hero__actions">
                  <Link href="/contact-us" passHref>
                    <a className="rl-btn rl-btn--primary">
                      {t.heroBtnPrimary}
                      <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </Link>
                  <Link href="/contact-us" passHref>
                    <a className="rl-btn rl-btn--ghost">{t.heroBtnGhost}</a>
                  </Link>
                </div>
                <div className="rl-hero__chips">
                  {localizedStats.map((s) => (
                    <div className="rl-chip" key={s.label}>
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="rl-hero__visual">
                  <img
                    src="/a_rfidia/z_rfid/rfid7.png"
                    alt="Technologie RFID en entreprise"
                    className="rl-hero__img"
                  />
                  <div className="rl-hero__float rl-hero__float--tl">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{t.heroFloatRealtime}</span>
                  </div>
                  <div className="rl-hero__float rl-hero__float--br">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#0ea5e9" strokeWidth="2" />
                      <path d="M12 6v6l4 2" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>{t.heroFloatFast}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* ── ABOUT ── */}
<section className="rl-section rl-about">
  <div className="container">
    <div className="rl-section-head">
      <SectionDivider />
      <h2>{t.sectionAbout}</h2>
    </div>
    <div className="row align-items-center g-5">

      {/* ── Colonne gauche : visuels ── */}
      <div className="col-lg-6">
        <div style={{ position: 'relative', padding: '2.5rem 1rem 2.5rem 2rem' }}>

          {/* Image principale */}
          <div style={{
            position: 'relative',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            height: '480px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
          }}>
            <img
              src="/a_rfidia/z_rfid/rfid4.png"
              alt="Équipe RFIDIA"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(17,22,56,0.4) 0%, transparent 60%)'
            }} />
          </div>

          {/* Carte flottante haut-gauche — Actif / 32+ */}
          <div style={{
            position: 'absolute',
            top: '8px',
            left: '-8px',
            background: '#111638',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '1rem',
            padding: '1rem 1.25rem',
            width: '176px',
            boxShadow: '0 8px 32px rgba(26,33,80,0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#4ECDC4', display: 'inline-block', flexShrink: 0
              }} />
              <span style={{
                color: '#4ECDC4', fontSize: '11px',
                fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'
              }}>Actif</span>
            </div>
            <p style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, margin: 0, lineHeight: 1 }}>32+</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: '4px 0 0' }}>Experts & ingénieurs</p>
          </div>

          {/* Carte flottante bas-droite — Excellence */}
          <div style={{
            position: 'absolute',
            bottom: '8px',
            right: '-8px',
            background: '#fff',
            borderRadius: '1rem',
            padding: '1.25rem',
            width: '210px',
            boxShadow: '0 12px 40px rgba(26,33,80,0.14)',
            border: '1px solid #E2E6F0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'rgba(232,93,117,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E85D75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A2150' }}>Excellence</span>
            </div>
            <p style={{ fontSize: '12px', color: '#5A6282', lineHeight: 1.5, margin: 0 }}>
              Certifiés par les standards RFID internationaux GS1 et ISO 18000.
            </p>
          </div>

          {/* Badge bas-centre — Équipe RFIDIA de confiance */}
          <div style={{
            position: 'absolute',
            bottom: '56px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#1A2150',
            color: '#fff',
            fontSize: '13px',
            fontWeight: 600,
            padding: '8px 20px',
            borderRadius: '999px',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 16px rgba(26,33,80,0.3)'
          }}>
            Équipe RFIDIA de confiance
          </div>

        </div>
      </div>

      {/* ── Colonne droite : contenu ── */}
      <div className="col-lg-6">
        <div className="rl-about-content">
          <h2>
            {t.sectionAboutTitle}
            <span className="rl-gradient-text">{t.sectionAboutAccent}</span>
          </h2>
          <p>
            {t.sectionAboutP1}
          </p>
          <p>
            {t.sectionAboutP2}
          </p>

          <div className="rl-about-actions rl-about-actions--inline">
            <Link href="/about-us" passHref>
              <a className="rl-btn rl-btn--primary">{t.aboutBtn1}</a>
            </Link>
            <Link href="/contact-us" passHref>
              <a className="rl-btn rl-btn--outline-dark">{t.aboutBtn2}</a>
            </Link>
          </div>

          <div className="rl-about-points">
            <div className="rl-about-point">
              <h4>{t.aboutPoint1Title}</h4>
              <p>{t.aboutPoint1Desc}</p>
            </div>
            <div className="rl-about-point">
              <h4>{t.aboutPoint2Title}</h4>
              <p>{t.aboutPoint2Desc}</p>
            </div>
            <div className="rl-about-point">
              <h4>{t.aboutPoint3Title}</h4>
              <p>{t.aboutPoint3Desc}</p>
            </div>
            <div className="rl-about-point">
              <h4>{t.aboutPoint4Title}</h4>
              <p>{t.aboutPoint4Desc}</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

        {/* ── SOLUTIONS ── */}
        <section className="rl-section">
          <div className="container">
            <div className="rl-section-head">
              <SectionDivider />
              <h2>{t.sections.solutionsTitle}</h2>
              <p>
                {t.sections.solutionsDesc}
              </p>
            </div>

            <div className="rl-solutions-grid">
              {localizedSolutions.map((item, idx) => (
                <article
                  className="rl-solutions-grid__card"
                  key={item.title}
                  style={{ "--accent": item.accent, "--accent-soft": `${item.accent}1A` }}
                >
                  <div className="rl-solutions-grid__media">
                    <img src={item.image} alt={item.title} className="rl-solutions-grid__img" />
                    <span className="rl-solutions-grid__badge">{t.misc.solutionLabel} 0{idx + 1}</span>
                    <div className="rl-solutions-grid__icon">{item.icon}</div>
                  </div>

                  <div className="rl-solutions-grid__body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="rl-solutions-grid__footer">
                      <span>{t.misc.viewSolution}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="rl-section rl-services">
          <div className="container">
            <div className="rl-section-head">
              <SectionDivider />
              <h2>{t.sections.servicesTitle}</h2>
              <p>
                {t.sections.servicesDesc}
              </p>
            </div>
            <div className="row g-4">
              {localizedVirtualizationServices.map((item) => (
                <div className="col-lg-3 col-md-6" key={item.num}>
                  <div className="single-article rounded-custom h-100 mt-0">
                    <a className="article-img">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid w-100"
                        style={{ height: '224px', objectFit: 'cover' }}
                      />
                    </a>
                    <div className="article-content p-4">
                      <div className="article-category mb-4 d-block">
                        <span className="d-inline-block text-dark badge bg-primary-soft">
                          {t.misc.stepLabel} {item.num}
                        </span>
                      </div>
                      <h2 className="h5 article-title">{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTORS ── */}
        <section className="rl-section">
          <div className="container">
            <div className="rl-section-head">
              <SectionDivider />
              <h2>{t.sections.sectorsTitle}</h2>
              <p>{t.sections.sectorsDesc}</p>
            </div>
            <div className="rl-case-stack">
              {localizedSectors.map((item, idx) => (
                <article
                  className={`rl-case-card${idx % 2 === 1 ? " rl-case-card--reverse" : ""}`}
                  key={item.id}
                  style={{ "--case-index": idx }}
                >
                  <div className="rl-case-card__body">
                    <span className="rl-case-card__overline">{t.misc.caseUsage} {item.id}</span>
                    <h3>{item.title}</h3>
                    <div className="rl-case-card__chips">
                      <span>{item.tag}</span>
                      <span>{t.misc.rfidiaSolutions}</span>
                    </div>
                    <p>{item.description}</p>
                    <br />
                    <br />
                    <br />
                    <div className="rl-case-card__action-btn">
                      <Link href="/contact-us" passHref>
                        <a className="rl-btn rl-btn--primary" style={{ borderRadius: "8px", fontSize: "0.95rem" }}>{t.misc.discover}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="rl-case-card__media">
                    <img src={item.image} alt={item.title} className="rl-case-card__img" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="rl-section rl-testi">
          <div className="container">
            <div className="rl-section-head">
              <SectionDivider />
              <h2>{t.sections.testimonialsTitle}</h2>
              <p>{t.sections.testimonialsDesc}</p>
            </div>
            <div className="row g-4">
              {localizedTestimonials.map((item) => (
                <div className="col-lg-4" key={item.name}>
                  <blockquote className="rl-testi-card">
                    <div className="rl-testi-card__quote">"</div>
                    <p>{item.quote}</p>
                    <footer className="rl-testi-card__footer">
                      <div className="rl-testi-card__avatar">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.company}</span>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* ── PARTNERS BAR ── */}
        <section className="rl-partners">
          <div className="container">
            <div className="rl-partners__head">
              <SectionDivider />
              <h2 className="rl-partners__title">{t.sections.partnersTitle}</h2>
              <p className="rl-partners__sub">
                {t.sections.partnersDesc}
              </p>
            </div>

            <div className="rl-partners__grid">
              {partners.map((p) => (
                <div className="rl-partner-item" key={p.name}>
                  <div className="rl-partner-item__logo-wrap">
                    <img src={p.logo} alt={p.name} />
                  </div>
                </div>
              ))}
            </div>

            <div className="rl-partners__divider" aria-hidden />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="rl-section rl-faq">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-4 text-center">
                <SectionDivider />
                <h2>{t.sections.faqTitle}</h2>
                <p>{t.sections.faqDesc}</p>
                <Link href="/contact-us" passHref>
                  <a className="rl-btn rl-btn--primary mt-3">{t.sections.faqBtn}</a>
                </Link>
              </div>
              <div className="col-lg-8">
                {localizedFaqs.map((item, idx) => (
                  <div
                    key={item.question}
                    className={`rl-faq-item${openFaq === idx ? " rl-faq-item--open" : ""}`}
                  >
                    <button
                      className="rl-faq-item__q"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={openFaq === idx}
                    >
                      <span>{item.question}</span>
                      <span className="rl-faq-item__icon" aria-hidden>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                    <div className="rl-faq-item__a">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer footerGradient translations={t.footer} />
    </Layout>
  );
};

export default ItSolution;
