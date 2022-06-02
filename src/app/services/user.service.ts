import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})

//this is exported to ensure that a user is updated globally and can be access from anywhere in the app
export class UserService {
  user$ = new BehaviorSubject<User | null>(null);

  constructor() {}

  //this returns the user and its value
  valueUser(): User | null {
    return this.user$.value;
  }

  // this allows to update the user if needed
  updateUser(user: User): void {
    this.user$.next(user);
  }
}
