<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Fil d'Ariane" class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink to="/" class="hover:text-white transition-colors">Accueil</NuxtLink>
          <span>/</span>
          <span class="text-white font-medium">Réalisations</span>
        </nav>
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Nos réalisations</h1>
          <p class="text-xl text-brand-100">
            Découvrez nos projets de végétalisation de toitures à Bruxelles et en Belgique. Plus de 350 toitures transformées en espaces verts.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats -->
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

    <!-- Filter -->
    <section class="py-8 bg-gray-50 border-b border-gray-100 sticky top-20 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-sm text-gray-500 font-medium mr-2">Filtrer :</span>
          <button
            v-for="filter in filters"
            :key="filter.value"
            class="px-4 py-1.5 text-sm font-medium rounded-full transition-colors"
            :class="activeFilter === filter.value
              ? 'bg-brand-600 text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600'"
            @click="activeFilter = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Grid -->
    <section class="py-16 bg-gray-50" aria-labelledby="gallery-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="gallery-title" class="sr-only">Galerie de nos réalisations</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="h-52 flex items-center justify-center relative overflow-hidden"
              :class="project.bgClass"
            >
              <span class="text-6xl group-hover:scale-110 transition-transform duration-300" role="img" :aria-label="project.type">
                {{ project.icon }}
              </span>
              <div class="absolute top-3 left-3">
                <span class="px-2.5 py-1 text-xs font-semibold rounded-full"
                  :class="project.badgeClass">
                  {{ project.type }}
                </span>
              </div>
              <div class="absolute top-3 right-3 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
                <span class="text-xs text-gray-600 font-medium">{{ project.location }}</span>
              </div>
            </div>
            <div class="p-5">
              <h3 class="font-bold text-gray-900 mb-1">{{ project.title }}</h3>
              <p class="text-sm text-gray-600 mb-3">{{ project.description }}</p>
              <div class="flex items-center justify-between text-xs text-gray-500">
                <span class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                  </svg>
                  {{ project.surface }}
                </span>
                <span>{{ project.year }}</span>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty state -->
        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <p class="text-gray-400 text-lg">Aucun projet pour ce filtre.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-white" aria-labelledby="testimonials-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="badge mb-3">Témoignages</span>
          <h2 id="testimonials-title" class="section-title">Ce que disent nos clients</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <blockquote v-for="testimonial in testimonials" :key="testimonial.name" class="card">
            <div class="flex text-amber-400 mb-3">
              <svg v-for="i in 5" :key="i" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-4 italic">"{{ testimonial.text }}"</p>
            <footer class="flex items-center gap-3">
              <div class="w-9 h-9 bg-brand-100 rounded-full flex items-center justify-center font-bold text-brand-700 text-sm">
                {{ testimonial.name[0] }}
              </div>
              <div>
                <p class="font-semibold text-gray-900 text-sm">{{ testimonial.name }}</p>
                <p class="text-xs text-gray-500">{{ testimonial.location }}</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-brand-800 text-white text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Votre projet, notre prochaine réalisation</h2>
        <p class="text-brand-100 mb-8">Rejoignez nos 350+ clients satisfaits à travers la Belgique.</p>
        <NuxtLink to="/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">
          Démarrer mon projet
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Réalisations Toiture Verte – 350+ Projets Bruxelles & Belgique',
  description: '350+ projets de végétalisation réalisés à Bruxelles (Ixelles, Uccle, Schaerbeek…), Liège, Gand et dans toute la Belgique. Extensif, semi-intensif, jardin sur toiture.',
  ogTitle: '350+ Réalisations toiture verte – Bruxelles & Belgique',
  ogDescription: 'Galerie de nos projets toitures vertes : extensif, semi-intensif, jardin sur toiture, Bruxelles et Belgique.',
  ogImage: 'https://www.toitureverte.be/og-image.svg',
  twitterCard: 'summary_large_image',
})
useHead({
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/realisations' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema([
    { name: 'Accueil', url: 'https://www.toitureverte.be/' },
    { name: 'Réalisations', url: 'https://www.toitureverte.be/realisations' },
  ])) }],
})
useSeoAlternates('/realisations')

const activeFilter = ref('all')

const filters = [
  { value: 'all', label: 'Tous' },
  { value: 'extensive', label: 'Extensive' },
  { value: 'semi-intensive', label: 'Semi-intensive' },
  { value: 'intensive', label: 'Intensive' },
]

