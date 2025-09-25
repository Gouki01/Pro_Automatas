<template>
  <div class="rounded-xl border p-4">
    <div class="text-lg font-semibold mb-3">Resultados</div>
    <div class="grid md:grid-cols-2 gap-4 text-sm">
      <div class="rounded-lg border p-3">
        <div class="font-medium">Totales</div>
        <ul class="mt-2 list-disc pl-5">
          <li>Palabras: {{ data?.totals?.words ?? 0 }}</li>
          <li>Únicas: {{ data?.totals?.unique ?? 0 }}</li>
        </ul>
      </div>
      <div class="rounded-lg border p-3">
        <div class="font-medium">Más frecuentes</div>
        <ul class="mt-2 list-disc pl-5">
          <li v-for="(w, i) in (data?.top ?? [])" :key="i">{{ w[0] }} — {{ w[1] }}</li>
        </ul>
      </div>
      <div class="rounded-lg border p-3 md:col-span-2">
        <div class="font-medium">Clasificaciones (ejemplo)</div>
        <div class="mt-2 grid md:grid-cols-3 gap-3">
          <div>Pronombres: {{ data?.classes?.pronouns?.length ?? 0 }}</div>
          <div>Nombres propios: {{ data?.classes?.names?.length ?? 0 }}</div>
          <div>Verbos (raíz): {{ data?.classes?.verbs?.length ?? 0 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: any }>()
</script>
