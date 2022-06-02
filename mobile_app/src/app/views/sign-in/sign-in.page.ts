import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  credentials: FormGroup;
  // user = {
  //   name: 'test',
  //   pw: 'test',
  // };
  constructor(
    private fb: FormBuilder,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['ori@ori.com', [Validators.required, Validators.email]],
      password: ['ori', [Validators.required, Validators.minLength(3)]],
    });
  }

  // get email(){
  //   return this.credentials.get('email')
  // }

  // get password(){
  //   return this.credentials.get('password')
  // }

  userLogin() {
    console.log('loggedin');
  }
}
