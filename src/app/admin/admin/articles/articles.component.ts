import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../service/article.service';
import {IArticle} from '../../../shared/interface/IArticle';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Array<IArticle>;
  searchFieldTitle: string = '';
  searchFieldDescription: string = '';
  searchFieldAuthor: string = '';
  searchFieldPublishedDate: string = '';
  searchFieldPrice: number = null;

  constructor(
    private articleService: ArticleService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(
      data => {
        this.articles = data;
      },
      error => {
        this.toastr.error(error);
      }
    );
  }
}
