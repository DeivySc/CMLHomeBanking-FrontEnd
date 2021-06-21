
  
export interface Imessages {
}

export interface Idata {
    validLogin:boolean,
    message:string,
}

export interface ILoginResponse {
    data: Idata[];
    messages: Imessages[];
    isValid: boolean;
  }