import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {SideBarComponent} from './layout/side-bar/side-bar.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {ArticlesComponent} from './admin/articles/articles.component';
import {UsersComponent} from './admin/users/users.component';
import {ReportsComponent} from './admin/reports/reports.component';
import { AdminComponent } from './admin/admin.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatCurrencyFormatModule} from 'mat-currency-format';
import { AwaitingArticlesComponent } from './admin/awaiting-articles/awaiting-articles.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    NavbarComponent,
    ArticlesComponent,
    UsersComponent,
    ReportsComponent,
    AdminComponent,
    AwaitingArticlesComponent
  ],
  exports: [
    AdminComponent,
    SideBarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbTooltipModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatCurrencyFormatModule
  ]
})
export class AdminModule {
}
