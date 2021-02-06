import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFountComponent} from './shared/page-not-fount/page-not-fount.component';
import {HomePageComponent} from './home/home-page/home-page.component';
import {LoginComponent} from './user/auth/login/login.component';
import {RegisterComponent} from './user/auth/register/register.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ArticlesComponent} from './user/profile/articles/articles.component';
import {MessagesComponent} from './user/profile/messages/messages.component';
import {PaymentsComponent} from './user/profile/payments/payments.component';
import {FavoritesComponent} from './user/profile/favorites/favorites.component';
import {SettingsComponent} from './user/profile/settings/settings.component';
import {GuestGuard} from './shared/guard/guest.guard';
import {UserGuard} from './shared/guard/user.guard';
import {SearchesComponent} from './user/profile/favorites/searches/searches.component';
import {UsersComponent} from './user/profile/favorites/users/users.component';
import {ArticleCreateComponent} from './article/article-create/article-create.component';
import {ArticleViewComponent} from './article/article-view/article-view.component';
import {AdminComponent} from './admin/admin/admin.component';
import {AdminGuard} from './shared/guard/admin.guard';
import {DashboardComponent as AP_Dashboard} from './admin/admin/dashboard/dashboard.component';
import {ArticlesComponent as AP_Articles} from './admin/admin/articles/articles.component';
import {UsersComponent as AP_Users} from './admin/admin/users/users.component';
import {ReportsComponent as AP_Reports} from './admin/admin/reports/reports.component';
import {AwaitingArticlesComponent} from './admin/admin/awaiting-articles/awaiting-articles.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'auth/login', component: LoginComponent, canActivate: [GuestGuard]
  },
  {
    path: 'auth/register', component: RegisterComponent, canActivate: [GuestGuard]
  },
  {
    path: 'profile', component: ProfileComponent, children: [
      {
        path: 'articles', component: ArticlesComponent
      },
      {
        path: 'messages', component: MessagesComponent
      },
      {
        path: 'payments', component: PaymentsComponent
      },
      {
        path: 'favorites', component: FavoritesComponent, children: [
          {
            path: 'articles', component: ArticlesComponent
          },
          {
            path: 'users', component: UsersComponent
          },
          {
            path: 'searches', component: SearchesComponent
          },
        ]
      },
      {
        path: 'settings', component: SettingsComponent
      }
    ], canActivate: [UserGuard], canActivateChild: [UserGuard]
  },
  {
    path: 'article/create', component: ArticleCreateComponent, canActivate: [UserGuard], canActivateChild: [UserGuard]
  },
  {
    path: 'article/:articleId', component: ArticleViewComponent, canActivate: [UserGuard]
  },
  {
    path: 'hm-admin', component: AdminComponent, canActivate: [AdminGuard], canActivateChild: [AdminGuard], children: [
      {
        path: 'dashboard', component: AP_Dashboard
      },
      {
        path: 'articles', component: AP_Articles
      },
      {
        path: 'articles/awaiting', component: AwaitingArticlesComponent
      },
      {
        path: 'users', component: AP_Users
      },
      {
        path: 'reports', component: AP_Reports
      }
    ]
  },
  {
    path: '**', component: PageNotFountComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
