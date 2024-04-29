import React, { FC, PropsWithChildren } from 'react';
import { VscDebugStart } from 'react-icons/vsc';

interface ButtonProps extends PropsWithChildren {
  isDisabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ isDisabled = false, onClick, className = '', children }) => {
  return (
    <>
      {!isDisabled && (
        <button
          className={
            'px-8 h-10 flex flex-row justify-center items-center rounded-full ' +
            'border border-dashed border-gray-600 text-gray-600 ' +
            'dark:border-gray-200 dark:text-gray-200 ' +
            'hover:border-solid ' +
            'hover:text-sky-600 hover:border-sky-600 ' +
            'dark:hover:text-sky-200 dark:hover:border-sky-200 ' +
            className
          }
          disabled={isDisabled}
          onClick={!isDisabled ? onClick : undefined}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
