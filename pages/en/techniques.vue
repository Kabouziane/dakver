<template>
  <div>
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink to="/en" class="hover:text-white transition-colors">Home</NuxtLink>
          <span>/</span><span class="text-white font-medium">Techniques & Effects</span>
        </nav>
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Techniques, Positive Effects & EPC Impact</h1>
          <p class="text-xl text-brand-100">Understand how a green roof works, measure its concrete benefits, and discover its impact on your building's energy performance certificate.</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Measured Benefits</span>
          <h2 class="section-title">The Positive Effects of a Green Roof</h2>
          <p class="section-subtitle">Quantified benefits, validated by scientific studies in a Belgian climate context.</p>
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

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Visualisation</span>
          <h2 class="section-title">Evapotranspiration in Action</h2>
          <p class="section-subtitle">An animated overview of the thermal and hydrological operation of a green roof.</p>
        </div>
        <EvapotranspirationAnimation />
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Energy Performance</span>
          <h2 class="section-title">Impact on the EPC</h2>
          <p class="section-subtitle">The EPC (Energy Performance Certificate) measures the energy efficiency of your building. A green roof has a direct influence on several indicators.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div v-for="item in epcItems" :key="item.title" class="card text-center">
            <div class="text-4xl mb-3">{{ item.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-600">{{ item.description }}</p>
          </div>
        </div>
        <div class="bg-brand-50 rounded-2xl p-8 border border-brand-100 text-center">
          <p class="text-lg font-semibold text-brand-900 mb-2">Average EPC improvement</p>
          <p class="text-5xl font-extrabold text-brand-600 mb-2">+1 to 2</p>
          <p class="text-brand-700">certificate classes — from D to C or C to B</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-800 text-white text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Improve Your EPC with a Green Roof</h2>
        <p class="text-brand-100 mb-8">Our experts analyse your situation and calculate the precise impact on your EPC certificate. Free assessment, no obligation.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/en/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">Free EPC Assessment</NuxtLink>
          <NuxtLink to="/en/subsides" class="btn-secondary text-base px-8 py-4">View Available Subsidies</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Green Roof Techniques – Effects, Insulation & EPC Impact Belgium',
  description: 'How does a green roof work? Structure, substrates, measured effects: –3 to 6°C cooling, up to 80% water retention, 35–50 dB noise reduction. EPC impact in Belgium.',
  ogTitle: 'Green roof techniques & effects – ToitureVerte',
  ogDescription: 'Structure, materials, measured effects and EPC impact. Scientific data validated for the Belgian climate.',
  ogImage: 'https://www.toitureverte.be/og-image.svg',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/en/techniques' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema([
    { name: 'Home', url: 'https://www.toitureverte.be/en' },
    { name: 'Techniques & Effects', url: 'https://www.toitureverte.be/en/techniques' },
  ])) }],
})
useSeoAlternates('/techniques')

const effects = [
  { icon: '🌡️', title: 'Thermal Insulation & Comfort', description: 'Reduced heating and cooling needs thanks to the thermal mass of the moist substrate and the shading effect of the vegetation.', metrics: [{ value: '–3 to 6°C', label: 'Indoor temp. in summer' }, { value: '–10 to 15%', label: 'Cooling consumption' }] },
  { icon: '💧', title: 'Stormwater Management', description: 'Retention and progressive release of rainwater, drastically reducing peak runoff in urban areas.', metrics: [{ value: 'up to 50%', label: 'Extensive retention (before saturation)' }, { value: '~80%', label: 'Intensive retention' }] },
  { icon: '🦋', title: 'Urban Biodiversity', description: 'Creation of refuges for fauna and flora in the urban environment, contributing to ecological corridors.', metrics: [{ value: '40+', label: 'Insect species' }, { value: '15+', label: 'Bird species' }] },
  { icon: '🌫️', title: 'Air Quality & CO₂', description: 'Capture of CO₂, fine particles and gaseous pollutants — a measurable contribution to urban air quality.', metrics: [{ value: '1–3 kg', label: 'CO₂ absorbed/m²/year' }, { value: '2 kg/year', label: 'Dust filtered per 10 m²' }] },
  { icon: '🔇', title: 'Acoustic Insulation', description: 'Reduction of external noise by absorbing sound waves in the substrate and vegetation.', metrics: [{ value: '35 dB', label: 'Attenuation extensive (50 kg/m²)' }, { value: '50 dB', label: 'Attenuation intensive (high mass)' }] },
  { icon: '💰', title: 'Property Value', description: 'A green roof increases the attractiveness and market value of a property while reducing running costs.', metrics: [{ value: '+5–15%', label: 'Estimated property value' }, { value: '40 yrs', label: 'Waterproofing lifespan' }] },
]
const epcItems = [
  { icon: '📉', title: 'U-value Improvement', description: 'A well-designed green roof achieves a U-value of 0.15 to 0.25 W/m²K — far better than a conventional uninsulated flat roof.' },
  { icon: '🔥', title: 'Reduced Heat Loss', description: 'The roof accounts for 20 to 30% of a building\'s heat loss. A green roof significantly reduces this.' },
  { icon: '⭐', title: 'Certificate Class Upgrade', description: 'Depending on the starting situation, a green roof can help improve 1 to 2 EPC classes, e.g. from D to C or C to B.' },
]
</script>
