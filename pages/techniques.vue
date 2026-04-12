<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Fil d'Ariane" class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink :to="localePath('/')" class="hover:text-white transition-colors">Accueil</NuxtLink>
          <span>/</span>
          <span class="text-white font-medium">Techniques & Effets</span>
        </nav>
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
            Techniques, effets positifs &amp; impact sur le PEB
          </h1>
          <p class="text-xl text-brand-100">
            Comprendre comment fonctionne une toiture verte, mesurer ses bénéfices concrets et saisir son impact sur la performance énergétique de votre bâtiment.
          </p>
        </div>
        <!-- Anchor nav -->
        <div class="flex flex-wrap gap-2 mt-8">
          <a v-for="anchor in anchors" :key="anchor.href" :href="anchor.href"
            class="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full transition-colors border border-white/20">
            {{ anchor.label }}
          </a>
        </div>
      </div>
    </section>

    <!-- ===== 1. CONSTRUCTION LAYERS ===== -->
    <section id="structure" class="py-20 bg-white scroll-mt-24" aria-labelledby="layers-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Structure</span>
          <h2 id="layers-title" class="section-title">Anatomie d'une toiture verte</h2>
          <p class="section-subtitle">Chaque couche a un rôle précis et contribue à la performance globale du système.</p>
        </div>
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <div class="space-y-3">
            <div v-for="(layer, index) in layers" :key="layer.name"
              class="flex items-start gap-4 p-5 rounded-2xl border-2 transition-all cursor-default group"
              :class="selectedLayer === index ? `${layer.activeBg} ${layer.activeBorder}` : 'border-gray-100 hover:border-gray-200'"
              @mouseenter="selectedLayer = index"
              @mouseleave="selectedLayer = null">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shrink-0 text-sm shadow"
                :class="layer.numClass">
                {{ layers.length - index }}
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900">{{ layer.name }}</h3>
                <p class="text-sm text-gray-600 mt-0.5">{{ layer.description }}</p>
              </div>
              <span v-if="layer.thickness" class="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded-lg shrink-0">
                {{ layer.thickness }}
              </span>
            </div>
          </div>
          <div class="sticky top-24 bg-gradient-to-br from-brand-50 to-green-50 rounded-3xl p-8 border border-brand-100">
            <h3 class="font-bold text-brand-900 mb-4">À retenir</h3>
            <ul class="space-y-3">
              <li v-for="point in structurePoints" :key="point" class="flex items-start gap-2.5 text-sm text-brand-800">
                <svg class="w-4 h-4 text-brand-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ point }}
              </li>
            </ul>
            <div class="mt-6 pt-6 border-t border-brand-200">
              <p class="text-xs text-brand-600 font-semibold uppercase tracking-wider mb-2">Poids total selon le type</p>
              <div class="space-y-2">
                <div v-for="w in weights" :key="w.label" class="flex items-center gap-2">
                  <span class="text-xs text-brand-700 w-24">{{ w.label }}</span>
                  <div class="flex-1 bg-brand-100 rounded-full h-2">
                    <div class="bg-brand-500 h-2 rounded-full" :style="`width: ${w.pct}%`" />
                  </div>
                  <span class="text-xs font-bold text-brand-700 w-24 text-right">{{ w.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 2. SUBSTRATS & VÉGÉTAUX ===== -->
    <section id="materiaux" class="py-20 bg-gray-50 scroll-mt-24" aria-labelledby="mat-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Matériaux</span>
          <h2 id="mat-title" class="section-title">Substrats &amp; végétaux</h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- Substrates -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-5">Substrats de culture</h3>
            <div class="space-y-4">
              <article v-for="sub in substrates" :key="sub.name" class="card flex gap-4">
                <div class="text-3xl shrink-0">{{ sub.icon }}</div>
                <div>
                  <h4 class="font-bold text-gray-900">{{ sub.name }}</h4>
                  <p class="text-sm text-gray-600 mt-1">{{ sub.description }}</p>
                  <p class="text-xs text-brand-600 font-semibold mt-2">{{ sub.usage }}</p>
                </div>
              </article>
            </div>
          </div>
          <!-- Plants -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-5">Végétaux adaptés au climat belge</h3>
            <div class="space-y-3">
              <article v-for="plant in plants" :key="plant.name"
                class="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <span class="text-2xl shrink-0">{{ plant.icon }}</span>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <h4 class="font-bold text-gray-900 text-sm">{{ plant.name }}</h4>
                    <span class="text-xs px-2 py-0.5 rounded-full font-medium" :class="plant.typeClass">{{ plant.type }}</span>
                  </div>
                  <p class="text-xs text-gray-600">{{ plant.description }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 3. EFFETS POSITIFS ===== -->
    <section id="effets" class="py-20 bg-white scroll-mt-24" aria-labelledby="effects-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Bénéfices mesurés</span>
          <h2 id="effects-title" class="section-title">Les effets positifs d'une toiture verte</h2>
          <p class="section-subtitle">Des bénéfices chiffrés, validés par des études scientifiques en contexte climatique belge.</p>
        </div>

        <div class="space-y-8">
          <article v-for="effect in effects" :key="effect.title"
            class="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div class="grid lg:grid-cols-3">
              <div class="p-6 flex flex-col justify-center" :class="effect.headerBg">
                <div class="text-4xl mb-3">{{ effect.icon }}</div>
                <h3 class="text-xl font-bold" :class="effect.titleColor">{{ effect.title }}</h3>
                <p class="text-sm mt-2 leading-relaxed" :class="effect.textColor">{{ effect.summary }}</p>
              </div>
              <div class="lg:col-span-2 p-6 bg-white">
                <div class="grid sm:grid-cols-2 gap-4 mb-4">
                  <div v-for="metric in effect.metrics" :key="metric.label"
                    class="bg-gray-50 rounded-xl p-4 text-center">
                    <p class="text-2xl font-extrabold text-gray-900">{{ metric.value }}</p>
                    <p class="text-xs text-gray-500 mt-0.5">{{ metric.label }}</p>
                  </div>
                </div>
                <ul class="space-y-1.5">
                  <li v-for="detail in effect.details" :key="detail"
                    class="flex items-start gap-2 text-sm text-gray-700">
                    <svg class="w-4 h-4 text-brand-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ===== ANIMATION ===== -->
    <section id="animation" class="py-20 bg-gray-50 scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Visualisation</span>
          <h2 class="section-title">L'évapotranspiration en action</h2>
          <p class="section-subtitle">Un aperçu animé du fonctionnement thermique et hydrologique d'une toiture verte.</p>
        </div>
        <EvapotranspirationAnimation />
      </div>
    </section>

    <!-- ===== 4. PEB ===== -->
    <section id="peb" class="py-20 bg-gray-50 scroll-mt-24" aria-labelledby="peb-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Réglementation énergétique</span>
          <h2 id="peb-title" class="section-title">Impact sur le PEB</h2>
          <p class="section-subtitle">
            Le PEB (Performance Énergétique des Bâtiments) mesure l'efficacité énergétique de votre bâtiment. Une toiture verte joue un rôle direct sur plusieurs indicateurs.
          </p>
        </div>

        <!-- What is PEB -->
        <div class="grid lg:grid-cols-2 gap-10 mb-16 items-start">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce que le PEB en Belgique ?</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Le PEB est le certificat de performance énergétique obligatoire en Belgique pour toute vente ou location d'un bien immobilier. Il classe le bâtiment de <strong>A++ à G</strong> selon sa consommation d'énergie primaire (kWh/m²/an) et ses émissions de CO₂.
            </p>
            <p class="text-gray-600 leading-relaxed mb-6">
              En région bruxelloise, les nouvelles constructions doivent atteindre une norme NZEB (Nearly Zero Energy Building). La toiture représente en moyenne <strong>20 à 30% des pertes thermiques</strong> d'un bâtiment, ce qui fait de la végétalisation un levier important.
            </p>
            <div class="bg-brand-50 rounded-2xl p-5 border border-brand-100">
              <p class="text-sm font-semibold text-brand-900 mb-3">Obligations PEB en Belgique</p>
              <ul class="space-y-2">
                <li v-for="obl in pebObligations" :key="obl" class="flex items-start gap-2 text-sm text-brand-800">
                  <svg class="w-4 h-4 text-brand-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  {{ obl }}
                </li>
              </ul>
            </div>
          </div>

          <!-- PEB classes visual -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-4">Classes PEB — Bruxelles</h3>
            <div class="space-y-2">
              <div v-for="cls in pebClasses" :key="cls.label"
                class="flex items-center gap-3 p-3 rounded-xl"
                :class="cls.active ? 'ring-2 ring-brand-400 bg-brand-50' : ''">
                <div class="w-10 h-8 rounded-lg flex items-center justify-center font-extrabold text-white text-sm shrink-0"
                  :class="cls.bg">
                  {{ cls.label }}
                </div>
                <div class="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                  <div class="h-full rounded-full" :class="cls.barColor" :style="`width: ${cls.barWidth}%`" />
                </div>
                <span class="text-xs text-gray-600 w-28 text-right">{{ cls.range }}</span>
                <span v-if="cls.active" class="text-xs font-bold text-brand-600 whitespace-nowrap">← gain possible</span>
              </div>
            </div>
            <p class="text-xs text-gray-400 mt-3">kWh/m²/an d'énergie primaire (Bruxelles). Une toiture verte bien isolée peut aider à progresser d'une à deux classes.</p>
          </div>
        </div>

        <!-- U-value impact -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Impact sur la valeur U (résistance thermique)</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="uval in uValues" :key="uval.scenario" class="card text-center">
              <p class="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">{{ uval.scenario }}</p>
              <div class="text-5xl font-extrabold mb-1" :class="uval.color">{{ uval.value }}</div>
              <p class="text-sm text-gray-500 mb-4">W/m²K</p>
              <div class="w-full bg-gray-100 rounded-full h-2 mb-2">
                <div class="h-2 rounded-full" :class="uval.barColor" :style="`width: ${uval.pct}%`" />
              </div>
              <p class="text-xs text-gray-600 leading-relaxed">{{ uval.description }}</p>
            </div>
          </div>
          <p class="text-xs text-gray-400 text-center mt-4">* Valeurs indicatives. Dépendent de l'isolation existante et de l'épaisseur du substrat.</p>
        </div>

        <!-- Energy savings -->
        <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div class="bg-gradient-to-r from-brand-700 to-brand-600 p-6">
            <h3 class="text-xl font-bold text-white">Économies énergétiques estimées — Belgique</h3>
            <p class="text-brand-100 text-sm mt-1">Pour une maison unifamiliale de 150 m² à Bruxelles avec toiture extensive de 80 m²</p>
          </div>
          <div class="p-6 overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-200">
                  <th class="text-left py-2 text-gray-600 font-semibold">Indicateur</th>
                  <th class="text-right py-2 text-gray-600 font-semibold">Sans toiture verte</th>
                  <th class="text-right py-2 text-gray-600 font-semibold">Avec toiture verte</th>
                  <th class="text-right py-2 text-brand-700 font-semibold">Gain</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-for="row in energyRows" :key="row.indicator">
                  <td class="py-3 text-gray-800 font-medium">{{ row.indicator }}</td>
                  <td class="py-3 text-right text-gray-600">{{ row.without }}</td>
                  <td class="py-3 text-right text-gray-600">{{ row.with }}</td>
                  <td class="py-3 text-right font-bold text-brand-600">{{ row.gain }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 5. DURÉE DE VIE ===== -->
    <section id="durabilite" class="py-20 bg-white scroll-mt-24" aria-labelledby="durability-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Long terme</span>
          <h2 id="durability-title" class="section-title">Durabilité &amp; protection de l'étanchéité</h2>
          <p class="section-subtitle">Un bénéfice souvent sous-estimé : une toiture verte multiplie la durée de vie de la membrane d'étanchéité.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article v-for="item in durabilityItems" :key="item.title" class="card text-center group">
            <div class="text-5xl mb-4">{{ item.icon }}</div>
            <p class="text-4xl font-extrabold text-brand-600 mb-1">{{ item.stat }}</p>
            <h3 class="font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-600">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Norms -->
    <section class="py-16 bg-gray-50" aria-labelledby="norms-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <span class="badge mb-3">Conformité</span>
          <h2 id="norms-title" class="section-title">Normes &amp; certifications</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          <div v-for="norm in norms" :key="norm.title" class="card text-center">
            <div class="text-3xl mb-3">{{ norm.icon }}</div>
            <h3 class="font-bold text-gray-900 text-sm mb-2">{{ norm.title }}</h3>
            <p class="text-xs text-gray-600">{{ norm.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-brand-800 text-white text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Améliorez votre PEB avec une toiture verte</h2>
        <p class="text-brand-100 mb-8">Nos experts analysent votre situation et calculent l'impact précis sur votre certificat PEB. Étude gratuite et sans engagement.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink :to="localePath('/contact')" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">
            Étude PEB gratuite
          </NuxtLink>
          <NuxtLink :to="localePath('/subsides')" class="btn-secondary text-base px-8 py-4">
            Voir les subsides disponibles
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

useSeoMeta({
  title: 'Techniques, Effets Positifs & Impact PEB – Toiture Verte',
  description: 'Guide complet sur les techniques de toiture verte : structure, substrats, végétaux, effets sur isolation, eau, biodiversité, qualité de l\'air et impact sur le PEB en Belgique.',
  ogTitle: 'Techniques & effets d\'une toiture verte – ToitureVerte Belgique',
  ogDescription: 'Structure, matériaux, effets positifs mesurés et impact détaillé sur le PEB. Tout comprendre avant de végétaliser votre toiture.',
})
useHead({
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/techniques' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quelle est la valeur U d\'une toiture verte extensive ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Une toiture verte extensive bien conçue atteint une valeur U de 0,15 à 0,25 W/m²K (selon l\'épaisseur d\'isolation et de substrat), contre 0,5 à 2,5 W/m²K pour un toit plat conventionnel non isolé. Le substrat humide joue un rôle d\'isolation supplémentaire en hiver.',
          },
        },
        {
          '@type': 'Question',
          name: 'Une toiture verte améliore-t-elle le certificat PEB ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. En améliorant la résistance thermique de la toiture (valeur R plus élevée, valeur U plus faible), une toiture verte réduit les besoins en chauffage et en climatisation, ce qui améliore le score PEB. Selon la situation initiale, il est possible de progresser d\'une à deux classes PEB (ex. de D à C ou de C à B).',
          },
        },
      ],
    }),
  }],
})

