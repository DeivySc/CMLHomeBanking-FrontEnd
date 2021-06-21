import { IKeyboardResponse } from "../response/keyboard-response.interface";


export interface IKeyboardUI {
    description: number;
    order :number
  }

  export class KeyboardUI {
 public keyboard: IKeyboardUI[]

 public getKeyboard(dataKeyboard: IKeyboardResponse) {

    const keyboardtrafficFinal=[];
    let accumulated = 0;
      
    dataKeyboard.data.forEach(keyboardtraffic => {
        accumulated += 1 ;
        keyboardtrafficFinal.push ({
            description:  keyboardtraffic.description,
            order : accumulated

        })
    });

     this.keyboard = keyboardtrafficFinal;
     return this.keyboard;
 }

  }