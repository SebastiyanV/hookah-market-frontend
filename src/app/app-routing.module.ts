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

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'auth/login', component: LoginComponent, canActivate: [GuestGuard]},
  {path: 'auth/register', component: RegisterComponent, canActivate: [GuestGuard]},
  {
    path: 'profile', component: ProfileComponent, children: [
      {path: 'articles', component: ArticlesComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'payments', component: PaymentsComponent},
      {
        path: 'favorites', component: FavoritesComponent, children: [
          {path: 'articles', component: ArticlesComponent},
          {path: 'users', component: UsersComponent},
          {path: 'searches', component: SearchesComponent},
        ]
      },
      {path: 'settings', component: SettingsComponent}
    ], canActivate: [UserGuard], canActivateChild: [UserGuard]
  },
  {
    path: 'article/create', component: ArticleCreateComponent, canActivate: [UserGuard], canActivateChild: [UserGuard]
  },
  {path: '**', component: PageNotFountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
