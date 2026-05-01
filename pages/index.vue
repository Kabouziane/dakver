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
            Bruxelles · Toute la Belgique
          </span>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Végétalisez votre toiture,<br>
            <span class="text-brand-300">valorisez votre bâtiment</span>
          </h1>
          <p class="text-lg md:text-xl text-brand-100 leading-relaxed mb-10 max-w-2xl">
            ToitureVerte est votre spécialiste en végétalisation de toitures à Bruxelles et en Belgique. Toitures extensives, semi-intensives, jardins sur toiture — nous concevons et installons des toits verts durables et esthétiques.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4 shadow-lg shadow-brand-900/50">
              Demander un devis gratuit
            </NuxtLink>
            <NuxtLink to="/services" class="btn-secondary text-base px-8 py-4">
              Découvrir nos services
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
          <div v-for="stat in stats" :key="stat.label">
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
          <span class="badge mb-3">Pourquoi une toiture verte ?</span>
          <h2 id="benefits-title" class="section-title">Les avantages d'un toit végétalisé</h2>
          <p class="section-subtitle">Une toiture verte n'est pas qu'esthétique : c'est un investissement durable aux bénéfices multiples pour votre bâtiment et l'environnement.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article v-for="benefit in benefits" :key="benefit.title" class="card text-center group">
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
          <span class="badge mb-3">Ce que nous proposons</span>
          <h2 id="services-title" class="section-title">Toutes nos expertises</h2>
          <p class="section-subtitle">Toiture verte, panneaux solaires, récupération d'eau, façade végétale — ToitureVerte accompagne chaque projet de durabilité de A à Z.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <article v-for="service in services" :key="service.title"
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
              <NuxtLink :to="service.href || '/services'" class="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                En savoir plus
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
          <span class="badge mb-3">Notre méthode</span>
          <h2 id="process-title" class="section-title">Un projet clé en main, étape par étape</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div class="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" aria-hidden="true" />
          <div v-for="(step, index) in processSteps" :key="step.title" class="text-center relative">
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
              Notre engagement
            </span>
            <h2 id="why-title" class="text-3xl md:text-4xl font-bold mb-6">Pourquoi choisir ToitureVerte ?</h2>
            <p class="text-brand-100 leading-relaxed mb-8">Basés à Bruxelles, nous intervenons dans toute la Belgique avec une expertise reconnue en végétalisation de toitures depuis plus de 10 ans. Chaque projet est unique, chaque solution est sur-mesure.</p>
            <NuxtLink to="/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50">
              Discutons de votre projet
            </NuxtLink>
          </div>
          <div class="space-y-4">
            <div v-for="reason in reasons" :key="reason.title"
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
          <span class="badge mb-3">Questions fréquentes</span>
          <h2 id="faq-title" class="section-title">Tout savoir sur les toitures vertes</h2>
        </div>
        <div class="space-y-3">
          <details v-for="faq in faqs" :key="faq.q"
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
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à transformer votre toiture ?</h2>
          <p class="text-brand-100 text-lg mb-8 max-w-xl mx-auto">Contactez-nous pour une étude de faisabilité gratuite et sans engagement. Nous intervenons à Bruxelles et dans toute la Belgique.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-colors shadow-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Devis gratuit
            </NuxtLink>
            <!-- Remplacer XXXXXXXXXX par votre vrai numéro belge (sans le 0 initial) -->
            <a href="https://wa.me/32XXXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20un%20devis%20gratuit%20pour%20une%20toiture%20verte."
               target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-brand-700 transition-colors">
              <!-- WhatsApp icon -->
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.554 4.1 1.522 5.827L.057 23.927a.5.5 0 00.609.609l6.1-1.465A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.954a9.938 9.938 0 01-5.07-1.384l-.364-.216-3.77.906.921-3.673-.237-.378A9.96 9.96 0 012.046 12C2.046 6.487 6.487 2.046 12 2.046S21.954 6.487 21.954 12 17.513 21.954 12 21.954z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Toiture Verte Bruxelles – Pose Extensive & Intensive | ToitureVerte',
  description: 'Spécialiste toiture verte à Bruxelles. Extensive, semi-intensive, daktuin. RENOLUTION E5 : jusqu\'à 50 €/m² de prime. 350+ projets en Belgique. Devis gratuit.',
  ogTitle: 'Toiture Verte Bruxelles – ToitureVerte',
  ogDescription: 'Spécialiste toiture verte à Bruxelles et en Belgique. Devis gratuit sous 24h. RENOLUTION E5 : jusqu\'à 50 €/m² de prime.',
  ogType: 'website',
  ogUrl: 'https://www.toitureverte.be',
  ogImage: 'https://www.toitureverte.be/og-image.svg',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://www.toitureverte.be/og-image.svg',
})
useHead({
  htmlAttrs: { lang: 'fr' },
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(localBusinessSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(webSiteSchema) },
  ],
})
useSeoAlternates('')

