<template>
  <div v-show="show" class="modal modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-lg">
        {{ title }}
      </h3>
      <div class="py-4">
        <p v-for="description in descriptions">
          {{ description }}
        </p>
      </div>
      <div class="pt-1">
        <slot></slot>
      </div>
      <div class="modal-action">
        <ButtonText @click="handleClick"></ButtonText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {type: String, required: true},
  descriptions: {type: Array<String>, required: true},
})

const emit = defineEmits(['click'])

const show = ref(false)

defineExpose({openModal, closeModal})

function openModal() {
  show.value = true
}

function closeModal() {
  show.value = false
}

function handleClick() {
  emit('click')
  closeModal()
}
</script>