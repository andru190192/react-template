import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useNavigateHome from 'hooks/useNavigateHome';

const PublicRoute = () => {
  const { isLogged } = useAuth();
  const { navigateHome } = useNavigateHome();

  useEffect(() => {
    if (!isLogged) return;
    navigateHome();
  }, [isLogged, navigateHome]);

  return isLogged ? null : <Outlet />;
};

export default PublicRoute;
