<template>
  <button :disabled="disabled" class="px-4 py-2 rounded border font-semibold disabled:opacity-50" @click="$emit('generate')">
    Generar reporte PDF
  </button>
</template>

<script setup lang="ts">
defineProps<{ disabled?: boolean }>()
</script>
