<template>
  <div>
    <!-- HERO -->
    <section class="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-full h-full"
          style="background-image: radial-gradient(circle at 20% 50%, #86efac 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4ade80 0%, transparent 40%);" />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div class="max-w-3xl">
          <span class="badge mb-6 bg-brand-600/30 text-brand-200 border border-brand-500/30">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
            Brussel · Heel België
          </span>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Begroei uw dak,<br>
            <span class="text-brand-300">verhoog uw vastgoedwaarde</span>
          </h1>
          <p class="text-lg md:text-xl text-brand-100 leading-relaxed mb-10 max-w-2xl">
            ToitureVerte is uw specialist in dakbegroeining in Brussel en heel België. Extensieve, semi-intensieve dakbegroeningen en daktuinen — wij ontwerpen en installeren duurzame en esthetische groendaken.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/nl/contact" class="btn-primary text-base px-8 py-4 shadow-lg shadow-brand-900/50">
              Gratis offerte aanvragen
            </NuxtLink>
            <NuxtLink to="/nl/services" class="btn-secondary text-base px-8 py-4">
              Onze diensten ontdekken
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

    <!-- STATS -->
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

    <!-- BENEFITS -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Waarom een groendak?</span>
          <h2 class="section-title">De voordelen van een begroend dak</h2>
          <p class="section-subtitle">Een groendak is meer dan esthetiek: het is een duurzame investering met meervoudige voordelen voor uw gebouw en het milieu.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article v-for="benefit in benefits" :key="benefit.title" class="card text-center group">
            <div class="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-600 transition-colors duration-300">
              <span class="text-2xl">{{ benefit.icon }}</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ benefit.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Wat wij aanbieden</span>
          <h2 class="section-title">Al onze expertises</h2>
          <p class="section-subtitle">Groendak, zonnepanelen, regenwaterrecuperatie, groene gevel — ToitureVerte begeleidt elk duurzaamheidsproject van A tot Z.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <article v-for="service in services" :key="service.title"
            class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
            <div :class="`h-3 ${service.color}`" />
            <div class="p-6">
              <div class="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-xl">{{ service.icon }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ service.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-5">{{ service.description }}</p>
              <ul class="space-y-1.5 mb-6">
                <li v-for="feat in service.features" :key="feat" class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-4 h-4 text-brand-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  {{ feat }}
                </li>
              </ul>
              <NuxtLink :to="service.href || '/nl/services'" class="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Meer weten
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="badge mb-3">Onze werkwijze</span>
          <h2 class="section-title">Een sleutelklaar project, stap voor stap</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div class="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" aria-hidden="true" />
          <div v-for="(step, i) in processSteps" :key="step.title" class="text-center relative">
            <div class="w-16 h-16 bg-brand-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg shadow-brand-200">{{ i + 1 }}</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ step.title }}</h3>
            <p class="text-sm text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY -->
    <section class="py-20 bg-brand-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-600/30 text-brand-200 text-sm font-medium rounded-full border border-brand-500/30 mb-4">Onze belofte</span>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Waarom kiezen voor ToitureVerte?</h2>
            <p class="text-brand-100 leading-relaxed mb-8">Gevestigd in Brussel, actief in heel België met meer dan 10 jaar erkende expertise in dakbegroeining. Elk project is uniek, elke oplossing is maatwerk.</p>
            <NuxtLink to="/nl/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50">Bespreek uw project</NuxtLink>
          </div>
          <div class="space-y-4">
            <div v-for="reason in reasons" :key="reason.title" class="flex gap-4 p-5 bg-brand-700/50 rounded-xl border border-brand-600/30">
              <div class="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center shrink-0">
                <span class="text-lg">{{ reason.icon }}</span>
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

    <!-- FAQ -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="badge mb-3">Veelgestelde vragen</span>
          <h2 class="section-title">Alles over groendaken</h2>
        </div>
        <div class="space-y-3">
          <details v-for="faq in faqs" :key="faq.q" class="bg-white rounded-xl border border-gray-200 overflow-hidden group">
            <summary class="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-gray-900 hover:text-brand-700 transition-colors">
              <span>{{ faq.q }}</span>
              <svg class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <div class="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{{ faq.a }}</div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-gradient-to-r from-brand-600 to-brand-700 rounded-3xl p-10 md:p-14 shadow-xl shadow-brand-200">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Klaar om uw dak te transformeren?</h2>
          <p class="text-brand-100 text-lg mb-8 max-w-xl mx-auto">Contacteer ons voor een gratis en vrijblijvende haalbaarheidsstudie. Wij zijn actief in Brussel en heel België.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/nl/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-colors shadow-lg">
              Gratis offerte
            </NuxtLink>
            <a href="https://wa.me/32XXXXXXXXXX?text=Hallo%2C%20ik%20wil%20graag%20een%20gratis%20offerte%20voor%20een%20groendak."
               target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-brand-700 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.554 4.1 1.522 5.827L.057 23.927a.5.5 0 00.609.609l6.1-1.465A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.954a9.938 9.938 0 01-5.07-1.384l-.364-.216-3.77.906.921-3.673-.237-.378A9.96 9.96 0 012.046 12C2.046 6.487 6.487 2.046 12 2.046S21.954 6.487 21.954 12 17.513 21.954 12 21.954z"/></svg>
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
  title: 'Groendak Brussel – Plaatsing Extensief & Intensief | ToitureVerte',
  description: 'Specialist groendak in Brussel. Extensief, semi-intensief, daktuin. RENOLUTION E5: tot 50 €/m² premie. 350+ projecten in België. Gratis offerte.',
  ogTitle: 'Groendak Brussel – ToitureVerte',
  ogDescription: 'Specialist groendak Brussel en België. Gratis offerte binnen 24u. RENOLUTION E5: tot 50 €/m² subsidie.',
  ogType: 'website',
  ogUrl: 'https://www.toitureverte.be/nl',
  ogImage: 'https://www.toitureverte.be/og-image.svg',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: { lang: 'nl' },
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/nl' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(localBusinessSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(webSiteSchema) },
  ],
})
useSeoAlternates('')

