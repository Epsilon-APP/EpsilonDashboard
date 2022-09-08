<template>
  <div class="grid gap-7">
    <StatsContent 
      :titles="['Nombre de template', 'Nombre de parents', 'Total']"
      :icons="['File', 'Box', 'List']"
      :numbers="stats"/>

    <TableTypeTemplate :items="templates"/>
    <TableTypeParent :items="parents"/>
  </div>
</template>

<script setup lang="ts">
const store = useEpsilonStore()

const stats = computed(() => {
  return [
    store.templates.length,
    store.parents.length,
    store.templates.length + store.parents.length
  ]
})

const templates = computed(() => {
  return store.templates
})

const parents = computed(() => {
  return store.parents
})
</script>