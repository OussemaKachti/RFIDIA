import React from "react";
import Head from "next/head";
import Link from "next/link";
import { SEO_LOCAL, SOLUTION_LINKS } from "../../data/seoLocal";

const SITE_URL = "https://www.rfidia.com";

/*
 * Local-SEO content block shared by the homepage, the services page and every
 * solution page: an in-depth "RFID en Tunisie" section, links to related
 * solutions (internal linking), an FAQ and the matching JSON-LD (Service +
 * FAQPage).
 *
 * The copy is French only — French is what crawlers get on first load — so
 * pages render this block only while the French version is displayed; the
 * structured data then always matches the visible content.
 *
 * Props:
 *   slug   = key in SEO_LOCAL (e.g. "solution-sante", "home", "services")
 *   accent = accent color of the host page (hex)
 */
const SolutionSeoSection = ({ slug, accent = "#4DC8C4" }) => {
  const data = SEO_LOCAL[slug];
  if (!data) return null;

  const faq = data.faq || [];
  const related = (data.related || []).map((s) => SOLUTION_LINKS[s]).filter(Boolean);

  const faqJsonLd =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const serviceJsonLd = data.service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.service.name,
        serviceType: data.service.type,
        description: data.service.description,
        url: `${SITE_URL}${data.path}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Tunisie" },
      }
    : null;

  return (
    <>
      <Head>
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
        {serviceJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
          />
        )}
      </Head>

      <section className="seo-local" style={{ "--seo-accent": accent }}>
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-8">
              {data.eyebrow && <span className="seo-local__eyebrow">{data.eyebrow}</span>}
              <h2 className="seo-local__title">{data.title}</h2>
              {data.intro.map((p) => (
                <p className="seo-local__p" key={p.slice(0, 40)}>
                  {p}
                </p>
              ))}

              {data.points && data.points.length > 0 && (
                <div className="seo-local__points">
                  {data.points.map((pt) => (
                    <div className="seo-local__point" key={pt.t}>
                      <h3>{pt.t}</h3>
                      <p>{pt.d}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <aside className="col-lg-4">
              <div className="seo-local__card">
                <div className="seo-local__card-title">RFIDIA en chiffres</div>
                <ul className="seo-local__stats">
                  <li><strong>500+</strong><span>projets RFID &amp; IoT déployés</span></li>
                  <li><strong>10+</strong><span>années d&apos;expérience</span></li>
                  <li><strong>98%</strong><span>de satisfaction client</span></li>
                  <li><strong>15+</strong><span>secteurs couverts en Tunisie et à l&apos;international</span></li>
                </ul>
                <Link href="/contact-us" passHref>
                  <a className="seo-local__btn">{data.cta || "Demander un audit RFID"}</a>
                </Link>
              </div>

              {related.length > 0 && (
                <nav className="seo-local__card seo-local__card--links" aria-label="Solutions RFID associées">
                  <div className="seo-local__card-title">Solutions RFID associées</div>
                  <ul className="seo-local__links">
                    {related.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} passHref>
                          <a>{l.label}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </aside>
          </div>

          {faq.length > 0 && (
            <div className="seo-local__faq">
              <h2 className="seo-local__title seo-local__title--center">
                {data.faqTitle || "Questions fréquentes"}
              </h2>
              <div className="seo-local__faq-list">
                {faq.map((f) => (
                  <details className="seo-local__faq-item" key={f.q}>
                    <summary>
                      <h3>{f.q}</h3>
                      <span className="seo-local__faq-icon" aria-hidden>+</span>
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .seo-local {
          padding: 80px 0;
          background: linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%);
          border-top: 1px solid rgba(18, 23, 39, 0.06);
          color: #121727;
          font-family: "Manrope", sans-serif;
        }
        .seo-local__eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--seo-accent);
          margin-bottom: 12px;
        }
        .seo-local__title {
          font-size: clamp(1.55rem, 2.6vw, 2.2rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 18px;
          color: #121727;
        }
        .seo-local__title--center {
          text-align: center;
          margin-bottom: 26px;
        }
        .seo-local__p {
          color: rgba(18, 23, 39, 0.74);
          line-height: 1.8;
          font-size: 1.02rem;
          margin: 0 0 16px;
        }
        .seo-local__points {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 26px;
        }
        @media (max-width: 767px) {
          .seo-local__points { grid-template-columns: 1fr; }
          .seo-local { padding: 56px 0; }
        }
        .seo-local__point {
          background: #fff;
          border: 1px solid rgba(18, 23, 39, 0.09);
          border-left: 3px solid var(--seo-accent);
          border-radius: 14px;
          padding: 18px 18px 16px;
        }
        .seo-local__point h3 {
          font-size: 1.02rem;
          font-weight: 800;
          margin: 0 0 6px;
          color: #121727;
        }
        .seo-local__point p {
          margin: 0;
          font-size: 0.94rem;
          line-height: 1.65;
          color: rgba(18, 23, 39, 0.7);
        }
        .seo-local__card {
          background: #121727;
          color: #fff;
          border-radius: 20px;
          padding: 24px 22px;
          box-shadow: 0 20px 50px rgba(18, 23, 39, 0.14);
          margin-bottom: 18px;
        }
        .seo-local__card--links {
          background: #fff;
          color: #121727;
          border: 1px solid rgba(18, 23, 39, 0.1);
          box-shadow: 0 14px 40px rgba(18, 23, 39, 0.06);
        }
        .seo-local__card-title {
          font-weight: 800;
          font-size: 1rem;
          margin-bottom: 14px;
        }
        .seo-local__stats {
          list-style: none;
          padding: 0;
          margin: 0 0 18px;
          display: grid;
          gap: 10px;
        }
        .seo-local__stats li {
          display: flex;
          align-items: baseline;
          gap: 10px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.75);
        }
        .seo-local__stats strong {
          min-width: 56px;
          font-size: 1.2rem;
          font-weight: 900;
          color: var(--seo-accent);
        }
        .seo-local__btn {
          display: block;
          text-align: center;
          padding: 12px 16px;
          border-radius: 12px;
          font-weight: 800;
          background: var(--seo-accent);
          color: #fff;
          text-decoration: none;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .seo-local__btn:hover {
          color: #fff;
          transform: translateY(-2px);
          opacity: 0.92;
        }
        .seo-local__links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 8px;
        }
        .seo-local__links a {
          display: block;
          padding: 9px 12px;
          border-radius: 10px;
          background: rgba(18, 23, 39, 0.04);
          color: #121727;
          font-weight: 600;
          font-size: 0.92rem;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .seo-local__links a:hover {
          background: rgba(18, 23, 39, 0.08);
          color: var(--seo-accent);
        }
        .seo-local__faq {
          margin-top: 64px;
          max-width: 880px;
          margin-left: auto;
          margin-right: auto;
        }
        .seo-local__faq-list {
          display: grid;
          gap: 12px;
        }
        .seo-local__faq-item {
          background: #fff;
          border: 1px solid rgba(18, 23, 39, 0.1);
          border-radius: 14px;
          padding: 0 20px;
        }
        .seo-local__faq-item[open] {
          border-color: var(--seo-accent);
        }
        .seo-local__faq-item summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 0;
        }
        .seo-local__faq-item summary::-webkit-details-marker {
          display: none;
        }
        .seo-local__faq-item summary h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: 800;
          line-height: 1.4;
          color: #121727;
        }
        .seo-local__faq-icon {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: var(--seo-accent);
          background: rgba(18, 23, 39, 0.05);
          transition: transform 0.2s ease;
        }
        .seo-local__faq-item[open] .seo-local__faq-icon {
          transform: rotate(45deg);
        }
        .seo-local__faq-item p {
          margin: 0 0 18px;
          color: rgba(18, 23, 39, 0.72);
          line-height: 1.75;
        }
      `}</style>
    </>
  );
};

export default SolutionSeoSection;
