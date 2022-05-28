import { AppStore } from './redux'
import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { AppContainer } from './styled-components'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { green } from '@mui/material/colors'
import { PrivateRouteGuard } from './components'
import NotificationToast from './components/NotificationToast'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: green[500],
      contrastText: '#fff'
    }
  }
})

// Routes
const Home = lazy(async () => await import('@/pages/home/Home'))
const Login = lazy(async () => await import('@/pages/login/Login'))
const Register = lazy(async () => await import('@/pages/register/Register'))
const ResetPassword = lazy(async () => await import('@/pages/reset-password/ResetPassword'))

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Suspense fallback={<div>Loading ...</div>}>
            <Provider store={AppStore}>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<PrivateRouteGuard />}>
                    <Route path='/' element={<Home />} />
                  </Route>
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/forgot-password' element={<ResetPassword />} />
                </Routes>
              </BrowserRouter>
              <NotificationToast />
            </Provider>
          </Suspense>
        </AppContainer>
      </ThemeProvider>
    </>
  )
}

export default App
