import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getSessionToken(usernameForm: any, passwordForm: any): Observable<LoginComponent[]> {
    let params = new HttpParams()
      .set('username', usernameForm)
      .set('password', passwordForm);
    return this.http.post<LoginComponent[]>("http://localhost:8888/auth/login", params);
  }
}



