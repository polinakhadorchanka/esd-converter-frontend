import { Document } from '@customTypes/files';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IDocToESDResponse, IESDToDocsResponse, IVerifyResponse } from '@customTypes/response';

const apiConvertDocsToESD = (mainDocument: Document, signatures: Document[]): Promise<IDocToESDResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append('mainDocument', mainDocument.file);
      signatures.forEach((signature, index) => {
        formData.append(`signatures`, signature.file);
      });

      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/converter/doc-to-esd`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (data.error) reject(data.error);
      else resolve(data.data);
    } catch (error: any) {
      reject(error.response.statusText);
    }
  });
};

const apiConvertESDToDocs = (esd: Document): Promise<IESDToDocsResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append('esd', esd.file);

      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/converter/esd-to-docs`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (data.error) reject(data.error);
      else resolve(data.data);
    } catch (error: any) {
      reject(error.response.statusText);
    }
  });
};

const apiVerifyEDS = (mainDocument: Document, signatures: Document[]): Promise<IVerifyResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append('mainDocument', mainDocument.file);
      signatures.forEach((signature, index) => {
        formData.append(`signatures`, signature.file);
      });

      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/verify`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (data.error) reject(data.error);
      else resolve(data.data);
    } catch (error: any) {
      reject(error.response.statusText);
    }
  });
};

export const convertDocsToESD = createAsyncThunk(
  '/converter/doc-to-esd',
  async (data: { mainDocument: Document; signatures: Document[] }, thunkAPI) => {
    try {
      return await apiConvertDocsToESD(data.mainDocument, data.signatures);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const convertESDToDocs = createAsyncThunk(
  '/converter/esd-to-docs',
  async (data: { esd: Document }, thunkAPI) => {
    try {
      return await apiConvertESDToDocs(data.esd);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const verifyEDS = createAsyncThunk(
  '/verify',
  async (data: { mainDocument: Document; signatures: Document[] }, thunkAPI) => {
    try {
      return await apiVerifyEDS(data.mainDocument, data.signatures);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
