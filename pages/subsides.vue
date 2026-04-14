<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Fil d'Ariane" class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink to="/" class="hover:text-white transition-colors">Accueil</NuxtLink>
          <span>/</span>
          <span class="text-white font-medium">Subsides & Primes</span>
        </nav>
        <div class="max-w-2xl">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-600/30 text-brand-200 text-sm font-medium rounded-full border border-brand-500/30 mb-4">
            Mis à jour — 2025
          </span>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
            Subsides &amp; aides financières pour votre toiture verte
          </h1>
          <p class="text-xl text-brand-100">
            En Belgique, la végétalisation de toiture est soutenue financièrement par les trois Régions. Découvrez toutes les aides disponibles selon votre localisation.
          </p>
        </div>
      </div>
    </section>

    <!-- Summary cards -->
    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div v-for="region in regionSummary" :key="region.name"
            class="rounded-2xl p-6 border-2 text-center cursor-pointer transition-all"
            :class="activeRegion === region.id
              ? `${region.activeBg} ${region.activeBorder}`
              : 'border-gray-100 hover:border-gray-200 bg-gray-50'"
            @click="activeRegion = region.id">
            <div class="text-4xl mb-3">{{ region.flag }}</div>
            <h2 class="font-bold text-gray-900">{{ region.name }}</h2>
            <p class="text-2xl font-extrabold mt-1" :class="region.amountClass">{{ region.max }}</p>
            <p class="text-xs text-gray-500 mt-0.5">aide maximale</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Brussels -->
    <section id="bruxelles" class="py-20 bg-white" aria-labelledby="bxl-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-10">
          <div class="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center text-2xl">🏛️</div>
          <div>
            <h2 id="bxl-title" class="text-2xl md:text-3xl font-bold text-gray-900">Région de Bruxelles-Capitale</h2>
            <p class="text-brand-600 font-medium">Les aides les plus importantes en Belgique</p>
          </div>
        </div>

        <!-- RENOLUTION E5 — Tableau des montants par catégorie de revenus -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <span class="badge">RENOLUTION — Prime E5</span>
            <span class="text-sm text-gray-500">renolution.brussels · Demande après travaux</span>
          </div>
          <div class="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-brand-700 text-white">
                  <th class="text-left px-5 py-4 font-semibold rounded-tl-2xl">Type de toiture</th>
                  <th class="text-center px-4 py-4 font-semibold">
                    <div>Cat. I</div>
                    <div class="text-xs font-normal opacity-80">Hauts revenus</div>
                  </th>
                  <th class="text-center px-4 py-4 font-semibold">
                    <div>Cat. II</div>
                    <div class="text-xs font-normal opacity-80">Revenus moyens</div>
                  </th>
                  <th class="text-center px-4 py-4 font-semibold rounded-tr-2xl">
                    <div>Cat. III</div>
                    <div class="text-xs font-normal opacity-80">Bas revenus</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in renolutionE5" :key="row.type"
                  :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                  <td class="px-5 py-4">
                    <p class="font-semibold text-gray-900">{{ row.type }}</p>
                    <p class="text-xs text-gray-500 mt-0.5">{{ row.desc }}</p>
                  </td>
                  <td class="px-4 py-4 text-center font-bold text-brand-700">{{ row.cat1 }}</td>
                  <td class="px-4 py-4 text-center font-bold text-brand-600">{{ row.cat2 }}</td>
                  <td class="px-4 py-4 text-center font-bold text-brand-500">{{ row.cat3 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div v-for="cat in incomeCategories" :key="cat.label" class="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p class="text-xs font-bold text-gray-700 mb-1">{{ cat.label }}</p>
              <p class="text-xs text-gray-500">{{ cat.desc }}</p>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-3">+ Renforcement de structure (E1) : 30–50% des coûts si nécessaire · Citerne d'eau de pluie (C3) : 500–1 100 €/logement · Plafond : 50 000 €/logement cumulés sur 10 ans.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <article v-for="prime in bruxellesPrimes" :key="prime.title"
            class="card border-l-4" :class="prime.borderColor">
            <div class="flex items-start justify-between gap-4 mb-3">
              <h3 class="font-bold text-gray-900 text-lg">{{ prime.title }}</h3>
              <span class="shrink-0 px-3 py-1 rounded-full text-sm font-bold"
                :class="prime.badgeClass">{{ prime.amount }}</span>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ prime.description }}</p>
            <div class="space-y-2">
              <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Conditions principales</p>
              <ul class="space-y-1">
                <li v-for="cond in prime.conditions" :key="cond"
                  class="flex items-start gap-2 text-sm text-gray-700">
                  <svg class="w-4 h-4 text-brand-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  {{ cond }}
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div class="bg-brand-50 rounded-2xl p-6 border border-brand-100">
          <h3 class="font-bold text-brand-900 mb-3 flex items-center gap-2">
            <svg class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Comment introduire une demande à Bruxelles ?
          </h3>
          <ol class="space-y-2">
            <li v-for="(step, i) in bxlSteps" :key="step" class="flex items-start gap-3 text-sm text-brand-800">
              <span class="w-5 h-5 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">{{ i + 1 }}</span>
              {{ step }}
            </li>
          </ol>
        </div>
      </div>
    </section>

    <hr class="border-gray-100">

    <!-- Wallonia -->
    <section id="wallonie" class="py-20 bg-gray-50" aria-labelledby="wal-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-10">
          <div class="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-2xl">🏰</div>
          <div>
            <h2 id="wal-title" class="text-2xl md:text-3xl font-bold text-gray-900">Région Wallonne</h2>
            <p class="text-amber-600 font-medium">Aides régionales + communales cumulables</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <article v-for="prime in walloniePrimes" :key="prime.title"
            class="card border-l-4 border-amber-400">
            <div class="flex items-start justify-between gap-4 mb-3">
              <h3 class="font-bold text-gray-900 text-lg">{{ prime.title }}</h3>
              <span class="shrink-0 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">{{ prime.amount }}</span>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ prime.description }}</p>
            <ul class="space-y-1">
              <li v-for="cond in prime.conditions" :key="cond"
                class="flex items-start gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ cond }}
              </li>
            </ul>
          </article>
        </div>

        <div class="bg-amber-50 rounded-2xl p-6 border border-amber-100">
          <h3 class="font-bold text-amber-900 mb-2">Communes wallonnes avec primes spécifiques</h3>
          <p class="text-sm text-amber-800 mb-4">Certaines communes wallonnes proposent des aides complémentaires. Exemples :</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="city in wallonneVilles" :key="city"
              class="px-3 py-1 bg-white text-amber-700 text-sm font-medium rounded-full border border-amber-200">
              {{ city }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <hr class="border-gray-100">

    <!-- Flanders -->
    <section id="flandre" class="py-20 bg-white" aria-labelledby="fl-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-10">
          <div class="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-2xl">🦁</div>
          <div>
            <h2 id="fl-title" class="text-2xl md:text-3xl font-bold text-gray-900">Région Flamande</h2>
            <p class="text-yellow-600 font-medium">Soutien via les communes et programmes urbains</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article v-for="prime in flandrePrimes" :key="prime.title"
            class="card border-l-4 border-yellow-400">
            <div class="flex items-start justify-between gap-4 mb-3">
              <h3 class="font-bold text-gray-900 text-lg">{{ prime.title }}</h3>
              <span class="shrink-0 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold">{{ prime.amount }}</span>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ prime.description }}</p>
            <ul class="space-y-1">
              <li v-for="cond in prime.conditions" :key="cond"
                class="flex items-start gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ cond }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- TVA & Green loans -->
    <section class="py-20 bg-gray-50" aria-labelledby="fiscal-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="badge mb-3">Avantages supplémentaires</span>
          <h2 id="fiscal-title" class="section-title">TVA réduite &amp; financements verts</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article v-for="item in fiscalItems" :key="item.title" class="card">
            <div class="text-4xl mb-4">{{ item.icon }}</div>
            <h3 class="font-bold text-gray-900 text-lg mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ item.description }}</p>
            <p class="text-xs font-semibold text-brand-600 uppercase tracking-wider">{{ item.tag }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Cumul table -->
    <section class="py-20 bg-white" aria-labelledby="cumul-title">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <span class="badge mb-3">Simulation</span>
          <h2 id="cumul-title" class="section-title">Exemple de cumul des aides</h2>
          <p class="section-subtitle">Pour une toiture extensive de 100 m² à Bruxelles — propriétaire Cat. II (revenus moyens)</p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-brand-700 text-white">
                <th class="text-left px-4 py-3 rounded-tl-xl font-semibold">Aide</th>
                <th class="text-right px-4 py-3 font-semibold">Montant estimé</th>
                <th class="text-left px-4 py-3 rounded-tr-xl font-semibold">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in cumulRows" :key="row.aide"
                :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-4 py-3 text-gray-800">{{ row.aide }}</td>
                <td class="px-4 py-3 text-right font-semibold text-brand-700">{{ row.montant }}</td>
                <td class="px-4 py-3 text-gray-500">{{ row.source }}</td>
              </tr>
              <tr class="bg-brand-50 border-t-2 border-brand-200 font-bold">
                <td class="px-4 py-3 text-brand-900">TOTAL des aides</td>
                <td class="px-4 py-3 text-right text-brand-700 text-base">≈ 2 850 €</td>
                <td class="px-4 py-3 text-brand-700 text-xs">sur un investissement de ≈ 6 000 €</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-400 mt-4 text-center">* Simulation indicative. Les montants réels dépendent des conditions d'éligibilité et évoluent. Consultez-nous pour une analyse personnalisée.</p>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-brand-800 text-white text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">On s'occupe des démarches pour vous</h2>
        <p class="text-brand-100 mb-8">ToitureVerte vous accompagne dans l'identification et la demande de toutes les primes auxquelles vous avez droit. Devis et analyse des subsides gratuits.</p>
        <NuxtLink to="/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">
          Analyse gratuite des subsides disponibles
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Primes Toiture Verte Bruxelles 2025 – RENOLUTION E5 jusqu\'à 50 €/m²',
  description: 'Guide complet des subsides toiture verte 2025 : RENOLUTION E5 Bruxelles (10–50 €/m²), Wallonie, Flandre, TVA 6%. Cumulez les aides pour financer votre projet.',
  ogTitle: 'Primes toiture verte Bruxelles 2025 – RENOLUTION E5',
  ogDescription: 'RENOLUTION E5 : jusqu\'à 50 €/m² à Bruxelles selon vos revenus. Guide des aides Wallonie, Flandre + TVA 6%.',
  ogImage: 'https://www.toitureverte.be/og-image.svg',
  twitterCard: 'summary_large_image',
})
useHead({
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/subsides' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(subsideFaqSchemaFR) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema([
      { name: 'Accueil', url: 'https://www.toitureverte.be/' },
      { name: 'Subsides & Primes', url: 'https://www.toitureverte.be/subsides' },
    ])) },
  ],
})
useSeoAlternates('/subsides')

