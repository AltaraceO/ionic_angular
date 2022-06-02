import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  //*In this folder's HTML these pages provide the dynamic list of buttons along with their addresses
  //* -- SIGNIN page title changes dynamically if a user is logged in
  pages = [
    { title: 'Master Page', url: '/menu/master' },
    { title: this.user.valueUser ? 'Logout' : 'Login', url: '/menu/sign-in' },
    { title: 'Chat', url: '/menu/chat' },
  ];

  selectedPath = '';

  //*Get the current url and in the HTML match it to the current page so that different css can be applied to it ()
  constructor(private router: Router, private user: UserService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {}
}
