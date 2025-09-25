export function useAuth() {
  const token = useState<string | null>('token', () => null)
  const role = useState<string>('role', () => 'ANALISTA')

  async function login(email: string, password: string) {
    // TODO: llama a tu backend .NET Core para autenticar
    if (email && password) {
      token.value = 'demo-token'
      return true
    }
    return false
  }
  function logout() { token.value = null }
  return { token, role, login, logout }
}