const selectedLayer = ref<number | null>(null)

const anchors = [
  { href: '#structure', label: 'Structure' },
  { href: '#materiaux', label: 'Matériaux' },
  { href: '#effets', label: 'Effets positifs' },
  { href: '#animation', label: 'Animation' },
  { href: '#peb', label: 'Impact PEB' },
  { href: '#durabilite', label: 'Durabilité' },
]

const layers = [
  { name: 'Végétaux', description: 'Couverture végétale sélectionnée (sedums, vivaces, graminées, arbustes) selon le type et le climat.', thickness: null, numClass: 'bg-brand-500', activeBg: 'bg-brand-50', activeBorder: 'border-brand-300' },
  { name: 'Substrat de culture', description: 'Mélange léger et drainant spécialement formulé pour les toitures. Certifié FLL.', thickness: '5–30+ cm', numClass: 'bg-amber-500', activeBg: 'bg-amber-50', activeBorder: 'border-amber-300' },
  { name: 'Couche filtrante (géotextile)', description: 'Feutre ou géotextile imperméable aux fines particules. Empêche le substrat de colmater le drainage.', thickness: '2–3 mm', numClass: 'bg-yellow-500', activeBg: 'bg-yellow-50', activeBorder: 'border-yellow-300' },
  { name: 'Couche drainante', description: 'Granulats, billes ou nappe de drainage. Évacue l\'excès d\'eau tout en stockant une réserve pour les végétaux.', thickness: '4–12 cm', numClass: 'bg-blue-500', activeBg: 'bg-blue-50', activeBorder: 'border-blue-300' },
  { name: 'Protection anti-racines', description: 'Membrane spécifique résistant à la pénétration des racines. Protège l\'étanchéité sur le long terme.', thickness: '1–3 mm', numClass: 'bg-orange-500', activeBg: 'bg-orange-50', activeBorder: 'border-orange-300' },
  { name: 'Isolation thermique', description: 'PIR, XPS ou laine minérale. Composante essentielle pour la performance PEB du bâtiment.', thickness: '10–20+ cm', numClass: 'bg-red-500', activeBg: 'bg-red-50', activeBorder: 'border-red-300' },
  { name: 'Étanchéité', description: 'Membrane EPDM, bitume ou PVC. Base imperméable de tout le système, protégée par les couches supérieures.', thickness: '3–8 mm', numClass: 'bg-gray-600', activeBg: 'bg-gray-50', activeBorder: 'border-gray-300' },
  { name: 'Structure porteuse', description: 'Dalle béton, bac acier ou charpente bois. Doit supporter le poids total avec marge de sécurité.', thickness: null, numClass: 'bg-gray-800', activeBg: 'bg-slate-50', activeBorder: 'border-slate-300' },
]

