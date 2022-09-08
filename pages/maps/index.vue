<template>
  <div class="grid gap-7">
    <StatsContent 
      :titles="['Nombre de mondes', 'Soon', 'Soon']"
      :icons="['Layers', 'Server', 'User']"
      :numbers="stats"/>

    <TableTypeMap :items="maps"/>
  </div>
</template>

<script setup lang="ts">
const store = useEpsilonStore()

const stats = computed(() => {
  return [store.maps.length, 0, 0]
})

const maps = computed(() => {
  return store.maps
})
</script>