<template>
  <div class="w-full">
    <div class="text-center mb-6">
      <span class="badge mb-2">{{ l.badge }}</span>
      <h3 class="text-2xl font-bold text-gray-900">{{ l.title }}</h3>
      <p class="text-gray-500 text-sm mt-1 max-w-xl mx-auto">{{ l.subtitle }}</p>
    </div>

    <div class="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-sky-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" class="w-full h-auto"
        :aria-label="l.ariaLabel" role="img">
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#38bdf8"/>
            <stop offset="70%" stop-color="#bae6fd"/>
            <stop offset="100%" stop-color="#e0f2fe"/>
          </linearGradient>
          <linearGradient id="substrateGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#b45309"/>
            <stop offset="100%" stop-color="#78350f"/>
          </linearGradient>
          <linearGradient id="structureGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#9ca3af"/>
            <stop offset="100%" stop-color="#4b5563"/>
          </linearGradient>
          <linearGradient id="insulGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fde68a"/>
            <stop offset="100%" stop-color="#fbbf24"/>
          </linearGradient>
          <linearGradient id="interiorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fef9c3"/>
            <stop offset="100%" stop-color="#fef3c7"/>
          </linearGradient>
          <linearGradient id="rightPanelGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f0fdf4"/>
            <stop offset="100%" stop-color="#dcfce7"/>
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#00000015"/>
          </filter>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <!-- ══════════════════════════════════════════ -->
        <!-- SKY                                        -->
        <!-- ══════════════════════════════════════════ -->
        <rect x="0" y="0" width="590" height="215" fill="url(#skyGrad)"/>

        <!-- ── SUN ── -->
        <g transform="translate(522, 62)" class="sun-container">
          <!-- Glow halo -->
          <circle r="55" fill="#fef9c3" opacity="0.35" class="sun-glow"/>
          <!-- Rays (rotating group) -->
          <g class="sun-rays" style="transform-origin:0px 0px; transform-box:fill-box;">
            <g v-for="n in 8" :key="n"
              :transform="`rotate(${(n-1)*45})`">
              <rect x="-2" y="36" width="4" height="14" rx="2" fill="#fbbf24" opacity="0.9"/>
            </g>
          </g>
          <!-- Sun body -->
          <circle r="28" fill="#fbbf24" class="sun-pulse"/>
          <circle r="22" fill="#fde68a" opacity="0.7"/>
        </g>

        <!-- ── RAIN DROPS (periodic) ── -->
        <g v-for="(drop, i) in rainDrops" :key="`rain-${i}`"
          :class="`rain-drop rain-drop-${i}`"
          :transform="`translate(${drop.x}, 10)`"
          style="transform-box:fill-box;">
          <!-- Teardrop shape -->
          <path d="M0,-10 C-4,-4 -5,2 0,8 C5,2 4,-4 0,-10 Z" fill="#60a5fa" opacity="0.85"/>
        </g>

        <!-- ══════════════════════════════════════════ -->
        <!-- PLANTS                                     -->
        <!-- ══════════════════════════════════════════ -->
        <g v-for="(p, i) in plants" :key="`plant-${i}`"
          :transform="`translate(${p.x}, 215)`"
          :class="`plant plant-sway-${i % 4}`"
          style="transform-origin:50% 100%; transform-box:fill-box;">
          <!-- Main leaf -->
          <ellipse cx="0" cy="-20" :rx="p.rx" :ry="p.ry" :fill="p.color"
            :transform="`rotate(${p.tilt})`"/>
          <!-- Second leaf -->
          <ellipse cx="0" cy="-14" :rx="p.rx * 0.8" :ry="p.ry * 0.7" :fill="p.colorDark"
            :transform="`rotate(${-p.tilt + 10})`"/>
          <!-- Stem -->
          <line x1="0" y1="0" x2="0" :y2="-p.ry * 0.3" stroke="#15803d" :stroke-width="p.rx * 0.25"/>
        </g>

        <!-- ══════════════════════════════════════════ -->
        <!-- EVAPORATION PARTICLES                      -->
        <!-- ══════════════════════════════════════════ -->
        <!-- Label arrow -->
        <text x="14" y="88" font-family="sans-serif" font-size="11" font-weight="600" fill="#0284c7" opacity="0.9">
          {{ l.evapLabel }} ↑
        </text>
        <line x1="80" y1="85" x2="80" y2="178" stroke="#0284c7" stroke-width="1" stroke-dasharray="3,3" opacity="0.4"/>

        <g v-for="(p, i) in evapParticles" :key="`evap-${i}`">
          <!-- Large primary particle -->
          <circle :cx="p.x" cy="210" r="5" fill="#bae6fd" opacity="0.0"
            :class="`evap evap-${i}`"
            style="transform-box:fill-box;"/>
          <!-- Small secondary particle (offset) -->
          <circle :cx="p.x + p.offset" cy="205" r="3" fill="#e0f2fe" opacity="0.0"
            :class="`evap evap-secondary-${i}`"
            style="transform-box:fill-box;"/>
        </g>

        <!-- ══════════════════════════════════════════ -->
        <!-- CROSS-SECTION LAYERS                       -->
        <!-- ══════════════════════════════════════════ -->

        <!-- Substrate -->
        <rect x="0" y="215" width="590" height="53" fill="url(#substrateGrad)"/>
        <!-- Moisture bubbles in substrate -->
        <g v-for="mb in moistureBubbles" :key="`mb-${mb.x}`"
          :class="`moisture-bubble moisture-bubble-${mb.d}`">
          <circle :cx="mb.x" :cy="228 + mb.yo" r="3" fill="#93c5fd" opacity="0.45"/>
        </g>
        <text x="12" y="248" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#fef3c7">
          {{ l.layerSubstrate }}
        </text>
        <text x="12" y="261" font-family="sans-serif" font-size="9" fill="#fde68a" opacity="0.8">
          {{ l.layerSubstrateDesc }}
        </text>

        <!-- Filter layer (geotextile) -->
        <rect x="0" y="268" width="590" height="8" fill="#fef08a" opacity="0.75"/>
        <line x1="0" y1="272" x2="590" y2="272" stroke="#ca8a04" stroke-width="0.5" stroke-dasharray="6,4" opacity="0.5"/>

        <!-- Drainage layer -->
        <rect x="0" y="276" width="590" height="32" fill="#dbeafe"/>
        <!-- Drainage aggregate dots -->
        <g v-for="dd in drainageDots" :key="`dd-${dd.x}`">
          <circle :cx="dd.x" :cy="dd.y" r="4" fill="#93c5fd" opacity="0.55"/>
          <circle :cx="dd.x" :cy="dd.y" r="2" fill="#bfdbfe" opacity="0.8"/>
        </g>
        <!-- Animated water flow in drainage -->
        <g v-for="(fw, i) in flowWater" :key="`fw-${i}`"
          :class="`flow-water flow-water-${i}`"
          style="transform-box:fill-box;">
          <circle :cx="fw.x" cy="292" r="3" fill="#3b82f6" opacity="0.6"/>
        </g>
        <text x="12" y="296" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#1e40af">
          {{ l.layerDrainage }}
        </text>

        <!-- Anti-root protection -->
        <rect x="0" y="308" width="590" height="7" fill="#1f2937"/>
        <line x1="0" y1="311" x2="590" y2="311" stroke="#374151" stroke-width="1.5"/>

        <!-- Insulation -->
        <rect x="0" y="315" width="590" height="45" fill="url(#insulGrad)"/>
        <!-- Insulation wave pattern -->
        <path d="M0,337 Q15,328 30,337 Q45,346 60,337 Q75,328 90,337 Q105,346 120,337
                 Q135,328 150,337 Q165,346 180,337 Q195,328 210,337 Q225,346 240,337
                 Q255,328 270,337 Q285,346 300,337 Q315,328 330,337 Q345,346 360,337
                 Q375,328 390,337 Q405,346 420,337 Q435,328 450,337 Q465,346 480,337
                 Q495,328 510,337 Q525,346 540,337 Q555,328 570,337 Q585,346 590,337"
          fill="none" stroke="#d97706" stroke-width="1.2" opacity="0.5"/>
        <text x="12" y="339" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#78350f">
          {{ l.layerInsulation }}
        </text>
        <text x="12" y="352" font-family="sans-serif" font-size="9" fill="#92400e" opacity="0.8">
          {{ l.layerInsulationDesc }}
        </text>

        <!-- Waterproofing membrane -->
        <rect x="0" y="360" width="590" height="10" fill="#111827"/>
        <line x1="0" y1="364" x2="590" y2="364" stroke="#374151" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>

        <!-- Structure -->
        <rect x="0" y="370" width="590" height="60" fill="url(#structureGrad)"/>
        <!-- Concrete aggregate pattern -->
        <g v-for="ca in concreteAggs" :key="`ca-${ca.x}`" opacity="0.25">
          <circle :cx="ca.x" :cy="ca.y" r="3" fill="#1f2937"/>
        </g>
        <!-- Rebar lines -->
        <line x1="0" y1="390" x2="590" y2="390" stroke="#374151" stroke-width="1.5" opacity="0.3"/>
        <line x1="0" y1="410" x2="590" y2="410" stroke="#374151" stroke-width="1.5" opacity="0.3"/>
        <text x="12" y="404" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#f3f4f6">
          {{ l.layerStructure }}
        </text>

        <!-- Interior zone (comfort zone) -->
        <rect x="0" y="430" width="590" height="50" fill="url(#interiorGrad)"/>
        <!-- Comfort temperature label -->
        <g transform="translate(50, 455)">
          <circle r="14" fill="#fbbf24" opacity="0.2"/>
          <text x="0" y="4" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#92400e">
            22°C
          </text>
        </g>
        <text x="72" y="459" font-family="sans-serif" font-size="10" fill="#92400e">
          {{ l.layerInterior }}
        </text>

        <!-- Right side layer labels (right-aligned ticks) -->
        <g opacity="0.55" font-family="sans-serif" font-size="9.5" fill="#374151">
          <line x1="570" y1="241" x2="586" y2="241" stroke="#92400e" stroke-width="1.5"/>
          <line x1="570" y1="292" x2="586" y2="292" stroke="#1d4ed8" stroke-width="1.5"/>
          <line x1="570" y1="337" x2="586" y2="337" stroke="#d97706" stroke-width="1.5"/>
          <line x1="570" y1="398" x2="586" y2="398" stroke="#6b7280" stroke-width="1.5"/>
        </g>

        <!-- ══════════════════════════════════════════ -->
        <!-- SEPARATOR                                   -->
        <!-- ══════════════════════════════════════════ -->
        <line x1="597" y1="10" x2="597" y2="470" stroke="#d1fae5" stroke-width="1.5"/>

        <!-- ══════════════════════════════════════════ -->
        <!-- RIGHT PANEL — BENEFIT METRICS              -->
        <!-- ══════════════════════════════════════════ -->
        <rect x="600" y="0" width="300" height="480" fill="url(#rightPanelGrad)"/>

        <!-- Panel title -->
        <text x="750" y="22" text-anchor="middle" font-family="sans-serif" font-size="11"
          font-weight="700" fill="#15803d" letter-spacing="1">
          {{ l.benefitsTitle.toUpperCase() }}
        </text>

        <!-- ── Metric 1: Temperature ── -->
        <g transform="translate(615, 33)" class="benefit-card benefit-card-1" filter="url(#shadow)">
          <rect width="270" height="88" rx="10" fill="white"/>
          <!-- Icon bg -->
          <circle cx="24" cy="44" r="20" fill="#fef9c3"/>
          <!-- Thermometer icon (simple SVG) -->
          <rect x="20" y="28" width="8" height="22" rx="4" fill="#f59e0b"/>
          <circle cx="24" cy="53" r="6" fill="#ef4444"/>
          <line x1="24" y1="28" x2="24" y2="53" stroke="white" stroke-width="2"/>
          <!-- Value -->
          <text x="55" y="38" font-family="sans-serif" font-size="22" font-weight="800" fill="#15803d">–4°C</text>
          <!-- Label -->
          <text x="55" y="54" font-family="sans-serif" font-size="11" font-weight="600" fill="#374151">
            {{ l.metric1Label }}
          </text>
          <text x="55" y="68" font-family="sans-serif" font-size="9.5" fill="#6b7280">
            {{ l.metric1Sub }}
          </text>
          <!-- Progress bar -->
          <rect x="10" y="78" width="250" height="5" rx="2.5" fill="#dcfce7"/>
          <rect x="10" y="78" width="195" height="5" rx="2.5" fill="#22c55e" class="bar-fill-1"/>
        </g>

        <!-- ── Metric 2: Water retention ── -->
        <g transform="translate(615, 130)" class="benefit-card benefit-card-2" filter="url(#shadow)">
          <rect width="270" height="88" rx="10" fill="white"/>
          <circle cx="24" cy="44" r="20" fill="#dbeafe"/>
          <!-- Water drop icon -->
          <path d="M24,28 C18,36 14,42 14,48 C14,54 18.7,58 24,58 C29.3,58 34,54 34,48 C34,42 30,36 24,28 Z"
            fill="#3b82f6"/>
          <!-- Value -->
          <text x="55" y="38" font-family="sans-serif" font-size="22" font-weight="800" fill="#1d4ed8">90%</text>
          <text x="55" y="54" font-family="sans-serif" font-size="11" font-weight="600" fill="#374151">
            {{ l.metric2Label }}
          </text>
          <text x="55" y="68" font-family="sans-serif" font-size="9.5" fill="#6b7280">
            {{ l.metric2Sub }}
          </text>
          <rect x="10" y="78" width="250" height="5" rx="2.5" fill="#dbeafe"/>
          <rect x="10" y="78" width="225" height="5" rx="2.5" fill="#3b82f6" class="bar-fill-2"/>
        </g>

        <!-- ── Metric 3: CO₂ ── -->
        <g transform="translate(615, 227)" class="benefit-card benefit-card-3" filter="url(#shadow)">
          <rect width="270" height="88" rx="10" fill="white"/>
          <circle cx="24" cy="44" r="20" fill="#dcfce7"/>
          <!-- Leaf icon -->
          <path d="M24,58 C24,58 14,50 14,40 C14,30 22,26 24,26 C26,26 34,30 34,40 C34,50 24,58 24,58 Z"
            fill="#22c55e"/>
          <line x1="24" y1="58" x2="24" y2="44" stroke="#15803d" stroke-width="1.5"/>
          <path d="M24,52 C20,48 18,44 24,44" fill="none" stroke="#15803d" stroke-width="1"/>
          <!-- Value -->
          <text x="55" y="38" font-family="sans-serif" font-size="22" font-weight="800" fill="#15803d">–3 kg</text>
          <text x="55" y="54" font-family="sans-serif" font-size="11" font-weight="600" fill="#374151">
            {{ l.metric3Label }}
          </text>
          <text x="55" y="68" font-family="sans-serif" font-size="9.5" fill="#6b7280">
            {{ l.metric3Sub }}
          </text>
          <rect x="10" y="78" width="250" height="5" rx="2.5" fill="#dcfce7"/>
          <rect x="10" y="78" width="130" height="5" rx="2.5" fill="#16a34a" class="bar-fill-3"/>
        </g>

        <!-- ── Metric 4: Membrane lifespan ── -->
        <g transform="translate(615, 324)" class="benefit-card benefit-card-4" filter="url(#shadow)">
          <rect width="270" height="88" rx="10" fill="white"/>
          <circle cx="24" cy="44" r="20" fill="#fce7f3"/>
          <!-- Shield/protection icon -->
          <path d="M24,28 L34,33 L34,44 C34,51 29,56 24,58 C19,56 14,51 14,44 L14,33 Z"
            fill="#db2777"/>
          <path d="M24,36 L27,40 L22,46" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <!-- Value -->
          <text x="55" y="38" font-family="sans-serif" font-size="22" font-weight="800" fill="#db2777">×3</text>
          <text x="55" y="54" font-family="sans-serif" font-size="11" font-weight="600" fill="#374151">
            {{ l.metric4Label }}
          </text>
          <text x="55" y="68" font-family="sans-serif" font-size="9.5" fill="#6b7280">
            {{ l.metric4Sub }}
          </text>
          <rect x="10" y="78" width="250" height="5" rx="2.5" fill="#fce7f3"/>
          <rect x="10" y="78" width="200" height="5" rx="2.5" fill="#ec4899" class="bar-fill-4"/>
        </g>

        <!-- ── Temperature comparison strip ── -->
        <g transform="translate(615, 422)">
          <rect width="270" height="50" rx="10" fill="white" opacity="0.85"/>
          <!-- Hot roof (left) -->
          <rect x="8" y="8" width="118" height="34" rx="6" fill="#fee2e2"/>
          <text x="67" y="22" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#dc2626" font-weight="600">
            {{ l.bareRoof }}
          </text>
          <text x="67" y="35" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#dc2626" font-weight="800">
            +70°C
          </text>
          <!-- Arrow -->
          <text x="135" y="30" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#6b7280">→</text>
          <!-- Green roof (right) -->
          <rect x="144" y="8" width="118" height="34" rx="6" fill="#dcfce7"/>
          <text x="203" y="22" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#15803d" font-weight="600">
            {{ l.greenRoof }}
          </text>
          <text x="203" y="35" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#15803d" font-weight="800">
            +20°C
          </text>
        </g>

        <!-- ══════════════════════════════════════════ -->
        <!-- PROCESS LABELS (left panel overlays)       -->
        <!-- ══════════════════════════════════════════ -->
        <!-- Evapotranspiration arrow label -->
        <g transform="translate(290, 100)">
          <rect x="-62" y="-14" width="124" height="24" rx="12" fill="#0ea5e9" opacity="0.15"/>
          <text x="0" y="5" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0369a1">
            ↑ {{ l.evapTranspLabel }} ↑
          </text>
        </g>

        <!-- Water retention label (in substrate) -->
        <g transform="translate(400, 244)">
          <rect x="-55" y="-12" width="110" height="22" rx="11" fill="#3b82f6" opacity="0.12"/>
          <text x="0" y="4" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="600" fill="#1d4ed8">
            💧 {{ l.retentionLabel }}
          </text>
        </g>

        <!-- Thermal break label (in insulation) -->
        <g transform="translate(400, 337)">
          <rect x="-52" y="-12" width="104" height="22" rx="11" fill="#d97706" opacity="0.15"/>
          <text x="0" y="4" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="600" fill="#92400e">
            🔥 {{ l.thermalBreakLabel }}
          </text>
        </g>
      </svg>
    </div>

    <!-- Legend -->
    <div class="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div v-for="item in legendItems" :key="item.label" class="flex items-center gap-2 text-xs text-gray-600">
        <div class="w-3 h-3 rounded-full shrink-0" :class="item.color"/>
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const lang = computed(() => {
  if (route.path.startsWith('/en')) return 'en' as const
  if (route.path.startsWith('/nl')) return 'nl' as const
  return 'fr' as const
})