const structurePoints = [
  'La toiture verte protège activement la membrane d\'étanchéité des UV et des chocs thermiques',
  'Le substrat humide agit comme masse thermique en hiver',
  'Chaque couche est dimensionnée selon le poids admissible calculé par notre bureau d\'études',
  'Les systèmes certifiés FLL garantissent durabilité et performance sur 40+ ans',
]

const weights = [
  { label: 'Extensive', value: '50–150 kg/m²', pct: 25 },
  { label: 'Semi-intensive', value: '150–300 kg/m²', pct: 55 },
  { label: 'Intensive', value: '300–600+ kg/m²', pct: 100 },
]

const substrates = [
  { icon: '🏔️', name: 'Granulats légers (Leca, lave volcanique)', description: 'Argile expansée ou roche volcanique concassée. Très légers, excellente drainage et rétention capillaire. Base incontournable des systèmes extensifs.', usage: 'Extensif · Semi-intensif' },
  { icon: '🌱', name: 'Compost végétal', description: 'Apport de matière organique et de nutriments. Dosé précisément pour éviter une fertilisation excessive qui favoriserait les adventices au détriment des sedums.', usage: 'Tous types' },
  { icon: '🔬', name: 'Mix spéciaux FLL', description: 'Mélanges certifiés selon les directives allemandes FLL, standard de référence européen. Garantissent stabilité structurelle, perméabilité et fertilité sur la durée.', usage: 'Référence qualité' },
  { icon: '💧', name: 'Éléments de rétention d\'eau', description: 'Billes de laine de roche ou billes poreuses ajoutées pour augmenter la réserve d\'eau utile dans les zones à faibles précipitations estivales.', usage: 'Semi-intensif · Intensif' },
]

