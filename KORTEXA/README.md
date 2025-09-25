# Kortexa — Analizador Léxico (Nuxt + TS + Tailwind)

## Requisitos
- Node.js 18+ (recomendado 20 LTS)
- npm 9+

## Instalación
```bash
npm ci     # o npm install
```

## Desarrollo
```bash
npm run dev
```

Visita http://localhost:3000

## Scripts
- `dev` — ejecutar en desarrollo
- `build` — compilar para producción
- `preview` — previsualizar compilado
- `generate` — generar sitio estático

## Configuración
- Edita `nuxt.config.ts` (API base, head, módulos).
- Colores (regla 60-30-10): `tailwind.config.ts`.
- CSS global: `assets/css/main.css`.

## Conectar Backend (.NET Core 8)
- Configura `runtimeConfig.public.apiBase` en `nuxt.config.ts`.
- Implementa llamadas reales en `useAuth.ts`, `useAnalysis.ts`, etc.

## Seguridad y roles
- `middleware/auth.global.ts` protege `/dashboard`, `/perfil`, `/admin`.
- `middleware/admin.ts` restringe acceso a Admin.

## Estructura de rutas
- `/` landing
- `/login` inicio de sesión
- `/register` registro (wizard)
- `/dashboard` panel de análisis
- `/perfil` gestión de perfil
- `/admin` panel administrativo

## Docker (opcional rápido)
```Dockerfile
# syntax=docker/dockerfile:1
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:20-alpine
WORKDIR /app
ENV NITRO_PORT=3000
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```
