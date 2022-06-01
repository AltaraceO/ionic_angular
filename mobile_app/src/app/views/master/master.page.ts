import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MasterService } from 'src/app/services/master.service';
@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage implements OnInit {
  posts = [];
  constructor(
    private masterService: MasterService,
    private loading: LoadingController
  ) {}

  ngOnInit() {
    this.loadPosts();
  }

  async loadPosts() {
    const load = await this.loading.create({
      message: 'Loading...',
      spinner: 'dots',
    });
    await load.present();

    this.masterService.getRedditPosts().subscribe((res) => {
      load.dismiss();
      this.posts = res;
      console.log(this.posts);
    });
  }
}
