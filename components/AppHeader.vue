<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center gap-2.5 group" :aria-label="t('nav.home')">
          <div class="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-brand-700 transition-colors">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <span class="text-xl font-bold text-gray-900">Toiture<span class="text-brand-600">Verte</span></span>
            <p class="text-xs text-gray-500 -mt-0.5 hidden sm:block">{{ t('common.allBelgium') }}</p>
          </div>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-0.5" :aria-label="t('nav.home')">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="localePath(link.to)"
            class="px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-brand-600 hover:bg-brand-50 transition-colors whitespace-nowrap"
            active-class="text-brand-700 bg-brand-50 font-semibold"
          >
            {{ t(link.name) }}
          </NuxtLink>
        </nav>

        <!-- CTA + Language Switcher + Mobile toggle -->
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <NuxtLink :to="localePath('/contact')" class="hidden sm:inline-flex btn-primary text-sm py-2 px-4">
            {{ t('common.freeQuote') }}
          </NuxtLink>
          <button
            class="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            :aria-expanded="mobileOpen"
            aria-label="Menu"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav v-if="mobileOpen" class="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="localePath(link.to)"
          class="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-brand-50 hover:text-brand-700 transition-colors"
          active-class="bg-brand-50 text-brand-700 font-semibold"
          @click="mobileOpen = false"
        >
          {{ t(link.name) }}
        </NuxtLink>
        <div class="pt-2 border-t border-gray-100">
          <NuxtLink :to="localePath('/contact')" class="btn-primary w-full text-sm py-3" @click="mobileOpen = false">
            {{ t('common.freeQuote') }}
          </NuxtLink>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const mobileOpen = ref(false)

const navLinks = [
  { to: '/',             name: 'nav.home'      },
  { to: '/services',     name: 'nav.services'  },
  { to: '/techniques',   name: 'nav.techniques'},
  { to: '/subsides',     name: 'nav.subsidies' },
  { to: '/realisations', name: 'nav.portfolio' },
  { to: '/contact',      name: 'nav.contact'   },
]

const route = useRoute()
watch(() => route.path, () => { mobileOpen.value = false })
</script>
