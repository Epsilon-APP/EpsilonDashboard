<template>
  <div>
    <div class="flex flex-wrap gap-5">
      <Box title="Informations" class="flex-auto min-w-[300px]">
        <InputText v-model="template.name" label="Nom" placeholder="hub"/>
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
      <ButtonText @click="createTemplate" class="w-full" v-if="checkRequired">
        Créer
      </ButtonText>
    </div>
  </div>
</template>

<script setup lang="ts">
const template = ref({
  name: undefined, parent: undefined, resources: {
    minimum: {
      cpu: undefined,
      ram: undefined
    },
    maximum: {
      cpu: undefined,
      ram: undefined
    }
  },
  slots: undefined,
  maps: [],
  default_map: undefined,
  labels: {}
})

const store = useEpsilonStore()
const router = useRouter()

const checkRequired = computed(() => {
  let item = template.value

  let array = [item.name, item.parent,
    item.resources.minimum.cpu, item.resources.maximum.cpu,
    item.resources.minimum.ram, item.resources.maximum.ram,
    item.slots, item.maps, item.default_map]

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

function createTemplate() {
  $fetch('/api/templates/create', { method: 'POST', body: template.value })
  router.back()
}
</script>