const plants = [
  { icon: '🌵', name: 'Sedum sp. (orpins)', type: 'Extensive', typeClass: 'bg-brand-100 text-brand-700', description: 'Plantes grasses incontournables. 15+ espèces utilisées. Floraison colorée mai–septembre, résistance au gel jusqu\'à -15°C, quasi aucun entretien.' },
  { icon: '🌾', name: 'Graminées ornementales', type: 'Semi-intensive', typeClass: 'bg-amber-100 text-amber-700', description: 'Festuca glauca, Molinia caerulea, Stipa tenuissima. Mouvement naturel, textures variées, excellente résistance aux vents et à la sécheresse.' },
  { icon: '🌸', name: 'Vivaces mellifères', type: 'Semi-intensive', typeClass: 'bg-amber-100 text-amber-700', description: 'Echinacea, Achillea, Penstemon, Salvia. Attirent pollinisateurs et papillons. Floraison étalée d\'avril à octobre.' },
  { icon: '🍀', name: 'Mousses & bryophytes', type: 'Extensive', typeClass: 'bg-brand-100 text-brand-700', description: 'Idéales en zones ombragées. Tapis dense, excellente rétention d\'eau, aucun entretien. Substrat minimal de 3–5 cm.' },
  { icon: '🌳', name: 'Arbustes rustiques', type: 'Intensive', typeClass: 'bg-green-100 text-green-700', description: 'Lavande, Spirée, Potentille, Cornouiller. Végétation structurante pour les jardins en hauteur (substrat ≥ 25 cm).' },
  { icon: '🥬', name: 'Plantes aromatiques & potager', type: 'Intensive', typeClass: 'bg-green-100 text-green-700', description: 'Thym, romarin, menthe, fraisiers, herbes culinaires. Pour jardins sur toiture productifs, tendance en forte croissance à Bruxelles.' },
]

