import React, { ChangeEventHandler, FC } from 'react';
import FileList from '@components/fileManager/FileList';
import FileInput from './FileInput';
import { Document } from '@customTypes/files';

interface FileManagerProps {
  id: string;
  documents: Document[];
  isMultiple?: boolean;
  formats?: string;
  accept?: string;
  addFiles: (files: File[]) => void;
  isDeleteFiles?: boolean;
  onDeleteFile?: (file: Document) => void;
}

const FileManager: FC<FileManagerProps> = ({
  id,
  documents,
  isMultiple = false,
  formats,
  accept,
  addFiles,
  isDeleteFiles = false,
  onDeleteFile,
}) => {
  return (
    <div className={'w-full flex flex-col'}>
      <FileInput id={id} isMultiple={isMultiple} formats={formats} accept={accept} addFiles={addFiles} />

      <FileList documents={documents} isDeleteFiles={isDeleteFiles} onDeleteFile={onDeleteFile} />
    </div>
  );
};

export default FileManager;
