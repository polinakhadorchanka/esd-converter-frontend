import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Document } from '@customTypes/files';
import { convertDocsToESD, convertESDToDocs, verifyEDS } from './files.action';
import { IDocToESDResponse, IESDToDocsResponse, IVerifyResponse } from '@customTypes/response';

interface IFilesState {
  mainDocument: Document | null;
  signatures: Document[];
  esd: Document | null;
  isProcessing: boolean;
  response: IDocToESDResponse | IESDToDocsResponse | IVerifyResponse | null;
  error: string | null;
}

const initialState: IFilesState = {
  mainDocument: null,
  signatures: [],
  esd: null,
  isProcessing: false,
  response: null,
  error: null,
};

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    clearFilesStore: () => {
      return initialState;
    },
    clearError: (state) => {
      state.error = null;
    },
    addToDocument: (state, { payload }: PayloadAction<Document | null>) => {
      state.mainDocument = payload;
      state.response = null;
    },
    addToSignatures: (state, { payload }: PayloadAction<Document>) => {
      state.signatures.push(payload);
      state.response = null;
    },
    addToESD: (state, { payload }: PayloadAction<Document | null>) => {
      state.esd = payload;
      state.response = null;
    },
    deleteDocument: (state) => {
      state.mainDocument = null;
      state.response = null;
    },
    deleteSignature: (state, { payload: ID }: PayloadAction<string>) => {
      state.signatures = state.signatures.filter((signature) => signature.ID !== ID);
      state.response = null;
    },
    deleteESD: (state) => {
      state.esd = null;
      state.response = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(convertDocsToESD.pending, (state) => {
        state.isProcessing = true;
        state.response = null;
      })
      .addCase(convertDocsToESD.fulfilled, (state, action: PayloadAction<IDocToESDResponse>) => {
        state.isProcessing = false;
        state.response = action.payload;
      })
      .addCase(convertDocsToESD.rejected, (state, action: any) => {
        state.isProcessing = false;
        state.error = action.payload.message;
      })
      .addCase(convertESDToDocs.pending, (state) => {
        state.isProcessing = true;
        state.response = null;
      })
      .addCase(convertESDToDocs.fulfilled, (state, action: PayloadAction<IESDToDocsResponse>) => {
        state.isProcessing = false;
        state.response = action.payload;
      })
      .addCase(convertESDToDocs.rejected, (state, action: any) => {
        state.isProcessing = false;
        state.error = action.payload.message;
      })
      .addCase(verifyEDS.pending, (state) => {
        state.isProcessing = true;
        state.response = null;
      })
      .addCase(verifyEDS.fulfilled, (state, action: PayloadAction<IVerifyResponse>) => {
        state.isProcessing = false;
        state.response = action.payload;
      })
      .addCase(verifyEDS.rejected, (state, action: any) => {
        state.isProcessing = false;
        state.error = action.payload.message;
      });
  },
});

export const { actions, reducer } = filesSlice;
