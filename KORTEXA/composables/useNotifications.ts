export function useNotifications() {
  async function sendEmail(to: string, subject: string, html: string) {
    // TODO: llamar backend para enviar correo
    console.log('sendEmail', { to, subject })
  }
  return { sendEmail }
}
