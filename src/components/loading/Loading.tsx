import React, { FC } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface LoadingProps {
  label?: string;
  className?: string;
}

const Loading: FC<LoadingProps> = ({ label, className }) => {
  return (
    <div className={`flex flex-row justify-start items-center gap-2 ${className}`}>
      <AiOutlineLoading3Quarters className={'w-4 h-4 text-gray-400 animate-spin'} />
      <div>{label}</div>
    </div>
  );
};

export default Loading;
