<template>
  <div>
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <nav class="flex items-center gap-2 text-sm text-brand-300 mb-6">
            <NuxtLink to="/en" class="hover:text-white transition-colors">Home</NuxtLink>
            <span>/</span><span class="text-white font-medium">Services</span>
          </nav>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Our Green Roof Services</h1>
          <p class="text-xl text-brand-100">From extensive roofs to rooftop gardens — ToitureVerte offers complete solutions for every building in Brussels and across Belgium.</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div v-for="service in services" :key="service.title" class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="badge mb-3">{{ service.badge }}</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ service.title }}</h2>
            <p class="text-gray-600 leading-relaxed mb-6">{{ service.description }}</p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div v-for="spec in service.specs" :key="spec.label" class="bg-brand-50 rounded-xl p-4">
                <p class="text-xs text-brand-600 font-semibold uppercase tracking-wider">{{ spec.label }}</p>
                <p class="text-sm font-bold text-gray-900 mt-1">{{ spec.value }}</p>
              </div>
            </div>
            <NuxtLink to="/en/contact" class="btn-primary">Request a Quote</NuxtLink>
          </div>
          <div class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl h-72 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="text-8xl mb-4">{{ service.icon }}</div>
              <p class="text-brand-700 font-semibold text-lg">{{ service.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-800 text-white text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
        <p class="text-brand-100 mb-8">Our experts advise you free of charge on the type of greening best suited to your roof.</p>
        <NuxtLink to="/en/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">Free Feasibility Study</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Green Roof Services Brussels – Extensive, Intensive & Rooftop Garden',
  description: 'Green roof installation in Brussels: extensive (5–10 cm), semi-intensive, rooftop garden. Free quote. 6% VAT. RENOLUTION E5 grant: up to €50/m².',
  ogTitle: 'Green roof services Brussels – ToitureVerte',
  ogDescription: 'Extensive, semi-intensive, rooftop garden. Tailored solutions in Brussels and Belgium. Free quote.',
  ogImage: 'https://www.toitureverte.be/og-image.svg',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/en/services' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema([
    { name: 'Home', url: 'https://www.toitureverte.be/en' },
    { name: 'Services', url: 'https://www.toitureverte.be/en/services' },
  ])) }],
})
useSeoAlternates('/services')

const services = [
  {
    title: 'Extensive Green Roof', icon: '🌿', badge: 'Ideal for large surfaces',
    description: 'The extensive green roof is the lightest and most economical solution. It consists of a thin substrate layer (5 to 10 cm) planted with sedums, mosses and lichens capable of withstanding Belgian climate conditions without irrigation or intensive maintenance. Particularly suited to large industrial, commercial and residential rooftops.',
    specs: [{ label: 'Substrate depth', value: '5–10 cm' }, { label: 'Weight (saturated)', value: '~100 kg/m²' }, { label: 'Max. slope', value: 'up to 70%' }, { label: 'Maintenance', value: '~1 day/year' }],
  },
  {
    title: 'Semi-intensive Green Roof', icon: '🌸', badge: 'Aesthetics & weight balance',
    description: 'The semi-intensive green roof offers the perfect balance between light weight and vegetation diversity. Accessible, aesthetic and with varied planting that looks beautiful year-round. Ideal for visible roofs and terraces.',
    specs: [{ label: 'Substrate depth', value: '10–25 cm' }, { label: 'Weight (saturated)', value: '100–400 kg/m²' }, { label: 'Max. slope', value: 'up to 58%' }, { label: 'Maintenance', value: '2–3 days/year' }],
  },
  {
    title: 'Intensive / Roof Garden', icon: '🏡', badge: 'A true garden in the sky',
    description: 'The intensive roof garden is a full garden at height — accessible and usable. Shrubs, trees and seating areas are all possible. This premium solution radically transforms your rooftop. Requires an appropriate load-bearing structure and regular maintenance.',
    specs: [{ label: 'Substrate depth', value: '≥ 25 cm' }, { label: 'Weight (saturated)', value: '≥ 400 kg/m²' }, { label: 'Max. slope', value: 'up to 10%' }, { label: 'Maintenance', value: '2–5 days/year' }],
  },
]
</script>
