<template>
  <div class="min-h-screen flex flex-col bg-white">
    <header class="border-b">
      <div class="container py-4 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2 font-semibold">
          <img src="/favicon.png" alt="Kortexa" class="w-6 h-6" />
          <span>{{ brand.product }} — {{ brand.name }}</span>
        </NuxtLink>
        <nav class="flex gap-4 text-sm">
          <NuxtLink to="/login">Iniciar sesión</NuxtLink>
          <NuxtLink to="/register">Registrarse</NuxtLink>
          <NuxtLink to="/dashboard">Dashboard</NuxtLink>
          <NuxtLink to="/perfil">Perfil</NuxtLink>
          <NuxtLink to="/admin">Admin</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <div class="container py-8">
        <slot />
      </div>
    </main>

    <footer class="border-t">
      <div class="container py-6 text-sm text-slate-500">
        © {{ new Date().getFullYear() }} {{ brand.name }}. Todos los derechos reservados.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const brand = useAppConfig().brand
</script>
