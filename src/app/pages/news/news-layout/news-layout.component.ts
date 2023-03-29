import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news-layout.component.html',
  styleUrls: ['./news-layout.component.css']
})
export class NewsLayoutComponent implements OnInit {

  highlightList :NewsModel[] = [];
  newsList :NewsModel[] = [];

  constructor(private newsService :NewsService) {}

  ngOnInit(): void {
    this.callNews();
  }

  callNews() {
    this.newsService.getNews().subscribe(response => {
      this.newsList = response as Array<NewsModel>;
      this.highlightList = this.newsList;
    });
  }
}
