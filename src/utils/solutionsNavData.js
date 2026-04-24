/**
 * Solutions sectorielles — navigation (navbar / pages).
 * Les entrées sans slug redirigent vers la page contact jusqu'à publication des pages dédiées.
 */

const NAV_BASE = [
  {
    slug: "solution-ecole",
    image: "/a_rfidia/z_school/school.png",
    accent: "#f59e0b",
  },
  {
    slug: "solution-entrepot",
    image: "/a_rfidia/z_logistique/z_logistique.png",
    accent: "#2563eb",
  },
  {
    slug: "solution-textile",
    image: "/a_rfidia/z_rfid/rfid6.png",
    accent: "#0ea5e9",
  },
  {
    slug: "solution-hotellerie",
    image: "/a_rfidia/z_rfid/rfid14.png",
    accent: "#6366f1",
  },
  {
    slug: null,
    image: "/a_rfidia/z_rfid/z_assets.png",
    accent: "#10b981",
  },
  {
    slug: null,
    image: "/a_rfidia/z_medical/z_medical3.png",
    accent: "#a855f7",
  },
];

const COPY = {
  fr: [
    {
      title: "Solution École",
      description: "Sécurisez les parcours et suivez intelligemment les actifs pédagogiques.",
    },
    {
      title: "Système Entrepôt",
      description: "Inventaire en temps réel et pilotage des flux pour une logistique performante.",
    },
    {
      title: "Textile",
      description: "Traçabilité de bout en bout des vêtements, de la production à la vente.",
    },
    {
      title: "Hôtellerie",
      description: "Opérations intelligentes et excellence de service pour l'hôtellerie.",
    },
    {
      title: "Gestion des Actifs",
      description: "Suivi de précision de vos équipements critiques et réduction des pertes.",
    },
    {
      title: "Santé",
      description: "Cas d'usage médicaux avec traçabilité et sécurisation des stocks sensibles.",
    },
  ],
  en: [
    {
      title: "School Solution",
      description: "Secure student journeys and track educational assets intelligently.",
    },
    {
      title: "Warehouse System",
      description: "Real-time inventory and flow control for modern logistics operations.",
    },
    {
      title: "Textile",
      description: "End-to-end garment traceability from production to retail.",
    },
    {
      title: "Hospitality",
      description: "Smart operations and service excellence for hospitality businesses.",
    },
    {
      title: "Asset Management",
      description: "Precision tracking of critical equipment and loss reduction.",
    },
    {
      title: "Healthcare",
      description: "Medical use cases with traceability and protection of sensitive inventories.",
    },
  ],
  it: [
    {
      title: "Soluzione Scuola",
      description: "Proteggi i percorsi degli studenti e traccia in modo intelligente gli asset educativi.",
    },
    {
      title: "Sistema Magazzino",
      description: "Inventario in tempo reale e gestione dei flussi per una logistica moderna.",
    },
    {
      title: "Tessile",
      description: "Tracciabilità end-to-end dei capi dalla produzione alla vendita.",
    },
    {
      title: "Ospitalità",
      description: "Operazioni intelligenti ed eccellenza del servizio nel settore hospitality.",
    },
    {
      title: "Gestione Asset",
      description: "Tracciamento di precisione delle attrezzature critiche e riduzione delle perdite.",
    },
    {
      title: "Sanità",
      description: "Casi d'uso medicali con tracciabilità e protezione delle scorte sensibili.",
    },
  ],
};

export function getSolutionsNavItems(lang) {
  const key = ["fr", "en", "it"].includes(lang) ? lang : "fr";
  const texts = COPY[key] || COPY.fr;

  return NAV_BASE.map((base, idx) => {
    const t = texts[idx] || COPY.fr[idx];
    const href = base.slug ? `/it-solution/${base.slug}` : "/contact-us";
    return {
      ...base,
      ...t,
      href,
    };
  });
}
