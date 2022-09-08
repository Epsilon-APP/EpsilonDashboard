<template>
  <ModalConfirm 
    title="Supprimer l'instance instance {value}"
    :descriptions="descriptions"
    button="Confirmer"
    ref="modal"
    @click="handleClick"/>
</template>

<script setup lang="ts">
const descriptions = [
  "Êtes-vous vraiment sûr de vouloir supprimer l'instance ?",
  "Les joueurs seront automatiquement redirigé vers un HUB si cela est possible."
]

const store = useEpsilonStore()

const modal = ref()

defineExpose({openModal})

function openModal(value) {
  modal.value.openModal(value)
}

function handleClick(value, close) {
  $fetch(`/api/instances/close/${value}`, { method: 'POST' })
    .then(() => {
      store.pushNotification(true, `L'instance ${value} a été détruite avec succès !`)
      close()
    })
    .catch(error => {
      store.pushNotification(false, error.statusMessage)
      close()
    })
}
</script>