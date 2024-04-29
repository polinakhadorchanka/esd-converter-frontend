import React, { ChangeEventHandler, DragEventHandler, FC, useRef, useState } from 'react';
import { FiUpload } from 'react-icons/fi';

interface FileInputProps {
  id: string;
  isMultiple?: boolean;
  formats?: string;
  accept?: string;
  addFiles: (files: File[]) => void;
}

const FileInput: FC<FileInputProps> = ({ id, isMultiple, formats, addFiles, accept }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    addFiles(files);

    (document.getElementById(id) as HTMLInputElement).value = '';
  };

  const handleDrop: DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();

    const droppedFiles = Array.from(event.dataTransfer.files);
    addFiles(droppedFiles);

    (document.getElementById(id) as HTMLInputElement).value = '';

    setIsDragOver(false);
  };

  const onDragOverHandler: DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(true);
  };

  const onDragLeaveHandler: DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { relatedTarget } = event;
    if (!relatedTarget || (relatedTarget instanceof Node && !event.currentTarget.contains(relatedTarget))) {
      setIsDragOver(false);
    }
  };

  return (
    <div className={'relative flex items-center justify-center w-full'}>
      <label
        htmlFor={id}
        className={
          'group flex flex-col items-center justify-center w-full h-56 p-4 ' +
          'border-[1.5px] border-dashed rounded-lg cursor-pointer ' +
          'bg-white dark:bg-gray-700 border-sky-600 dark:border-gray-200'
        }
        onDrop={handleDrop}
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}>
        <div className={'flex flex-col items-center justify-center pt-5 pb-6'}>
          <FiUpload
            className={`w-6 h-6 mb-2 text-gray-400 
            group-hover:text-sky-600 dark:group-hover:text-sky-200 
            ${isDragOver && 'text-sky-600 dark:text-sky-200 animate-pulse'}`}
          />

          <p className={'mb-2 text-sm text-gray-400 text-center leading-3'}>
            <span className={'font-medium'}>Click to upload</span> or drag and drop
          </p>
          <p className={'text-xs text-gray-400'}>{formats}</p>
        </div>

        <input
          id={id}
          type={'file'}
          className={'hidden'}
          multiple={isMultiple}
          onChange={onChangeInput}
          accept={accept}
        />
      </label>
    </div>
  );
};

export default FileInput;
