
export interface Imessages {
}


export interface Idata {
  typeIdentityDocumentId: string;
  code: string;
  description: string;
}
export interface IAuthenticationResponse {
    data: Idata[];
    messages: Imessages[];
    isValid: boolean;
  }