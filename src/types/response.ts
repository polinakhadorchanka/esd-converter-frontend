import { ISignature } from '@customTypes/signature';

export interface IDocToESDResponse {
  signatures: ISignature[];
  link: string;
}

export interface IESDToDocsResponse {
  link: string;
}

export interface IVerifyResponse {
  signatures: ISignature[];
  link?: string;
}
