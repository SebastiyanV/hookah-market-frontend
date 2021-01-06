import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../shared/interface/IUser';
import {USER_LOGIN_URL, USER_REGISTER_URL} from '../shared/constant/url.constant';
import {httpOptions, ROLE_ADMIN, TOKEN_KEY} from '../shared/constant/application.properties';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
  }

  public isLogged(): any {
    return window.sessionStorage.getItem(TOKEN_KEY) !== null;
  }

  public isAdmin(): boolean {
    const authorities = [];
    this.getCurrentUser().authorities.forEach(authority => authorities.push(authority.authority));
    return authorities.some(authority => authority === ROLE_ADMIN);
  }

  public getCurrentUser(): IUser {
    return this.tokenService.getUser();
  }

  public register(user: IUser): any {
    return this.http.post(USER_REGISTER_URL, user, httpOptions());
  }

  public login(user: IUser): any {
    return this.http.post(USER_LOGIN_URL, user, httpOptions());
  }

  public logout(): void {
    this.tokenService.clearStorage();
  }
}
