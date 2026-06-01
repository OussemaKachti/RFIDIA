/**
 * RFIDIA — Solutions catalog (navbar mega-menu + Solutions page).
 *
 * Exact list of 11 solutions, organized into 5 professional categories:
 *   1. Industries
 *   2. Asset & Inventory
 *   3. Security & Access
 *   4. Tracking & Traceability
 *   5. Smart Operations
 *
 * Each item links to its dedicated page under /it-solution/<slug>.
 */

/* ------------------------------------------------------------------ */
/* 1. Catalog (language-agnostic structure)                            */
/*    Slug strategy: keep existing French slugs when a page already    */
/*    exists, use clean English slugs for the new pages.               */
/* ------------------------------------------------------------------ */

const CATEGORIES_BASE = [
  {
    key: "industries",
    accent: "#2563eb",
    items: [
      { id: "retail", slug: "rfid-retail", image: "/a_rfidia/z_rfid/retail.png" },
      { id: "healthcare", slug: "solution-sante", image: "/a_rfidia/z_medical/z_medical3.png" },
      { id: "hospitality", slug: "solution-hotellerie", image: "/a_rfidia/hotellerie.png" },
      { id: "manufacturing", slug: "rfid-manufacturing", image: "/a_rfidia/z_industriel/z_industriel.png" },
      { id: "oil_gas", slug: "rfid-oil-gas", image: "/a_rfidia/z_rfid/rfid11.png" },
      { id: "government", slug: "rfid-government", image: "/a_rfidia/z_rfid/rfid22.png" },
      { id: "education", slug: "solution-ecole", image: "/a_rfidia/z_school/school.png" },
    ],
  },
  {
    key: "assets",
    accent: "#7c3aed",
    items: [
      { id: "asset_tracking", slug: "solution-gestion-actifs", image: "/a_rfidia/z_rfid/z_assets.png" },
      { id: "it_asset", slug: "rfid-it-asset-management", image: "/a_rfidia/z_rfid/rfid23.png" },
    ],
  },
  {
    key: "traceability",
    accent: "#0ea5e9",
    items: [
      { id: "warehouse", slug: "solution-entrepot", image: "/a_rfidia/z_logistique/z_logistique.png" },
      { id: "data_center", slug: "rfid-data-center", image: "/a_rfidia/z_rfid/rfid12.png" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 2. Translations                                                     */
/* ------------------------------------------------------------------ */

const I18N = {
  fr: {
    viewAll: "Voir toutes les solutions",
    cta: {
      title: "Vous ne trouvez pas votre cas d'usage ?",
      desc: "Nos experts conçoivent des solutions RFID sur mesure pour votre métier.",
      btn: "Parler à un expert",
    },
    categories: {
      industries: { title: "Industries", subtitle: "Solutions par secteur" },
      assets: { title: "Actifs & Inventaire", subtitle: "Visibilité totale du parc" },
      traceability: { title: "Suivi & Traçabilité", subtitle: "Du fournisseur au client" },
    },
    items: {
      retail: { title: "RFID Retail", description: "Inventaire temps réel, anti-démarque et expérience client connectée." },
      healthcare: { title: "RFID Santé", description: "Traçabilité des dispositifs médicaux et sécurisation des stocks sensibles." },
      hospitality: { title: "RFID Hôtellerie", description: "Opérations intelligentes, blanchisserie et excellence du service." },
      manufacturing: { title: "RFID Industrie", description: "Traçabilité de production, WIP et pilotage des équipements." },
      oil_gas: { title: "RFID Oil & Gas", description: "Inspection d'équipements critiques en environnements ATEX." },
      government: { title: "RFID Gouvernement", description: "Gestion des actifs publics, archives et contrôle des biens." },
      education: { title: "RFID Éducation", description: "Sécurisation des parcours et suivi du matériel pédagogique." },
      asset_tracking: { title: "Gestion d'Actifs", description: "Suivi de précision des équipements critiques et réduction des pertes." },
      it_asset: { title: "IT Asset Management", description: "Inventaire automatisé des PC, serveurs et équipements informatiques." },
      warehouse: { title: "Entrepôt & Logistique", description: "Inventaire temps réel et pilotage des flux logistiques." },
      data_center: { title: "Data Center", description: "Inventaire de serveurs, baies et câblage pour une infra fiable." },
    },
  },
  en: {
    viewAll: "View all solutions",
    cta: {
      title: "Don't see your use case?",
      desc: "Our experts design custom RFID solutions tailored to your business.",
      btn: "Talk to an expert",
    },
    categories: {
      industries: { title: "Industries", subtitle: "Vertical-specific solutions" },
      assets: { title: "Asset & Inventory", subtitle: "Total visibility of your fleet" },
      traceability: { title: "Tracking & Traceability", subtitle: "From supplier to customer" },
    },
    items: {
      retail: { title: "RFID in Retail", description: "Real-time inventory, loss prevention and connected store experience." },
      healthcare: { title: "RFID in Healthcare", description: "Medical device traceability and protection of sensitive inventories." },
      hospitality: { title: "RFID in Hospitality", description: "Smart operations, laundry tracking and service excellence." },
      manufacturing: { title: "RFID in Manufacturing", description: "Production traceability, WIP control and equipment monitoring." },
      oil_gas: { title: "RFID in Oil and Gas", description: "Critical equipment inspection in ATEX-rated environments." },
      government: { title: "RFID in Government", description: "Public asset management, archives and goods control." },
      education: { title: "RFID in Education", description: "Secure student journeys and tracking of educational assets." },
      asset_tracking: { title: "RFID Asset Tracking", description: "Precision tracking of critical equipment and loss reduction." },
      it_asset: { title: "RFID in IT Asset Management", description: "Automated inventory of PCs, servers and IT equipment." },
      warehouse: { title: "RFID in Logistics and Warehouse", description: "Real-time inventory and end-to-end logistics flow control." },
      data_center: { title: "RFID in Data Center", description: "Inventory of servers, racks and cabling for reliable infra." },
    },
  },
  it: {
    viewAll: "Vedi tutte le soluzioni",
    cta: {
      title: "Non trovi il tuo caso d'uso?",
      desc: "I nostri esperti progettano soluzioni RFID su misura per il tuo business.",
      btn: "Parla con un esperto",
    },
    categories: {
      industries: { title: "Settori", subtitle: "Soluzioni verticali per settore" },
      assets: { title: "Asset & Inventario", subtitle: "Visibilità totale del parco" },
      traceability: { title: "Tracking & Tracciabilità", subtitle: "Dal fornitore al cliente" },
    },
    items: {
      retail: { title: "RFID Retail", description: "Inventario in tempo reale, anti-taccheggio ed esperienza connessa." },
      healthcare: { title: "RFID Sanità", description: "Tracciabilità dei dispositivi medici e protezione delle scorte sensibili." },
      hospitality: { title: "RFID Ospitalità", description: "Operazioni intelligenti, lavanderia ed eccellenza del servizio." },
      manufacturing: { title: "RFID Industria", description: "Tracciabilità produzione, WIP e monitoraggio degli impianti." },
      oil_gas: { title: "RFID Oil & Gas", description: "Ispezione di impianti critici in ambienti ATEX." },
      government: { title: "RFID PA", description: "Gestione asset pubblici, archivi e controllo dei beni." },
      education: { title: "RFID Istruzione", description: "Percorsi sicuri e tracciamento degli asset didattici." },
      asset_tracking: { title: "Gestione Asset", description: "Tracciamento di precisione delle attrezzature critiche." },
      it_asset: { title: "IT Asset Management", description: "Inventario automatico di PC, server e dispositivi IT." },
      warehouse: { title: "Magazzino & Logistica", description: "Inventario in tempo reale e gestione dei flussi logistici." },
      data_center: { title: "Data Center", description: "Inventario di server, rack e cablaggi per infra affidabile." },
    },
  },
};

/* ------------------------------------------------------------------ */
/* 3. Public helpers                                                   */
/* ------------------------------------------------------------------ */

function pickLang(lang) {
  return ["fr", "en", "it"].includes(lang) ? lang : "fr";
}

function buildHref(slug) {
  return slug ? `/it-solution/${slug}` : "/contact-us";
}

/**
 * Returns the full categorized solutions catalog for a given language.
 * Each category has { key, title, subtitle, accent, items: [...] }.
 */
export function getSolutionsCatalog(lang) {
  const L = I18N[pickLang(lang)];

  return CATEGORIES_BASE.map((cat) => {
    const meta = L.categories[cat.key];
    return {
      key: cat.key,
      accent: cat.accent,
      title: meta.title,
      subtitle: meta.subtitle,
      items: cat.items.map((it) => ({
        id: it.id,
        slug: it.slug,
        href: buildHref(it.slug),
        image: it.image,
        accent: cat.accent,
        title: L.items[it.id]?.title || it.id,
        description: L.items[it.id]?.description || "",
      })),
    };
  });
}

/** Localized "View all solutions" label + CTA copy for the mega-menu footer. */
export function getSolutionsMeta(lang) {
  const L = I18N[pickLang(lang)];
  return { viewAll: L.viewAll, cta: L.cta };
}

/**
 * Backward-compat helper: flat list of "featured" solutions (used elsewhere
 * in legacy navigation). Returns 6 representative items so existing callers
 * continue to render correctly.
 */
export function getSolutionsNavItems(lang) {
  const catalog = getSolutionsCatalog(lang);
  const featuredIds = [
    "asset_tracking",
    "retail",
    "healthcare",
    "warehouse",
    "manufacturing",
    "hospitality",
  ];
  const flat = catalog.flatMap((c) => c.items);
  return featuredIds
    .map((id) => flat.find((it) => it.id === id))
    .filter(Boolean);
}
