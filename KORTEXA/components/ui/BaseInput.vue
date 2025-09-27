<template>
  <label class="block">
    <span v-if="label" class="block text-sm mb-1">{{ label }}</span>
    <input
      v-bind="$attrs"
      v-model="model"
      class="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-secondary/50"
    />
  </label>
</template>

<script setup lang="ts">
const model = defineModel<string | number>()
defineProps<{ label?: string }>()
</script>