const activeRegion = ref('bruxelles')

const regionSummary = [
  { id: 'bruxelles', name: 'Bruxelles-Capitale', flag: '🏛️', max: 'jusqu\'à 50 000 €', amountClass: 'text-brand-600', activeBg: 'bg-brand-50', activeBorder: 'border-brand-400' },
  { id: 'wallonie', name: 'Wallonie', flag: '🏰', max: 'jusqu\'à 10 000 €', amountClass: 'text-amber-600', activeBg: 'bg-amber-50', activeBorder: 'border-amber-400' },
  { id: 'flandre', name: 'Flandre', flag: '🦁', max: 'variable / commune', amountClass: 'text-yellow-600', activeBg: 'bg-yellow-50', activeBorder: 'border-yellow-400' },
]

const renolutionE5 = [
  { type: 'Extensive', desc: 'Substrat 5–10 cm · Sedums, mousses', cat1: '10 €/m²', cat2: '15 €/m²', cat3: '20 €/m²' },
  { type: 'Semi-intensive', desc: 'Substrat 10–25 cm · Vivaces, graminées', cat1: '20 €/m²', cat2: '30 €/m²', cat3: '40 €/m²' },
  { type: 'Intensive', desc: 'Substrat ≥ 25 cm · Arbustes, jardin', cat1: '30 €/m²', cat2: '40 €/m²', cat3: '50 €/m²' },
  { type: 'Stockante en eau', desc: 'Couche graviers ≥ 5 cm', cat1: '5 €/m²', cat2: '10 €/m²', cat3: '15 €/m²' },
]

