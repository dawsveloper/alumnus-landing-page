import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  private baseUrl = "http://localhost:3000/";
  private careerUrl = this.baseUrl + "career";

  constructor(private httpClient :HttpClient) { }

  getCareer() {
    return this.httpClient.get(this.careerUrl);
  }
}
