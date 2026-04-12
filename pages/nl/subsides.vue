<template>
  <div>
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink to="/nl" class="hover:text-white transition-colors">Home</NuxtLink>
          <span>/</span><span class="text-white font-medium">Subsidies & Premies</span>
        </nav>
        <div class="max-w-2xl">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-600/30 text-brand-200 text-sm font-medium rounded-full border border-brand-500/30 mb-4">Bijgewerkt — 2025</span>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Subsidies & financiële hulp voor uw groendak</h1>
          <p class="text-xl text-brand-100">In België wordt dakbegroeining financieel ondersteund door de drie Gewesten. Ontdek alle beschikbare hulp naargelang uw locatie.</p>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div v-for="region in regions" :key="region.name" class="rounded-2xl p-6 border-2 border-gray-100 bg-gray-50 text-center">
            <div class="text-4xl mb-3">{{ region.flag }}</div>
            <h2 class="font-bold text-gray-900">{{ region.name }}</h2>
            <p class="text-2xl font-extrabold mt-1 text-brand-600">{{ region.max }}</p>
            <p class="text-xs text-gray-500 mt-0.5">maximale hulp</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div v-for="gewest in gewesten" :key="gewest.title">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center text-2xl">{{ gewest.icon }}</div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">{{ gewest.title }}</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="prime in gewest.primes" :key="prime.title" class="card border-l-4 border-brand-400">
              <div class="flex items-start justify-between mb-3">
                <h3 class="font-bold text-gray-900">{{ prime.title }}</h3>
                <span class="text-sm font-bold text-brand-600 whitespace-nowrap ml-4">{{ prime.amount }}</span>
              </div>
              <p class="text-sm text-gray-600 mb-4">{{ prime.description }}</p>
              <ul class="space-y-1.5">
                <li v-for="cond in prime.conditions" :key="cond" class="flex items-start gap-2 text-xs text-gray-600">
                  <svg class="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  {{ cond }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-800 text-white text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Wij regelen de aanvraag voor u</h2>
        <p class="text-brand-100 mb-8">ToitureVerte begeleidt u bij de identificatie en aanvraag van alle premies waarop u recht heeft. Gratis offerte en subsidieanalyse.</p>
        <NuxtLink to="/nl/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">Gratis analyse beschikbare subsidies</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Subsidies & Premies Groendak België 2025 | ToitureVerte',
  description: 'Alle financiële hulp voor dakbegroeining in België: premies Brussel (30 €/m²), Wallonië, Vlaanderen, btw 6%, groene leningen. Volledige gids 2025.',
})
useHead({ htmlAttrs: { lang: 'nl' }, link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/nl/subsides' }] })

const regions = [
  { flag: '🏛️', name: 'Brussels Hoofdstedelijk Gewest', max: 'tot 50 000 €' },
  { flag: '🌿', name: 'Wallonië', max: 'variabel' },
  { flag: '💎', name: 'Vlaanderen', max: 'tot 25 €/m²' },
]
const gewesten = [
  {
    icon: '🏛️', title: 'Brussels Hoofdstedelijk Gewest',
    primes: [
      { title: '"Natuur in de stad" — Particulieren', amount: '30 €/m²', description: 'Voor particulieren en mede-eigenaars. Maximum 5.000 € per aanvraag. Oppervlakte ≥ 20 m². Substraat ≥ 6 cm.', conditions: ['Minimale oppervlakte: 20 m²', 'Substraatdikte: ≥ 6 cm', 'Gecertificeerde installateur', 'Maximum 5.000 € per aanvraag'] },
      { title: '"Natuur in de stad" — Professionals', amount: '50 €/m²', description: 'Voor bedrijven, vzw\'s en syndici. Maximum 50.000 € per aanvraag. Hogere subsidie, dezelfde technische vereisten.', conditions: ['Minimale oppervlakte: 50 m²', 'Hogere btw-drempel', 'Maximum 50.000 € per aanvraag', 'Gecertificeerde installateur'] },
      { title: 'Waterpremie', amount: '2.500 €', description: 'Aanvullende premie voor regenwater­recuperatie gecombineerd met een groendak. Cumuleerbaar met de groendakpremie.', conditions: ['Gecombineerd met groendak', 'Watertank ≥ 1.500 L', 'Aangesloten op hergebruikcircuit'] },
    ],
  },
  {
    icon: '🌿', title: 'Wallonië',
    primes: [
      { title: 'Energiepremie Wallonië — Isolerend groendak', amount: 'naargelang inkomen', description: 'De Waalse energie­premies voor dakisolatie zijn van toepassing op groendaken gecombineerd met goede isolatie.', conditions: ['Gebouw ouder dan 5 jaar', 'R-waarde ≥ 4,5 m²K/W', 'Inkomstencategorie bepalend', 'Aanvraag via Energie Wallonië loket'] },
      { title: 'Gemeentelijke premies Wallonië', amount: 'variabel', description: 'Veel Waalse gemeenten bieden eigen premies voor groendaken, cumuleerbaar met gewestelijke subsidies.', conditions: ['Varieert per gemeente', 'Cumuleerbaar met gewestpremies', 'Controleer uw gemeente'] },
    ],
  },
  {
    icon: '💎', title: 'Vlaanderen',
    primes: [
      { title: 'Mijn VerbouwPremie', amount: 'tot 25 €/m²', description: 'Vlaamse premie voor dakbegroening bij renovatie. Combineerbaar met andere energiepremies voor isolatie.', conditions: ['Residentieel gebouw', 'Aanvraag via Mijn VerbouwPremie', 'Gecertificeerde aannemer', 'Minimum 20 m² begroend'] },
      { title: 'Gemeentelijke premies — Antwerpen, Gent…', amount: '20–25 €/m²', description: 'Antwerpen (20 €/m²) en Gent (25 €/m²) bieden specifieke premies voor groendaken, bovenop de Vlaamse subsidies.', conditions: ['Cumuleerbaar met Vlaamse premies', 'Aanvraag bij de gemeente', 'Gecertificeerde installateur vereist'] },
    ],
  },
]
</script>
