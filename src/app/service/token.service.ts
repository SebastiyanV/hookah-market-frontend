import {Injectable} from '@angular/core';
import {TOKEN_KEY, USER_KEY} from '../shared/constant/application.properties';
import {IUser} from '../shared/interface/IUser';
import {CryptoJsService} from './crypto-js.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private crypto: CryptoJsService
  ) {
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public clearStorage(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(USER_KEY);
  }

  public saveUser(user: IUser): void {
    window.sessionStorage.setItem(USER_KEY, this.crypto.encryptData(user));
  }

  public getUser(): IUser {
    return this.crypto.decryptData(window.sessionStorage.getItem(USER_KEY));
  }

  public updateUser(firstName: string, lastName: string, phoneNumber: string): void {
    const user = this.getUser();
    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phoneNumber;
    this.saveUser(user);
  }
}
