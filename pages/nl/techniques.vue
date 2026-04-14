<template>
  <div>
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink to="/nl" class="hover:text-white transition-colors">Home</NuxtLink>
          <span>/</span><span class="text-white font-medium">Technieken & Effecten</span>
        </nav>
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Technieken, positieve effecten & EPC-impact</h1>
          <p class="text-xl text-brand-100">Begrijp hoe een groendak werkt, meet de concrete voordelen en ontdek de impact op het energieprestatiecertificaat van uw gebouw.</p>
        </div>
      </div>
    </section>

    <!-- Benefits grid -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Gemeten voordelen</span>
          <h2 class="section-title">De positieve effecten van een groendak</h2>
          <p class="section-subtitle">Gekwantificeerde voordelen, bevestigd door wetenschappelijke studies in de Belgische klimaatcontext.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="effect in effects" :key="effect.title" class="card">
            <div class="text-4xl mb-3">{{ effect.icon }}</div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ effect.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ effect.description }}</p>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="m in effect.metrics" :key="m.label" class="bg-gray-50 rounded-lg p-3 text-center">
                <p class="text-xl font-extrabold text-gray-900">{{ m.value }}</p>
                <p class="text-xs text-gray-500 mt-0.5">{{ m.label }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Animation -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Visualisatie</span>
          <h2 class="section-title">Evapotranspiratie in actie</h2>
          <p class="section-subtitle">Een geanimeerd overzicht van de thermische en hydrologische werking van een groendak.</p>
        </div>
        <EvapotranspirationAnimation />
      </div>
    </section>

    <!-- EPC -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Energieprestatie</span>
          <h2 class="section-title">Impact op het EPC</h2>
          <p class="section-subtitle">Het EPC (Energieprestatiecertificaat) meet de energie-efficiëntie van uw gebouw. Een groendak heeft een directe invloed op meerdere indicatoren.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div v-for="item in epcItems" :key="item.title" class="card text-center">
            <div class="text-4xl mb-3">{{ item.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-600">{{ item.description }}</p>
          </div>
        </div>
        <div class="bg-brand-50 rounded-2xl p-8 border border-brand-100 text-center">
          <p class="text-lg font-semibold text-brand-900 mb-2">Gemiddelde EPC-verbetering</p>
          <p class="text-5xl font-extrabold text-brand-600 mb-2">+1 à 2</p>
          <p class="text-brand-700">klassen verbetering mogelijk — van D naar C of C naar B</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-brand-800 text-white text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Verbeter uw EPC met een groendak</h2>
        <p class="text-brand-100 mb-8">Onze experts analyseren uw situatie en berekenen de exacte impact op uw EPC-certificaat. Gratis studie en vrijblijvend.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/nl/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">Gratis EPC-studie</NuxtLink>
          <NuxtLink to="/nl/subsides" class="btn-secondary text-base px-8 py-4">Beschikbare subsidies bekijken</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Groendak Technieken – Effecten, Isolatie & EPC-impact België',
  description: 'Hoe werkt een groendak? Structuur, substraten, gemeten effecten: –3 à 6°C koeling, tot 80% waterretentie, 35–50 dB geluidsdemping. EPC-impact in België.',
  ogTitle: 'Groendak technieken & effecten – ToitureVerte',
  ogDescription: 'Structuur, materialen, gemeten effecten en EPC-impact. Wetenschappelijk onderbouwde data voor het Belgisch klimaat.',
  ogImage: 'https://www.toitureverte.be/og-image.jpg',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: { lang: 'nl' },
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/nl/techniques' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema([
    { name: 'Home', url: 'https://www.toitureverte.be/nl' },
    { name: 'Technieken & Effecten', url: 'https://www.toitureverte.be/nl/techniques' },
  ])) }],
})
useSeoAlternates('/techniques')

const effects = [
  { icon: '🌡️', title: 'Thermische isolatie & comfort', description: 'Verminderd verwarmings- en koelingsverbruik dankzij de thermische massa van het vochtige substraat en de schaduw van de begroeiing.', metrics: [{ value: '–3 à 6°C', label: 'Binnentemperatuur zomer' }, { value: '–10 à 15%', label: 'Koelingsverbruik' }] },
  { icon: '💧', title: 'Beheer regenwater', description: 'Retentie en progressieve afgifte van regenwater, waardoor piekaflopen in stedelijke gebieden drastisch worden verminderd.', metrics: [{ value: 'tot 50%', label: 'Retentie extensief (voor verzadiging)' }, { value: '~80%', label: 'Retentie intensief' }] },
  { icon: '🦋', title: 'Stedelijke biodiversiteit', description: 'Creatie van toevluchtsoorden voor fauna en flora in een stedelijke omgeving, bijdragend aan ecologische corridors.', metrics: [{ value: '40+', label: 'Insectensoorten' }, { value: '15+', label: 'Vogelsoorten' }] },
  { icon: '🌫️', title: 'Luchtkwaliteit & CO₂', description: 'Opname van CO₂, fijn stof en gasvormige verontreinigende stoffen — een meetbare bijdrage aan de stedelijke luchtkwaliteit.', metrics: [{ value: '1–3 kg', label: 'CO₂ opgenomen/m²/jaar' }, { value: '2 kg/jaar', label: 'Stof gefilterd per 10 m²' }] },
  { icon: '🔇', title: 'Geluidsisolatie', description: 'Vermindering van geluidsoverlast van buitenaf door absorptie van geluidsgolven in het substraat en de begroeiing.', metrics: [{ value: '35 dB', label: 'Demping extensief (50 kg/m²)' }, { value: '50 dB', label: 'Demping intensief (grote massa)' }] },
  { icon: '💰', title: 'Vastgoedwaarde', description: 'Een groendak verhoogt de aantrekkelijkheid en marktwaarde van een pand, terwijl de lasten worden verminderd.', metrics: [{ value: '+5–15%', label: 'Geschatte waardestijging' }, { value: '40 jaar', label: 'Levensduur waterdichting' }] },
]
const epcItems = [
  { icon: '📉', title: 'U-waarde verbetering', description: 'Een goed ontworpen groendak bereikt een U-waarde van 0,15 tot 0,25 W/m²K — veel beter dan een conventioneel dak zonder isolatie.' },
  { icon: '🔥', title: 'Minder warmteverlies', description: 'Het dak vertegenwoordigt 20 tot 30% van het warmteverlies van een gebouw. Een groendak vermindert dit aanzienlijk.' },
  { icon: '⭐', title: 'Klasse verbetering', description: 'Afhankelijk van de beginsituatie kan een groendak helpen om 1 tot 2 EPC-klassen te verbeteren, van D naar C of C naar B.' },
]
</script>