const labels = {
  fr: {
    badge: 'Visualisation interactive',
    title: "Le cycle de l'évapotranspiration",
    subtitle: 'Comment une toiture verte régule naturellement la température et l\'eau',
    ariaLabel: "Animation du cycle d'évapotranspiration d'une toiture verte",
    evapLabel: 'Vapeur d\'eau',
    evapTranspLabel: 'Évapotranspiration',
    retentionLabel: 'Rétention d\'eau',
    thermalBreakLabel: 'Rupture thermique',
    benefitsTitle: 'Effets mesurés',
    metric1Label: 'Température de surface',
    metric1Sub: 'vs. toiture nue en été',
    metric2Label: 'Rétention eaux pluviales',
    metric2Sub: 'toiture extensive 10cm',
    metric3Label: 'CO₂ absorbé / m² / an',
    metric3Sub: 'par photosynthèse',
    metric4Label: 'Durée de vie membrane',
    metric4Sub: 'protégée des UV et chocs',
    bareRoof: 'Toiture nue',
    greenRoof: 'Toiture verte',
    layerSubstrate: 'Substrat de culture',
    layerSubstrateDesc: '5–30 cm selon le type',
    layerDrainage: 'Drainage + Géotextile',
    layerInsulation: 'Isolation thermique',
    layerInsulationDesc: 'λ ≤ 0,022 W/m·K',
    layerStructure: 'Structure porteuse',
    layerInterior: 'Confort intérieur',
    legendEvap: 'Évapotranspiration',
    legendRain: 'Eau de pluie retenue',
    legendThermal: 'Isolation thermique',
    legendBio: 'Couverture végétale',
  },
  nl: {
    badge: 'Interactieve visualisatie',
    title: 'De evapotranspiratiecyclus',
    subtitle: 'Hoe een groendak van nature temperatuur en water reguleert',
    ariaLabel: 'Animatie van de evapotranspiratiecyclus van een groendak',
    evapLabel: 'Waterdamp',
    evapTranspLabel: 'Evapotranspiratie',
    retentionLabel: 'Waterretentie',
    thermalBreakLabel: 'Thermische onderbreking',
    benefitsTitle: 'Gemeten effecten',
    metric1Label: 'Oppervlaktetemperatuur',
    metric1Sub: 'vs. kaal dak in de zomer',
    metric2Label: 'Retentie regenwater',
    metric2Sub: 'extensief dak 10cm',
    metric3Label: 'CO₂ opgenomen / m² / jaar',
    metric3Sub: 'door fotosynthese',
    metric4Label: 'Levensduur membraan',
    metric4Sub: 'beschermd tegen UV en schokken',
    bareRoof: 'Kaal dak',
    greenRoof: 'Groendak',
    layerSubstrate: 'Teeltsubstraat',
    layerSubstrateDesc: '5–30 cm naargelang het type',
    layerDrainage: 'Drainage + Geotextiel',
    layerInsulation: 'Thermische isolatie',
    layerInsulationDesc: 'λ ≤ 0,022 W/m·K',
    layerStructure: 'Dragende structuur',
    layerInterior: 'Binnencomfort',
    legendEvap: 'Evapotranspiratie',
    legendRain: 'Gehouden regenwater',
    legendThermal: 'Thermische isolatie',
    legendBio: 'Vegetatiedek',
  },
  en: {
    badge: 'Interactive visualisation',
    title: 'The evapotranspiration cycle',
    subtitle: 'How a green roof naturally regulates temperature and water',
    ariaLabel: 'Animation of the evapotranspiration cycle of a green roof',
    evapLabel: 'Water vapour',
    evapTranspLabel: 'Evapotranspiration',
    retentionLabel: 'Water retention',
    thermalBreakLabel: 'Thermal break',
    benefitsTitle: 'Measured effects',
    metric1Label: 'Surface temperature',
    metric1Sub: 'vs. bare roof in summer',
    metric2Label: 'Rainwater retention',
    metric2Sub: 'extensive roof 10cm',
    metric3Label: 'CO₂ absorbed / m² / year',
    metric3Sub: 'by photosynthesis',
    metric4Label: 'Membrane lifespan',
    metric4Sub: 'protected from UV and impacts',
    bareRoof: 'Bare roof',
    greenRoof: 'Green roof',
    layerSubstrate: 'Growing substrate',
    layerSubstrateDesc: '5–30 cm depending on type',
    layerDrainage: 'Drainage + Geotextile',
    layerInsulation: 'Thermal insulation',
    layerInsulationDesc: 'λ ≤ 0.022 W/m·K',
    layerStructure: 'Load-bearing structure',
    layerInterior: 'Interior comfort',
    legendEvap: 'Evapotranspiration',
    legendRain: 'Retained rainwater',
    legendThermal: 'Thermal insulation',
    legendBio: 'Vegetation cover',
  },
}

