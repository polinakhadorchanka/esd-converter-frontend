import React, { FC } from 'react';
import { ISignature } from '@customTypes/signature';
import { FaSignature } from 'react-icons/fa6';

interface SignatureProps {
  signature: ISignature;
}

const Signature: FC<SignatureProps> = ({ signature }) => {
  return (
    <div>
      <div
        className={
          'p-4 flex flex-row justify-start items-center gap-4 ' +
          'rounded-xl leading-4 shadow bg-white dark:bg-gray-700'
        }>
        <FaSignature className={'w-24 h-24 text-sky-600 dark:text-sky-200'} />
        <div>
          <p
            className={
              'pb-1.5 mb-1 text-[11px] text-gray-600 dark:text-gray-300 ' +
              'border-b border-b-sky-600 dark:border-b-sky-200 leading-3'
            }>
            {signature.subject}
          </p>
          <div className={'text-[13px]'}>
            {' '}
            <p>{signature.person}</p>
            <p>{new Date(signature.date).toLocaleString()}</p>
            <p className={'text-sky-600 dark:text-sky-200 font-medium'}>{signature.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signature;
