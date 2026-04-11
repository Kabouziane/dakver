<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Fil d'Ariane" class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink to="/" class="hover:text-white transition-colors">Accueil</NuxtLink>
          <span>/</span>
          <span class="text-white font-medium">Techniques</span>
        </nav>
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Techniques de végétalisation</h1>
          <p class="text-xl text-brand-100">
            Comprendre comment fonctionne une toiture verte : couches de construction, substrats, végétaux et drainage. Tout ce que vous devez savoir.
          </p>
        </div>
      </div>
    </section>

    <!-- Construction layers -->
    <section class="py-20 bg-white" aria-labelledby="layers-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Structure</span>
          <h2 id="layers-title" class="section-title">Les couches d'une toiture verte</h2>
          <p class="section-subtitle">
            Une toiture végétalisée est un système multicouche, chaque couche ayant un rôle précis pour la durabilité de l'installation.
          </p>
        </div>
        <div class="relative max-w-2xl mx-auto">
          <div class="space-y-3">
            <div v-for="(layer, index) in layers" :key="layer.name"
              class="flex items-start gap-4 p-5 rounded-2xl border-2 transition-all"
              :class="layer.bgClass">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shrink-0 text-sm"
                :class="layer.numClass">
                {{ index + 1 }}
              </div>
              <div>
                <h3 class="font-bold text-gray-900">{{ layer.name }}</h3>
                <p class="text-sm text-gray-600 mt-0.5">{{ layer.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Substrates -->
    <section class="py-20 bg-gray-50" aria-labelledby="substrate-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Matériaux</span>
          <h2 id="substrate-title" class="section-title">Le substrat : cœur du système</h2>
          <p class="section-subtitle">
            Le substrat n'est pas de la simple terre de jardin. Il est conçu spécialement pour être léger, drainant et fertile.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article v-for="sub in substrates" :key="sub.name" class="card">
            <div class="text-4xl mb-4">{{ sub.icon }}</div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ sub.name }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ sub.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Plants -->
    <section class="py-20 bg-white" aria-labelledby="plants-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Végétaux</span>
          <h2 id="plants-title" class="section-title">Les végétaux adaptés au climat belge</h2>
          <p class="section-subtitle">
            Nous sélectionnons des plantes résistantes aux conditions climatiques belges : pluie, gel, vent et chaleur estivale.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="plant in plants" :key="plant.name"
            class="bg-brand-50 rounded-2xl p-5 border border-brand-100">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">{{ plant.icon }}</span>
              <div>
                <h3 class="font-bold text-gray-900">{{ plant.name }}</h3>
                <span class="text-xs font-medium px-2 py-0.5 rounded-full"
                  :class="plant.typeClass">{{ plant.type }}</span>
              </div>
            </div>
            <p class="text-sm text-gray-600">{{ plant.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Climate & Belgium -->
    <section class="py-20 bg-brand-800 text-white" aria-labelledby="climate-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-600/30 text-brand-200 text-sm font-medium rounded-full border border-brand-500/30 mb-4">
              Adaptation locale
            </span>
            <h2 id="climate-title" class="text-3xl md:text-4xl font-bold mb-6">
              Conçu pour le climat belge
            </h2>
            <p class="text-brand-100 leading-relaxed mb-6">
              Le climat belge, avec ses précipitations abondantes, ses hivers froids et ses étés de plus en plus chauds, demande des solutions végétales spécifiques. ToitureVerte maîtrise ces contraintes locales.
            </p>
            <div class="space-y-4">
              <div v-for="point in climatePoints" :key="point.title" class="flex gap-3">
                <span class="text-xl">{{ point.icon }}</span>
                <div>
                  <h3 class="font-semibold text-white">{{ point.title }}</h3>
                  <p class="text-sm text-brand-200">{{ point.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="metric in climateMetrics" :key="metric.label"
              class="bg-brand-700/50 rounded-2xl p-5 border border-brand-600/30 text-center">
              <p class="text-3xl font-bold text-white">{{ metric.value }}</p>
              <p class="text-sm text-brand-300 mt-1">{{ metric.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Standards & certifications -->
    <section class="py-20 bg-gray-50" aria-labelledby="norms-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="badge mb-3">Qualité & conformité</span>
          <h2 id="norms-title" class="section-title">Normes et certifications</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div v-for="norm in norms" :key="norm.title" class="card text-center">
            <div class="text-3xl mb-3">{{ norm.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ norm.title }}</h3>
            <p class="text-sm text-gray-600">{{ norm.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Techniques de Végétalisation de Toiture',
  description: 'Tout savoir sur les techniques de toiture verte : couches de construction, substrats, végétaux adaptés au climat belge. Expert ToitureVerte à Bruxelles.',
  ogTitle: 'Techniques de végétalisation – ToitureVerte',
  ogDescription: 'Substrats, systèmes de drainage, végétaux adaptés à la Belgique. Tout comprendre sur les toitures vertes.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/techniques' }] })

const layers = [
  { name: 'Végétaux', description: 'Plantes sélectionnées selon le type de toiture et le climat belge.', bgClass: 'bg-brand-50 border-brand-200', numClass: 'bg-brand-500' },
  { name: 'Substrat de culture', description: 'Mélange léger et drainant de granulats, compost et éléments nutritifs.', bgClass: 'bg-amber-50 border-amber-200', numClass: 'bg-amber-500' },
  { name: 'Couche filtrante', description: 'Géotextile qui empêche le substrat de colmater le drainage.', bgClass: 'bg-yellow-50 border-yellow-200', numClass: 'bg-yellow-500' },
  { name: 'Couche drainante', description: 'Permet l\'évacuation de l\'eau en excès et stocke une réserve d\'eau.', bgClass: 'bg-blue-50 border-blue-200', numClass: 'bg-blue-500' },
  { name: 'Couche anti-racines', description: 'Protection de l\'étanchéité contre la pénétration des racines.', bgClass: 'bg-orange-50 border-orange-200', numClass: 'bg-orange-500' },
  { name: 'Étanchéité', description: 'Membrane étanche existante ou nouvelle, socle de tout le système.', bgClass: 'bg-gray-50 border-gray-300', numClass: 'bg-gray-600' },
  { name: 'Structure porteuse', description: 'Dalle béton, bac acier ou charpente dimensionnée pour le poids total.', bgClass: 'bg-slate-50 border-slate-300', numClass: 'bg-slate-700' },
]

const substrates = [
  {
    icon: '🏔️',
    name: 'Granulats légers (Leca, lave)',
    description: 'Argile expansée ou roche volcanique. Très légers, excellente drainage et rétention d\'eau. Base des substrats extensifs.',
  },
  {
    icon: '🌱',
    name: 'Compost végétal',
    description: 'Apporte les nutriments nécessaires aux végétaux. Dosé précisément pour éviter une trop forte fertilisation qui favoriserait les mauvaises herbes.',
  },
  {
    icon: '🔬',
    name: 'Mixes certifiés FLL',
    description: 'Substrats conformes aux directives allemandes FLL (standard européen), garantissant performance et durabilité sur le long terme.',
  },
]

const plants = [
  { icon: '🌵', name: 'Sedums (Sedum sp.)', type: 'Extensive', typeClass: 'bg-brand-100 text-brand-700', description: 'Les plus utilisés. Résistants à la sécheresse, au gel et au vent. Fleurissent de mai à septembre avec des couleurs vives.' },
  { icon: '🌾', name: 'Graminées', type: 'Semi-intensive', typeClass: 'bg-amber-100 text-amber-700', description: 'Fétuques, molinie, miscanthus. Mouvement naturel dans le vent, textures variées, résistance aux conditions belges.' },
  { icon: '🌸', name: 'Vivaces résistantes', type: 'Semi-intensive', typeClass: 'bg-amber-100 text-amber-700', description: 'Echinacea, Penstemon, Achillée. Diversité florale attrayante pour les pollinisateurs et esthétiquement remarquable.' },
  { icon: '🍀', name: 'Mousses & lichens', type: 'Extensive', typeClass: 'bg-brand-100 text-brand-700', description: 'Idéales pour les zones ombragées. Forment un tapis vert dense sans entretien sur les substrats très minces.' },
  { icon: '🌳', name: 'Arbustes', type: 'Intensive', typeClass: 'bg-green-100 text-green-700', description: 'Lavande, spirée, rosiers. Végétation structurante pour les toitures intensives avec substrat de 25 cm minimum.' },
  { icon: '🥬', name: 'Plantes aromatiques', type: 'Intensive', typeClass: 'bg-green-100 text-green-700', description: 'Thym, romarin, menthe. Pour les jardins potagers en hauteur, de plus en plus populaires à Bruxelles.' },
]

const climatePoints = [
  { icon: '🌧️', title: 'Gestion des pluies belges', description: 'Rétention maximale de l\'eau de pluie abondante, réduisant le ruissellement en ville.' },
  { icon: '❄️', title: 'Résistance au gel', description: 'Végétaux sélectionnés pour résister aux hivers belges (-10°C à -15°C).' },
  { icon: '☀️', title: 'Résistance aux canicules', description: 'Espèces adaptées aux étés de plus en plus chauds du changement climatique.' },
]

const climateMetrics = [
  { value: '850mm', label: 'Précipitations annuelles à Bruxelles' },
  { value: '90%', label: 'Rétention des eaux pluviales (toiture extensive)' },
  { value: '-4°C', label: 'Température hivernale moyenne' },
  { value: '30+°C', label: 'Température estivale max. récente' },
]

const norms = [
  { icon: '📋', title: 'Norme FLL', description: 'Directives allemandes pour les toitures vertes, standard de référence en Europe pour la qualité des substrats et systèmes.' },
  { icon: '🏗️', title: 'Eurocodes structurels', description: 'Calculs de charges conformes aux Eurocodes. Vérification systématique de la structure portante avant tout projet.' },
  { icon: '🌿', title: 'Certification ANPI', description: 'Étanchéité certifiée conforme aux normes belges. Garantie décennale sur l\'imperméabilisation.' },
]
</script>
