import { User } from '@/models'

export const createUserAdapter = (user: any): User => ({
  name: user.data.name,
  email: user.data.email,
  session: user.data.session,
  device: user.data.device
})
