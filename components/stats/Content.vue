<template>
  <div class="xl:pb-7">
    <div class="xl:h-36 bg-white rounded-xl shadow xl:mb-10">
      <div class="xl:relative flex flex-col xl:flex-row justify-around items-center xl:top-9 py-3">
        <StatsCard class="my-4 xl:my-0 bg-gradient-to-tr from-purple-700 to-purple-400" :icon="icons[0]" :number="numbers[0]">
          {{ titles[0] }}
        </StatsCard>
        <StatsCard class="my-4 xl:my-0 bg-gradient-to-tr from-green-700 to-green-400" :icon="icons[1]" :number="numbers[1]">
          {{ titles[1] }}
        </StatsCard>
        <StatsCard class="my-4 xl:my-0 bg-gradient-to-tr from-red-700 to-red-400" :icon="icons[2]" :number="numbers[2]">
          {{ titles[2] }}
        </StatsCard>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script setup lang="ts">
defineProps({
  titles: {type: Array<String>, required: true},
  icons: {type: Array<String>, required: true},
  numbers: {type: Array<Number>, required: true}
})
</script>
