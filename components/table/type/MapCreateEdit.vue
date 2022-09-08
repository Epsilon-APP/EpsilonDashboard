<template>
  <div>
    <Box title="Liste des mondes">
      <template #header>
        <div class="flex gap-2">
          <InputSelect v-model="select" prefix="Monde par défaut: " title="Sélectionner une map par défaut" :options="maps"/>
          <TableSearch v-model="searchResult" :items="itemsCheckbox"/>
        </div>
      </template>
      <TableDefault :fields="fields" :items="searchResult" v-slot="{item}">
        <tr class="hover">
          <td>{{ item.name }}</td>
          <th>
            <InputCheckbox @change="handleCheckbox($event, item.name)" :checked="disable(item.name)" :disabled="disable(item.name)"/>
          </th>
        </tr>
      </TableDefault>
    </Box>
  </div>
</template>

<script setup lang="ts">
const fields = ["Nom", ""]

const props = defineProps({
  defaultMap: {type: String, required: false},
  currents: {type: Array<String>, required: true},
  maps: {type: Array<String>, required: true}
})

const emit = defineEmits(['update:defaultMap', 'update:currents'])

const searchResult = ref([])
const select = ref(props.defaultMap)

const itemsCheckbox = ref(
  props.maps.map(item => {
    return { name: item, value: props.currents.includes(item)}
  })
)

onMounted(update)

function disable(name) {
  console.log(select.value === name, name)
  return select.value === name
}

function handleCheckbox(value, name) {
  itemsCheckbox.value.find(item => item.name === name).value = value
  update()
}

function update() {
  emit('update:currents', itemsCheckbox.value
    .filter(item => item.value === true)
    .map(item => item.name)
  )

  emit('update:defaultMap', select.value)
}
</script>