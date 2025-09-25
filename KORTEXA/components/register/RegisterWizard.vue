<template>
  <div class="space-y-4">
    <component :is="steps[current]" @next="next" @prev="prev" @done="done" />
    <div class="flex justify-between text-sm text-slate-600">
      <span>Paso {{ current + 1 }} de {{ steps.length }}</span>
      <span>{{ labels[current] }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegisterStep1 from './RegisterStep1.vue'
import RegisterStep2 from './RegisterStep2.vue'
import RegisterStep3 from './RegisterStep3.vue'
import CredentialPreview from './CredentialPreview.vue'

const steps = [RegisterStep1, RegisterStep2, RegisterStep3, CredentialPreview]
const labels = ['Datos', 'Foto y filtros', 'Notificaciones', 'Credencial']
const current = ref(0)

function next () { if (current.value < steps.length - 1) current.value++ }
function prev () { if (current.value > 0) current.value-- }
function done () { alert('Registro completado (conectar backend)') }
</script>
