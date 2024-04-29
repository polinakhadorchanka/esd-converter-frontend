import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import uuid from 'react-uuid';
import { Document } from '@customTypes/files';
import { MainLayout } from '@layouts/index';
import { FileManager, Signature } from '@components/index';
import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';
import { verifyEDS } from '../../store/files/files.action';

const VerifyEds = () => {
  const { addToDocument, addToSignatures, deleteDocument, deleteSignature, verifyEDS, clearError } =
    useActions();
  const { mainDocument, signatures, response, isProcessing, error } = useTypedSelector(
    (state) => state.files,
  );

  const addMainDocument = (files: File[]) => {
    const ID = uuid();
    addToDocument({ ID, file: files[0] });
  };

  const addSignatures = (files: File[]) => {
    Array.from(files).forEach((file) => {
      const ID = uuid();
      addToSignatures({ ID, file: file });
    });
  };

  const onDeleteMainDocument = (document: Document) => {
    deleteDocument();
  };

  const onDeleteSignature = (document: Document) => {
    deleteSignature(document.ID);
  };

  const onVerifyClick = () => {
    clearError();
    mainDocument && verifyEDS({ mainDocument, signatures });
  };

  return (
    <MainLayout>
      <div className={'grid grid-cols-2 gap-4'}>
        <FileManager
          id={'document'}
          documents={mainDocument ? [mainDocument] : []}
          formats={'PDF, DOC, DOCX, PNG and etc.'}
          addFiles={addMainDocument}
          isDeleteFiles={true}
          onDeleteFile={onDeleteMainDocument}
        />

        <FileManager
          id={'signatures'}
          documents={signatures}
          formats={'P7S'}
          accept={'.p7s'}
          addFiles={addSignatures}
          isMultiple={true}
          isDeleteFiles={true}
          onDeleteFile={onDeleteSignature}
        />
      </div>

      <div className={'mt-4 flex flex-row justify-center items-center'}>
        {!isProcessing && (
          <Button isDisabled={!mainDocument} onClick={onVerifyClick}>
            Verify
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

            {response.link && (
              <a
                href={response.link}
                target={'_blank'}
                download
                className={
                  'border-b border-dashed hover:border-solid text-sky-600 border-b-sky-600 ' +
                  'dark:text-sky-200 dark:border-b-sky-200'
                }>
                Download log file
              </a>
            )}

            {error && (
              <div className={'max-w-2xl flex flex-col justify-center items-center gap-4'}>
                <div className={'text-red-500 dark:text-red-300'}>{error}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default VerifyEds;
