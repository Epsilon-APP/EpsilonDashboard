<template>
  <component :is="icon" :size="size"/>
</template>

<script setup lang="ts">
import * as icons from "lucide-vue-next";

const props = defineProps({
  name: {type: String, required: true},
  size: {type: Number, required: true},
})

const icon = computed(() => icons[props.name])
</script>