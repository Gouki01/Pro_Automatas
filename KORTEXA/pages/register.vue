<template>
  <NuxtLayout name="auth">
    <h1 class="text-2xl font-semibold mb-4">Registro de usuario</h1>
    <RegisterWizard />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({ title: 'Registro — Kortexa' })
</script>
