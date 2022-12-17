import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoute = ({ children}) => {
    const { user } = useContext(AuthContext);

    const { pathname,search} = useLocation()
    localStorage.setItem('path', pathname+search)

  return (user)
    ? children
    : <Navigate to='/login' />
}
