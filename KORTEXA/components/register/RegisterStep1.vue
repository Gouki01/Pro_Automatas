<template>
  <div class="space-y-3">
    <BaseInput v-model="form.email" type="email" label="Correo" required />
    <BaseInput v-model="form.phone" type="tel" label="Teléfono" required />
    <BaseInput v-model="form.birth" type="date" label="Fecha de nacimiento" required />
    <BaseInput v-model="form.nickname" label="Nickname" required />
    <BaseInput v-model="form.password" type="password" label="Contraseña" required />
    <div class="flex justify-between">
      <div />
      <BaseButton @click="$emit('next')">Siguiente</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({ email:'', phone:'', birth:'', nickname:'', password:'' })
</script>
