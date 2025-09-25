<template>
  <div class="min-h-screen grid grid-cols-[240px_1fr]">
    <aside class="border-r p-6 space-y-4">
      <div class="font-semibold">Panel Admin</div>
      <nav class="flex flex-col gap-2 text-sm">
        <NuxtLink to="/admin">Inicio</NuxtLink>
        <NuxtLink to="/admin#users">Usuarios</NuxtLink>
        <NuxtLink to="/admin#settings">Parámetros</NuxtLink>
      </nav>
    </aside>
    <main class="p-8">
      <slot />
    </main>
  </div>
</template>