const incomeCategories = [
  { label: 'Cat. I — Hauts revenus', desc: 'Isolé(e) ≥35 ans : R > 85 800 € · Plusieurs personnes : R > 100 800 €' },
  { label: 'Cat. II — Revenus moyens', desc: 'Isolé(e) ≥35 ans : 43 000 € < R ≤ 85 800 € · Plusieurs personnes : 58 000 € < R ≤ 100 800 €' },
  { label: 'Cat. III — Bas revenus', desc: 'Isolé(e) ≥35 ans : R ≤ 43 000 € · Plusieurs personnes : R ≤ 58 000 €' },
]

const bruxellesPrimes = [
  {
    title: 'Conditions techniques RENOLUTION E5',
    amount: 'Obligatoire',
    badgeClass: 'bg-brand-100 text-brand-700',
    borderColor: 'border-brand-400',
    description: 'La prime RENOLUTION E5 s\'applique aux toitures végétalisées neuves ou en rénovation sur des immeubles de plus de 10 ans. Isolation préalable prise en compte.',
    conditions: [
      'Isolation obligatoire R ≥ 4 m²K/W (isolation antérieure acceptée)',
      'Pente minimale de 2 % pour l\'évacuation de l\'eau',
      'Substrat conforme aux épaisseurs par type (5–10 / 10–25 / ≥25 cm)',
      'Entrepreneur inscrit à la BCE et assujetti à la TVA belge',
      'Demande à introduire après travaux, max. 12 mois après la dernière facture',
      'Dépôt uniquement en ligne via irisbox.irisnet.be',
    ],
  },
  {
    title: 'Prime citerne d\'eau de pluie — C3',
    amount: '500–1 100 €',
    badgeClass: 'bg-blue-100 text-blue-700',
    borderColor: 'border-blue-400',
    description: 'Aide complémentaire pour l\'installation d\'une citerne de récupération d\'eau de pluie. Cumulable avec la prime toiture verte E5 dans la même demande.',
    conditions: [
      'Capacité minimale : 1 000 litres',
      'Raccordement à au minimum 1 appareil sanitaire',
      'Bonus capacité tampon : +100 à +200 €/logement pour 1 000 L supplémentaires',
      'Montant selon catégorie de revenus : 500 € (Cat. I) · 750 € (Cat. II) · 1 100 € (Cat. III)',
    ],
  },
  {
    title: 'Renforcement de structure — E1',
    amount: '30–50 % des coûts',
    badgeClass: 'bg-orange-100 text-orange-700',
    borderColor: 'border-orange-400',
    description: 'Si la structure portante doit être renforcée pour supporter le poids d\'une toiture verte, les travaux de renforcement peuvent également être subsidiés.',
    conditions: [
      'Uniquement si le renforcement est nécessaire pour accueillir la toiture verte',
      '30% (Cat. I) · 40% (Cat. II) · 50% (Cat. III) des coûts éligibles',
      'Rapport d\'ingénieur en stabilité recommandé',
      'À intégrer dans la même demande que la prime E5',
    ],
  },
  {
    title: 'Crédit ECORENO — Fonds du Logement',
    amount: '1,5 % ou 2,5 %',
    badgeClass: 'bg-green-100 text-green-700',
    borderColor: 'border-green-400',
    description: 'Crédit à taux réduit pour financer l\'ensemble des travaux de rénovation énergétique. Cumulable avec les primes RENOLUTION.',
    conditions: [
      'Revenus max. 69 721 € (isolé) ou 88 736 € (ménage) + 5 000 €/personne à charge',
      'Crédit hypothécaire : max. 30 ans · Crédit consommation : max. 25 000 €',
      'Uniquement propriétaire-occupant ou futur acquéreur',
      'Via le Fonds du Logement de la Région bruxelloise (fonds.brussels)',
    ],
  },
]

