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
    metaTitle: "Solution Santé | RFIDIA",
    metaDesc:
      "Traçabilité et sécurité en santé : suivi des dispositifs médicaux, maîtrise des stocks sensibles, réduction des pertes et meilleure continuité de service.",
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
    heroTag: "Santé • Traçabilité & sécurité",
    heroTitleA: "La traçabilité",
    heroTitleB: "qui rassure",
    heroTitleC: "et qui protège la continuité de soins",
    heroSub:
      "RFIDIA aide les établissements de santé à mieux localiser les équipements, sécuriser les stocks sensibles et fiabiliser les mouvements. Objectif : moins de pertes, des inventaires plus rapides et des données exploitables pour améliorer la disponibilité au bon moment.",
    heroCta1: "Évaluer mon établissement",
    heroCta2: "Voir toutes les solutions",
    stats: [
      { v: "-35%", l: "Pertes & immobilisations" },
      { v: "-50%", l: "Temps de recherche" },
      { v: "+20%", l: "Disponibilité équipement" },
    ],
    areasTitle: "Domaines couverts",
    areasDesc:
      "Selon votre périmètre : traçabilité des équipements, des dispositifs, et gestion de stocks — avec une approche progressive et respectueuse du terrain.",
    areas: [
      {
        title: "Équipements biomédicaux",
        desc: "Localisation, mouvements, prêts et maintenance : visibilité claire sur le parc et réduction des indisponibilités.",
      },
      {
        title: "Dispositifs médicaux & consommables",
        desc: "Sécurisation des stocks, suivi des lots/variantes (selon choix), et réduction des ruptures sur les unités.",
      },
      {
        title: "Zones sensibles",
        desc: "Gestion des accès et journaux d’événements (selon périmètre) pour protéger les espaces critiques.",
      },
      {
        title: "Inventaires & audits",
        desc: "Inventaires plus rapides par zone (services, blocs, pharmacie), réconciliation et rapports exploitables.",
      },
    ],
    methodTitle: "Une méthode adaptée au secteur",
    methodDesc:
      "On priorise l’impact opérationnel : disponibilité, sécurité et fiabilité — avec des pilotes mesurables.",
    method: [
      { n: "01", t: "Cadrage", d: "Périmètre, flux, zones et indicateurs (temps de recherche, pertes, disponibilité)." },
      { n: "02", t: "Pilote", d: "Unité pilote, installation, formation courte, mesures avant/après et validation terrain." },
      { n: "03", t: "Déploiement", d: "Extension progressive, intégrations utiles, règles et gouvernance des données." },
      { n: "04", t: "Amélioration", d: "Suivi, ajustements, dashboards et support pour ancrer les usages." },
    ],
    proofTitle: "Bénéfices attendus",
    proofDesc: "Des bénéfices concrets qui améliorent le quotidien des équipes.",
    proofs: [
      "Plus de visibilité : équipements retrouvés plus vite, moins d’achats de “remplacement”",
      "Stocks mieux maîtrisés : moins de ruptures et de surstock",
      "Inventaires plus rapides : audits simplifiés et écarts réduits",
      "Données exploitables : décisions basées sur l’usage réel",
    ],
    ctaTitle: "Rendons la traçabilité simple et utile",
    ctaSub:
      "Décrivez votre établissement, vos zones et vos catégories (biomédical, stocks, unités) : nous proposons un plan progressif et réaliste.",
    ctaBtn: "Contactez RFIDIA",
    ctaAlt: "Retour à l’accueil solutions",
  },
  en: {
    metaTitle: "Healthcare Solution | RFIDIA",
    metaDesc:
      "Traceability and security in healthcare: track devices, control sensitive inventory, reduce losses and improve continuity of service.",
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
    heroTag: "Healthcare • Traceability & safety",
    heroTitleA: "Traceability",
    heroTitleB: "that reassures",
    heroTitleC: "and protects continuity of care",
    heroSub:
      "RFIDIA helps healthcare facilities locate equipment, secure sensitive inventory and improve movement reliability. Less loss, faster inventories and actionable data to increase availability at the right time.",
    heroCta1: "Assess my facility",
    heroCta2: "All solutions",
    stats: [
      { v: "-35%", l: "Losses & idle time" },
      { v: "-50%", l: "Search time" },
      { v: "+20%", l: "Equipment availability" },
    ],
    areasTitle: "Coverage",
    areasDesc:
      "Depending on your scope: equipment/device tracking and inventory management — with a progressive, floor-friendly approach.",
    areas: [
      {
        title: "Biomedical equipment",
        desc: "Location, movements, loans and maintenance: clear fleet visibility and fewer unavailabilities.",
      },
      {
        title: "Medical devices & consumables",
        desc: "Secure inventory, track lots/variants (as needed) and reduce unit-level shortages.",
      },
      {
        title: "Sensitive zones",
        desc: "Access management and event logs (scope-dependent) to protect critical areas.",
      },
      {
        title: "Inventories & audits",
        desc: "Faster zone counts (wards, OR, pharmacy), reconciliation and usable reporting.",
      },
    ],
    methodTitle: "A sector-ready method",
    methodDesc: "We prioritize operational impact with measurable pilots.",
    method: [
      { n: "01", t: "Scope", d: "Perimeter, flows, zones and KPIs (search time, losses, availability)." },
      { n: "02", t: "Pilot", d: "Pilot unit, install, short training, before/after metrics and floor validation." },
      { n: "03", t: "Rollout", d: "Progressive expansion, useful integrations, rules and data governance." },
      { n: "04", t: "Improve", d: "Follow-up, adjustments, dashboards and support to sustain adoption." },
    ],
    proofTitle: "Expected outcomes",
    proofDesc: "Concrete benefits that improve daily operations.",
    proofs: [
      "More visibility: equipment found faster, fewer replacement purchases",
      "Better stock control: fewer shortages and less overstock",
      "Faster inventories: simpler audits and reduced discrepancies",
      "Actionable data: decisions based on real usage",
    ],
    ctaTitle: "Let’s make traceability simple and useful",
    ctaSub:
      "Share your facility, zones and categories (biomedical, inventory, wards) — we’ll propose a realistic progressive plan.",
    ctaBtn: "Contact RFIDIA",
    ctaAlt: "Back to solutions hub",
  },
  it: {
    metaTitle: "Soluzione Sanità | RFIDIA",
    metaDesc:
      "Tracciabilità e sicurezza in sanità: tracking dispositivi, controllo scorte sensibili, meno perdite e continuità di servizio.",
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
    heroTag: "Sanità • Tracciabilità & sicurezza",
    heroTitleA: "Tracciabilità",
    heroTitleB: "che rassicura",
    heroTitleC: "e protegge la continuità di cura",
    heroSub:
      "RFIDIA aiuta le strutture sanitarie a localizzare attrezzature, mettere in sicurezza le scorte e rendere affidabili i movimenti. Meno perdite, inventari più rapidi e dati utili per aumentare la disponibilità al momento giusto.",
    heroCta1: "Valuta la struttura",
    heroCta2: "Tutte le soluzioni",
    stats: [
      { v: "-35%", l: "Perdite & inattività" },
      { v: "-50%", l: "Tempo di ricerca" },
      { v: "+20%", l: "Disponibilità attrezzature" },
    ],
    areasTitle: "Copertura",
    areasDesc:
      "In base al perimetro: tracking attrezzature/dispositivi e gestione scorte — con rollout progressivo e pratico.",
    areas: [
      {
        title: "Attrezzature biomedicali",
        desc: "Localizzazione, movimenti, prestiti e manutenzione: visibilità chiara e meno indisponibilità.",
      },
      {
        title: "Dispositivi & consumabili",
        desc: "Scorte più sicure, tracciamento lotti/varianti (se necessario) e meno rotture nei reparti.",
      },
      {
        title: "Aree sensibili",
        desc: "Gestione accessi e log eventi (in base al perimetro) per proteggere aree critiche.",
      },
      {
        title: "Inventari & audit",
        desc: "Conteggi più rapidi per zone (reparti, sale, farmacia), riconciliazione e report.",
      },
    ],
    methodTitle: "Metodo adatto al settore",
    methodDesc: "Priorità all’impatto operativo con piloti misurabili.",
    method: [
      { n: "01", t: "Perimetro", d: "Flussi, zone e KPI (ricerca, perdite, disponibilità)." },
      { n: "02", t: "Pilota", d: "Unità pilota, installazione, training breve, metriche e validazione sul campo." },
      { n: "03", t: "Deploy", d: "Estensione progressiva, integrazioni utili, regole e governance dati." },
      { n: "04", t: "Migliora", d: "Follow-up, aggiustamenti, dashboard e supporto per adozione." },
    ],
    proofTitle: "Benefici attesi",
    proofDesc: "Benefici concreti per migliorare il lavoro quotidiano.",
    proofs: [
      "Più visibilità: attrezzature trovate più velocemente, meno acquisti sostitutivi",
      "Scorte sotto controllo: meno rotture e meno overstock",
      "Inventari più rapidi: audit più semplici e meno scostamenti",
      "Dati utili: decisioni basate sull’uso reale",
    ],
    ctaTitle: "Tracciabilità semplice e utile",
    ctaSub: "Condividi struttura, zone e categorie: proponiamo un piano progressivo e realistico.",
    ctaBtn: "Contatta RFIDIA",
    ctaAlt: "Torna alle soluzioni",
  },
};

