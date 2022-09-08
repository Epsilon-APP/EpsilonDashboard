<template>
  <div>
    <div v-if="success" class="alert alert-success shadow-lg mb-2">
      <div>
        <Icon name="Check" :size="25"/>
        <span>
          <slot></slot>
        </span>
      </div>
    </div>
    <div v-else class="alert alert-error shadow-lg mb-2">
      <div>
        <Icon name="AlertCircle" :size="25"/>
        <span>
          <slot></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  success: { type: Boolean, required: true }
})
</script>