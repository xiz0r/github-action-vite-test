import { User } from '@/models'
import { authApi } from '@/redux'
import { createSlice } from '@reduxjs/toolkit'

interface AuhtState {
  isLoggedIn: boolean
  user?: User
}

export const AuhtEmptyState: AuhtState = {
  isLoggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: AuhtEmptyState,
  reducers: {
    logoutUser: () => AuhtEmptyState
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.isLoggedIn = true
        state.user = payload
      }
    )
  }
})

export const { logoutUser } = authSlice.actions

export default authSlice.reducer
