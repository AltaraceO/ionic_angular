import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  formItems: FormGroup;

  constructor(private fb: FormBuilder, private user: UserService) {}

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
  removeCurrent(): void {
    this.user.updateUser(null);
  }
  //called when a login button is clicked - button is only clickable when the password and email pass validations
  userLogin() {
    this.updateCurrent();
  }
  //called when logout button is clicked and clears the user data
  userLogOut() {
    this.removeCurrent();
  }
}