const effects = [
  {
    icon: '🌡️',
    title: 'Isolation thermique & Confort',
    summary: 'Réduction des besoins en chauffage et climatisation grâce à la masse thermique du substrat humide et à l\'ombrage végétal.',
    headerBg: 'bg-orange-50',
    titleColor: 'text-orange-900',
    textColor: 'text-orange-800',
    metrics: [
      { value: '–3 à 6°C', label: 'Température intérieure en été' },
      { value: '–10 à 15%', label: 'Consommation en climatisation' },
      { value: '–3 à 8%', label: 'Consommation en chauffage' },
      { value: '× 2–3', label: 'Durée de vie de l\'étanchéité' },
    ],
    details: [
      'Le substrat humide agit comme masse thermique : il absorbe la chaleur le jour et la restitue la nuit',
      'L\'évapotranspiration des plantes refroidit naturellement la surface du toit (effet climatiseur naturel)',
      'En hiver, la végétation et le substrat réduisent les pertes thermiques par la toiture de 10 à 20%',
      'L\'effet tampon thermique réduit les chocs de dilatation/contraction de la membrane d\'étanchéité',
    ],
  },
  {
    icon: '💧',
    title: 'Gestion des eaux pluviales',
    summary: 'Rétention et restitution progressive des eaux de pluie, réduisant massivement les pics de ruissellement urbain.',
    headerBg: 'bg-blue-50',
    titleColor: 'text-blue-900',
    textColor: 'text-blue-800',
    metrics: [
      { value: '50–90%', label: 'Rétention des eaux pluviales' },
      { value: '1–2h', label: 'Retard de restitution' },
      { value: '–40%', label: 'Débit de pointe vers égouts' },
      { value: '40 L/m²', label: 'Capacité de stockage (extensif)' },
    ],
    details: [
      'Une toiture extensive de 100 m² retient entre 30 et 80 litres d\'eau par événement pluvieux',
      'L\'eau est restituée progressivement par évapotranspiration, évitant la saturation des réseaux',
      'À l\'échelle de Bruxelles, la généralisation des toitures vertes réduirait significativement les risques d\'inondation',
      'La qualité de l\'eau restituée est améliorée (filtration naturelle par le substrat)',
      'Contribue aux objectifs du Plan de gestion de l\'eau de la Région bruxelloise',
    ],
  },
  {
    icon: '🦋',
    title: 'Biodiversité urbaine',
    summary: 'Création de refuges pour la faune et la flore en milieu urbain, contribuant aux corridors écologiques.',
    headerBg: 'bg-brand-50',
    titleColor: 'text-brand-900',
    textColor: 'text-brand-800',
    metrics: [
      { value: '40+', label: 'Espèces d\'insectes accueillies' },
      { value: '15+', label: 'Espèces d\'oiseaux observées' },
      { value: '× 3', label: 'Biomasse végétale en ville' },
      { value: '100%', label: 'Contribution aux corridors verts' },
    ],
    details: [
      'Les sedums et vivaces mellifères attirent abeilles, papillons et bourdons (pollinisateurs en déclin)',
      'Certaines espèces d\'oiseaux (hirondelles, bergeronnettes) s\'installent sur les toitures végétalisées',
      'Les toitures extensives recréent des milieux de type pelouse sèche, habitats rares en ville',
      'S\'inscrit dans le plan "Natura 2000" et le Schéma directeur de la nature de Bruxelles',
      'Contribue aux objectifs européens de restauration de la nature (EU Nature Restoration Law)',
    ],
  },
  {
    icon: '🌫️',
    title: 'Qualité de l\'air & CO₂',
    summary: 'Captation de CO₂, de poussières fines et de polluants gazeux — une contribution mesurable à la qualité de l\'air urbain.',
    headerBg: 'bg-slate-50',
    titleColor: 'text-slate-900',
    textColor: 'text-slate-700',
    metrics: [
      { value: '1–3 kg', label: 'CO₂ absorbé / m² / an' },
      { value: '–10%', label: 'Particules fines (PM10) en surface' },
      { value: '–4°C', label: 'Température air ambiant (effet urbain)' },
      { value: '–NO₂', label: 'Absorption de dioxyde d\'azote' },
    ],
    details: [
      'La photosynthèse des végétaux absorbe le CO₂ et rejette de l\'oxygène',
      'Les feuilles capturent les particules fines PM2.5 et PM10 en suspension',
      'L\'évapotranspiration rafraîchit l\'air ambiant, limitant l\'effet de chaleur urbaine',
      'À grande échelle, les toitures vertes contribuent à la réduction des îlots de chaleur urbains (ICU)',
      'Bruxelles vise 30% de surface végétalisée en ville : les toitures vertes y contribuent directement',
    ],
  },
  {
    icon: '🔇',
    title: 'Isolation acoustique',
    summary: 'Réduction des nuisances sonores extérieures par absorption des ondes acoustiques dans le substrat et la végétation.',
    headerBg: 'bg-purple-50',
    titleColor: 'text-purple-900',
    textColor: 'text-purple-800',
    metrics: [
      { value: '–8 dB', label: 'Réduction bruit (extensif)' },
      { value: '–20 dB', label: 'Réduction bruit (intensif)' },
      { value: '+', label: 'Confort dans les bureaux/logements' },
      { value: '100%', label: 'Sans équipement technique' },
    ],
    details: [
      'Le substrat absorbe les basses fréquences (trafic, avions) que les isolants conventionnels ne filtrent pas bien',
      'La végétation diffuse les hautes fréquences (pluie battante, vent)',
      'Particulièrement efficace pour les bâtiments sous couloirs aériens (Bruxelles, Zaventem)',
      'Un toit intensif de 30 cm offre une performance acoustique comparable à une double cloison',
    ],
  },
  {
    icon: '💰',
    title: 'Valeur immobilière',
    summary: 'Une toiture verte augmente l\'attractivité et la valeur marchande d\'un bien, tout en réduisant les charges.',
    headerBg: 'bg-emerald-50',
    titleColor: 'text-emerald-900',
    textColor: 'text-emerald-800',
    metrics: [
      { value: '+5–15%', label: 'Valeur du bien estimée' },
      { value: '–30%', label: 'Consommation eau (avec récupération)' },
      { value: '40 ans', label: 'Durée de vie membrane protégée' },
      { value: '+1–2', label: 'Classes PEB améliorées' },
    ],
    details: [
      'Études notariales belges confirment une plus-value de 5 à 15% pour les biens avec toiture verte',
      'Un meilleur PEB se traduit directement par une meilleure valeur locative et de vente',
      'Les économies d\'énergie et de remplacement de membrane s\'accumulent sur 20–40 ans',
      'L\'aspect esthétique et écologique est un argument croissant dans les transactions immobilières',
      'Les certifications environnementales (BREEAM, HQE) valorisent les toitures végétalisées',
    ],
  },
]

