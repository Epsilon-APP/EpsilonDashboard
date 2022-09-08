<template>
  <div>
    <ModalTypeCreateInstance ref="createInstanceModal"/>
    <ModalTypeDeleteInstance ref="deleteInstanceModal"/>

    <Box title="Liste des instances">
      <template #header>
        <div class="flex gap-2">
          <TableSearch v-model="searchResult" :items="items"/>
          <ButtonIconType v-if="createInstanceModal" @click="createInstanceModal.openModal" icon="Plus"/>
        </div>
      </template>
      <TableDefault :fields="fields" :items="searchResult" v-slot="{item}">
        <tr class="hover">
          <td>{{ item.name }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.template }}</td>
          <td>{{ item.online_count }}/{{ item.slots }}</td>
          <td>
            <State :value="item.state"/>
          </td>
          <th>
            <button v-if="deleteInstanceModal" @click="deleteInstanceModal.openModal(item.name)" class="btn btn-outline btn-error btn-xs">
              Supprimer
            </button>
          </th>
        </tr>
      </TableDefault>
    </Box>
  </div>
</template>

<script setup lang="ts">
const fields = ["Instance", "Type", "Template", "Slots", "Status", ""]

defineProps({
  items: {type: Array<Object>, required: true}
})

const createInstanceModal = ref()
const deleteInstanceModal = ref()

const searchResult = ref([])
</script>