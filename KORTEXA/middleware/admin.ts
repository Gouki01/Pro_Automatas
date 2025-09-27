export default defineNuxtRouteMiddleware(() => {
  const { role } = useAuth()
  if (role.value !== 'ADMIN') {
    return abortNavigation()
  }
})
