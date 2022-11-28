import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'

/* Component to check in cookies if the user is logged in or not
and avoid to see the children routes if it's logged in */
function UnprotectedRoute({ children, redirectPath = '/' }) {
  const cookies = new Cookies()
  const token = cookies.get('TokenCookie')
  if (token) {
    return <Navigate to={redirectPath} replace />
  }
  return children || <Outlet />
}

export default UnprotectedRoute
