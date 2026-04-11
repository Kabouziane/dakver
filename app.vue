<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} | ToitureVerte Belgique` : 'ToitureVerte – Végétalisation de toitures à Bruxelles et en Belgique',
})
</script>
