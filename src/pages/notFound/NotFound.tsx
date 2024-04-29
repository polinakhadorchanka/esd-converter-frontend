import React from 'react';
import { MainLayout } from '@layouts/index';

const NotFound = () => {
  return (
    <MainLayout>
      <div className={'mt-10 flex flex-row justify-center items-center gap-4'}>
        <p className={'text-lg text-gray-800 uppercase'}>--- Page not found ---</p>
      </div>
    </MainLayout>
  );
};

export default NotFound;
