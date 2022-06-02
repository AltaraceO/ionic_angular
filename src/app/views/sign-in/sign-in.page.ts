import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  formItems: FormGroup;

  constructor(private fb: FormBuilder, private user: UserService) {
    // this.current = user.updateUser(this.formItems.value);
  }

  ngOnInit() {
    //this builds a form with two items (email,password) and runs the validations on it - call connected in HTML
    this.formItems = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  updateCurrent(): void {
    this.user.updateUser(this.formItems.value);
  }

  userLogin() {
    console.log('loggedIn');
    console.log(this.formItems);

    this.updateCurrent();
    console.log(this.user.valueUser());
  }
}
