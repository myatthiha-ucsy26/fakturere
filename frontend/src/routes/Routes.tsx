// react
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// components
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

// lazy loading
const Terms = lazy(() => import('../pages/terms/Terms'));
const Us = lazy(() => import('../pages/us/Us'));
const PriceList = lazy(() => import('../pages/pricelist/PriceList'));

const Routers: React.FC = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/' element={<Navigate replace to='/login' />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/us' element={<Us />} />
          <Route path='/dashboard/pricelist' element={<PriceList />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Routers;