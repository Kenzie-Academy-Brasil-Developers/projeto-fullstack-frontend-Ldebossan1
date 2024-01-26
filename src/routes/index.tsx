import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import ProtectedRoutes from './protectedRoutes';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;