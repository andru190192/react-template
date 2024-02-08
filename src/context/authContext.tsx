import { ReactNode, useMemo, useState } from 'react';
import { createContext } from 'react';
import { User } from 'hooks/useUser/interface';
import useLocalStorage from 'hooks/useLocalStorage';
import { EmptyFunction } from 'utils/common';

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: EmptyFunction,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { getItem } = useLocalStorage();
  const localStorageUser = useMemo(() => getItem('user') || null, [getItem]);

  const [user, setUser] = useState<User | null>(
    localStorageUser ? (JSON.parse(localStorageUser) as User) : null,
  );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
