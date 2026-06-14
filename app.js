const itinerary = {
  overview: {
    totalKm: 920,
    totalNights: 12,
    reservations: 8,
    maxDrive: "2h45",
    rhythm: "Tres raisonnable en famille",
    note:
      "Les durees de trajet incluent une marge de 15 a 30 min par rapport au temps GPS pour les pauses, la circulation estivale et les routes sinueuses.",
  },
  highlights: [
    "🏛️ Palerme, Catane, Syracuse et Raguse pour la dimension culturelle",
    "🏖️ Cefalu, Isola Bella, Lido di Noto et Scala dei Turchi pour les plages",
    "🌋 Excursion complete a l'Etna avec telepherique et randonnee guidee",
    "🏨 8 hebergements seulement pour 12 nuits, avec un rythme optimise",
  ],
  strengths: [
    {
      title: "✈️ Arrivee fluide",
      description: "Pas de longue route a l'arrivee : les deux premieres nuits restent a Palerme pour lancer le voyage sereinement.",
    },
    {
      title: "🧳 Reservations regroupees",
      description: "Taormine et Syracuse concentrent plusieurs nuits pour limiter les check-in et les trajets inutiles.",
    },
    {
      title: "🌿 Rythme progressif",
      description: "Alternance entre visites, plages, baroque sicilien, nature et trajets raisonnables.",
    },
    {
      title: "🛫 Fin securisee",
      description: "Derniere nuit pres de l'aeroport de Palerme pour un depart tres tot sans stress.",
    },
  ],
  kpis: [
    { label: "🛣️ Distance totale", value: "~920 km", detail: "validation des trajets incluse" },
    { label: "⏱️ Duree max / jour", value: "2h45", detail: "avec marge de confort" },
    { label: "🏠 Reservations", value: "8", detail: "pour 12 nuits" },
    { label: "👨‍👩‍👧‍👦 Style de voyage", value: "Famille", detail: "culture, mer, nature" },
  ],
  days: [
    {
      day: 1,
      date: "Mar. 11 aout",
      title: "Arrivee a Palerme",
      stay: "Palerme",
      themes: ["logistique", "culture"],
      items: [
        { text: "13:35 → 16:00 arrivee a Palerme et recuperation de la voiture" },
        { text: "Installation a l'hotel et premiere respiration dans le centre historique" },
        { text: "Balade de reperage : Quattro Canti et Piazza Pretoria", map: "Quattro Canti, Palermo, Sicily" },
        { text: "Diner street food sicilienne : arancini, panelle, sfincione" },
      ],
    },
    {
      day: 2,
      date: "Mer. 12 aout",
      title: "Palerme journee complete",
      stay: "Palerme",
      themes: ["culture"],
      items: [
        { text: "Palazzo dei Normanni et Cappella Palatina", map: "Palazzo dei Normanni, Palermo, Sicily" },
        { text: "Cathedrale de Palerme, Ballaro et San Giovanni degli Eremiti", map: "Cattedrale di Palermo, Sicily" },
        { text: "Balade dans le centre historique et marches locaux" },
        { text: "Diner street food sicilienne dans les ruelles de Palerme" },
      ],
    },
    {
      day: 3,
      date: "Jeu. 13 aout",
      title: "Palerme → Cefalu",
      stay: "Cefalu",
      themes: ["route", "plage", "culture"],
      items: [
        { text: "Route Palerme → Cefalu : 1h15 estimee, ~70 km" },
        { text: "Duomo di Cefalu, Lavatoio medievale et ruelles du centre", map: "Duomo di Cefalù, Sicily" },
        { text: "Option : Rocca di Cefalu pour un panorama exceptionnel", map: "Rocca di Cefalù, Sicily" },
        { text: "Apres-midi plage et diner sur le front de mer" },
      ],
    },
    {
      day: 4,
      date: "Ven. 14 aout",
      title: "Cefalu → Taormine",
      stay: "Taormine",
      themes: ["route", "panorama"],
      items: [
        { text: "Route cotiere Cefalu → Taormine : 2h45 estimees, ~165 km" },
        { text: "Arrivee a Taormine et premiere decouverte du Corso Umberto", map: "Corso Umberto, Taormina, Sicily" },
        { text: "Piazza IX Aprile et traversee du centre historique", map: "Piazza IX Aprile, Taormina, Sicily" },
        { text: "Aperitivo avec vue sur la baie" },
      ],
    },
    {
      day: 5,
      date: "Sam. 15 aout",
      title: "Taormine → Nicolosi",
      stay: "Nicolosi",
      themes: ["plage", "route"],
      items: [
        { text: "Theatre grec avec vue sur l'Etna et la mer", map: "Teatro Antico di Taormina, Sicily" },
        { text: "Descente vers Isola Bella pour plage et snorkeling", map: "Isola Bella, Taormina, Sicily" },
        { text: "Taormine → Nicolosi : 1h10, ~55 km" },
        { text: "Installation a Nicolosi, au pied de l'Etna" },
      ],
    },
    {
      day: 6,
      date: "Dim. 16 aout",
      title: "Excursion Etna",
      stay: "Nicolosi",
      themes: ["nature", "aventure"],
      items: [
        { text: "Nicolosi → Rifugio Sapienza : 45 min, ~20 km", map: "Rifugio Sapienza, Etna, Sicily" },
        { text: "Telepherique jusqu'a 2 500 m puis randonnee guidee", map: "Funivia dell'Etna, Sicily" },
        { text: "Paysages de lave, crateres et panorama complet sur l'ile" },
        { text: "Retour a Nicolosi en fin de journee" },
      ],
    },
    {
      day: 7,
      date: "Lun. 17 aout",
      title: "Nicolosi → Syracuse via Catane",
      stay: "Syracuse",
      themes: ["route", "culture"],
      items: [
        { text: "Nicolosi → Catane : 30 min, ~18 km" },
        { text: "Arret a Catane : marche aux poissons, Via Etnea, Piazza Duomo", map: "Piazza Duomo, Catania, Sicily" },
        { text: "Catane → Syracuse : 1h15, ~60 km" },
        { text: "Installation a Syracuse" },
      ],
    },
    {
      day: 8,
      date: "Mar. 18 aout",
      title: "Syracuse + Noto",
      stay: "Syracuse",
      themes: ["culture", "plage"],
      items: [
        { text: "Ortigia : Piazza Duomo, Fonte Aretusa et marche", map: "Fonte Aretusa, Syracuse, Sicily" },
        { text: "Excursion Syracuse → Noto : 45 min, ~33 km" },
        { text: "Noto : Corso Vittorio Emanuele, cathedrale San Nicolo et Palazzo Nicolaci", map: "Cattedrale di Noto, Sicily" },
        { text: "Option plage : Lido di Noto ou Calamosche", map: "Lido di Noto, Sicily" },
      ],
    },
    {
      day: 9,
      date: "Mer. 19 aout",
      title: "Modica + Raguse",
      stay: "Raguse",
      themes: ["culture", "gastronomie"],
      items: [
        { text: "Syracuse → Modica : 1h30, ~70 km" },
        { text: "Degustation du chocolat de Modica chez Bonajuto", map: "Antica Dolceria Bonajuto, Modica, Sicily" },
        { text: "Modica → Raguse : 30 min, ~16 km" },
        { text: "Ragusa Ibla, Giardino Ibleo et diner en trattoria", map: "Ragusa Ibla, Sicily" },
      ],
    },
    {
      day: 10,
      date: "Jeu. 20 aout",
      title: "Raguse → Agrigente",
      stay: "Agrigente",
      themes: ["route", "culture"],
      items: [
        { text: "Route Raguse → Agrigente : 2h30, ~130 km" },
        { text: "Vallee des Temples en fin de journee", map: "Valle dei Templi, Agrigento, Sicily" },
        { text: "Temple de la Concorde, Junon et Heracles", map: "Tempio della Concordia, Agrigento, Sicily" },
        { text: "Jardin de la Kolymbethra et lumiere doree au coucher du soleil", map: "Giardino della Kolymbethra, Agrigento, Sicily" },
      ],
    },
    {
      day: 11,
      date: "Ven. 21 aout",
      title: "Scala dei Turchi → Alcamo",
      stay: "Alcamo",
      themes: ["plage", "route"],
      items: [
        { text: "Agrigente → Scala dei Turchi : 25 min, ~15 km", map: "Scala dei Turchi, Sicily" },
        { text: "Falaises blanches et baignade si les conditions le permettent" },
        { text: "Scala dei Turchi → Alcamo : 2h15, ~130 km" },
        { text: "Installation a Alcamo et diner en centre-ville" },
      ],
    },
    {
      day: 12,
      date: "Sam. 22 aout",
      title: "Zingaro et derniere journee",
      stay: "Alcamo",
      themes: ["nature", "route"],
      items: [
        { text: "Alcamo → Riserva dello Zingaro : 50 min, ~40 km", map: "Riserva Naturale dello Zingaro, Sicily" },
        { text: "Randonnee cotiere et baignade dans les criques" },
        { text: "Retour a Alcamo en fin d'apres-midi" },
        { text: "Dernier diner sicilien au calme" },
      ],
    },
    {
      day: 13,
      date: "Dim. 23 aout",
      title: "Retour",
      stay: "—",
      themes: ["logistique"],
      items: [
        { text: "Vol a 06:30" },
        { text: "Alcamo → Palerme aeroport : 45 min, ~45 km" },
        { text: "Depart vers 03:30" },
      ],
    },
  ],
  routes: [
    [3, "Palerme → Cefalu", "1h", "1h15", "~70 km"],
    [4, "Cefalu → Taormina", "2h15", "2h45", "~165 km"],
    [5, "Taormina → Nicolosi", "50 min", "1h10", "~55 km"],
    [6, "Nicolosi → Rifugio Sapienza (Etna Sud)", "35 min", "45 min", "~20 km"],
    [6, "Rifugio Sapienza → Nicolosi (retour)", "35 min", "45 min", "~20 km"],
    [7, "Nicolosi → Catane", "20 min", "30 min", "~18 km"],
    [7, "Catane → Syracuse", "1h", "1h15", "~60 km"],
    [8, "Syracuse → Noto", "35 min", "45 min", "~33 km"],
    [8, "Noto → Syracuse", "35 min", "45 min", "~33 km"],
    [9, "Syracuse → Modica", "1h15", "1h30", "~70 km"],
    [9, "Modica → Raguse", "20 min", "30 min", "~16 km"],
    [10, "Raguse → Agrigente", "2h", "2h30", "~130 km"],
    [11, "Agrigente → Scala dei Turchi", "20 min", "25 min", "~15 km"],
    [11, "Scala dei Turchi → Alcamo", "1h45", "2h15", "~130 km"],
    [12, "Alcamo → Riserva dello Zingaro", "40 min", "50 min", "~40 km"],
    [12, "Riserva dello Zingaro → Alcamo", "40 min", "50 min", "~40 km"],
    [13, "Alcamo → Palerme aeroport", "35 min", "45 min", "~45 km"],
  ],
  stays: [
    [1, "Palerme", "Mar. 11 - Mer. 12 aout", 2, "11 aout", "13 aout", "Via Pietro Amodei, 8, Palerme, Sicilia 90134, Italie"],
    [2, "Cefalu", "Jeu. 13 aout", 1, "13 aout", "14 aout", "Via Teresita Sandeschi, 2 piano terra, Cefalù, Sicilia 90015, Italie"],
    [3, "Taormine", "Ven. 14 aout", 1, "14 aout", "15 aout", "Family House Turiddu, Fiumefreddo di Sicilia, Sicilia, Italie", "37.7934,15.2160754"],
    [4, "Nicolosi", "Sam. 15 - Dim. 16 aout", 2, "15 aout", "17 aout", "Viale Aldo Moro, 14/A Interno 8, Nicolosi, Sicile 95030, Italie"],
    [5, "Syracuse", "Lun. 17 - Mar. 18 aout", 2, "17 aout", "19 aout", "Via Carlo Forlanini, 3, Syracuse, Sicile 96100, Italie"],
    [6, "Raguse", "Mer. 19 aout", 1, "19 aout", "20 aout", "Corso Mazzini, 111, Raguse, Sicilia 97100, Italie"],
    [7, "Agrigente", "Jeu. 20 aout", 1, "20 aout", "21 aout", "Vicolo San Pietro, 10, Agrigente, Sicilia 92100, Italie"],
    [8, "Alcamo", "Ven. 21 - Sam. 22 aout", 2, "21 aout", "23 aout", "Via Perseo, 5, Alcamo, Sicile 91011, Italie"],
  ],
  mapStops: [
    { name: "Palerme", lat: 38.1157, lng: 13.3615, type: "night", day: "J1-J2", note: "Arrivee et deux premieres nuits" },
    { name: "Cefalu", lat: 38.0386, lng: 14.0229, type: "night", day: "J3", note: "Vieille ville et plage" },
    { name: "Taormina", lat: 37.8516, lng: 15.2853, type: "night", day: "J4", note: "Centre historique et Isola Bella" },
    { name: "Nicolosi", lat: 37.6133, lng: 15.0253, type: "night", day: "J5-J6", note: "Base pour l'Etna" },
    { name: "Etna Sud", lat: 37.6997, lng: 14.9994, type: "visit", day: "J6", note: "Excursion volcan" },
    { name: "Catane", lat: 37.5079, lng: 15.083, type: "visit", day: "J7", note: "Pause culture et marche" },
    { name: "Syracuse", lat: 37.0755, lng: 15.2866, type: "night", day: "J7-J8", note: "Ortigia et base sud-est" },
    { name: "Noto", lat: 36.8924, lng: 15.0699, type: "visit", day: "J8", note: "Ville baroque" },
    { name: "Modica", lat: 36.8588, lng: 14.7601, type: "visit", day: "J9", note: "Chocolat et centre historique" },
    { name: "Raguse", lat: 36.9269, lng: 14.7255, type: "night", day: "J9", note: "Nuit a Raguse" },
    { name: "Agrigente", lat: 37.3111, lng: 13.5765, type: "night", day: "J10", note: "Vallee des Temples" },
    { name: "Scala dei Turchi", lat: 37.2899, lng: 13.4728, type: "visit", day: "J11", note: "Falaises blanches" },
    { name: "Alcamo", lat: 37.9789, lng: 12.9639, type: "night", day: "J11-J12", note: "Base pour Zingaro et depart" },
    { name: "Riserva dello Zingaro", lat: 38.1026, lng: 12.8075, type: "visit", day: "J12", note: "Randonnee et criques" },
    { name: "Palerme aeroport", lat: 38.1759, lng: 13.091, type: "visit", day: "J13", note: "Vol retour" },
  ],
};

