<template>
  <div class="input-group">
    <input v-model="modelValue" @input="handleInput" type="text" :placeholder="placeholder" class="input input-bordered"/>
    <div class="flex justify-center items-center w-12 h-12 rounded-r-md bg-gray-800">
      <div>
        <Icon class="stroke-slate-100" :name="icon" :size="22"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {type: String, required: true},
  placeholder: {type: String, required: true},
  modelValue: {type: String, required: false}
})

const emit = defineEmits(['input', 'update:modelValue'])

function handleInput(event) {
  let value = event.target.value
  
  emit('input', event)
  emit('update:modelValue', value)
}
</script>