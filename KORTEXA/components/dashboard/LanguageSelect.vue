<template>
  <div class="space-y-2">
    <div class="text-sm">Idioma del texto</div>
    <select class="border rounded-lg px-3 py-2" v-model="model">
      <option value="es">Español</option>
      <option value="en">Inglés</option>
      <option value="ru">Ruso</option>
      <option value="zh">Chino</option>
      <option value="ar">Árabe</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<'es'|'en'|'ru'|'zh'|'ar'>({ required: true })
</script>
