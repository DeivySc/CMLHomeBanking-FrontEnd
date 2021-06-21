import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router'
import {AuthenticationService} from '../../core/http/Authentication.service'
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ILoginRequest } from '../../models/request/login-request.interface';
import {PasswordFieldComponent} from '../../../../componentS/password-field/password-field.component'
import { ILoginResponse } from '../../models/response/login-response.interface';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  @ViewChild(PasswordFieldComponent) PasswordFieldReference1: any;
  selected = "8";
  constructor(private _formBuilder:FormBuilder,private router: Router,
    private authenticationService: AuthenticationService, private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.open('Clave incorrecta', 'Entendido', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['class-snackbar']
    });
  }

  onKeyPress(event: any) {
    const regexpNumber = /[0-9\+\-\ ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      selecDocument: [ '', [Validators.required]],
      documentNumber: [ '', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('[0-9]*')])]
    })
  }

  public ObtainLoginHB(documentType,document){
    const pwd = this.PasswordFieldReference1.name;
    const req: ILoginRequest= {
      TipoDocumento:documentType,
      NumeroDocumento:document,
      Contrasenia:pwd
    };


  this.authenticationService.getObtainLoginHB(req,'/Security/Login').subscribe((res: ILoginResponse) => {
    console.log(res);
  });

  }

}
