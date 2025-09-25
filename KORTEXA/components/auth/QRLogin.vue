<template>
  <div class="p-4 rounded-xl border">
    <div class="font-semibold mb-2">Acceso con QR</div>
    <p class="text-sm text-slate-600">Escanea tu credencial (QR) para iniciar sesión.</p>
    <BaseButton class="mt-3 w-full" @click="scan">Escanear QR</BaseButton>
  </div>
</template>

<script setup lang="ts">
function scan () {
  // TODO: Integrar lector de QR
  alert('Escaneo QR (por implementar).')
}
</script>