const stats = [
  { value: '10+',    label: 'Années d\'expérience' },
  { value: '350+',   label: 'Projets réalisés' },
  { value: '85 000', label: 'm² végétalisés' },
  { value: '100%',   label: 'Clients satisfaits' },
]

const benefits = [
  { icon: '🌡️', title: 'Isolation thermique',  description: 'Réduisez votre consommation énergétique. Une toiture verte améliore l\'isolation de votre bâtiment en été comme en hiver.' },
  { icon: '💧', title: 'Gestion des eaux',      description: 'Retenez jusqu\'à 90% des eaux pluviales, réduisant les risques d\'inondation et soulageant les réseaux d\'égouts.' },
  { icon: '🦋', title: 'Biodiversité urbaine',  description: 'Créez un refuge pour les insectes et oiseaux en milieu urbain. Contribuez activement à la nature en ville.' },
  { icon: '💰', title: 'Valeur immobilière',    description: 'Une toiture végétalisée augmente la valeur de votre bien de 5 à 15% et améliore son attractivité sur le marché.' },
]

const services = [
  {
    title: 'Toiture Extensive', icon: '🌿', color: 'bg-brand-400',
    description: 'Solution légère et économique, idéale pour les grandes surfaces inaccessibles. Peu d\'entretien, poids réduit.',
    features: ['Substrat 5–15 cm', 'Sedums & mousses', 'Poids 50–150 kg/m²', 'Entretien minimal'],
    href: '/services#extensive',
  },
  {
    title: 'Toiture Semi-Intensive', icon: '🌸', color: 'bg-earth-400',
    description: 'Le compromis parfait entre légèreté et diversité végétale. Accessible, esthétique, avec une végétation variée.',
    features: ['Substrat 15–25 cm', 'Vivaces & graminées', 'Poids 150–300 kg/m²', 'Entretien modéré'],
    href: '/services#semi-intensive',
  },
  {
    title: 'Toiture Intensive', icon: '🏡', color: 'bg-green-500',
    description: 'Véritable jardin en hauteur, accessible et utilisable. Arbustes, arbres, espaces de détente possibles.',
    features: ['Substrat > 30 cm', 'Arbustes & arbres', 'Poids > 300 kg/m²', 'Entretien régulier'],
    href: '/services#intensive',
  },
  {
    title: 'Entretien Toiture Verte', icon: '🔧', color: 'bg-brand-600',
    description: 'Contrats d\'entretien annuels ou ponctuels. Inspection, désherbage, fertilisation et rapport écrit.',
    features: ['1–2 visites/an', 'Rapport écrit inclus', 'Urgence sous 48h', 'Contrat sur-mesure'],
    href: '/services#entretien',
  },
  {
    title: 'Panneaux Solaires', icon: '☀️', color: 'bg-amber-400',
    description: 'Installation photovoltaïque combinable avec toiture verte. Rendement amélioré de +8% grâce au refroidissement végétal.',
    features: ['3 à 30 kWc', 'Rendement +8%', 'Primes disponibles', 'Garantie 25 ans'],
    href: '/services#solaire',
  },
  {
    title: 'Récupération Eau de Pluie', icon: '💧', color: 'bg-blue-500',
    description: 'Citerne 1 000 à 10 000 L. La végétation filtre naturellement l\'eau collectée depuis la toiture.',
    features: ['Jusqu\'à 50% d\'économie', 'WC, arrosage, lavage', 'Citerne enterrée ou aérienne', 'Prime C3 Bruxelles'],
    href: '/services#eau-de-pluie',
  },
  {
    title: 'Façade Végétale', icon: '🌿', color: 'bg-emerald-500',
    description: 'Murs verts intérieurs ou extérieurs. Système hydroponique ou substrat, à partir de 2 m². Isolation et impact visuel.',
    features: ['Intérieur ou extérieur', 'Hydroponique ou substrat', 'À partir de 2 m²', 'Entretien annuel dispo'],
    href: '/services#facade',
  },
]

