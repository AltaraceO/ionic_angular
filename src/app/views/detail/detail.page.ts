import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  post = null;
  // thumbsUp = environment.thumbsUpReddit;
  thumbsUp = 'https://i.redd.it/lcm7fe9bnib61.png';
  constructor(
    private route: ActivatedRoute,
    private masterService: MasterService
  ) {}

  ngOnInit() {
    //*this takes the ID (post name) sent from MASTER gets it out of the active route
    const name = this.route.snapshot.paramMap.get('id');
    //*and uses it for the individual post sent to Reddit - result coming back gets assigned to post which will be used in the HTML
    this.masterService.getRedditPostDetail(name).subscribe((res) => {
      this.post = res;
    });
  }

  //*leave the app, doesn't seem to require _blank...
  goToLink() {
    window.open(this.post.url);
  }
}
