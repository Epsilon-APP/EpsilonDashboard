<template>
  <button @click="handleClick" :class="classObject" class="btn">
    <slot></slot>
    <Icon v-if="icon" :name="icon" :size="20"></Icon>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {type: String, required: false},
  outline: {type: Boolean, required: false},
  disable: {type: Boolean, required: false},
  loading: {type: Boolean, required: false},
  size: {type: String, required: false},
  type: {type: String, required: false}
})

const emit = defineEmits(['click'])

const classObject = computed(() => {
  let object = {}

  object['gap-2'] = props.icon !== undefined
  object['bg-gray-800'] = !props.outline && !props.disable && props.type === undefined
  object['border-gray-800'] = props.outline && props.disable && props.type === undefined
  object['btn-outline'] = props.outline && !props.disable
  object['btn-disabled'] = props.disable
  object['loading'] = props.loading
  object['btn-' + props.size] = props.size !== undefined
  object['btn-' + props.type] = props.type !== undefined

  return object
})

function handleClick() {
  emit('click')
}
</script>