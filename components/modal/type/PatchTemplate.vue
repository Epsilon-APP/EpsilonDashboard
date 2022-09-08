<template>
  <ModalConfirm 
    title="Modifier le template"
    :descriptions="descriptions"
    button="Confirmer"
    ref="modal"
    @click="handleClick"/>
</template>

<script setup lang="ts">
const descriptions = [
  "Êtes-vous vraiment sûr de vouloir modifier le template ?"
]

const store = useEpsilonStore()
const router = useRouter()

const modal = ref()

defineExpose({openModal})

function openModal(value) {
  modal.value.openModal(value)
}

function handleClick(value, close) {
  $fetch('/api/templates/update', { method: 'PUT', body: value })
    .then(() => {
      store.pushNotification(true, `L'instance ${value} a été ouverte avec succès !`)
      close()
    })
    .catch(error => {
      store.pushNotification(false, error.statusMessage)
      close()
    })

  router.back()
}
</script>