const bxlSteps = [
  'Contacter ToitureVerte pour vérifier l\'éligibilité et estimer vos primes via irisbox.irisnet.be',
  'Réaliser les travaux avec un entrepreneur inscrit à la BCE et assujetti à la TVA belge',
  'Rassembler les factures, preuves de paiement (virement obligatoire > 3 000 €) et photos',
  'Introduire la demande en ligne sur irisbox.irisnet.be dans les 12 mois après la dernière facture',
  'Recevoir le paiement de la prime (délai habituel : 3 à 6 mois après instruction du dossier)',
]

const walloniePrimes = [
  {
    title: 'Prime Énergie Wallonie — Toiture verte isolante',
    amount: 'selon revenus',
    description: 'La Région Wallonne propose des primes énergie pour l\'isolation des toitures. Une toiture verte couplée à une bonne isolation peut être éligible.',
    conditions: [
      'Bâtiment de plus de 5 ans',
      'Valeur R ≥ 4,5 m²K/W pour l\'isolation',
      'Catégorie de revenus détermine le montant',
      'Demande via guichet unique Énergie Wallonie',
    ],
  },
  {
    title: 'UREBA — Bâtiments publics et associatifs',
    amount: 'jusqu\'à 30% du coût',
    description: 'Le programme UREBA soutient les projets d\'efficacité énergétique des bâtiments publics. Une toiture verte dans le cadre d\'une rénovation globale peut y être éligible.',
    conditions: [
      'Exclusivement bâtiments publics ou ASBL',
      'Dans le cadre d\'un projet de rénovation énergétique globale',
      'Dossier à introduire auprès de la SPW Énergie',
    ],
  },
  {
    title: 'Primes communales wallonnes',
    amount: 'variable',
    description: 'De nombreuses communes wallonnes proposent leurs propres primes pour les toitures vertes, cumulables avec les aides régionales.',
    conditions: [
      'Varie selon la commune',
      'Souvent accessible aux particuliers et entreprises',
      'Contactez votre commune ou ToitureVerte pour vérification',
    ],
  },
]

