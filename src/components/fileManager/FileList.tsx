import React, { FC } from 'react';
import File from '@components/fileManager/File';
import { Document } from '@customTypes/files';

interface FileListProps {
  documents: Document[];
  isDeleteFiles?: boolean;
  onDeleteFile?: (file: Document) => void;
}

const FileList: FC<FileListProps> = ({ documents, isDeleteFiles = false, onDeleteFile }) => {
  return (
    <div className={'p-4 flex flex-col gap-2'}>
      {documents.map((document, index) => (
        <File key={index} document={document} isDeleteFiles={isDeleteFiles} onDelete={onDeleteFile} />
      ))}
    </div>
  );
};

export default FileList;