// Donnees detaillees des reservations (hebergements), affichees en popup
// pour chaque lieu du fil de voyage. Indexees par le nom d'etape (day.stay).
const reservations = {
  Palerme: {
    logement: "Paola Apartments 1",
    address: "Via Pietro Amodei, 8, Palermo, Sicilia 90134",
    mapQuery: "38.1141109,13.3619997",
    dates: "11 et 12 août (2 nuits)",
    arrival: "15:00 - 21:00",
    departure: "Avant 10:00",
    arrivalType:
      "Accueil par l'hôte. Contactez votre hôte pour connaître la procédure d'arrivée.",
    extraRules:
      "Si vous vous enregistrez après 21 h 00, un supplément est prévu ; de 21 h 00 à 24 h 00 de 15 € et de 24 h 00 à 2 h 00 de 30 €.",
    booking: { label: "Numéro de réservation", value: "HMHJ8Z4KRC" },
    payment: { total: "302,72 €", paid: "0,00 €", refund: "0,00 €" },
    paymentLines: [
      { label: "À venir", text: "Due 2 août | Visa 9860 | Palermo · 11 août–13 août | 302,72 € EUR" },
    ],
    cancellation: [
      "Avant 10 août 15:00 : Remboursement intégral. Obtenez un remboursement de 100 % du montant que vous avez payé.",
      "Avant 11 août 15:00 : Remboursement partiel. Obtenez le remboursement de toutes les nuits, à l'exception de la première. Aucun remboursement de la première nuit ni des frais de service.",
      "Après 11 août 15:00 : Aucun remboursement. Cette réservation n'est pas remboursable.",
    ],
  },
  Cefalu: {
    logement: "Logement entier : appartement | maison citron cefalù",
    address: "Via Teresita Sandeschi, 2 piano terra, Cefalù, Sicilia 90015, Italie",
    mapQuery: "38.03616940000001,14.021396",
    dates: "13 août (1 nuit) | jeu. 13 – ven. 14 août",
    host: "Raffaele",
    arrival: "15:00 - 01:00",
    departure: "Avant 10:00",
    arrivalType: "Arrivée autonome avec Boîte à clé sécurisée.",
    booking: { label: "Numéro de réservation", value: "HMWXKPZM98" },
    payment: { total: "250,00 €", paid: "0,00 €", refund: "0,00 €" },
    paymentLines: [
      { label: "À venir", text: "Due 4 août | Visa 9860 | Cefalù · 13 août–14 août | 250,00 € EUR" },
    ],
    cancellation: [
      "Avant 12 août 15:00 : Remboursement intégral. Obtenez un remboursement de 100 % du montant que vous avez payé.",
      "Après 12 août 15:00 : Aucun remboursement. Cette réservation n'est pas remboursable.",
    ],
  },
  Taormine: {
    logement: "Logement entier : appartement | Maison familiale Turiddu",
    address: "Via Badalà, 79, Fiumefreddo Sicilia, Sicilia 95013",
    mapQuery: "37.7934,15.2160754",
    dates: "14 août (1 nuit) : départ le 15 au matin | ven. 14 – sam. 15 août",
    host: "Family House Turiddu",
    arrival: "15:00 - 20:00",
    departure: "Avant 11:00",
    arrivalType: "Contactez votre hôte pour connaître la procédure d'arrivée.",
    booking: { label: "Numéro de reçu", value: "RCSFHR85XX", note: "Paiement effectué le 10 juin 2026" },
    payment: { total: "161,38 €", paid: "161,38 €", refund: "161,38 €", status: "Effectué." },
    cancellation: [
      "Avant 9 août 15:00 : Remboursement intégral. Obtenez un remboursement de 100 % du montant que vous avez payé.",
      "Après 9 août 15:00 : Aucun remboursement. Cette réservation n'est pas remboursable.",
    ],
  },
  Nicolosi: {
    logement: "Casa vacanze sull'Etna, \"Olivo\"",
    address:
      "Viale Aldo Moro, 14/A (Aussi indiqué : Viale Aldo Moro Trav. 14 int. 8, 95030 Nicolosi (CT))",
    mapQuery: "37.61569955471903,15.018592178821564",
    keywords: "« Etna Holiday Home, Nicolosi, CT »",
    gps: "37.61569955471903 - 15.018592178821564",
    directions:
      "De Catane, suivre les indications pour « Paesi Etnei Circonvallazione Catania ». Une fois sur la « Tangenziale Catania » (très large route à deux voies), prendre la sortie « Gravina di Catania - Etna Sud », et continuer vers Mascalucia et Nicolosi. Une fois arrivé à Nicolosi : Depuis la place principale de la ville (Piazza Vittorio Emanuele, où se trouvent l'église principale, une fontaine et la mairie), continuer tout droit en direction du Nord jusqu'à un rond-point de distribution du trafic qui a au centre une fontaine. À ce stade, vous devez prendre la direction ouest, à votre gauche, le Viale della Regione, qui est une avenue bordée d'arbres. Viale Aldo Moro est le nom que prend cette avenue après un petit rond-point avec un olivier au centre. Vous devez continuer encore très peu, jusqu'au parking Calvario sur votre droite, et vous êtes pratiquement arrivés. En haut du parking, prenez la route à droite. J'habite dans la troisième villa sur la droite, il y a un jardin avec de grands arbres, la maison de vacances est la villa à côté (notre structure ressemble beaucoup).",
    dates:
      "15 et 16 août (2 nuits) : arrivée le 15 après-midi, départ le 17 au matin à 10:00 | Réservation du 15 août–17 août",
    host: "Rosario",
    contact:
      "+39 3275427905 (Vous pouvez envoyer un message texte lorsque vous arrivez à Nicolosi ou pour toute information).",
    arrival: "L'enregistrement peut avoir lieu à partir de 15h00.",
    departure: "Le lundi 17 août à 10:00.",
    arrivalType:
      "L'hôte habite dans la maison voisine. Il est très important de lui faire connaître l'heure de votre arrivée, même approximativement, pour faciliter l'enregistrement. Question de l'hôte : À quelle heure pensez-vous arriver ?",
    booking: { label: "Numéro de réservation", value: "HM83TQKH3A" },
    paymentLines: [
      { label: "À venir", text: "Due 2 août | Visa 9860 | Nicolosi · 15 août–17 août | 188,28 € EUR" },
    ],
    cancellationNote:
      "Annulation gratuite avant le 10 août à 15:00. Si vous annulez avant l'arrivée prévue le 15 août à 15:00, vous aurez droit à un remboursement partiel.",
    cancellation: [
      "Avant 10 août 15:00 : Remboursement intégral. Obtenez un remboursement de 100 % du montant que vous avez payé.",
      "Avant 15 août 15:00 : Remboursement partiel. Obtenez un remboursement de 50 % du prix de chaque nuit, à l'exception de la première. Aucun remboursement de la première nuit ni des frais de service.",
      "Après 15 août 15:00 : Aucun remboursement. Cette réservation n'est pas remboursable.",
    ],
  },
  Syracuse: {
    logement: "PARC ARCHÉOLOGIQUE PLAT",
    address:
      "Via Carlo Forlanini, 3 Syracuse, Sicily 96100 (Aussi écrit : Via Carlo Forlanini, 3 intercom A : Turismo in Sicilia / flat at 1st floor, Syracuse, Sicile 96100, Italie)",
    mapQuery: "37.08068084716797,15.27458667755127",
    directions:
      "Da aeroporto Fontanarossa Catania: Uscita Siracusa sud. Via Carlo Forlanini 3, 96100 Siracusa. Le numéro 3 est une grande copropriété (big condominium) avec un portail automatique gris (automatic gray gate). L'interphone est le A. Sonner à : \"Guerriero / Raddino / Turismo in Sicilia\".",
    dates: "17 et 18 août (2 nuits) | lun. 17 – mer. 19 août",
    host: "Alice",
    arrival: "À partir de 15:00",
    departure: "Avant 10:00",
    arrivalType:
      "Accueil par l'hôte. Contactez votre hôte pour connaître la procédure d'arrivée.",
    booking: { label: "Numéro de réservation", value: "HM5WTTM3HA" },
    payment: { total: "263,11 €", paid: "0,00 €", refund: "0,00 €" },
    paymentLines: [
      { label: "À venir", text: "Due 8 août | Visa 9860 | Syracuse · 17 août–19 août | 263,11 € EUR" },
    ],
    cancellationNote:
      "Annulation gratuite avant le 16 août à 15:00. Si vous annulez avant l'arrivée prévue le 17 août à 15:00, vous aurez droit à un remboursement partiel.",
    cancellation: [
      "Avant 16 août 15:00 : Remboursement intégral. Obtenez un remboursement de 100 % du montant que vous avez payé.",
      "Avant 17 août 15:00 : Remboursement partiel. Obtenez le remboursement de toutes les nuits, à l'exception de la première. Aucun remboursement de la première nuit ni des frais de service.",
      "Après 17 août 15:00 : Aucun remboursement. Cette réservation n'est pas remboursable.",
    ],
  },
  Raguse: {
    logement: "Maison de vacances La Dimora di Angela",
    address: "Corso Mazzini, 111, Ragusa, Sicilia 97100",
    mapQuery: "36.9258986,14.7354065",
    parking:
      "Le parking est à 50 mètres de l'établissement, les clients seront accompagnés par le responsable de l'établissement au parking.",
    dates: "19 août (1 nuit) | mer. 19 – jeu. 20 août",
    host: "Angela",
    arrival: "À partir de 14:00",
    departure: "Avant 10:00",
    arrivalType:
      "Présence du responsable de l'établissement pour l'accompagnement au parking et à l'établissement.",
    booking: { label: "Numéro de réservation", value: "HM83QXT98X" },
    payment: { total: "150,85 €", paid: "0,00 €", refund: "0,00 €" },
    paymentLines: [
      { label: "À venir", text: "Due 10 août | Visa 9860 | Ragusa · 19 août–20 août | 150,85 € EUR" },
    ],
    cancellationNote:
      "Annulation gratuite avant le 18 août à 14:00. Passé ce délai, la réservation n'est pas remboursable.",
    cancellation: [
      "Avant 18 août 14:00 : Remboursement intégral. Obtenez un remboursement de 100 % du montant que vous avez payé.",
      "Après 18 août 14:00 : Aucun remboursement. Cette réservation n'est pas remboursable.",
    ],
  },
  Agrigente: {
    logement:
      "Logement entier : appartement | « Où la ville se sent comme à la maison. À quelques pas de tout »",
    address: "Vicolo San Pietro, 10 Agrigento, Sicilia 92100",
    mapQuery: "37.30970889999999,13.58433609325409",
    directions:
      "Vicolo San Pietro est situé dans le centre historique, où l'accès en voiture est limité et les parkings sont rares. Je vous recommande de laisser votre voiture dans l'un des parkings à proximité suivants et de continuer à pied :",
    access: [
      "Parking Piazzale Rosselli : (850 m, 10 min à pied) Proximité de la gare routière et ferroviaire. Spacieux et pratique pour laisser la voiture et se déplacer à pied dans le centre historique.",
      "Parking Pluripiano Via Empedocle : (500 m, 6 min à pied) Parking couvert et sécurisé.",
      "Parking Via Pietro Nenni : (700 m, 9 min à pied) Alternative gratuite avec plus de places disponibles.",
      "Depuis le parking jusqu'au Vicolo San Pietro 10 : Depuis n'importe lequel de ces parkings, vous pouvez rejoindre Vicolo San Pietro à pied en quelques minutes en traversant Via Atenea, la rue principale du centre historique. Une fois sur Via Atenea, tournez à droite dans Vicolo San Pietro et suivez la route jusqu'au numéro 10.",
    ],
    dates: "20 août (1 nuit) | jeu. 20 – ven. 21 août",
    host: "Lucio",
    arrival: "À partir de 15:00",
    departure: "Avant 10:00",
    arrivalType:
      "Accueil par l'hôte. Contactez votre hôte pour connaître la procédure d'arrivée. Message de l'hôte : Si vous avez besoin de plus amples informations, n'hésitez pas à me le faire savoir !",
    booking: { label: "Numéro de réservation", value: "HM3QB5TW3F" },
    payment: { total: "136,82 €", paid: "78,32 €", refund: "78,32 €" },
    paymentLines: [
      { label: "Effectués", text: "Paiement effectué 3 mai | Visa 9860 | Agrigento · 20 août–21 août | 78,32 € EUR" },
      { label: "À venir", text: "Due 5 août | Visa 9860 | Agrigento · 20 août–21 août | 58,50 € EUR" },
    ],
    cancellationNote:
      "Annulation gratuite avant le 21 juillet à 15:00. Si vous annulez avant le 13 août à 15:00, vous aurez droit à un remboursement partiel.",
    cancellation: [
      "Avant 21 juil. 15:00 : Remboursement intégral. Obtenez un remboursement de 100 % du montant que vous avez payé.",
      "Avant 13 août 15:00 : Remboursement partiel. Obtenez un remboursement de 50 % du prix de chaque nuit. Aucun remboursement des frais de service.",
      "Après 13 août 15:00 : Aucun remboursement. Cette réservation n'est pas remboursable.",
    ],
  },
  Alcamo: {
    logement: "Appartement face à la mer (100 m) | appartamento fronte mare (100mt)",
    address: "Via Perseo, 5 Alcamo, Sicily 91011",
    mapQuery: "38.026011701380405,12.928733559524526",
    directions:
      "Par l'A29, sortie Castellammare del Golfo en direction d'Alcamo Marina, SS 187 dir. Palerme, au coin de la Via Perseo, juste avant l'église Stella Maris.",
    dates: "21 et 22 août (2 nuits) : départ le 23 août | ven. 21 – dim. 23 août",
    host: "Fabio",
    arrival: "À partir de 14:00",
    departure: "Avant 10:00",
    arrivalType:
      "Accueil par l'hôte. Contactez votre hôte pour connaître la procédure d'arrivée.",
    booking: { label: "Numéro de réservation", value: "HMKKMQJBB5" },
    payment: { total: "205,82 €", paid: "0,00 €", refund: "0,00 €" },
    paymentLines: [
      { label: "À venir", text: "Due 12 août | Visa 9860 | Alcamo · 21 août–23 août | 205,82 € EUR" },
    ],
    cancellationNote:
      "Annulation gratuite avant le 20 août à 14:00. Si vous annulez avant l'arrivée prévue le 21 août à 14:00, vous aurez droit à un remboursement partiel.",
    cancellation: [
      "Avant 20 août 14:00 : Remboursement intégral. Obtenez un remboursement de 100 % du montant que vous avez payé.",
      "Avant 21 août 14:00 : Remboursement partiel. Obtenez le remboursement de toutes les nuits, à l'exception de la première. Aucun remboursement de la première nuit ni des frais de service.",
      "Après 21 août 14:00 : Aucun remboursement. Cette réservation n'est pas remboursable.",
    ],
  },
};

