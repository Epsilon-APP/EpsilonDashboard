<template>
  <input @change="handleChange" type="checkbox" class="checkbox" :checked="checked"/>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {type: Boolean, required: false},
  checked: {type: Boolean, required: false},
  disable: {type: Boolean, required: false}
})

const emit = defineEmits(['change', 'update:modelValue'])

function handleChange(event) {
  let value = event.target.checked

  emit('change', value)
  emit('update:modelValue', value)
}
</script>