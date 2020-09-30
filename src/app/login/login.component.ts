import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
//import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //loggedIn: boolean;
  //hide: 'password';
  //loginForm: FormGroup;
  constructor() { }

  onClick(){
    //TODO
    //this.loggedIn = !this.loggedIn;
    console.log('hi');
  }
  ngOnInit(){}
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
