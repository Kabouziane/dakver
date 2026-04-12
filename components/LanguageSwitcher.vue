<template>
  <div class="lang-switcher relative">
    <button
      class="flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-semibold text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click.stop="open = !open"
    >
      <span>{{ currentLang.toUpperCase() }}</span>
      <svg class="w-3.5 h-3.5 text-gray-400 transition-transform" :class="open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-1"
    >
      <div
        v-if="open"
        class="absolute right-0 mt-1.5 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 origin-top-right"
        role="listbox"
      >
        <NuxtLink
          v-for="lang in langs"
          :key="lang.code"
          :to="getPath(lang.code)"
          role="option"
          :aria-selected="currentLang === lang.code"
          class="flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-brand-50 hover:text-brand-700 transition-colors"
          :class="currentLang === lang.code ? 'text-brand-700 bg-brand-50 font-semibold' : 'text-gray-700'"
          @click="open = false"
        >
          <span class="text-base leading-none">{{ lang.flag }}</span>
          <div>
            <p class="font-medium leading-tight">{{ lang.name }}</p>
            <p class="text-xs text-gray-400 leading-tight">{{ lang.region }}</p>
          </div>
          <svg v-if="currentLang === lang.code" class="w-4 h-4 text-brand-600 ml-auto shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const open = ref(false)

const langs = [
  { code: 'fr', name: 'Français',   region: 'Belgique',      flag: '🇧🇪' },
  { code: 'nl', name: 'Nederlands', region: 'België',         flag: '🇧🇪' },
  { code: 'en', name: 'English',    region: 'International',  flag: '🇬🇧' },
]

const currentLang = computed(() => {
  if (route.path.startsWith('/en')) return 'en'
  if (route.path.startsWith('/nl')) return 'nl'
  return 'fr'
})

function getPath(targetLang: string) {
  const stripped = route.path.replace(/^\/(nl|en)(\/|$)/, '/')
  const clean = stripped || '/'
  if (targetLang === 'fr') return clean
  return `/${targetLang}${clean === '/' ? '' : clean}`
}

function handleOutside() { open.value = false }
onMounted(() => document.addEventListener('click', handleOutside))
onUnmounted(() => document.removeEventListener('click', handleOutside))
</script>
