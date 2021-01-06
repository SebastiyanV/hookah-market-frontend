import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CHANGE_PASSWORD_URL, USER_EDIT_PROFILE_URL} from '../shared/constant/url.constant';
import {IUser} from '../shared/interface/IUser';
import {TokenService} from './token.service';
import {httpOptions} from '../shared/constant/application.properties';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    this.token = this.tokenService.getToken();
  }

  public editProfile(user: IUser): any {
    let result: any = '';
    try {
      result = this.http.post(USER_EDIT_PROFILE_URL, user, httpOptions(this.tokenService.getToken()));
    } catch (Error) {
      return result;
    }
    this.tokenService.updateUser(user.firstName, user.lastName, user.phoneNumber);
    return result;
  }

  public changePassword(data: any): any {
    return this.http.post(CHANGE_PASSWORD_URL, data, httpOptions(this.tokenService.getToken()));
  }
}
