import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../store/authStore'; 

export const ProtectedRoute = ({ redirectTo }) => {
  const { isAuth, loading } = useAuthStore();

  if (loading) {
    return null; 
  }

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} replace />;
};
