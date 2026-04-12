<template>
  <div>
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <nav class="flex items-center gap-2 text-sm text-brand-300 mb-6">
            <NuxtLink to="/nl" class="hover:text-white transition-colors">Home</NuxtLink>
            <span>/</span><span class="text-white font-medium">Diensten</span>
          </nav>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Onze dakbegroeiingsdiensten</h1>
          <p class="text-xl text-brand-100">Van extensief dak tot daktuin — ToitureVerte biedt complete oplossingen voor elk gebouw in Brussel en heel België.</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div v-for="service in services" :key="service.title" class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="badge mb-3">{{ service.badge }}</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ service.title }}</h2>
            <p class="text-gray-600 leading-relaxed mb-6">{{ service.description }}</p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div v-for="spec in service.specs" :key="spec.label" class="bg-brand-50 rounded-xl p-4">
                <p class="text-xs text-brand-600 font-semibold uppercase tracking-wider">{{ spec.label }}</p>
                <p class="text-sm font-bold text-gray-900 mt-1">{{ spec.value }}</p>
              </div>
            </div>
            <NuxtLink to="/nl/contact" class="btn-primary">Offerte aanvragen</NuxtLink>
          </div>
          <div class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl h-72 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="text-8xl mb-4">{{ service.icon }}</div>
              <p class="text-brand-700 font-semibold text-lg">{{ service.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-800 text-white text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Heeft u een project in gedachten?</h2>
        <p class="text-brand-100 mb-8">Onze experts adviseren u gratis over het type begroeining dat geschikt is voor uw dak.</p>
        <NuxtLink to="/nl/contact" class="btn-primary bg-white text-brand-800 hover:bg-brand-50 text-base px-8 py-4">Gratis haalbaarheidsstudie</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Dakbegroeiingsdiensten – ToitureVerte België',
  description: 'Extensief, semi-intensief, intensief groendak en onderhoud. Oplossingen op maat in Brussel en heel België. Gratis offerte.',
})
useHead({ htmlAttrs: { lang: 'nl' }, link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/nl/services' }] })

const services = [
  {
    title: 'Extensief Groendak', icon: '🌿', badge: 'Ideaal voor grote oppervlakten',
    description: 'Het extensieve groendak is de lichtste en meest economische oplossing. Samengesteld uit een dunne substraatlaag (5 tot 15 cm) en planten die de Belgische klimaatomstandigheden aankunnen zonder beregening of intensief onderhoud. Bijzonder geschikt voor industriële, commerciële en residentiële daken.',
    specs: [{ label: 'Substraatdikte', value: '5–15 cm' }, { label: 'Gewicht', value: '50–150 kg/m²' }, { label: 'Richtprijs', value: '40–80 €/m²' }, { label: 'Onderhoud', value: '1–2 keer/jaar' }],
  },
  {
    title: 'Semi-intensief Groendak', icon: '🌸', badge: 'Balans esthetiek & gewicht',
    description: 'Het semi-intensieve groendak biedt de perfecte balans tussen licht gewicht en diversiteit aan begroeiing. Toegankelijk, esthetisch en met een gevarieerde vegetatie die het hele jaar door mooi blijft. Ideaal voor zichtbare daken en terrassen.',
    specs: [{ label: 'Substraatdikte', value: '15–25 cm' }, { label: 'Gewicht', value: '150–300 kg/m²' }, { label: 'Richtprijs', value: '80–150 €/m²' }, { label: 'Onderhoud', value: '2–4 keer/jaar' }],
  },
  {
    title: 'Intensief / Daktuin', icon: '🏡', badge: 'Echte tuin op hoogte',
    description: 'De intensieve daktuin is een volwaardige tuin op hoogte, toegankelijk en bruikbaar. Struiken, bomen en zithoeken zijn mogelijk. Deze premium oplossing transformeert uw dak radicaal. Vereist een aangepaste draagstructuur en regelmatig onderhoud.',
    specs: [{ label: 'Substraatdikte', value: '> 30 cm' }, { label: 'Gewicht', value: '> 300 kg/m²' }, { label: 'Richtprijs', value: '150–350 €/m²' }, { label: 'Onderhoud', value: 'Regelmatig' }],
  },
]
</script>
