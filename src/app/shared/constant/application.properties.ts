import {HttpHeaders} from '@angular/common/http';

// Secret
export const SECRET_KEY = 'MySecretKey';

// Authorities (Roles)
export const ROLE_ADMIN = 'ROLE_ADMIN';
export const ROLE_MODERATOR = 'ROLE_MODERATOR';
export const ROLE_USER = 'ROLE_USER';

// SessionStorage props
export const TOKEN_KEY = 'auth';
export const TOKEN_TYPE = 'Bearer ';
export const USER_KEY = 'usdt';

// Toastr Options
export const TOASTR_OPTIONS = {
  positionClass: 'toast-bottom-right',
  progressBar: true
};

// Headers
export function httpOptions(token?: string): any {
  if (token !== null) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: TOKEN_TYPE + window.sessionStorage.getItem(TOKEN_KEY)
      })
    };
  } else {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
}
