
export interface Imessages {
}

export interface Idata {
  description: string;
}
export interface IKeyboardResponse {
    data: Idata[];
    messages: Imessages[];
    isValid: boolean;
  }