import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // 60-30-10 palette example (you can customize in UI later)
        primary: '#0F172A',   // 60% Dominante (Slate-900)
        secondary: '#38BDF8', // 30% Secundario (Sky-400)
        accent: '#F59E0B'     // 10% Acento (Amber-500)
      }
    }
  },
  plugins: []
} satisfies Config
