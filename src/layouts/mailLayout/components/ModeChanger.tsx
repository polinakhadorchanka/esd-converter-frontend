import React, { useEffect, useState } from 'react';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

const ModeChanger = () => {
  const [theme, setTheme] = useState<null | 'light' | 'dark'>(null);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme) {
      if (theme === 'dark') {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  return (
    <div
      className={'cursor-pointer'}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}>
      {theme === 'light' ? (
        <MdDarkMode className={'w-7 h-7 text-sky-600'} />
      ) : (
        <MdLightMode className={'w-7 h-7 text-sky-200'} />
      )}
    </div>
  );
};

export default ModeChanger;
