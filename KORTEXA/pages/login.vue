<template>
  <NuxtLayout name="auth">
    <h1 class="text-2xl font-semibold mb-4">Iniciar sesión</h1>
    <LoginForm class="mb-4" />
    <div class="grid grid-cols-2 gap-3">
      <QRLogin />
      <FaceRecognition />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({ title: 'Login — Kortexa' })
</script>
