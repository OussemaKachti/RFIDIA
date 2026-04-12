import React, { useState } from "react";
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
    title: "RFID",
    description:
      "Identification automatique longue portée pour le suivi temps réel des actifs, équipements et flux.",
    image: "/a_rfidia/z_rfid/rfid19.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="sol-icon">
        <rect x="2" y="7" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 12h10M12 9v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    accent: "#2563eb",
  },
  {
    title: "IoT Industriel",
    description:
      "Capteurs et connectivité pour monitorer vos opérations, anticiper les incidents et améliorer la performance.",
    image: "/a_rfidia/z_rfid/rfid20.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="sol-icon">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14M19.07 4.93a10 10 0 0 1 0 14.14M7.76 7.76a6 6 0 0 0 0 8.49M16.24 7.76a6 6 0 0 1 0 8.49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    accent: "#0ea5e9",
  },
  {
    title: "Codes-Barres",
    description:
      "Solutions robustes de lecture, impression et mobilité pour les environnements logistiques exigeants.",
    image: "/a_rfidia/z_rfid/rfid8.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="sol-icon">
        <path d="M3 5v14M7 5v14M11 5v14M13 5v14M17 5v14M21 5v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    accent: "#7c3aed",
  },
  {
    title: "Systèmes Embarqués",
    description:
      "Conception d'outils sur mesure adaptés à vos processus métiers et à vos contraintes terrain.",
    image: "/a_rfidia/z_rfid/Gemini_Generated_Image_vi02j7vi02j7vi02.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="sol-icon">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="7.5" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    accent: "#059669",
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
    title: "Supply Chain & Logistique",
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
    image: "/a_rfidia/z_medical/z_medical.png",
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

const services = [
  {
    num: "01",
    title: "Audit de vos processus",
    desc: "Analyse complète de vos flux et cadrage technique pour identifier les leviers d'amélioration.",
    image: "/a_rfidia/z_rfid/z_assets.png",
  },
  {
    num: "02",
    title: "Intégration matérielle & logicielle",
    desc: "Déploiement de lecteurs, tags, capteurs et interfaçage avec vos systèmes existants.",
    image: "/a_rfidia/z_rfid/Gemini_Generated_Image_rtupeartupeartup.png",
  },
  {
    num: "03",
    title: "Développement sur mesure",
    desc: "Applications métiers, tableaux de bord et connecteurs développés selon vos exigences spécifiques.",
    image: "/a_rfidia/z_rfid/rfid10.png",
  },
  {
    num: "04",
    title: "Formation & support continu",
    desc: "Montée en compétence de vos équipes, maintenance proactive et accompagnement post-déploiement.",
    image: "/a_rfidia/z_rfid/rfid2.png",
  },
];

const partners = [
  { name: "Confidoo", logo: "/a_rfidia/z_rfid/confidoo.png", tagline: "Plateforme de confiance numérique" },
  { name: "Tagstream", logo: "/a_rfidia/z_rfid/tagstream.png", tagline: "Suivi des actifs en temps réel" },
  { name: "Visus Groupe", logo: "/a_rfidia/z_rfid/visus.png", tagline: "Solutions de traçabilité avancées" },
];

const testimonials = [
  {
    quote:
      "RFIDIA nous accompagne depuis plus de trois ans. Leur approche sur mesure s'est parfaitement intégrée à notre environnement industriel.",
    name: "Responsable Opérations",
    company: "Secteur Logistique",
    initials: "RO",
  },
  {
    quote:
      "L'équipe a su comprendre nos contraintes industrielles et livrer une solution fiable, rapide à déployer et simple à exploiter.",
    name: "Directeur Technique",
    company: "Industrie Manufacturière",
    initials: "DT",
  },
  {
    quote:
      "Les résultats sont immédiats : meilleure visibilité sur les stocks, moins d'erreurs et une traçabilité complète sur toute la chaîne.",
    name: "Responsable Supply Chain",
    company: "Distribution",
    initials: "RS",
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

const ItSolution = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  return (
    <Layout
      title="RFIDIA — Solutions RFID & IoT pour l'entreprise"
      desc="RFIDIA, leader tunisien en solutions de traçabilité intelligente: RFID, IoT, codes-barres et systèmes embarqués."
    >
      <Navbar />

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
                  Solutions de Traçabilité Intelligente
                </span>
                <h1 className="rl-hero__title">
                  Technologie <span className="rl-gradient-text">RFID & IoT</span><br />
                  pour votre entreprise
                </h1>
                <p className="rl-hero__sub">
                  RFIDIA accompagne les entreprises dans leur transformation digitale avec des
                  solutions fiables, évolutives et adaptées à la réalité terrain.
                </p>
                <div className="rl-hero__actions">
                  <Link href="/contact-us" passHref>
                    <a className="rl-btn rl-btn--primary">
                      Découvrir nos solutions
                      <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </Link>
                  <Link href="/contact-us" passHref>
                    <a className="rl-btn rl-btn--ghost">Nous contacter</a>
                  </Link>
                </div>
                <div className="rl-hero__chips">
                  {stats.map((s) => (
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
                    src="/a_rfidia/z_rfid/rfid.png"
                    alt="Technologie RFID en entreprise"
                    className="rl-hero__img"
                  />
                  <div className="rl-hero__float rl-hero__float--tl">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Traçabilité temps réel</span>
                  </div>
                  <div className="rl-hero__float rl-hero__float--br">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#0ea5e9" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>Déploiement rapide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNERS BAR ── */}
        <section className="rl-partners">
          <div className="container">
            <div className="rl-partners__head">
              <span className="rl-eyebrow">Partenaires technologiques</span>
              <h2 className="rl-partners__title">Ils nous font confiance</h2>
              <p className="rl-partners__sub">
                RFIDIA collabore avec des acteurs reconnus pour vous garantir des solutions
                technologiques de premier plan.
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

        {/* ── SOLUTIONS ── */}
        <section className="rl-section">
          <div className="container">
            <div className="rl-section-head">
              <span className="rl-eyebrow">Notre offre technologique</span>
              <h2>Nos Solutions</h2>
              <p>
                RFIDIA commercialise des lecteurs, des tags et conçoit des solutions innovantes
                destinées aux marchés de la sécurité et de la traçabilité.
              </p>
            </div>

            <div className="row g-4">
              {solutions.map((item) => (
                <div className="col-md-6 col-xl-3" key={item.title}>
                  <article className="rl-sol-card">
                    <div className="rl-sol-card__header">
                      <div className="rl-sol-card__img-wrap">
                        <img src={item.image} alt={item.title} className="rl-sol-card__img" />
                        <div className="rl-sol-card__overlay" />
                      </div>
                      <div className="rl-sol-card__icon" style={{ "--accent": item.accent }}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="rl-sol-card__body">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      
                      <div className="rl-sol-card__action">
                        <span>Découvrir</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="rl-section rl-about">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <div className="rl-img-frame">
                  <img
                    src="/a_rfidia/z_rfid/rfid17.png"
                    alt="RFIDIA expertise RFID et IoT"
                    className="rl-img-frame__img"
                  />
                  <div className="rl-img-frame__badge">
                    <strong>10+</strong>
                    <span>ans d'expertise</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <span className="rl-eyebrow">À propos de RFIDIA</span>
                <h2>Leader tunisien des solutions RFID et IoT</h2>
                <p>
                  RFIDIA est une entreprise tunisienne spécialisée dans les solutions de
                  traçabilité intelligente. Notre mission est de fournir des réponses concrètes
                  aux enjeux de performance, de sécurité et de visibilité opérationnelle.
                </p>
                <ul className="rl-checklist">
                  <li>Approche conseil orientée résultats</li>
                  <li>Déploiements adaptés à chaque secteur</li>
                  <li>Accompagnement de bout en bout</li>
                  <li>Support et maintenance proactive</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTORS ── */}
        <section className="rl-section">
          <div className="container">
            <div className="rl-section-head">
              <span className="rl-eyebrow">Expertises sectorielles</span>
              <h2>Secteurs & Cas d'Usage</h2>
              <p>Découvrez comment nos solutions s'adaptent à vos processus métiers.</p>
            </div>
            <div className="row g-4">
              {sectors.map((item) => (
                <div className="col-md-6" key={item.id}>
                  <article className="rl-sector-card">
                    <div className="rl-sector-card__img-wrap">
                      <img src={item.image} alt={item.title} className="rl-sector-card__img" />
                    </div>
                    <div className="rl-sector-card__content">
                      <span className="rl-sector-card__tag">{item.tag}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="rl-sector-card__num">{item.id}</div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="rl-section rl-services">
          <div className="container">
            <div className="rl-section-head">
              <span className="rl-eyebrow">Notre méthodologie</span>
              <h2>Des services pour accélérer votre réussite</h2>
              <p>
                Nous combinons expertise technique et accompagnement opérationnel pour déployer
                des solutions performantes et durables.
              </p>
            </div>
            <div className="rl-services-list">
              {services.map((item, idx) => (
                <div className={`rl-service-row ${idx % 2 !== 0 ? "rl-service-row--reverse" : ""}`} key={item.num}>
                  <div className="rl-service-row__visual">
                    <div className="rl-service-row__img-frame">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <div className="rl-service-row__content">
                    <span className="rl-service-row__num">{item.num}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <div className="rl-service-row__action">
                      <span>Découvrir</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="rl-section rl-testi">
          <div className="container">
            <div className="rl-section-head">
              <span className="rl-eyebrow">Ce qu'ils disent</span>
              <h2>Témoignages clients</h2>
              <p>Ils nous font confiance pour leurs projets de traçabilité et d'automatisation.</p>
            </div>
            <div className="row g-4">
              {testimonials.map((item) => (
                <div className="col-lg-4" key={item.name}>
                  <blockquote className="rl-testi-card">
                    <div className="rl-testi-card__quote">"</div>
                    <p>{item.quote}</p>
                    <footer className="rl-testi-card__footer">
                      <div className="rl-testi-card__avatar">{item.initials}</div>
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

        {/* ── FAQ ── */}
        <section className="rl-section rl-faq">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-4">
                <span className="rl-eyebrow">Support</span>
                <h2>Questions fréquentes</h2>
                <p>Besoin de plus d'info sur nos solutions RFID et IoT ?</p>
                <Link href="/contact-us" passHref>
                  <a className="rl-btn rl-btn--primary mt-3">Contactez-nous</a>
                </Link>
              </div>
              <div className="col-lg-8">
                {faqs.map((item, idx) => (
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

        {/* ── CTA ── */}
        <section className="rl-cta">
          <div className="container">
            <div className="rl-cta-inner">
              <div className="rl-cta__glow" aria-hidden />
              <span className="rl-badge rl-badge--light">Prêt à démarrer ?</span>
              <h2>Votre partenaire de confiance en traçabilité industrielle</h2>
              <p>
                Discutons de votre besoin et construisons ensemble une solution adaptée à votre
                activité.
              </p>
              <div className="rl-cta__actions">
                <Link href="/contact-us" passHref>
                  <a className="rl-btn rl-btn--white">
                    Demander une consultation
                    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </Link>
                <Link href="/contact-us" passHref>
                  <a className="rl-btn rl-btn--ghost-white">En savoir plus</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer footerGradient />
    </Layout>
  );
};

export default ItSolution;
