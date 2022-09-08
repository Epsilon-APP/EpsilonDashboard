<template>
  <div>
    <ModalTypeDeleteMap ref="deleteMapModal"/>
    <Box title="Liste des mondes">
      <template #header>
        <div class="flex gap-2">
          <TableSearch v-model="searchResult" :items="items"/>
          <ButtonIconType icon="Plus"/>
        </div>
      </template>
      <TableDefault :fields="fields" :items="searchResult" v-slot="{item}">
        <tr class="hover">
          <td>{{ item }}</td>
          <th>
            <div class="flex gap-5">
              <a target="_blank" href="https://explorer.epsilon-srv.me/maps/">
                <button class="btn btn-outline btn-info btn-xs">
                  Explorer
                </button>
              </a>
              <button v-if="deleteMapModal" @click="deleteMapModal.openModal(item)" class="btn btn-outline btn-error btn-xs">
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
const fields = ["Nom", ""]

defineProps({
  items: {type: Array<Object>, required: true}
})

const deleteMapModal = ref()

const searchResult = ref([])
</script>