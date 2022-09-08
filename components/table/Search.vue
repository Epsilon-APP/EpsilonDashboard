<template>
  <div>
    <InputTextIcon v-model="search" placeholder="Rechercher" icon="Search" :size="20"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {type: Array<Object>, required: true}
})

const emit = defineEmits(['update:modelValue'])

const search = ref('')
update()

function update() {
  const keyword = search.value.toLowerCase();

  emit('update:modelValue', props.items.filter(item => {
    let result = false

    if (typeof item === 'string') {
      result = item.toLowerCase().includes(keyword)
    }else {
      Object.keys(item)
        .forEach(key => {
          result ||= item[key].toString().toLowerCase().includes(keyword)
        })
    }

    return result
  }))
}

watch(search, update)
watch(() => props.items, update)
</script>