/**
 * Shared JSON-LD structured data schemas.
 * Used across all pages to signal to Google what the business does, where it operates,
 * and what content each page contains.
 */

const BASE_URL = 'https://www.toitureverte.be'
const OG_IMAGE  = `${BASE_URL}/og-image.svg`

// All 19 Brussels communes + major Belgian cities — used in areaServed
// This is the key signal for "near me" and city-level local searches
const AREA_SERVED = [
  // Brussels Capital Region — 19 communes
  'Anderlecht', 'Auderghem', 'Berchem-Sainte-Agathe', 'Bruxelles',
  'Etterbeek', 'Evere', 'Forest', 'Ganshoren', 'Ixelles', 'Jette',
  'Koekelberg', 'Molenbeek-Saint-Jean', 'Saint-Gilles', 'Saint-Josse-ten-Noode',
  'Schaerbeek', 'Uccle', 'Watermael-Boitsfort', 'Woluwe-Saint-Lambert',
  'Woluwe-Saint-Pierre',
  // Flemish Brabant
  'Leuven', 'Vilvoorde', 'Zaventem', 'Mechelen',
  // Walloon Brabant
  'Wavre', 'Ottignies',
  // Major Belgian cities
  'Liège', 'Namur', 'Charleroi', 'Mons', 'Gand', 'Anvers', 'Bruges',
].map(name => ({ '@type': 'City', name }))

/** Core LocalBusiness schema — used on every home/index page */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${BASE_URL}/#business`,
  name: 'ToitureVerte SRL',
  alternateName: ['Groendak Brussel', 'Green Roof Brussels', 'Toiture Verte Bruxelles'],
  description: 'Spécialiste toiture verte, panneaux solaires, récupération eau de pluie et façade végétale à Bruxelles et en Belgique. Plus de 350 projets réalisés.',
  url: BASE_URL,
  email: 'Bonjour@toitureverte.be',
  image: OG_IMAGE,
  logo: `${BASE_URL}/favicon.svg`,
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Virement bancaire, carte bancaire',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '314 rue des Alliés',
    addressLocality: 'Forest',
    postalCode: '1190',
    addressCountry: 'BE',
    addressRegion: 'Région de Bruxelles-Capitale',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.8229,
    longitude: 4.3325,
  },
  areaServed: AREA_SERVED,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de végétalisation et durabilité',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Toiture verte extensive' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Toiture verte semi-intensive' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jardin sur toiture intensif' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entretien toiture verte' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Installation panneaux solaires' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Récupération eau de pluie' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Façade végétale et mur vert' } },
    ],
  },
  // aggregateRating: à ajouter dès que les premiers avis Google sont collectés
}

/** WebSite schema — enables Google Sitelinks Search Box */
export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'ToitureVerte',
  inLanguage: ['fr-BE', 'nl-BE', 'en'],
  publisher: { '@id': `${BASE_URL}/#business` },
}

/** Service schema for the /services page */
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/services#service`,
  name: 'Végétalisation de toiture Bruxelles',
  serviceType: 'Végétalisation de toiture',
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: AREA_SERVED,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services végétalisation et durabilité',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Toiture verte extensive', description: 'Substrat 5–10 cm, sedums & mousses, poids ~100 kg/m², entretien ~1 jour/an' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Toiture verte semi-intensive', description: 'Substrat 10–25 cm, végétaux variés, poids 100–400 kg/m², entretien 2–3 jours/an' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jardin sur toiture intensif', description: 'Substrat ≥25 cm, arbres et arbustes possibles, poids ≥400 kg/m²' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entretien toiture verte', description: 'Inspection annuelle, désherbage, fertilisation, rapport écrit. Contrat annuel ou ponctuel.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Installation panneaux solaires', description: 'Panneaux photovoltaïques combinables avec toiture verte. Rendement +8% grâce au refroidissement végétal.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Récupération eau de pluie', description: 'Citerne 1 000–10 000 L, filtration, pompe de relevage. Économise jusqu\'à 50% d\'eau potable.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Façade végétale et mur vert', description: 'Murs végétaux hydroponiques ou en substrat, intérieur ou extérieur, à partir de 2 m².' } },
    ],
  },
}

