import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { TeamModel } from 'src/app/model/team.model';

@Component({
  selector: 'app-team-lead-item',
  templateUrl: './team-lead-item.component.html',
  styleUrls: ['./team-lead-item.component.css']
})
export class TeamLeadItemComponent {
  icInstagram = faInstagram;
  icFacebook = faFacebookF;
  icLinkedin = faLinkedinIn;

  @Input() leaderList :TeamModel[] = []
}
