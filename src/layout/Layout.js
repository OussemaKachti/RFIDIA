import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://www.rfidia.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/a_rfidia/z_rfid/logo-RFIDIA-final.png`;

// Kept in sync with the Google Business Profile (name, address, phone, hours, rating).
// If any of these values change on Google Business Profile, update them here too.
const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "RFIDIA",
  alternateName: "RFIDIA Technology",
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  image: DEFAULT_OG_IMAGE,
  description:
    "RFIDIA, fournisseur et intégrateur RFID en Tunisie : solutions de traçabilité intelligente RFID, IoT, codes-barres et systèmes embarqués pour les entreprises.",
  knowsAbout: [
    "RFID",
    "RFID UHF",
    "NFC",
    "IoT",
    "Traçabilité",
    "Inventaire RFID",
    "Étiquettes RFID",
    "Lecteurs RFID",
    "Gestion des actifs",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Africa Mall, Avenue Mostapha Hjaij",
    addressLocality: "Ariana",
    postalCode: "1002",
    addressCountry: "TN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.857962,
    longitude: 10.1843812,
  },
  telephone: "+216-71-705-535",
  contactPoint: ["+216-71-705-535", "+216-94-098-875", "+216-94-103-351"].map(
    (telephone) => ({
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      email: "contact@rfidia.com",
      areaServed: ["TN", "LY", "MA", "FR", "IT", "ES", "DZ"],
      availableLanguage: ["French", "English", "Italian", "Arabic"],
    })
  ),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:30",
    },
  ],
  areaServed: [
    "Tunisie",
    "Libye",
    "Maroc",
    "France",
    "Italie",
    "Espagne",
    "Algérie",
    "Afrique de l'Ouest",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61569189391534",
    "https://www.linkedin.com/in/rfidtunisie/",
    "https://www.youtube.com/@rfidiai",
  ],
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "RFIDIA",
  alternateName: "RFIDIA Technology",
  url: SITE_URL,
  inLanguage: "fr-TN",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// `canonicalPath`: forces the canonical URL when the same content is reachable
// under several routes (e.g. the homepage component also served at /it-solution).
const Layout = ({ children, title, desc, hasClass, classOpt, ogImage, noindex, breadcrumbs, canonicalPath }) => {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${canonicalPath || router.asPath.split("?")[0].split("#")[0]}`;
  const pageTitle = title ? title : "RFIDIA";
  const pageDesc =
    desc ||
    "RFIDIA, fournisseur et intégrateur RFID en Tunisie : solutions de traçabilité RFID, IoT, codes-barres et systèmes embarqués pour les entreprises.";

  // `breadcrumbs`: ordered array of { name, path } describing the trail to this
  // page (e.g. [{ name: "Accueil", path: "/" }, { name: "Retail" }]). `path` can be
  // omitted on the last entry — it then falls back to the current URL, so callers don't need to know their own route. Optional — only pages
  // with a real hierarchy below the homepage need it.
  const breadcrumbJsonLd =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.path ? `${SITE_URL}${crumb.path}` : canonicalUrl,
          })),
        }
      : null;

  return (
    <div
      className={`main-wrapper ${
        hasClass ? "overflow-hidden" : ""
      } ${classOpt}`}
    >
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        {noindex && <meta name="robots" content="noindex, nofollow" />}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/a_rfidia/z_rfid/logo-RFIDIA2.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_TN" />
        <meta property="og:site_name" content="RFIDIA" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage || DEFAULT_OG_IMAGE} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={ogImage || DEFAULT_OG_IMAGE} />

        {/* Structured data — helps Google show RFIDIA as a recognized organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />

        {/* Breadcrumb structured data — helps Google show the page's position in the site (rich snippet) */}
        {breadcrumbJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          />
        )}
      </Head>

      {children}
    </div>
  );
};

export default Layout;
