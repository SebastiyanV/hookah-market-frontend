import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {ActivatedRoute} from '@angular/router';
import {IArticle} from '../../shared/interface/IArticle';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  article: IArticle;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFromRoute = String(routeParams.get('articleId'));
    this.articleService.getArticleById(articleIdFromRoute)
      .subscribe(
        data => this.article = data,
        error => console.log(error)
      );
  }

}
