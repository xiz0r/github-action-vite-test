import axios from 'axios'
import { AxiosCall, User } from '@/models'
import { loadAbort } from '@/utilities'

export const creteSesion = (user: any): AxiosCall<User> => {
  const controller = loadAbort()
  return {
    call: axios.post<User>('https://feline-breezy-ulna.glitch.me/api/sessions', user, { signal: controller.signal }),
    controller
  }
}

export const getUsers = (): AxiosCall<User> => {
  const controller = loadAbort()
  return { call: axios.get<User>('https://feline-breezy-ulna.glitch.me/api/user', { signal: controller.signal }), controller }
}
