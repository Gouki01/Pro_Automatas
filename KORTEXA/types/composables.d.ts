declare global {
  const useAuth: typeof import('@/composables/useAuth')['useAuth']
  const useAnalysis: typeof import('@/composables/useAnalysis')['useAnalysis']
  const useUser: typeof import('@/composables/useUser')['useUser']
  const useNotifications: typeof import('@/composables/useNotifications')['useNotifications']
}

export {}
