import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/http/Authentication.service';
import { ISignupRequest } from '../../models/request/Signup-request.interface';
import { ISignupResponse } from '../../models/response/signup-response.interface';
import {PasswordFieldComponent} from '../../../../componentS/password-field/password-field.component'
import { MatStepper } from '@angular/material/stepper';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  isEditable: boolean = false;
  @ViewChild(PasswordFieldComponent) PasswordFieldReference1: any;

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

  public ValidateLoginHB(stepper: MatStepper,creditCar,documentType,document){
        const pwd = this.PasswordFieldReference1.name;
        const req: ISignupRequest= {NumeroTarjeta:creditCar,
          TipoDocumento:documentType,
          NumeroDocumento:document,
          Contrasenia:pwd
        };

      this.authenticationService.getValidateLoginHB(req,'/Security/Generarclave').subscribe((res: ISignupResponse) => {
        console.log(res);
        stepper.next();
      });
      }

  }




