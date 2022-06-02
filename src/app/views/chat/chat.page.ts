import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages = [
    {
      user: 'bot',
      time: 1654176594,
      text: 'Welcome to our chat, what would you like to share?',
    },
    {
      user: 'bit',
      time: 1654176594,
      text: 'Welcome to our chat, what would you like to share?',
    },
  ];

  newMessage: string;
  currentUser: string;
  constructor(private user: UserService) {}

  ngOnInit() {
    // this.currentUser = this.user.valueUser()?.email;
    // console.log(this.currentUser);
    this.currentUser = 'bit';
  }

  sendMsg() {}

  sendMessage() {}
}
