<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1 flex items-center justify-center bg-gray-50 py-20">
      <div class="text-center max-w-lg mx-auto px-4">
        <div class="text-8xl mb-6">🌿</div>
        <h1 class="text-6xl font-extrabold text-brand-600 mb-4">{{ error?.statusCode }}</h1>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          {{ error?.statusCode === 404 ? 'Page introuvable' : 'Une erreur est survenue' }}
        </h2>
        <p class="text-gray-600 mb-8">
          {{ error?.statusCode === 404
            ? 'La page que vous cherchez n\'existe pas ou a été déplacée.'
            : 'Nous travaillons à résoudre ce problème. Veuillez réessayer.'
          }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/" class="btn-primary">
            Retour à l'accueil
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-outline">
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps<{ error: NuxtError | null }>()
</script>