const l = computed(() => labels[lang.value])

/* ─── Plant data ─── */
const plants = [
  { x: 18,  rx: 10, ry: 30, tilt: -18, color: '#22c55e', colorDark: '#16a34a' },
  { x: 48,  rx: 13, ry: 38, tilt:  12, color: '#4ade80', colorDark: '#15803d' },
  { x: 78,  rx: 8,  ry: 26, tilt: -25, color: '#16a34a', colorDark: '#166534' },
  { x: 108, rx: 11, ry: 34, tilt:  8,  color: '#86efac', colorDark: '#22c55e' },
  { x: 138, rx: 14, ry: 40, tilt: -10, color: '#22c55e', colorDark: '#15803d' },
  { x: 168, rx: 9,  ry: 28, tilt:  20, color: '#4ade80', colorDark: '#16a34a' },
  { x: 198, rx: 12, ry: 36, tilt: -15, color: '#16a34a', colorDark: '#166534' },
  { x: 228, rx: 10, ry: 32, tilt:  5,  color: '#22c55e', colorDark: '#15803d' },
  { x: 258, rx: 13, ry: 38, tilt: -20, color: '#4ade80', colorDark: '#22c55e' },
  { x: 288, rx: 9,  ry: 27, tilt:  14, color: '#16a34a', colorDark: '#15803d' },
  { x: 318, rx: 12, ry: 35, tilt: -8,  color: '#22c55e', colorDark: '#16a34a' },
  { x: 348, rx: 10, ry: 30, tilt:  22, color: '#86efac', colorDark: '#22c55e' },
  { x: 378, rx: 14, ry: 42, tilt: -12, color: '#4ade80', colorDark: '#15803d' },
  { x: 408, rx: 11, ry: 33, tilt:  7,  color: '#16a34a', colorDark: '#166534' },
  { x: 438, rx: 9,  ry: 29, tilt: -22, color: '#22c55e', colorDark: '#16a34a' },
  { x: 468, rx: 13, ry: 37, tilt:  16, color: '#4ade80', colorDark: '#15803d' },
  { x: 498, rx: 10, ry: 31, tilt: -6,  color: '#16a34a', colorDark: '#166534' },
  { x: 528, rx: 12, ry: 36, tilt:  10, color: '#22c55e', colorDark: '#22c55e' },
  { x: 558, rx: 9,  ry: 27, tilt: -18, color: '#86efac', colorDark: '#16a34a' },
]

