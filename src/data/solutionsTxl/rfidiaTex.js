import { buildSolution, makeTheme } from "../buildSolution";

const theme = makeTheme("#A16207", "#FDE68A", "#713F12");

const copy = {
  fr: {
    metaTitle: "RFIDIA-TEX : Solution RFID Textile Tunisie | RFIDIA",
    breadcrumbLabel: "RFIDIA-TEX",
    metaDesc:
      "RFIDIA-TEX, la solution RFID textile de RFIDIA en Tunisie : traçabilité unitaire du fil à la vente, inventaires 10x plus rapides, contrôle qualité et lutte anti-contrefaçon pour ateliers, usines et enseignes.",
    heroEyebrow: "RFIDIA-TEX • Textile & habillement",
    heroTitleA: "Chaque pièce",
    heroTitleB: "traçable,",
    heroTitleC: "du fil à la vente",
    heroSub:
      "RFIDIA-TEX connecte vos ateliers, vos entrepôts et vos boutiques avec une traçabilité unitaire fiable. Résultat : inventaires en quelques minutes, tailles et couleurs toujours disponibles, moins de pertes et une expérience client plus fluide.",
    heroCta1: "Demander une démo RFIDIA-TEX",
    heroCta2: "Voir toutes les solutions",
    kpis: [
      { v: "x10", l: "Vitesse d'inventaire" },
      { v: "+15%", l: "Disponibilité en rayon" },
      { v: "-35%", l: "Pertes et écarts inconnus" },
    ],
    modulesTitle: "Une solution qui couvre toute la chaîne textile",
    modulesDesc:
      "De l'atelier de confection à la boutique : vous déployez étape par étape, avec un retour sur investissement mesurable à chaque palier.",
    modules: [
      { title: "Traçabilité unitaire (EPC)", desc: "Un identifiant unique par article, relié à vos références (SKU, lot, taille, couleur) avec l'historique complet des mouvements." },
      { title: "Suivi de production (WIP)", desc: "Avancement des ordres de fabrication en temps réel, du coupe à l'emballage, sans saisie manuelle." },
      { title: "Contrôle qualité et conformité", desc: "Contrôles en sortie de ligne, détection des écarts et sécurisation des étapes sensibles (reconditionnement, retours)." },
      { title: "Stock et inventaires rapides", desc: "Inventaires tournants sans arrêter l'activité, fiabilisation des stocks et réduction des ruptures." },
      { title: "Préparation et expédition", desc: "Lecture groupée des cartons, contrôle de complétude des commandes et preuve d'expédition automatique." },
      { title: "Anti-contrefaçon et authenticité", desc: "Authentification des articles et détection des produits non conformes tout au long de la chaîne." },
    ],
    journeyTitle: "Un déploiement simple, des gains rapides",
    journeyDesc:
      "Une logique « scanner et avancer » pour vos équipes : moins de saisie, plus de fiabilité, un pilotage en temps réel.",
    journey: [
      { n: "01", t: "Encoder", d: "Pose et encodage des étiquettes RFID au bon moment : atelier, dépôt ou réception, selon votre process." },
      { n: "02", t: "Synchroniser", d: "Connexion à vos données produit et à votre ERP : références, variantes, commandes, retours." },
      { n: "03", t: "Lire et contrôler", d: "Lectures rapides pour inventaires, expéditions et réceptions, avec règles d'alerte sur les écarts." },
      { n: "04", t: "Piloter", d: "Tableaux de bord : disponibilité, écarts, rotation, retours et performance opérationnelle." },
    ],
    proofTitle: "Pourquoi les acteurs du textile adoptent la RFID",
    proofDesc:
      "Parce que la promesse est simple : trouver le bon produit plus vite, avec moins d'erreurs, et un service plus fiable.",
    proofs: [
      "Meilleure disponibilité des tailles et couleurs : moins de ventes perdues.",
      "Réduction des écarts et des pertes grâce à la traçabilité à l'unité.",
      "Réceptions et inventaires jusqu'à 10 fois plus rapides sur le terrain.",
      "Données fiables pour l'omnicanal : click & collect, retours, e-commerce.",
    ],
    ctaTitle: "Prêt à rendre votre chaîne textile plus performante ?",
    ctaSub:
      "Décrivez-nous vos sites (atelier, dépôt, boutiques), vos volumes et vos objectifs : nous vous proposons un plan de déploiement RFIDIA-TEX clair et progressif.",
    ctaBtn: "Contactez RFIDIA",
    ctaAlt: "Retour aux solutions",
    applicationsTitle: "Applications de RFIDIA-TEX",
    applicationsDesc: "Six cas d'usage concrets pour gagner en efficacité, du tissu au client final.",
    applications: [
      { title: "Inventaire éclair en boutique", desc: "Comptage complet d'un magasin en quelques minutes, sans fermer." },
      { title: "Suivi des lots de production", desc: "Localisation des lots et des ordres de fabrication à chaque étape." },
      { title: "Réception fournisseurs", desc: "Contrôle automatique des livraisons face aux bons de commande." },
      { title: "Expédition et logistique", desc: "Vérification des cartons sans les ouvrir, zéro erreur de préparation." },
      { title: "Gestion des retours", desc: "Retour en stock rapide, tri et traçabilité des articles retournés." },
      { title: "Authentification des articles", desc: "Preuve d'origine et lutte contre les produits contrefaits." },
    ],
    verticalsTitle: "Pour quels acteurs du textile ?",
    verticalsDesc: "RFIDIA-TEX s'adapte à toute la filière, de la confection à la distribution.",
    verticals: [
      { name: "Ateliers de confection", desc: "Suivi de production et de qualité." },
      { name: "Usines textiles", desc: "Traçabilité des lots et des flux." },
      { name: "Marques et créateurs", desc: "Contrôle de la chaîne et authenticité." },
      { name: "Enseignes de mode", desc: "Inventaires rapides et disponibilité en rayon." },
      { name: "Blanchisserie et uniformes", desc: "Suivi des tenues et cycles de lavage." },
      { name: "Export et logistique", desc: "Conformité des expéditions multi-sites." },
    ],
  },
  en: {
    metaTitle: "RFIDIA-TEX: RFID Textile Solution Tunisia | RFIDIA",
    breadcrumbLabel: "RFIDIA-TEX",
    metaDesc:
      "RFIDIA-TEX, RFIDIA's RFID textile solution in Tunisia: item-level traceability from thread to sale, inventories 10x faster, quality control and anti-counterfeit for workshops, factories and retailers.",
    heroEyebrow: "RFIDIA-TEX • Textile & apparel",
    heroTitleA: "Every garment",
    heroTitleB: "traceable,",
    heroTitleC: "from thread to sale",
    heroSub:
      "RFIDIA-TEX connects your workshops, warehouses and stores with reliable item-level traceability. The result: inventories in minutes, sizes and colours always available, fewer losses and a smoother customer experience.",
    heroCta1: "Request a RFIDIA-TEX demo",
    heroCta2: "All solutions",
    kpis: [
      { v: "x10", l: "Inventory speed" },
      { v: "+15%", l: "On-shelf availability" },
      { v: "-35%", l: "Losses and unknown gaps" },
    ],
    modulesTitle: "One solution covering the whole textile chain",
    modulesDesc:
      "From the garment workshop to the store: deploy step by step, with measurable return on investment at every stage.",
    modules: [
      { title: "Item-level traceability (EPC)", desc: "A unique ID per item, linked to your references (SKU, lot, size, colour) with the full movement history." },
      { title: "Production tracking (WIP)", desc: "Real-time progress of production orders, from cutting to packing, with no manual entry." },
      { title: "Quality control and compliance", desc: "End-of-line checks, gap detection and protection of sensitive steps (repacking, returns)." },
      { title: "Stock and fast inventories", desc: "Cycle counts without stopping operations, reliable stock and fewer stock-outs." },
      { title: "Picking and shipping", desc: "Bulk reading of cartons, order completeness checks and automatic proof of shipment." },
      { title: "Anti-counterfeit and authenticity", desc: "Item authentication and detection of non-compliant products across the chain." },
    ],
    journeyTitle: "Simple rollout, quick wins",
    journeyDesc:
      "A \"scan and go\" logic for your teams: less data entry, more reliability, real-time control.",
    journey: [
      { n: "01", t: "Encode", d: "RFID tags applied and encoded at the right moment: workshop, warehouse or receiving, following your process." },
      { n: "02", t: "Synchronise", d: "Connection to your product data and ERP: references, variants, orders, returns." },
      { n: "03", t: "Read and control", d: "Fast reads for inventories, shipping and receiving, with alert rules on gaps." },
      { n: "04", t: "Steer", d: "Dashboards: availability, gaps, turnover, returns and operational performance." },
    ],
    proofTitle: "Why textile players adopt RFID",
    proofDesc:
      "Because the promise is simple: find the right product faster, with fewer errors and a more reliable service.",
    proofs: [
      "Better availability of sizes and colours: fewer lost sales.",
      "Fewer gaps and losses thanks to item-level traceability.",
      "Receiving and inventories up to 10 times faster on the floor.",
      "Reliable data for omnichannel: click & collect, returns, e-commerce.",
    ],
    ctaTitle: "Ready to make your textile chain more efficient?",
    ctaSub:
      "Tell us about your sites (workshop, warehouse, stores), volumes and goals: we will propose a clear, phased RFIDIA-TEX rollout plan.",
    ctaBtn: "Contact RFIDIA",
    ctaAlt: "Back to solutions",
    applicationsTitle: "RFIDIA-TEX applications",
    applicationsDesc: "Six concrete use cases to gain efficiency, from fabric to end customer.",
    applications: [
      { title: "Flash store inventory", desc: "Full store count in minutes, without closing." },
      { title: "Production lot tracking", desc: "Location of lots and production orders at every step." },
      { title: "Supplier receiving", desc: "Automatic check of deliveries against purchase orders." },
      { title: "Shipping and logistics", desc: "Carton verification without opening, zero picking errors." },
      { title: "Returns management", desc: "Fast return to stock, sorting and traceability of returned items." },
      { title: "Item authentication", desc: "Proof of origin and protection against counterfeits." },
    ],
    verticalsTitle: "Which textile players?",
    verticalsDesc: "RFIDIA-TEX fits the whole industry, from garment making to distribution.",
    verticals: [
      { name: "Garment workshops", desc: "Production and quality tracking." },
      { name: "Textile factories", desc: "Lot and flow traceability." },
      { name: "Brands and designers", desc: "Chain control and authenticity." },
      { name: "Fashion retailers", desc: "Fast inventories and shelf availability." },
      { name: "Laundry and uniforms", desc: "Garment tracking and wash cycles." },
      { name: "Export and logistics", desc: "Multi-site shipment compliance." },
    ],
  },
  it: {
    metaTitle: "RFIDIA-TEX: Soluzione RFID Tessile Tunisia | RFIDIA",
    breadcrumbLabel: "RFIDIA-TEX",
    metaDesc:
      "RFIDIA-TEX, la soluzione RFID tessile di RFIDIA in Tunisia: tracciabilità del singolo capo dal filo alla vendita, inventari 10 volte più rapidi, controllo qualità e anti-contraffazione per laboratori, fabbriche e retail.",
    heroEyebrow: "RFIDIA-TEX • Tessile e abbigliamento",
    heroTitleA: "Ogni capo",
    heroTitleB: "tracciabile,",
    heroTitleC: "dal filo alla vendita",
    heroSub:
      "RFIDIA-TEX collega laboratori, magazzini e negozi con una tracciabilità affidabile del singolo capo. Risultato: inventari in pochi minuti, taglie e colori sempre disponibili, meno perdite e un'esperienza cliente più fluida.",
    heroCta1: "Richiedi una demo RFIDIA-TEX",
    heroCta2: "Tutte le soluzioni",
    kpis: [
      { v: "x10", l: "Velocità di inventario" },
      { v: "+15%", l: "Disponibilità a scaffale" },
      { v: "-35%", l: "Perdite e ammanchi" },
    ],
    modulesTitle: "Una soluzione per tutta la filiera tessile",
    modulesDesc:
      "Dal laboratorio di confezione al negozio: si implementa per fasi, con un ritorno misurabile a ogni passo.",
    modules: [
      { title: "Tracciabilità del singolo capo (EPC)", desc: "Un identificativo unico per articolo, collegato ai vostri riferimenti (SKU, lotto, taglia, colore) con storico completo dei movimenti." },
      { title: "Monitoraggio produzione (WIP)", desc: "Avanzamento degli ordini di produzione in tempo reale, dal taglio all'imballo, senza inserimenti manuali." },
      { title: "Controllo qualità e conformità", desc: "Controlli a fine linea, rilevamento degli scostamenti e messa in sicurezza dei passaggi sensibili (riconfezionamento, resi)." },
      { title: "Stock e inventari rapidi", desc: "Inventari ciclici senza fermare l'attività, scorte affidabili e meno rotture di stock." },
      { title: "Preparazione e spedizione", desc: "Lettura massiva dei colli, controllo di completezza degli ordini e prova di spedizione automatica." },
      { title: "Anti-contraffazione e autenticità", desc: "Autenticazione degli articoli e rilevamento dei prodotti non conformi lungo la filiera." },
    ],
    journeyTitle: "Implementazione semplice, risultati rapidi",
    journeyDesc:
      "Una logica \"scansiona e vai\" per i vostri team: meno inserimenti, più affidabilità, controllo in tempo reale.",
    journey: [
      { n: "01", t: "Codificare", d: "Applicazione e codifica delle etichette RFID al momento giusto: laboratorio, deposito o ricevimento, secondo il vostro processo." },
      { n: "02", t: "Sincronizzare", d: "Collegamento ai dati prodotto e all'ERP: riferimenti, varianti, ordini, resi." },
      { n: "03", t: "Leggere e controllare", d: "Letture rapide per inventari, spedizioni e ricevimenti, con regole di allerta sugli scostamenti." },
      { n: "04", t: "Governare", d: "Dashboard: disponibilità, scostamenti, rotazione, resi e performance operativa." },
    ],
    proofTitle: "Perché il tessile adotta l'RFID",
    proofDesc:
      "Perché la promessa è semplice: trovare il prodotto giusto più in fretta, con meno errori e un servizio più affidabile.",
    proofs: [
      "Migliore disponibilità di taglie e colori: meno vendite perse.",
      "Meno scostamenti e perdite grazie alla tracciabilità del singolo capo.",
      "Ricevimenti e inventari fino a 10 volte più veloci sul campo.",
      "Dati affidabili per l'omnicanale: click & collect, resi, e-commerce.",
    ],
    ctaTitle: "Pronti a rendere più efficiente la vostra filiera tessile?",
    ctaSub:
      "Raccontateci i vostri siti (laboratorio, deposito, negozi), i volumi e gli obiettivi: vi proporremo un piano RFIDIA-TEX chiaro e graduale.",
    ctaBtn: "Contatta RFIDIA",
    ctaAlt: "Torna alle soluzioni",
    applicationsTitle: "Applicazioni di RFIDIA-TEX",
    applicationsDesc: "Sei casi d'uso concreti per guadagnare efficienza, dal tessuto al cliente finale.",
    applications: [
      { title: "Inventario lampo in negozio", desc: "Conteggio completo del negozio in pochi minuti, senza chiudere." },
      { title: "Tracciamento dei lotti", desc: "Localizzazione di lotti e ordini di produzione a ogni fase." },
      { title: "Ricevimento fornitori", desc: "Controllo automatico delle consegne rispetto agli ordini." },
      { title: "Spedizione e logistica", desc: "Verifica dei colli senza aprirli, zero errori di preparazione." },
      { title: "Gestione dei resi", desc: "Rientro rapido a stock, smistamento e tracciabilità dei resi." },
      { title: "Autenticazione degli articoli", desc: "Prova di origine e protezione dai prodotti contraffatti." },
    ],
    verticalsTitle: "Per quali attori del tessile?",
    verticalsDesc: "RFIDIA-TEX si adatta a tutta la filiera, dalla confezione alla distribuzione.",
    verticals: [
      { name: "Laboratori di confezione", desc: "Monitoraggio di produzione e qualità." },
      { name: "Fabbriche tessili", desc: "Tracciabilità di lotti e flussi." },
      { name: "Marchi e designer", desc: "Controllo della filiera e autenticità." },
      { name: "Catene di moda", desc: "Inventari rapidi e disponibilità a scaffale." },
      { name: "Lavanderia e divise", desc: "Tracciamento dei capi e dei cicli di lavaggio." },
      { name: "Export e logistica", desc: "Conformità delle spedizioni multi-sito." },
    ],
  },
};

export default buildSolution(theme, "/a_rfidia/z_textile/rfidia-tex.png", copy);
