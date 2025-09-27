<template>
  <div class="rounded-xl border p-4">
    <div class="font-semibold mb-3">Usuarios</div>
    <table class="w-full text-sm">
      <thead class="text-left">
        <tr>
          <th class="py-2">Email</th>
        <th>Rol</th>
        <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in users" :key="u.email" class="border-t">
          <td class="py-2">{{ u.email }}</td>
          <td>{{ u.role }}</td>
          <td><span :class="u.active ? 'text-green-600' : 'text-red-600'">{{ u.active ? 'Activo' : 'Suspendido' }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const users = ref([
  { email: 'demo@kor', role: 'ANALISTA', active: true },
  { email: 'admin@kor', role: 'ADMIN', active: true }
] as any)
</script>
