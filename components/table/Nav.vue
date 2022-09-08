<template>
  <div class="btn-group">
    <ButtonText @click="back" :disable="disableBack">«</ButtonText>
    <ButtonText class="no-animation hover:bg-gray-800 cursor-default">Page {{ cursor + 1 }}</ButtonText>
    <ButtonText @click="next" :disable="disableNext">»</ButtonText>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {type: Array<Object>, required: true}
})

const emit = defineEmits(['change', 'update:modelValue'])

const cursor = ref(0)
const filtered = ref([])

const disableBack = computed(() => {
  return cursor.value == 0
})

const disableNext = computed(() => {
  return cursor.value >= Math.round(filtered.value.length / 10)
})

onMounted(update)

function back() {
  cursor.value--
  update()
}

function next() {
  cursor.value++
  update()
}

function reset() {
  cursor.value = 0
  update()
}

function update() {
  filtered.value = props.items.slice(cursor.value * 10, (cursor.value + 1) * 10)

  emit('change', filtered.value)
  emit('update:modelValue', filtered.value)
}

watch(() => props.items, reset)
</script>