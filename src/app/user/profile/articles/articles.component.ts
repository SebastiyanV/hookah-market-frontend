import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../service/article.service';
import {IArticle} from '../../../shared/interface/IArticle';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Array<IArticle>;
  page = 1;
  pageSize = 5;
  items = [];

  constructor(
    private articleService: ArticleService
  ) {
  }

  ngOnInit(): void {
    this.articleService.getMyArticles().subscribe(
      data => {
        this.articles = data;
        this.items = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
