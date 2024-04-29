import React, { useEffect } from 'react';
import { MainLayout } from '@layouts/index';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';

const Home = () => {
  const { clearFilesStore } = useActions();

  useEffect(() => {
    clearFilesStore();
  }, []);

  return (
    <MainLayout>
      <ul className={'flex flex-col gap-0.5 divide-y'}>
        <li className={'py-1'}>
          <Link to={'/verify-eds'} className={'hover:text-sky-600 dark:hover:text-sky-200'}>
            Verify EDS
          </Link>
        </li>

        <li className={'py-1'}>
          <Link to={'/doc-to-esd'} className={'hover:text-sky-600 dark:hover:text-sky-200'}>
            Convert files to ESD
          </Link>
        </li>

        <li className={'py-1'}>
          <Link to={'/esd-to-doc'} className={'hover:text-sky-600 dark:hover:text-sky-200'}>
            Convert ESD to original files
          </Link>
        </li>
      </ul>
    </MainLayout>
  );
};

export default Home;
