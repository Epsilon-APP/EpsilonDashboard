<template>
  <ModalConfirm 
    title="Build le template {value}"
    :descriptions="descriptions"
    button="Confirmer"
    ref="modal"
    @click="handleClick"/>
</template>

<script setup lang="ts">
const descriptions = [
  "Êtes-vous vraiment sûr de vouloir build le template ?"
]

const store = useEpsilonStore()

const modal = ref()

defineExpose({openModal})

function openModal(value) {
  modal.value.openModal(value)
}

function handleClick(value, close) {
  $fetch(`/api/templates/build/${value}`, { method: 'POST' })
    .then(() => {
      store.pushNotification(true, `L'image ${value} a été build avec succès !`)
      close()
    })
    .catch(error => {
      store.pushNotification(false, error.statusMessage)
      close()
    })
}
</script>