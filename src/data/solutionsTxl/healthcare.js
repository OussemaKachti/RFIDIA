import { buildSolution, makeTheme } from "../buildSolution";

const theme = makeTheme("#0d9488", "#2dd4bf", "#0f766e");
const copy = {
  "fr": {
    "metaTitle": "Solution Santé | RFIDIA",
    "metaDesc": "Traçabilité et sécurité en santé : suivi des dispositifs médicaux, maîtrise des stocks sensibles, réduction des pertes et meilleure continuité de service.",
    "heroEyebrow": "Santé • Traçabilité & sécurité",
    "heroTitleA": "La traçabilité",
    "heroTitleB": "qui rassure",
    "heroTitleC": "et qui protège la continuité de soins",
    "heroSub": "RFIDIA aide les établissements de santé à mieux localiser les équipements, sécuriser les stocks sensibles et fiabiliser les mouvements. Objectif : moins de pertes, des inventaires plus rapides et des données exploitables pour améliorer la disponibilité au bon moment.",
    "heroCta1": "Évaluer mon établissement",
    "heroCta2": "Voir toutes les solutions",
    "kpis": [
      {
        "v": "-35%",
        "l": "Pertes & immobilisations"
      },
      {
        "v": "-50%",
        "l": "Temps de recherche"
      },
      {
        "v": "+20%",
        "l": "Disponibilité équipement"
      }
    ],
    "modulesTitle": "Domaines couverts",
    "modulesDesc": "Selon votre périmètre : traçabilité des équipements, des dispositifs, et gestion de stocks — avec une approche progressive et respectueuse du terrain.",
    "modules": [
      {
        "title": "Équipements biomédicaux",
        "desc": "Localisation, mouvements, prêts et maintenance : visibilité claire sur le parc et réduction des indisponibilités."
      },
      {
        "title": "Dispositifs médicaux & consommables",
        "desc": "Sécurisation des stocks, suivi des lots/variantes (selon choix), et réduction des ruptures sur les unités."
      },
      {
        "title": "Zones sensibles",
        "desc": "Gestion des accès et journaux d’événements (selon périmètre) pour protéger les espaces critiques."
      },
      {
        "title": "Inventaires & audits",
        "desc": "Inventaires plus rapides par zone (services, blocs, pharmacie), réconciliation et rapports exploitables."
      }
    ],
    "journeyTitle": "Une méthode adaptée au secteur",
    "journeyDesc": "On priorise l’impact opérationnel : disponibilité, sécurité et fiabilité — avec des pilotes mesurables.",
    "journey": [
      {
        "n": "01",
        "t": "Cadrage",
        "d": "Périmètre, flux, zones et indicateurs (temps de recherche, pertes, disponibilité)."
      },
      {
        "n": "02",
        "t": "Pilote",
        "d": "Unité pilote, installation, formation courte, mesures avant/après et validation terrain."
      },
      {
        "n": "03",
        "t": "Déploiement",
        "d": "Extension progressive, intégrations utiles, règles et gouvernance des données."
      },
      {
        "n": "04",
        "t": "Amélioration",
        "d": "Suivi, ajustements, dashboards et support pour ancrer les usages."
      }
    ],
    "proofTitle": "Bénéfices attendus",
    "proofDesc": "Des bénéfices concrets qui améliorent le quotidien des équipes.",
    "proofs": [
      "Plus de visibilité : équipements retrouvés plus vite, moins d’achats de “remplacement”",
      "Stocks mieux maîtrisés : moins de ruptures et de surstock",
      "Inventaires plus rapides : audits simplifiés et écarts réduits",
      "Données exploitables : décisions basées sur l’usage réel"
    ],
    "ctaTitle": "Rendons la traçabilité simple et utile",
    "ctaSub": "Décrivez votre établissement, vos zones et vos catégories (biomédical, stocks, unités) : nous proposons un plan progressif et réaliste.",
    "ctaBtn": "Contactez RFIDIA",
    "ctaAlt": "Retour à l’accueil solutions"
  },
  "en": {
    "metaTitle": "Healthcare Solution | RFIDIA",
    "metaDesc": "Traceability and security in healthcare: track devices, control sensitive inventory, reduce losses and improve continuity of service.",
    "heroEyebrow": "Healthcare • Traceability & safety",
    "heroTitleA": "Traceability",
    "heroTitleB": "that reassures",
    "heroTitleC": "and protects continuity of care",
    "heroSub": "RFIDIA helps healthcare facilities locate equipment, secure sensitive inventory and improve movement reliability. Less loss, faster inventories and actionable data to increase availability at the right time.",
    "heroCta1": "Assess my facility",
    "heroCta2": "All solutions",
    "kpis": [
      {
        "v": "-35%",
        "l": "Losses & idle time"
      },
      {
        "v": "-50%",
        "l": "Search time"
      },
      {
        "v": "+20%",
        "l": "Equipment availability"
      }
    ],
    "modulesTitle": "Coverage",
    "modulesDesc": "Depending on your scope: equipment/device tracking and inventory management — with a progressive, floor-friendly approach.",
    "modules": [
      {
        "title": "Biomedical equipment",
        "desc": "Location, movements, loans and maintenance: clear fleet visibility and fewer unavailabilities."
      },
      {
        "title": "Medical devices & consumables",
        "desc": "Secure inventory, track lots/variants (as needed) and reduce unit-level shortages."
      },
      {
        "title": "Sensitive zones",
        "desc": "Access management and event logs (scope-dependent) to protect critical areas."
      },
      {
        "title": "Inventories & audits",
        "desc": "Faster zone counts (wards, OR, pharmacy), reconciliation and usable reporting."
      }
    ],
    "journeyTitle": "A sector-ready method",
    "journeyDesc": "We prioritize operational impact with measurable pilots.",
    "journey": [
      {
        "n": "01",
        "t": "Scope",
        "d": "Perimeter, flows, zones and KPIs (search time, losses, availability)."
      },
      {
        "n": "02",
        "t": "Pilot",
        "d": "Pilot unit, install, short training, before/after metrics and floor validation."
      },
      {
        "n": "03",
        "t": "Rollout",
        "d": "Progressive expansion, useful integrations, rules and data governance."
      },
      {
        "n": "04",
        "t": "Improve",
        "d": "Follow-up, adjustments, dashboards and support to sustain adoption."
      }
    ],
    "proofTitle": "Expected outcomes",
    "proofDesc": "Concrete benefits that improve daily operations.",
    "proofs": [
      "More visibility: equipment found faster, fewer replacement purchases",
      "Better stock control: fewer shortages and less overstock",
      "Faster inventories: simpler audits and reduced discrepancies",
      "Actionable data: decisions based on real usage"
    ],
    "ctaTitle": "Let’s make traceability simple and useful",
    "ctaSub": "Share your facility, zones and categories (biomedical, inventory, wards) — we’ll propose a realistic progressive plan.",
    "ctaBtn": "Contact RFIDIA",
    "ctaAlt": "Back to solutions hub"
  },
  "it": {
    "metaTitle": "Soluzione Sanità | RFIDIA",
    "metaDesc": "Tracciabilità e sicurezza in sanità: tracking dispositivi, controllo scorte sensibili, meno perdite e continuità di servizio.",
    "heroEyebrow": "Sanità • Tracciabilità & sicurezza",
    "heroTitleA": "Tracciabilità",
    "heroTitleB": "che rassicura",
    "heroTitleC": "e protegge la continuità di cura",
    "heroSub": "RFIDIA aiuta le strutture sanitarie a localizzare attrezzature, mettere in sicurezza le scorte e rendere affidabili i movimenti. Meno perdite, inventari più rapidi e dati utili per aumentare la disponibilità al momento giusto.",
    "heroCta1": "Valuta la struttura",
    "heroCta2": "Tutte le soluzioni",
    "kpis": [
      {
        "v": "-35%",
        "l": "Perdite & inattività"
      },
      {
        "v": "-50%",
        "l": "Tempo di ricerca"
      },
      {
        "v": "+20%",
        "l": "Disponibilità attrezzature"
      }
    ],
    "modulesTitle": "Copertura",
    "modulesDesc": "In base al perimetro: tracking attrezzature/dispositivi e gestione scorte — con rollout progressivo e pratico.",
    "modules": [
      {
        "title": "Attrezzature biomedicali",
        "desc": "Localizzazione, movimenti, prestiti e manutenzione: visibilità chiara e meno indisponibilità."
      },
      {
        "title": "Dispositivi & consumabili",
        "desc": "Scorte più sicure, tracciamento lotti/varianti (se necessario) e meno rotture nei reparti."
      },
      {
        "title": "Aree sensibili",
        "desc": "Gestione accessi e log eventi (in base al perimetro) per proteggere aree critiche."
      },
      {
        "title": "Inventari & audit",
        "desc": "Conteggi più rapidi per zone (reparti, sale, farmacia), riconciliazione e report."
      }
    ],
    "journeyTitle": "Metodo adatto al settore",
    "journeyDesc": "Priorità all’impatto operativo con piloti misurabili.",
    "journey": [
      {
        "n": "01",
        "t": "Perimetro",
        "d": "Flussi, zone e KPI (ricerca, perdite, disponibilità)."
      },
      {
        "n": "02",
        "t": "Pilota",
        "d": "Unità pilota, installazione, training breve, metriche e validazione sul campo."
      },
      {
        "n": "03",
        "t": "Deploy",
        "d": "Estensione progressiva, integrazioni utili, regole e governance dati."
      },
      {
        "n": "04",
        "t": "Migliora",
        "d": "Follow-up, aggiustamenti, dashboard e supporto per adozione."
      }
    ],
    "proofTitle": "Benefici attesi",
    "proofDesc": "Benefici concreti per migliorare il lavoro quotidiano.",
    "proofs": [
      "Più visibilità: attrezzature trovate più velocemente, meno acquisti sostitutivi",
      "Scorte sotto controllo: meno rotture e meno overstock",
      "Inventari più rapidi: audit più semplici e meno scostamenti",
      "Dati utili: decisioni basate sull’uso reale"
    ],
    "ctaTitle": "Tracciabilità semplice e utile",
    "ctaSub": "Condividi struttura, zone e categorie: proponiamo un piano progressivo e realistico.",
    "ctaBtn": "Contatta RFIDIA",
    "ctaAlt": "Torna alle soluzioni"
  }
};

export default buildSolution(theme, "/a_rfidia/z_medical/z_medical3.png", copy);
