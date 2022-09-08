<template>
  <div>
    <a class="flex items-center mt-5 px-4 text-gray-400 border-r-4 border-gray-800">
      <span class="mx-4 tracking-widest font-bold text-xs">
        {{ name.toUpperCase() }}
      </span>
    </a>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {type: String}
})
</script>
