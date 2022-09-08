<template>
  <button @click="handleClick" :class="classObject" class="btn btn-circle">
    <Icon :name="icon" :size="20"></Icon>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {type: String, required: true},
  outline: {type: Boolean, required: false}
})

const emit = defineEmits(['click'])

const classObject = computed(() => {
  return {
    'bg-gray-800': !props.outline,
    'btn-outline border-gray-800': props.outline,
  }
})

function handleClick() {
  console.log('click')
  emit('click')
}
</script>