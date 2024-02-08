import { useCallback } from 'react';
import { useNavigate, NavigateOptions } from 'react-router-dom';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const customNavigate = useCallback(
    (route: string, options: NavigateOptions = {}) => {
      navigate(route, options);
    },
    [navigate],
  );

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return {
    navigate: customNavigate,
    goBack,
  };
};

export default useCustomNavigate;
