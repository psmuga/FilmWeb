import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

const LOGIN_REGEX = /^.{6,}$/;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.pattern(LOGIN_REGEX)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
  }

}
