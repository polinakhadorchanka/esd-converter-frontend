import { PiFileDashedThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'} className={'relative w-[120px] flex flex-row justify-start items-start'}>
      <PiFileDashedThin className={'w-12 h-12 text-gray-600 dark:text-gray-200'} />
      <div className={'flex flex-col'}>
        <div
          className={
            'absolute bottom-[16px] text-[22px] font-medium leading-4 sen-base text-sky-600 dark:text-sky-200'
          }>
          ESD
        </div>
        <div
          className={'absolute bottom-[3px] text-[14px] leading-4 sen-light text-gray-800 dark:text-gray-50'}>
          converter
        </div>
      </div>
    </Link>
  );
};

export default Logo;
