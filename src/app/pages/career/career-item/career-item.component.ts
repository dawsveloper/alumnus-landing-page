import { Component, Input } from '@angular/core';
import { CareerModel } from 'src/app/model/career.model';
import { faClock, faLocationDot, faBriefcase, faCalendar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-career-item',
  templateUrl: './career-item.component.html',
  styleUrls: ['./career-item.component.css']
})
export class CareerItemComponent {
  icTime = faClock;
  icWork = faBriefcase;
  icLocation = faLocationDot;
  icDate = faCalendar;

  @Input() careerList :CareerModel[] = [];
}
