<template>
  <section class="space-y-6 max-w-2xl">
    <h1 class="text-2xl font-bold">Gestión de perfil</h1>
    <ProfileForm class="mb-4" />
    <ChangePassword class="mb-4" />
    <CredentialCard />
  </section>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })
useHead({ title: 'Perfil — Kortexa' })
</script>
