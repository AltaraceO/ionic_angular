import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  //*get the current view so that messages move to the top
  @ViewChild(IonContent) content: IonContent;
  messages = [
    {
      user: 'bot',
      time: 1654176594,
      text: 'Welcome to our chat, what would you like to share?',
    },
  ];

  newMessage: string;
  currentUser: string;
  constructor(private user: UserService) {}

  ngOnInit() {
    this.currentUser = this.user.valueUser()?.email;
    console.log(this.currentUser);
    // this.currentUser = 'bit';
  }

  sendMessage() {
    console.log(this.currentUser);

    if (this.newMessage === undefined || this.newMessage === '') {
      return;
    }

    this.messages.push({
      user: this.currentUser,
      time: new Date().getTime(),
      text: this.newMessage,
    });

    this.newMessage = '';
    //*view will move to the bottom so that old messages disappear to the top
    // * the time  out is set so that it happens after the view is sized after the new message is added
    setTimeout(() => {
      this.content.scrollToBottom();
    });
  }
}
