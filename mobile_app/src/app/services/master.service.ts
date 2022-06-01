import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getRedditPosts(): Observable<any> {
    return this.http.get(`${environment.redditBaseUrl}`).pipe(
      map((res: any) => {
        console.log();
        return res.data.children.map((el: any) => {
          const newObj = {
            author: el.data.author,
            name: el.data.name,
            smallImg: el.data.preview.images[0].resolutions[0].url,
            largeImg: el.data.preview.images[0].resolutions[4]?.url,
            title: el.data.title,
            thumb: el.data.thumbnail,
            upvote: el.data.upvote_ratio,
          };
          return newObj;
        });
      })
    );
  }

  getRedditPostDetail(name: string) {
    return this.http.get(`${environment.redditDetailUrl}${name}/.json`).pipe(
      map((res: any) => {
        const item = res.data.children[0].data;
        const newObj = {
          title: item.title,
          url: item.url,
          largeImg: item.preview.images[0].resolutions[4]?.url,
        };
        return newObj;
      })
    );
  }
}
