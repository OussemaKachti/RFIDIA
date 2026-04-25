import React, { useEffect, useState } from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Link from "next/link";

const i18nContent = {
  fr: {
    metaTitle: "À propos | RFIDIA",
    metaDesc:
      "RFIDIA accompagne les entreprises depuis 2011 avec des solutions RFID et IoT sur mesure pour la traçabilité, la sécurité et l'automatisation.",
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
    heroTag: "Qui sommes-nous ?",
    heroTitleStart: "RFIDIA transforme vos défis tech en",
    heroTitleAccent: "leviers de croissance",
    heroDesc:
      "Depuis 2011, nous concevons des solutions RFID et IoT sur mesure pour optimiser et sécuriser votre parc, vos marchandises et votre personnel, avec un accompagnement de bout en bout.",
    heroBtnPrimary: "Parler à un expert",
    heroBtnSecondary: "Découvrir nos solutions",
    kpi1: "d'expérience dans l'innovation tech",
    kpi2: "année de spécialisation RFID",
    kpi3: "prise en charge projet : audit, POC, déploiement, support",
    sectionMissionTag: "Notre mission & notre expertise",
    sectionMissionTitle: "Une expertise RFID/IoT orientée résultats",
    sectionMissionDesc:
      "Chez RFIDIA, notre mission est de convertir les contraintes opérationnelles en gains mesurables. Nous développons des solutions clés en main : suivi intelligent des actifs, traçabilité logistique, gestion du stationnement, santé et autres cas d'usage sectoriels.",
    missionPoint1: "Solutions sur mesure adaptées à votre contexte et vos contraintes",
    missionPoint2: "Intégration aux systèmes existants sans disruption lourde",
    missionPoint3: "Approche progressive : diagnostic, POC, déploiement, optimisation",
    processTag: "Notre activité",
    processTitleStart: "Experts en traçabilité pour",
    processTitleAccent: "production, inventaires et logistique",
    processDesc:
      "Depuis plus de 14 ans, nous accompagnons les entreprises dans leurs projets de transformation numérique et d'automatisation. Nos solutions permettent de réduire les coûts, sécuriser les flux logistiques et automatiser les tâches chronophages et sujettes aux erreurs.",
    processBtn: "Voir nos services",
    step1: "Étape 1",
    step1Title: "Diagnostic & étude personnalisée",
    step1Desc: "Analyse de l'existant, des flux et des objectifs métier.",
    step2: "Étape 2",
    step2Title: "Conception, paramétrage & POC",
    step2Desc: "Validation terrain avec une solution ajustée à vos besoins.",
    step3: "Étape 3",
    step3Title: "Déploiement, formation & maintenance",
    step3Desc: "Installation sur site, conduite du changement et support continu.",
    valuesTag: "Savoir-faire RFIDIA",
    valuesTitle: "Nos valeurs & engagements qualité",
    valuesCardTitle: "Nos valeurs",
    val1: "Innovation : solutions RFID alignées industrie 4.0 et IA",
    val2: "Fiabilité : respect des engagements clients & partenaires",
    val3: "Écoute : adaptation aux spécificités de chaque entreprise",
    val4: "Souplesse & flexibilité : exécution selon vos contraintes terrain",
    qualityCardTitle: "Nos engagements qualité",
    q1: "Diagnostic technique et commercial personnalisé",
    q2: "Conception et paramétrage selon vos spécifications",
    q3: "Interfaçage avec votre SI sans adaptation lourde",
    q4: "Installation, déploiement, formation utilisateurs",
    q5: "Contrat de maintenance et hotline téléphonique",
    ctaTitle: "Construisons votre solution RFID sur mesure",
    ctaDesc:
      "Nous vous accompagnons au cas par cas pour déployer une solution fiable, paramétrée selon vos exigences métier et orientée résultat.",
    ctaPrimary: "Contactez RFIDIA",
    ctaSecondary: "Nos solutions",
  },
  en: {
    metaTitle: "About Us | RFIDIA",
    metaDesc:
      "RFIDIA has supported companies since 2011 with tailored RFID and IoT solutions for traceability, security and automation.",
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
    heroTag: "Who are we?",
    heroTitleStart: "RFIDIA turns your tech challenges into",
    heroTitleAccent: "growth drivers",
    heroDesc:
      "Since 2011, we have designed tailored RFID and IoT solutions to optimize and secure your assets, goods and teams, with end-to-end support.",
    heroBtnPrimary: "Talk to an expert",
    heroBtnSecondary: "Discover our solutions",
    kpi1: "of innovation experience",
    kpi2: "RFID specialization year",
    kpi3: "end-to-end delivery: audit, POC, deployment, support",
    sectionMissionTag: "Our mission & expertise",
    sectionMissionTitle: "RFID/IoT expertise focused on results",
    sectionMissionDesc:
      "At RFIDIA, our mission is to convert operational constraints into measurable gains. We build turnkey solutions: smart asset tracking, logistics traceability, parking management, healthcare and other sector-focused use cases.",
    missionPoint1: "Tailored solutions adapted to your context and constraints",
    missionPoint2: "Integration with existing systems without heavy disruption",
    missionPoint3: "Progressive approach: assessment, POC, deployment, optimization",
    processTag: "Our activity",
    processTitleStart: "Traceability experts for",
    processTitleAccent: "production, inventory and logistics",
    processDesc:
      "For more than 14 years, we have supported companies in digital transformation and automation projects. Our solutions help reduce costs, secure logistics flows and automate repetitive, error-prone tasks.",
    processBtn: "View our services",
    step1: "Step 1",
    step1Title: "Assessment & tailored study",
    step1Desc: "Analysis of current systems, flows and business goals.",
    step2: "Step 2",
    step2Title: "Design, configuration & POC",
    step2Desc: "Field validation with a solution tailored to your needs.",
    step3: "Step 3",
    step3Title: "Deployment, training & maintenance",
    step3Desc: "On-site implementation, change management and ongoing support.",
    valuesTag: "RFIDIA know-how",
    valuesTitle: "Our values & quality commitments",
    valuesCardTitle: "Our values",
    val1: "Innovation: RFID solutions aligned with Industry 4.0 and AI",
    val2: "Reliability: strong commitment to clients and partners",
    val3: "Listening: adaptation to each company's specific needs",
    val4: "Flexibility: execution aligned with your operational constraints",
    qualityCardTitle: "Our quality commitments",
    q1: "Personalized technical and business diagnosis",
    q2: "Design and configuration according to your specifications",
    q3: "Integration with your IS without heavy adaptation",
    q4: "Installation, deployment and user training",
    q5: "Maintenance contract and phone hotline",
    ctaTitle: "Let's build your custom RFID solution",
    ctaDesc:
      "We support each client case-by-case to deploy reliable solutions configured for your business requirements and focused on measurable outcomes.",
    ctaPrimary: "Contact RFIDIA",
    ctaSecondary: "Our solutions",
  },
  it: {
    metaTitle: "Chi siamo | RFIDIA",
    metaDesc:
      "RFIDIA supporta le aziende dal 2011 con soluzioni RFID e IoT su misura per tracciabilità, sicurezza e automazione.",
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
    heroTag: "Chi siamo?",
    heroTitleStart: "RFIDIA trasforma le sfide tech in",
    heroTitleAccent: "leve di crescita",
    heroDesc:
      "Dal 2011 progettiamo soluzioni RFID e IoT su misura per ottimizzare e proteggere asset, merci e personale, con supporto end-to-end.",
    heroBtnPrimary: "Parla con un esperto",
    heroBtnSecondary: "Scopri le nostre soluzioni",
    kpi1: "di esperienza nell'innovazione",
    kpi2: "anno di specializzazione RFID",
    kpi3: "copertura completa: audit, POC, deploy, supporto",
    sectionMissionTag: "Missione & competenze",
    sectionMissionTitle: "Competenza RFID/IoT orientata ai risultati",
    sectionMissionDesc:
      "In RFIDIA convertiamo vincoli operativi in risultati misurabili. Sviluppiamo soluzioni chiavi in mano: asset tracking intelligente, tracciabilità logistica, gestione parcheggi, sanità e altri use case di settore.",
    missionPoint1: "Soluzioni su misura per il tuo contesto e i tuoi vincoli",
    missionPoint2: "Integrazione con sistemi esistenti senza forti discontinuità",
    missionPoint3: "Approccio progressivo: analisi, POC, deploy, ottimizzazione",
    processTag: "La nostra attività",
    processTitleStart: "Esperti di tracciabilità per",
    processTitleAccent: "produzione, inventari e logistica",
    processDesc:
      "Da oltre 14 anni supportiamo le aziende nella trasformazione digitale e nell'automazione. Le nostre soluzioni riducono i costi, proteggono i flussi logistici e automatizzano attività ripetitive soggette a errore.",
    processBtn: "Scopri i nostri servizi",
    step1: "Fase 1",
    step1Title: "Diagnosi & studio personalizzato",
    step1Desc: "Analisi dell'esistente, dei flussi e degli obiettivi di business.",
    step2: "Fase 2",
    step2Title: "Progettazione, configurazione & POC",
    step2Desc: "Validazione sul campo con soluzione calibrata sui tuoi bisogni.",
    step3: "Fase 3",
    step3Title: "Deploy, formazione & manutenzione",
    step3Desc: "Installazione on-site, change management e supporto continuo.",
    valuesTag: "Know-how RFIDIA",
    valuesTitle: "Valori & impegni qualità",
    valuesCardTitle: "I nostri valori",
    val1: "Innovazione: soluzioni RFID allineate a Industry 4.0 e IA",
    val2: "Affidabilità: rispetto degli impegni verso clienti e partner",
    val3: "Ascolto: adattamento alle specificità di ogni azienda",
    val4: "Flessibilità: esecuzione in base ai vincoli operativi",
    qualityCardTitle: "I nostri impegni qualità",
    q1: "Diagnosi tecnica e commerciale personalizzata",
    q2: "Progettazione e configurazione secondo specifiche",
    q3: "Integrazione con il tuo SI senza adattamenti pesanti",
    q4: "Installazione, deploy e formazione utenti",
    q5: "Contratto di manutenzione e hotline telefonica",
    ctaTitle: "Costruiamo la tua soluzione RFID su misura",
    ctaDesc:
      "Accompagniamo ogni cliente caso per caso con soluzioni affidabili, configurate sulle esigenze di business e orientate ai risultati.",
    ctaPrimary: "Contatta RFIDIA",
    ctaSecondary: "Le nostre soluzioni",
  },
};

