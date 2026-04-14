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
            Brussels · All of Belgium
          </span>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Roof Into<br>
            <span class="text-brand-300">a Living Green Space</span>
          </h1>
          <p class="text-lg md:text-xl text-brand-100 leading-relaxed mb-10 max-w-2xl">
            ToitureVerte is your specialist for green roof installation in Brussels and across Belgium. Extensive, semi-intensive green roofs and roof gardens — we design and install durable, beautiful living roofs.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/en/contact" class="btn-primary text-base px-8 py-4 shadow-lg shadow-brand-900/50">
              Request a Free Quote
            </NuxtLink>
            <NuxtLink to="/en/services" class="btn-secondary text-base px-8 py-4">
              Discover Our Services
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
          <span class="badge mb-3">Why a Green Roof?</span>
          <h2 class="section-title">The Benefits of a Vegetated Roof</h2>
          <p class="section-subtitle">A green roof is more than aesthetics — it's a sustainable investment with multiple benefits for your building and the environment.</p>
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
          <span class="badge mb-3">What We Offer</span>
          <h2 class="section-title">Our Green Roof Services</h2>
          <p class="section-subtitle">From simple extensive roofs to rooftop gardens, ToitureVerte manages every project from A to Z across Belgium.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <NuxtLink to="/en/services" class="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more
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
          <span class="badge mb-3">Our Method</span>
          <h2 class="section-title">A Turnkey Project, Step by Step</h2>
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
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-600/30 text-brand-200 text-sm font-medium rounded-full border border-brand-500/30 mb-4">Our Commitment</span>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Why Choose ToitureVerte?</h2>
            <p class="text-brand-100 leading-relaxed mb-8">Based in Brussels, we operate across Belgium with over 10 years of recognised expertise in green roof installation. Every project is unique, every solution is tailored.</p>
            <NuxtLink to="/en/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50">Let's Discuss Your Project</NuxtLink>
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
          <span class="badge mb-3">Frequently Asked Questions</span>
          <h2 class="section-title">Everything You Need to Know About Green Roofs</h2>
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
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Roof?</h2>
          <p class="text-brand-100 text-lg mb-8 max-w-xl mx-auto">Contact us for a free, no-obligation feasibility study. We operate in Brussels and across Belgium.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/en/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-colors shadow-lg">
              Free Quote
            </NuxtLink>
            <a href="tel:+3225551234" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-brand-700 transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Green Roof Brussels – Installation & Free Quote | ToitureVerte',
  description: 'Green roof specialist in Brussels. Extensive, semi-intensive, roof garden. RENOLUTION E5 grant: up to €50/m². 350+ projects in Belgium. Free quote.',
  ogTitle: 'Green Roof Brussels – ToitureVerte',
  ogDescription: 'Green roof specialist in Brussels and Belgium. Free quote within 24h. RENOLUTION E5: up to €50/m² grant.',
  ogType: 'website',
  ogUrl: 'https://www.toitureverte.be/en',
  ogImage: 'https://www.toitureverte.be/og-image.jpg',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/en' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(localBusinessSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(webSiteSchema) },
  ],
})
useSeoAlternates('')

const stats = [
  { value: '10+',    label: 'Years of Experience' },
  { value: '350+',   label: 'Projects Completed' },
  { value: '85,000', label: 'm² Greened' },
  { value: '100%',   label: 'Satisfied Clients' },
]
const benefits = [
  { icon: '🌡️', title: 'Thermal Insulation',   description: 'Reduce your energy consumption. A green roof improves building insulation both in summer and winter.' },
  { icon: '💧', title: 'Water Management',      description: 'Retain up to 90% of rainwater, reducing flood risk and relieving drainage systems.' },
  { icon: '🦋', title: 'Urban Biodiversity',    description: 'Create a refuge for insects and birds in the urban environment. Actively contribute to nature in the city.' },
  { icon: '💰', title: 'Property Value',        description: 'A vegetated roof increases the value of your property by 5 to 15% and improves its market appeal.' },
]
const services = [
  { title: 'Extensive Green Roof', icon: '🌿', color: 'bg-brand-400', description: 'Lightweight and cost-effective, ideal for large inaccessible surfaces. Low maintenance, reduced weight.', features: ['Substrate 5–15 cm', 'Sedums & mosses', 'Weight 50–150 kg/m²', 'Minimal maintenance'] },
  { title: 'Semi-intensive Green Roof', icon: '🌸', color: 'bg-earth-400', description: 'The perfect balance between lightness and plant diversity. Accessible, aesthetic with varied vegetation.', features: ['Substrate 15–25 cm', 'Perennials & grasses', 'Weight 150–300 kg/m²', 'Moderate maintenance'] },
  { title: 'Intensive / Roof Garden', icon: '🏡', color: 'bg-green-500', description: 'A true garden in the sky — accessible and usable. Shrubs, trees and relaxation areas are possible.', features: ['Substrate > 30 cm', 'Shrubs & trees', 'Weight > 300 kg/m²', 'Regular maintenance'] },
]
const processSteps = [
  { title: 'Feasibility Study',       description: 'Analysis of your roof: structure, slope, accessibility, budget.' },
  { title: 'Custom Design',           description: 'Detailed plans, choice of plants and materials tailored to your project.' },
  { title: 'Professional Installation', description: 'Installation by our certified teams in Brussels and across Belgium.' },
  { title: 'Follow-up & Maintenance', description: 'Maintenance contracts and long-term vegetation monitoring.' },
]
const reasons = [
  { icon: '🏅', title: 'Certified Expertise',      description: 'Teams trained to Belgian and European standards. Members of the green roof federation.' },
  { icon: '📐', title: 'Tailored Solutions',        description: 'Every roof is unique. We adapt our solution to the structure, budget and your vision.' },
  { icon: '🔧', title: 'Complete Service',          description: 'From design to maintenance, ToitureVerte provides full project support.' },
  { icon: '🌍', title: 'Ecological Commitment',     description: 'Local and sustainable materials, plants adapted to the Belgian climate, positive carbon footprint.' },
]
const faqs = [
  { q: 'What is an extensive green roof?', a: 'An extensive green roof is the lightest type of roof greening (50 to 150 kg/m²). It consists of a substrate layer of 5 to 15 cm and hardy plants such as sedums. It requires minimal maintenance and is suitable for most flat roofs in Belgium.' },
  { q: 'What does a green roof cost in Belgium?', a: 'The cost varies by type: between €40 and €80/m² for extensive, €80 to €150/m² for semi-intensive, and €150 to €300/m² for intensive. These prices include supply and installation. We offer a free personalised quote.' },
  { q: 'Can my roof support a green roof?', a: 'The vast majority of flat roofs can accommodate a green roof. Our experts conduct a free feasibility study to assess the load-bearing capacity of your structure, the slope and the condition of existing waterproofing.' },
  { q: 'Are there grants for green roofs in Belgium?', a: 'Yes! The Brussels Capital Region offers grants up to €50,000 (€30/m² for individuals). Wallonia and Flanders also offer cumulative regional and municipal subsidies. VAT can be reduced to 6% and green loans are available.' },
  { q: 'How long does installation take?', a: 'Installation typically takes 1 to 5 days depending on the area. For large commercial or industrial projects, the timeframe may be longer. We plan works to minimise disruption.' },
  { q: 'Do you work across all of Belgium?', a: 'Yes, ToitureVerte operates across Belgium: Brussels, Wallonia (Liège, Namur, Charleroi, Mons...) and Flanders (Antwerp, Ghent, Bruges, Leuven...). We travel at no extra charge within 100 km of Brussels.' },
]
</script>
