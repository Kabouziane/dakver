<template>
  <div class="relative" ref="containerRef">
    <button
      class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors border border-gray-200"
      :aria-expanded="open"
      aria-haspopup="listbox"
      aria-label="Choisir la langue / Choose language"
      @click="open = !open"
    >
      <span class="text-base leading-none">{{ currentLocale.flag }}</span>
      <span class="hidden sm:inline">{{ currentLocale.code.toUpperCase() }}</span>
      <svg class="w-3 h-3 transition-transform duration-200" :class="open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95 translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-1"
    >
      <div
        v-if="open"
        class="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
        role="listbox"
        :aria-label="'Langue / Language'"
      >
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          role="option"
          :aria-selected="locale.code === currentLocale.code"
          class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors"
          :class="locale.code === currentLocale.code
            ? 'bg-brand-50 text-brand-700 font-semibold'
            : 'text-gray-700 hover:bg-gray-50'"
          @click="switchLocale(locale.code)"
        >
          <span class="text-base leading-none">{{ locale.flag }}</span>
          <div>
            <p class="font-medium leading-tight">{{ locale.name }}</p>
            <p class="text-xs text-gray-400 leading-tight">{{ locale.region }}</p>
          </div>
          <svg v-if="locale.code === currentLocale.code" class="w-4 h-4 text-brand-600 ml-auto shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const open = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const availableLocales = [
  { code: 'fr', name: 'Français',    region: 'Belgique',  flag: '🇧🇪' },
  { code: 'nl', name: 'Nederlands',  region: 'België',    flag: '🇧🇪' },
  { code: 'en', name: 'English',     region: 'International', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch',     region: 'Belgien / DE',  flag: '🇩🇪' },
]

const currentLocale = computed(
  () => availableLocales.find(l => l.code === locale.value) ?? availableLocales[0]!
)

async function switchLocale(code: string) {
  await setLocale(code as 'fr' | 'nl' | 'en' | 'de')
  open.value = false
}

// Close on outside click
function handleClickOutside(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    open.value = false
  }
}
onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>
