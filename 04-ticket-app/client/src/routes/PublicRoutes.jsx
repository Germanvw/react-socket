import { Outlet, Navigate } from 'react-router-dom';

export const PublicRoutes = ({ user }) => {
  return user !== null ? <Navigate to='/' /> : <Outlet />;
};