/** FAQ schema for the /subsides page — appears as rich results (expandable answers) in Google */
export const subsideFaqSchemaFR = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le montant de la prime toiture verte à Bruxelles ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La prime RENOLUTION E5 à Bruxelles est de 10 à 50 €/m² selon vos revenus. Catégorie I (revenus modestes) : 50 €/m² ; Catégorie II (revenus moyens) : 30 €/m² ; Catégorie III (revenus élevés) : 10 €/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on cumuler les primes toiture verte à Bruxelles ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. La prime RENOLUTION E5 peut se cumuler avec la prime C3 (citerne d\'eau de pluie) et d\'autres aides. Le cumul peut atteindre 2 850 € ou plus selon votre projet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quand faire la demande de prime toiture verte à Bruxelles ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La demande RENOLUTION se fait APRÈS les travaux, via le portail irisbox.irisnet.be. Vous avez 12 mois après la fin des travaux pour introduire votre dossier.',
      },
    },
    {
      '@type': 'Question',
      name: 'La TVA est-elle réduite pour une toiture verte ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, la TVA est de 6% (au lieu de 21%) pour les travaux de végétalisation sur un bâtiment de plus de 10 ans, dans toute la Belgique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il des primes toiture verte en Wallonie et en Flandre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En Wallonie, les primes communales varient de 10 à 25 €/m². En Flandre, les primes provinciales et communales atteignent 15 à 40 €/m² selon la commune. Contactez-nous pour vérifier les aides disponibles dans votre commune.',
      },
    },
  ],
}

export const subsideFaqSchemaNL = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel bedraagt de premie voor een groendak in Brussel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De RENOLUTION E5-premie in Brussel bedraagt 10 tot 50 €/m² naargelang uw inkomen. Categorie I (laag inkomen): 50 €/m²; Categorie II (gemiddeld inkomen): 30 €/m²; Categorie III (hoog inkomen): 10 €/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Kunnen groendakpremies in Brussel gecumuleerd worden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. De RENOLUTION E5-premie kan worden gecumuleerd met de C3-premie (regenwaterput) en andere subsidies. De cumulatie kan 2.850 € of meer bedragen, afhankelijk van uw project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik de groendakpremie aanvragen in Brussel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De RENOLUTION-aanvraag gebeurt NA de werken, via het portaal irisbox.irisnet.be. U heeft 12 maanden na het einde van de werken om uw dossier in te dienen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is er verminderde btw voor een groendak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, het btw-tarief bedraagt 6% (in plaats van 21%) voor begroeiingswerken op een gebouw ouder dan 10 jaar, in heel België.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn er groendakpremies in Wallonië en Vlaanderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Wallonië variëren gemeentelijke premies van 10 tot 25 €/m². In Vlaanderen bedragen provinciale en gemeentelijke premies 15 tot 40 €/m² naargelang de gemeente.',
      },
    },
  ],
}

export const subsideFaqSchemaEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much is the green roof grant in Brussels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The RENOLUTION E5 grant in Brussels ranges from €10 to €50/m² depending on your income. Category I (low income): €50/m²; Category II (middle income): €30/m²; Category III (high income): €10/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Can green roof grants in Brussels be combined?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The RENOLUTION E5 grant can be combined with the C3 grant (rainwater cistern) and other subsidies. The combined total can reach €2,850 or more depending on your project.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I apply for the green roof grant in Brussels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The RENOLUTION application is made AFTER the works, via the irisbox.irisnet.be portal. You have 12 months after completion of the works to submit your application.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is VAT reduced for a green roof?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, VAT is 6% (instead of 21%) for green roof work on a building over 10 years old, across all of Belgium.',
      },
    },
  ],
}

/** BreadcrumbList helper */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
