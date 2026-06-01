import { buildSolution, makeTheme } from "../buildSolution";

const theme = makeTheme("#7c3aed", "#a78bfa", "#5b21b6");
const copy = {
  "fr": {
    "metaTitle": "Gestion des Actifs | RFIDIA",
    "metaDesc": "Localisez, sécurisez et optimisez vos équipements critiques grâce à la traçabilité RFID/IoT : inventaires rapides, réduction des pertes et pilotage du parc.",
    "heroEyebrow": "Asset Management • Traçabilité & contrôle",
    "heroTitleA": "Vos actifs,",
    "heroTitleB": "toujours",
    "heroTitleC": "au bon endroit",
    "heroSub": "RFIDIA vous apporte une visibilité fiable sur vos équipements (outillage, IT, maintenance, instruments, contenants). Moins de pertes, moins de temps de recherche, et des inventaires rapides — avec des indicateurs concrets pour piloter le parc et la disponibilité.",
    "heroCta1": "Auditer mon parc",
    "heroCta2": "Voir toutes les solutions",
    "kpis": [
      {
        "v": "-40%",
        "l": "Pertes & écarts"
      },
      {
        "v": "-60%",
        "l": "Temps de recherche"
      },
      {
        "v": "+20%",
        "l": "Disponibilité"
      }
    ],
    "modulesTitle": "Couverture fonctionnelle",
    "modulesDesc": "Modules combinables selon votre environnement : RFID, codes-barres, IoT, et intégrations SI (ERP/GMAO).",
    "modules": [
      {
        "title": "Inventaires rapides et fiables",
        "desc": "Inventaires tournants plus fréquents, sans immobiliser les équipes. Réconciliation claire et historique exploitable."
      },
      {
        "title": "Réduction des pertes",
        "desc": "Traçabilité des mouvements, responsabilisation des flux, détection d’anomalies et alertes utiles sur les écarts."
      },
      {
        "title": "Disponibilité opérationnelle",
        "desc": "Meilleure localisation, moins de ruptures de service, et planification plus simple des interventions et prêts."
      },
      {
        "title": "Identification & référentiel",
        "desc": "Étiquetage RFID et référentiel des actifs (catégories, criticité, affectations, sites et zones)."
      },
      {
        "title": "Localisation & mouvements",
        "desc": "Lectures mobiles / points fixes pour suivre entrées-sorties, transferts, prêts et retours."
      },
      {
        "title": "Inventaire & audit",
        "desc": "Inventaires par zone, par équipe ou par campagne, avec rapprochement automatique et rapports d’écarts."
      }
    ],
    "journeyTitle": "Ce que vous gagnez (vraiment)",
    "journeyDesc": "Une solution orientée usage : localiser, sécuriser, inventorier et décider — sans complexifier le terrain.",
    "journey": [
      {
        "n": "01",
        "t": "Diagnostic & cadrage",
        "d": "Ateliers avec vos équipes, priorités, conformité et périmètre fonctionnel."
      },
      {
        "n": "02",
        "t": "Conception & pilote",
        "d": "Architecture technique, choix des supports RFID et expérimentation sur un site pilote."
      },
      {
        "n": "03",
        "t": "Déploiement & intégration",
        "d": "Installation encadrée, paramétrage, raccordements utiles et validation des flux réels."
      },
      {
        "n": "04",
        "t": "Adoption & amélioration",
        "d": "Formation, support, indicateurs de suivi et ajustements pour pérenniser les usages."
      }
    ],
    "proofTitle": "Cas d’usage typiques",
    "proofDesc": "Exemples où les équipes voient la différence dès les premières semaines.",
    "proofs": [
      "Équipements de maintenance : outillage, instruments, pièces critiques.",
      "Actifs IT : PC portables, terminaux mobiles, lecteurs, imprimantes.",
      "Matériels partagés : laboratoires, ateliers, salles techniques, contenants réutilisables.",
      "Suivi multi-sites : transferts entre sites, stocks tampons, prêts inter-départements."
    ],
    "ctaTitle": "Rendez votre parc d’actifs plus fiable",
    "ctaSub": "Dites-nous vos sites, vos catégories d’actifs et vos contraintes : on vous propose un plan de déploiement clair, progressif et mesurable.",
    "ctaBtn": "Contactez RFIDIA",
    "ctaAlt": "Retour à l’accueil solutions"
  },
  "en": {
    "metaTitle": "Asset Management | RFIDIA",
    "metaDesc": "Locate, secure and optimize critical equipment with RFID/IoT traceability: faster inventories, fewer losses and better fleet control.",
    "heroEyebrow": "Asset Management • Traceability & control",
    "heroTitleA": "Your assets,",
    "heroTitleB": "always",
    "heroTitleC": "in the right place",
    "heroSub": "RFIDIA delivers reliable visibility across your equipment (tools, IT, maintenance devices, instruments, returnable containers). Fewer losses, less time searching and faster inventories — with clear KPIs to manage availability and lifecycle.",
    "heroCta1": "Assess my fleet",
    "heroCta2": "All solutions",
    "kpis": [
      {
        "v": "-40%",
        "l": "Losses & gaps"
      },
      {
        "v": "-60%",
        "l": "Search time"
      },
      {
        "v": "+20%",
        "l": "Availability"
      }
    ],
    "modulesTitle": "Functional coverage",
    "modulesDesc": "Composable modules: RFID, barcodes, IoT and system integrations (ERP/CMMS).",
    "modules": [
      {
        "title": "Fast, reliable inventories",
        "desc": "More frequent cycle counts without stopping operations. Clean reconciliation and auditable history."
      },
      {
        "title": "Loss reduction",
        "desc": "Movement traceability, anomaly detection and meaningful alerts on discrepancies."
      },
      {
        "title": "Operational availability",
        "desc": "Better location, fewer service disruptions and easier planning for maintenance and lending."
      },
      {
        "title": "Identification & master data",
        "desc": "RFID tagging and asset master data (categories, criticality, assignments, sites and zones)."
      },
      {
        "title": "Location & movements",
        "desc": "Mobile reads / fixed points to track check-in/out, transfers, loans and returns."
      },
      {
        "title": "Inventory & audit",
        "desc": "Counts by zone/team/campaign with automatic reconciliation and discrepancy reporting."
      }
    ],
    "journeyTitle": "What you truly gain",
    "journeyDesc": "A usage-first solution: locate, secure, count and decide — without floor complexity.",
    "journey": [
      {
        "n": "01",
        "t": "Discovery & scoping",
        "d": "Workshops with your teams, priorities, compliance and functional perimeter."
      },
      {
        "n": "02",
        "t": "Design & pilot",
        "d": "Technical architecture, RFID media choices and pilot on a site or line."
      },
      {
        "n": "03",
        "t": "Deployment & integration",
        "d": "Supervised installation, configuration, connections and validation in real conditions."
      },
      {
        "n": "04",
        "t": "Adoption & improvement",
        "d": "Training, support, follow-up metrics and refinements for long-term usage."
      }
    ],
    "proofTitle": "Typical use cases",
    "proofDesc": "Where teams feel the difference within the first weeks.",
    "proofs": [
      "Maintenance equipment: tools, instruments, critical parts.",
      "IT assets: laptops, mobile terminals, readers, printers.",
      "Shared equipment: labs, workshops, technical rooms, returnable containers.",
      "Multi-site tracking: transfers, buffer stocks and cross-department lending."
    ],
    "ctaTitle": "Make your asset fleet reliable",
    "ctaSub": "Share your sites, asset categories and constraints — we’ll propose a clear, measurable rollout plan.",
    "ctaBtn": "Contact RFIDIA",
    "ctaAlt": "Back to solutions hub"
  },
  "it": {
    "metaTitle": "Gestione Asset | RFIDIA",
    "metaDesc": "Localizza, proteggi e ottimizza attrezzature critiche con tracciabilità RFID/IoT: inventari rapidi, meno perdite e governance del parco.",
    "heroEyebrow": "Asset Management • Tracciabilità & controllo",
    "heroTitleA": "I tuoi asset,",
    "heroTitleB": "sempre",
    "heroTitleC": "nel posto giusto",
    "heroSub": "RFIDIA offre visibilità affidabile su attrezzature (utensili, IT, strumenti, contenitori). Meno perdite, meno tempo di ricerca e inventari più rapidi — con KPI chiari per disponibilità e ciclo di vita.",
    "heroCta1": "Valuta il parco",
    "heroCta2": "Tutte le soluzioni",
    "kpis": [
      {
        "v": "-40%",
        "l": "Perdite & gap"
      },
      {
        "v": "-60%",
        "l": "Tempo di ricerca"
      },
      {
        "v": "+20%",
        "l": "Disponibilità"
      }
    ],
    "modulesTitle": "Copertura funzionale",
    "modulesDesc": "Moduli combinabili: RFID, barcode, IoT e integrazioni (ERP/CMMS).",
    "modules": [
      {
        "title": "Inventari rapidi e affidabili",
        "desc": "Cycle count più frequenti senza fermare le operazioni. Riconciliazione chiara e storico auditabile."
      },
      {
        "title": "Riduzione perdite",
        "desc": "Tracciabilità movimenti, rilevazione anomalie e alert utili sugli scostamenti."
      },
      {
        "title": "Disponibilità operativa",
        "desc": "Migliore localizzazione, meno interruzioni e pianificazione più semplice di manutenzione e prestiti."
      },
      {
        "title": "Identificazione & anagrafiche",
        "desc": "Etichettatura RFID e master data (categorie, criticità, assegnazioni, siti e zone)."
      },
      {
        "title": "Localizzazione & movimenti",
        "desc": "Letture mobili / punti fissi per ingressi/uscite, trasferimenti, prestiti e resi."
      },
      {
        "title": "Inventario & audit",
        "desc": "Inventari per zona/team/campagna con riconciliazione automatica e report scostamenti."
      }
    ],
    "journeyTitle": "Cosa ottieni davvero",
    "journeyDesc": "Soluzione orientata all’uso: localizzare, proteggere, inventariare e decidere — senza complessità.",
    "journey": [
      {
        "n": "01",
        "t": "Analisi e perimetro",
        "d": "Workshop con le squadre, priorità, conformità e ambito funzionale."
      },
      {
        "n": "02",
        "t": "Progetto e pilota",
        "d": "Architettura tecnica, scelta supporti RFID e sperimentazione su un sito pilota."
      },
      {
        "n": "03",
        "t": "Deploy e integrazione",
        "d": "Installazione guidata, configurazione, collegamenti utili e validazione dei flussi reali."
      },
      {
        "n": "04",
        "t": "Adozione e miglioramento",
        "d": "Formazione, supporto, KPI di follow-up e aggiustamenti per consolidare gli usi."
      }
    ],
    "proofTitle": "Casi d’uso tipici",
    "proofDesc": "Dove i team vedono benefici nelle prime settimane.",
    "proofs": [
      "Attrezzature manutenzione: utensili, strumenti, parti critiche.",
      "Asset IT: laptop, terminali mobili, lettori, stampanti.",
      "Materiali condivisi: laboratori, officine, sale tecniche, contenitori riutilizzabili.",
      "Multi-sito: trasferimenti, stock tampone e prestiti tra reparti."
    ],
    "ctaTitle": "Rendi affidabile il parco asset",
    "ctaSub": "Condividi siti, categorie e vincoli: proponiamo un piano chiaro e misurabile.",
    "ctaBtn": "Contatta RFIDIA",
    "ctaAlt": "Torna alle soluzioni"
  }
};

export default buildSolution(theme, "/a_rfidia/z_rfid/z_assets.png", copy);
