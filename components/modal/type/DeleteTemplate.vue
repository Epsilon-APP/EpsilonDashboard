<template>
  <ModalConfirm 
    title="Supprimer le template {value}"
    :descriptions="descriptions"
    button="Confirmer"
    ref="modal"
    @click="handleClick"/>
</template>

<script setup lang="ts">
const descriptions = [
  "Êtes-vous vraiment sûr de vouloir supprimer le template ?"
]

const store = useEpsilonStore()

const modal = ref()

defineExpose({openModal})

function openModal(value) {
  modal.value.openModal(value)
}

function handleClick(value, close) {
  $fetch(`/api/templates/delete/${value}`, { method: 'DELETE' })
    .then(() => {
      store.pushNotification(true, `L'instance ${value} a été ouverte avec succès !`)
      close()
    })
    .catch(error => {
      store.pushNotification(false, error.statusMessage)
      close()
    })
}
</script>