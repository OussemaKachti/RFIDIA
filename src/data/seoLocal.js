/**
 * RFIDIA — Local SEO content ("RFID Tunisie") rendered by <SolutionSeoSection />.
 *
 * One entry per page, keyed by slug. French only (the language served to
 * crawlers). Keep the wording natural: vary "RFID en Tunisie", "solution RFID
 * Tunisie", "fournisseur RFID en Tunisie", "intégrateur RFID"… rather than
 * repeating the exact keyword. Never add unverifiable facts (clients, prices,
 * certifications) — figures used here are the ones published on the site.
 */

// Keyword-rich anchors used for internal links between solution pages.
export const SOLUTION_LINKS = {
  home: { href: "/", label: "Toutes nos solutions RFID en Tunisie" },
  services: { href: "/services", label: "Ingénierie et intégration RFID IoT en Tunisie" },
  "solution-sante": { href: "/it-solution/solution-sante", label: "RFID santé : hôpitaux et cliniques" },
  "solution-hotellerie": { href: "/it-solution/solution-hotellerie", label: "RFID hôtellerie : linge et cashless" },
  "solution-ecole": { href: "/it-solution/solution-ecole", label: "RFID pour écoles et universités" },
  "solution-entrepot": { href: "/it-solution/solution-entrepot", label: "RFID entrepôt et logistique" },
  "solution-gestion-actifs": { href: "/it-solution/solution-gestion-actifs", label: "Gestion des actifs par RFID" },
  "rfidia-tex": { href: "/it-solution/rfidia-tex", label: "Traçabilité textile RFID (RFIDIA-TEX)" },
  "rfid-retail": { href: "/it-solution/rfid-retail", label: "RFID retail : inventaire magasin" },
  "rfid-manufacturing": { href: "/it-solution/rfid-manufacturing", label: "RFID manufacturing et industrie" },
  "rfid-oil-gas": { href: "/it-solution/rfid-oil-gas", label: "RFID Oil & Gas et énergie" },
  "rfid-data-center": { href: "/it-solution/rfid-data-center", label: "RFID data center" },
  "rfid-government": { href: "/it-solution/rfid-government", label: "RFID secteur public et gouvernement" },
  "rfid-it-asset-management": { href: "/it-solution/rfid-it-asset-management", label: "RFID IT Asset Management" },
};

// Answer reused on several pages: pricing depends on scope, never publish a figure.
const PRICE_ANSWER =
  "Le coût d'un projet RFID en Tunisie dépend du périmètre : nombre d'articles ou d'actifs à étiqueter, type d'étiquettes RFID, nombre de lecteurs fixes, portiques ou terminaux mobiles, et niveau d'intégration logicielle (ERP, WMS, GMAO). RFIDIA établit un devis détaillé après un audit de vos besoins et recommande souvent un pilote sur un périmètre réduit pour mesurer le retour sur investissement avant de généraliser.";

