import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import uuid from 'react-uuid';
import { Document } from '@customTypes/files';
import { MainLayout } from '@layouts/index';
import { FileManager, Signature } from '@components/index';
import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';

const EsdToDocs = () => {
  const { addToESD, deleteESD, convertESDToDocs, clearError } = useActions();
  const { esd, response, isProcessing, error } = useTypedSelector((state) => state.files);

  const addESD = (files: File[]) => {
    const ID = uuid();
    addToESD({ ID, file: files[0] });
  };

  const onDeleteESD = (document: Document) => {
    deleteESD();
  };

  const onConvertClick = () => {
    clearError();
    esd && convertESDToDocs({ esd });
  };

  return (
    <MainLayout>
      <div className={'grid'}>
        <FileManager
          id={'esd'}
          documents={esd ? [esd] : []}
          formats={'ESD'}
          addFiles={addESD}
          isDeleteFiles={true}
          onDeleteFile={onDeleteESD}
        />
      </div>

      <div className={'mt-4 flex flex-row justify-center items-center'}>
        {!isProcessing && (
          <Button isDisabled={!esd} onClick={onConvertClick}>
            Convert
          </Button>
        )}

        {isProcessing && <Loading label={'Wait for a second...'} className={'justify-center'} />}
      </div>

      <div className={'mt-12 flex flex-row justify-center'}>
        {response && (
          <div className={'max-w-2xl flex flex-col justify-center items-center gap-4'}>
            <div className={'flex flex-col gap-4'}>
              {'signatures' in response &&
                response.signatures.map((signature, index) => (
                  <Signature key={index} signature={signature} />
                ))}
            </div>
            <a
              href={response.link}
              target={'_blank'}
              download
              className={
                'border-b border-dashed hover:border-solid text-sky-600 border-b-sky-600 ' +
                'dark:text-sky-200 dark:border-b-sky-200'
              }>
              Download files
            </a>
          </div>
        )}

        {error && (
          <div className={'max-w-2xl flex flex-col justify-center items-center gap-4'}>
            <div className={'text-red-500 dark:text-red-300'}>{error}</div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default EsdToDocs;
