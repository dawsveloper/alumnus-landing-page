import { Component, Input} from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-news-highlight',
  templateUrl: './news-highlight.component.html',
  styleUrls: ['./news-highlight.component.css']
})
export class NewsHighlightComponent {

  icAuthor = faUser;
  icTime = faClock;

  @Input() highlight :NewsModel = new NewsModel();
  
}
