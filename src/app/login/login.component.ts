import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // This is where you'd call an authentication service and create a store or throw an auth error
  login() {
    // TODO: Set NGRX store value and then redirect to /home
    return true;
  }
}
