import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFountComponent} from './page-not-fount/page-not-fount.component';
import {GetCoverImagePipe} from './pipe/get-cover-image.pipe';
import { SearchByTitlePipe } from './pipe/search-by-title.pipe';

@NgModule({
  declarations: [PageNotFountComponent, GetCoverImagePipe, SearchByTitlePipe],
  exports: [
    GetCoverImagePipe,
    SearchByTitlePipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
