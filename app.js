const itinerary = {
  overview: {
    totalKm: 850,
    totalNights: 12,
    reservations: 8,
    maxDrive: "2h45",
    rhythm: "Tres raisonnable en famille",
    note:
      "Les durees de trajet incluent une marge de 15 a 30 min par rapport au temps GPS pour les pauses, la circulation estivale et les routes sinueuses.",
  },
  highlights: [
    "🏛️ Palerme, Catane, Syracuse et Ragusa pour la dimension culturelle",
    "🏖️ Cefalu, Isola Bella, Lido di Noto et Scala dei Turchi pour les plages",
    "🌋 Excursion complete a l'Etna avec telepherique et randonnee guidee",
    "🏨 8 hebergements seulement pour 12 nuits, avec un rythme optimise",
  ],
  strengths: [
    {
      title: "✈️ Arrivee fluide",
      description: "Pas de longue route a l'arrivee : la premiere nuit reste a Palerme pour lancer le voyage sereinement.",
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
    { label: "🛣️ Distance totale", value: "~850 km", detail: "validation des trajets incluse" },
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
        "13:35 → 16:00 arrivee a Palerme et recuperation de la voiture",
        "Installation a l'hotel et premiere respiration dans le centre historique",
        "Balade de reperage : Quattro Canti et Piazza Pretoria",
        "Diner street food sicilienne : arancini, panelle, sfincione",
      ],
    },
    {
      day: 2,
      date: "Mer. 12 aout",
      title: "Palerme → Cefalu",
      stay: "Cefalu",
      themes: ["culture", "route"],
      items: [
        "Palazzo dei Normanni et Cappella Palatina",
        "Cathedrale de Palerme, Ballaro et San Giovanni degli Eremiti",
        "Route Palerme → Cefalu : 1h15 estimee, ~70 km",
        "Arrivee en soiree et diner en bord de mer",
      ],
    },
    {
      day: 3,
      date: "Jeu. 13 aout",
      title: "Cefalu entre vieille ville et plage",
      stay: "Cefalu",
      themes: ["plage", "culture"],
      items: [
        "Duomo di Cefalu, Lavatoio medievale et ruelles du centre",
        "Option : Rocca di Cefalu pour un panorama exceptionnel",
        "Apres-midi plage sur la grande plage ou a Caldura",
        "Diner sur le front de mer",
      ],
    },
    {
      day: 4,
      date: "Ven. 14 aout",
      title: "Cefalu → Taormine",
      stay: "Taormine",
      themes: ["route", "panorama"],
      items: [
        "Route cotiere Cefalu → Taormine : 2h45 estimees, ~165 km",
        "Arrivee a Taormine et premiere decouverte du Corso Umberto",
        "Piazza IX Aprile et traversee du centre historique",
        "Aperitivo avec vue sur la baie",
      ],
    },
    {
      day: 5,
      date: "Sam. 15 aout",
      title: "Taormine et Isola Bella",
      stay: "Taormine",
      themes: ["plage", "culture"],
      items: [
        "Theatre grec avec vue sur l'Etna et la mer",
        "Descente vers Isola Bella pour plage et snorkeling",
        "Villa Comunale et jardins ombrages",
        "Coucher de soleil depuis Piazza IX Aprile",
      ],
    },
    {
      day: 6,
      date: "Dim. 16 aout",
      title: "Excursion Etna",
      stay: "Taormine",
      themes: ["nature", "aventure"],
      items: [
        "Taormine → Rifugio Sapienza : 1h30, ~50 km",
        "Telepherique jusqu'a 2 500 m puis randonnee guidee",
        "Paysages de lave, crateres et panorama complet sur l'ile",
        "Retour a Taormine en fin de journee",
      ],
    },
    {
      day: 7,
      date: "Lun. 17 aout",
      title: "Taormine → Syracuse via Catane",
      stay: "Syracuse",
      themes: ["route", "culture"],
      items: [
        "Taormine → Catane : 1h15, ~50 km",
        "Arret a Catane : marche aux poissons, Via Etnea, Piazza Duomo",
        "Catane → Syracuse : 1h15, ~60 km",
        "Installation a Syracuse",
      ],
    },
    {
      day: 8,
      date: "Mar. 18 aout",
      title: "Syracuse + Noto",
      stay: "Syracuse",
      themes: ["culture", "plage"],
      items: [
        "Ortigia : Piazza Duomo, Fonte Aretusa et marche",
        "Excursion Syracuse → Noto : 45 min, ~33 km",
        "Noto : Corso Vittorio Emanuele, cathedrale San Nicolo et Palazzo Nicolaci",
        "Option plage : Lido di Noto ou Calamosche",
      ],
    },
    {
      day: 9,
      date: "Mer. 19 aout",
      title: "Modica + Ragusa",
      stay: "Ragusa",
      themes: ["culture", "gastronomie"],
      items: [
        "Syracuse → Modica : 1h30, ~70 km",
        "Degustation du chocolat de Modica chez Bonajuto",
        "Modica → Ragusa : 30 min, ~16 km",
        "Ragusa Ibla, Giardino Ibleo et diner en trattoria",
      ],
    },
    {
      day: 10,
      date: "Jeu. 20 aout",
      title: "Ragusa → Agrigente",
      stay: "Agrigente",
      themes: ["route", "culture"],
      items: [
        "Route Ragusa → Agrigente : 2h30, ~130 km",
        "Vallee des Temples en fin de journee",
        "Temple de la Concorde, Junon et Heracles",
        "Jardin de la Kolymbethra et lumiere doree au coucher du soleil",
      ],
    },
    {
      day: 11,
      date: "Ven. 21 aout",
      title: "Scala dei Turchi → Trapani",
      stay: "Trapani",
      themes: ["plage", "route"],
      items: [
        "Agrigente → Scala dei Turchi : 25 min, ~15 km",
        "Falaises blanches et baignade si les conditions le permettent",
        "Scala dei Turchi → Trapani : 2h30, ~140 km",
        "Balade a Trapani et option coucher de soleil dans les salines",
      ],
    },
    {
      day: 12,
      date: "Sam. 22 aout",
      title: "Zingaro → Palerme aeroport",
      stay: "Palerme / aeroport",
      themes: ["nature", "route"],
      items: [
        "Trapani → Riserva dello Zingaro : 50 min, ~37 km",
        "Randonnee cotiere et baignade dans les criques",
        "Zingaro → Palerme aeroport : 1h15, ~55 km",
        "Dernier diner sicilien au calme",
      ],
    },
    {
      day: 13,
      date: "Dim. 23 aout",
      title: "Retour",
      stay: "—",
      themes: ["logistique"],
      items: [
        "Vol a 06:30",
        "Depart de l'hotel vers 03:30",
      ],
    },
  ],
  routes: [
    [2, "Palerme → Cefalu", "1h", "1h15", "~70 km"],
    [4, "Cefalu → Taormine", "2h15", "2h45", "~165 km"],
    [6, "Taormine → Rifugio Sapienza (Etna Sud)", "1h15", "1h30", "~50 km"],
    [6, "Rifugio Sapienza → Taormine (retour)", "1h15", "1h30", "~50 km"],
    [7, "Taormine → Catane", "1h", "1h15", "~50 km"],
    [7, "Catane → Syracuse", "1h", "1h15", "~60 km"],
    [8, "Syracuse → Noto", "35 min", "45 min", "~33 km"],
    [8, "Noto → Syracuse", "35 min", "45 min", "~33 km"],
    [9, "Syracuse → Modica", "1h15", "1h30", "~70 km"],
    [9, "Modica → Ragusa", "20 min", "30 min", "~16 km"],
    [10, "Ragusa → Agrigente", "2h", "2h30", "~130 km"],
    [11, "Agrigente → Scala dei Turchi", "20 min", "25 min", "~15 km"],
    [11, "Scala dei Turchi → Trapani", "2h", "2h30", "~140 km"],
    [12, "Trapani → Riserva dello Zingaro", "40 min", "50 min", "~37 km"],
    [12, "Riserva dello Zingaro → Palerme aeroport", "1h", "1h15", "~55 km"],
  ],
  stays: [
    [1, "Palerme", "Mar. 11 aout", 1, "11 aout", "12 aout"],
    [2, "Cefalu", "Mer. 12 - Jeu. 13 aout", 2, "12 aout", "14 aout"],
    [3, "Taormine", "Ven. 14 - Dim. 16 aout", 3, "14 aout", "17 aout"],
    [4, "Syracuse", "Lun. 17 - Mar. 18 aout", 2, "17 aout", "19 aout"],
    [5, "Ragusa", "Mer. 19 aout", 1, "19 aout", "20 aout"],
    [6, "Agrigente", "Jeu. 20 aout", 1, "20 aout", "21 aout"],
    [7, "Trapani", "Ven. 21 aout", 1, "21 aout", "22 aout"],
    [8, "Palerme / aeroport", "Sam. 22 aout", 1, "22 aout", "23 aout"],
  ],
  mapStops: [
    { name: "Palerme", lat: 38.1157, lng: 13.3615, type: "night", day: "J1", note: "Arrivee et premiere nuit" },
    { name: "Cefalu", lat: 38.0386, lng: 14.0229, type: "night", day: "J2-J3", note: "Vieille ville et plage" },
    { name: "Taormine", lat: 37.8516, lng: 15.2853, type: "night", day: "J4-J6", note: "Base pour Taormine et l'Etna" },
    { name: "Etna Sud", lat: 37.6997, lng: 14.9994, type: "visit", day: "J6", note: "Excursion volcan" },
    { name: "Catane", lat: 37.5079, lng: 15.083, type: "visit", day: "J7", note: "Pause culture et marche" },
    { name: "Syracuse", lat: 37.0755, lng: 15.2866, type: "night", day: "J7-J8", note: "Ortigia et base sud-est" },
    { name: "Noto", lat: 36.8924, lng: 15.0699, type: "visit", day: "J8", note: "Ville baroque" },
    { name: "Modica", lat: 36.8588, lng: 14.7601, type: "visit", day: "J9", note: "Chocolat et centre historique" },
    { name: "Ragusa", lat: 36.9269, lng: 14.7255, type: "night", day: "J9", note: "Nuit a Ragusa" },
    { name: "Agrigente", lat: 37.3111, lng: 13.5765, type: "night", day: "J10", note: "Vallee des Temples" },
    { name: "Scala dei Turchi", lat: 37.2899, lng: 13.4728, type: "visit", day: "J11", note: "Falaises blanches" },
    { name: "Trapani", lat: 38.0176, lng: 12.5362, type: "night", day: "J11", note: "Nuit a Trapani" },
    { name: "Riserva dello Zingaro", lat: 38.1026, lng: 12.8075, type: "visit", day: "J12", note: "Randonnee et criques" },
    { name: "Palerme aeroport", lat: 38.1759, lng: 13.091, type: "night", day: "J12-J13", note: "Derniere nuit et vol retour" },
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
  const orderLabel = `Etape ${index + 1} / ${itinerary.mapStops.length}`;

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
        .map((it) => `<li>${escapeHtml(it)}</li>`)
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
    <article class="trip-map-popup">
      ${media ? `
        <figure class="trip-map-popup-media">
          <img src="${media.image}" alt="${escapeHtml(media.landmark)}" loading="lazy" data-zoom-src="${media.image}" data-zoom-caption="${escapeHtml(stop.name)} - ${escapeHtml(media.landmark)}" />
          <figcaption>📸 ${escapeHtml(media.landmark)}</figcaption>
        </figure>
      ` : ""}
      <header>
        <span class="trip-map-popup-eyebrow">${typeLabel} · ${orderLabel}</span>
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

  itinerary.mapStops.forEach((stop, index) => {
    const label = stop.type === "night" ? "🌙" : "📍";
    const marker = L.marker([stop.lat, stop.lng], {
      icon: createMapIcon(stop.type, label),
      title: stop.name,
    }).addTo(map);

    marker.bindPopup(buildStopPopup(stop, index), {
      maxWidth: 320,
      minWidth: 260,
      className: "trip-map-popup-wrapper",
    });
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
              ${day.items.map((item) => `<li>${item}</li>`).join("")}
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
      ([index, city, dates, nights, checkIn, checkOut]) => `
        <tr>
          <td><strong>${index}</strong></td>
          <td>${city}</td>
          <td>${dates}</td>
          <td>${nights}</td>
          <td>${checkIn}</td>
          <td>${checkOut}</td>
        </tr>
      `,
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