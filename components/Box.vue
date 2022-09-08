<template>
  <div class="bg-white rounded-xl shadow p-5">
    <div class="flex justify-between mb-5">
      <h2 class="font-medium tracking-wider text-slate-700">
        {{ title }}
      </h2>
      <div class="flex">
        <slot name="header"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {type: String, required: true}
})
</script>