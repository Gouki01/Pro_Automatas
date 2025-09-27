<template>
  <NuxtLayout name="admin">
    <h1 class="text-2xl font-bold mb-6">Panel de administración</h1>
    <div class="grid lg:grid-cols-2 gap-6">
      <UserTable id="users" />
      <SystemSettings id="settings" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['auth', 'admin'] })
useHead({ title: 'Admin — Kortexa' })
</script>
