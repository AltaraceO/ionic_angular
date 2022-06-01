import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  post = null;
  constructor(
    private route: ActivatedRoute,
    private masterService: MasterService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('id');
    console.log(name);
    this.masterService.getRedditPostDetail(name).subscribe((res) => {
      this.post = res;
      console.log(this.post);
    });
  }
}
