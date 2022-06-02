import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  //In this folder's HTML these pages provide the dynamic list of buttons along with their addresses
  pages = [
    { title: 'Master Page', url: '/menu/master' },
    { title: 'Sign In', url: '/menu/sign-in' },
  ];

  selectedPath = '';

  //TODO this will get the current url and in the HTML match it to the current page so that different css can be applied to it ()
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {}
}
