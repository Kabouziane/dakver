<template>
  <div>
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink to="/nl" class="hover:text-white transition-colors">Home</NuxtLink>
          <span>/</span><span class="text-white font-medium">Realisaties</span>
        </nav>
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Onze realisaties</h1>
          <p class="text-xl text-brand-100">Ontdek onze dakbegroeiingsprojecten in Brussel en heel België. Meer dan 350 daken omgetoverd tot groene ruimtes.</p>
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
        <h2 class="text-3xl font-bold mb-4">Uw project, onze volgende realisatie</h2>
        <p class="text-brand-100 mb-8">Sluit u aan bij onze 350+ tevreden klanten door heel België.</p>
        <NuxtLink to="/nl/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">Mijn project starten</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Groendak Realisaties – 350+ Projecten Brussel & België',
  description: '350+ groendakprojecten in Brussel (Elsene, Ukkel, Schaarbeek…), Luik, Gent en heel België. Extensief, semi-intensief, daktuin.',
  ogTitle: '350+ Groendak realisaties – Brussel & België',
  ogDescription: 'Galerij groendakprojecten: extensief, semi-intensief, daktuin – Brussel en België.',
  ogImage: 'https://www.toitureverte.be/og-image.jpg',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: { lang: 'nl' },
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/nl/realisations' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema([
    { name: 'Home', url: 'https://www.toitureverte.be/nl' },
    { name: 'Realisaties', url: 'https://www.toitureverte.be/nl/realisations' },
  ])) }],
})
useSeoAlternates('/realisations')

const stats = [
  { value: '350+', label: 'Gerealiseerde projecten' },
  { value: '85 000', label: 'm² begroend' },
  { value: '10+', label: 'Jaar ervaring' },
  { value: '100%', label: 'Tevreden klanten' },
]
const projects = [
  { icon: '🏢', bg: 'bg-brand-50', type: 'Extensief', badgeClass: 'bg-brand-100 text-brand-700', location: 'Brussel', title: 'Kantoorcomplex Bruxelles-Nord', description: '1 200 m² extensieve dakbegroeining op een kantoorgebouw. Sedums, mossen. Installatie in 4 dagen.' },
  { icon: '🏠', bg: 'bg-amber-50', type: 'Semi-intensief', badgeClass: 'bg-amber-100 text-amber-700', location: 'Gent', title: 'Residentiële woning Gent', description: '180 m² semi-intensieve dakbegroeining met vaste planten en siergrassen op een hedendaagse villa.' },
  { icon: '🏬', bg: 'bg-green-50', type: 'Intensief', badgeClass: 'bg-green-100 text-green-700', location: 'Antwerpen', title: 'Daktuin bedrijfsgebouw Antwerpen', description: '320 m² intensieve daktuin met lounge, grassen en struiken. Privé buitenruimte op de 5e verdieping.' },
  { icon: '🏭', bg: 'bg-slate-50', type: 'Extensief', badgeClass: 'bg-brand-100 text-brand-700', location: 'Luik', title: 'Industrieel gebouw Luik', description: '3 500 m² extensief groendak op een opslagloods. EPC klasse verhoogd van D naar C.' },
  { icon: '🏫', bg: 'bg-purple-50', type: 'Semi-intensief', badgeClass: 'bg-amber-100 text-amber-700', location: 'Brussel', title: 'School Etterbeek', description: '260 m² pedagogisch groendak met biodiversiteitszone. Educatief project voor de leerlingen.' },
  { icon: '🏪', bg: 'bg-orange-50', type: 'Intensief', badgeClass: 'bg-green-100 text-green-700', location: 'Brugge', title: 'Commercieel centrum Brugge', description: '800 m² gecombineerd groendak en zonnepanelen. Maximalisatie van het beschikbare dakoppervlak.' },
]
</script>
