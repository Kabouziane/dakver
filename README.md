# ToitureVerte — Site vitrine

Site web de présentation de l'activité de végétalisation de toitures, basée à Bruxelles et opérant dans toute la Belgique.

## Stack technique

- **Framework** : [Nuxt 3](https://nuxt.com) (Vue 3, SSR/SSG)
- **Style** : [Tailwind CSS](https://tailwindcss.com)
- **Langage** : TypeScript
- **SEO** : `useSeoMeta`, Schema.org JSON-LD, sitemap dynamique, Open Graph

## Pages

| Route | Description |
|---|---|
| `/` | Accueil — hero, avantages, aperçu services, processus, FAQ |
| `/services` | Détail des 4 services (extensive, semi-intensive, intensive, entretien) |
| `/techniques` | Couches de construction, substrats, végétaux, normes |
| `/realisations` | Galerie de projets filtrée par type, témoignages clients |
| `/contact` | Formulaire de devis avec validation côté client |

## Lancer le projet

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

## Commandes disponibles

```bash
npm run dev        # Serveur de développement
npm run build      # Build de production (SSR)
npm run generate   # Build statique (SSG)
npm run preview    # Prévisualisation du build
```

## SEO

Chaque page inclut :
- Balises `<title>` et `<meta description>` optimisées
- Open Graph et Twitter Cards
- Balise `<link rel="canonical">`
- Fil d'Ariane (breadcrumb)
- Données structurées Schema.org (`LocalBusiness`, `FAQPage`)

Fichiers techniques :
- `public/robots.txt` — directives pour les crawlers
- `server/routes/sitemap.xml.ts` — sitemap dynamique servi à `/sitemap.xml`

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com) ou [Netlify](https://netlify.com) via connexion directe au dépôt GitHub.

```bash
# Build de production
npm run build
# ou génération statique
npm run generate
```

## Structure du projet

```
├── assets/css/main.css          # Styles globaux + classes utilitaires
├── components/
│   ├── AppHeader.vue            # Navigation sticky, menu mobile
│   └── AppFooter.vue            # Footer avec NAP et liens
├── layouts/
│   └── default.vue              # Layout principal
├── pages/
│   ├── index.vue
│   ├── services.vue
│   ├── techniques.vue
│   ├── realisations.vue
│   └── contact.vue
├── public/
│   ├── robots.txt
│   └── favicon.svg
├── server/routes/
│   └── sitemap.xml.ts           # Sitemap dynamique
├── nuxt.config.ts
└── tailwind.config.js
```