const SolutionSante = () => {
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
      accent: "#4DC8C4",
      accent2: "#A7F0EA",
      ink: "#121727",
    }),
    []
  );

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar language={language} onLanguageChange={setLanguage} labels={t.navbar} />

      <main className="med">
        <section className="med-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="med-tag">{t.heroTag}</div>
                <h1 className="med-title">
                  {t.heroTitleA} <span className="med-title__accent">{t.heroTitleB}</span>
                  <br />
                  {t.heroTitleC}
                </h1>
                <p className="med-sub">{t.heroSub}</p>
                <div className="med-actions">
                  <Link href="/contact-us" passHref>
                    <a className="med-btn med-btn--primary">{t.heroCta1}</a>
                  </Link>
                  <Link href="/it-solution" passHref>
                    <a className="med-btn med-btn--ghost">{t.heroCta2}</a>
                  </Link>
                </div>

                <div className="med-stats">
                  {t.stats.map((s) => (
                    <div className="med-stat" key={s.l}>
                      <div className="med-stat__v">{s.v}</div>
                      <div className="med-stat__l">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="med-visual">
                  <div className="med-visual__frame">
                    <img src="/a_rfidia/z_medical/z_medical3.png" alt="" />
                  </div>
                  <div className="med-visual__glass" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="med-section">
          <div className="container">
            <div className="med-head">
              <h2>{t.areasTitle}</h2>
              <p>{t.areasDesc}</p>
            </div>
            <div className="med-grid">
              {t.areas.map((a) => (
                <article className="med-card" key={a.title}>
                  <div className="med-card__top" />
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="med-section med-section--soft">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <div className="med-head med-head--left">
                  <h2>{t.methodTitle}</h2>
                  <p>{t.methodDesc}</p>
                </div>
                <div className="med-proof">
                  <div className="med-proof__title">{t.proofTitle}</div>
                  <div className="med-proof__desc">{t.proofDesc}</div>
                  <ul className="med-list">
                    {t.proofs.map((x) => (
                      <li key={x}>
                        <span className="med-list__icon" aria-hidden />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="med-flow">
                  {t.method.map((m, idx) => (
                    <div className="med-flow__row" key={m.n}>
                      <div className="med-flow__n">{m.n}</div>
                      <div className="med-flow__body">
                        <h3>{m.t}</h3>
                        <p>{m.d}</p>
                      </div>
                      {idx < t.method.length - 1 && <div className="med-flow__line" aria-hidden />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="med-cta">
          <div className="container">
            <div className="med-cta__inner">
              <div>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaSub}</p>
              </div>
              <div className="med-cta__actions">
                <Link href="/contact-us" passHref>
                  <a className="med-btn med-btn--dark">{t.ctaBtn}</a>
                </Link>
                <Link href="/it-solution" passHref>
                  <a className="med-btn med-btn--ghost-dark">{t.ctaAlt}</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer footerGradient translations={footerT} />

      <style jsx>{`
        .med {
          --accent: ${theme.accent};
          --accent2: ${theme.accent2};
          --ink: ${theme.ink};
          color: var(--ink);
          background: #fff;
          font-family: "Manrope", sans-serif;
        }
        .med-hero {
          padding: 110px 0 70px;
          background: radial-gradient(980px 420px at 15% 10%, rgba(77, 200, 196, 0.22), transparent 60%),
            radial-gradient(900px 420px at 85% 20%, rgba(30, 42, 74, 0.06), transparent 58%),
            linear-gradient(180deg, #ffffff 0%, #ffffff 60%, rgba(245, 255, 254, 0.72) 100%);
          border-bottom: 1px solid rgba(18, 23, 39, 0.06);
        }
        .med-tag {
          display: inline-flex;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(18, 23, 39, 0.65);
          background: rgba(77, 200, 196, 0.12);
          border: 1px solid rgba(77, 200, 196, 0.22);
          margin-bottom: 18px;
          width: fit-content;
        }
        .med-title {
          font-size: clamp(2.05rem, 4.5vw, 3.7rem);
          font-weight: 900;
          line-height: 1.12;
          margin: 0 0 18px;
          letter-spacing: -0.02em;
        }
        .med-title__accent {
          background: linear-gradient(120deg, var(--accent) 0%, var(--accent2) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .med-sub {
          color: rgba(18, 23, 39, 0.72);
          font-size: 1.06rem;
          line-height: 1.75;
          max-width: 560px;
          margin: 0 0 22px;
        }
        .med-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
        }
        .med-btn {
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
        .med-btn--primary {
          background: linear-gradient(120deg, var(--accent) 0%, #1aa8a1 100%);
          color: #fff;
          box-shadow: 0 16px 34px rgba(77, 200, 196, 0.22);
        }
        .med-btn--primary:hover {
          transform: translateY(-2px);
          color: #fff;
          box-shadow: 0 18px 42px rgba(77, 200, 196, 0.28);
        }
        .med-btn--ghost {
          background: rgba(255, 255, 255, 0.55);
          color: var(--ink);
          border-color: rgba(18, 23, 39, 0.12);
          backdrop-filter: blur(10px);
        }
        .med-btn--ghost:hover {
          transform: translateY(-2px);
          color: var(--ink);
          border-color: rgba(18, 23, 39, 0.18);
        }
        .med-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          max-width: 560px;
        }
        .med-stat {
          border-radius: 16px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 10px 30px rgba(18, 23, 39, 0.06);
        }
        .med-stat__v {
          font-weight: 900;
          font-size: 1.25rem;
          margin-bottom: 2px;
          letter-spacing: -0.02em;
        }
        .med-stat__l {
          font-size: 0.86rem;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.35;
        }

        .med-visual {
          position: relative;
          padding: 10px 0 14px;
        }
        .med-visual__frame {
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 34px 70px rgba(18, 23, 39, 0.12);
          background: #fff;
        }
        .med-visual__frame img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
        }
        .med-visual__glass {
          position: absolute;
          inset: 16px;
          border-radius: 22px;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(77, 200, 196, 0.18);
          opacity: 0.9;
        }

        .med-section {
          padding: 74px 0;
        }
        .med-section--soft {
          background: linear-gradient(180deg, rgba(245, 255, 254, 0.95) 0%, rgba(245, 255, 254, 0.55) 100%);
          border-top: 1px solid rgba(18, 23, 39, 0.06);
          border-bottom: 1px solid rgba(18, 23, 39, 0.06);
        }
        .med-head {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 34px;
        }
        .med-head--left {
          text-align: left;
          margin: 0 0 22px;
          max-width: 520px;
        }
        .med-head h2 {
          font-size: clamp(1.65rem, 2.8vw, 2.35rem);
          font-weight: 900;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .med-head p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
          font-size: 1.02rem;
        }
        .med-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        @media (max-width: 991px) {
          .med-grid {
            grid-template-columns: 1fr;
          }
          .med-stats {
            grid-template-columns: 1fr;
          }
          .med-visual__frame img {
            height: 360px;
          }
          .med-hero {
            padding: 100px 0 54px;
          }
        }
        .med-card {
          border-radius: 22px;
          background: #fff;
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 18px 46px rgba(18, 23, 39, 0.08);
          padding: 18px 18px 16px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .med-card__top {
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(90deg, rgba(77, 200, 196, 0.95), rgba(30, 42, 74, 0.25));
        }
        .med-card:hover {
          transform: translateY(-6px);
          border-color: rgba(77, 200, 196, 0.26);
          box-shadow: 0 26px 70px rgba(18, 23, 39, 0.10);
        }
        .med-card h3 {
          font-size: 1.06rem;
          font-weight: 900;
          margin: 10px 0 8px;
          letter-spacing: -0.01em;
        }
        .med-card p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
          font-size: 0.98rem;
        }
        .med-proof {
          margin-top: 18px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(18, 23, 39, 0.10);
          padding: 18px 18px;
          box-shadow: 0 18px 50px rgba(18, 23, 39, 0.08);
        }
        .med-proof__title {
          font-weight: 900;
          font-size: 1.05rem;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .med-proof__desc {
          color: rgba(18, 23, 39, 0.70);
          line-height: 1.65;
          margin-bottom: 12px;
        }
        .med-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }
        .med-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          color: rgba(18, 23, 39, 0.78);
          line-height: 1.55;
        }
        .med-list__icon {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 0 5px rgba(77, 200, 196, 0.12);
          margin-top: 7px;
          flex-shrink: 0;
        }
        .med-flow {
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(18, 23, 39, 0.10);
          box-shadow: 0 24px 70px rgba(18, 23, 39, 0.10);
          padding: 18px 16px;
          position: relative;
        }
        .med-flow__row {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 14px;
          padding: 14px 10px 18px;
          position: relative;
        }
        .med-flow__n {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          background: linear-gradient(135deg, rgba(77, 200, 196, 0.95), rgba(167, 240, 234, 0.88));
          color: rgba(18, 23, 39, 0.92);
          box-shadow: 0 14px 34px rgba(77, 200, 196, 0.18);
        }
        .med-flow__body h3 {
          margin: 2px 0 6px;
          font-weight: 900;
          font-size: 1.05rem;
        }
        .med-flow__body p {
          margin: 0;
          color: rgba(18, 23, 39, 0.68);
          line-height: 1.65;
        }
        .med-flow__line {
          position: absolute;
          left: 36px;
          top: 64px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, rgba(77, 200, 196, 0.36), rgba(77, 200, 196, 0));
        }

        .med-cta {
          padding: 62px 0 86px;
          background: #fff;
        }
        .med-cta__inner {
          border-radius: 28px;
          background: radial-gradient(900px 420px at 20% 20%, rgba(77, 200, 196, 0.26), transparent 55%),
            radial-gradient(900px 420px at 80% 15%, rgba(30, 42, 74, 0.08), transparent 55%),
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
        .med-cta__inner h2 {
          color: #fff;
          font-weight: 900;
          margin: 0 0 8px;
          font-size: clamp(1.55rem, 2.5vw, 2.1rem);
          letter-spacing: -0.02em;
        }
        .med-cta__inner p {
          margin: 0;
          color: rgba(255, 255, 255, 0.80);
          line-height: 1.65;
          max-width: 560px;
        }
        .med-cta__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .med-btn--dark {
          background: linear-gradient(120deg, var(--accent) 0%, #1aa8a1 100%);
          color: #fff;
          box-shadow: 0 18px 46px rgba(77, 200, 196, 0.22);
        }
        .med-btn--dark:hover {
          transform: translateY(-2px);
          color: #fff;
        }
        .med-btn--ghost-dark {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
        }
        .med-btn--ghost-dark:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.26);
          color: rgba(255, 255, 255, 0.96);
        }
      `}</style>
    </Layout>
  );
};

export default SolutionSante;

