// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Analizador Léxico — Kortexa',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Analizador Léxico por Kortexa' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
    typeCheck: false
  },
  runtimeConfig: {
    jwtSecret: '',
    public: {
      apiBase: 'http://localhost:5000/api' // TODO: apunta a tu backend .NET
    }
  },
  nitro: {
    // Si más adelante agregas server routes, quedará listo
  }
})
