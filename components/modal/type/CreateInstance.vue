<template>
  <ModalConfirm 
    title="Créer une instance"
    :descriptions="descriptions"
    button="Créer une instance"
    ref="modal"
    @click="handleClick">

    <InputSelect v-model="select" title="Selectionner un template" :options="templates" bordered></InputSelect>
  </ModalConfirm>
</template>

<script setup lang="ts">
const descriptions = [
  "Choisissez un template pour créer votre instance."
]

const store = useEpsilonStore()

const modal = ref()
const select = ref(undefined)

const templates = computed(() => {
  return store.templates.map(template => template.name)
})

defineExpose({openModal})

function openModal() {
  modal.value.openModal()
}

function handleClick(_, close) {
  const template = select.value

  if (template !== undefined)
    $fetch("/api/instances/open/" + template, { method: 'POST' })
      .then(() => {
        store.pushNotification(true, `L'instance ${template} a été ouverte avec succès !`)
        close()
      })
      .catch(error => {
        store.pushNotification(false, error.statusMessage)
        close()
      })
}
</script>