const processSteps = [
  { title: 'Étude de faisabilité',       description: 'Analyse de votre toiture : structure, pente, accessibilité, budget.' },
  { title: 'Conception sur-mesure',      description: 'Plans détaillés, choix des végétaux et des matériaux adaptés.' },
  { title: 'Installation professionnelle', description: 'Pose par nos équipes certifiées à Bruxelles et en Belgique.' },
  { title: 'Suivi & entretien',           description: 'Contrats d\'entretien et suivi de la végétation sur le long terme.' },
]

const reasons = [
  { icon: '🏅', title: 'Expertise certifiée',   description: 'Équipes formées aux normes belges et européennes. Membres de la fédération des toitures vertes.' },
  { icon: '📐', title: 'Solutions sur-mesure',  description: 'Chaque toiture est unique. Nous adaptons notre solution à la structure, au budget et à vos envies.' },
  { icon: '🔧', title: 'Service complet',        description: 'De la conception à l\'entretien, ToitureVerte assure un suivi complet de votre projet.' },
  { icon: '🌍', title: 'Engagement écologique', description: 'Matériaux locaux et durables, végétaux adaptés au climat belge, bilan carbone positif.' },
]

const faqs = [
  { q: 'Qu\'est-ce qu\'une toiture verte extensive ?', a: 'Une toiture verte extensive est le type de végétalisation le plus léger (50 à 150 kg/m²). Elle est composée d\'une couche de substrat de 5 à 15 cm et de végétaux résistants comme les sedums. Elle nécessite peu d\'entretien et convient à la majorité des toitures plates en Belgique.' },
  { q: 'Quel est le prix d\'une toiture végétalisée en Belgique ?', a: 'Le coût varie selon le type : entre 40 et 80 €/m² pour une toiture extensive, entre 80 et 150 €/m² pour une semi-intensive, et entre 150 et 300 €/m² pour une toiture intensive. Ces prix incluent la fourniture et la pose. Nous offrons un devis gratuit et personnalisé.' },
  { q: 'Ma toiture peut-elle supporter une végétalisation ?', a: 'La grande majorité des toitures plates peut accueillir une toiture verte. Nos experts réalisent une étude de faisabilité gratuite pour évaluer la capacité portante de votre structure, la pente et l\'état de l\'étanchéité existante.' },
  { q: 'Existe-t-il des primes pour les toitures vertes en Belgique ?', a: 'Oui ! La Région de Bruxelles-Capitale propose des primes jusqu\'à 50 000 € (30 €/m² pour les particuliers). La Wallonie et la Flandre offrent également des aides régionales et communales cumulables. La TVA peut être réduite à 6% et des prêts verts existent.' },
  { q: 'Combien de temps dure l\'installation ?', a: 'L\'installation prend généralement 1 à 5 jours selon la superficie. Pour les grands projets commerciaux ou industriels, le délai peut être plus long. Nous planifions les travaux pour minimiser les perturbations.' },
  { q: 'Intervenez-vous partout en Belgique ?', a: 'Oui, ToitureVerte intervient dans toute la Belgique : Bruxelles, Wallonie (Liège, Namur, Charleroi, Mons...) et Flandre (Anvers, Gand, Bruges, Louvain...). Nous nous déplaçons sans frais supplémentaires dans un rayon de 100 km de Bruxelles.' },
]
</script>
