import React, { useEffect, useState } from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Link from "next/link";

const i18nContent = {
  fr: {
    metaTitle: "A propos | RFIDIA",
    metaDesc:
      "RFIDIA accompagne les entreprises depuis plus de 14 ans avec des solutions RFID et IoT sur mesure pour la tracabilite, la securite et l'automatisation.",
    navbar: {
      home: "Accueil",
      about: "A propos",
      solutions: "Solutions",
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
    heroTag: "Qui sommes-nous ?",
    heroTitle: "RFIDIA, partenaire de votre transformation digitale",
    heroDesc:
      "Depuis 2011, nous transformons les defis technologiques en leviers de croissance avec des solutions RFID et IoT sur mesure, fiables et adaptees a votre environnement.",
    heroPrimary: "Parler de votre projet",
    heroSecondary: "Voir nos solutions",
    stats: [
      { value: "+14 ans", label: "d'experience dans l'innovation tech" },
      { value: "2011", label: "annee de specialisation RFID" },
      { value: "100%", label: "accompagnement sur mesure" },
    ],
    missionTitle: "Notre mission",
    missionText:
      "Chez RFIDIA, nous sommes dedies a transformer les enjeux technologiques en avantages competitifs. Nous concevons des solutions IT personnalisees qui optimisent et securisent votre parc, vos marchandises et votre personnel, tout en respectant vos contraintes metier.",
    expertiseTitle: "Notre expertise",
    expertiseText:
      "Specialiste RFID depuis 2011, RFIDIA developpe des solutions cles en main : suivi intelligent des actifs, gestion du stationnement, tracabilite logistique, sante et autres cas d'usage sectoriels. Nous exploitons pleinement la RFID et l'IoT pour accelerer vos projets de transformation numerique et d'automatisation.",
    solutionsTitle: "Nos solutions",
    solutionsText:
      "RFIDIA commercialise des lecteurs, des tags et conçoit des solutions innovantes destinees aux marches de la securite et de la tracabilite. Nos plateformes vous offrent des donnees fiables et immediates sur l'etat et la localisation de vos produits, ou qu'ils se trouvent.",
    engagementTitle: "Notre engagement",
    engagementText:
      "En tant que maitre d'oeuvre, nous prenons en charge l'ensemble du projet : evaluation de l'existant, conseil, POC, conception de la solution RFID adaptee, selection des composants, developpement, installation et mise en service sur site.",
    activityTitle: "Notre activite",
    activityText:
      "Depuis plus de 14 ans, nous accompagnons les entreprises dans la digitalisation de la production, la gestion d'inventaires, la logistique, le transport et le suivi des operations de maintenance. Nos solutions permettent de reduire les couts, renforcer la securisation des flux et automatiser les taches chronophages et sujettes aux erreurs.",
    knowHowTitle: "Notre savoir-faire",
    knowHowText:
      "Notre savoir-faire repose sur la competence de nos developpeurs et techniciens, combinee a plus de 14 ans d'experience terrain dans la securisation et l'optimisation des flux par radio-identification. Nos solutions, entierement parametrables, s'integrent a vos systemes existants, proposent une connexion utilisateur unique et un support de mise en oeuvre complet.",
    valuesTitle: "Nos valeurs",
    values: [
      {
        title: "Innovation",
        desc: "Nous developpons des solutions RFID innovantes, deja alignees avec l'industrie 4.0 et l'integration de l'IA.",
      },
      {
        title: "Fiabilite",
        desc: "Nous respectons nos engagements et garantissons des solutions robustes pour nos clients et partenaires.",
      },
      {
        title: "Ecoute",
        desc: "Chaque entreprise est unique. Nous adaptons nos solutions a vos besoins reels et a vos contraintes propres.",
      },
      {
        title: "Souplesse et flexibilite",
        desc: "Nous mettons en oeuvre les moyens necessaires pour nous adapter rapidement a votre contexte operationnel.",
      },
    ],
    qualityTitle: "Nos engagements qualite",
    qualityItems: [
      "Diagnostic et etude technique et commerciale personnalisee",
      "Conception et parametrage selon vos specifications",
      "Interfaçage avec votre systeme d'information sans adaptation lourde",
      "Installation et deploiement sur votre site",
      "Formation des utilisateurs",
      "Contrat de maintenance et hotline telephonique",
    ],
    ctaTitle: "Construisons votre solution RFID sur mesure",
    ctaText:
      "Parlez-nous de votre contexte, de vos objectifs et de vos contraintes. Nous vous proposons une feuille de route claire, progressive et orientee resultats.",
    ctaPrimary: "Contactez RFIDIA",
    ctaSecondary: "Decouvrir les solutions",
  },
};

const AboutUs = () => {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("rfidia_lang");
      if (saved && ["fr", "en", "it"].includes(saved)) setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("rfidia_lang", language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = i18nContent.fr;

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar classOption="navbar-light" language={language} onLanguageChange={setLanguage} labels={t.navbar} />

      <main className="about-rfidia">
        <section className="about-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="about-tag">{t.heroTag}</span>
                <h1>{t.heroTitle}</h1>
                <p>{t.heroDesc}</p>
                <div className="about-hero-actions">
                  <Link href="/contact-us" passHref>
                    <a className="about-btn about-btn--primary">{t.heroPrimary}</a>
                  </Link>
                  <Link href="/it-solution" passHref>
                    <a className="about-btn about-btn--ghost">{t.heroSecondary}</a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-hero-card">
                  {t.stats.map((s) => (
                    <div key={s.label} className="about-stat">
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="about-grid-2">
              <article className="about-panel">
                <h2>{t.missionTitle}</h2>
                <p>{t.missionText}</p>
              </article>
              <article className="about-panel">
                <h2>{t.expertiseTitle}</h2>
                <p>{t.expertiseText}</p>
              </article>
              <article className="about-panel">
                <h2>{t.solutionsTitle}</h2>
                <p>{t.solutionsText}</p>
              </article>
              <article className="about-panel">
                <h2>{t.engagementTitle}</h2>
                <p>{t.engagementText}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section about-section--soft">
          <div className="container">
            <div className="about-block">
              <h2>{t.activityTitle}</h2>
              <p>{t.activityText}</p>
            </div>
            <div className="about-block">
              <h2>{t.knowHowTitle}</h2>
              <p>{t.knowHowText}</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="about-section-head">
              <h2>{t.valuesTitle}</h2>
            </div>
            <div className="about-values-grid">
              {t.values.map((v) => (
                <article key={v.title} className="about-value-card">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section about-section--soft">
          <div className="container">
            <div className="about-section-head">
              <h2>{t.qualityTitle}</h2>
            </div>
            <ul className="about-quality-list">
              {t.qualityItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about-cta">
          <div className="container">
            <div className="about-cta-inner">
              <div>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaText}</p>
              </div>
              <div className="about-cta-actions">
                <Link href="/contact-us" passHref>
                  <a className="about-btn about-btn--light">{t.ctaPrimary}</a>
                </Link>
                <Link href="/it-solution" passHref>
                  <a className="about-btn about-btn--outline">{t.ctaSecondary}</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer translations={t.footer} />

      <style jsx>{`
        .about-rfidia {
          --navy: #1e2a4a;
          --cyan: #4dc8c4;
          --violet: #7b5ea7;
          --rose: #e0305a;
          --line: #dfe7f6;
          --text: #0f1a3d;
          --muted: #5a6488;
          font-family: "Manrope", sans-serif;
          color: var(--text);
          background: #fff;
        }
        .about-hero {
          padding: 110px 0 72px;
          background: radial-gradient(980px 420px at 18% 12%, rgba(77, 200, 196, 0.14), transparent 60%),
            radial-gradient(900px 420px at 82% 20%, rgba(123, 94, 167, 0.1), transparent 58%), #fff;
          border-bottom: 1px solid rgba(30, 42, 74, 0.08);
        }
        .about-tag {
          display: inline-flex;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(77, 200, 196, 0.14);
          border: 1px solid rgba(77, 200, 196, 0.28);
          color: var(--navy);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .about-hero h1 {
          font-size: clamp(2rem, 4.6vw, 3.8rem);
          line-height: 1.1;
          margin-bottom: 16px;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--navy);
        }
        .about-hero p {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--muted);
          margin-bottom: 24px;
          max-width: 690px;
        }
        .about-hero-actions,
        .about-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .about-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          padding: 12px 20px;
          font-weight: 700;
          text-decoration: none;
          border: 1px solid transparent;
          transition: all 0.25s ease;
        }
        .about-btn--primary {
          background: linear-gradient(120deg, var(--rose), #b61f42);
          color: #fff;
          box-shadow: 0 14px 32px rgba(224, 48, 90, 0.24);
        }
        .about-btn--primary:hover {
          color: #fff;
          transform: translateY(-2px);
        }
        .about-btn--ghost {
          background: #fff;
          border-color: rgba(30, 42, 74, 0.18);
          color: var(--navy);
        }
        .about-btn--ghost:hover {
          color: var(--navy);
          transform: translateY(-2px);
          border-color: rgba(30, 42, 74, 0.28);
        }
        .about-hero-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 18px;
          box-shadow: 0 18px 42px rgba(22, 35, 80, 0.08);
          display: grid;
          gap: 12px;
        }
        .about-stat {
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 12px 14px;
          background: #fff;
        }
        .about-stat strong {
          display: block;
          font-size: 1.2rem;
          color: var(--navy);
          margin-bottom: 2px;
        }
        .about-stat span {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .about-section {
          padding: 74px 0;
        }
        .about-section--soft {
          background: linear-gradient(180deg, rgba(245, 248, 255, 0.9), rgba(245, 248, 255, 0.52));
          border-top: 1px solid rgba(30, 42, 74, 0.08);
          border-bottom: 1px solid rgba(30, 42, 74, 0.08);
        }
        .about-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        .about-panel,
        .about-block,
        .about-value-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 14px 36px rgba(22, 35, 80, 0.06);
        }
        .about-panel h2,
        .about-block h2,
        .about-section-head h2 {
          margin: 0 0 10px;
          color: var(--navy);
          font-size: clamp(1.35rem, 2.2vw, 1.95rem);
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        .about-panel p,
        .about-block p,
        .about-value-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
          font-size: 0.98rem;
        }
        .about-block + .about-block {
          margin-top: 16px;
        }
        .about-section-head {
          text-align: center;
          margin-bottom: 24px;
        }
        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        .about-value-card h3 {
          margin: 0 0 8px;
          color: var(--navy);
          font-size: 1.12rem;
          font-weight: 800;
        }
        .about-quality-list {
          margin: 0 auto;
          padding: 0;
          list-style: none;
          max-width: 900px;
          display: grid;
          gap: 10px;
        }
        .about-quality-list li {
          position: relative;
          border-radius: 12px;
          border: 1px solid var(--line);
          padding: 12px 14px 12px 44px;
          background: #fff;
          color: var(--text);
          line-height: 1.6;
        }
        .about-quality-list li::before {
          content: "";
          position: absolute;
          left: 16px;
          top: 18px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 0 4px rgba(77, 200, 196, 0.18);
        }
        .about-cta {
          padding: 62px 0 86px;
        }
        .about-cta-inner {
          border-radius: 26px;
          padding: clamp(2rem, 4vw, 3rem);
          background: radial-gradient(900px 420px at 20% 20%, rgba(224, 48, 90, 0.2), transparent 58%),
            radial-gradient(900px 420px at 80% 15%, rgba(77, 200, 196, 0.16), transparent 58%),
            linear-gradient(125deg, #1e2a4a 0%, #2a3760 70%, #1e2a4a 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 26px 70px rgba(22, 35, 80, 0.2);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }
        .about-cta-inner h2 {
          color: #fff;
          margin: 0 0 8px;
          font-size: clamp(1.45rem, 2.4vw, 2.1rem);
          font-weight: 900;
        }
        .about-cta-inner p {
          color: rgba(255, 255, 255, 0.86);
          margin: 0;
          line-height: 1.7;
          max-width: 560px;
        }
        .about-btn--light {
          background: #fff;
          color: var(--navy);
        }
        .about-btn--light:hover {
          color: var(--navy);
          transform: translateY(-2px);
        }
        .about-btn--outline {
          border-color: rgba(255, 255, 255, 0.35);
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }
        .about-btn--outline:hover {
          color: #fff;
          transform: translateY(-2px);
        }
        @media (max-width: 991px) {
          .about-grid-2,
          .about-values-grid {
            grid-template-columns: 1fr;
          }
          .about-hero {
            padding: 96px 0 58px;
          }
          .about-cta {
            padding: 52px 0 70px;
          }
          .about-stat strong {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default AboutUs;
