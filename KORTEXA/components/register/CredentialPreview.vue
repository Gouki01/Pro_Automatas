<template>
  <div class="space-y-4">
    <div class="rounded-2xl border p-4">
      <div class="text-sm text-slate-600 mb-2">Vista previa credencial</div>
      <div class="flex items-center gap-4">
        <div class="w-20 h-20 bg-slate-200 rounded-xl grid place-items-center">Foto</div>
        <div class="text-sm">
          <div class="font-semibold">Kortexa — Analizador Léxico</div>
          <div>ID: 000123</div>
          <div>QR: (pendiente)</div>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <BaseButton variant="secondary" @click="$emit('prev')">Atrás</BaseButton>
      <BaseButton @click="$emit('done')">Finalizar registro</BaseButton>
    </div>
  </div>
</template>
