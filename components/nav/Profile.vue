<template>
  <div class="flex w-auto mx-5 mb-8 border-t border-b border-gray-300 border-opacity-80">
    <div class="flex py-3 items-center justify-around">
      <img class="ml-3 h-8" src="">

      <div class="flex flex-col ml-5 text-gray-300">
        <span class="font-normal text-sm">{{ name }}</span>
        <span class="tracking-widest font-light text-xs">{{ rank }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {type: String, required: true},
  rank: {type: String, required: true}
})
</script>
