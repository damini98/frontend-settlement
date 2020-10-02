import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';  
//import {FormGroup,FormControl,Validators} from '@angular/forms';

export interface Login {
  type: string;
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //loggedIn: boolean;
  //hide: 'password';
  //loginForm: FormGroup;
  public getData = [];
  constructor(private _httpService: LoginService, private cookieService: CookieService) { }

  onClick(item: NgForm) {
    //TODO
    //this.loggedIn = !this.loggedIn;
    console.log('hi');
    console.log(item.value);
    console.log(item.valid);
    this._httpService.getSessionToken(item.value["email"], item.value["password"]).subscribe(data => { console.log(data); this.getData = data; this.cookieService.set( "type", data["type"]); this.cookieService.set( "token",data["token"]); console.log(this.cookieService.get("token"))});
    console.log(this.getData);
    console.log(this.cookieService.get("token"));
    console.log(this.cookieService.get("type"));
  }
  ngOnInit() {
  }
  //TODO
  // ngOnInit(){

  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required,Validators.minLength(6)])
  //   })
  // };
  // onLogin(){

  // }

}
