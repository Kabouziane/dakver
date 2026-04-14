<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <nav aria-label="Fil d'Ariane" class="flex items-center gap-2 text-sm text-brand-300 mb-6">
            <NuxtLink to="/" class="hover:text-white transition-colors">Accueil</NuxtLink>
            <span>/</span>
            <span class="text-white font-medium">Services</span>
          </nav>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Nos services de végétalisation</h1>
          <p class="text-xl text-brand-100">
            De la toiture extensive au jardin suspendu, ToitureVerte propose des solutions complètes pour chaque bâtiment à Bruxelles et en Belgique.
          </p>
        </div>
      </div>
    </section>

    <!-- Services details -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        <!-- Extensive -->
        <div id="extensive" class="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div>
            <span class="badge mb-3">Idéale pour grandes surfaces</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Toiture verte extensive</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              La toiture extensive est la solution de végétalisation la plus légère et la plus économique. Elle est composée d'une fine couche de substrat (5 à 10 cm) plantée de végétaux — sedums, mousses, lichens — capables de supporter les conditions climatiques belges sans irrigation ni entretien intensif.
            </p>
            <p class="text-gray-600 leading-relaxed mb-6">
              Particulièrement adaptée aux toitures industrielles, commerciales et résidentielles de grande surface, cette solution offre un excellent rapport qualité/prix pour la végétalisation à Bruxelles et en Belgique.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div v-for="spec in extensiveSpecs" :key="spec.label" class="bg-brand-50 rounded-xl p-4">
                <p class="text-xs text-brand-600 font-semibold uppercase tracking-wider">{{ spec.label }}</p>
                <p class="text-sm font-bold text-gray-900 mt-1">{{ spec.value }}</p>
              </div>
            </div>
            <NuxtLink to="/contact" class="btn-primary">Demander un devis</NuxtLink>
          </div>
          <div class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl h-80 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="text-8xl mb-4">🌿</div>
              <p class="text-brand-700 font-semibold text-lg">Toiture Extensive</p>
              <p class="text-brand-600 text-sm mt-1">Sedums · Mousses · Légèreté</p>
            </div>
          </div>
        </div>

        <hr class="border-gray-100">

        <!-- Semi-intensive -->
        <div id="semi-intensive" class="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div class="order-last lg:order-first bg-gradient-to-br from-earth-50 to-amber-100 rounded-3xl h-80 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="text-8xl mb-4">🌸</div>
              <p class="text-earth-700 font-semibold text-lg">Toiture Semi-Intensive</p>
              <p class="text-earth-600 text-sm mt-1">Vivaces · Graminées · Équilibre</p>
            </div>
          </div>
          <div>
            <span class="badge mb-3">Compromis idéal</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Toiture semi-intensive</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              La toiture semi-intensive offre un compromis parfait entre légèreté et diversité végétale. Avec une couche de substrat de 10 à 25 cm, elle permet une végétation plus variée : vivaces, graminées, herbes aromatiques et petits arbustes.
            </p>
            <p class="text-gray-600 leading-relaxed mb-6">
              Cette solution est idéale pour les toitures accessibles qui demandent un aspect esthétique soigné tout en maintenant un entretien raisonnable.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div v-for="spec in semiSpecs" :key="spec.label" class="bg-earth-50 rounded-xl p-4">
                <p class="text-xs text-earth-600 font-semibold uppercase tracking-wider">{{ spec.label }}</p>
                <p class="text-sm font-bold text-gray-900 mt-1">{{ spec.value }}</p>
              </div>
            </div>
            <NuxtLink to="/contact" class="btn-primary">Demander un devis</NuxtLink>
          </div>
        </div>

        <hr class="border-gray-100">

        <!-- Intensive -->
        <div id="intensive" class="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div>
            <span class="badge mb-3">Jardin en hauteur</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Toiture intensive & jardins</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              La toiture intensive est un véritable jardin suspendu. Avec une couche de substrat d'au moins 25 cm (jusqu'à 1 m pour les arbres), elle peut accueillir arbustes, arbres fruitiers, espaces de détente, potagers et terrasses aménagées. Une vérification structurelle préalable par un ingénieur en stabilité est indispensable.
            </p>
            <p class="text-gray-600 leading-relaxed mb-6">
              Cette solution haut de gamme transforme radicalement les toits de vos immeubles ou maisons. Elle requiert une structure portante adaptée et un entretien régulier, mais offre un espace de vie unique au-dessus de Bruxelles.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div v-for="spec in intensiveSpecs" :key="spec.label" class="bg-green-50 rounded-xl p-4">
                <p class="text-xs text-green-600 font-semibold uppercase tracking-wider">{{ spec.label }}</p>
                <p class="text-sm font-bold text-gray-900 mt-1">{{ spec.value }}</p>
              </div>
            </div>
            <NuxtLink to="/contact" class="btn-primary">Demander un devis</NuxtLink>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl h-80 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="text-8xl mb-4">🏡</div>
              <p class="text-green-700 font-semibold text-lg">Toiture Intensive</p>
              <p class="text-green-600 text-sm mt-1">Jardins · Terrasses · Arbres</p>
            </div>
          </div>
        </div>

        <hr class="border-gray-100">

        <!-- Entretien -->
        <div id="entretien" class="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div class="order-last lg:order-first bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl h-80 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="text-8xl mb-4">🔧</div>
              <p class="text-gray-700 font-semibold text-lg">Entretien & Maintenance</p>
              <p class="text-gray-600 text-sm mt-1">Suivi · Contrôle · Pérennité</p>
            </div>
          </div>
          <div>
            <span class="badge mb-3">Durabilité garantie</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entretien & maintenance</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              La longévité d'une toiture verte dépend d'un entretien régulier et adapté. ToitureVerte propose des contrats d'entretien sur-mesure pour préserver la qualité et l'esthétique de votre installation.
            </p>
            <ul class="space-y-3 mb-8">
              <li v-for="task in maintenanceTasks" :key="task" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-brand-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">{{ task }}</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-primary">Souscrire un contrat d'entretien</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-brand-800 text-white text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Vous avez un projet en tête ?</h2>
        <p class="text-brand-100 mb-8">Nos experts vous conseillent gratuitement sur le type de végétalisation adapté à votre toiture.</p>
        <NuxtLink to="/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">
          Étude de faisabilité gratuite
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Services Toiture Verte Bruxelles – Extensive, Intensive & Daktuin',
  description: 'Pose toiture verte à Bruxelles : extensive (5–10 cm), semi-intensive, jardin sur toiture. Devis gratuit. TVA 6%. RENOLUTION E5 : jusqu\'à 50 €/m².',
  ogTitle: 'Services toiture verte Bruxelles – ToitureVerte',
  ogDescription: 'Extensive, semi-intensive, jardin sur toiture. Solutions sur-mesure à Bruxelles et en Belgique. Devis gratuit.',
  ogImage: 'https://www.toitureverte.be/og-image.jpg',
  twitterCard: 'summary_large_image',
})
useHead({
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/services' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(serviceSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema([
      { name: 'Accueil', url: 'https://www.toitureverte.be/' },
      { name: 'Services', url: 'https://www.toitureverte.be/services' },
    ])) },
  ],
})
useSeoAlternates('/services')

