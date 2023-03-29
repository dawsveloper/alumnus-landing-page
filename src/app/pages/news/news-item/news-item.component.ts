import { Component, Input } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {
  
  icAuthor = faUser;
  icTime = faClock;
  
  @Input() newsList :NewsModel[] = [];
}
