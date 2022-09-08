<template>
  <div class="grid gap-7">
    <StatsContent 
      :titles="['Nombre de proxy', 'Nombre de hubs', 'Joueurs en ligne']"
      :icons="['Layers', 'Server', 'User']"
      :numbers="stats"/>

    <TableTypeInstance :items="instances"/>
  </div>
</template>

<script setup lang="ts">
const store = useEpsilonStore()

const stats = computed(() => {
  return [
    store.instances.filter(item => item.type == 'Proxy').length,
    store.instances.filter(item => item.hub).length,
    store.instances.filter(item => item.type == 'Proxy')
      .reduce((variable, proxy) => variable += proxy.online_count, 0)
  ]
})

const instances = computed(() => {
  return store.instances
})
</script>