export const SEO_LOCAL = {
  /* ─────────────────────────── HOME ─────────────────────────── */
  home: {
    path: "/",
    eyebrow: "Fournisseur et intégrateur RFID en Tunisie",
    title: "RFIDIA, votre expert RFID en Tunisie pour la traçabilité et l'IoT",
    intro: [
      "Depuis plus de 10 ans, RFIDIA conçoit et déploie des solutions RFID en Tunisie pour les entreprises qui veulent savoir, en temps réel, où se trouvent leurs produits, leurs équipements et leurs stocks. Basée à l'Africa Mall, Ariana (Grand Tunis), notre équipe d'ingénieurs accompagne chaque projet de A à Z : audit de site, choix des étiquettes RFID et des lecteurs, intégration logicielle, formation et maintenance.",
      "La RFID (Radio Frequency Identification) permet d'identifier sans contact et sans ligne de vue des centaines d'objets par seconde grâce à une puce RFID et une antenne intégrées dans une étiquette, un badge ou un tag industriel. Associée aux capteurs IoT et à nos logiciels de traçabilité, elle remplace les inventaires manuels, fiabilise les flux et fournit des indicateurs exploitables pour piloter votre activité.",
      "Avec plus de 500 projets déployés dans plus de 15 secteurs — industrie, logistique, santé, hôtellerie, retail, textile, éducation, énergie, secteur public — RFIDIA est un partenaire de référence pour la technologie RFID en Tunisie et accompagne également des clients au Maghreb et en Europe.",
    ],
    points: [
      {
        t: "Étiquettes et puces RFID adaptées",
        d: "Tags UHF, HF et NFC, étiquettes textiles, tags on-metal ou résistants aux environnements difficiles : nous sélectionnons la référence qui correspond à vos supports et à vos contraintes terrain.",
      },
      {
        t: "Lecteurs RFID fixes et mobiles",
        d: "Portiques de quai, antennes en rayon, terminaux portables et imprimantes RFID : une infrastructure de lecture dimensionnée pour votre site.",
      },
      {
        t: "Logiciel de traçabilité et IoT",
        d: "Tableaux de bord temps réel, alertes, historiques et intégration native avec vos outils existants (ERP, WMS, GMAO, caisse).",
      },
      {
        t: "Déploiement partout en Tunisie",
        d: "Intervention sur site dans le Grand Tunis, à Sfax, Sousse, Monastir, Nabeul, Bizerte et dans les zones industrielles du pays, avec un support de proximité.",
      },
    ],
    related: [
      "services",
      "solution-entrepot",
      "rfid-retail",
      "solution-sante",
      "rfid-manufacturing",
      "rfidia-tex",
      "solution-gestion-actifs",
    ],
    cta: "Demander un audit RFID",
  },

  /* ───────────────────────── SERVICES ───────────────────────── */
  services: {
    path: "/services",
    eyebrow: "RFID IoT Tunisie",
    title: "Ingénierie et intégration RFID IoT en Tunisie, de l'audit au support",
    intro: [
      "Réussir un projet RFID ne se résume pas à acheter des lecteurs et des étiquettes. RFIDIA, intégrateur RFID IoT en Tunisie, prend en charge toute la chaîne technique : étude de faisabilité, tests de lecture sur site, conception de l'architecture, intégration matérielle, développement du middleware et raccordement à votre système d'information.",
      "Notre bureau d'études, basé à Ariana, dimensionne chaque installation selon vos contraintes réelles : surfaces métalliques, liquides, densité d'articles, cadence des flux ou environnements industriels. Cette approche terrain garantit des taux de lecture fiables et un retour sur investissement mesurable dès la phase pilote.",
      "Que vous soyez une PME tunisienne ou un groupe multi-sites, nous adaptons la démarche à votre organisation et assurons la formation de vos équipes ainsi que la maintenance de la solution dans la durée.",
    ],
    points: [
      { t: "Audit et site survey RFID", d: "Analyse des processus, mesures radio sur site et choix des technologies (UHF, HF, NFC, BLE, codes-barres)." },
      { t: "Intégration matérielle", d: "Installation de portiques, antennes, lecteurs fixes et terminaux mobiles, paramétrage et tests de performance." },
      { t: "Middleware et logiciel", d: "Développement de connecteurs avec vos ERP, WMS ou GMAO et tableaux de bord de traçabilité en temps réel." },
      { t: "Formation et maintenance", d: "Montée en compétence des équipes, support technique et maintenance préventive pour protéger votre investissement." },
    ],
    faq: [
      {
        q: "Pourquoi faire appel à un intégrateur RFID en Tunisie plutôt qu'acheter du matériel seul ?",
        a: "Les performances d'un système RFID dépendent fortement de l'environnement : métal, liquides, interférences, positionnement des antennes. Un intégrateur local comme RFIDIA réalise les tests sur site, choisit les bons composants et assure l'intégration avec vos logiciels, ce qui évite les taux de lecture insuffisants et les projets qui n'aboutissent pas.",
      },
      {
        q: "Combien de temps dure un projet d'intégration RFID ?",
        a: "Un pilote sur un périmètre réduit se met généralement en place en quelques semaines. La généralisation dépend ensuite du nombre de sites, du volume d'articles à étiqueter et des intégrations logicielles nécessaires. Le planning précis est défini lors de l'audit initial.",
      },
      {
        q: "Vos solutions RFID s'intègrent-elles à notre ERP ou WMS ?",
        a: "Oui. Notre middleware se connecte aux principaux ERP, WMS et GMAO du marché via API, fichiers d'échange ou bases de données, afin que les lectures RFID alimentent directement vos processus existants.",
      },
      {
        q: "Intervenez-vous en dehors du Grand Tunis ?",
        a: "Oui. RFIDIA intervient sur site dans toute la Tunisie, notamment à Sfax, Sousse, Monastir, Nabeul et Bizerte, ainsi qu'à l'international pour les groupes présents dans plusieurs pays.",
      },
      { q: "Quel budget prévoir pour un projet RFID ?", a: PRICE_ANSWER },
    ],
    related: ["home", "solution-entrepot", "rfid-manufacturing", "solution-gestion-actifs", "rfid-it-asset-management"],
    cta: "Planifier un audit de site",
  },

  /* ────────────────────────── SANTÉ ─────────────────────────── */
  "solution-sante": {
    path: "/it-solution/solution-sante",
    eyebrow: "RFID Tunisie santé",
    title: "La RFID au service des hôpitaux et cliniques en Tunisie",
    intro: [
      "Dans un établissement de santé, chaque minute passée à chercher un pousse-seringue, un moniteur ou un lot de consommables est une minute en moins pour les patients. La solution RFID santé de RFIDIA apporte aux hôpitaux, cliniques et centres de soins en Tunisie une visibilité en temps réel sur les équipements biomédicaux, les dispositifs médicaux et les stocks sensibles.",
      "Concrètement, des étiquettes RFID adaptées au milieu médical sont apposées sur les équipements et les contenants ; des lecteurs RFID placés aux points de passage (services, bloc opératoire, pharmacie, stérilisation) enregistrent automatiquement chaque mouvement. Les équipes retrouvent un équipement en quelques secondes, réalisent leurs inventaires sans comptage manuel et anticipent les ruptures de stock.",
      "Notre approche est progressive : nous démarrons par une unité pilote avec des indicateurs mesurables (temps de recherche, pertes, disponibilité des équipements), puis nous étendons la traçabilité RFID à l'ensemble de l'établissement en respectant les contraintes d'hygiène et de continuité des soins.",
    ],
    points: [
      { t: "Suivi des équipements biomédicaux", d: "Localisation, prêts entre services et historique de maintenance du parc biomédical." },
      { t: "Stocks de pharmacie et consommables", d: "Inventaire automatisé, suivi des lots et alertes de péremption pour réduire les ruptures et le surstock." },
      { t: "Sécurisation des zones sensibles", d: "Contrôle d'accès par badge RFID et journalisation des passages dans les zones critiques." },
      { t: "Linge hospitalier et tenues", d: "Suivi des cycles de lavage et des dotations grâce à des tags RFID textiles résistants." },
    ],
    faq: [
      {
        q: "Comment déployer la RFID dans un hôpital en Tunisie ?",
        a: "RFIDIA commence par un audit des flux et des zones critiques, puis installe une solution pilote dans un service (par exemple le bloc ou la pharmacie). Après validation des résultats, le déploiement est étendu progressivement, avec formation des équipes soignantes et techniques et intégration au système d'information hospitalier.",
      },
      {
        q: "Les étiquettes RFID résistent-elles à la stérilisation ?",
        a: "Il existe des tags RFID conçus pour supporter l'autoclave, les lavages répétés ou les produits désinfectants. Nous sélectionnons la référence adaptée à chaque type d'équipement lors de l'étude.",
      },
      {
        q: "La RFID perturbe-t-elle les équipements médicaux ?",
        a: "Les systèmes RFID passifs émettent à faible puissance. Le positionnement des lecteurs est défini lors de l'étude de site, en concertation avec le service biomédical, afin de respecter les exigences de chaque zone.",
      },
      {
        q: "Quels établissements de santé peuvent utiliser la RFID ?",
        a: "Hôpitaux publics, cliniques privées, centres de dialyse, laboratoires, pharmacies centrales et distributeurs de dispositifs médicaux en Tunisie : la solution s'adapte à la taille et au périmètre de chaque structure.",
      },
      { q: "Quel est le prix d'une solution RFID pour un établissement de santé ?", a: PRICE_ANSWER },
    ],
    related: ["solution-gestion-actifs", "solution-hotellerie", "solution-entrepot", "services", "home"],
    service: {
      name: "Solution RFID santé en Tunisie",
      type: "Traçabilité RFID des équipements médicaux et des stocks hospitaliers",
      description:
        "Suivi RFID des équipements biomédicaux, des dispositifs médicaux et des stocks sensibles pour hôpitaux et cliniques en Tunisie.",
    },
    cta: "Évaluer mon établissement",
  },

  /* ──────────────────────── HÔTELLERIE ──────────────────────── */
  "solution-hotellerie": {
    path: "/it-solution/solution-hotellerie",
    eyebrow: "RFID Tunisie hôtellerie",
    title: "Solution RFID pour les hôtels et resorts en Tunisie",
    intro: [
      "L'hôtellerie tunisienne accueille chaque saison des milliers de clients, avec des pics d'activité qui mettent à l'épreuve la gestion du linge, des équipements et des accès. La solution RFID hôtellerie de RFIDIA aide les hôtels, resorts et clubs de Hammamet, Sousse, Djerba, Monastir ou Tunis à fiabiliser leurs opérations sans alourdir le travail des équipes.",
      "Des tags RFID textiles cousus dans le linge permettent de compter automatiquement draps, serviettes et peignoirs à chaque sortie et retour de blanchisserie. Des bracelets RFID offrent aux clients une expérience cashless et un accès simplifié aux chambres, piscines et espaces de loisirs. Les équipements et le mobilier de valeur sont inventoriés en quelques minutes.",
      "Le résultat : moins de pertes de linge, une facturation de blanchisserie maîtrisée, des inventaires rapides et une expérience client plus fluide — avec des indicateurs clairs pour la direction.",
    ],
    points: [
      { t: "Gestion RFID du linge", d: "Comptage automatique en blanchisserie, suivi des rotations et réduction des pertes." },
      { t: "Bracelets RFID et cashless", d: "Paiement sans espèces dans l'enceinte de l'hôtel, contrôle des formules all-inclusive et accès aux espaces." },
      { t: "Contrôle d'accès", d: "Badges et bracelets RFID pour les chambres, les zones réservées au personnel et les espaces loisirs." },
      { t: "Inventaire des équipements", d: "Suivi du mobilier, du matériel de restauration et des équipements techniques de l'établissement." },
    ],
    faq: [
      {
        q: "Comment la RFID réduit-elle les pertes de linge dans un hôtel ?",
        a: "Chaque pièce de linge porte un tag RFID textile résistant au lavage industriel. Des lecteurs placés en lingerie et en blanchisserie comptent automatiquement les pièces qui sortent et reviennent, ce qui met immédiatement en évidence les écarts et permet de contrôler les factures du prestataire.",
      },
      {
        q: "Les bracelets RFID cashless conviennent-ils aux hôtels all-inclusive en Tunisie ?",
        a: "Oui. Les bracelets RFID permettent d'identifier la formule de chaque client, de gérer les consommations hors forfait sans espèces et de contrôler l'accès aux espaces, ce qui est particulièrement adapté aux resorts et clubs de vacances.",
      },
      {
        q: "Le déploiement perturbe-t-il l'activité de l'hôtel ?",
        a: "Non. L'installation est planifiée par zones et hors des heures de forte activité. Le marquage du linge peut être réalisé progressivement, au rythme des rotations.",
      },
      {
        q: "La solution s'intègre-t-elle à notre logiciel de gestion hôtelière ?",
        a: "Nous étudions l'intégration avec votre PMS, votre caisse ou votre ERP lors de l'audit afin que les données RFID remontent dans vos outils existants.",
      },
      { q: "Quel est le prix d'une solution RFID pour un hôtel en Tunisie ?", a: PRICE_ANSWER },
    ],
    related: ["solution-gestion-actifs", "solution-sante", "rfid-retail", "services", "home"],
    service: {
      name: "Solution RFID hôtellerie en Tunisie",
      type: "Gestion RFID du linge, cashless et contrôle d'accès pour hôtels",
      description:
        "Suivi RFID du linge, bracelets cashless, contrôle d'accès et inventaire des équipements pour hôtels et resorts en Tunisie.",
    },
    cta: "Parler à un expert hôtellerie",
  },

  /* ─────────────────────────── ÉCOLE ────────────────────────── */
  "solution-ecole": {
    path: "/it-solution/solution-ecole",
    eyebrow: "RFID Tunisie écoles",
    title: "La RFID pour les écoles, lycées et universités en Tunisie",
    intro: [
      "Écoles privées, lycées, universités et centres de formation en Tunisie gèrent chaque jour des centaines d'élèves, de visiteurs et d'équipements pédagogiques. La solution RFID pour écoles de RFIDIA sécurise les accès, simplifie le suivi du matériel et rassure les familles, avec des dispositifs simples à utiliser pour la communauté éducative.",
      "Les élèves et le personnel disposent d'une carte ou d'un badge RFID qui contrôle l'accès à l'établissement et enregistre les entrées et sorties. Le matériel pédagogique — ordinateurs, tablettes, équipements de laboratoire, livres de bibliothèque — est équipé d'étiquettes RFID pour des inventaires rapides et un suivi des prêts sans saisie manuelle.",
      "La solution est déployée progressivement, en concertation avec la direction, et paramétrée pour respecter la confidentialité des données des élèves.",
    ],
    points: [
      { t: "Contrôle d'accès par badge RFID", d: "Entrées et sorties sécurisées, gestion des visiteurs et des zones réservées." },
      { t: "Suivi des présences", d: "Enregistrement automatique des passages et informations fiables pour l'administration." },
      { t: "Inventaire du matériel pédagogique", d: "Ordinateurs, tablettes et équipements de laboratoire inventoriés en quelques minutes." },
      { t: "Bibliothèque RFID", d: "Prêts et retours accélérés, inventaire des rayonnages et antivol intégré." },
    ],
    faq: [
      {
        q: "Comment fonctionne un badge RFID pour élèves ?",
        a: "Chaque élève reçoit une carte ou un porte-clés RFID personnel. En le présentant devant un lecteur à l'entrée, le passage est validé et enregistré. L'établissement dispose ainsi d'un historique fiable des entrées et sorties.",
      },
      {
        q: "La RFID convient-elle aux écoles privées en Tunisie ?",
        a: "Oui. La solution s'adapte aussi bien aux écoles primaires privées qu'aux collèges, lycées, universités et centres de formation professionnelle, quel que soit le nombre d'élèves.",
      },
      {
        q: "Les données des élèves sont-elles protégées ?",
        a: "Le badge RFID ne contient qu'un identifiant ; les informations personnelles restent dans le logiciel de l'établissement, avec des accès restreints et des échanges sécurisés.",
      },
      {
        q: "Peut-on inventorier le matériel informatique d'une école avec la RFID ?",
        a: "Oui. Chaque équipement reçoit une étiquette RFID ; un terminal portable permet ensuite d'inventorier une salle entière en quelques minutes et de repérer immédiatement le matériel manquant.",
      },
      { q: "Quel est le prix d'une solution RFID pour une école ?", a: PRICE_ANSWER },
    ],
    related: ["solution-gestion-actifs", "rfid-it-asset-management", "rfid-government", "services", "home"],
    service: {
      name: "Solution RFID pour écoles en Tunisie",
      type: "Contrôle d'accès et inventaire RFID pour établissements scolaires",
      description:
        "Badges RFID, contrôle d'accès, suivi des présences et inventaire du matériel pédagogique pour écoles et universités en Tunisie.",
    },
    cta: "Échanger sur mon établissement",
  },

  /* ───────────────────────── ENTREPÔT ───────────────────────── */
  "solution-entrepot": {
    path: "/it-solution/solution-entrepot",
    eyebrow: "RFID Tunisie entrepôt et logistique",
    title: "RFID entrepôt et logistique en Tunisie : un stock juste, en temps réel",
    intro: [
      "Écarts d'inventaire, erreurs d'expédition, temps perdu à chercher des palettes : ces problèmes coûtent cher aux entrepôts et aux plateformes logistiques. La solution RFID entrepôt de RFIDIA automatise l'identification des marchandises à chaque étape — réception, mise en stock, préparation, expédition — pour les logisticiens, distributeurs et industriels en Tunisie.",
      "Des portiques RFID installés sur les quais lisent en une seule fois l'ensemble des colis et palettes qui passent, sans scan article par article. Les terminaux RFID mobiles permettent de réaliser un inventaire complet sans arrêter l'exploitation. Les données remontent directement dans votre WMS ou votre ERP.",
      "Pour les zones logistiques de Radès, Ben Arous, Sfax, Sousse ou Bizerte comme pour les entrepôts de distribution urbains, nous dimensionnons la solution selon vos volumes, vos cadences et la nature des produits stockés.",
    ],
    points: [
      { t: "Réception automatisée", d: "Contrôle instantané des livraisons fournisseurs par lecture groupée sur le quai." },
      { t: "Inventaire tournant sans arrêt", d: "Inventaires jusqu'à plusieurs fois plus rapides grâce aux terminaux RFID portables." },
      { t: "Contrôle des expéditions", d: "Vérification automatique de la conformité des commandes avant chargement." },
      { t: "Suivi des palettes et contenants", d: "Traçabilité des supports réutilisables et réduction des pertes." },
    ],
    faq: [
      {
        q: "Quelle différence entre RFID et code-barres dans un entrepôt ?",
        a: "Le code-barres nécessite de scanner chaque article, un par un et en ligne de vue. La RFID lit des dizaines ou des centaines d'étiquettes simultanément, sans contact visuel, même à travers un carton. Les réceptions, inventaires et expéditions sont donc beaucoup plus rapides et plus fiables.",
      },
      {
        q: "La RFID peut-elle s'intégrer à notre WMS ?",
        a: "Oui. Le middleware RFIDIA transmet les lectures RFID à votre WMS ou ERP afin de mettre à jour automatiquement les stocks et les statuts de commandes.",
      },
      {
        q: "Faut-il étiqueter chaque article ou seulement les palettes ?",
        a: "Cela dépend de votre objectif : le marquage à la palette ou au colis suffit souvent pour sécuriser les flux, tandis que le marquage unitaire permet un inventaire à l'article. Nous définissons le niveau de marquage optimal lors de l'audit.",
      },
      {
        q: "Combien de temps faut-il pour équiper un entrepôt en Tunisie ?",
        a: "Un pilote sur un quai ou une zone de stockage peut être opérationnel en quelques semaines. Le déploiement complet dépend de la taille du site et des intégrations nécessaires.",
      },
      { q: "Quel est le prix d'une solution RFID pour un entrepôt ?", a: PRICE_ANSWER },
    ],
    related: ["rfid-manufacturing", "rfid-retail", "solution-gestion-actifs", "rfidia-tex", "services", "home"],
    service: {
      name: "Solution RFID entrepôt et logistique en Tunisie",
      type: "Inventaire RFID et automatisation des flux logistiques",
      description:
        "Portiques RFID, terminaux mobiles et intégration WMS pour automatiser réception, inventaire et expédition dans les entrepôts en Tunisie.",
    },
    cta: "Obtenir une démo entrepôt",
  },

  /* ────────────────────── GESTION DES ACTIFS ─────────────────── */
  "solution-gestion-actifs": {
    path: "/it-solution/solution-gestion-actifs",
    eyebrow: "RFID Tunisie gestion des actifs",
    title: "Gestion des actifs par RFID en Tunisie : localisez et inventoriez votre parc",
    intro: [
      "Outillage, instruments de mesure, équipements de maintenance, matériel informatique, contenants réutilisables : les actifs d'une entreprise représentent un capital important, souvent mal suivi. La solution RFID de gestion des actifs de RFIDIA permet aux entreprises et organismes en Tunisie de savoir à tout moment quels équipements ils possèdent, où ils se trouvent et dans quel état.",
      "Chaque actif reçoit une étiquette RFID adaptée à son support (métal, plastique, extérieur). Les inventaires se font en parcourant les locaux avec un lecteur RFID portable, et les lecteurs fixes détectent automatiquement les sorties de zone. Les écarts avec le registre des immobilisations sont identifiés immédiatement.",
      "Vous réduisez les pertes et les achats de remplacement, fiabilisez vos audits comptables et améliorez la disponibilité de vos équipements critiques.",
    ],
    points: [
      { t: "Inventaire des immobilisations", d: "Rapprochement rapide entre le registre comptable et le terrain, sans saisie manuelle." },
      { t: "Suivi de l'outillage", d: "Prêts, retours et localisation des outils pour limiter les pertes et les temps de recherche." },
      { t: "Maintenance et conformité", d: "Historique d'interventions et alertes d'échéances de contrôle pour chaque équipement." },
      { t: "Tags on-metal et durcis", d: "Étiquettes RFID conçues pour le métal, les chocs et les environnements industriels." },
    ],
    faq: [
      {
        q: "Comment inventorier des immobilisations avec la RFID ?",
        a: "Chaque immobilisation est étiquetée une seule fois. Lors de l'inventaire, un opérateur parcourt les locaux avec un lecteur RFID portable qui lit automatiquement toutes les étiquettes à proximité. Le logiciel compare ensuite les lectures au registre et liste les écarts.",
      },
      {
        q: "Les étiquettes RFID fonctionnent-elles sur le métal ?",
        a: "Oui, à condition d'utiliser des tags RFID on-metal spécialement conçus pour ces surfaces. Nous les sélectionnons selon la forme et l'usage de chaque équipement.",
      },
      {
        q: "Quelle est la différence entre la gestion des actifs RFID et l'IT Asset Management ?",
        a: "La gestion des actifs couvre tous les équipements physiques de l'entreprise (outillage, mobilier, machines). L'IT Asset Management se concentre sur le parc informatique : ordinateurs, serveurs, périphériques et leur cycle de vie.",
      },
      {
        q: "La solution convient-elle aux administrations tunisiennes ?",
        a: "Oui. Ministères, collectivités et établissements publics l'utilisent pour inventorier leur patrimoine mobilier et faciliter les audits de conformité.",
      },
      { q: "Quel est le prix d'une solution RFID de gestion des actifs ?", a: PRICE_ANSWER },
    ],
    related: ["rfid-it-asset-management", "rfid-government", "rfid-manufacturing", "rfid-data-center", "services", "home"],
    service: {
      name: "Gestion des actifs par RFID en Tunisie",
      type: "Inventaire et traçabilité RFID des équipements et immobilisations",
      description:
        "Étiquetage RFID, inventaire des immobilisations et suivi de l'outillage pour entreprises et organismes publics en Tunisie.",
    },
    cta: "Auditer mon parc d'actifs",
  },

  /* ──────────────────────── RFIDIA-TEX ──────────────────────── */
  "rfidia-tex": {
    path: "/it-solution/rfidia-tex",
    eyebrow: "RFID Tunisie traçabilité textile",
    title: "Traçabilité textile RFID en Tunisie avec RFIDIA-TEX",
    intro: [
      "Le textile et l'habillement sont l'un des piliers de l'industrie tunisienne, avec des ateliers et usines qui produisent pour les grandes marques européennes. Ces donneurs d'ordre exigent de plus en plus une traçabilité à la pièce. RFIDIA-TEX, notre solution de traçabilité textile RFID, suit chaque vêtement du fil à la vente : production, contrôle qualité, entrepôt, expédition et magasin.",
      "Une étiquette RFID textile — intégrée à l'étiquette de marque ou à l'étiquette d'entretien — identifie chaque pièce de façon unique. Les lecteurs RFID placés en fin de chaîne, au contrôle qualité et à l'expédition comptent automatiquement les colis sans les ouvrir, ce qui fiabilise les livraisons et accélère les inventaires.",
      "Pour les confectionneurs de Monastir, Sousse, Ksar Hellal, Sfax ou du Grand Tunis, comme pour les enseignes de prêt-à-porter, RFIDIA-TEX renforce la compétitivité à l'export et la lutte contre la contrefaçon.",
    ],
    points: [
      { t: "Suivi de production", d: "Visibilité sur l'avancement par ordre de fabrication, par chaîne et par atelier." },
      { t: "Contrôle des expéditions", d: "Comptage automatique des colis et vérification des packing lists avant départ." },
      { t: "Inventaire en entrepôt et en magasin", d: "Inventaires jusqu'à 10 fois plus rapides qu'un comptage manuel." },
      { t: "Authenticité et anti-contrefaçon", d: "Identifiant unique par pièce pour vérifier l'origine des produits." },
    ],
    faq: [
      {
        q: "Pourquoi la traçabilité RFID est-elle importante pour le textile tunisien ?",
        a: "Les marques internationales demandent une visibilité fiable sur les quantités produites et expédiées, ainsi qu'une traçabilité à la pièce. La RFID permet de répondre à ces exigences tout en réduisant les erreurs de livraison et le temps passé aux comptages.",
      },
      {
        q: "Les étiquettes RFID textiles résistent-elles au lavage ?",
        a: "Il existe des tags RFID textiles lavables, conçus pour supporter les lavages industriels, et des étiquettes RFID papier destinées aux articles neufs vendus en magasin. Le choix dépend du cycle de vie du produit.",
      },
      {
        q: "Peut-on compter un carton de vêtements sans l'ouvrir ?",
        a: "Oui. Un lecteur ou un tunnel RFID lit simultanément toutes les étiquettes présentes dans le carton et compare le résultat à la liste de colisage.",
      },
      {
        q: "RFIDIA-TEX convient-il aux ateliers de sous-traitance ?",
        a: "Oui. La solution est modulaire : un atelier peut démarrer avec le contrôle des expéditions puis étendre la traçabilité à la production.",
      },
      { q: "Quel est le prix d'une solution RFID textile ?", a: PRICE_ANSWER },
    ],
    related: ["rfid-retail", "rfid-manufacturing", "solution-entrepot", "services", "home"],
    service: {
      name: "RFIDIA-TEX, traçabilité textile RFID en Tunisie",
      type: "Traçabilité RFID textile et habillement",
      description:
        "Traçabilité unitaire RFID des vêtements, de la production à la vente, pour ateliers, usines et enseignes textiles en Tunisie.",
    },
    cta: "Obtenir une démo RFIDIA-TEX",
  },

  /* ────────────────────────── RETAIL ────────────────────────── */
  "rfid-retail": {
    path: "/it-solution/rfid-retail",
    eyebrow: "RFID Retail Tunisie",
    title: "RFID retail en Tunisie : inventaire magasin fiable et démarque maîtrisée",
    intro: [
      "Pour une enseigne, un article présent en réserve mais absent du rayon est une vente perdue. La solution RFID retail de RFIDIA aide les magasins et réseaux de distribution en Tunisie à connaître leur stock réel à l'article près, à réapprovisionner les rayons au bon moment et à réduire la démarque inconnue.",
      "Chaque produit porte une étiquette RFID. Un vendeur équipé d'un lecteur RFID portable inventorie un magasin entier en une fraction du temps d'un comptage manuel, sans fermer la boutique. Des portiques en sortie détectent les articles non encaissés, et les données de stock peuvent alimenter le e-commerce pour le click & collect.",
      "Mode, chaussures, sport, électronique, bijouterie ou grande distribution : nous adaptons le choix des étiquettes et des équipements à chaque format de magasin, des centres commerciaux du Grand Tunis aux points de vente de Sousse et Sfax.",
    ],
    points: [
      { t: "Inventaire magasin rapide", d: "Comptages fréquents et non bloquants pour garder un stock fiable." },
      { t: "Réassort en rayon", d: "Détection des manquants en surface de vente avant la rupture." },
      { t: "Anti-démarque", d: "Portiques de sortie et alertes ciblées pour réduire le vol et les erreurs." },
      { t: "Omnicanal", d: "Stock magasin fiable pour le click & collect et l'expédition depuis le magasin." },
    ],
    faq: [
      {
        q: "Quel gain la RFID apporte-t-elle à un magasin ?",
        a: "La RFID fiabilise l'inventaire, accélère les comptages et améliore la disponibilité des produits en rayon. Les enseignes l'utilisent aussi pour lutter contre la démarque et fiabiliser leurs ventes omnicanales.",
      },
      {
        q: "La RFID peut-elle remplacer l'antivol classique ?",
        a: "Une étiquette RFID peut assurer à la fois l'identification du produit et la fonction antivol grâce à des portiques de sortie RFID, ce qui évite de multiplier les étiquettes.",
      },
      {
        q: "Faut-il étiqueter tous les produits du magasin ?",
        a: "Pas nécessairement. De nombreuses enseignes commencent par les familles de produits à forte valeur ou à forte rotation, puis étendent progressivement le marquage.",
      },
      {
        q: "La solution fonctionne-t-elle avec notre logiciel de caisse ?",
        a: "Nous étudions l'intégration avec votre caisse, votre ERP et votre site e-commerce lors de la phase de cadrage afin que les données RFID soient exploitées dans vos outils.",
      },
      { q: "Quel est le prix d'une solution RFID pour le retail en Tunisie ?", a: PRICE_ANSWER },
    ],
    related: ["rfidia-tex", "solution-entrepot", "solution-gestion-actifs", "services", "home"],
    service: {
      name: "Solution RFID retail en Tunisie",
      type: "Inventaire RFID magasin et anti-démarque",
      description:
        "Inventaire RFID en magasin, réassort, anti-démarque et omnicanal pour enseignes et réseaux de distribution en Tunisie.",
    },
    cta: "Diagnostiquer mon point de vente",
  },

  /* ─────────────────────── MANUFACTURING ─────────────────────── */
  "rfid-manufacturing": {
    path: "/it-solution/rfid-manufacturing",
    eyebrow: "RFID Manufacturing Tunisie",
    title: "RFID manufacturing en Tunisie : traçabilité de la production en temps réel",
    intro: [
      "Automobile, câblage, aéronautique, électronique, agroalimentaire, plasturgie : l'industrie tunisienne travaille pour des donneurs d'ordre exigeants qui attendent une traçabilité complète des pièces et des lots. La solution RFID manufacturing de RFIDIA suit en temps réel les en-cours de production (WIP), les outillages et les contenants dans vos ateliers.",
      "Des tags RFID fixés sur les bacs, les supports de production ou les pièces sont lus automatiquement à chaque poste ou étape clé. Vous savez où se trouve chaque ordre de fabrication, combien de temps il passe à chaque étape et quels composants ont été utilisés — sans saisie manuelle et sans ralentir les opérateurs.",
      "Pour les usines des zones industrielles de Ben Arous, Bizerte, Sousse, Sfax ou du Cap Bon, RFIDIA dimensionne des équipements RFID industriels adaptés aux environnements métalliques et aux cadences de production.",
    ],
    points: [
      { t: "Suivi des en-cours (WIP)", d: "Localisation des ordres de fabrication et mesure des temps de passage par poste." },
      { t: "Traçabilité des lots", d: "Historique complet des composants et des étapes pour chaque produit fini." },
      { t: "Gestion des outillages", d: "Suivi des moules, gabarits et outils, de leur usage et de leur maintenance." },
      { t: "Contenants réutilisables", d: "Suivi des bacs et racks entre fournisseurs, ateliers et clients." },
    ],
    faq: [
      {
        q: "Comment la RFID améliore-t-elle la traçabilité en usine ?",
        a: "La RFID enregistre automatiquement chaque passage de pièce ou de contenant devant un lecteur. Vous obtenez une traçabilité complète et horodatée de la production, utile pour la qualité, les audits clients et l'analyse des performances.",
      },
      {
        q: "La RFID fonctionne-t-elle dans un environnement métallique ?",
        a: "Oui, en utilisant des tags on-metal et un positionnement d'antennes étudié sur site. Nos tests de lecture préalables valident les performances avant tout déploiement.",
      },
      {
        q: "La solution se connecte-t-elle à notre ERP ou MES ?",
        a: "Oui. Les événements RFID sont transmis à votre ERP ou MES via notre middleware afin d'alimenter vos processus de production et de qualité.",
      },
      {
        q: "Peut-on démarrer sur une seule ligne de production ?",
        a: "Oui, c'est l'approche que nous recommandons : un pilote sur une ligne ou un atelier permet de mesurer les gains avant d'étendre la solution à l'usine.",
      },
      { q: "Quel est le prix d'une solution RFID industrielle ?", a: PRICE_ANSWER },
    ],
    related: ["solution-entrepot", "solution-gestion-actifs", "rfidia-tex", "rfid-oil-gas", "services", "home"],
    service: {
      name: "Solution RFID manufacturing en Tunisie",
      type: "Traçabilité RFID de la production industrielle",
      description:
        "Suivi RFID des en-cours, des lots, des outillages et des contenants pour les sites industriels en Tunisie.",
    },
    cta: "Étudier mon site industriel",
  },

  /* ───────────────────────── OIL & GAS ───────────────────────── */
  "rfid-oil-gas": {
    path: "/it-solution/rfid-oil-gas",
    eyebrow: "RFID Oil & Gas Tunisie",
    title: "RFID Oil & Gas en Tunisie : actifs critiques et sécurité sous contrôle",
    intro: [
      "Sur un site pétrolier, gazier ou énergétique, la moindre erreur d'identification d'un équipement peut avoir des conséquences importantes. La solution RFID Oil & Gas de RFIDIA aide les opérateurs et prestataires du secteur de l'énergie en Tunisie à identifier, inspecter et suivre leurs équipements critiques, y compris dans des environnements exigeants.",
      "Des tags RFID durcis, résistants à la chaleur, aux hydrocarbures et aux chocs, sont posés sur les vannes, équipements de levage, extincteurs, bouteilles de gaz ou tubulaires. Les inspecteurs utilisent des terminaux adaptés à leur zone d'intervention pour identifier l'équipement, consulter son historique et enregistrer l'inspection sur place.",
      "Les données alimentent un registre fiable, facilitent la conformité réglementaire et améliorent la sécurité du personnel, du sud tunisien jusqu'aux installations côtières.",
    ],
    points: [
      { t: "Inspection des équipements", d: "Identification certaine de l'équipement et enregistrement des inspections sur le terrain." },
      { t: "Tags RFID durcis", d: "Étiquettes résistantes à la chaleur, aux produits chimiques et aux conditions extérieures." },
      { t: "Sécurité du personnel", d: "Contrôle des accès aux zones et suivi des présences sur site." },
      { t: "Conformité et audit", d: "Historique complet et rapports pour les audits internes et réglementaires." },
    ],
    faq: [
      {
        q: "La RFID est-elle utilisable en zone ATEX ?",
        a: "Oui, à condition d'utiliser des lecteurs et terminaux certifiés pour la zone concernée. Les tags RFID passifs n'ont pas de batterie. Le choix du matériel est validé lors de l'étude en fonction du classement de chaque zone.",
      },
      {
        q: "Quels équipements peut-on suivre par RFID sur un site pétrolier ?",
        a: "Vannes, équipements de levage, harnais, extincteurs, bouteilles de gaz, tubulaires, pièces de rechange et outillage : tout équipement soumis à inspection ou à suivi peut être étiqueté.",
      },
      {
        q: "Les tags RFID résistent-ils aux conditions du désert ?",
        a: "Nous sélectionnons des tags durcis conçus pour les températures élevées, les UV, le sable et les hydrocarbures, adaptés aux sites du sud tunisien.",
      },
      {
        q: "Comment la RFID simplifie-t-elle les inspections ?",
        a: "L'inspecteur lit le tag avec un terminal : il est certain d'inspecter le bon équipement, accède à son historique et enregistre le résultat immédiatement, sans ressaisie.",
      },
      { q: "Quel est le prix d'une solution RFID Oil & Gas ?", a: PRICE_ANSWER },
    ],
    related: ["solution-gestion-actifs", "rfid-manufacturing", "solution-entrepot", "services", "home"],
    service: {
      name: "Solution RFID Oil & Gas en Tunisie",
      type: "Suivi RFID des actifs critiques et inspections dans l'énergie",
      description:
        "Tags RFID durcis, inspection des équipements et traçabilité réglementaire pour le secteur pétrolier, gazier et énergétique en Tunisie.",
    },
    cta: "Étudier mon site",
  },

  /* ──────────────────────── DATA CENTER ──────────────────────── */
  "rfid-data-center": {
    path: "/it-solution/rfid-data-center",
    eyebrow: "RFID Data Center Tunisie",
    title: "RFID data center en Tunisie : un inventaire exact de chaque baie",
    intro: [
      "Opérateurs télécoms, banques, hébergeurs et administrations exploitent en Tunisie des data centers et salles serveurs dont l'inventaire doit être irréprochable. Les audits manuels sont longs, sources d'erreurs et vite obsolètes. La solution RFID data center de RFIDIA automatise l'inventaire des serveurs, équipements réseau et baies.",
      "Chaque équipement reçoit un tag RFID adapté aux environnements informatiques. Un technicien inventorie une rangée de baies en quelques minutes avec un lecteur RFID portable, et les mouvements d'équipements (entrées, sorties, déplacements) sont enregistrés automatiquement. Les données se synchronisent avec votre CMDB ou votre outil DCIM.",
      "Vous gagnez du temps sur les audits, réduisez les erreurs et renforcez la sécurité physique de vos installations critiques.",
    ],
    points: [
      { t: "Inventaire des serveurs et baies", d: "Localisation précise de chaque équipement dans la salle." },
      { t: "Suivi des mouvements", d: "Traçabilité des entrées, sorties et déplacements de matériel." },
      { t: "Synchronisation CMDB / DCIM", d: "Un référentiel fiable, mis à jour à partir des lectures terrain." },
      { t: "Sécurité physique", d: "Contrôle d'accès et alertes en cas de sortie non autorisée." },
    ],
    faq: [
      {
        q: "Comment la RFID accélère-t-elle l'audit d'un data center ?",
        a: "Au lieu de relever manuellement les numéros de série, le technicien passe un lecteur RFID devant les baies : toutes les étiquettes sont lues en quelques secondes et comparées automatiquement au référentiel.",
      },
      {
        q: "Les tags RFID fonctionnent-ils sur des serveurs métalliques ?",
        a: "Oui, en utilisant des tags on-metal conçus pour les châssis et équipements informatiques.",
      },
      {
        q: "La solution est-elle compatible avec notre CMDB ?",
        a: "Oui. Les données RFID peuvent être synchronisées avec votre CMDB ou votre outil DCIM via API ou fichiers d'échange.",
      },
      {
        q: "Peut-on détecter la sortie non autorisée d'un équipement ?",
        a: "Oui. Des lecteurs placés aux accès de la salle détectent le passage des équipements étiquetés et déclenchent une alerte si la sortie n'est pas autorisée.",
      },
      { q: "Quel est le prix d'une solution RFID pour data center ?", a: PRICE_ANSWER },
    ],
    related: ["rfid-it-asset-management", "solution-gestion-actifs", "rfid-government", "services", "home"],
    service: {
      name: "Solution RFID data center en Tunisie",
      type: "Inventaire RFID des équipements de data center",
      description:
        "Inventaire RFID des serveurs, baies et équipements réseau, suivi des mouvements et synchronisation CMDB pour data centers en Tunisie.",
    },
    cta: "Auditer ma salle serveurs",
  },

  /* ──────────────────────── GOUVERNEMENT ─────────────────────── */
  "rfid-government": {
    path: "/it-solution/rfid-government",
    eyebrow: "RFID Gouvernement Tunisie",
    title: "RFID gouvernement en Tunisie : patrimoine public et archives maîtrisés",
    intro: [
      "Ministères, collectivités locales, établissements publics et entreprises publiques en Tunisie gèrent un patrimoine considérable : mobilier, matériel informatique, véhicules, archives et documents. La solution RFID gouvernement de RFIDIA aide les administrations à inventorier ce patrimoine, à sécuriser les archives et à faciliter les audits de conformité.",
      "Chaque bien est identifié par une étiquette RFID liée au registre du patrimoine. Les inventaires annuels se réalisent en quelques jours au lieu de plusieurs semaines, et les dossiers d'archives sont localisés instantanément. Les accès aux bâtiments et aux zones sensibles peuvent être contrôlés par badge RFID.",
      "La solution renforce la transparence de la gestion publique et la traçabilité des biens, avec une démarche progressive adaptée aux procédures administratives.",
    ],
    points: [
      { t: "Inventaire du patrimoine public", d: "Rapprochement rapide entre registre et terrain pour chaque bien." },
      { t: "Gestion des archives", d: "Localisation des dossiers, suivi des prêts et sécurisation des documents." },
      { t: "Contrôle d'accès", d: "Badges RFID pour les bâtiments administratifs et les zones sensibles." },
      { t: "Audits facilités", d: "Rapports fiables et historique complet pour les contrôles." },
    ],
    faq: [
      {
        q: "Comment la RFID facilite-t-elle l'inventaire du patrimoine public ?",
        a: "Chaque bien porte une étiquette RFID ; un agent équipé d'un lecteur portable inventorie une salle entière en quelques instants. Les écarts avec le registre sont listés automatiquement.",
      },
      {
        q: "Peut-on gérer des archives papier avec la RFID ?",
        a: "Oui. Les dossiers et boîtes d'archives sont étiquetés, ce qui permet de les localiser rapidement, de suivre les prêts et de détecter les sorties non autorisées.",
      },
      {
        q: "La solution convient-elle aux collectivités locales ?",
        a: "Oui. Elle s'adapte aux municipalités, gouvernorats et établissements publics, quelle que soit la taille du patrimoine à gérer.",
      },
      {
        q: "Les données sont-elles hébergées de façon sécurisée ?",
        a: "Nous proposons des architectures sécurisées, avec contrôle des accès et chiffrement des échanges, et étudions l'hébergement adapté aux exigences de chaque organisme.",
      },
      { q: "Quel est le prix d'une solution RFID pour une administration ?", a: PRICE_ANSWER },
    ],
    related: ["solution-gestion-actifs", "rfid-it-asset-management", "solution-ecole", "services", "home"],
    service: {
      name: "Solution RFID gouvernement et secteur public en Tunisie",
      type: "Inventaire RFID du patrimoine public et gestion des archives",
      description:
        "Inventaire RFID du patrimoine, gestion des archives et contrôle d'accès pour ministères, collectivités et établissements publics en Tunisie.",
    },
    cta: "Échanger sur mon organisme",
  },

  /* ───────────────────── IT ASSET MANAGEMENT ─────────────────── */
  "rfid-it-asset-management": {
    path: "/it-solution/rfid-it-asset-management",
    eyebrow: "RFID IT Asset Management Tunisie",
    title: "RFID IT Asset Management en Tunisie : un parc informatique toujours à jour",
    intro: [
      "Ordinateurs portables introuvables, écrans déplacés sans trace, inventaires informatiques qui prennent des semaines : les DSI des entreprises et administrations tunisiennes connaissent bien ces difficultés. La solution RFID IT Asset Management de RFIDIA digitalise le suivi du parc informatique tout au long de son cycle de vie.",
      "Chaque PC, écran, imprimante, serveur ou équipement réseau reçoit une étiquette RFID. L'inventaire d'un étage se fait en quelques minutes avec un lecteur portable, les affectations aux collaborateurs sont tracées et les sorties de matériel sont détectées. Les informations se synchronisent avec votre outil ITAM ou votre CMDB.",
      "Vous disposez d'un référentiel fiable pour vos audits, vos renouvellements de matériel et la sécurité de vos données.",
    ],
    points: [
      { t: "Inventaire informatique rapide", d: "Un étage ou un site entier inventorié en quelques minutes." },
      { t: "Affectation et cycle de vie", d: "Suivi de l'attribution, de la maintenance et de la mise au rebut." },
      { t: "Prévention des pertes", d: "Détection des sorties de matériel et alertes sur les équipements sensibles." },
      { t: "Intégration ITAM / CMDB", d: "Un référentiel synchronisé avec vos outils de gestion IT." },
    ],
    faq: [
      {
        q: "Pourquoi utiliser la RFID pour gérer un parc informatique ?",
        a: "La RFID permet d'inventorier des dizaines d'équipements en une seule lecture, sans avoir à accéder aux numéros de série. Les inventaires sont plus rapides, plus fréquents et plus fiables.",
      },
      {
        q: "Quelle différence avec un inventaire logiciel du parc ?",
        a: "Un outil logiciel ne voit que les équipements connectés au réseau. La RFID identifie physiquement tous les équipements, y compris ceux éteints, stockés ou non connectés.",
      },
      {
        q: "Les étiquettes RFID abîment-elles le matériel ?",
        a: "Non. Les étiquettes sont discrètes, adhésives et adaptées aux surfaces plastiques ou métalliques des équipements informatiques.",
      },
      {
        q: "La solution s'intègre-t-elle à notre outil ITAM ?",
        a: "Oui. Les lectures RFID peuvent être synchronisées avec votre ITAM, votre CMDB ou votre outil de helpdesk.",
      },
      { q: "Quel est le prix d'une solution RFID IT Asset Management ?", a: PRICE_ANSWER },
    ],
    related: ["rfid-data-center", "solution-gestion-actifs", "rfid-government", "solution-ecole", "services", "home"],
    service: {
      name: "Solution RFID IT Asset Management en Tunisie",
      type: "Inventaire RFID du parc informatique",
      description:
        "Inventaire RFID du parc informatique, suivi des affectations et intégration ITAM/CMDB pour entreprises et administrations en Tunisie.",
    },
    cta: "Auditer mon parc IT",
  },
};
