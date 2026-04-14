<template>
  <div>
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink to="/en" class="hover:text-white transition-colors">Home</NuxtLink>
          <span>/</span><span class="text-white font-medium">Subsidies & Grants</span>
        </nav>
        <div class="max-w-2xl">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-600/30 text-brand-200 text-sm font-medium rounded-full border border-brand-500/30 mb-4">Updated — 2025</span>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Subsidies & Financial Aid for Your Green Roof</h1>
          <p class="text-xl text-brand-100">In Belgium, roof greening is financially supported by all three Regions. Discover all available grants depending on your location.</p>
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
            <p class="text-xs text-gray-500 mt-0.5">maximum aid</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div v-for="region in allRegions" :key="region.title">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center text-2xl">{{ region.icon }}</div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">{{ region.title }}</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="grant in region.grants" :key="grant.title" class="card border-l-4 border-brand-400">
              <div class="flex items-start justify-between mb-3">
                <h3 class="font-bold text-gray-900">{{ grant.title }}</h3>
                <span class="text-sm font-bold text-brand-600 whitespace-nowrap ml-4">{{ grant.amount }}</span>
              </div>
              <p class="text-sm text-gray-600 mb-4">{{ grant.description }}</p>
              <ul class="space-y-1.5">
                <li v-for="cond in grant.conditions" :key="cond" class="flex items-start gap-2 text-xs text-gray-600">
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
        <h2 class="text-3xl font-bold mb-4">We Handle the Applications for You</h2>
        <p class="text-brand-100 mb-8">ToitureVerte guides you through identifying and applying for all grants you are entitled to. Free quote and subsidy analysis.</p>
        <NuxtLink to="/en/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">Free Subsidy Analysis</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Green Roof Grants Brussels 2025 – RENOLUTION E5 up to €50/m²',
  description: 'Complete guide to green roof grants 2025: RENOLUTION E5 Brussels (€10–50/m²), Wallonia, Flanders, 6% VAT. Combine subsidies to fund your project.',
  ogTitle: 'Green roof grants Brussels 2025 – RENOLUTION E5',
  ogDescription: 'RENOLUTION E5: up to €50/m² in Brussels based on your income. Guide to Wallonia, Flanders grants + 6% VAT.',
  ogImage: 'https://www.toitureverte.be/og-image.svg',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/en/subsides' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(subsideFaqSchemaEN) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema([
      { name: 'Home', url: 'https://www.toitureverte.be/en' },
      { name: 'Subsidies & Grants', url: 'https://www.toitureverte.be/en/subsides' },
    ])) },
  ],
})
useSeoAlternates('/subsides')

const regions = [
  { flag: '🏛️', name: 'Brussels Capital Region', max: 'up to €50,000' },
  { flag: '🌿', name: 'Wallonia', max: 'variable' },
  { flag: '💎', name: 'Flanders', max: 'up to €25/m²' },
]
const allRegions = [
  {
    icon: '🏛️', title: 'Brussels Capital Region',
    grants: [
      { title: 'RENOLUTION E5 — Extensive roof (5–10 cm)', amount: '€10–20/m²', description: 'Main Brussels grant via renolution.brussels. Amount by income category: €10/m² (Cat. I), €15/m² (Cat. II), €20/m² (Cat. III). Applied for after works.', conditions: ['Insulation required R ≥ 4 m²K/W (prior insulation accepted)', 'Minimum slope 2%', 'Substrate depth 5–10 cm', 'Apply via irisbox.irisnet.be within 12 months of last invoice'] },
      { title: 'RENOLUTION E5 — Semi-intensive / Intensive', amount: '€20–50/m²', description: 'Semi-intensive (10–25 cm): €20/30/40 per m² · Intensive (≥25 cm): €30/40/50 per m² by income category I/II/III. Max. €50,000/dwelling over 10 years.', conditions: ['Registered contractor (BCE + Belgian VAT)', 'Minimum €250 grants per application', 'Same technical requirements as extensive'] },
      { title: 'RENOLUTION C3 — Rainwater tank', amount: '€500–1,100', description: 'Additional grant for rainwater harvesting combined with a green roof. Can be combined with grant E5.', conditions: ['Minimum capacity: 1,000 litres', 'Connected to at least 1 sanitary fitting', 'Buffer capacity bonus: +€100 to +€200/dwelling for extra 1,000 L'] },
    ],
  },
  {
    icon: '🌿', title: 'Wallonia',
    grants: [
      { title: 'Wallonia Energy Grant — Insulating Green Roof', amount: 'income-based', description: 'Walloon energy grants for roof insulation apply to green roofs combined with good insulation.', conditions: ['Building older than 5 years', 'R-value ≥ 4.5 m²K/W', 'Income category determines amount', 'Application via Énergie Wallonie'] },
      { title: 'Municipal Grants — Wallonia', amount: 'variable', description: 'Many Walloon municipalities offer their own green roof grants, stackable with regional subsidies.', conditions: ['Varies by municipality', 'Stackable with regional grants', 'Check your local council'] },
    ],
  },
  {
    icon: '💎', title: 'Flanders',
    grants: [
      { title: 'Mijn VerbouwPremie', amount: 'up to €25/m²', description: 'Flemish renovation grant for roof greening. Can be combined with other energy insulation grants.', conditions: ['Residential building', 'Apply via Mijn VerbouwPremie', 'Certified contractor', 'Minimum 20 m² greened'] },
      { title: 'City Grants — Antwerp, Ghent…', amount: '€20–25/m²', description: 'Antwerp (€20/m²) and Ghent (€25/m²) offer specific grants for green roofs, on top of Flemish subsidies.', conditions: ['Stackable with Flemish grants', 'Apply to your municipality', 'Certified installer required'] },
    ],
  },
]
</script>
