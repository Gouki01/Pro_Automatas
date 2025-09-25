<template>
  <div class="space-y-3">
    <div class="text-sm">Método de notificación</div>
    <label class="inline-flex items-center gap-2">
      <input type="checkbox" v-model="email" class="accent-secondary"> Email
    </label>
    <label class="inline-flex items-center gap-2">
      <input type="checkbox" v-model="whatsapp" class="accent-secondary"> WhatsApp
    </label>
    <div class="flex justify-between">
      <BaseButton variant="secondary" @click="$emit('prev')">Atrás</BaseButton>
      <BaseButton @click="$emit('next')">Siguiente</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref(true)
const whatsapp = ref(false)
</script>
