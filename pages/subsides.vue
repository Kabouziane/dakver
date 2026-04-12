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
          <p class="section-subtitle">Pour une toiture extensive de 100 m² à Bruxelles (cas type résidentiel)</p>
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
                <td class="px-4 py-3 text-right text-brand-700 text-base">≈ 3 000 – 4 000 €</td>
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
  title: 'Subsides & Primes Toiture Verte en Belgique 2025',
  description: 'Toutes les aides financières pour végétaliser votre toiture en Belgique : primes Bruxelles (30 €/m²), Wallonie, Flandre, TVA 6%, prêts verts. Guide complet 2025.',
  ogTitle: 'Subsides toiture verte Belgique 2025 – ToitureVerte',
  ogDescription: 'Guide complet des primes et subsides pour toiture verte en Belgique. Bruxelles, Wallonie, Flandre. Jusqu\'à 50% du coût remboursé.',
})
useHead({
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/subsides' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quelles primes existe-t-il pour une toiture verte à Bruxelles ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'À Bruxelles, la prime "Nature dans la ville" offre jusqu\'à 30 €/m² pour les particuliers (max. 5 000 €) et jusqu\'à 50 €/m² pour les professionnels (max. 50 000 €). Elle est octroyée par Bruxelles Environnement sous conditions de surface minimale (10 m²) et de conformité technique.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on cumuler plusieurs aides pour une toiture verte en Belgique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, dans la plupart des cas, les aides régionales, communales et la TVA réduite sont cumulables. À Bruxelles par exemple, on peut combiner la prime Nature dans la ville avec la TVA à 6% et un prêt vert, réduisant le coût net à environ 40-50% du montant initial.',
          },
        },
      ],
    }),
  }],
})

const activeRegion = ref('bruxelles')

const regionSummary = [
  { id: 'bruxelles', name: 'Bruxelles-Capitale', flag: '🏛️', max: 'jusqu\'à 50 000 €', amountClass: 'text-brand-600', activeBg: 'bg-brand-50', activeBorder: 'border-brand-400' },
  { id: 'wallonie', name: 'Wallonie', flag: '🏰', max: 'jusqu\'à 10 000 €', amountClass: 'text-amber-600', activeBg: 'bg-amber-50', activeBorder: 'border-amber-400' },
  { id: 'flandre', name: 'Flandre', flag: '🦁', max: 'variable / commune', amountClass: 'text-yellow-600', activeBg: 'bg-yellow-50', activeBorder: 'border-yellow-400' },
]

const bruxellesPrimes = [
  {
    title: 'Prime "Nature dans la ville" — Particuliers',
    amount: '30 €/m²',
    badgeClass: 'bg-brand-100 text-brand-700',
    borderColor: 'border-brand-400',
    description: 'Prime principale de Bruxelles Environnement pour la végétalisation de toitures privées. Accessible aux propriétaires de maisons unifamiliales et d\'immeubles à appartements.',
    conditions: [
      'Surface minimale : 10 m²',
      'Maximum : 5 000 € par demande',
      'Toiture plane ou pente < 10°',
      'Couche drainante + substrat certifié FLL',
      'Travaux réalisés par un professionnel',
      'Demande à introduire avant le début des travaux',
    ],
  },
  {
    title: 'Prime "Nature dans la ville" — Professionnels / Associations',
    amount: 'jusqu\'à 50 €/m²',
    badgeClass: 'bg-brand-100 text-brand-700',
    borderColor: 'border-brand-600',
    description: 'Pour les entreprises, ASBL, syndics et gestionnaires d\'immeubles. Conditions techniques identiques mais plafond et taux plus élevés.',
    conditions: [
      'Surface minimale : 50 m²',
      'Maximum : 50 000 € par projet',
      'Dossier technique complet requis',
      'Engagement de maintenance sur 5 ans',
      'Rapport de suivi annuel à transmettre',
    ],
  },
  {
    title: 'Prime eau pluviale (Bruxelles)',
    amount: 'jusqu\'à 2 500 €',
    badgeClass: 'bg-blue-100 text-blue-700',
    borderColor: 'border-blue-400',
    description: 'Aide pour l\'installation de systèmes de récupération d\'eau de pluie, souvent combinée avec une toiture verte pour maximiser la gestion des eaux.',
    conditions: [
      'Citerne de récupération ≥ 3 000 litres',
      'Raccordement WC et/ou arrosage',
      'Cumulable avec la prime toiture verte',
    ],
  },
  {
    title: 'Prime Énergie — Isolation de toiture',
    amount: '15 – 30 €/m²',
    badgeClass: 'bg-orange-100 text-orange-700',
    borderColor: 'border-orange-400',
    description: 'Si la végétalisation est couplée à une isolation thermique performante (R ≥ 4,5 m²K/W), la prime énergie de Bruxelles peut être cumulée.',
    conditions: [
      'Valeur R de l\'isolation ≥ 4,5 m²K/W',
      'Travaux réalisés par entrepreneur agréé',
      'Factures détaillées avec décomposition matériaux/pose',
      'Revenus du ménage pris en compte (prime modulée)',
    ],
  },
]

const bxlSteps = [
  'Contacter Bruxelles Environnement ou ToitureVerte pour vérifier l\'éligibilité',
  'Introduire la demande de prime AVANT le début des travaux (formulaire en ligne)',
  'Réaliser les travaux avec les devis approuvés',
  'Envoyer les factures et photos à Bruxelles Environnement dans les 12 mois',
  'Recevoir le paiement de la prime (délai : 3 à 6 mois)',
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
  { aide: 'Prime Nature dans la ville (Bruxelles)', montant: '3 000 €', source: 'Bruxelles Environnement' },
  { aide: 'Prime énergie isolation (si couplée)', montant: '750 €', source: 'Bruxelles Énergie' },
  { aide: 'TVA à 6% (économie vs 21%)', montant: '≈ 450 €', source: 'SPF Finances' },
  { aide: 'Valorisation PEB / revente', montant: 'indirecte', source: '↗ valeur immobilière' },
]
</script>
