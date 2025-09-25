<template>
  <div class="p-4 rounded-xl border">
    <div class="font-semibold mb-2">Reconocimiento facial</div>
    <p class="text-sm text-slate-600">Usa tu cámara para validar tu rostro.</p>
    <BaseButton class="mt-3 w-full" @click="start">Validar rostro</BaseButton>
  </div>
</template>

<script setup lang="ts">
function start () {
  // TODO: Integración con API de reconocimiento facial
  alert('Reconocimiento facial (por implementar).')
}
</script>
