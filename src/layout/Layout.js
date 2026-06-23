import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://www.rfidia.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/a_rfidia/z_rfid/logo-RFIDIA-final.png`;

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RFIDIA",
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description:
    "RFIDIA, leader tunisien des solutions de traçabilité intelligente : RFID, IoT, codes-barres et systèmes embarqués.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Africa Mall Avenue Mustapha Hjeij Ariana 1002",
    addressLocality: "Ariana",
    addressCountry: "TN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+216-94-103-351",
    contactType: "customer service",
    email: "contact@rfidia.com",
  },
  sameAs: [],
};

const Layout = ({ children, title, desc, hasClass, classOpt, ogImage }) => {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.asPath.split("?")[0].split("#")[0]}`;
  const pageTitle = title ? title : "RFIDIA";
  const pageDesc =
    desc ||
    "RFIDIA, leader tunisien des solutions de traçabilité intelligente : RFID, IoT, codes-barres et systèmes embarqués.";

  return (
    <div
      className={`main-wrapper ${
        hasClass ? "overflow-hidden" : ""
      } ${classOpt}`}
    >
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/a_rfidia/z_rfid/logo-RFIDIA2.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
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
      </Head>

      {children}
    </div>
  );
};

export default Layout;
