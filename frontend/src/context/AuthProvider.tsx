import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AuthProviderProps {
  children: (props: { isAuth: boolean }) => React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isUsRoute = location.pathname.includes('/dashboard');
    setIsAuth(isUsRoute);
  }, [location.pathname]);

  return <>{children({ isAuth })}</>;
};

export default AuthProvider;