/* ─── Evaporation particles ─── */
const evapParticles = [
  { x: 35,  offset: 6  },
  { x: 80,  offset: -5 },
  { x: 130, offset: 8  },
  { x: 180, offset: -6 },
  { x: 235, offset: 5  },
  { x: 285, offset: -7 },
  { x: 340, offset: 6  },
  { x: 390, offset: -5 },
  { x: 445, offset: 7  },
  { x: 495, offset: -6 },
  { x: 545, offset: 5  },
]

/* ─── Rain drops ─── */
const rainDrops = [
  { x: 65  },
  { x: 140 },
  { x: 225 },
  { x: 315 },
  { x: 400 },
  { x: 480 },
  { x: 555 },
]

/* ─── Moisture bubbles in substrate ─── */
const moistureBubbles = Array.from({ length: 14 }, (_, i) => ({
  x: 35 + i * 40,
  yo: Math.floor(i * 7) % 16,
  d: i % 5,
}))

/* ─── Drainage dots ─── */
const drainageDots = Array.from({ length: 26 }, (_, i) => ({
  x: 18 + i * 22,
  y: i % 2 === 0 ? 284 : 296,
}))

/* ─── Animated water flow in drainage ─── */
const flowWater = Array.from({ length: 6 }, (_, i) => ({ x: 40 + i * 95 }))