const wallonneVilles = ['Liège', 'Namur', 'Charleroi', 'Mons', 'Louvain-la-Neuve', 'Ottignies', 'Wavre', 'Arlon', 'Verviers']

const flandrePrimes = [
  {
    title: 'Primes Anvers (Stad Antwerpen)',
    amount: 'jusqu\'à 20 €/m²',
    description: 'La ville d\'Anvers propose une prime "groendak" pour les toitures végétalisées extensives et semi-intensives sur les bâtiments résidentiels et commerciaux.',
    conditions: [
      'Surface minimale : 20 m²',
      'Bâtiment situé en ville d\'Anvers',
      'Substrat conforme aux directives FLL',
      'Demande à introduire dans les 6 mois suivant les travaux',
    ],
  },
  {
    title: 'Primes Gand (Stad Gent)',
    amount: 'jusqu\'à 25 €/m²',
    description: 'Dans le cadre du plan Klimaatplan de Gand, une prime spécifique pour les toitures vertes est disponible pour les particuliers et les entreprises.',
    conditions: [
      'Surface minimale : 15 m²',
      'Toiture plate ou légèrement inclinée',
      'Dossier technique avec plan de la toiture',
    ],
  },
  {
    title: 'Mijn VerbouwPremie — Isolation toiture',
    amount: 'selon revenus',
    description: 'La prime flamande "Mijn VerbouwPremie" soutient l\'isolation des toitures. Si la toiture verte est couplée à une isolation performante, les deux aides peuvent se cumuler.',
    conditions: [
      'Bâtiment résidentiel de plus de 5 ans',
      'Isolation R ≥ 4,5 m²K/W',
      'Entrepreneur enregistré (aannemerregistratie)',
      'Demande via le portail Wonen in Vlaanderen',
    ],
  },
]

const fiscalItems = [
  {
    icon: '📉',
    title: 'TVA à 6%',
    description: 'Pour les travaux de végétalisation sur des bâtiments d\'habitation de plus de 10 ans, la TVA peut être réduite à 6% au lieu de 21%. Économie directe de 15% sur la main-d\'œuvre.',
    tag: 'Applicable dans les 3 Régions',
  },
  {
    icon: '🏦',
    title: 'Prêts verts & Écologiques',
    description: 'Plusieurs banques proposent des prêts à taux préférentiel pour les rénovations écologiques incluant les toitures vertes : Crediverde, Eco-Prêt BNP, ING Green Loan. Taux généralement < 2%.',
    tag: 'Financement avantageux',
  },
  {
    icon: '🏢',
    title: 'Déductibilité professionnelle',
    description: 'Pour les sociétés et indépendants, le coût d\'une toiture verte sur un bâtiment professionnel est déductible fiscalement en tant que charge d\'exploitation ou investissement amortissable.',
    tag: 'Pour entreprises & indépendants',
  },
]

const cumulRows = [
  { aide: 'RENOLUTION E5 — Toiture extensive (Cat. II, 100 m²)', montant: '1 500 €', source: 'renolution.brussels' },
  { aide: 'RENOLUTION C3 — Citerne d\'eau de pluie (Cat. II)', montant: '750 €', source: 'renolution.brussels' },
  { aide: 'TVA à 6% (économie vs 21% sur main-d\'œuvre ≈ 3 000 €)', montant: '≈ 450 €', source: 'SPF Finances' },
  { aide: 'Bonus Z10 — 3 primes simultanées (+10% sur primes E/F/G/H)', montant: '≈ 150 €', source: 'renolution.brussels' },
  { aide: 'Valorisation PEB (gain 1–2 classes)', montant: 'indirecte', source: '↗ valeur immobilière' },
]
</script>
