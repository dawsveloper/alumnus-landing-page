import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private baseUrl = "assets/data/db.json";

  constructor(private httpClient :HttpClient) { }

  getBaseData() {
    return this.httpClient.get(this.baseUrl);
  }
}
