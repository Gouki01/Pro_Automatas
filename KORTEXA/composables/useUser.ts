export function useUser() {
  const user = useState<any>('user', () => ({
    email: '',
    phone: '',
    nickname: '',
    photo: ''
  }))
  return { user }
}
