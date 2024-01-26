import React from 'react';
import { Outlet } from 'react-router-dom';
import useUserContext from '../hooks/userContextHook';

const ProtectedRoutes = () => {
  const { loading } = useUserContext();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return <Outlet />;
};

export default ProtectedRoutes;