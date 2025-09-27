<template>
  <form class="space-y-3" @submit.prevent="submit">
    <BaseInput v-model="email" type="email" label="Correo electrónico" required />
    <BaseInput v-model="password" type="password" label="Contraseña" required />
    <div class="flex items-center justify-between text-sm">
      <label class="inline-flex items-center gap-2">
        <input type="checkbox" v-model="remember" class="accent-secondary" />
        Recordarme
      </label>
      <NuxtLink to="/reset">¿Olvidaste tu contraseña?</NuxtLink>
    </div>
    <BaseButton type="submit" class="w-full">Entrar</BaseButton>
  </form>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const remember = ref(true)
const { login } = useAuth()

async function submit () {
  const ok = await login(email.value, password.value)
  if (!ok) alert('Credenciales inválidas')
}
</script>
