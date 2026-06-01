import { buildSolution, makeTheme } from "../buildSolution";

const theme = makeTheme("#1E2A4A", "#4EC8C4", "#121727");
const copy = {
  "fr": {
    "metaTitle": "Solution École | RFIDIA",
    "metaDesc": "Sécurisez les parcours, maîtrisez le patrimoine pédagogique et simplifiez les inventaires grâce à la traçabilité RFID adaptée aux établissements scolaires.",
    "heroEyebrow": "Éducation & traçabilité",
    "heroTitleA": "Une école",
    "heroTitleB": "sereine",
    "heroTitleC": "Patrimoine pédagogique maîtrisé",
    "heroSub": "RFIDIA accompagne les établissements avec des dispositifs respectueux de la communauté éducative : sécurisation des accès, visibilité sur le matériel pédagogique et inventaires plus fiables — sans surcharge pour les équipes.",
    "heroCta1": "Échanger sur mon projet",
    "heroCta2": "Toutes les solutions",
    "kpis": [
      {
        "v": "100%",
        "l": "Parcours sécurisés"
      },
      {
        "v": "-40%",
        "l": "Écarts d’inventaire"
      },
      {
        "v": "x5",
        "l": "Relevés rapides"
      }
    ],
    "modulesTitle": "Ce que la solution peut couvrir",
    "modulesDesc": "Modules combinables selon votre maturité et vos infrastructures : pilote puis montée en charge maîtrisée.",
    "modules": [
      {
        "title": "Contrôle d’accès et flux",
        "desc": "Badges, lecteurs et règles horaires pour fluidifier les entrées-sorties et sécuriser les espaces sensibles."
      },
      {
        "title": "Inventaire & étiquetage RFID",
        "desc": "Identification unique des ressources, relevés mobiles rapides et réconciliation avec vos listes ou logiciels."
      },
      {
        "title": "Suivi des actifs pédagogiques",
        "desc": "Visibilité sur les attributions, les mouvements entre salles ou sites et l’historique pour limiter les pertes."
      },
      {
        "title": "Tableaux de bord sobres",
        "desc": "Indicateurs lisibles : état du parc, alertes utiles et exports pour vos reporting internes."
      },
      {
        "title": "Intégration SI",
        "desc": "Échanges contrôlés avec vos outils existants (référentiels, GMAO légère ou solutions métiers)."
      },
      {
        "title": "Formation & accompagnement",
        "desc": "Montée en compétence des équipes, documentation claire et support pour ancrer les usages dans la durée."
      }
    ],
    "journeyTitle": "Un déploiement structuré, sans surprise",
    "journeyDesc": "Quatre étapes éprouvées pour avancer avec clarté et mesurer les bénéfices sur le terrain.",
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
    "proofTitle": "Où cela fait la différence",
    "proofDesc": "Des contextes concrets où nos clients gagnent en sérénité opérationnelle au quotidien.",
    "proofs": [
      "Collèges, lycées et campus : circulations aux heures de pointe et espaces mutualisés.",
      "Bibliothèques et médiathèques : prêts, collections mobiles et inventaires cycliques plus rapides.",
      "Ateliers, laboratoires et salles techniques : équipements sensibles suivis avec précision.",
      "Internats et résidences : gestion des accès et des ressources partagées selon vos protocoles."
    ],
    "ctaTitle": "Présentez-nous votre établissement",
    "ctaSub": "Nous vous répondons avec une vision réaliste : objectifs, calendrier et périmètre adaptés à votre communauté scolaire.",
    "ctaBtn": "Contacter RFIDIA",
    "ctaAlt": "Retour à l’accueil solutions"
  },
  "en": {
    "metaTitle": "School Solution | RFIDIA",
    "metaDesc": "Secure journeys, master educational assets and streamline inventories with RFID traceability designed for schools and campuses.",
    "heroEyebrow": "Education & traceability",
    "heroTitleA": "A calmer school",
    "heroTitleB": "environment",
    "heroTitleC": "with educational assets under control",
    "heroSub": "RFIDIA supports schools with respectful, field-proven approaches: access security, visibility on teaching equipment and more reliable inventories — without burdening staff.",
    "heroCta1": "Discuss my project",
    "heroCta2": "All solutions",
    "kpis": [
      {
        "v": "100%",
        "l": "Safer journeys"
      },
      {
        "v": "-40%",
        "l": "Inventory gaps"
      },
      {
        "v": "x5",
        "l": "Fast counts"
      }
    ],
    "modulesTitle": "What the solution can cover",
    "modulesDesc": "Composable modules based on your maturity: we favour pilot phases and controlled scale-up.",
    "modules": [
      {
        "title": "Access & flow control",
        "desc": "Badges, readers and time rules to smooth entries and exits and secure spaces that require it."
      },
      {
        "title": "RFID labeling & inventory",
        "desc": "Unique resource IDs, mobile fast counts and reconciliation with your lists or management tools."
      },
      {
        "title": "Teaching asset tracking",
        "desc": "Visibility on assignments, moves between rooms or sites and history to limit losses."
      },
      {
        "title": "Clear dashboards",
        "desc": "Readable indicators for teams: fleet status, meaningful alerts and exports for internal reporting."
      },
      {
        "title": "Systems integration",
        "desc": "Controlled exchanges with your existing stack (directories, lightweight CMMS or business tools)."
      },
      {
        "title": "Training & support",
        "desc": "Skills building, clear documentation and support to sustain adoption over time."
      }
    ],
    "journeyTitle": "Structured rollout, no surprises",
    "journeyDesc": "Four proven steps to move forward with clarity and measure benefits.",
    "journey": [
      {
        "n": "01",
        "t": "Discovery & scoping",
        "d": "Workshops with your teams, priorities, compliance and functional perimeter."
      },
      {
        "n": "02",
        "t": "Design & pilot",
        "d": "Technical architecture, RFID media choices and pilot on a site or building."
      },
      {
        "n": "03",
        "t": "Deployment & integration",
        "d": "Supervised installation, configuration, connections as needed and validation in real conditions."
      },
      {
        "n": "04",
        "t": "Adoption & improvement",
        "d": "Training, support, follow-up metrics and refinements for long-term usage."
      }
    ],
    "proofTitle": "Where it matters most",
    "proofDesc": "Typical contexts where schools gain operational peace of mind.",
    "proofs": [
      "Middle schools, high schools and campuses: peak-time circulation and shared facilities.",
      "Libraries and media centers: loans, mobile collections and faster cyclical inventories.",
      "Workshops, labs and technical rooms: sensitive or high-value equipment tracked with precision.",
      "Boarding and residences: access and shared resources aligned with your protocols."
    ],
    "ctaTitle": "Tell us about your institution",
    "ctaSub": "We respond with a realistic view: goals, timeline and scope suited to your school community.",
    "ctaBtn": "Contact RFIDIA",
    "ctaAlt": "Back to solutions hub"
  },
  "it": {
    "metaTitle": "Soluzione Scuola | RFIDIA",
    "metaDesc": "Percorsi più sicuri, patrimonio didattico sotto controllo e inventari semplificati con tracciabilità RFID per istituti scolastici.",
    "heroEyebrow": "Istruzione & tracciabilità",
    "heroTitleA": "Un ambiente scolastico più",
    "heroTitleB": "sereno",
    "heroTitleC": "e un patrimonio didattico più controllato",
    "heroSub": "RFIDIA affianca gli istituti con approcci rispettosi e concreti: sicurezza degli accessi, visibilità sul materiale didattico e inventari più affidabili — senza appesantire il personale.",
    "heroCta1": "Parliamo del progetto",
    "heroCta2": "Tutte le soluzioni",
    "kpis": [
      {
        "v": "100%",
        "l": "Percorsi sicuri"
      },
      {
        "v": "-40%",
        "l": "Gap inventario"
      },
      {
        "v": "x5",
        "l": "Rilevazioni rapide"
      }
    ],
    "modulesTitle": "Cosa può coprire la soluzione",
    "modulesDesc": "Moduli combinabili in base alla maturità: privilegiamo pilota e scalabilità controllata.",
    "modules": [
      {
        "title": "Controllo accessi e flussi",
        "desc": "Badge, lettori e regole orarie per fluidificare entrate/uscite e proteggere gli spazi necessari."
      },
      {
        "title": "Etichettatura RFID e inventario",
        "desc": "Identificazione univoca, rilevazioni mobili veloci e riconciliazione con elenchi o gestionali."
      },
      {
        "title": "Monitoraggio asset didattici",
        "desc": "Visibilità su assegnazioni, spostamenti tra aule o sedi e storico per limitare le perdite."
      },
      {
        "title": "Dashboard chiare",
        "desc": "Indicatori leggibili: stato parco, alert significativi ed export per reporting interno."
      },
      {
        "title": "Integrazione IT",
        "desc": "Scambi controllati con gli strumenti esistenti (anagrafiche, GMAO leggera o applicazioni di settore)."
      },
      {
        "title": "Formazione e supporto",
        "desc": "Aggiornamento del personale, documentazione chiara e assistenza per radicare gli usi nel tempo."
      }
    ],
    "journeyTitle": "Un rollout strutturato",
    "journeyDesc": "Quattro fasi per avanzare con chiarezza e misurare i benefici sul campo.",
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
    "proofTitle": "Dove fa la differenza",
    "proofDesc": "Contesti tipici in cui si guadagna serenità operativa.",
    "proofs": [
      "Scuole secondarie e campus: circolazione nelle ore di punta e spazi condivisi.",
      "Biblioteche e mediateche: prestiti, collezioni mobili e inventari ciclici più rapidi.",
      "Laboratori e aule tecniche: attrezzature sensibili tracciate con precisione.",
      "Convitti e residenze: accessi e risorse condivise secondo i protocolli."
    ],
    "ctaTitle": "Presentate il vostro istituto",
    "ctaSub": "Rispondiamo con obiettivi, calendario e perimetro adatti alla vostra comunita scolastica.",
    "ctaBtn": "Contatta RFIDIA",
    "ctaAlt": "Torna alle soluzioni"
  }
};

export default buildSolution(theme, "/a_rfidia/z_school/school.png", copy);
