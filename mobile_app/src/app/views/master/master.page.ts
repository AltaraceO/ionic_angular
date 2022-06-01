import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';
@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage implements OnInit {
  constructor(private masterService: MasterService) {}

  ngOnInit() {
    this.masterService.getRedditPosts().subscribe((res) => console.log(res));
  }
}
