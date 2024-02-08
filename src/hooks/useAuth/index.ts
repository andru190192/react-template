import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import useUser from 'hooks/useUser';
import { User } from 'hooks/useUser/interface';
import { useLogin, useLogout } from 'services/auth/mutations';
import useCustomNavigate from 'hooks/useCustomNavigate';
import { routesPaths } from 'config/router/routes';
import useNavigateHome from 'hooks/useNavigateHome';

//  TODO: handle logout/login error + loading states
export const useAuth = () => {
  const { navigate } = useCustomNavigate();
  const { navigateHome } = useNavigateHome();
  const { user, setUser, removeUser } = useUser();
  const queryClient = useQueryClient();

  //  Login mutation
  const loginHook = useLogin();
  const login = { ...loginHook, authenticate: loginHook.mutate };

  //  Logout mutation
  const { mutate: logout, isSuccess: logoutSuccess } = useLogout();

  useEffect(() => {
    if (login.data) {
      setUser(login.data?.data as User);
      navigateHome();
    }
  }, [setUser, navigateHome, login.data]);

  useEffect(() => {
    if (!logoutSuccess) return;
    removeUser();
    navigate(routesPaths?.public?.AUTH);
    queryClient.clear();
  }, [logoutSuccess, queryClient, navigate, removeUser]);

  return {
    user,
    login,
    isLogged: !!user?.token,
    logout,
  };
};
