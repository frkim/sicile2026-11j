# Sicile 2026 — Carnet de voyage

Site statique présentant un road trip de 12 nuits en Sicile (11 → 23 août 2026) :
itinéraire jour par jour, carte interactive, trajets, hébergements et logistique.

🌐 **En ligne :** <https://frkim.github.io/sicile2026-11j/>

## Contenu

- `index.html` — structure de la page (hero, carte, programme, tableaux)
- `app.js` — données de l'itinéraire et rendu dynamique (jours, carte Leaflet, lightbox)
- `styles.css` — design responsive (mobile / tablette / desktop)
- `assets/day-images/` — photos d'illustration (`day-01.jpg` → `day-13.jpg`) + `credits.json`
- `assets/sicile_flag.jpg` — drapeau utilisé dans le titre
- `Itineraire.md` — note de travail détaillée
- `.github/workflows/deploy-pages.yml` — déploiement automatique GitHub Pages

## Stack

- HTML / CSS / JavaScript vanilla — aucun bundler
- [Leaflet 1.9.4](https://leafletjs.com/) (CDN) pour la carte OpenStreetMap
- Google Fonts : *Cormorant Garamond* + *Manrope*

## Lancer en local

Tous les chemins sont relatifs : il suffit d'ouvrir le site avec n'importe quel serveur statique.

- **VS Code** — extension *Live Server*, clic droit sur `index.html` → *Open with Live Server*.
- **Python** :

```powershell
python -m http.server 8000
# puis ouvrir : http://localhost:8000/
```

## Fonctionnalités

- 🗺️ Carte interactive avec marqueurs nuits / visites et popups détaillées
- 🗓️ Programme jour par jour avec timeline graphique sur la gauche
- 🏷️ Filtres thématiques (culture, plage, nature, route, gastronomie…)
- 🖼️ Lightbox sur toutes les photos (clic / Échap pour fermer)
- 📱 UI responsive (5 breakpoints : 1280 / 1100 / 820 / 640 / 480)
- ♿ Respect de `prefers-reduced-motion`

## Déploiement

À chaque push sur `main`, GitHub Actions publie le site via le workflow
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

## Licence

Voir [`LICENSE`](LICENSE). Les photos dans `assets/day-images/` ont leurs propres
crédits listés dans [`assets/day-images/credits.json`](assets/day-images/credits.json).
