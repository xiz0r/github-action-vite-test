import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './states/counter/counter-slice'
import authReducer from './states/auth/authentication-slice'
import { authApi } from './states/auth/authentication-api'
import notificationReducer from './states/notification/notification.slice'
import { rtkQueryErrorLogger } from './middlewares/error.middleware'

export const AppStore = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    notification: notificationReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, rtkQueryErrorLogger])
})

export type AppDispatch = typeof AppStore.dispatch
export type RootState = ReturnType<typeof AppStore.getState>
