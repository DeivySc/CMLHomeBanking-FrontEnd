import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IAuthenticationRequest } from '../../models/request/authentication-request.interface';
import { IAuthenticationResponse } from '../../models/response/authentication-response.interface';
import { IKeyboardRequest } from '../../models/request/keyboard-request.interface';
import { IKeyboardResponse } from '../../models/response/keyboard-response.interface';
import { ISignupRequest } from '../../models/request/Signup-request.interface';
import { ISignupResponse } from '../../models/response/signup-response.interface';
import { ILoginRequest } from '../../models/request/login-request.interface';
import { ILoginResponse } from '../../models/response/login-response.interface';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  

  public getLoginHB(req: IAuthenticationRequest, collection: string): Observable<IAuthenticationResponse[]> {
    const url =
      environment.ENDPOINTS.API_URL +
      collection;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<IAuthenticationResponse[]>(url, httpOptions).pipe(
      tap((data: any) => {
        console.log(data);
      }),
      catchError(err => {
        throw 'Error in source. Details: ' + err;
      }),
    );
  }

  public getKeyboardHB(req: IKeyboardRequest, collection: string): Observable<IKeyboardResponse> {
    const url =
      environment.ENDPOINTS.API_URL +
      collection;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<IKeyboardResponse>(url, httpOptions).pipe(
      tap((data: any) => {
        console.log(data);
      }),
      catchError(err => {
        throw 'Error in source. Details: ' + err;
      }),
    );
  }

  public getValidateLoginHB(req: ISignupRequest, collection: string): Observable<ISignupResponse> {
    
    const jsonrequest = JSON.stringify(req);
    const url =
      environment.ENDPOINTS.API_URL +
      collection;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<ISignupResponse>(url,jsonrequest,httpOptions).pipe(
      tap((data: any) => {
        console.log(data);
      }),
      catchError(err => {
        throw 'Error in source. Details: ' + err;
      }),
    );
  }


  public getObtainLoginHB(req:ILoginRequest , collection: string): Observable<ILoginResponse> {
    
    const jsonrequest = JSON.stringify(req);
    const url =
      environment.ENDPOINTS.API_URL +
      collection;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<ILoginResponse>(url,jsonrequest,httpOptions).pipe(
      tap((data: any) => {
        console.log(data);
      }),
      catchError(err => {
        throw 'Error in source. Details: ' + err;
      }),
    );
  }
}
