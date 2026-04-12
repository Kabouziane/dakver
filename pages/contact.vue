<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Fil d'Ariane" class="flex items-center gap-2 text-sm text-brand-300 mb-6">
          <NuxtLink :to="localePath('/')" class="hover:text-white transition-colors">Accueil</NuxtLink>
          <span>/</span>
          <span class="text-white font-medium">Contact</span>
        </nav>
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Contactez-nous</h1>
          <p class="text-xl text-brand-100">
            Obtenez un devis gratuit et sans engagement pour votre projet de végétalisation. Nous répondons sous 24 heures ouvrées.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-10">

          <!-- Info column -->
          <div class="lg:col-span-1 space-y-6">
            <div class="card">
              <h2 class="font-bold text-gray-900 text-lg mb-5">Nos coordonnées</h2>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <div class="w-9 h-9 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-sm">Adresse</p>
                    <p class="text-gray-600 text-sm">Bruxelles, Belgique<br>Zone : toute la Belgique</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-9 h-9 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-sm">Téléphone</p>
                    <a href="tel:+3225551234" class="text-brand-600 hover:text-brand-700 text-sm font-medium">+32 2 555 12 34</a>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-9 h-9 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-sm">Email</p>
                    <a href="mailto:info@toitureverte.be" class="text-brand-600 hover:text-brand-700 text-sm font-medium">info@toitureverte.be</a>
                  </div>
                </li>
              </ul>
            </div>

            <div class="card">
              <h2 class="font-bold text-gray-900 text-lg mb-4">Horaires</h2>
              <ul class="space-y-2">
                <li class="flex justify-between text-sm">
                  <span class="text-gray-600">Lundi – Vendredi</span>
                  <span class="font-medium text-gray-900">08h00 – 18h00</span>
                </li>
                <li class="flex justify-between text-sm">
                  <span class="text-gray-600">Samedi</span>
                  <span class="font-medium text-gray-900">09h00 – 13h00</span>
                </li>
                <li class="flex justify-between text-sm">
                  <span class="text-gray-600">Dimanche</span>
                  <span class="text-gray-400">Fermé</span>
                </li>
              </ul>
            </div>

            <div class="card bg-brand-50 border-brand-100">
              <h2 class="font-bold text-gray-900 text-lg mb-3">Zone d'intervention</h2>
              <p class="text-sm text-gray-600 mb-4">Nous intervenons sans frais supplémentaires dans un rayon de 100 km de Bruxelles :</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="city in cities" :key="city"
                  class="px-2.5 py-1 bg-white text-brand-700 text-xs font-medium rounded-full border border-brand-200">
                  {{ city }}
                </span>
              </div>
            </div>
          </div>

          <!-- Form column -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Demande de devis gratuit</h2>
              <p class="text-gray-500 text-sm mb-8">Tous les champs marqués d'un * sont obligatoires. Réponse sous 24h ouvrées.</p>

              <form @submit.prevent="submitForm" novalidate class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1.5">Prénom *</label>
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      required
                      autocomplete="given-name"
                      placeholder="Jean"
                      class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                      :class="errors.firstName ? 'border-red-400' : ''"
                    >
                    <p v-if="errors.firstName" class="mt-1 text-xs text-red-500">{{ errors.firstName }}</p>
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1.5">Nom *</label>
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      required
                      autocomplete="family-name"
                      placeholder="Dupont"
                      class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                      :class="errors.lastName ? 'border-red-400' : ''"
                    >
                    <p v-if="errors.lastName" class="mt-1 text-xs text-red-500">{{ errors.lastName }}</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      autocomplete="email"
                      placeholder="jean.dupont@email.com"
                      class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                      :class="errors.email ? 'border-red-400' : ''"
                    >
                    <p v-if="errors.email" class="mt-1 text-xs text-red-500">{{ errors.email }}</p>
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1.5">Téléphone</label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      autocomplete="tel"
                      placeholder="+32 4XX XX XX XX"
                      class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    >
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="projectType" class="block text-sm font-medium text-gray-700 mb-1.5">Type de projet *</label>
                    <select
                      id="projectType"
                      v-model="form.projectType"
                      required
                      class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition bg-white"
                      :class="errors.projectType ? 'border-red-400' : ''"
                    >
                      <option value="">Choisir...</option>
                      <option value="extensive">Toiture extensive</option>
                      <option value="semi-intensive">Toiture semi-intensive</option>
                      <option value="intensive">Toiture intensive / Jardin</option>
                      <option value="entretien">Entretien / Maintenance</option>
                      <option value="autre">Autre / Je ne sais pas encore</option>
                    </select>
                    <p v-if="errors.projectType" class="mt-1 text-xs text-red-500">{{ errors.projectType }}</p>
                  </div>
                  <div>
                    <label for="surface" class="block text-sm font-medium text-gray-700 mb-1.5">Surface estimée (m²)</label>
                    <input
                      id="surface"
                      v-model="form.surface"
                      type="number"
                      min="1"
                      placeholder="ex. 150"
                      class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    >
                  </div>
                </div>

                <div>
                  <label for="location" class="block text-sm font-medium text-gray-700 mb-1.5">Commune / Ville *</label>
                  <input
                    id="location"
                    v-model="form.location"
                    type="text"
                    required
                    placeholder="ex. Bruxelles, Liège, Gand..."
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    :class="errors.location ? 'border-red-400' : ''"
                  >
                  <p v-if="errors.location" class="mt-1 text-xs text-red-500">{{ errors.location }}</p>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    placeholder="Décrivez votre projet, vos questions, vos contraintes..."
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <div class="flex items-start gap-3">
                  <input
                    id="consent"
                    v-model="form.consent"
                    type="checkbox"
                    required
                    class="mt-1 w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                  >
                  <label for="consent" class="text-xs text-gray-600">
                    J'accepte que mes données soient utilisées par ToitureVerte pour traiter ma demande de devis, conformément à notre
                    <NuxtLink :to="localePath('/politique-confidentialite')" class="text-brand-600 hover:underline">politique de confidentialité</NuxtLink>. *
                  </label>
                </div>
                <p v-if="errors.consent" class="text-xs text-red-500 -mt-2">{{ errors.consent }}</p>

                <!-- Success message -->
                <Transition enter-active-class="transition duration-300" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
                  <div v-if="submitted" class="p-4 bg-brand-50 border border-brand-200 rounded-xl flex items-center gap-3">
                    <svg class="w-5 h-5 text-brand-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <p class="text-brand-700 font-medium text-sm">Merci ! Votre demande a été envoyée. Nous vous contactons sous 24h.</p>
                  </div>
                </Transition>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <svg v-if="isSubmitting" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de devis' }}
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
const localePath = useLocalePath()

