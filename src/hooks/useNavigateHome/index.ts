import { TRoutes, routesPaths } from 'config/router/routes';
import useCustomNavigate from 'hooks/useCustomNavigate';
import { useCallback, useState } from 'react';
import { useLocation } from 'react-router';

//  Hook will become useful and robust once privileges are implemented
const useNavigateHome = () => {
  const [homeRoute] = useState<TRoutes>(routesPaths.private.SEARCH);
  const { navigate } = useCustomNavigate();
  const location = useLocation();

  const navigateHome = useCallback(() => {
    if ((location?.pathname as TRoutes) === homeRoute) return;
    navigate(homeRoute);
  }, [navigate, homeRoute, location?.pathname]);

  return { navigateHome };
};

export default useNavigateHome;
