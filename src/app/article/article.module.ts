import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleCreateComponent} from './article-create/article-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [ArticleCreateComponent],
  exports: [
    ArticleCreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    AppRoutingModule,
  ]
})
export class ArticleModule {
}
