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
    [3, "Taormina", "Ven. 14 aout", 1, "14 aout", "15 aout", "TODO: hébergement à réserver"],
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

function renderItem(item) {
  const it = typeof item === "string" ? { text: item } : item;
  if (it.map) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(it.map)}`;
    return `${it.text} <a class="gmaps-link" href="${url}" target="_blank" rel="noopener noreferrer" title="Voir sur Google Maps">📍</a>`;
  }
  return it.text;
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
            ${day.stay !== "—" ? `<span class="stay-pill">Nuit : ${day.stay}</span>` : ""}
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
      ([index, city, dates, nights, checkIn, checkOut, address]) => {
        const mapsUrl = address && !address.startsWith("TODO")
          ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
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