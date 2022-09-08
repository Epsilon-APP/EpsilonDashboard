<template>
<div class="relative shadow h-36 w-10/12 flex-grow rounded-3xl mx-10 overflow-hidden">
  <span class="absolute block rounded-full h-24 w-24 bg-white opacity-30 -right-10 -top-2"></span>
  <span class="absolute block rounded-full h-32 w-32 bg-white opacity-40 -right-6 -bottom-12"></span>

  <span class="block ml-7 mt-6 font-medium text-base tracking-widest text-gray-50">
    <slot></slot>
  </span>
  <span class="block ml-9 font-medium text-lg tracking-wider text-gray-50">
    {{ number }}
  </span>

  <Icon class="ml-7 mt-4 text-gray-50" :name="icon" :size="30" />
</div>
</template>

<script setup lang="ts">
defineProps({
  number: {type: Number, required: true},
  icon: {type: String, required: true}
})
</script>
