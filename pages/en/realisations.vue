<template>
  <div>
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink to="/en" class="hover:text-white transition-colors">Home</NuxtLink>
          <span>/</span><span class="text-white font-medium">Projects</span>
        </nav>
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Our Projects</h1>
          <p class="text-xl text-brand-100">Discover our green roof installations in Brussels and across Belgium. Over 350 rooftops transformed into green spaces.</p>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <p class="text-4xl font-extrabold text-brand-600">{{ stat.value }}</p>
            <p class="text-sm text-gray-500 mt-1 font-medium">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="project in projects" :key="project.title"
            class="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <div :class="`h-48 flex items-center justify-center text-7xl ${project.bg}`">{{ project.icon }}</div>
            <div class="p-5">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full" :class="project.badgeClass">{{ project.type }}</span>
                <span class="text-xs text-gray-400">{{ project.location }}</span>
              </div>
              <h3 class="font-bold text-gray-900 mb-1">{{ project.title }}</h3>
              <p class="text-sm text-gray-600">{{ project.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-800 text-white text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Your Project, Our Next Achievement</h2>
        <p class="text-brand-100 mb-8">Join our 350+ satisfied clients across Belgium.</p>
        <NuxtLink to="/en/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">Start My Project</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Green Roof Projects – 350+ Realisations Brussels & Belgium',
  description: '350+ green roof projects in Brussels (Ixelles, Uccle, Schaerbeek…), Liège, Ghent and across Belgium. Extensive, semi-intensive, rooftop garden.',
  ogTitle: '350+ Green roof projects – Brussels & Belgium',
  ogDescription: 'Portfolio of green roof projects: extensive, semi-intensive, rooftop garden – Brussels and Belgium.',
  ogImage: 'https://www.toitureverte.be/og-image.jpg',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/en/realisations' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema([
    { name: 'Home', url: 'https://www.toitureverte.be/en' },
    { name: 'Projects', url: 'https://www.toitureverte.be/en/realisations' },
  ])) }],
})
useSeoAlternates('/realisations')

const stats = [
  { value: '350+',   label: 'Projects Completed' },
  { value: '85,000', label: 'm² Greened' },
  { value: '10+',    label: 'Years of Experience' },
  { value: '100%',   label: 'Satisfied Clients' },
]
const projects = [
  { icon: '🏢', bg: 'bg-brand-50', type: 'Extensive', badgeClass: 'bg-brand-100 text-brand-700', location: 'Brussels', title: 'Office Complex Bruxelles-Nord', description: '1,200 m² extensive green roof on an office building. Sedums and mosses. Installed in 4 days.' },
  { icon: '🏠', bg: 'bg-amber-50', type: 'Semi-intensive', badgeClass: 'bg-amber-100 text-amber-700', location: 'Ghent', title: 'Residential Property Ghent', description: '180 m² semi-intensive green roof with perennials and ornamental grasses on a contemporary villa.' },
  { icon: '🏬', bg: 'bg-green-50', type: 'Intensive', badgeClass: 'bg-green-100 text-green-700', location: 'Antwerp', title: 'Corporate Roof Garden Antwerp', description: '320 m² intensive roof garden with lounge area, grasses and shrubs. Private outdoor space on the 5th floor.' },
  { icon: '🏭', bg: 'bg-slate-50', type: 'Extensive', badgeClass: 'bg-brand-100 text-brand-700', location: 'Liège', title: 'Industrial Building Liège', description: '3,500 m² extensive green roof on a warehouse. EPC class improved from D to C.' },
  { icon: '🏫', bg: 'bg-purple-50', type: 'Semi-intensive', badgeClass: 'bg-amber-100 text-amber-700', location: 'Brussels', title: 'School Etterbeek', description: '260 m² educational green roof with biodiversity zone. Pedagogical project for pupils.' },
  { icon: '🏪', bg: 'bg-orange-50', type: 'Intensive', badgeClass: 'bg-green-100 text-green-700', location: 'Bruges', title: 'Commercial Centre Bruges', description: '800 m² combined green roof and solar panels. Maximising the available roof surface.' },
]
</script>
