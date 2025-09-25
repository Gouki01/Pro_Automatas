export default defineNuxtRouteMiddleware((to) => {
  const { token } = useAuth()
  const protectedRoutes = ['/dashboard', '/perfil', '/admin']
  if (protectedRoutes.includes(to.path) && !token.value) {
    return navigateTo('/login')
  }
})
