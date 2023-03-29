import { Component, Input } from '@angular/core';
import { ContentModel } from 'src/app/model/content.model';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {
  @Input() headerContent? :ContentModel;
}
