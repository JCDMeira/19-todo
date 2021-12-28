import { useState } from 'react';

export const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const saveSetTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  const toggleTheme = (): void => {
    theme === 'light' ? saveSetTheme('dark') : saveSetTheme('light');
  };

  return [theme, toggleTheme];
};