const extensiveSpecs = [
  { label: 'Épaisseur substrat', value: '5 – 10 cm' },
  { label: 'Poids (gorgé d\'eau)', value: '~100 kg/m²' },
  { label: 'Pente max. acceptée', value: 'jusqu\'à 70 %' },
  { label: 'Entretien', value: '~1 jour/an' },
]

const semiSpecs = [
  { label: 'Épaisseur substrat', value: '10 – 25 cm' },
  { label: 'Poids (gorgé d\'eau)', value: '100 – 400 kg/m²' },
  { label: 'Pente max. acceptée', value: 'jusqu\'à 58 %' },
  { label: 'Entretien', value: '2 – 3 jours/an' },
]

const intensiveSpecs = [
  { label: 'Épaisseur substrat', value: '≥ 25 cm' },
  { label: 'Poids (gorgé d\'eau)', value: '≥ 400 kg/m²' },
  { label: 'Pente max. acceptée', value: 'jusqu\'à 10 %' },
  { label: 'Entretien', value: '2 – 5 jours/an' },
]

const maintenanceTasks = [
  'Désherbage et contrôle de la végétation 1 à 4 fois par an',
  'Inspection de l\'étanchéité et des systèmes de drainage',
  'Fertilisation adaptée aux végétaux en place',
  'Remplacement des végétaux défaillants',
  'Rapport d\'entretien détaillé après chaque intervention',
  'Assistance téléphonique en cas d\'urgence',
]
</script>
