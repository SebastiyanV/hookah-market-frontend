import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {ArticleService} from '../../../service/article.service';
import {ToastrService} from 'ngx-toastr';
import {LOADING_PRODUCTS_ERROR_MESSAGE, LOADING_PRODUCTS_ERROR_TITLE} from '../../../shared/constant/error.constant';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  awaitingApprovalArticlesCount: number;

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private toastr: ToastrService
  ) {
    this.articleService.getCountOfAwaitingApprovalArticles().subscribe(
      data => {
        this.awaitingApprovalArticlesCount = data;
      }
    );
  }

  ngOnInit(): void {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationStart) {
        this.articleService.getCountOfAwaitingApprovalArticles().subscribe(
          data => {
            this.awaitingApprovalArticlesCount = data;
          },
          error => {
            this.toastr.error(LOADING_PRODUCTS_ERROR_TITLE, LOADING_PRODUCTS_ERROR_MESSAGE);
          }
        );
      }
    });
  }
}
