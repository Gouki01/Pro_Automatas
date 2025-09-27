/// <reference types="nuxt" />

declare global {
  const definePageMeta: (meta: Record<string, any>) => void
  const useHead: (meta: Record<string, any>) => void
  const useRoute: () => any
  const useRouter: () => any
  const useState: <T>(key: string, init?: () => T) => { value: T }
  const useRuntimeConfig: () => any
  const navigateTo: (path: string) => Promise<void> | void
  const defineNuxtRouteMiddleware: (fn: (to: any, from: any) => void) => void
}

export {}
