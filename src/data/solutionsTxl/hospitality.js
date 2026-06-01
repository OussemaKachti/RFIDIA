import { buildSolution, makeTheme } from "../buildSolution";

const theme = makeTheme("#7B5EA7", "#B794D4", "#5C3D7A", "#F8F5FC");
const copy = {
  "fr": {
    "metaTitle": "Solution Hôtellerie | RFIDIA",
    "metaDesc": "Expérience client fluide, opérations maîtrisées : traçabilité RFID et automatisation pour l’hôtellerie (linge, équipements, accès, maintenance).",
    "heroEyebrow": "Hôtellerie • Excellence opérationnelle",
    "heroTitleA": "Des opérations",
    "heroTitleB": "invisibles",
    "heroTitleC": "pour un service remarquable",
    "heroSub": "RFIDIA aide les hôtels à gagner en qualité et en rapidité : gestion du linge, traçabilité des équipements, inventaires rapides et indicateurs utiles — avec un déploiement discret, pensé pour l’expérience client.",
    "heroCta1": "Parler à un expert",
    "heroCta2": "Voir toutes les solutions",
    "kpis": [
      {
        "v": "-30%",
        "l": "Temps d’inventaire"
      },
      {
        "v": "+25%",
        "l": "Disponibilité du linge"
      },
      {
        "v": "-40%",
        "l": "Pertes & écarts"
      }
    ],
    "modulesTitle": "Une solution pensée pour le terrain",
    "modulesDesc": "Une approche hôtelière : des process simples, une visibilité immédiate, et une intégration progressive.",
    "modules": [
      {
        "title": "Linge & blanchisserie",
        "desc": "Suivi des cycles, contrôle des sorties/retours, amélioration de la disponibilité et réduction des pertes."
      },
      {
        "title": "Équipements & minibar",
        "desc": "Traçabilité des équipements mobiles, rationalisation des stocks et alertes utiles sur les manquants."
      },
      {
        "title": "Accès & zones sensibles",
        "desc": "Contrôle d’accès selon les rôles, journalisation, et conformité pour les espaces techniques."
      },
      {
        "title": "Maintenance & interventions",
        "desc": "Historique des mouvements, suivi des interventions, et visibilité sur l’état du parc d’équipements."
      }
    ],
    "journeyTitle": "Du détail au pilotage",
    "journeyDesc": "Une chaîne simple, sans friction, pour améliorer l’efficacité sans perturber les opérations.",
    "journey": [
      {
        "n": "01",
        "t": "Identifier",
        "d": "Étiquetage RFID et référentiel des actifs (linge, équipements, zones)."
      },
      {
        "n": "02",
        "t": "Lire",
        "d": "Lectures mobiles ou points fixes selon vos flux (étages, lingerie, quais)."
      },
      {
        "n": "03",
        "t": "Contrôler",
        "d": "Règles & contrôles : complétude, anomalies, alertes utiles."
      },
      {
        "n": "04",
        "t": "Décider",
        "d": "Tableaux de bord clairs : stocks, disponibilités, écarts, tendances."
      }
    ],
    "proofTitle": "Pourquoi ça marche dans l’hôtellerie",
    "proofDesc": "On optimise ce qui compte : disponibilité, qualité de service, et tranquillité opérationnelle.",
    "proofs": [
      "Process discrets, sans impact sur le client",
      "Données exploitables par les équipes (Housekeeping, F&B, Maintenance)",
      "Inventaires rapides et réconciliation fiable",
      "Montée en charge progressive (pilot → déploiement)"
    ],
    "ctaTitle": "Construisons une expérience opérationnelle premium",
    "ctaSub": "Partagez votre typologie d’hôtel, vos volumes linge et vos flux : nous proposons un plan clair, réaliste et adapté.",
    "ctaBtn": "Contactez RFIDIA",
    "ctaAlt": "Retour à l’accueil solutions"
  },
  "en": {
    "metaTitle": "Hospitality Solution | RFIDIA",
    "metaDesc": "Smooth guest experience, controlled operations: RFID traceability & automation for hospitality (linen, equipment, access, maintenance).",
    "heroEyebrow": "Hospitality • Operational excellence",
    "heroTitleA": "Invisible",
    "heroTitleB": "operations",
    "heroTitleC": "for remarkable service",
    "heroSub": "RFIDIA helps hotels improve quality and speed: linen management, equipment traceability, faster inventories and clear KPIs — with a discreet rollout designed around the guest experience.",
    "heroCta1": "Talk to an expert",
    "heroCta2": "All solutions",
    "kpis": [
      {
        "v": "-30%",
        "l": "Inventory time"
      },
      {
        "v": "+25%",
        "l": "Linen availability"
      },
      {
        "v": "-40%",
        "l": "Losses & gaps"
      }
    ],
    "modulesTitle": "Designed for real hotel operations",
    "modulesDesc": "A hospitality-first approach: simple processes, instant visibility and progressive integration.",
    "modules": [
      {
        "title": "Linen & laundry",
        "desc": "Track cycles, control outbound/returns, improve availability and reduce losses."
      },
      {
        "title": "Equipment & minibar",
        "desc": "Trace mobile equipment, rationalize stocks and trigger helpful missing-item alerts."
      },
      {
        "title": "Access & sensitive areas",
        "desc": "Role-based access control, logging and compliance for technical spaces."
      },
      {
        "title": "Maintenance & interventions",
        "desc": "Movement history, intervention tracking and visibility on equipment fleet status."
      }
    ],
    "journeyTitle": "From details to control",
    "journeyDesc": "A simple chain that improves efficiency without disrupting daily operations.",
    "journey": [
      {
        "n": "01",
        "t": "Identify",
        "d": "RFID labeling and master data for assets (linen, equipment, zones)."
      },
      {
        "n": "02",
        "t": "Read",
        "d": "Mobile reads or fixed points depending on your flows (floors, laundry, docks)."
      },
      {
        "n": "03",
        "t": "Control",
        "d": "Rules & checks: completeness, anomalies, meaningful alerts."
      },
      {
        "n": "04",
        "t": "Decide",
        "d": "Clean dashboards: stocks, availability, gaps and trends."
      }
    ],
    "proofTitle": "Why it fits hospitality",
    "proofDesc": "We optimize what matters: availability, service quality and operational peace of mind.",
    "proofs": [
      "Discreet processes with no guest impact",
      "Actionable data for teams (Housekeeping, F&B, Maintenance)",
      "Fast inventories and reliable reconciliation",
      "Progressive scale-up (pilot → rollout)"
    ],
    "ctaTitle": "Let’s build premium operations",
    "ctaSub": "Share your hotel profile, linen volumes and flows — we’ll provide a clear, realistic plan.",
    "ctaBtn": "Contact RFIDIA",
    "ctaAlt": "Back to solutions hub"
  },
  "it": {
    "metaTitle": "Soluzione Ospitalità | RFIDIA",
    "metaDesc": "Esperienza ospite fluida, operazioni sotto controllo: tracciabilità RFID e automazione per ospitalità (biancheria, attrezzature, accessi, manutenzione).",
    "heroEyebrow": "Ospitalità • Eccellenza operativa",
    "heroTitleA": "Operazioni",
    "heroTitleB": "invisibili",
    "heroTitleC": "per un servizio eccellente",
    "heroSub": "RFIDIA aiuta gli hotel a migliorare qualità e velocità: gestione biancheria, tracciabilità attrezzature, inventari rapidi e KPI chiari — con rollout discreto pensato per l’esperienza ospite.",
    "heroCta1": "Parla con un esperto",
    "heroCta2": "Tutte le soluzioni",
    "kpis": [
      {
        "v": "-30%",
        "l": "Tempo inventario"
      },
      {
        "v": "+25%",
        "l": "Disponibilità biancheria"
      },
      {
        "v": "-40%",
        "l": "Perdite & gap"
      }
    ],
    "modulesTitle": "Pensata per le operations",
    "modulesDesc": "Approccio hospitality-first: processi semplici, visibilità immediata e integrazione progressiva.",
    "modules": [
      {
        "title": "Biancheria & lavanderia",
        "desc": "Traccia i cicli, controlla uscite/rientri, migliora disponibilità e riduci perdite."
      },
      {
        "title": "Attrezzature & minibar",
        "desc": "Tracciamento attrezzature mobili, razionalizzazione stock e alert su mancanze."
      },
      {
        "title": "Accessi & aree sensibili",
        "desc": "Controllo accessi per ruoli, log e conformità per aree tecniche."
      },
      {
        "title": "Manutenzione & interventi",
        "desc": "Storico movimenti, tracking interventi e visibilità sul parco attrezzature."
      }
    ],
    "journeyTitle": "Dal dettaglio al controllo",
    "journeyDesc": "Una catena semplice per aumentare efficienza senza interrompere le attività quotidiane.",
    "journey": [
      {
        "n": "01",
        "t": "Identifica",
        "d": "Etichettatura RFID e anagrafiche asset (biancheria, attrezzature, zone)."
      },
      {
        "n": "02",
        "t": "Leggi",
        "d": "Letture mobili o punti fissi secondo i flussi (piani, lavanderia, dock)."
      },
      {
        "n": "03",
        "t": "Controlla",
        "d": "Regole e check: completezza, anomalie, alert utili."
      },
      {
        "n": "04",
        "t": "Decidi",
        "d": "Dashboard chiare: stock, disponibilità, gap e trend."
      }
    ],
    "proofTitle": "Perché funziona in hotel",
    "proofDesc": "Ottimizziamo ciò che conta: disponibilità, qualità servizio e serenità operativa.",
    "proofs": [
      "Processi discreti, senza impatto sull’ospite",
      "Dati utili per i team (Housekeeping, F&B, Maintenance)",
      "Inventari rapidi e riconciliazione affidabile",
      "Scalabilità progressiva (pilot → rollout)"
    ],
    "ctaTitle": "Costruiamo operations premium",
    "ctaSub": "Condividi profilo hotel, volumi biancheria e flussi: proponiamo un piano chiaro e realistico.",
    "ctaBtn": "Contatta RFIDIA",
    "ctaAlt": "Torna alle soluzioni"
  }
};

export default buildSolution(theme, "/a_rfidia/hotellerie.png", copy);
