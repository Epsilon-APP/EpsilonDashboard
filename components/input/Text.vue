<template>
  <div class="form-control w-full max-w-xs">
    <label v-if="label !== undefined" class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input v-model="modelValue" @input="handleInput" @keypress="handleKeyPress" type="text" :placeholder="placeholder" :disabled="disable" :class="classObject" class="input input-bordered w-full max-w-xs"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {type: String, required: false},
  placeholder: {type: String, required: false},
  number: {type: Boolean, required: false},
  float: {type: Boolean, required: false},
  disable: {type: Boolean, required: false},
  size: {type: String, required: false},
  type: {type: String, required: false},
  modelValue: {required: false}
})

const emit = defineEmits(['input', 'update:modelValue'])

const classObject = computed(() => {
  let object = {}

  object['input-' + props.size] = props.size !== undefined
  object['input-' + props.type] = props.type !== undefined

  return object
})

function handleInput(event) {
  let value = event.target.value

  emit('input', event)
  emit('update:modelValue', value)
}

function handleKeyPress(event) {
  if (props.number || props.float) {
    let array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let key = event.key;

    if (props.float)
      array.push('.')

    if (!array.includes(key))
      event.preventDefault()
  }
}
</script>