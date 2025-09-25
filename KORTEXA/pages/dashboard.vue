<template>
  <section class="space-y-6">
    <h1 class="text-2xl font-bold">Panel de análisis</h1>
    <p class="text-slate-600">Bienvenido, aquí puedes subir tu archivo y procesarlo.</p>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="md:col-span-2 space-y-4">
        <FileUpload @selected="file = $event" />
        <LanguageSelect v-model="language" />
        <div class="flex gap-3">
          <button class="px-4 py-2 rounded bg-secondary text-white font-semibold" @click="process" :disabled="!file">Procesar</button>
          <ReportButton :disabled="!results" @generate="generateReport" />
        </div>
      </div>
      <div class="md:col-span-1">
        <div class="rounded-xl border p-4 text-sm">
          <p><strong>Consejo:</strong> Usa archivos .txt sin formato especial.</p>
        </div>
      </div>
    </div>

    <AnalysisResults v-if="results" :data="results" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const language = ref<'es'|'en'|'ru'|'zh'|'ar'>('es')
const file = ref<File | null>(null)
const results = ref<any | null>(null)

const { analyze } = useAnalysis()
const { token } = useAuth()

async function process () {
  if (!file.value) return
  const { data, error } = await analyze(file.value, language.value, token.value)
  if (!error.value) results.value = data.value
}

function generateReport () {
  // TODO: llamar a endpoint backend para generar PDF
  alert('Generación de reporte (por implementar).')
}
useHead({ title: 'Dashboard — Kortexa' })
</script>
