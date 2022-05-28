import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { closeNotification, useAppDispatch, useAppSelector } from '@/redux'

const DEFAULT_NOTIFICATION_DURATION = 5000

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert (
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const NotificationToast = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.notification)
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(closeNotification())
  }

  return (
    <Snackbar
      open={state.open}
      autoHideDuration={state.duration || DEFAULT_NOTIFICATION_DURATION}
      key={Date.now()}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={state.type}
      >
        {state.message}
      </Alert>
    </Snackbar>
  )
}

export default NotificationToast
