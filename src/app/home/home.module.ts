import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {ArticleModule} from '../article/article.module';
import { PromoArticlesComponent } from './promo-articles/promo-articles.component';


@NgModule({
  declarations: [HomePageComponent, PromoArticlesComponent],
  imports: [
    CommonModule,
    ArticleModule,
  ]
})
export class HomeModule {
}