const stats = [
  { value: '10+',    label: 'Jaar ervaring' },
  { value: '350+',   label: 'Gerealiseerde projecten' },
  { value: '85 000', label: 'm² begroend' },
  { value: '100%',   label: 'Tevreden klanten' },
]
const benefits = [
  { icon: '🌡️', title: 'Thermische isolatie',  description: 'Verminder uw energieverbruik. Een groendak verbetert de isolatie van uw gebouw in zomer én winter.' },
  { icon: '💧', title: 'Waterbeheer',           description: 'Houd tot 90% van het regenwater vast, verminder overstromingsrisico\'s en verlich het rioolstelsel.' },
  { icon: '🦋', title: 'Stedelijke biodiversiteit', description: 'Creëer een toevluchtsoord voor insecten en vogels in de stad. Draag actief bij aan de natuur in de stad.' },
  { icon: '💰', title: 'Vastgoedwaarde',        description: 'Een begroeid dak verhoogt de waarde van uw eigendom met 5 tot 15% en verbetert de aantrekkelijkheid op de markt.' },
]
const services = [
  { title: 'Extensief Groendak', icon: '🌿', color: 'bg-brand-400', description: 'Lichte en economische oplossing, ideaal voor grote niet-toegankelijke oppervlakten. Weinig onderhoud, beperkt gewicht.', features: ['Substraat 5–15 cm', 'Sedums & mossen', 'Gewicht 50–150 kg/m²', 'Minimaal onderhoud'], href: '/nl/services#extensive' },
  { title: 'Semi-intensief Groendak', icon: '🌸', color: 'bg-earth-400', description: 'De perfecte balans tussen licht gewicht en gevarieerde begroeiing. Toegankelijk, esthetisch en mooi door het jaar.', features: ['Substraat 15–25 cm', 'Vaste planten & grassen', 'Gewicht 150–300 kg/m²', 'Matig onderhoud'], href: '/nl/services#semi-intensive' },
  { title: 'Intensief / Daktuin', icon: '🏡', color: 'bg-green-500', description: 'Echte tuin op hoogte, toegankelijk en bruikbaar. Struiken, bomen en zithoeken zijn mogelijk.', features: ['Substraat > 30 cm', 'Struiken & bomen', 'Gewicht > 300 kg/m²', 'Regelmatig onderhoud'], href: '/nl/services#intensive' },
  { title: 'Onderhoud Groendak', icon: '🔧', color: 'bg-brand-600', description: 'Jaarlijkse of éénmalige onderhoudscontracten. Inspectie, wieden, bemesting en schriftelijk verslag.', features: ['1–2 bezoeken/jaar', 'Schriftelijk verslag', 'Spoed binnen 48u', 'Contract op maat'], href: '/nl/services#entretien' },
  { title: 'Zonnepanelen', icon: '☀️', color: 'bg-amber-400', description: 'Fotovoltaïsche installatie combineerbaar met groendak. Rendement +8% dankzij vegetatieve koeling.', features: ['3 tot 30 kWp', 'Rendement +8%', 'Subsidies beschikbaar', 'Garantie 25 jaar'], href: '/nl/services#solaire' },
  { title: 'Regenwaterrecuperatie', icon: '💧', color: 'bg-blue-500', description: 'Citerne 1.000–10.000 L. De begroeiing filtert het regenwater. Bespaar tot 50% drinkwater.', features: ['Tot 50% besparing', 'WC, tuin, wassen', 'Begraven of bovengronds', 'Subsidie C3 Brussel'], href: '/nl/services#eau-de-pluie' },
  { title: 'Groene Gevel', icon: '🌿', color: 'bg-emerald-500', description: 'Verticale tuinen binnen of buiten. Hydroponie of substraat, vanaf 2 m². Isolatie en visuele impact.', features: ['Binnen of buiten', 'Hydroponie of substraat', 'Vanaf 2 m²', 'Onderhoudscontract'], href: '/nl/services#facade' },
]
const processSteps = [
  { title: 'Haalbaarheidsstudie',  description: 'Analyse van uw dak: structuur, helling, toegankelijkheid, budget.' },
  { title: 'Maatwerk ontwerp',     description: 'Gedetailleerde plannen, keuze van planten en aangepaste materialen.' },
  { title: 'Professionele installatie', description: 'Plaatsing door onze gecertificeerde ploegen in Brussel en heel België.' },
  { title: 'Opvolging & onderhoud', description: 'Onderhoudscontracten en langetermijnopvolging van de begroeiing.' },
]
const reasons = [
  { icon: '🏅', title: 'Gecertificeerde expertise',  description: 'Ploegen opgeleid volgens Belgische en Europese normen. Lid van de federatie voor groendaken.' },
  { icon: '📐', title: 'Oplossingen op maat',        description: 'Elk dak is uniek. Wij passen onze oplossing aan uw structuur, budget en wensen aan.' },
  { icon: '🔧', title: 'Complete service',           description: 'Van ontwerp tot onderhoud verzorgt ToitureVerte de volledige begeleiding van uw project.' },
  { icon: '🌍', title: 'Ecologische betrokkenheid',  description: 'Lokale en duurzame materialen, planten aangepast aan het Belgische klimaat, positieve CO₂-balans.' },
]
const faqs = [
  { q: 'Wat is een extensief groendak?', a: 'Een extensief groendak is het lichtste type dakbegroeining (50 tot 150 kg/m²). Het bestaat uit een substraatlaag van 5 tot 15 cm en resistente planten zoals sedums. Het vereist weinig onderhoud en is geschikt voor de meeste platte daken in België.' },
  { q: 'Wat kost een groendak in België?', a: 'De prijs varieert naargelang het type: tussen 40 en 80 €/m² voor extensief, 80 tot 150 €/m² voor semi-intensief, en 150 tot 300 €/m² voor intensief. Deze prijzen zijn inclusief levering en plaatsing. Wij bieden een gratis gepersonaliseerde offerte.' },
  { q: 'Kan mijn dak een groendak dragen?', a: 'De overgrote meerderheid van platte daken kan een groendak huisvesten. Onze experts voeren een gratis haalbaarheidsstudie uit om de draagkracht van uw structuur, de helling en de staat van de bestaande waterdichting te beoordelen.' },
  { q: 'Bestaan er subsidies voor groendaken in België?', a: 'Ja! Het Brussels Hoofdstedelijk Gewest biedt premies tot 50.000 € (30 €/m² voor particulieren). Wallonië en Vlaanderen bieden ook cumuleerbare gewestelijke en gemeentelijke premies. De btw kan worden verlaagd tot 6% en er bestaan groene leningen.' },
  { q: 'Hoe lang duurt de installatie?', a: 'De installatie duurt doorgaans 1 tot 5 dagen afhankelijk van de oppervlakte. Voor grote commerciële of industriële projecten kan de termijn langer zijn. Wij plannen de werken om de hinder te beperken.' },
  { q: 'Werkt u door heel België?', a: 'Ja, ToitureVerte is actief in heel België: Brussel, Wallonië (Luik, Namen, Charleroi, Bergen...) en Vlaanderen (Antwerpen, Gent, Brugge, Leuven...). Wij verplaatsen ons zonder extra kosten binnen een straal van 100 km van Brussel.' },
]
</script>