const dayImageMeta = {
  1: { image: "./assets/day-images/day-01.jpg", landmark: "Piazza Pretoria" },
  2: { image: "./assets/day-images/day-02.jpg", landmark: "Palazzo dei Normanni" },
  3: { image: "./assets/day-images/day-03.jpg", landmark: "Cefalu Cathedral" },
  4: { image: "./assets/day-images/day-04.jpg", landmark: "Taormina" },
  5: { image: "./assets/day-images/day-05.jpg", landmark: "Isola Bella" },
  6: { image: "./assets/day-images/day-06.jpg", landmark: "Mount Etna" },
  7: { image: "./assets/day-images/day-07.jpg", landmark: "Catania Cathedral" },
  8: { image: "./assets/day-images/day-08.jpg", landmark: "Noto Cathedral" },
  9: { image: "./assets/day-images/day-09.jpg", landmark: "Ragusa Ibla" },
  10: { image: "./assets/day-images/day-10.jpg", landmark: "Valley of the Temples" },
  11: { image: "./assets/day-images/day-11.jpg", landmark: "Scala dei Turchi" },
  12: { image: "./assets/day-images/day-12.jpg", landmark: "Riserva dello Zingaro" },
  13: { image: "./assets/day-images/day-13.jpg", landmark: "Aeroporto di Palermo-Punta Raisi" },
};

