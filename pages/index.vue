<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-full h-full"
          style="background-image: radial-gradient(circle at 20% 50%, #86efac 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4ade80 0%, transparent 40%);" />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div class="max-w-3xl">
          <span class="badge mb-6 bg-brand-600/30 text-brand-200 border border-brand-500/30">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
            {{ t('common.allBelgium') }}
          </span>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            {{ t('home.hero.title') }}<br>
            <span class="text-brand-300">{{ t('home.hero.titleAccent') }}</span>
          </h1>
          <p class="text-lg md:text-xl text-brand-100 leading-relaxed mb-10 max-w-2xl">
            {{ t('home.hero.description') }}
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink :to="localePath('/contact')" class="btn-primary text-base px-8 py-4 shadow-lg shadow-brand-900/50">
              {{ t('home.hero.cta1') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/services')" class="btn-secondary text-base px-8 py-4">
              {{ t('home.hero.cta2') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 46.7C840 53.3 960 66.7 1080 66.7C1200 66.7 1320 53.3 1380 46.7L1440 40V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- ===== STATS ===== -->
    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in tm('home.stats') as any[]" :key="stat.label">
            <p class="text-4xl font-extrabold text-brand-600">{{ stat.value }}</p>
            <p class="text-sm text-gray-500 mt-1 font-medium">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BENEFITS ===== -->
    <section class="py-20 bg-white" aria-labelledby="benefits-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">{{ t('home.benefits.badge') }}</span>
          <h2 id="benefits-title" class="section-title">{{ t('home.benefits.title') }}</h2>
          <p class="section-subtitle">{{ t('home.benefits.subtitle') }}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article v-for="benefit in tm('home.benefits.items') as any[]" :key="benefit.title" class="card text-center group">
            <div class="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-600 transition-colors duration-300">
              <span class="text-2xl" role="img" :aria-label="benefit.title">{{ benefit.icon }}</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ benefit.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ===== SERVICES OVERVIEW ===== -->
    <section class="py-20 bg-gray-50" aria-labelledby="services-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">{{ t('home.servicesSection.badge') }}</span>
          <h2 id="services-title" class="section-title">{{ t('home.servicesSection.title') }}</h2>
          <p class="section-subtitle">{{ t('home.servicesSection.subtitle') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article v-for="service in servicesOverview" :key="service.title"
            class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
            <div :class="`h-3 ${service.color}`" />
            <div class="p-6">
              <div class="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-xl" role="img" :aria-label="service.title">{{ service.icon }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ service.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-5">{{ service.description }}</p>
              <ul class="space-y-1.5 mb-6">
                <li v-for="feat in service.features" :key="feat" class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-4 h-4 text-brand-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  {{ feat }}
                </li>
              </ul>
              <NuxtLink :to="localePath('/services')" class="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {{ t('common.learnMore') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ===== PROCESS ===== -->
    <section class="py-20 bg-white" aria-labelledby="process-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">{{ t('home.processSection.badge') }}</span>
          <h2 id="process-title" class="section-title">{{ t('home.processSection.title') }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div class="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" aria-hidden="true" />
          <div v-for="(step, index) in tm('home.processSection.steps') as any[]" :key="step.title" class="text-center relative">
            <div class="w-16 h-16 bg-brand-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg shadow-brand-200">
              {{ index + 1 }}
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ step.title }}</h3>
            <p class="text-sm text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHY CHOOSE US ===== -->
    <section class="py-20 bg-brand-800 text-white" aria-labelledby="why-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-600/30 text-brand-200 text-sm font-medium rounded-full border border-brand-500/30 mb-4">
              {{ t('home.why.badge') }}
            </span>
            <h2 id="why-title" class="text-3xl md:text-4xl font-bold mb-6">{{ t('home.why.title') }}</h2>
            <p class="text-brand-100 leading-relaxed mb-8">{{ t('home.why.description') }}</p>
            <NuxtLink :to="localePath('/contact')" class="btn-primary bg-white text-brand-800 hover:bg-brand-50">
              {{ t('home.why.cta') }}
            </NuxtLink>
          </div>
          <div class="space-y-4">
            <div v-for="reason in tm('home.why.items') as any[]" :key="reason.title"
              class="flex gap-4 p-5 bg-brand-700/50 rounded-xl border border-brand-600/30">
              <div class="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center shrink-0">
                <span class="text-lg" role="img" :aria-label="reason.title">{{ reason.icon }}</span>
              </div>
              <div>
                <h3 class="font-bold text-white mb-1">{{ reason.title }}</h3>
                <p class="text-sm text-brand-200">{{ reason.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FAQ ===== -->
    <section class="py-20 bg-gray-50" aria-labelledby="faq-title">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="badge mb-3">{{ t('home.faq.badge') }}</span>
          <h2 id="faq-title" class="section-title">{{ t('home.faq.title') }}</h2>
        </div>
        <div class="space-y-3">
          <details v-for="faq in tm('home.faq.items') as any[]" :key="faq.q"
            class="bg-white rounded-xl border border-gray-200 overflow-hidden group">
            <summary class="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-gray-900 hover:text-brand-700 transition-colors">
              <span>{{ faq.q }}</span>
              <svg class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {{ faq.a }}
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- ===== CTA BANNER ===== -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-gradient-to-r from-brand-600 to-brand-700 rounded-3xl p-10 md:p-14 shadow-xl shadow-brand-200">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">{{ t('home.ctaBanner.title') }}</h2>
          <p class="text-brand-100 text-lg mb-8 max-w-xl mx-auto">{{ t('home.ctaBanner.subtitle') }}</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink :to="localePath('/contact')" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-colors shadow-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {{ t('home.ctaBanner.cta1') }}
            </NuxtLink>
            <a href="tel:+3225551234" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-brand-700 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {{ t('home.ctaBanner.cta2') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, tm, locale } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => locale.value === 'nl' ? 'Dakbegroeining Brussel & België | ToitureVerte'
    : locale.value === 'en' ? 'Green Roof Installation Brussels & Belgium | ToitureVerte'
    : locale.value === 'de' ? 'Dachbegrünung Brüssel & Belgien | ToitureVerte'
    : 'Végétalisation de toitures à Bruxelles & Belgique | ToitureVerte',
  description: () => locale.value === 'nl' ? 'Specialist in dakbegroeining in Brussel en heel België. Extensieve, semi-intensieve daktuinen. Gratis offerte.'
    : locale.value === 'en' ? 'ToitureVerte – green roof specialist in Brussels and across Belgium. Extensive, semi-intensive, intensive green roofs. Free quote.'
    : locale.value === 'de' ? 'ToitureVerte – Spezialist für Dachbegrünung in Brüssel und ganz Belgien. Kostenloses Angebot.'
    : 'ToitureVerte, spécialiste en végétalisation de toitures à Bruxelles et en Belgique. Devis gratuit.',
  ogType: 'website',
  ogUrl: 'https://www.toitureverte.be',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: { lang: locale },
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://www.toitureverte.be/#business',
          name: 'ToitureVerte',
          description: 'Spécialiste en végétalisation de toitures à Bruxelles et en Belgique',
          url: 'https://www.toitureverte.be',
          telephone: '+3225551234',
          email: 'info@toitureverte.be',
          address: { '@type': 'PostalAddress', addressLocality: 'Bruxelles', postalCode: '1000', addressCountry: 'BE' },
          geo: { '@type': 'GeoCoordinates', latitude: 50.8503, longitude: 4.3517 },
          areaServed: { '@type': 'Country', name: 'Belgique' },
          priceRange: '€€',
        },
      ],
    }),
  }],
})

/* Services overview — locale-aware */
const servicesOverview = computed(() => {
  if (locale.value === 'nl') return [
    { title: 'Extensief Groendak', icon: '🌿', color: 'bg-brand-400', description: 'Lichte en economische oplossing, ideaal voor grote niet-toegankelijke oppervlakten. Weinig onderhoud, beperkt gewicht.', features: ['Substraat 5–15 cm', 'Sedums & mossen', 'Gewicht 50–150 kg/m²', 'Minimaal onderhoud'] },
    { title: 'Semi-intensief Groendak', icon: '🌸', color: 'bg-earth-400', description: 'De perfecte balans tussen licht gewicht en gevarieerde begroeiing. Toegankelijk, esthetisch en mooi door het jaar.', features: ['Substraat 15–25 cm', 'Vaste planten & grassen', 'Gewicht 150–300 kg/m²', 'Matig onderhoud'] },
    { title: 'Intensief / Daktuin', icon: '🏡', color: 'bg-green-500', description: 'Echte tuin op hoogte, toegankelijk en bruikbaar. Struiken, bomen en zithoeken zijn mogelijk.', features: ['Substraat > 30 cm', 'Struiken & bomen', 'Gewicht > 300 kg/m²', 'Regelmatig onderhoud'] },
  ]
  if (locale.value === 'en') return [
    { title: 'Extensive Green Roof', icon: '🌿', color: 'bg-brand-400', description: 'Lightweight and cost-effective, ideal for large inaccessible surfaces. Low maintenance, reduced weight.', features: ['Substrate 5–15 cm', 'Sedums & mosses', 'Weight 50–150 kg/m²', 'Minimal maintenance'] },
    { title: 'Semi-intensive Green Roof', icon: '🌸', color: 'bg-earth-400', description: 'The perfect balance between lightness and plant diversity. Accessible, aesthetic with varied vegetation.', features: ['Substrate 15–25 cm', 'Perennials & grasses', 'Weight 150–300 kg/m²', 'Moderate maintenance'] },
    { title: 'Intensive / Roof Garden', icon: '🏡', color: 'bg-green-500', description: 'A true garden in the sky — accessible and usable. Shrubs, trees and relaxation areas are possible.', features: ['Substrate > 30 cm', 'Shrubs & trees', 'Weight > 300 kg/m²', 'Regular maintenance'] },
  ]
  if (locale.value === 'de') return [
    { title: 'Extensives Gründach', icon: '🌿', color: 'bg-brand-400', description: 'Leichte und wirtschaftliche Lösung, ideal für große, unzugängliche Flächen. Geringer Pflegeaufwand, reduziertes Gewicht.', features: ['Substrat 5–15 cm', 'Sedums & Moose', 'Gewicht 50–150 kg/m²', 'Minimale Pflege'] },
    { title: 'Semi-intensives Gründach', icon: '🌸', color: 'bg-earth-400', description: 'Der perfekte Kompromiss zwischen Leichtigkeit und Pflanzenvielfalt. Zugänglich, ästhetisch und abwechslungsreich.', features: ['Substrat 15–25 cm', 'Stauden & Gräser', 'Gewicht 150–300 kg/m²', 'Mäßige Pflege'] },
    { title: 'Intensiv / Dachgarten', icon: '🏡', color: 'bg-green-500', description: 'Ein echter Garten in der Höhe — zugänglich und nutzbar. Sträucher, Bäume und Sitzecken sind möglich.', features: ['Substrat > 30 cm', 'Sträucher & Bäume', 'Gewicht > 300 kg/m²', 'Regelmäßige Pflege'] },
  ]
  return [
    { title: 'Toiture Extensive', icon: '🌿', color: 'bg-brand-400', description: 'Solution légère et économique, idéale pour les grandes surfaces inaccessibles. Peu d\'entretien, poids réduit.', features: ['Substrat 5–15 cm', 'Sedums & mousses', 'Poids 50–150 kg/m²', 'Entretien minimal'] },
    { title: 'Toiture Semi-Intensive', icon: '🌸', color: 'bg-earth-400', description: 'Le compromis parfait entre légèreté et diversité végétale. Accessible, esthétique, avec une végétation variée.', features: ['Substrat 15–25 cm', 'Vivaces & graminées', 'Poids 150–300 kg/m²', 'Entretien modéré'] },
    { title: 'Toiture Intensive', icon: '🏡', color: 'bg-green-500', description: 'Véritable jardin en hauteur, accessible et utilisable. Arbustes, arbres, espaces de détente possibles.', features: ['Substrat > 30 cm', 'Arbustes & arbres', 'Poids > 300 kg/m²', 'Entretien régulier'] },
  ]
})
</script>
