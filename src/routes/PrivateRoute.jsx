import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../Context/UserContext';

const PrivateRoute = ({ allowedRoles }) => {
  const { user, loading } = useContext(UserContext)

  if(loading){
    return <div>Loading...</div>; // Show loading indicator
  }

  if(!user){
    return <Navigate to="/" replace />
  }

  if(!allowedRoles.includes(user.role)){
    return <Navigate to="/" replace /> 
  }

  return <Outlet />
}

export default PrivateRoute