import { Component, Input } from '@angular/core';
import { ContentModel } from 'src/app/model/content.model';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css']
})
export class HomeAboutComponent {
  @Input() aboutContentList :ContentModel[] = [];
}
