<template>
  <section class="grid md:grid-cols-2 gap-10 items-center">
    <div class="space-y-5">
      <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
        Analiza textos con precisión <span class="text-secondary">en segundos</span>.
      </h1>
      <p class="text-slate-600">
        Carga un archivo <code>.txt</code>, selecciona el idioma y obtén métricas detalladas:
        frecuencias, pronombres, nombres propios, sustantivos, verbos y más.
      </p>
      <div class="flex gap-3">
        <NuxtLink to="/login" class="px-5 py-3 rounded-xl bg-secondary text-white font-semibold">Iniciar sesión</NuxtLink>
        <NuxtLink to="/register" class="px-5 py-3 rounded-xl border font-semibold">Registrarse</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/dashboard" class="text-sm">Ver demo del panel →</NuxtLink>
      </div>
    </div>
    <div class="rounded-2xl border p-6">
      <LandingHero />
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({ title: 'Inicio — Kortexa' })
</script>
