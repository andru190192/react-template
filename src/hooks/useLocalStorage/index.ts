import { useCallback, useState } from 'react';

export default function useLocalStorage() {
  const [value, setValue] = useState<string | null>(null);

  const setItem = useCallback(
    (key: string, value: string) => {
      localStorage.setItem(key, value);
      setValue(value);
    },
    [setValue],
  );

  const getItem = useCallback(
    (key: string) => {
      const value = localStorage.getItem(key);
      setValue(value);
      return value;
    },
    [setValue],
  );

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
}