const filters = [
  { key: "all", label: "✨ Tout" },
  { key: "culture", label: "🏛️ Culture" },
  { key: "plage", label: "🏖️ Plages" },
  { key: "nature", label: "🌿 Nature" },
  { key: "route", label: "🚗 Trajets" },
  { key: "logistique", label: "🧭 Logistique" },
];

const themeMeta = {
  culture: { icon: "🏛️", label: "Culture" },
  plage: { icon: "🏖️", label: "Plages" },
  nature: { icon: "🌿", label: "Nature" },
  route: { icon: "🚗", label: "Trajets" },
  logistique: { icon: "🧭", label: "Logistique" },
  panorama: { icon: "🌅", label: "Panorama" },
  aventure: { icon: "🥾", label: "Aventure" },
  gastronomie: { icon: "🍝", label: "Gastronomie" },
};

function itemText(item) {
  return typeof item === "string" ? item : item.text;
}

function itemIcon(text) {
  const t = text.toLowerCase();
  if (/vol\s/.test(t) || /depart\s/.test(t) || (/arrivee/.test(t) && /aeroport|avion|vol|voiture/.test(t))) return "✈️";
  if (/\u2192.*km/.test(t) || /^route\s/i.test(t) || /\u2192.*min/.test(t) || /\u2192.*h\d/i.test(t)) return "🚗";
  if (/installation|hotel|check.?in/i.test(t)) return "🏨";
  if (/telepherique|cratere|lave|etna|volcan/i.test(t)) return "🌋";
  if (/randonnee|sentier/i.test(t)) return "🥾";
  if (/plage|baignade|snorkeling|crique/i.test(t)) return "🏖️";
  if (/diner|street food|degustation|trattoria|gastr/i.test(t)) return "🍽️";
  if (/duomo|palazzo|cathedrale|temple|teatro|piazza|cappella|chiesa|ortigia|baroque|corso|giardino|fonte/i.test(t)) return "🏛️";
  if (/panorama|vue|coucher du soleil|lumiere doree/i.test(t)) return "🌅";
  if (/marche|ballaro/i.test(t)) return "🛍️";
  if (/balade|promenade|traversee|ruelles|front de mer/i.test(t)) return "🚶";
  if (/riserva|zingaro|falaise|nature/i.test(t)) return "🏞️";
  if (/retour/i.test(t)) return "🔄";
  if (/option/i.test(t)) return "💡";
  return "▸";
}

