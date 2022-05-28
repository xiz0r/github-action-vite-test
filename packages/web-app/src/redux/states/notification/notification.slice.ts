import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NotificationState {
  open: boolean
  message?: string
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
}

interface NotificationPayload {
  message?: string
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
}

const initialState: NotificationState = {
  open: false
}

export const NotificationSlice = createSlice({
  name: 'notification',
  initialState: initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<NotificationPayload>) => {
      state.open = true
      state.message = action.payload.message
      state.duration = action.payload.duration
      state.type = action.payload.type
    },
    closeNotification: (state) => {
      state.open = false
    }

  }
  //   extraReducers: {
  //     [extraAction]: (state, action) => {
  //       state.alerts.push({ message: action.error.message, type: "error" });
  //     }
  //   }
})

export const { showNotification, closeNotification } = NotificationSlice.actions
export default NotificationSlice.reducer