useSeoMeta({
  title: 'Contact & Devis Gratuit – ToitureVerte Bruxelles',
  description: 'Contactez ToitureVerte pour un devis gratuit de végétalisation de toiture à Bruxelles et en Belgique. Réponse sous 24h. +32 2 555 12 34.',
  ogTitle: 'Devis gratuit – ToitureVerte Bruxelles',
  ogDescription: 'Demandez votre devis gratuit pour une toiture verte à Bruxelles ou en Belgique. Réponse sous 24h.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://www.toitureverte.be/contact' }] })

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectType: '',
  surface: '',
  location: '',
  message: '',
  consent: false,
})

const errors = reactive<Record<string, string>>({})
const isSubmitting = ref(false)
const submitted = ref(false)

function validate(): boolean {
  Object.keys(errors).forEach(k => delete errors[k])
  if (!form.firstName.trim()) errors.firstName = 'Le prénom est requis.'
  if (!form.lastName.trim()) errors.lastName = 'Le nom est requis.'
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Email invalide.'
  if (!form.projectType) errors.projectType = 'Veuillez choisir un type de projet.'
  if (!form.location.trim()) errors.location = 'La commune est requise.'
  if (!form.consent) errors.consent = 'Vous devez accepter la politique de confidentialité.'
  return Object.keys(errors).length === 0
}

async function submitForm() {
  if (!validate()) return
  isSubmitting.value = true
  // Simulate API call — connect to your backend / form service here
  await new Promise(resolve => setTimeout(resolve, 1200))
  isSubmitting.value = false
  submitted.value = true
  Object.keys(form).forEach(k => {
    if (typeof (form as any)[k] === 'boolean') (form as any)[k] = false
    else (form as any)[k] = ''
  })
}

const cities = [
  'Bruxelles', 'Liège', 'Gand', 'Anvers', 'Namur', 'Charleroi',
  'Bruges', 'Louvain', 'Mons', 'Waterloo', 'Wavre', 'Ottignies',
]
</script>