function parseRouteFromText(text) {
  const match = text.match(/([A-ZÀ-Ü][\w\s'À-ü]+?)\s*\u2192\s*([A-ZÀ-Ü][\w\s'À-ü]+?)\s*:/);
  if (match) {
    let from = match[1].replace(/^(?:Route\s+(?:cotiere\s+)?|Excursion\s+)/i, "").trim();
    let to = match[2].trim();
    return { from, to };
  }
  return null;
}

function renderItem(item) {
  const it = typeof item === "string" ? { text: item } : item;
  const icon = itemIcon(it.text);
  const route = parseRouteFromText(it.text);

  let rendered = it.text;

  if (route) {
    const dirUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(route.from + ", Sicile, Italie")}&destination=${encodeURIComponent(route.to + ", Sicile, Italie")}&travelmode=driving`;
    rendered = `<a class="gmaps-link route-link" href="${dirUrl}" target="_blank" rel="noopener noreferrer" title="Voir l'itineraire sur Google Maps">${it.text}</a>`;
  }

  if (it.map) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(it.map)}`;
    rendered = `${rendered} <a class="gmaps-link" href="${url}" target="_blank" rel="noopener noreferrer" title="Voir sur Google Maps">📍</a>`;
  }

  return `<span class="item-icon" aria-hidden="true">${icon}</span> ${rendered}`;
}