const pebObligations = [
  'Obligatoire pour toute vente ou location en Belgique (depuis 2010–2014 selon la Région)',
  'Nouvelles constructions à Bruxelles : norme NZEB (quasi zéro énergie)',
  'Rénovation lourde (>75% de l\'enveloppe) : doit atteindre une classe minimum',
  'Objectif bruxellois : tous les bâtiments en classe A ou B d\'ici 2050',
]

const pebClasses = [
  { label: 'A++', bg: 'bg-green-600', barColor: 'bg-green-500', barWidth: 10, range: '< 0 kWh/m²/an', active: false },
  { label: 'A+', bg: 'bg-green-500', barColor: 'bg-green-400', barWidth: 15, range: '0–45 kWh/m²/an', active: false },
  { label: 'A', bg: 'bg-lime-500', barColor: 'bg-lime-400', barWidth: 22, range: '45–95 kWh/m²/an', active: false },
  { label: 'B', bg: 'bg-yellow-500', barColor: 'bg-yellow-400', barWidth: 35, range: '95–150 kWh/m²/an', active: true },
  { label: 'C', bg: 'bg-orange-400', barColor: 'bg-orange-300', barWidth: 50, range: '150–210 kWh/m²/an', active: true },
  { label: 'D', bg: 'bg-orange-600', barColor: 'bg-orange-500', barWidth: 65, range: '210–275 kWh/m²/an', active: false },
  { label: 'E', bg: 'bg-red-500', barColor: 'bg-red-400', barWidth: 80, range: '275–345 kWh/m²/an', active: false },
  { label: 'F', bg: 'bg-red-700', barColor: 'bg-red-600', barWidth: 90, range: '> 345 kWh/m²/an', active: false },
]

