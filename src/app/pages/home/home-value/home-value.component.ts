import { Component, Input } from '@angular/core';
import { faHandshakeAngle, faComment, faSeedling, faCircleNodes, faSquare, faQuestion} from '@fortawesome/free-solid-svg-icons'
import { ContentModel } from 'src/app/model/content.model';


@Component({
  selector: 'app-home-value',
  templateUrl: './home-value.component.html',
  styleUrls: ['./home-value.component.css']
})
export class HomeValueComponent {
  icBrotherhood = faHandshakeAngle;
  icGrowth = faSeedling;
  icCommunication = faComment;
  icBridge = faCircleNodes;
  icDefault = faQuestion;

  @Input() valueList :ContentModel[] = [];
}
