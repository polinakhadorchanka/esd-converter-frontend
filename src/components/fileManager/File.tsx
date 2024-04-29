import React, { FC } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import { Document } from '@customTypes/files';

interface FileProps {
  document: Document;
  isDeleteFiles?: boolean;
  onDelete?: (file: Document) => void;
}

const File: FC<FileProps> = ({ document, isDeleteFiles, onDelete }) => {
  const onDeleteFile = () => {
    onDelete && onDelete(document);
  };

  return (
    <div className={'flex flex-row justify-start items-center gap-2'}>
      <FaFileAlt className={'w-7 h-7 text-sky-600 dark:text-sky-200'} />
      <div className={'grow text-sm truncate'}>{document.file.name}</div>
      {isDeleteFiles && (
        <div className={'group w-8 h-8 flex justify-end items-center cursor-pointer'} onClick={onDeleteFile}>
          <BsPlus
            className={
              'w-6 h-6 text-gray-400 group-hover:text-sky-600 dark:group-hover:text-sky-200 rotate-45'
            }
          />
        </div>
      )}
    </div>
  );
};

export default File;
