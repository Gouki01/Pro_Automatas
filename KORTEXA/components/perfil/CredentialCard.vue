<template>
  <div class="rounded-2xl border p-4 grid md:grid-cols-[120px_1fr] gap-4">
    <div class="w-[120px] h-[120px] rounded-xl bg-slate-200 grid place-items-center">Foto</div>
    <div class="text-sm">
      <div class="font-semibold">Kortexa — Analizador Léxico</div>
      <div>Usuario: {{ user.nickname || 'demo' }}</div>
      <div class="mt-2">QR: (pendiente)</div>
      <div class="mt-3">
        <BaseButton @click="download">Descargar PDF</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user } = useUser()
function download () { alert('Descarga de credencial PDF (conectar backend)') }
</script>
