import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = "http://localhost:3000/";
  newsUrl = this.baseUrl + "news";
  constructor(private httpClient :HttpClient) { }

  getNews() {
    return this.httpClient.get(this.newsUrl);
  }
}
