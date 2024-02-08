import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import Navbar from 'components/layouts/Navbar';

import './styles.scss';

const PrivateRoute = () => {
  const { isLogged, logout } = useAuth();
  //  TODO: handle scenarios for has to set initial password

  useEffect(() => {
    if (isLogged) return;
    logout();
  }, [isLogged, logout]);

  if (!isLogged) return null;

  return (
    <Box className='private-routes-main-container'>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default PrivateRoute;
