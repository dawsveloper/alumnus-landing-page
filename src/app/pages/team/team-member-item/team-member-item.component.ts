import { Component, Input } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { TeamModel } from 'src/app/model/team.model';

@Component({
  selector: 'app-team-member-item',
  templateUrl: './team-member-item.component.html',
  styleUrls: ['./team-member-item.component.css']
})
export class TeamMemberItemComponent {
  icInstagram = faInstagram;
  icFacebook = faFacebookF;
  icLinkedin = faLinkedinIn;
  icCircle = faCircle;
  
  @Input() memberList :TeamModel[] = [];
}
