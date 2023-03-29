import { Component, Input} from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';
import { faUserLarge, faClock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-news-highlight',
  templateUrl: './news-highlight.component.html',
  styleUrls: ['./news-highlight.component.css']
})
export class NewsHighlightComponent {

  icAuthor = faUserLarge;
  icTime = faClock;

  @Input() firstHighlight :NewsModel = new NewsModel();
  @Input() secondHighlight :NewsModel = new NewsModel();
  @Input() thirdHighlight :NewsModel = new NewsModel();
  
}
