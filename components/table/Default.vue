<template>
  <div>
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        <thead>
          <tr>
            <td v-for="field in fields">{{ field }}</td>
          </tr>
        </thead>
        <tbody>
          <slot v-for="item in itemsResult" :item="item"></slot>
        </tbody>    
      </table>
    </div>
    <div class="flex justify-center mt-5">
      <TableNav v-model="itemsResult" :items="items"/>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  fields: {type: Array<String>, required: true},
  items: {type: Array<Object>, required: true}
})

const itemsResult = ref([])
</script>