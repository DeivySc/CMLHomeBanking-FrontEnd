
  
export interface Imessages {
}

export interface Idata {
    nroTarjeta:string,
    nombre:string,
    email:string,
    codigo:number,
    mensaje:string
}

export interface ISignupResponse {
    data: Idata[];
    messages: Imessages[];
    isValid: boolean;
  }