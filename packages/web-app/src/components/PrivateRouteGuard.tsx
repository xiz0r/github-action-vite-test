import { useAppSelector } from '@/redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRouteGuard = () => {
  const location = useLocation()
  const isLogged = useAppSelector((state) => state.auth.isLoggedIn)
  return isLogged
    ? <Outlet />
    : <Navigate
        replace
        state={{ from: location }}
        to='login'
      />
}

export default PrivateRouteGuard
