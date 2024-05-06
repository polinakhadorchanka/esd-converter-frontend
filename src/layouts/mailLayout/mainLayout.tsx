import React, { FC, PropsWithChildren } from 'react';
import Header from '@layouts/mailLayout/components/Header';
import Footer from '@layouts/mailLayout/components/Footer';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={
        'flex flex-col w-full min-h-screen ' +
        'text-sm bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50'
      }>
      <Header />
      <div className={'px-4 flex flex-col grow'}>
        <div className={'container mx-auto'}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
