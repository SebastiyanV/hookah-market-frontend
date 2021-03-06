import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleCreateComponent} from './article-create/article-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../app-routing.module';
import {MatCurrencyFormatModule} from 'mat-currency-format';
import { ArticleViewComponent } from './article-view/article-view.component';


@NgModule({
  declarations: [ArticleCreateComponent, ArticleViewComponent],
  exports: [
    ArticleCreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    AppRoutingModule,
    MatCurrencyFormatModule,
  ]
})
export class ArticleModule {
}
