import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CHANGE_PASSWORD_URL, DELETE_PROFILE_PICTURE, UPDATE_PROFILE_PICTURE, USER_EDIT_PROFILE_URL} from '../shared/constant/url.constant';
import {IUser} from '../shared/interface/IUser';
import {TokenService} from './token.service';
import {httpOptions, httpOptionsWithAuthorizationAndWithoutContentType} from '../shared/constant/application.properties';

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

  public updateProfilePicture(profilePicture: any) {
    return this.http.post(UPDATE_PROFILE_PICTURE, profilePicture, httpOptionsWithAuthorizationAndWithoutContentType(this.tokenService.getToken()));
  }

  public deleteProfilePicture() {
    return this.http.delete(DELETE_PROFILE_PICTURE, httpOptions(this.tokenService.getToken()));
  }
}
