import { useCallback, useContext } from 'react';
import { AuthContext } from 'context/authContext';
import useLocalStorage from 'hooks/useLocalStorage';
import { User } from 'hooks/useUser/interface';

export default function useUser() {
  const { user, setUser: _setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const setUser = (user: User | null) => {
    if (!user) return removeUser();
    _setUser(user);
    setItem('user', JSON.stringify(user));
  };

  const removeUser = useCallback(() => {
    _setUser(null);
    setItem('user', '');
  }, [_setUser, setItem]);

  return { user, setUser, removeUser };
}
