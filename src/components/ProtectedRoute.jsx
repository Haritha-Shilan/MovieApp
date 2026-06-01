import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


function ProtectedRoute() {
    const {isAuthenticated}= useContext(AuthContext);
  return (
    <div>{isAuthenticated? <Outlet/> : <Navigate to="/login"/>}</div>
  )
}

export default ProtectedRoute