/* ─── Concrete aggregates ─── */
const concreteAggs = Array.from({ length: 22 }, (_, i) => ({
  x: 22 + i * 26,
  y: i % 2 === 0 ? 380 : 415,
}))

/* ─── Legend items ─── */
const legendItems = computed(() => [
  { label: l.value.legendEvap,    color: 'bg-sky-300' },
  { label: l.value.legendRain,    color: 'bg-blue-400' },
  { label: l.value.legendThermal, color: 'bg-amber-400' },
  { label: l.value.legendBio,     color: 'bg-green-500' },
])
</script>

<style scoped>
/* ──── SUN ──── */
.sun-glow {
  animation: sunPulse 3s ease-in-out infinite;
  transform-origin: 0 0;
  transform-box: fill-box;
}
@keyframes sunPulse {
  0%, 100% { opacity: 0.3; r: 52; }
  50%       { opacity: 0.55; r: 62; }
}

.sun-rays {
  animation: sunRotate 14s linear infinite;
  transform-origin: 0px 0px;
}
@keyframes sunRotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.sun-pulse {
  animation: sunBodyPulse 3s ease-in-out infinite;
  transform-origin: 0 0;
  transform-box: fill-box;
}
@keyframes sunBodyPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.85; }
}

/* ──── RAIN ──── */
@keyframes rainFall {
  0%   { transform: translateY(-15px); opacity: 0; }
  8%   { opacity: 0.9; }
  75%  { opacity: 0.9; }
  100% { transform: translateY(205px); opacity: 0; }
}

