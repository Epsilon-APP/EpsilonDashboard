<template>
  <div>
    <ModalTypeDeleteParent ref="deleteParentModal"/>
    <Box title="Liste des parents">
      <template #header>
        <div class="flex gap-2">
          <TableSearch v-model="searchResult" :items="items"/>
          <ButtonIconType icon="Plus"/>
        </div>
      </template>
      <TableDefault :fields="fields" :items="searchResult" v-slot="{item}">
        <tr class="hover">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.type }}</td>
          <th>
            <div class="flex gap-5">
              <a target="_blank" :href="'https://explorer.epsilon-srv.me/parents/' + item.name">
                <button class="btn btn-outline btn-info btn-xs">
                  Explorer
                </button>
              </a>
              <button class="btn btn-outline btn-warning btn-xs">
                Modifier
              </button>
              <button v-if="deleteParentModal" @click="deleteParentModal.openModal(item.name)" class="btn btn-outline btn-error btn-xs">
                Supprimer
              </button>
            </div>
          </th>
        </tr>
      </TableDefault>
    </Box>
  </div>
</template>

<script setup lang="ts">
const fields = ["Nom", "Description", "Type", ""]

defineProps({
  items: {type: Array<Object>, required: true}
})

const deleteParentModal = ref()

const searchResult = ref([])
</script>