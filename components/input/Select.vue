<template>
  <div class="form-control w-full max-w-xs">
    <label v-if="label !== undefined" class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <select v-model="value" @change="handleChange" :class="classObject" class="select select-bordered w-full max-w-xs">
      <option v-if="title" disabled selected value="">{{ title }}</option>
      <option v-for="option in options" :value="option">{{ prefix }}{{ option }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {type: String, required: false},
  title: {type: String, required: false},
  options: {type: Array<String>, required: true},
  prefix: {type: String, required: false},
  size: {type: String, required: false},
  type: {type: String, required: false},
  modelValue: {type: String, required: false}
})

const emit = defineEmits(['change', 'update:modelValue'])

const value = computed({
  get() {
    if (!props.options.includes(props.modelValue))
      emit('update:modelValue', undefined)

    return props.modelValue === undefined ? '' : props.modelValue
  },
  set(value) {}
})

const classObject = computed(() => {
  let object = {}

  object['select-' + props.size] = props.size !== undefined
  object['select-' + props.type] = props.type !== undefined

  return object
})

function handleChange(event) {
  let value = event.target.value

  emit('change', event)
  emit('update:modelValue', value)
}
</script>