/* Rain drops: fall over 2s, pause ~6s = total 8s cycle */
.rain-drop   { animation: rainFall 8s ease-in infinite; opacity: 0; }
.rain-drop-0 { animation-delay: 0s;    }
.rain-drop-1 { animation-delay: 1.1s;  }
.rain-drop-2 { animation-delay: 2.3s;  }
.rain-drop-3 { animation-delay: 3.4s;  }
.rain-drop-4 { animation-delay: 4.6s;  }
.rain-drop-5 { animation-delay: 5.8s;  }
.rain-drop-6 { animation-delay: 0.5s;  }

/* ──── EVAPORATION ──── */
@keyframes evapRise {
  0%   { transform: translateY(0px)    scale(1);   opacity: 0;   }
  10%  { opacity: 0.75; }
  75%  { opacity: 0.45; }
  100% { transform: translateY(-148px) scale(0.4); opacity: 0;   }
}
@keyframes evapRiseSecondary {
  0%   { transform: translateY(0px)    scale(0.7); opacity: 0;   }
  15%  { opacity: 0.5; }
  80%  { opacity: 0.25; }
  100% { transform: translateY(-120px) scale(0.2); opacity: 0;   }
}

.evap          { animation: evapRise 3.2s ease-out infinite; }
.evap-0        { animation-delay: 0s;    }
.evap-1        { animation-delay: 0.3s;  }
.evap-2        { animation-delay: 0.6s;  }
.evap-3        { animation-delay: 0.9s;  }
.evap-4        { animation-delay: 1.2s;  }
.evap-5        { animation-delay: 1.5s;  }
.evap-6        { animation-delay: 1.8s;  }
.evap-7        { animation-delay: 2.1s;  }
.evap-8        { animation-delay: 2.4s;  }
.evap-9        { animation-delay: 2.7s;  }
.evap-10       { animation-delay: 0.45s; }

