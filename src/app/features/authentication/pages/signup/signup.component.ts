import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/http/Authentication.service';
import { ISignupRequest } from '../../models/request/Signup-request.interface';
import { ISignupResponse } from '../../models/response/signup-response.interface';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  isEditable: boolean = false;
  selected = "8"

  hideSteppers: boolean = true;

  constructor(private _formBuilder: FormBuilder,private router: Router,
    private authenticationService: AuthenticationService, private _snackBar: MatSnackBar) { }



  onKeyPress(event: any) {
    const regexpNumber = /[0-9\+\-\ ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }

  back() {
    this.isEditable = true;
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      cardNumber: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.pattern('[0-9]*')])],
      selecDocument: [ '', [Validators.required]],
      documentNumber: [ '', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('[0-9]*')])],
    });
    this.secondFormGroup = this._formBuilder.group({
      codeNumber: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(6), Validators.pattern('[0-9]*')])]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  showSuccessfulRegistration() {
    this.hideSteppers = !this.hideSteppers;
  }


  public ValidateLoginHB(){
    const req: ISignupRequest= {NumeroTarjeta:"4408220001824519",
      TipoDocumento:"01",
      NumeroDocumento:"84334539",
      Contrasenia:"1111"
    };


  this.authenticationService.getValidateLoginHB(req,'/Security/Generarclave').subscribe((res: ISignupResponse) => {
    console.log(res);
  });

  }

}
