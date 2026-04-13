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
    title: "Gestion des Actifs",
    description: "Pilotage intelligent de vos actifs avec localisation, inventaire automatisé et réduction des pertes opérationnelles.",
    image: "/a_rfidia/z_rfid/rfid11.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="sol-icon">
        <path d="M5 3v18M19 3v18M3 9h18M3 15h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    accent: "#0ea5e9",
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
    name: "Responsable Chaîne Logistique",
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
      title="RFIDIA"
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
                    src="/a_rfidia/z_rfid/rfid7.png"
                    alt="Technologie RFID en entreprise"
                    className="rl-hero__img"
                  />
                  <div className="rl-hero__float rl-hero__float--tl">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Traçabilité temps réel</span>
                  </div>
                  <div className="rl-hero__float rl-hero__float--br">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#0ea5e9" strokeWidth="2" />
                      <path d="M12 6v6l4 2" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>Déploiement rapide</span>
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
      <h2>À propos</h2>
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
            Là où les services IT rencontrent l'
            <span className="rl-gradient-text">innovation</span>
          </h2>
          <p>
            RFIDIA accompagne les entreprises dans leur transformation digitale grâce à
            des solutions RFID, IoT et logicielles fiables, évolutives et orientées
            résultats.
          </p>
          <p>
            Notre équipe combine expertise métier, intégration système et accompagnement
            opérationnel pour transformer vos processus en avantages compétitifs durables.
          </p>

          <div className="rl-about-actions rl-about-actions--inline">
            <Link href="/about-us" passHref>
              <a className="rl-btn rl-btn--primary">En savoir plus</a>
            </Link>
            <Link href="/contact-us" passHref>
              <a className="rl-btn rl-btn--outline-dark">Parlons de votre projet</a>
            </Link>
          </div>

          <div className="rl-about-points">
            <div className="rl-about-point">
              <h4>Intégration fluide</h4>
              <p>Connexion native avec ERP, WMS et outils existants.</p>
            </div>
            <div className="rl-about-point">
              <h4>Visibilité temps réel</h4>
              <p>Suivi des actifs, audits et indicateurs décisionnels instantanés.</p>
            </div>
            <div className="rl-about-point">
              <h4>Support dédié</h4>
              <p>Accompagnement continu, maintenance proactive et montée en compétence.</p>
            </div>
            <div className="rl-about-point">
              <h4>Scalabilité</h4>
              <p>Architecture pensée pour accompagner votre croissance future.</p>
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
              <h2>Nos Solutions Clés</h2>
              <p>
                Quatre solutions stratégiques pour renforcer votre performance : identification,
                gestion des actifs, visibilité temps réel et contrôle d'accès.
              </p>
            </div>

            <div className="row g-4">
              {solutions.map((item) => (
                <div className="col-md-6 col-xl-6" key={item.title}>
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

        {/* ── SERVICES ── */}
        <section className="rl-section rl-services">
          <div className="container">
            <div className="rl-section-head">
              <SectionDivider />
              <h2>Nos Services de Virtualisation</h2>
              <p>
                De l'évaluation à la maintenance, nous optimisons votre infrastructure IT avec une
                approche fiable et évolutive.
              </p>
            </div>
            <div className="row g-4">
              {virtualizationServices.map((item) => (
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
                          Étape {item.num}
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
              <h2>Secteurs & Cas d'Usage</h2>
              <p>Découvrez comment nos solutions s'adaptent à vos processus métiers.</p>
            </div>
            <div className="rl-case-stack">
              {sectors.map((item, idx) => (
                <article
                  className={`rl-case-card${idx % 2 === 1 ? " rl-case-card--reverse" : ""}`}
                  key={item.id}
                  style={{ "--case-index": idx }}
                >
                  <div className="rl-case-card__body">
                    <span className="rl-case-card__overline">Cas d'usage {item.id}</span>
                    <h3>{item.title}</h3>
                    <div className="rl-case-card__chips">
                      <span>{item.tag}</span>
                      <span>Solutions RFIDIA</span>
                    </div>
                    <p>{item.description}</p>
                    <br />
                    <br />
                    <br />
                    <div className="rl-case-card__action-btn">
                      <Link href="/contact-us" passHref>
                        <a className="rl-btn rl-btn--primary" style={{ borderRadius: "8px", fontSize: "0.95rem" }}>Découvrir</a>
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

         {/* ── PARTNERS BAR ── */}
        <section className="rl-partners">
          <div className="container">
            <div className="rl-partners__head">
              <SectionDivider />
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

        {/* ── FAQ ── */}
        <section className="rl-section rl-faq">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-4 text-center">
                <SectionDivider />
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
      </main>

      <Footer footerGradient />
    </Layout>
  );
};

export default ItSolution;
