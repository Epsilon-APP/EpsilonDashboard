<template>
  <div>
    <ModalTypeDeleteTemplate ref="deleteTemplateModal"/>
    <ModalTypeBuildTemplate ref="buildTemplateModal"/>

    <Box title="Liste des templates">
      <template #header>
        <div class="flex gap-2">
          <TableSearch v-model="searchResult" :items="items"/>
          <NuxtLink to="/templates/create">
            <ButtonIconType icon="Plus"/>
          </NuxtLink>
        </div>
      </template>
      <TableDefault :fields="fields" :items="searchResult" v-slot="{item}">
        <tr class="hover">
          <td>{{ item.name }}</td>
          <td>{{ item.parent }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.resources.minimum.cpu }} Core - {{ item.resources.maximum.cpu }} Core</td>
          <td>{{ item.resources.minimum.ram }}Mo - {{ item.resources.maximum.ram }} Mo</td>
          <th>
            <div class="flex gap-5">
              <a target="_blank" :href="'https://explorer.' + env.domain + '/templates/' + item.name">
                <button class="btn btn-outline btn-info btn-xs">
                  Explorer
                </button>
              </a>
              <NuxtLink :to="'/templates/' + item.name">
                <button class="btn btn-outline btn-warning btn-xs">Modifier</button>
              </NuxtLink>
              <button v-if="deleteTemplateModal" @click="deleteTemplateModal.openModal(item.name)" class="btn btn-outline btn-error btn-xs">
                Supprimer
              </button>
              <button v-if="buildTemplateModal" @click="buildTemplateModal.openModal(item.name)" class="btn btn-outline btn-success btn-xs">
                Build
              </button>
            </div>
          </th>
        </tr>
      </TableDefault>
    </Box>
  </div>
</template>

<script setup lang="ts">
const fields = ["Nom", "Parent", "Type", "CPU", "RAM", ""]

defineProps({
  items: {type: Array<Object>, required: true}
})

const deleteTemplateModal = ref()
const buildTemplateModal = ref()

const searchResult = ref([])
</script>