const AboutUs = () => {
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

  const t = i18nContent[language] || i18nContent.fr;

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar classOption="navbar-light" language={language} onLanguageChange={setLanguage} labels={t.navbar} />

      <main className="rf-about">
        <section className="digi-hero ptb-120 rf-about-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="digi-hero-text mt-5 mt-lg-0">
                  <div>
                    <span className="span-arrow">{t.heroTag}</span>
                    <img src="/arro-right.svg" alt="arrow" />
                  </div>
                  <h1 className="display-5 fw-bold mb-3">
                    {t.heroTitleStart}
                    <span className="text-orange fw-bold"> {t.heroTitleAccent}</span>
                  </h1>
                  <p className="m-0">{t.heroDesc}</p>
                  <div className="action-btns mt-4 d-flex flex-wrap align-items-center">
                    <Link href="/contact-us">
                      <a className="btn rounded-pill bg-orange me-3">{t.heroBtnPrimary}</a>
                    </Link>
                    <Link href="/it-solution">
                      <a className="btn rounded-pill btn-outline-primary">{t.heroBtnSecondary}</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="rf-about-kpi-card">
                  <div className="rf-kpi-item">
                    <h3>+14 ans</h3>
                    <p>{t.kpi1}</p>
                  </div>
                  <div className="rf-kpi-item">
                    <h3>2011</h3>
                    <p>{t.kpi2}</p>
                  </div>
                  <div className="rf-kpi-item">
                    <h3>360°</h3>
                    <p>{t.kpi3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="digi-why pt-120">
          <div className="container">
            <div className="row align-content-center justify-content-between">
              <div className="col-lg-6 col-md-12">
                <div className="digi-why-left">
                  <img src="/a_rfidia/z_rfid/rfid19.png" className="img-fluid" alt="RFIDIA team" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="digi-why-right pt-4">
                  <div>
                    <span className="span-arrow">{t.sectionMissionTag}</span>
                    <img src="/arro-right.svg" className="img-fluid" alt="arrow" />
                  </div>
                  <h2>{t.sectionMissionTitle}</h2>
                  <p>{t.sectionMissionDesc}</p>
                  <ul className="rf-check-list">
                    <li>{t.missionPoint1}</li>
                    <li>{t.missionPoint2}</li>
                    <li>{t.missionPoint3}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="digi-how-works ptb-120 rf-about-soft">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="digi-how-works-left">
                  <div>
                    <span className="span-arrow">{t.processTag}</span>
                    <img src="/arro-right.svg" className="img-fluid" alt="arrow" />
                  </div>
                  <h2>
                    {t.processTitleStart}
                    <span className="text-orange"> {t.processTitleAccent}</span>
                  </h2>
                  <p>{t.processDesc}</p>
                  <Link href="/services">
                    <a className="btn rounded-pill bg-orange mt-3">{t.processBtn}</a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="digi-how-works-right mt-5 mt-lg-0">
                  <div className="dig-how-steps rf-steps-card">
                    <ul className="list-unstyled mb-0">
                      <li className="d-md-flex justify-content-between align-items-center mb-3">
                        <div className="me-3">
                          <img src="/a_rfidia/z_school/etape.png" className="img-fluid mb-3 mb-md-0 rf-step-image" alt="Étape 1" />
                        </div>
                        <div>
                          <span className="text-orange fw-bold">{t.step1}</span>
                          <h6>{t.step1Title}</h6>
                          <p className="m-0">{t.step1Desc}</p>
                        </div>
                      </li>
                      <li className="d-md-flex justify-content-between align-items-center mb-3">
                        <div className="me-3">
                          <img src="/a_rfidia/z_school/etape2.png" className="img-fluid mb-3 mb-md-0 rf-step-image" alt="Étape 2" />
                        </div>
                        <div>
                          <span className="text-orange fw-bold">{t.step2}</span>
                          <h6>{t.step2Title}</h6>
                          <p className="m-0">{t.step2Desc}</p>
                        </div>
                      </li>
                      <li className="d-md-flex justify-content-between align-items-center">
                        <div className="me-3">
                          <img src="/a_rfidia/z_school/etape3.png" className="img-fluid mb-3 mb-md-0 rf-step-image" alt="Étape 3" />
                        </div>
                        <div>
                          <span className="text-orange fw-bold">{t.step3}</span>
                          <h6>{t.step3Title}</h6>
                          <p className="m-0">{t.step3Desc}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ptb-120">
          <div className="container">
            <div className="text-center mb-5">
              <span className="span-arrow">{t.valuesTag}</span>
              <h2 className="mt-2">{t.valuesTitle}</h2>
            </div>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="rf-card h-100">
                  <h4>{t.valuesCardTitle}</h4>
                  <ul className="rf-check-list">
                    <li>{t.val1}</li>
                    <li>{t.val2}</li>
                    <li>{t.val3}</li>
                    <li>{t.val4}</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rf-card h-100">
                  <h4>{t.qualityCardTitle}</h4>
                  <ul className="rf-check-list">
                    <li>{t.q1}</li>
                    <li>{t.q2}</li>
                    <li>{t.q3}</li>
                    <li>{t.q4}</li>
                    <li>{t.q5}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ptb-120 rf-about-cta">
          <div className="container">
            <div className="rf-about-cta-inner">
              <div>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaDesc}</p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <Link href="/contact-us">
                  <a className="btn rounded-pill bg-orange">{t.ctaPrimary}</a>
                </Link>
                <Link href="/it-solution">
                  <a className="btn rounded-pill btn-outline-light">{t.ctaSecondary}</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer translations={t.footer} />

      <style jsx>{`
        .rf-about {
          color: #0f1a3d;
        }
        .rf-about :global(.ptb-120) {
          padding-top: 84px !important;
          padding-bottom: 84px !important;
        }
        .rf-about :global(.pt-120) {
          padding-top: 84px !important;
        }
        .rf-about-hero {
          background: radial-gradient(980px 420px at 18% 12%, rgba(77, 200, 196, 0.16), transparent 60%),
            radial-gradient(900px 420px at 82% 20%, rgba(123, 94, 167, 0.1), transparent 58%), #fff;
          border-bottom: 1px solid rgba(30, 42, 74, 0.08);
        }
        .rf-about-kpi-card {
          background: #fff;
          border: 1px solid #dfe7f6;
          border-radius: 20px;
          padding: 16px;
          box-shadow: 0 18px 44px rgba(22, 35, 80, 0.08);
          display: grid;
          gap: 10px;
        }
        .rf-kpi-item {
          border: 1px solid #e6ecfa;
          border-radius: 12px;
          padding: 12px;
        }
        .rf-kpi-item h3 {
          margin: 0 0 3px;
          color: #1e2a4a;
        }
        .rf-kpi-item p {
          margin: 0;
          font-size: 0.9rem;
          color: #5b678f;
          line-height: 1.5;
        }
        .rf-about-soft {
          background: linear-gradient(180deg, rgba(245, 248, 255, 0.9), rgba(245, 248, 255, 0.5));
          border-top: 1px solid rgba(30, 42, 74, 0.08);
          border-bottom: 1px solid rgba(30, 42, 74, 0.08);
        }
        .rf-about :global(.digi-why-left img) {
          width: 100%;
          max-height: 340px;
          object-fit: cover;
          border-radius: 14px;
          border: 1px solid #dfe7f6;
          box-shadow: 0 14px 34px rgba(22, 35, 80, 0.08);
        }
        .rf-about :global(.digi-why-right h2) {
          font-size: clamp(1.85rem, 3vw, 2.6rem);
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .rf-about :global(.digi-why-right p) {
          font-size: 1.02rem;
          line-height: 1.72;
          color: #4f5d86;
        }
        .rf-check-list {
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 12px;
        }
        .rf-check-list li {
          position: relative;
          padding-left: 12px;
          color: #5b678f;
          line-height: 1.6;
          background: #fff;
          border: 1px solid #eef2fb;
          border-radius: 8px;
          padding-top: 7px;
          padding-right: 10px;
          padding-bottom: 7px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(30, 42, 74, 0.04);
        }
        .rf-check-list li:hover {
          border-color: #d8e6fb;
          box-shadow: 0 8px 18px rgba(30, 42, 74, 0.08);
          transform: translateY(-1px);
        }
        .rf-check-list li::before {
          content: none;
        }
        .rf-check-list li::after {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 3px;
          border-radius: 8px 0 0 8px;
          background: linear-gradient(180deg, #4dc8c4 0%, #7b5ea7 100%);
          opacity: 0.85;
        }
        .rf-step-image {
          width: 72px;
          height: 72px;
          object-fit: cover;
          border-radius: 10px;
          border: 1px solid #e6ecfa;
        }
        .rf-steps-card {
          background: #fff;
          border: 1px solid #dfe7f6;
          border-radius: 18px;
          box-shadow: 0 18px 44px rgba(22, 35, 80, 0.08);
          padding: 18px;
        }
        .rf-card {
          background: #fff;
          border: 1px solid #dfe7f6;
          border-radius: 18px;
          box-shadow: 0 14px 34px rgba(22, 35, 80, 0.07);
          padding: 22px;
        }
        .rf-card h4 {
          color: #1e2a4a;
          margin-bottom: 10px;
          font-weight: 800;
        }
        .rf-about-cta {
          background: #fff;
        }
        .rf-about-cta-inner {
          background: radial-gradient(900px 420px at 20% 20%, rgba(224, 48, 90, 0.2), transparent 58%),
            radial-gradient(900px 420px at 80% 15%, rgba(77, 200, 196, 0.16), transparent 58%),
            linear-gradient(125deg, #1e2a4a 0%, #2a3760 70%, #1e2a4a 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: clamp(1.8rem, 4vw, 2.8rem);
          box-shadow: 0 26px 70px rgba(22, 35, 80, 0.2);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .rf-about-cta-inner h2 {
          color: #fff;
          margin: 0 0 8px;
          font-weight: 900;
        }
        .rf-about-cta-inner p {
          color: rgba(255, 255, 255, 0.86);
          margin: 0;
          max-width: 560px;
          line-height: 1.7;
        }
        @media (max-width: 991px) {
          .rf-about :global(.ptb-120) {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
          .rf-about :global(.pt-120) {
            padding-top: 64px !important;
          }
          .rf-check-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
};

export default AboutUs;

