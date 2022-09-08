<template>
  <div v-show="show" class="modal modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-lg" v-html="formatTitle"></h3>
      <div class="py-4">
        <p v-for="description in formatDescriptions">
          {{ description }}
        </p>
      </div>
      <div class="pt-1">
        <slot></slot>
      </div>
      <div class="modal-action">
        <ButtonText @click="handleClickConfirm" type="success" :outline="true" :loading="loading">{{ button }}</ButtonText>
        <ButtonText @click="handleClickCancel" type="error">Annuler</ButtonText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {type: String, required: true},
  descriptions: {type: Array<String>, required: true},
  button: {type: String, required: true}
})

const emit = defineEmits(['click'])

const show = ref(false)
const valueRef = ref(undefined)

const loading = ref(false)

const formatTitle = computed(() => {
  return props.title.replace("{value}", valueRef.value)
})

const formatDescriptions = computed(() => {
  return props.descriptions.map(value => {
    return value.replace("{value}", valueRef.value)
  })
})

defineExpose({openModal, closeModal})

function handleClickConfirm() {
  if (!loading.value) {
    loading.value = true
    
    setTimeout(() => {
      emit('click', valueRef.value, closeModal)
    }, 1300)
  }
}

function openModal(value) {
  valueRef.value = value
  show.value = true
}

function closeModal() {
  show.value = false
  loading.value = false

  valueRef.value = undefined
}

function handleClickCancel() {
  closeModal()
}
</script>