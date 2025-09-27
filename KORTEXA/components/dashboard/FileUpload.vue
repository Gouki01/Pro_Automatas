<template>
  <div class="rounded-xl border p-4">
    <div class="text-sm mb-2">Subir archivo .txt</div>
    <input type="file" accept=".txt" @change="onPick" />
    <p v-if="fileName" class="mt-2 text-sm text-slate-600">Seleccionado: {{ fileName }}</p>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'selected', file: File): void }>()
const fileName = ref('')
function onPick (e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  fileName.value = file.name
  emit('selected', file)
}
</script>
