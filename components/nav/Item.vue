<template>
  <span>
    <a v-if="extern" class="active flex items-center pl-9 mt-2 py-1 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" :href="'http://' + path + '.' + env.domain">
      <Icon :name="icon" :size="20"/>
      <span class="mx-2 text-xs font-light">
        <slot></slot>
      </span>
    </a>

    <NuxtLink v-else class="active flex items-center pl-9 mt-2 py-1 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" :to="path">
      <Icon :name="icon" :size="20"/>
      <span class="mx-2 text-xs font-light">
        <slot></slot>
      </span>
    </NuxtLink>
  </span>
</template>

<script setup lang="ts">
defineProps({
  path: {type: String, default: "#"},
  extern: {type: Boolean, default: false},
  icon: {type: String, required: true}
})

const env = useRuntimeConfig()
</script>

<style scoped>
.active.router-link-active {
  @apply border-gray-100
}
</style>