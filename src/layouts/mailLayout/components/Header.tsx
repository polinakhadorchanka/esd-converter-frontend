import React from 'react';
import { Logo } from '@components/index';
import ModeChanger from '@layouts/mailLayout/components/ModeChanger';

const Header = () => {
  return (
    <header className={'p-4'}>
      <div className={'container mx-auto flex flex-row justify-between items-center'}>
        <Logo />
        <ModeChanger />
      </div>
    </header>
  );
};

export default Header;