.evap-secondary-0  { animation: evapRiseSecondary 4s ease-out 0.2s  infinite; }
.evap-secondary-1  { animation: evapRiseSecondary 4s ease-out 0.55s infinite; }
.evap-secondary-2  { animation: evapRiseSecondary 4s ease-out 0.85s infinite; }
.evap-secondary-3  { animation: evapRiseSecondary 4s ease-out 1.15s infinite; }
.evap-secondary-4  { animation: evapRiseSecondary 4s ease-out 1.45s infinite; }
.evap-secondary-5  { animation: evapRiseSecondary 4s ease-out 1.75s infinite; }
.evap-secondary-6  { animation: evapRiseSecondary 4s ease-out 2.05s infinite; }
.evap-secondary-7  { animation: evapRiseSecondary 4s ease-out 2.35s infinite; }
.evap-secondary-8  { animation: evapRiseSecondary 4s ease-out 2.65s infinite; }
.evap-secondary-9  { animation: evapRiseSecondary 4s ease-out 2.95s infinite; }
.evap-secondary-10 { animation: evapRiseSecondary 4s ease-out 0.35s infinite; }

/* ──── PLANTS ──── */
@keyframes sway1 { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }
@keyframes sway2 { 0%,100% { transform: rotate(3deg);  } 50% { transform: rotate(-5deg); } }
@keyframes sway3 { 0%,100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
@keyframes sway4 { 0%,100% { transform: rotate(5deg);  } 50% { transform: rotate(-3deg); } }

.plant-sway-0 { animation: sway1 3.2s ease-in-out infinite; }
.plant-sway-1 { animation: sway2 3.8s ease-in-out infinite; }
.plant-sway-2 { animation: sway3 4.1s ease-in-out infinite; }
.plant-sway-3 { animation: sway4 2.9s ease-in-out infinite; }

/* ──── MOISTURE ──── */
@keyframes moisturePulse { 0%,100% { opacity: 0.3; } 50% { opacity: 0.7; } }
.moisture-bubble-0 { animation: moisturePulse 2s ease-in-out 0s   infinite; }
.moisture-bubble-1 { animation: moisturePulse 2s ease-in-out 0.4s infinite; }
.moisture-bubble-2 { animation: moisturePulse 2s ease-in-out 0.8s infinite; }
.moisture-bubble-3 { animation: moisturePulse 2s ease-in-out 1.2s infinite; }
.moisture-bubble-4 { animation: moisturePulse 2s ease-in-out 1.6s infinite; }

/* ──── DRAINAGE FLOW ──── */
@keyframes flowRight { 0% { transform: translateX(-30px); opacity:0; } 20%{opacity:0.7;} 80%{opacity:0.6;} 100% { transform: translateX(60px); opacity:0; } }
.flow-water   { animation: flowRight 4s linear infinite; }
.flow-water-0 { animation-delay: 0s;    }
.flow-water-1 { animation-delay: 0.65s; }
.flow-water-2 { animation-delay: 1.3s;  }
.flow-water-3 { animation-delay: 1.95s; }
.flow-water-4 { animation-delay: 2.6s;  }
.flow-water-5 { animation-delay: 3.25s; }

/* ──── BENEFIT CARDS ──── */
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}
.benefit-card-1 { animation: slideInRight 0.6s ease-out 0.2s both; }
.benefit-card-2 { animation: slideInRight 0.6s ease-out 0.5s both; }
.benefit-card-3 { animation: slideInRight 0.6s ease-out 0.8s both; }
.benefit-card-4 { animation: slideInRight 0.6s ease-out 1.1s both; }

/* ──── PROGRESS BARS ──── */
@keyframes barGrow1 { from { width: 0; } to { width: 195px; } }
@keyframes barGrow2 { from { width: 0; } to { width: 225px; } }
@keyframes barGrow3 { from { width: 0; } to { width: 130px; } }
@keyframes barGrow4 { from { width: 0; } to { width: 200px; } }

.bar-fill-1 { animation: barGrow1 1s ease-out 0.6s both; }
.bar-fill-2 { animation: barGrow2 1s ease-out 0.9s both; }
.bar-fill-3 { animation: barGrow3 1s ease-out 1.2s both; }
.bar-fill-4 { animation: barGrow4 1s ease-out 1.5s both; }
</style>