const uValues = [
  {
    scenario: 'Toit plat non isolé',
    value: '1.5–2.5',
    color: 'text-red-500',
    barColor: 'bg-red-400',
    pct: 100,
    description: 'Toiture béton sans isolation thermique. Pertes énergétiques très importantes. Non conforme aux normes PEB actuelles.',
  },
  {
    scenario: 'Toit isolé (sans végétation)',
    value: '0.20–0.30',
    color: 'text-amber-500',
    barColor: 'bg-amber-400',
    pct: 40,
    description: 'Isolation thermique standard PIR (R ≥ 4,5). Conforme aux normes PEB Bruxelles. Base de référence pour le calcul.',
  },
  {
    scenario: 'Toiture verte (substrat humide)',
    value: '0.12–0.22',
    color: 'text-brand-600',
    barColor: 'bg-brand-500',
    pct: 18,
    description: 'Isolation standard + substrat humide (10–15 cm). Le substrat saturé d\'eau offre une isolation supplémentaire mesurable.',
  },
]

const energyRows = [
  { indicator: 'Consommation chauffage', without: '~12 000 kWh/an', with: '~11 000 kWh/an', gain: '–8%' },
  { indicator: 'Consommation climatisation', without: '~1 800 kWh/an', with: '~1 500 kWh/an', gain: '–17%' },
  { indicator: 'Facture énergétique totale', without: '~2 400 €/an', with: '~2 100 €/an', gain: '–300 €/an' },
  { indicator: 'Émissions CO₂', without: '~3,2 t CO₂/an', with: '~2,8 t CO₂/an', gain: '–400 kg/an' },
  { indicator: 'Score PEB indicatif', without: 'Classe C–D', with: 'Classe B–C', gain: '+1 à 2 classes' },
]

