import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseUrl = "http://localhost:3000/";
  teamLeadUrl = this.baseUrl + "leader";
  teamMemberUrl = this.baseUrl + "member";

  constructor(private httpClient :HttpClient) { }

  getTeamLead() {
    return this.httpClient.get(this.teamLeadUrl);
  }

  getMember(parentRoleId :number) {
    let queriedUrl = this.teamMemberUrl + `?parentRoleId=${parentRoleId}`;
    return this.httpClient.get(queriedUrl);
  }
}