const projects = [
  { id: 1, title: 'Immeuble résidentiel Ixelles', description: 'Végétalisation extensive sur 400 m² d\'un immeuble de 12 appartements.', type: 'Extensive', location: 'Bruxelles', surface: '400 m²', year: '2024', icon: '🌿', bgClass: 'bg-brand-50', badgeClass: 'bg-brand-100 text-brand-700', category: 'extensive' },
  { id: 2, title: 'Entrepôt logistique Zaventem', description: 'Grande surface industrielle végétalisée pour améliorer l\'isolation.', type: 'Extensive', location: 'Zaventem', surface: '2 200 m²', year: '2024', icon: '🏭', bgClass: 'bg-green-50', badgeClass: 'bg-brand-100 text-brand-700', category: 'extensive' },
  { id: 3, title: 'Villa privée Uccle', description: 'Jardin sur toiture avec terrasse, arbustes et zone potager.', type: 'Intensive', location: 'Bruxelles', surface: '120 m²', year: '2023', icon: '🏡', bgClass: 'bg-emerald-50', badgeClass: 'bg-green-100 text-green-700', category: 'intensive' },
  { id: 4, title: 'Crèche Liège', description: 'Toiture pédagogique semi-intensive visible depuis les classes.', type: 'Semi-intensive', location: 'Liège', surface: '280 m²', year: '2023', icon: '🌸', bgClass: 'bg-amber-50', badgeClass: 'bg-amber-100 text-amber-700', category: 'semi-intensive' },
  { id: 5, title: 'Bureau coworking Gand', description: 'Toiture-terrasse avec espace de détente pour les employés.', type: 'Intensive', location: 'Gand', surface: '350 m²', year: '2023', icon: '🏢', bgClass: 'bg-teal-50', badgeClass: 'bg-green-100 text-green-700', category: 'intensive' },
  { id: 6, title: 'École primaire Namur', description: 'Végétalisation extensive avec panneau pédagogique sur la biodiversité.', type: 'Extensive', location: 'Namur', surface: '500 m²', year: '2022', icon: '🏫', bgClass: 'bg-lime-50', badgeClass: 'bg-brand-100 text-brand-700', category: 'extensive' },
  { id: 7, title: 'Résidence Watermael', description: 'Semi-intensive avec fleurs mellifères pour la biodiversité urbaine.', type: 'Semi-intensive', location: 'Bruxelles', surface: '180 m²', year: '2022', icon: '🌺', bgClass: 'bg-rose-50', badgeClass: 'bg-amber-100 text-amber-700', category: 'semi-intensive' },
  { id: 8, title: 'Centre commercial Charleroi', description: 'Végétalisation extensive en milieu industriel, 1 500 m² en une semaine.', type: 'Extensive', location: 'Charleroi', surface: '1 500 m²', year: '2022', icon: '🛍️', bgClass: 'bg-cyan-50', badgeClass: 'bg-brand-100 text-brand-700', category: 'extensive' },
  { id: 9, title: 'Penthouse Anvers', description: 'Jardin méditerranéen avec lavandes, oliviers en bac et pergola.', type: 'Intensive', location: 'Anvers', surface: '90 m²', year: '2024', icon: '🫒', bgClass: 'bg-yellow-50', badgeClass: 'bg-green-100 text-green-700', category: 'intensive' },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)

const stats = [
  { value: '350+', label: 'Projets réalisés' },
  { value: '85 000 m²', label: 'Surface végétalisée' },
  { value: '50+', label: 'Communes en Belgique' },
  { value: '10', label: 'Années d\'expérience' },
]

const testimonials = [
  {
    name: 'Marc Dumont',
    location: 'Propriétaire, Ixelles',
    text: 'Équipe sérieuse et professionnelle. Notre toiture extensive est magnifique et la consommation énergétique a clairement diminué. Je recommande vivement ToitureVerte.',
  },
  {
    name: 'Sophie Leblanc',
    location: 'Gérante d\'immeuble, Liège',
    text: 'ToitureVerte a géré notre projet de A à Z, y compris les démarches pour les primes bruxelloises. Travail soigné dans les délais annoncés.',
  },
  {
    name: 'Thomas Van der Berg',
    location: 'Architecte, Gand',
    text: 'Je travaille avec ToitureVerte depuis 3 ans sur plusieurs projets. Leur expertise technique et leur sérieux en font un partenaire de confiance pour mes clients.',
  },
]
</script>
