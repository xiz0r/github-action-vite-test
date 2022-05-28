import {
  MiddlewareAPI,
  isRejectedWithValue,
  Middleware
} from '@reduxjs/toolkit'
import { showNotification } from '../states/notification/notification.slice'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
      if (isRejectedWithValue(action)) {
        api.dispatch(showNotification({ message: `Error: ${action.payload.originalStatus}`, type: 'error' }))
      }

      return next(action)
    }
