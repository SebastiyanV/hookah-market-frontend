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

  constructor(
    private articleService: ArticleService
  ) {
  }

  ngOnInit(): void {
    this.articleService.getMyArticles().subscribe(
      data => {
        this.articles = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
