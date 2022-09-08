<template>
  <div>
    <ModalTypePatchTemplate ref="patchTemplateModal"/>

    <div class="flex flex-wrap gap-5">
      <Box title="Informations" class="flex-auto min-w-[300px]">
        <InputText v-model="template.name" label="Nom" placeholder="hub" disable/>
        <InputText v-model="template.parent" label="Parent" placeholder="spigot"/>
        <InputText v-model.number="template.slots" label="Slots" placeholder="10" number/>
      </Box>
      <Box title="Resources" class="flex-auto min-w-[300px]">
        <InputText v-model.number="template.resources.minimum.cpu" label="CPU Minimum" placeholder="1.0" float/>
        <InputText v-model.number="template.resources.maximum.cpu" label="CPU Maximum" placeholder="1.0" float/>
        <InputText v-model.number="template.resources.minimum.ram" label="Ram Minimum" placeholder="1024" number/>
        <InputText v-model.number="template.resources.maximum.ram" label="Ram Maximum" placeholder="2048" number/>
      </Box>
    </div>
    <div class="pt-5">
      <TableTypeMapCreateEdit :maps="maps" v-model:defaultMap="template.default_map" v-model:currents="template.maps"/>
    </div>
    <div class="pt-5">
      <ButtonText v-if="patchTemplateModal && checkRequired" @click="patchTemplateModal.openModal(template)" class="w-full" type="warning">
        Modifier
      </ButtonText>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useEpsilonStore()
const route = useRoute()

const template = ref(
  store.templates
    .find(template => template.name == route.params.name)
)

const patchTemplateModal = ref()

const checkRequired = computed(() => {
  let array = [template.value.name, template.value.parent,
    template.value.resources.minimum.cpu, template.value.resources.maximum.cpu,
    template.value.resources.minimum.ram, template.value.resources.maximum.ram,
    template.value.slots, template.value.maps, template.value.default_map]

  let result = true
  array.forEach(value => {
    if (value === undefined || (value instanceof Array && value.length === 0))
      result = false
  })

  return result
})

const maps = computed(() => {
  return store.maps
})
</script>