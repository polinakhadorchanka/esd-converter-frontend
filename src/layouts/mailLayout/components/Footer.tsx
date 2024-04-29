import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer
      className={'mt-4 px-4 py-6 text-[12px] bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}>
      <div className={'container mx-auto'}>
        <div className={'flex flex-col gap-0.5'}>
          <div className={'flex flex-row justify-start items-center gap-2'}>
            <FaGithub className={'w-4 h-4'} />
            <a
              href={'https://github.com/polinakhadorchanka'}
              target={'_blank'}
              className={
                'leading-4 border-b border-dashed border-b-gray-600 hover:border-b-sky-600 hover:text-sky-600 ' +
                'dark:border-b-gray-400 dark:hover:border-b-sky-200 dark:hover:text-sky-200'
              }>
              polinakhadorchanka
            </a>
          </div>

          <div className={'flex flex-row justify-start items-center gap-2'}>
            <MdMail className={'w-4 h-4'} />
            <div>polina.khadorchanka@gmail.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
