/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Link from "next/link";
import { FiCpu, FiTruck, FiBox, FiSliders, FiArrowRight, FiSettings, FiAward, FiLayers, FiTrendingUp, FiShield } from 'react-icons/fi';

const IconComponent = ({ name, className }) => {
  const icons = {
    FiCpu: <FiCpu className={className} />,
    FiTruck: <FiTruck className={className} />,
    FiBox: <FiBox className={className} />,
    FiSliders: <FiSliders className={className} />,
    FiSettings: <FiSettings className={className} />,
    FiAward: <FiAward className={className} />,
    FiLayers: <FiLayers className={className} />,
    FiTrendingUp: <FiTrendingUp className={className} />,
    FiShield: <FiShield className={className} />,
  };
  return icons[name] || <FiCpu className={className} />;
};

const i18nContent = {
  fr: {
    metaTitle: "À propos | RFIDIA - Traçabilité & IA Industrielle",
    metaDesc: "Depuis 2011, RFIDIA connecte le monde physique au numérique grâce à des solutions RFID, IoT et d'automatisation sur mesure.",
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
      brandDesc: "Leader tunisien de la traçabilité intelligente. Nous accompagnons les entreprises dans leur transformation digitale grâce à nos solutions RFID, IoT et codes-barres haute performance.",
    },
    heroTag: "Notre Vision",
    heroTitle: "Connecter le monde physique à l'intelligence numérique.",
    heroDesc: "Depuis 2011, RFIDIA conçoit des solutions de traçabilité RFID et IoT de pointe. Notre mission est simple : transformer la complexité opérationnelle en données fiables, exploitables et en temps réel pour piloter votre performance industrielle.",
    
    stat1Val: "+14 ans", stat1Label: "D'innovation et d'expertise terrain",
    stat2Val: "250+", stat2Label: "Projets industriels déployés",
    stat3Val: "99.9%", stat3Label: "De précision de lecture certifiée",

    focusTag: "Nos Piliers",
    focusTitle: "L'excellence technologique au service de vos flux",
    focusList: [
      { title: "Traçabilité RFID Avancée", desc: "Architectures de lecture haute précision adaptées aux environnements industriels les plus exigeants.", icon: "FiCpu" },
      { title: "Automatisation Logistique", desc: "Accélération des flux de réception, d'expédition et d'inventaire sans intervention manuelle.", icon: "FiTruck" },
      { title: "Gestion des Actifs & Maintenance", desc: "Suivi unitaire et historisation en temps réel pour sécuriser vos équipements critiques.", icon: "FiBox" },
      { title: "Synergie IA & IoT", desc: "Transformation des données brutes en tableaux de bord intelligents et alertes prédictives.", icon: "FiSliders" }
    ],

    whyTag: "L'Avantage RFIDIA",
    whyTitle: "Pourquoi les leaders industriels nous choisissent",
    whyList: [
      { title: "Ingénierie Sur Mesure", desc: "Nos solutions sont paramétrées selon vos flux et contraintes terrain, sans imposer de modèles rigides.", icon: "FiSettings" },
      { title: "14 Ans d'Expertise Terrain", desc: "Une connaissance approfondie des secteurs de la production, de la logistique de pointe et de la santé.", icon: "FiAward" },
      { title: "Intégration SI Transparente", desc: "Connexion fluide avec vos ERP (SAP, Oracle) et WMS existants, sans refonte lourde de votre système.", icon: "FiLayers" },
      { title: "Intelligence Temps Réel", desc: "Transformation de vos données brutes en tableaux de bord exploitables pour décider plus vite.", icon: "FiTrendingUp" },
      { title: "Accompagnement de Bout en Bout", desc: "Un support complet incluant l'audit, le déploiement sur site, la formation et une maintenance 24/7.", icon: "FiShield" }
    ],

    ctaTag: "Passez à l'action",
    ctaTitle: "Prêt à optimiser vos opérations ?",
    ctaDesc: "Discutons de vos contraintes et découvrez comment nos solutions sur mesure peuvent transformer votre chaîne de valeur.",
    ctaBtnPrimary: "Contactez un expert",
    ctaBtnSecondary: "Découvrir nos solutions"
  },
  en: {
    metaTitle: "About Us | RFIDIA - Smart Traceability & Industrial AI",
    metaDesc: "Since 2011, RFIDIA has been bridging the physical and digital worlds with custom RFID, IoT, and automation solutions.",
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
      brandDesc: "Tunisian leader in smart traceability. We support companies in their digital transformation through high-performance RFID, IoT and barcode solutions.",
    },
    heroTag: "Our Vision",
    heroTitle: "Bridging the physical world with digital intelligence.",
    heroDesc: "Since 2011, RFIDIA has been designing cutting-edge RFID and IoT traceability solutions. Our mission is simple: transform operational complexity into reliable, real-time data to drive your industrial performance.",
    
    stat1Val: "14+ years", stat1Label: "Of innovation and field expertise",
    stat2Val: "250+", stat2Label: "Industrial projects deployed",
    stat3Val: "99.9%", stat3Label: "Certified reading accuracy",

    focusTag: "Our Pillars",
    focusTitle: "Technological excellence powering your workflows",
    focusList: [
      { title: "Advanced RFID Traceability", desc: "High-precision reading architectures adapted to the most demanding industrial environments.", icon: "FiCpu" },
      { title: "Logistics Automation", desc: "Acceleration of receiving, shipping, and inventory flows without manual intervention.", icon: "FiTruck" },
      { title: "Asset & Maintenance Management", desc: "Unit tracking and real-time logging to secure your critical equipment and tools.", icon: "FiBox" },
      { title: "AI & IoT Synergy", desc: "Transforming raw data into smart dashboards and predictive decision-making alerts.", icon: "FiSliders" }
    ],

    whyTag: "The RFIDIA Advantage",
    whyTitle: "Why industrial leaders choose us",
    whyList: [
      { title: "Custom Engineering", desc: "Our solutions are configured to your specific workflows and field constraints, without rigid templates.", icon: "FiSettings" },
      { title: "14 Years of Field Expertise", desc: "Deep practical knowledge across manufacturing, advanced logistics, and healthcare sectors.", icon: "FiAward" },
      { title: "Seamless IS Integration", desc: "Smooth connection with your existing ERP (SAP, Oracle) and WMS, without heavy system redesigns.", icon: "FiLayers" },
      { title: "Real-Time Intelligence", desc: "Transforming raw data into actionable dashboards and alerts for faster decision-making.", icon: "FiTrendingUp" },
      { title: "End-to-End Support", desc: "Comprehensive backing including audit, on-site deployment, operator training, and 24/7 maintenance.", icon: "FiShield" }
    ],

    ctaTag: "Take Action",
    ctaTitle: "Ready to optimize your operations?",
    ctaDesc: "Let's discuss your operational challenges and explore how our tailored solutions can transform your value chain.",
    ctaBtnPrimary: "Contact an expert",
    ctaBtnSecondary: "Discover our solutions"
  },
  it: {
    metaTitle: "Chi Siamo | RFIDIA - Tracciabilità & IA Industriale",
    metaDesc: "Dal 2011, RFIDIA collega il mondo fisico al digitale con soluzioni RFID, IoT e di automazione su misura.",
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
      newsletterPlaceholder: "Il tuo email",
      newsletterAria: "Iscriviti",
      copyright: "Tutti i diritti riservati.",
      privacy: "Politica sulla privacy",
      legal: "Note legali",
      brandDesc: "Leader tunisino nella tracciabilità intelligente. Supportiamo le aziende nella trasformazione digitale con soluzioni RFID, IoT e codici a barre ad alte prestazioni.",
    },
    heroTag: "La Nostra Visione",
    heroTitle: "Connettere il mondo fisico all'intelligenza digitale.",
    heroDesc: "Dal 2011, RFIDIA progetta soluzioni di tracciabilità RFID e IoT all'avanguardia. La nostra missione è semplice: trasformare la complessità operativa in dati affidabili e in tempo reale per guidare le tue performance industriali.",
    
    stat1Val: "14+ anni", stat1Label: "Di innovazione ed esperienza sul campo",
    stat2Val: "250+", stat2Label: "Progetti industriali implementati",
    stat3Val: "99.9%", stat3Label: "Precisione di lettura certificata",

    focusTag: "I Nostri Pilastri",
    focusTitle: "Eccellenza tecnologica al servizio dei tuoi flussi",
    focusList: [
      { title: "Tracciabilità RFID Avanzata", desc: "Architetture di lettura ad alta precisione adatte agli ambienti industriali più esigenti.", icon: "FiCpu" },
      { title: "Automazione Logistica", desc: "Accelerazione dei flussi di ricezione, spedizione e inventario senza intervento manuale.", icon: "FiTruck" },
      { title: "Gestione Asset e Manutenzione", desc: "Tracciamento unitario e registrazione in tempo reale per proteggere le tue attrezzature critiche.", icon: "FiBox" },
      { title: "Sinergia IA e IoT", desc: "Trasformazione dei dati grezzi in dashboard intelligenti e avvisi decisionali predittivi.", icon: "FiSliders" }
    ],

    whyTag: "Il Vantaggio RFIDIA",
    whyTitle: "Perché i leader industriali ci scelgono",
    whyList: [
      { title: "Ingegneria su Misura", desc: "Le nostre soluzioni sono configurate in base ai tuoi flussi e vincoli operativi, senza modelli rigidi.", icon: "FiSettings" },
      { title: "14 Anni di Esperienza sul Campo", desc: "Una profonda conoscenza pratica nei settori della produzione, della logistica avanzata e della sanità.", icon: "FiAward" },
      { title: "Integrazione SI Trasparente", desc: "Connessione fluida con i tuoi ERP (SAP, Oracle) e WMS esistenti, senza pesanti modifiche al sistema.", icon: "FiLayers" },
      { title: "Intelligenza in Tempo Reale", desc: "Trasformazione dei dati grezzi in dashboard fruibili per prendere decisioni più rapidamente.", icon: "FiTrendingUp" },
      { title: "Supporto End-to-End", desc: "Un supporto completo che include audit, implementazione in loco, formation e manutenzione 24/7.", icon: "FiShield" }
    ],

    ctaTag: "Agisci Ora",
    ctaTitle: "Pronto a ottimizzare le tue operazioni?",
    ctaDesc: "Discutiamo delle tue sfide operative e scopriamo come le nostre soluzioni su misura possono trasformare la tua catena del valore.",
    ctaBtnPrimary: "Contatta un esperto",
    ctaBtnSecondary: "Scopri le soluzioni"
  }
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

      <main className="rf-about-minimal">
        {/* 1. Hero & Story Section - Background gris blanc (#f8fafc) & padding réduit */}
        <section className="abt-hero-clean pt-60 pb-50 bg-light-soft">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8 col-md-10">
                <div className="abt-badge-clean mb-3">{t.heroTag}</div>
                <h1 className="abt-title-clean mb-3">{t.heroTitle}</h1>
                <p className="abt-desc-clean mx-auto mb-4">{t.heroDesc}</p>
              </div>
            </div>
            {/* Image agrandie (col-lg-12 au lieu de 10) */}
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="abt-hero-img-box">
                  <img src="/a_rfidia/about.png" alt="RFIDIA Overview" className="img-fluid abt-hero-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Numbers / Impact - Design simple & épuré sur fond blanc (#ffffff) */}
        <section className="abt-stats-simple py-50 bg-white">
          <div className="container">
            <div className="row g-4 align-items-center justify-content-center text-center">
              <div className="col-lg-4 col-md-6">
                <div className="abt-stat-item-simple">
                  <span className="abt-stat-val-simple">{t.stat1Val}</span>
                  <p className="abt-stat-label-simple">{t.stat1Label}</p>
                  <div className="abt-stat-divider-simple d-none d-lg-block"></div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="abt-stat-item-simple">
                  <span className="abt-stat-val-simple">{t.stat2Val}</span>
                  <p className="abt-stat-label-simple">{t.stat2Label}</p>
                  <div className="abt-stat-divider-simple d-none d-lg-block"></div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="abt-stat-item-simple">
                  <span className="abt-stat-val-simple">{t.stat3Val}</span>
                  <p className="abt-stat-label-simple">{t.stat3Label}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Core Focus / Nos Piliers - Fond gris blanc (#f8fafc) & padding réduit */}
        <section className="abt-focus-clean py-60 bg-light-soft">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8">
                <div className="abt-badge-clean mb-2">{t.focusTag}</div>
                <h2 className="abt-subtitle-clean mb-0">{t.focusTitle}</h2>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              {t.focusList.map((item, idx) => (
                <div className="col-lg-6 col-md-12" key={idx}>
                  <div className="abt-focus-card h-100 d-flex align-items-start gap-4">
                    <div className="abt-focus-icon-box flex-shrink-0">
                      <IconComponent name={item.icon} className="abt-icon-clean text-cyan-primary" />
                    </div>
                    <div>
                      <h3 className="abt-focus-title mb-2">{item.title}</h3>
                      <p className="abt-focus-desc mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us / Pourquoi Nous Choisir - Fond blanc (#ffffff) & padding réduit */}
        <section className="abt-why-clean py-60 bg-white">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8">
                <div className="abt-badge-clean mb-2">{t.whyTag}</div>
                <h2 className="abt-subtitle-clean mb-0">{t.whyTitle}</h2>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              {t.whyList.map((item, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="abt-why-card h-100">
                    <div className="abt-why-icon-box mb-3">
                      <IconComponent name={item.icon} className="abt-icon-clean text-cyan-primary" />
                    </div>
                    <h3 className="abt-why-title mb-2">{item.title}</h3>
                    <p className="abt-why-desc mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Simple, Elegant CTA - Padding réduit */}
        <section className="abt-cta-section pb-60 pt-20 bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="abt-cta-clean">
                  <div className="abt-badge-clean mb-3">{t.ctaTag}</div>
                  <h2 className="abt-cta-title mb-3">{t.ctaTitle}</h2>
                  <p className="abt-cta-desc mx-auto mb-4">{t.ctaDesc}</p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <Link href="/contact-us">
                      <a className="abt-btn-cyan-clean">
                        {t.ctaBtnPrimary}
                        <FiArrowRight className="ms-2" />
                      </a>
                    </Link>
                    <Link href="/it-solution">
                      <a className="abt-btn-outline-clean">
                        {t.ctaBtnSecondary}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer translations={t.footer} />

      <style jsx>{`
        /* Global Clean Typography & Spacing */
        .rf-about-minimal {
          font-family: 'Manrope', 'Inter', sans-serif;
          color: #0f1a3d;
          background-color: #ffffff;
        }

        /* Margins & Paddings minimisés et équilibrés */
        .pt-60 { padding-top: 60px; }
        .pb-50 { padding-bottom: 50px; }
        .py-50 { padding-top: 50px; padding-bottom: 50px; }
        .py-60 { padding-top: 60px; padding-bottom: 60px; }
        .pb-60 { padding-bottom: 60px; }
        .pt-20 { padding-top: 20px; }

        .bg-white { background-color: #ffffff; }
        .bg-light-soft { background-color: #f8fafc; }
        .text-cyan-primary { color: #4DC8C4 !important; }

        /* Clean Badges */
        .abt-badge-clean {
          display: inline-flex; align-items: center;
          padding: 6px 16px; border-radius: 999px; font-size: 0.75rem;
          font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
          background-color: rgba(77, 200, 196, 0.1); color: #4DC8C4;
          border: 1px solid rgba(77, 200, 196, 0.2);
        }

        /* Hero Typography & Image (Agrandie) */
        .abt-title-clean {
          font-size: clamp(2rem, 3.8vw, 3.4rem);
          font-weight: 900; color: #0f1a3d; line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .abt-desc-clean {
          font-size: clamp(1.02rem, 1.5vw, 1.15rem);
          color: #4f5d86; line-height: 1.7; max-width: 720px;
        }
        .abt-hero-img-box {
          border-radius: 24px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(15, 26, 61, 0.12);
          border: 1px solid #e2e8f0; background: #ffffff;
        }
        .abt-hero-img { width: 100%; height: auto; max-height: 680px; object-fit: cover; display: block; }

        /* Statistics - Design Simple & Épuré */
        .abt-stat-item-simple {
          position: relative;
          padding: 16px 24px;
        }
        .abt-stat-val-simple {
          font-size: clamp(2.5rem, 4vw, 3.6rem);
          font-weight: 900;
          color: #4DC8C4;
          line-height: 1.1;
          margin-bottom: 8px;
          display: block;
          letter-spacing: -0.02em;
        }
        .abt-stat-label-simple {
          font-size: 1.05rem;
          font-weight: 600;
          color: #4f5d86;
          margin: 0;
          line-height: 1.5;
        }
        .abt-stat-divider-simple {
          position: absolute; right: 0; top: 15%; bottom: 15%;
          width: 1px; background-color: #e2e8f0;
        }

        /* Core Focus Cards */
        .abt-subtitle-clean { font-size: clamp(1.6rem, 2.8vw, 2.3rem); font-weight: 800; color: #0f1a3d; line-height: 1.2; }
        .abt-focus-card {
          background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px;
          padding: 36px 28px; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(15, 26, 61, 0.02);
        }
        .abt-focus-card:hover {
          border-color: #2563eb; transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(37, 99, 235, 0.08);
        }
        .abt-focus-icon-box {
          width: 56px; height: 56px; border-radius: 16px; background-color: rgba(77, 200, 196, 0.08);
          display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;
        }
        .abt-focus-card:hover .abt-focus-icon-box { background-color: #2563eb; color: #ffffff !important; }
        .abt-focus-card:hover .abt-focus-icon-box :global(svg) { color: #ffffff !important; }
        .abt-icon-clean { font-size: 24px; }
        .abt-focus-title { font-size: 1.25rem; font-weight: 800; color: #0f1a3d; }
        .abt-focus-desc { font-size: 0.98rem; color: #4f5d86; line-height: 1.65; }

        /* Why Choose Us Cards */
        .abt-why-card {
          background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 20px;
          padding: 36px 28px; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(15, 26, 61, 0.02);
        }
        .abt-why-card:hover {
          border-color: #4DC8C4; background: #ffffff; transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(77, 200, 196, 0.08);
        }
        .abt-why-icon-box {
          width: 56px; height: 56px; border-radius: 16px; background-color: rgba(77, 200, 196, 0.08);
          display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;
        }
        .abt-why-card:hover .abt-why-icon-box { background-color: #4DC8C4; color: #ffffff !important; }
        .abt-why-card:hover .abt-why-icon-box :global(svg) { color: #ffffff !important; }
        .abt-why-title { font-size: 1.2rem; font-weight: 800; color: #0f1a3d; }
        .abt-why-desc { font-size: 0.98rem; color: #4f5d86; line-height: 1.65; }

        /* Simple Elegant CTA */
        .abt-cta-clean {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid #cbd5e1; border-radius: 28px;
          padding: 56px 40px; text-align: center;
          box-shadow: 0 20px 60px rgba(15, 26, 61, 0.05);
        }
        .abt-cta-title { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 900; color: #0f1a3d; line-height: 1.2; }
        .abt-cta-desc { font-size: clamp(1rem, 1.4vw, 1.1rem); color: #4f5d86; line-height: 1.7; max-width: 640px; }

        /* Boutons avec la couleur demandée #4DC8C4 et texte contrasté #0f1a3d */
        .abt-btn-cyan-clean {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 28px; border-radius: 12px; font-weight: 800; font-size: 1rem;
          background-color: #4DC8C4; color: #0f1a3d !important; text-decoration: none;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(77, 200, 196, 0.3);
          cursor: pointer;
        }
        .abt-btn-cyan-clean:hover {
          background-color: #3bb5b1; transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(77, 200, 196, 0.45); color: #0f1a3d !important;
        }
        .abt-btn-outline-clean {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 28px; border-radius: 12px; font-weight: 800; font-size: 1rem;
          background-color: transparent; color: #0f1a3d !important; text-decoration: none;
          border: 1px solid #0f1a3d; transition: all 0.3s ease;
          cursor: pointer;
        }
        .abt-btn-outline-clean:hover {
          background-color: #0f1a3d; color: #ffffff !important;
          transform: translateY(-2px); box-shadow: 0 12px 32px rgba(15, 26, 61, 0.2);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .pt-60 { padding-top: 40px; }
          .pb-50 { padding-bottom: 40px; }
          .py-50 { padding-top: 40px; padding-bottom: 40px; }
          .py-60 { padding-top: 48px; padding-bottom: 48px; }
          .pb-60 { padding-bottom: 48px; }
          .abt-cta-clean { padding: 36px 24px; }
        }
      `}</style>
    </Layout>
  );
};

export default AboutUs;
