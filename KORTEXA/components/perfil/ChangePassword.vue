<template>
  <form class="space-y-3" @submit.prevent="change">
    <BaseInput v-model="oldPwd" type="password" label="Contraseña actual" required />
    <BaseInput v-model="newPwd" type="password" label="Nueva contraseña" required />
    <BaseInput v-model="repPwd" type="password" label="Repetir contraseña" required />
    <BaseButton type="submit">Cambiar contraseña</BaseButton>
  </form>
</template>

<script setup lang="ts">
const oldPwd = ref('')
const newPwd = ref('')
const repPwd = ref('')
function change () {
  if (newPwd.value !== repPwd.value) return alert('Las contraseñas no coinciden')
  alert('Cambio de contraseña (conectar backend)')
}
</script>
