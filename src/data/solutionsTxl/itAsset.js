import { buildSolution, makeTheme } from "../buildSolution";

const theme = makeTheme("#6366F1", "#A5B4FC", "#3730A3");

const copy = {
  fr: {
    metaTitle: "RFID IT Asset Management | RFIDIA",
    metaDesc:
      "Fini les laptops perdus et les audits ITAM qui s'eternisent : RFIDIA digitalise le parc informatique en temps reel, pour des DSI sereins et un CMDB fiable.",
    heroEyebrow: "IT Asset Management • Parc IT, audit, securite",
    heroTitleA: "Votre parc IT",
    heroTitleB: "audite",
    heroTitleC: "en quelques heures",
    heroSub:
      "Laptops, ecrans, smartphones, serveurs, peripheriques : RFIDIA equipe vos actifs IT pour rendre l'inventaire continu, automatique et fiable — sans alourdir vos equipes ni vos utilisateurs.",
    heroCta1: "Auditer mon parc IT",
    heroCta2: "Voir toutes les solutions",
    kpis: [
      { v: "+95%", l: "Precision parc IT" },
      { v: "-90%", l: "Duree d'audit ITAM" },
      { v: "0", l: "Materiel perdu" },
    ],
    modulesTitle: "Un ITAM enfin reellement sous controle",
    modulesDesc:
      "Six leviers pour fiabiliser l'inventaire, fluidifier l'attribution et securiser les actifs sensibles, sans changer vos outils ITSM.",
    modules: [
      { title: "Attribution & restitution", desc: "Onboarding et offboarding fluides : equipements remis, restitues et verifies avec preuve numerique." },
      { title: "Audits physiques rapides", desc: "Inventaire global en quelques heures via lecteurs portables, sans manipuler chaque poste." },
      { title: "Localisation & mouvements", desc: "Comprendre la realite : ou se trouvent vraiment les actifs et qui les a utilises recemment." },
      { title: "Anti-perte & alertes", desc: "Detection des sorties non autorisees aux acces sensibles, alertes sur deplacements anormaux." },
      { title: "Synchronisation ITSM/CMDB", desc: "Connecteurs ServiceNow, GLPI, Jira, Excel : la realite physique alimente votre source de verite." },
      { title: "Stocks & reconditionnement", desc: "Reception fournisseur, deploiement, reparation, reaffectation : tout le cycle de vie est trace." },
    ],
    journeyTitle: "De l'audit pilote au programme ITAM continu",
    journeyDesc:
      "Nous demarrons par un POC court sur une population ciblee, puis nous etendons sans interrompre l'IT.",
    journey: [
      { n: "01", t: "Cadrage parc", d: "Categorisation des actifs, sites, populations cibles et choix de la procedure de tagging." },
      { n: "02", t: "POC ITAM", d: "Etiquetage cible, lecteurs portables et reconciliation avec votre CMDB sur 4 a 6 semaines." },
      { n: "03", t: "Roll-out par site", d: "Generalisation a l'ensemble du parc, formation des equipes IT et procedures d'onboarding/offboarding." },
      { n: "04", t: "ITAM continu", d: "Inventaires recurrents, alertes, reporting CFO/CIO et evolution des cas d'usage." },
    ],
    proofTitle: "Contextes ou la valeur saute aux yeux",
    proofDesc: "Quelques environnements ou la RFID change concretement la gestion du parc IT.",
    proofs: [
      "Sieges et grands tertiaires : milliers de laptops et ecrans suivis sans perturber les utilisateurs.",
      "Universites, ecoles et campus : materiel pedagogique partage trace par utilisateur.",
      "Banques, assurances, telecoms : conformite SOX/ISO et reduction des actifs hors CMDB.",
      "Administrations et secteur public : preuves d'inventaire pour audits internes et tutelles.",
    ],
    ctaTitle: "Reprenons le controle de votre parc IT",
    ctaSub:
      "Indiquez-nous la taille de votre parc, vos sites et votre outil ITSM — nous proposons un POC mesurable et un ROI documente.",
    ctaBtn: "Contactez RFIDIA",
    ctaAlt: "Retour aux solutions",
    applicationsTitle: "Applications RFID pour le parc IT",
    applicationsDesc: "Six cas d'usage qui transforment la gestion du parc, sans changer vos outils ITSM.",
    applications: [
      { title: "Onboarding & offboarding", desc: "Attribution, restitution et verification avec preuve numerique horodatee." },
      { title: "Audit physique annuel", desc: "Audit complet de plusieurs milliers d'actifs en une seule journee, lecteurs portables." },
      { title: "Detection des sorties", desc: "Alertes en cas de sortie non autorisee d'actif IT par les acces sensibles." },
      { title: "Mouvements entre sites", desc: "Tracabilite des transferts inter-sites et inter-departements en temps reel." },
      { title: "Reconditionnement & SAV", desc: "Cycle complet : retour, reparation, reaffectation et mise au rebut tracee." },
      { title: "Salles serveurs & data center", desc: "Inventaire automatise des serveurs, switches et stockages amovibles." },
    ],
    verticalsTitle: "Organisations qui nous font confiance",
    verticalsDesc: "Du siege de grand groupe aux campus universitaires, la RFID s'adapte a chaque maturite ITAM.",
    verticals: [
      { name: "Sieges et grands tertiaires", desc: "Milliers de laptops et ecrans." },
      { name: "Banques et assurances", desc: "Conformite SOX/ISO et auditabilite." },
      { name: "Telecoms", desc: "Equipements reseau distribues." },
      { name: "Universites & campus", desc: "Materiel pedagogique partage." },
      { name: "Administrations publiques", desc: "Preuves d'inventaire pour tutelles." },
      { name: "Industrie & retail", desc: "Terminaux mobiles et imprimantes." },
    ],
  },
  en: {
    metaTitle: "RFID in IT Asset Management | RFIDIA",
    metaDesc:
      "No more lost laptops and endless ITAM audits: RFIDIA digitises the IT fleet in real time, for calm IT teams and a reliable CMDB.",
    heroEyebrow: "IT Asset Management • Fleet, audit, security",
    heroTitleA: "Your IT fleet",
    heroTitleB: "audited",
    heroTitleC: "in hours, not weeks",
    heroSub:
      "Laptops, screens, smartphones, servers, peripherals: RFIDIA equips IT assets so inventory becomes continuous, automatic and reliable — without burdening your teams or your users.",
    heroCta1: "Assess my IT fleet",
    heroCta2: "All solutions",
    kpis: [
      { v: "+95%", l: "IT fleet accuracy" },
      { v: "-90%", l: "ITAM audit duration" },
      { v: "0", l: "Lost equipment" },
    ],
    modulesTitle: "ITAM truly under control",
    modulesDesc:
      "Six levers to make inventory reliable, smooth assignments and protect sensitive assets, without changing your ITSM tools.",
    modules: [
      { title: "Assignment & return", desc: "Smooth onboarding and offboarding: equipment given, returned and checked with digital proof." },
      { title: "Fast physical audits", desc: "Full inventory in hours via handheld readers, without touching each workstation." },
      { title: "Location & movements", desc: "Understand reality: where assets really are and who used them recently." },
      { title: "Loss prevention & alerts", desc: "Detect unauthorised exits at sensitive doors, alerts on abnormal movements." },
      { title: "ITSM/CMDB sync", desc: "Connectors for ServiceNow, GLPI, Jira, Excel: physical reality feeds your source of truth." },
      { title: "Stock & refurbishment", desc: "Supplier reception, deployment, repair, reassignment: the whole lifecycle is tracked." },
    ],
    journeyTitle: "From pilot audit to continuous ITAM program",
    journeyDesc:
      "We start with a short POC on a targeted population, then extend without interrupting IT.",
    journey: [
      { n: "01", t: "Fleet scoping", d: "Asset categorisation, sites, target populations and tagging procedure choice." },
      { n: "02", t: "ITAM POC", d: "Targeted tagging, handheld readers and CMDB reconciliation over 4-6 weeks." },
      { n: "03", t: "Site rollout", d: "Generalisation to the full fleet, IT team training and onboarding/offboarding procedures." },
      { n: "04", t: "Continuous ITAM", d: "Recurring inventories, alerts, CFO/CIO reporting and evolving use cases." },
    ],
    proofTitle: "Where value shows up immediately",
    proofDesc: "A few environments where RFID concretely changes IT fleet management.",
    proofs: [
      "Headquarters and large offices: thousands of laptops and screens tracked without disturbing users.",
      "Universities, schools and campuses: shared educational hardware tracked per user.",
      "Banks, insurance, telecoms: SOX/ISO compliance and lower out-of-CMDB assets.",
      "Administrations and public sector: inventory proofs for internal and supervisory audits.",
    ],
    ctaTitle: "Let's take back control of your IT fleet",
    ctaSub:
      "Share your fleet size, sites and ITSM tool — we propose a measurable POC and a documented ROI.",
    ctaBtn: "Contact RFIDIA",
    ctaAlt: "Back to solutions",
    applicationsTitle: "RFID applications for the IT fleet",
    applicationsDesc: "Six use cases that transform fleet management without changing your ITSM tools.",
    applications: [
      { title: "Onboarding & offboarding", desc: "Assignment, return and verification with timestamped digital proof." },
      { title: "Annual physical audit", desc: "Full audit of thousands of assets in a single day, handheld readers." },
      { title: "Exit detection", desc: "Alerts on unauthorised IT asset exits through sensitive doors." },
      { title: "Inter-site movements", desc: "Real-time traceability of transfers between sites and departments." },
      { title: "Refurbishment & support", desc: "Full cycle: return, repair, reassignment and tracked disposal." },
      { title: "Server rooms & data center", desc: "Automated inventory of servers, switches and removable storage." },
    ],
    verticalsTitle: "Organisations that trust us",
    verticalsDesc: "From corporate headquarters to university campuses, RFID adapts to each ITAM maturity level.",
    verticals: [
      { name: "Headquarters & large offices", desc: "Thousands of laptops and screens." },
      { name: "Banking & insurance", desc: "SOX/ISO compliance and auditability." },
      { name: "Telecoms", desc: "Distributed network equipment." },
      { name: "Universities & campuses", desc: "Shared educational hardware." },
      { name: "Public administrations", desc: "Inventory proofs for supervisory bodies." },
      { name: "Industry & retail", desc: "Mobile terminals and printers." },
    ],
  },
  it: {
    metaTitle: "RFID IT Asset Management | RFIDIA",
    metaDesc:
      "Basta laptop persi e audit ITAM interminabili: RFIDIA digitalizza il parco IT in tempo reale, per IT sereni e CMDB affidabile.",
    heroEyebrow: "IT Asset Management • Parco, audit, sicurezza",
    heroTitleA: "Il parco IT",
    heroTitleB: "audit",
    heroTitleC: "in poche ore, non settimane",
    heroSub:
      "Laptop, monitor, smartphone, server, periferiche: RFIDIA dota gli asset IT per un inventario continuo, automatico e affidabile — senza appesantire team o utenti.",
    heroCta1: "Audit del mio parco IT",
    heroCta2: "Tutte le soluzioni",
    kpis: [
      { v: "+95%", l: "Accuratezza parco IT" },
      { v: "-90%", l: "Durata audit ITAM" },
      { v: "0", l: "Materiale perso" },
    ],
    modulesTitle: "ITAM finalmente sotto controllo",
    modulesDesc:
      "Sei leve per rendere affidabile l'inventario, fluidificare le assegnazioni e proteggere asset sensibili, senza cambiare gli strumenti ITSM.",
    modules: [
      { title: "Assegnazione e restituzione", desc: "Onboarding e offboarding fluidi: attrezzature consegnate, restituite e verificate con prova digitale." },
      { title: "Audit fisici rapidi", desc: "Inventario completo in poche ore con lettori portatili, senza toccare ogni postazione." },
      { title: "Localizzazione e movimenti", desc: "Capire la realta: dove sono davvero gli asset e chi li ha usati di recente." },
      { title: "Anti-perdita e alert", desc: "Rilevamento uscite non autorizzate ai varchi sensibili, alert su spostamenti anomali." },
      { title: "Sync ITSM/CMDB", desc: "Connettori ServiceNow, GLPI, Jira, Excel: la realta fisica alimenta la source of truth." },
      { title: "Stock e ricondizionamento", desc: "Ricezione fornitore, deploy, riparazione, riassegnazione: l'intero ciclo di vita e tracciato." },
    ],
    journeyTitle: "Dall'audit pilota al programma ITAM continuo",
    journeyDesc:
      "Partiamo da un POC breve su una popolazione mirata, poi estendiamo senza interrompere l'IT.",
    journey: [
      { n: "01", t: "Cadrage parco", d: "Categorizzazione asset, siti, popolazioni target e scelta della procedura di tagging." },
      { n: "02", t: "POC ITAM", d: "Tagging mirato, lettori portatili e riconciliazione CMDB in 4-6 settimane." },
      { n: "03", t: "Rollout per sito", d: "Generalizzazione a tutto il parco, formazione team IT e procedure di onboarding/offboarding." },
      { n: "04", t: "ITAM continuo", d: "Inventari ricorrenti, alert, reporting CFO/CIO e nuovi casi d'uso." },
    ],
    proofTitle: "Dove il valore appare subito",
    proofDesc: "Ambienti in cui l'RFID cambia concretamente la gestione del parco IT.",
    proofs: [
      "Sedi e grandi uffici: migliaia di laptop e monitor tracciati senza disturbare gli utenti.",
      "Universita, scuole e campus: materiale didattico condiviso tracciato per utente.",
      "Banche, assicurazioni, telco: conformita SOX/ISO e riduzione degli asset fuori CMDB.",
      "Amministrazioni e settore pubblico: prove di inventario per audit interni e di tutela.",
    ],
    ctaTitle: "Riprendiamo il controllo del parco IT",
    ctaSub:
      "Indicaci dimensione parco, siti e strumento ITSM — proponiamo un POC misurabile e un ROI documentato.",
    ctaBtn: "Contatta RFIDIA",
    ctaAlt: "Torna alle soluzioni",
    applicationsTitle: "Applicazioni RFID per il parco IT",
    applicationsDesc: "Sei casi d'uso che trasformano la gestione del parco, senza cambiare gli strumenti ITSM.",
    applications: [
      { title: "Onboarding & offboarding", desc: "Assegnazione, restituzione e verifica con prova digitale datata." },
      { title: "Audit fisico annuale", desc: "Audit completo di migliaia di asset in una sola giornata, lettori portatili." },
      { title: "Rilevazione uscite", desc: "Alert su uscite non autorizzate di asset IT dai varchi sensibili." },
      { title: "Movimenti tra siti", desc: "Tracciabilita in tempo reale dei trasferimenti tra siti e reparti." },
      { title: "Ricondizionamento & assistenza", desc: "Ciclo completo: reso, riparazione, riassegnazione e smaltimento tracciato." },
      { title: "Sale server & data center", desc: "Inventario automatico di server, switch e storage rimovibili." },
    ],
    verticalsTitle: "Organizzazioni che si fidano di noi",
    verticalsDesc: "Da sedi corporate a campus universitari, l'RFID si adatta a ogni livello di maturita ITAM.",
    verticals: [
      { name: "Sedi e uffici", desc: "Migliaia di laptop e monitor." },
      { name: "Banche & assicurazioni", desc: "Conformita SOX/ISO e auditabilita." },
      { name: "Telco", desc: "Apparati di rete distribuiti." },
      { name: "Universita & campus", desc: "Materiale didattico condiviso." },
      { name: "PA", desc: "Prove di inventario per gli enti di tutela." },
      { name: "Industria & retail", desc: "Terminali mobili e stampanti." },
    ],
  },
};

export default buildSolution(theme, "/a_rfidia/it.jpeg", copy);
