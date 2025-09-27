<template>
  <form class="space-y-3" @submit.prevent="save">
    <BaseInput v-model="user.email" type="email" label="Correo" />
    <BaseInput v-model="user.phone" label="Teléfono" />
    <BaseInput v-model="user.nickname" label="Nickname" />
    <div class="flex items-center gap-3">
      <img :src="user.photo || '/favicon.png'" class="w-16 h-16 rounded-xl border" alt="foto" />
      <input type="file" accept="image/*" />
    </div>
    <BaseButton type="submit">Guardar cambios</BaseButton>
  </form>
</template>

<script setup lang="ts">
const { user } = useUser()
function save () { alert('Guardar perfil (conectar backend)') }
</script>
