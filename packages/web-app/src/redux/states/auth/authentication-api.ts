import { User } from '@/models'
import { RootState } from '@/redux'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface LoginRequest {
  email: string
  password: string
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://feline-breezy-ulna.glitch.me/api/',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const user = (getState() as RootState).auth.user
      if (user != null) {
        headers.set('session', user.session)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation<User, LoginRequest>({
      query: (credentials) => ({
        url: 'sessions',
        method: 'POST',
        body: credentials
      })
    }),
    getUser: builder.query<User, string | void>({
      query (email) {
        return `/user/${email}`
      }
    })
  })
})

export const { useLoginMutation, useGetUserQuery } = authApi
