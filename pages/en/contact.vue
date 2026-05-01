<template>
  <div>
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink to="/en" class="hover:text-white transition-colors">Home</NuxtLink>
          <span>/</span><span class="text-white font-medium">Contact</span>
        </nav>
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p class="text-xl text-brand-100">Get a free, no-obligation quote for your green roof project. We respond within 24 business hours.</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-10">

          <!-- Info -->
          <div class="lg:col-span-1 space-y-6">
            <div class="card">
              <h2 class="font-bold text-gray-900 text-lg mb-5">Our Contact Details</h2>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <div class="w-9 h-9 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-sm">Address</p>
                    <p class="text-gray-600 text-sm">Brussels, Belgium<br>Zone: all of Belgium</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-9 h-9 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.554 4.1 1.522 5.827L.057 23.927a.5.5 0 00.609.609l6.1-1.465A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.954a9.938 9.938 0 01-5.07-1.384l-.364-.216-3.77.906.921-3.673-.237-.378A9.96 9.96 0 012.046 12C2.046 6.487 6.487 2.046 12 2.046S21.954 6.487 21.954 12 17.513 21.954 12 21.954z"/></svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-sm">WhatsApp</p>
                    <a href="https://wa.me/32XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20a%20free%20quote%20for%20a%20green%20roof."
                       target="_blank" rel="noopener noreferrer"
                       class="text-green-600 hover:text-green-700 text-sm font-medium">Message us on WhatsApp</a>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-9 h-9 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-sm">Email</p>
                    <a href="mailto:Bonjour@toitureverte.be" class="text-brand-600 hover:text-brand-700 text-sm font-medium">Bonjour@toitureverte.be</a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="card">
              <h3 class="font-bold text-gray-900 mb-3">Response Time</h3>
              <p class="text-sm text-gray-600">We answer all enquiries within <strong>24 business hours</strong>. For urgent questions, you can call us directly.</p>
            </div>
          </div>

          <!-- Form -->
          <div class="lg:col-span-2">
            <div class="card">
              <h2 class="text-xl font-bold text-gray-900 mb-2">Free Quote Request</h2>
              <p class="text-sm text-gray-500 mb-6">All fields marked with * are required.</p>
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">First name *</label>
                    <input v-model="form.firstName" type="text" required placeholder="your first name" class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Last name *</label>
                    <input v-model="form.lastName" type="text" required placeholder="your last name" class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition">
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Email address *</label>
                  <input v-model="form.email" type="email" required placeholder="your@email.com" class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Project type *</label>
                  <select v-model="form.projectType" required class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition bg-white">
                    <option value="">Select a type</option>
                    <option>Extensive green roof</option>
                    <option>Semi-intensive green roof</option>
                    <option>Intensive green roof / roof garden</option>
                    <option>Maintenance of existing roof</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea v-model="form.message" rows="4" placeholder="Describe your project, questions, constraints..." class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none" />
                </div>

                <Transition enter-active-class="transition duration-300" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
                  <div v-if="submitted" class="p-4 bg-brand-50 border border-brand-200 rounded-xl flex items-center gap-3">
                    <svg class="w-5 h-5 text-brand-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                    <p class="text-brand-700 font-medium text-sm">Thank you! Your request has been sent. We will contact you within 24 hours.</p>
                  </div>
                </Transition>

                <button type="submit" :disabled="isSubmitting" class="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                  {{ isSubmitting ? 'Sending...' : 'Send My Quote Request' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Green Roof Quote Brussels – Free Response Within 24h',
  description: 'Request your free green roof quote in Brussels. Response within 24h. Free feasibility study: EPC impact, RENOLUTION E5 grants, estimated net cost.',
  ogTitle: 'Free green roof quote Brussels – ToitureVerte',
  ogDescription: 'Free quote within 24h. EPC study + RENOLUTION E5 grant calculation included.',
  ogImage: 'https://www.toitureverte.be/og-image.svg',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/en/contact' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema([
    { name: 'Home', url: 'https://www.toitureverte.be/en' },
    { name: 'Contact & Quote', url: 'https://www.toitureverte.be/en/contact' },
  ])) }],
})
useSeoAlternates('/contact')

const form = reactive({ firstName: '', lastName: '', email: '', projectType: '', message: '' })
const isSubmitting = ref(false)
const submitted = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  await new Promise(r => setTimeout(r, 1000))
  isSubmitting.value = false
  submitted.value = true
}
</script>