function themeIcon(key) {
  return (themeMeta[key] && themeMeta[key].icon) || "🏷️";
}

function themeLabel(key) {
  return (themeMeta[key] && themeMeta[key].label) || key;
}

let activeFilter = "all";

const heroKpis = document.querySelector("#hero-kpis");
const highlightsList = document.querySelector("#highlights-list");
const statsGrid = document.querySelector("#stats-grid");
const filterBar = document.querySelector("#filter-bar");
const journeyGrid = document.querySelector("#journey-grid");
const routesTable = document.querySelector("#routes-table");
const staysTable = document.querySelector("#stays-table");
const servicePoints = document.querySelector("#service-points");

function createMapIcon(type, label) {
  return L.divIcon({
    className: "trip-map-marker",
    html: `<span class="trip-map-pin trip-map-pin-${type}">${label}</span>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -14],
  });
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getStopDayNumbers(stop) {
  const matches = String(stop.day).match(/\d+/g);
  if (!matches) return [];
  const nums = matches.map(Number);
  if (nums.length === 2) {
    const [a, b] = nums;
    const range = [];
    for (let i = a; i <= b; i++) range.push(i);
    return range;
  }
  return nums;
}

function buildStopPopup(stop, index) {
  const dayNums = getStopDayNumbers(stop);
  const days = dayNums
    .map((n) => itinerary.days.find((d) => d.day === n))
    .filter(Boolean);

  const typeLabel = stop.type === "night" ? "🌙 Nuit" : "📍 Visite";
  const total = itinerary.mapStops.length;
  const orderLabel = `Etape ${index + 1} / ${total}`;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;
  const nav = `
    <span class="trip-map-popup-nav">
      <button type="button" class="trip-map-popup-navbtn" data-stop-nav="${prevIndex}" aria-label="Etape précédente">◀</button>
      <button type="button" class="trip-map-popup-navbtn" data-stop-nav="${nextIndex}" aria-label="Etape suivante">▶</button>
    </span>`;

  const media = days.length && dayImageMeta[days[0].day]
    ? dayImageMeta[days[0].day]
    : null;

  let nights = "";
  if (stop.type === "night" && days.length) {
    const first = days[0];
    const last = days[days.length - 1];
    const nightCount = days.length;
    nights = `<div class="trip-map-popup-row">🛏️ <strong>${nightCount} nuit${nightCount > 1 ? "s" : ""}</strong> <span>${first.date}${last !== first ? ` → ${last.date}` : ""}</span></div>`;
  }

  const programs = days
    .map((d) => {
      const items = d.items
        .slice(0, 3)
        .map((it) => `<li>${escapeHtml(itemText(it))}</li>`)
        .join("");
      const chip = days.length > 1 ? `<span class="trip-map-popup-chip">J${d.day}</span>` : "";
      return `
        <div class="trip-map-popup-day">
          <div class="trip-map-popup-day-head">
            ${chip}
            <strong>${escapeHtml(d.title)}</strong>
          </div>
          <ul>${items}</ul>
        </div>
      `;
    })
    .join("");

  const themes = days.length
    ? `<div class="trip-map-popup-tags">${[...new Set(days.flatMap((d) => d.themes))]
        .map((t) => `<span>${themeIcon(t)} ${escapeHtml(themeLabel(t))}</span>`)
        .join("")}</div>`
    : "";

  const gmaps = `https://www.google.com/maps/search/?api=1&query=${stop.lat},${stop.lng}`;

  return `
    <article class="trip-map-popup" data-stop-index="${index}">
      ${media ? `
        <figure class="trip-map-popup-media">
          <img src="${media.image}" alt="${escapeHtml(media.landmark)}" loading="lazy" data-zoom-src="${media.image}" data-zoom-caption="${escapeHtml(stop.name)} - ${escapeHtml(media.landmark)}" />
          <figcaption>📸 ${escapeHtml(media.landmark)}</figcaption>
        </figure>
      ` : ""}
      <header>
        <div class="trip-map-popup-eyebrow-row">
          <span class="trip-map-popup-eyebrow">${typeLabel} · ${orderLabel}</span>
          ${nav}
        </div>
        <h4>${escapeHtml(stop.name)}</h4>
        <span class="trip-map-popup-day-range">${escapeHtml(stop.day)}</span>
      </header>
      <p class="trip-map-popup-note">${escapeHtml(stop.note)}</p>
      ${nights}
      ${programs ? `<div class="trip-map-popup-programs">${programs}</div>` : ""}
      ${themes}
      <footer class="trip-map-popup-footer">
        <a href="${gmaps}" target="_blank" rel="noreferrer">🗺️ Ouvrir dans Google Maps</a>
      </footer>
    </article>
  `;
}

function renderMap() {
  const mapElement = document.querySelector("#trip-map");

  if (!mapElement || typeof L === "undefined") {
    return;
  }

  const map = L.map(mapElement, {
    scrollWheelZoom: false,
    zoomControl: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const route = itinerary.mapStops.map((stop) => [stop.lat, stop.lng]);

  const path = L.polyline(route, {
    color: "#c65c35",
    weight: 5,
    opacity: 0.9,
    lineJoin: "round",
  }).addTo(map);

  const markers = [];
  itinerary.mapStops.forEach((stop, index) => {
    const label = stop.type === "night" ? "🌙" : "📍";
    const marker = L.marker([stop.lat, stop.lng], {
      icon: createMapIcon(stop.type, label),
      title: stop.name,
    }).addTo(map);

    marker.bindPopup(buildStopPopup(stop, index), {
      maxWidth: 400,
      minWidth: 340,
      className: "trip-map-popup-wrapper",
    });
    markers.push(marker);
  });

  let currentStopIndex = -1;

  map.on("popupopen", (e) => {
    const root = e.popup.getElement();
    if (!root) return;
    const article = root.querySelector("[data-stop-index]");
    if (article) {
      currentStopIndex = parseInt(article.getAttribute("data-stop-index"), 10);
    }
    root.querySelectorAll("[data-stop-nav]").forEach((btn) => {
      btn.addEventListener("click", (ev) => {
        ev.preventDefault();
        const target = parseInt(btn.getAttribute("data-stop-nav"), 10);
        gotoStop(target);
      });
    });
  });

  map.on("popupclose", () => {
    currentStopIndex = -1;
  });

  function gotoStop(target) {
    const m = markers[target];
    if (!m) return;
    map.closePopup();
    map.panTo(m.getLatLng(), { animate: true });
    m.openPopup();
  }

  document.addEventListener("keydown", (ev) => {
    if (currentStopIndex < 0) return;
    // Don't hijack keys while lightbox is open or user is typing
    const lb = document.getElementById("lightbox");
    if (lb && !lb.hidden) return;
    const tag = (ev.target && ev.target.tagName) || "";
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
    const total = markers.length;
    if (ev.key === "ArrowRight") {
      ev.preventDefault();
      gotoStop((currentStopIndex + 1) % total);
    } else if (ev.key === "ArrowLeft") {
      ev.preventDefault();
      gotoStop((currentStopIndex - 1 + total) % total);
    } else if (ev.key === "Escape") {
      ev.preventDefault();
      map.closePopup();
    }
  });

  map.fitBounds(path.getBounds(), {
    padding: [28, 28],
  });
}

function renderHeroKpis() {
  heroKpis.innerHTML = itinerary.kpis
    .map(
      (item) => `
        <div class="kpi-item">
          <div>
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </div>
          <small>${item.detail}</small>
        </div>
      `,
    )
    .join("");
}

function renderHighlights() {
  highlightsList.innerHTML = itinerary.highlights
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderStats() {
  const cards = [
    {
      label: "🛣️ Total estime",
      value: `~${itinerary.overview.totalKm} km`,
      description: "distance globale sur l'ensemble du sejour",
    },
    {
      label: "🌙 Nuits",
      value: itinerary.overview.totalNights,
      description: "12 nuits organisees avec peu de changements",
    },
    {
      label: "🏨 Reservations",
      value: itinerary.overview.reservations,
      description: "Airbnb a reserver pour couvrir tout le voyage",
    },
    {
      label: "⏳ Temps fort",
      value: itinerary.overview.maxDrive,
      description: "plus longue etape, marge comprise",
    },
  ];

  statsGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="stat-card">
          <span>${card.label}</span>
          <strong>${card.value}</strong>
          <p>${card.description}</p>
        </article>
      `,
    )
    .join("");
}

function renderFilters() {
  filterBar.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-button ${filter.key === activeFilter ? "is-active" : ""}" data-filter="${filter.key}">
          ${filter.label}
        </button>
      `,
    )
    .join("");

  filterBar.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderJourney();
    });
  });
}

