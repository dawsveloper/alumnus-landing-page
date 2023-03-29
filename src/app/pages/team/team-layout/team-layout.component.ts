import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/app/model/team.model';
import { LocalService } from 'src/app/services/local.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team-layout.component.html',
  styleUrls: ['./team-layout.component.css']
})
export class TeamLayoutComponent implements OnInit{
  leaderList :TeamModel[] = [];
  memberList :TeamModel[] = [];

  constructor(
    private teamService :TeamService,
    private localService :LocalService
  ) {}

  ngOnInit(): void {
    this.callLocalLeader();
  }

  callLocalLeader() {
    this.localService.getBaseData().subscribe(response => {
      let data = response as any;
      this.convertLeaderData(data.leader);
      this.convertMemberData(data.member);
    });
  }

  callLeader() {
    this.teamService.getTeamLead().subscribe(response => {
      this.convertLeaderData(response);
    });

  }

  callMember(leader :TeamModel) {
    this.teamService.getMember(leader.id).subscribe(response => {
     this.convertMemberData(response);
    });
  }

  convertLeaderData(response :any) {
    this.leaderList = response as Array<TeamModel>;
    this.leaderList.forEach(leader => {
      this.callMember(leader)
    });
  }

  convertMemberData(response :any) {
    let memberList = response as Array<TeamModel>;
    memberList.forEach(member => {
      this.memberList.push(member);
    })
  }
}
