<template>
  <span :class="stateClass" class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full">
    {{ value }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {type: String, required: true}
})

const stateClass = computed(() => {
  switch (props.value) {
    case 'Starting':
      return 'text-yellow-800 bg-yellow-100'
    case 'Running':
      return 'text-green-800 bg-green-100'
    case 'InGame':
      return 'text-blue-800 bg-blue-100'
    case 'Stopping':
      return 'text-red-800 bg-red-100'
    default:
      return ""
  }
})
</script>