const stayAddressMap = {};
itinerary.stays.forEach(([, city, , , , , address, mapQuery]) => {
  if (address && !address.startsWith("TODO")) {
    stayAddressMap[city] = { address, query: mapQuery || address };
  }
});

function renderStayPill(stayName) {
  const reservation = reservations[stayName];
  if (reservation) {
    return `<button type="button" class="stay-pill stay-pill-button" data-reservation="${escapeHtml(stayName)}" aria-haspopup="dialog" title="Voir les details de la reservation">🏨 Nuit : ${escapeHtml(stayName)} <span class="stay-pill-cta">ℹ️ Détails</span></button>`;
  }
  const stay = stayAddressMap[stayName];
  if (stay) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.query)}`;
    return `<a class="stay-pill stay-pill-link" href="${url}" target="_blank" rel="noopener noreferrer" title="Voir l'hebergement sur Google Maps">🏨 Nuit : ${stayName} 📍</a>`;
  }
  return `<span class="stay-pill">🏨 Nuit : ${stayName}</span>`;
}

function reservationRow(label, value) {
  if (!value) return "";
  return `<div class="reservation-row"><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`;
}

function buildReservationModal(stayName) {
  const r = reservations[stayName];
  if (!r) return "";

  const mapHref = r.mapUrl
    || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.mapQuery || r.address)}`;
  const mapRow = `<div class="reservation-row"><dt>Coordonnées / Itinéraire</dt><dd><a class="reservation-map-link" href="${mapHref}" target="_blank" rel="noopener noreferrer">🗺️ Ouvrir dans Google Maps</a></dd></div>`;
  const accessRow = r.access
    ? `<div class="reservation-row"><dt>Accès / Parkings</dt><dd><ul class="reservation-sublist">${r.access.map((a) => `<li>${escapeHtml(a)}</li>`).join("")}</ul></dd></div>`
    : "";

  const lieu = [
    reservationRow("Logement", r.logement),
    reservationRow("Adresse", r.address),
    mapRow,
    reservationRow("Mots-clés Google Maps", r.keywords),
    reservationRow("Coordonnées GPS", r.gps),
    reservationRow("Indications de l'hôte", r.directions),
    reservationRow("Parking", r.parking),
    accessRow,
  ].join("");

  const arrivee = [
    reservationRow("Dates", r.dates),
    reservationRow("Votre hôte", r.host),
    reservationRow("Contact", r.contact),
    reservationRow("Heure d'arrivée", r.arrival),
    reservationRow("Heure de départ", r.departure),
    reservationRow("Type d'arrivée", r.arrivalType),
    reservationRow("Règles supplémentaires", r.extraRules),
  ].join("");

  const p = r.payment || {};
  const paymentLines = (r.paymentLines || [])
    .map((l) => `<li><span class="reservation-pay-tag">${escapeHtml(l.label)}</span> ${escapeHtml(l.text)}</li>`)
    .join("");
  const paiement = [
    r.booking
      ? reservationRow(r.booking.label, r.booking.value + (r.booking.note ? ` (${r.booking.note})` : ""))
      : "",
    reservationRow("Total initial", p.total),
    reservationRow("Payé à ce jour", p.paid),
    reservationRow("Montant total du remboursement", p.refund),
    reservationRow("Statut", p.status),
    paymentLines
      ? `<div class="reservation-row"><dt>Échéances</dt><dd><ul class="reservation-sublist">${paymentLines}</ul></dd></div>`
      : "",
  ].join("");

  const annulation = `
    ${r.cancellationNote ? `<p class="reservation-note">${escapeHtml(r.cancellationNote)}</p>` : ""}
    <ul class="reservation-cancellation">${(r.cancellation || []).map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>
  `;

  return `
    <header class="reservation-modal-header">
      <span class="reservation-modal-eyebrow">🏨 Hébergement</span>
      <h3 id="reservation-modal-title">${escapeHtml(stayName)}</h3>
      ${r.logement ? `<p class="reservation-modal-sub">${escapeHtml(r.logement)}</p>` : ""}
    </header>
    <section class="reservation-section">
      <h4>📍 Lieu (adresse, coordonnées)</h4>
      <dl>${lieu}</dl>
    </section>
    <section class="reservation-section">
      <h4>🛎️ Procédure d'arrivée</h4>
      <dl>${arrivee}</dl>
    </section>
    <section class="reservation-section">
      <h4>💳 Paiement</h4>
      <dl>${paiement}</dl>
    </section>
    <section class="reservation-section">
      <h4>↩️ Annulation</h4>
      ${annulation}
    </section>
  `;
}

