<template>
  <div class="space-y-3">
    <div class="rounded-xl border p-3">
      <div class="text-sm mb-2">Fotografía</div>
      <input type="file" accept="image/*" @change="onPick" />
      <div v-if="preview" class="mt-3">
        <img :src="preview" alt="preview" class="rounded-xl max-h-48" />
      </div>
    </div>
    <div class="grid grid-cols-3 gap-2">
      <BaseButton @click="apply('bw')">Blanco y negro</BaseButton>
      <BaseButton @click="apply('warm')">Cálido</BaseButton>
      <BaseButton @click="apply('cool')">Frío</BaseButton>
    </div>
    <div class="flex justify-between">
      <BaseButton variant="secondary" @click="$emit('prev')">Atrás</BaseButton>
      <BaseButton @click="$emit('next')">Siguiente</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const preview = ref<string | null>(null)
function onPick (e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  preview.value = URL.createObjectURL(file)
}
function apply (filter: string) {
  alert('Aplicar filtro: ' + filter + ' (por implementar)')
}
</script>