const durabilityItems = [
  { icon: '☀️', stat: '×3', title: 'Protection UV', description: 'Le substrat et les végétaux absorbent 95% des rayons UV qui dégradent normalement les membranes bitumineuses en quelques années.' },
  { icon: '🌡️', stat: '–30°C', title: 'Amortissement thermique', description: 'Les chocs thermiques (de -10°C la nuit à +70°C en été sur toiture nue) sont réduits à ±5°C sous le substrat végétalisé.' },
  { icon: '📅', stat: '40+', title: 'Années de durée de vie', description: 'Une membrane sous toiture verte atteint 40 à 60 ans contre 15 à 25 ans exposée directement. Économie de remplacement considérable.' },
]

const norms = [
  { icon: '📋', title: 'Norme FLL (DE)', description: 'Standard européen de référence pour substrats et systèmes de toitures vertes.' },
  { icon: '🏗️', title: 'Eurocodes BE', description: 'Vérification de la charge admissible selon Eurocode 1 avant tout projet.' },
  { icon: '🌿', title: 'ANPI / BCCA', description: 'Étanchéité certifiée conforme aux normes belges avec garantie décennale.' },
  { icon: '⚡', title: 'PEB / EPB', description: 'Calcul et attestation de la contribution au certificat PEB selon la réglementation régionale.' },
]
</script>
