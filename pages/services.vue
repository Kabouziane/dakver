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
          <div class="order-last lg:order-first bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl h-80 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="text-8xl mb-4">🔧</div>
              <p class="text-brand-700 font-semibold text-lg">Entretien & Maintenance</p>
              <p class="text-brand-600 text-sm mt-1">Suivi · Contrôle · Pérennité</p>
            </div>
          </div>
          <div>
            <span class="badge mb-3">Contrat annuel disponible</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entretien de toiture verte</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              La longévité d'une toiture verte dépend d'un suivi régulier. ToitureVerte propose des contrats d'entretien sur-mesure : inspection visuelle annuelle (étanchéité, végétation, drains), désherbage sélectif, fertilisation légère et rapport d'intervention écrit. Intervention ponctuelle ou contrat annuel selon vos besoins.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div v-for="spec in entretienSpecs" :key="spec.label" class="bg-brand-50 rounded-xl p-4">
                <p class="text-xs text-brand-600 font-semibold uppercase tracking-wider">{{ spec.label }}</p>
                <p class="text-sm font-bold text-gray-900 mt-1">{{ spec.value }}</p>
              </div>
            </div>
            <NuxtLink to="/contact" class="btn-primary">Souscrire un contrat d'entretien</NuxtLink>
          </div>
        </div>

        <hr class="border-gray-100">

        <!-- Panneaux solaires -->
        <div id="solaire" class="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-3">Combinable avec toiture verte</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Installation panneaux solaires & gestion énergie</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              Installez des panneaux photovoltaïques sur votre toiture plate ou inclinée, combinés avec une toiture verte. La végétation refroidit naturellement les panneaux et améliore leur rendement de <strong>+8%</strong>. Inclut étude d'orientation, onduleur, monitoring de production et raccordement réseau. Partenariat avec installateurs certifiés. Primes Bruxelles Énergie applicables.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div v-for="spec in solaireSpecs" :key="spec.label" class="bg-amber-50 rounded-xl p-4">
                <p class="text-xs text-amber-600 font-semibold uppercase tracking-wider">{{ spec.label }}</p>
                <p class="text-sm font-bold text-gray-900 mt-1">{{ spec.value }}</p>
              </div>
            </div>
            <NuxtLink to="/contact" class="btn-primary">Demander un devis</NuxtLink>
          </div>
          <div class="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-3xl h-80 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="text-8xl mb-4" role="img" aria-label="Panneaux solaires">☀️</div>
              <p class="text-amber-700 font-semibold text-lg">Panneaux Solaires</p>
              <p class="text-amber-600 text-sm mt-1">Énergie · Rendement · Durabilité</p>
            </div>
          </div>
        </div>

        <hr class="border-gray-100">

        <!-- Récupération eau de pluie -->
        <div id="eau-de-pluie" class="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div class="order-last lg:order-first bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl h-80 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="text-8xl mb-4" role="img" aria-label="Récupération d'eau de pluie">💧</div>
              <p class="text-blue-700 font-semibold text-lg">Récupération d'Eau</p>
              <p class="text-blue-600 text-sm mt-1">Collecte · Stockage · Économies</p>
            </div>
          </div>
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">Économisez jusqu'à 50% d'eau</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Système de récupération d'eau de pluie</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              Concevez et installez un système de collecte et stockage des eaux pluviales depuis votre toiture verte. La végétation filtre naturellement l'eau récupérée, qui alimente ensuite vos WC, le lavage de voiture ou l'arrosage. Citerne enterrée ou aérienne, filtration multicouche, pompe de relevage et compteur de production.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div v-for="spec in eauSpecs" :key="spec.label" class="bg-blue-50 rounded-xl p-4">
                <p class="text-xs text-blue-600 font-semibold uppercase tracking-wider">{{ spec.label }}</p>
                <p class="text-sm font-bold text-gray-900 mt-1">{{ spec.value }}</p>
              </div>
            </div>
            <NuxtLink to="/contact" class="btn-primary">Demander un devis</NuxtLink>
          </div>
        </div>

        <hr class="border-gray-100">

        <!-- Façade végétale -->
        <div id="facade" class="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3">Intérieur ou extérieur</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Façade végétale & mur vert</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              Transformez vos façades extérieures ou vos murs intérieurs en jardins verticaux. Systèmes hydroponiques ou en substrat, plantes grimpantes sur treillage, panneaux modulaires. Améliore l'isolation thermique et acoustique, réduit l'effet îlot de chaleur et crée un impact visuel fort. Entretien disponible via contrat annuel.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div v-for="spec in facadeSpecs" :key="spec.label" class="bg-emerald-50 rounded-xl p-4">
                <p class="text-xs text-emerald-600 font-semibold uppercase tracking-wider">{{ spec.label }}</p>
                <p class="text-sm font-bold text-gray-900 mt-1">{{ spec.value }}</p>
              </div>
            </div>
            <NuxtLink to="/contact" class="btn-primary">Demander un devis</NuxtLink>
          </div>
          <div class="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl h-80 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="text-8xl mb-4" role="img" aria-label="Façade végétale">🌿</div>
              <p class="text-emerald-700 font-semibold text-lg">Façade Végétale</p>
              <p class="text-emerald-600 text-sm mt-1">Vertical · Impact · Isolation</p>
            </div>
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
  title: 'Services Toiture Verte Bruxelles – Extensive, Solaire, Eau de Pluie & Façade',
  description: 'ToitureVerte Bruxelles : toiture verte extensive/intensive, panneaux solaires, récupération eau de pluie, façade végétale, entretien. TVA 6%. Devis gratuit.',
  ogTitle: 'Services toiture verte & durabilité Bruxelles – ToitureVerte',
  ogDescription: 'Toiture verte, panneaux solaires, eau de pluie, façade végétale. Solutions sur-mesure à Bruxelles. Devis gratuit.',
  ogImage: 'https://www.toitureverte.be/og-image.svg',
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

const entretienSpecs = [
  { label: 'Fréquence', value: '1–2×/an' },
  { label: 'Durée', value: '2–4 heures' },
  { label: 'Rapport écrit', value: 'Inclus' },
  { label: 'Urgence', value: 'Sous 48h' },
]

const solaireSpecs = [
  { label: 'Puissance', value: '3 à 30 kWc' },
  { label: 'Rendement +toiture verte', value: '+8%' },
  { label: 'Primes disponibles', value: 'jusqu\'à 1 500 €' },
  { label: 'Garantie panneaux', value: '25 ans' },
]

const eauSpecs = [
  { label: 'Volume citerne', value: '1 000–10 000 L' },
  { label: 'Économie eau potable', value: 'jusqu\'à 50%' },
  { label: 'Usages', value: 'WC, arrosage, lavage' },
  { label: 'Prime Bruxelles', value: 'possible (C3)' },
]

const facadeSpecs = [
  { label: 'Système', value: 'Substrat ou hydroponique' },
  { label: 'Emplacement', value: 'Intérieur ou extérieur' },
  { label: 'Surface min.', value: 'à partir de 2 m²' },
  { label: 'Entretien', value: 'Contrat disponible' },
]
</script>
