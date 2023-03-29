import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = "http://localhost:3000/home"

  constructor(private httpClient :HttpClient) { }

  getHomeData() {
    return this.httpClient.get(this.baseUrl);
  }
}
