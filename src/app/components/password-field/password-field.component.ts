import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { IKeyboardResponse } from '../../features/authentication/models/response/keyboard-response.interface';
import { IKeyboardUI, KeyboardUI } from '../../features/authentication/models/ui/keyboard-ui.interface';
import { IKeyboardRequest } from '../../features/authentication/models/request/Keyboard-request.interface';
import {AuthenticationService} from '../../features/authentication/core/http/Authentication.service'

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss']
})
export class PasswordFieldComponent implements OnInit {

  public uikeyboard: IKeyboardUI[];
  buttons: number[] = [];
  name = '';
  i= 0;
  x= 0;
  circlecheked  =[];

  select!: string;

  prueba() {
    this.select = 'select';
  }

  pressKey(key: number) {
    if (this.name.length === 6) {
      return;
    }
    this.circlecheked = [];
    this.name += key;
    this.i= 0;
     this.x= 0;
   
       if(this.name.length > 0){

        this.x= this.name.length;
          for (this.i== 0 ;  this.i < this.name.length; this.i++){
                this.circlecheked.push({
                   class : "circulo select"
                });
          }
       }
       for (this.x; this.x < 6;this.x++ ){   
        this.circlecheked.push({
          class : "circulo"
       });
         }

  }

  delete() {
    this.x= 0;
    this.circlecheked = [];
    for (this.x; this.x < 6;this.x++ ){   
      this.circlecheked.push({
        class : "circulo"
     });
    }
    this.name = '';
  }

  clear() {
    this.circlecheked = [];
    this.x= this.name.length - 1;
    this.i= 0;
      if(this.name.length > 0){

         for (this.i== 0 ;  this.i < this.name.length - 1; this.i++){
               this.circlecheked.push({
                  class : "circulo select"
               });
         }
      }
      for (this.x; this.x < 6;this.x++ ){   
       this.circlecheked.push({
         class : "circulo"
      });
        }

    if (this.name.length > 0) {
      const length = this.name.length;
      this.name = this.name.substring(0, length - 1);
    }
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(){

    this.delete();
   this.KeyboardHB();
    //  for (let i =0; i < this.buttons.length; i++) {
    //   this.hola.push(this.buttons[Math.random() * this.buttons.length]);
    //  }
  } 

    public KeyboardHB(){
      const req: IKeyboardRequest= {};
  
      this.authenticationService.getKeyboardHB(req,'/RandomKeyboard/GetRandomKeyboard').subscribe((Keyboard: IKeyboardResponse) => {
      const keyboardUI = new KeyboardUI();
      this.uikeyboard = keyboardUI.getKeyboard(Keyboard);
      console.log(this.uikeyboard)
    });
  
    }

 

}
