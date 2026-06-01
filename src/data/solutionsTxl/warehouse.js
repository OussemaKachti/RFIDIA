import { buildSolution, makeTheme } from "../buildSolution";

const theme = makeTheme("#E8856A", "#F4B89A", "#B85A42", "#FFF5F2");
const copy = {
  "fr": {
    "metaTitle": "Système Entrepôt & Logistique | RFIDIA",
    "metaDesc": "Inventaire en temps réel, automatisation des quais de réception/expédition et pilotage des flux logistiques grâce à la technologie RFID industrielle.",
    "heroEyebrow": "Logistique • Traçabilité & temps réel",
    "heroTitleA": "Entrepôt",
    "heroTitleB": "connecté",
    "heroTitleC": "Flux automatisés, zéro erreur",
    "heroSub": "RFIDIA transforme la gestion de votre entrepôt grâce à des portiques RFID et des terminaux mobiles de pointe. Accélérez vos réceptions, fiabilisez vos expéditions et réalisez vos inventaires en un temps record sans bloquer votre exploitation.",
    "heroCta1": "Obtenir une démo",
    "heroCta2": "Toutes les solutions",
    "kpis": [
      {
        "v": "x10",
        "l": "Vitesse d'inventaire"
      },
      {
        "v": "99.9%",
        "l": "Fiabilité expéditions"
      },
      {
        "v": "-50%",
        "l": "Temps de recherche"
      }
    ],
    "modulesTitle": "Des modules conçus pour l'excellence logistique",
    "modulesDesc": "Une couverture complète de vos processus d'entrepôt pour maximiser votre productivité et éliminer les litiges clients.",
    "modules": [
      {
        "title": "Réception automatisée (Quais RFID)",
        "desc": "Lecture instantanée et sans contact des palettes et cartons dès leur passage à quai, avec rapprochement automatique des commandes."
      },
      {
        "title": "Gestion dynamique des emplacements",
        "desc": "Suivi précis de la localisation des palettes et conteneurs pour optimiser l'espace de stockage et réduire les temps de recherche."
      },
      {
        "title": "Inventaire tournant ultra-rapide",
        "desc": "Réalisation d'inventaires fréquents via des terminaux mobiles RFID sans interruption de l'activité logistique."
      },
      {
        "title": "Contrôle d'expédition 100% fiable",
        "desc": "Vérification instantanée de la conformité des chargements avant le départ du camion pour éradiquer les erreurs de livraison."
      },
      {
        "title": "Suivi des supports de manutention",
        "desc": "Traçabilité unitaire de vos palettes, rolls, bacs et conteneurs consignés pour éviter les pertes et optimiser les rotations."
      },
      {
        "title": "Intégration WMS & ERP fluide",
        "desc": "Interfaçage standardisé avec vos systèmes existants (SAP, Manhattan, Reflex, Oracle) pour un pilotage centralisé en temps réel."
      }
    ],
    "journeyTitle": "Un déploiement maîtrisé, un ROI rapide",
    "journeyDesc": "Une méthodologie éprouvée pour digitaliser vos entrepôts sans perturber vos opérations quotidiennes.",
    "journey": [
      {
        "n": "01",
        "t": "Audit & Étude de site",
        "d": "Analyse de vos flux, contraintes métalliques/environnementales et définition de l'architecture matérielle RFID."
      },
      {
        "n": "02",
        "t": "Installation & Paramétrage",
        "d": "Mise en place des portiques de quai, antennes et configuration des terminaux mobiles selon vos processus."
      },
      {
        "n": "03",
        "t": "Interfaçage WMS / ERP",
        "d": "Connexion sécurisée de notre middleware RFIDIA avec votre système d'information pour la remontée automatique des données."
      },
      {
        "n": "04",
        "t": "Formation & Exploitation",
        "d": "Accompagnement de vos caristes et opérateurs pour une prise en main immédiate et un pilotage autonome."
      }
    ],
    "proofTitle": "Pourquoi les directeurs logistiques nous choisissent",
    "proofDesc": "Parce que l'automatisation RFID apporte une transparence totale et supprime les goulots d'étranglement.",
    "proofs": [
      "Élimination des pénalités clients grâce au contrôle infaillible des expéditions.",
      "Gain de productivité majeur sur les quais de déchargement et de chargement.",
      "Fiabilité absolue des stocks évitant les ruptures et les surstockages de sécurité.",
      "Visibilité en temps réel sur l'ensemble de la chaîne d'approvisionnement."
    ],
    "ctaTitle": "Prêt à moderniser votre plateforme logistique ?",
    "ctaSub": "Partagez avec nos ingénieurs la configuration de votre entrepôt et le volume de vos expéditions pour recevoir une étude personnalisée.",
    "ctaBtn": "Contactez un expert RFIDIA",
    "ctaAlt": "Retour à l'accueil solutions"
  },
  "en": {
    "metaTitle": "Warehouse System & Logistics | RFIDIA",
    "metaDesc": "Real-time inventory, automated dock doors, and streamlined logistics flow using industrial RFID technology.",
    "heroEyebrow": "Logistics • Traceability & Real-Time",
    "heroTitleA": "A connected",
    "heroTitleB": "warehouse",
    "heroTitleC": "for automated and error-free workflows",
    "heroSub": "RFIDIA transforms your warehouse management through industrial RFID portals and advanced mobile terminals. Speed up receiving, ensure 100% shipping accuracy, and perform inventories in record time without stopping operations.",
    "heroCta1": "Get a demo",
    "heroCta2": "All solutions",
    "kpis": [
      {
        "v": "x10",
        "l": "Inventory speed"
      },
      {
        "v": "99.9%",
        "l": "Shipping accuracy"
      },
      {
        "v": "-50%",
        "l": "Search time"
      }
    ],
    "modulesTitle": "Modules built for logistics excellence",
    "modulesDesc": "Comprehensive coverage of your warehouse processes to maximize productivity and eliminate shipping disputes.",
    "modules": [
      {
        "title": "Automated Receiving (RFID Docks)",
        "desc": "Instant, contactless reading of pallets and cartons as they pass through dock doors, with automated PO matching."
      },
      {
        "title": "Dynamic Location Management",
        "desc": "Accurate tracking of pallet and container locations to optimize storage space and minimize search times."
      },
      {
        "title": "Ultra-Fast Cycle Counts",
        "desc": "Frequent inventory audits using RFID mobile terminals without disrupting daily warehouse activity."
      },
      {
        "title": "100% Reliable Shipping Control",
        "desc": "Instant load verification before the truck leaves the dock to eradicate delivery errors and penalties."
      },
      {
        "title": "Returnable Transport Item Tracking",
        "desc": "Unit tracking of pallets, roll cages, totes, and containers to prevent losses and optimize rotation."
      },
      {
        "title": "Seamless WMS & ERP Integration",
        "desc": "Standardized interfacing with your existing systems (SAP, Manhattan, Reflex, Oracle) for real-time central management."
      }
    ],
    "journeyTitle": "Controlled rollout, rapid ROI",
    "journeyDesc": "A proven methodology to digitalize your warehouse without disrupting daily operations.",
    "journey": [
      {
        "n": "01",
        "t": "Audit & Site Survey",
        "d": "Analysis of your material flows, environmental constraints, and definition of the optimal RFID hardware architecture."
      },
      {
        "n": "02",
        "t": "Installation & Setup",
        "d": "Deployment of dock portals, antennas, and configuration of mobile readers tailored to your standard operating procedures."
      },
      {
        "n": "03",
        "t": "WMS / ERP Interfacing",
        "d": "Secure connection of our RFIDIA middleware with your IT system for automated data synchronization."
      },
      {
        "n": "04",
        "t": "Training & Operation",
        "d": "Hands-on training for forklift drivers and warehouse staff for immediate adoption and autonomous management."
      }
    ],
    "proofTitle": "Why logistics directors choose us",
    "proofDesc": "Because RFID automation provides total transparency and eliminates operational bottlenecks.",
    "proofs": [
      "Elimination of customer penalties through infallible shipping verification.",
      "Major productivity gains at receiving and shipping docks.",
      "Absolute stock accuracy preventing stockouts and excess safety buffer stock.",
      "Real-time visibility across the entire supply chain operations."
    ],
    "ctaTitle": "Ready to modernize your logistics platform?",
    "ctaSub": "Share your warehouse configuration and shipping volumes with our engineers to receive a customized study.",
    "ctaBtn": "Contact an RFIDIA expert",
    "ctaAlt": "Back to solutions hub"
  },
  "it": {
    "metaTitle": "Sistema Magazzino & Logistica | RFIDIA",
    "metaDesc": "Inventario in tempo reale, automazione delle baie di carico e gestione dei flussi logistici con tecnologia RFID industriale.",
    "heroEyebrow": "Logistica • Tracciabilità & Tempo Reale",
    "heroTitleA": "Un magazzino",
    "heroTitleB": "connesso",
    "heroTitleC": "per flussi automatizzati e senza errori",
    "heroSub": "RFIDIA trasforma la gestione del tuo magazzino attraverso varchi RFID industriali e terminali mobili avanzati. Accelera le ricezioni, garantisci l'accuratezza delle spedizioni al 100% ed esegui inventari a tempo di record senza interrompere l'attività.",
    "heroCta1": "Richiedi una demo",
    "heroCta2": "Tutte le soluzioni",
    "kpis": [
      {
        "v": "x10",
        "l": "Velocità inventario"
      },
      {
        "v": "99.9%",
        "l": "Accuratezza spedizioni"
      },
      {
        "v": "-50%",
        "l": "Tempo di ricerca"
      }
    ],
    "modulesTitle": "Moduli progettati per l'eccellenza logistica",
    "modulesDesc": "Copertura completa dei processi di magazzino per massimizzare la produttività ed eliminare i contenziosi con i clienti.",
    "modules": [
      {
        "title": "Ricezione automatizzata (Baie RFID)",
        "desc": "Lettura istantanea e senza contatto di pallet e cartoni al passaggio dal varco, con riconciliazione automatica degli ordini."
      },
      {
        "title": "Gestione dinamica delle ubicazioni",
        "desc": "Tracciamento accurato della posizione di pallet e contenitori per ottimizzare lo spazio di stoccaggio e ridurre i tempi di ricerca."
      },
      {
        "title": "Inventari rotativi ultra-rapidi",
        "desc": "Audit di inventario frequenti tramite terminali mobili RFID senza interrompere l'attività logistica quotidiana."
      },
      {
        "title": "Controllo spedizioni 100% affidabile",
        "desc": "Verifica istantanea del carico prima della partenza del camion per sradicare errori di consegna e penali."
      },
      {
        "title": "Tracciamento supporti logistici (RTI)",
        "desc": "Tracciabilità unitaria di pallet, roll container, cassette e contenitori a rendere per evitare perdite e ottimizzare la rotazione."
      },
      {
        "title": "Integrazione WMS & ERP fluida",
        "desc": "Interfacciamento standardizzato con i sistemi esistenti (SAP, Manhattan, Reflex, Oracle) per una gestione centralizzata in tempo reale."
      }
    ],
    "journeyTitle": "Rollout controllato, ROI rapido",
    "journeyDesc": "Una metodologia collaudata per digitalizzare i tuoi magazzini senza interrompere le normali operazioni.",
    "journey": [
      {
        "n": "01",
        "t": "Audit & Site Survey",
        "d": "Analisi dei flussi, vincoli ambientali e definizione dell'architettura hardware RFID ottimale."
      },
      {
        "n": "02",
        "t": "Installazione & Setup",
        "d": "Posa di portali di banchina, antenne e configurazione dei lettori mobili secondo le procedure operative."
      },
      {
        "n": "03",
        "t": "Interfacciamento WMS / ERP",
        "d": "Connessione sicura del nostro middleware RFIDIA con il tuo sistema informatico per la sincronizzazione automatica dei dati."
      },
      {
        "n": "04",
        "t": "Formazione & Gestione",
        "d": "Formazione pratica per carrellisti e operatori per un'adozione immediata e una gestione autonoma."
      }
    ],
    "proofTitle": "Perché i direttori logistici ci scelgono",
    "proofDesc": "Perché l'automazione RFID offre una trasparencia totale ed elimina i colli di bottiglia operativi.",
    "proofs": [
      "Eliminazione delle penali dei clienti grazie alla verifica infallibile delle spedizioni.",
      "Notevoli guadagni di produttività sulle banchine di carico e scarico.",
      "Assoluta precisione delle scorte che evita rotture di stock e scorte di sicurezza in eccesso.",
      "Visibilità in tempo reale sull'intera catena di approvvigionamento."
    ],
    "ctaTitle": "Pronto a modernizzare la tua piattaforma logistica?",
    "ctaSub": "Condividi la configurazione del tuo magazzino e i volumi di spedizione con i nostri ingegneri per ricevere uno studio personalizzato.",
    "ctaBtn": "Contatta un esperto RFIDIA",
    "ctaAlt": "Torna alle soluzioni"
  }
};

export default buildSolution(theme, "/a_rfidia/z_logistique/z_logistique.png", copy);