function renderJourney() {
  const visibleDays = itinerary.days.filter(
    (day) => activeFilter === "all" || day.themes.includes(activeFilter),
  );

  journeyGrid.innerHTML = visibleDays
    .map((day) => {
      const media = dayImageMeta[day.day];

      return `
        <article class="journey-card">
          <div class="journey-timeline" aria-hidden="true">
            <span class="journey-node">
              <strong class="journey-node-day">J${day.day}</strong>
              <span class="journey-node-date">${day.date}</span>
            </span>
          </div>
          <div class="journey-card-body">
            ${media ? `
              <figure class="journey-media">
                <button type="button" class="image-zoom-btn" data-zoom-src="${media.image}" data-zoom-caption="J${day.day} - ${media.landmark}" aria-label="Agrandir la photo">
                  <img
                    class="journey-image"
                    src="${media.image}"
                    alt="${media.landmark}"
                    loading="lazy"
                  />
                  <span class="image-zoom-icon" aria-hidden="true">🔍</span>
                </button>
                <figcaption class="journey-caption">📸 Lieu emblematique : ${media.landmark}</figcaption>
              </figure>
            ` : ""}
            <div class="journey-topline">
              <div class="tag-row">
                ${day.themes.map((theme) => `<span class="tag"><span class="tag-icon" aria-hidden="true">${themeIcon(theme)}</span>${themeLabel(theme)}</span>`).join("")}
              </div>
            </div>
            <h3>${day.title}</h3>
            <ul class="journey-list">
              ${day.items.map((item) => `<li>${renderItem(item)}</li>`).join("")}
            </ul>
            ${day.stay !== "—" ? renderStayPill(day.stay) : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderRoutes() {
  routesTable.innerHTML = itinerary.routes
    .map(
      ([day, route, gps, estimated, distance]) => `
        <tr>
          <td><strong>J${day}</strong></td>
          <td>${route}</td>
          <td>${gps}</td>
          <td>${estimated}</td>
          <td>${distance}</td>
        </tr>
      `,
    )
    .join("");
}

function renderStays() {
  staysTable.innerHTML = itinerary.stays
    .map(
      ([index, city, dates, nights, checkIn, checkOut, address, mapQuery]) => {
        const mapsUrl = address && !address.startsWith("TODO")
          ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery || address)}`
          : null;
        const addressCell = mapsUrl
          ? `<a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">📍 ${address}</a>`
          : address || "";
        return `
        <tr>
          <td><strong>${index}</strong></td>
          <td>${city}</td>
          <td>${dates}</td>
          <td>${nights}</td>
          <td>${checkIn}</td>
          <td>${checkOut}</td>
          <td>${addressCell}</td>
        </tr>
      `;
      },
    )
    .join("");
}

function renderStrengths() {
  if (!servicePoints) return;
  servicePoints.innerHTML = itinerary.strengths
    .map(
      (item) => `
        <article class="service-point">
          <strong>${item.title}</strong>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
}

renderHeroKpis();
renderHighlights();
renderStats();
renderFilters();
renderJourney();
renderRoutes();
renderStays();
renderStrengths();
renderMap();

// Lightbox: clic sur n'importe quelle image avec data-zoom-src
(function setupLightbox() {
  const lightbox = document.querySelector("#lightbox");
  const lightboxImg = document.querySelector("#lightbox-image");
  const lightboxCap = document.querySelector("#lightbox-caption");
  const closeBtn = document.querySelector("#lightbox-close");
  if (!lightbox || !lightboxImg) return;

  function open(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption || "";
    lightboxCap.textContent = caption || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-zoom-src]");
    if (!trigger) return;
    event.preventDefault();
    open(trigger.dataset.zoomSrc, trigger.dataset.zoomCaption || "");
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) close();
  });
})();

// Popup reservations : clic sur une pastille "Nuit" du fil de voyage
(function setupReservationModal() {
  const modal = document.querySelector("#reservation-modal");
  const content = document.querySelector("#reservation-modal-content");
  const closeBtn = document.querySelector("#reservation-modal-close");
  if (!modal || !content) return;

  let lastTrigger = null;

  function open(stayName, trigger) {
    const html = buildReservationModal(stayName);
    if (!html) return;
    content.innerHTML = html;
    content.scrollTop = 0;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    lastTrigger = trigger || null;
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    modal.hidden = true;
    content.innerHTML = "";
    document.body.style.overflow = "";
    if (lastTrigger && typeof lastTrigger.focus === "function") {
      lastTrigger.focus();
      lastTrigger = null;
    }
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-reservation]");
    if (!trigger) return;
    event.preventDefault();
    open(trigger.dataset.reservation, trigger);
  });

  if (closeBtn) closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-reservation-close]") || event.target === modal) {
      close();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) close();
  });
})();