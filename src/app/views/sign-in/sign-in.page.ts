import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  formItems: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    //this builds a form with two items (email,password) and runs the validations on it - call connected in HTML
    this.formItems = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  userLogin() {
    console.log('loggedin');
  }
}
