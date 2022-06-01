import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getRedditPosts(): Observable<any> {
    return this.http.get(`${environment.redditBaseUrl}`);
  }

  getRedditPostDetail(name: string) {
    return this.http.get(`${environment.redditDetailUrl}${name}/.json`);
  }
}
