import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {SettingsComponent} from './profile/settings/settings.component';
import {ChangePasswordComponent} from './profile/settings/change-password/change-password.component';
import {EditProfileComponent} from './profile/settings/edit-profile/edit-profile.component';
import {NotificationsComponent} from './profile/settings/notifications/notifications.component';
import {ArticlesComponent} from './profile/articles/articles.component';
import {MessagesComponent} from './profile/messages/messages.component';
import {FavoritesComponent} from './profile/favorites/favorites.component';
import {UsersComponent} from './profile/favorites/users/users.component';
import {LastConsideredComponent} from './profile/favorites/last-considered/last-considered.component';
import {SearchesComponent} from './profile/favorites/searches/searches.component';
import {PaymentsComponent} from './profile/payments/payments.component';
import {ProfileComponent} from './profile/profile.component';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        SettingsComponent,
        ChangePasswordComponent,
        EditProfileComponent,
        NotificationsComponent,
        ArticlesComponent,
        MessagesComponent,
        FavoritesComponent,
        UsersComponent,
        LastConsideredComponent,
        SearchesComponent,
        PaymentsComponent,
        ProfileComponent
    ],
    exports: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        NgbTooltipModule,
    ]
})
export class UserModule {
}
