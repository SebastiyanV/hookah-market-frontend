import {HttpHeaders} from '@angular/common/http';

// Secret
export const SECRET_KEY = 'MySecretKey';

// Authorities (Roles)
export const ROLE_ADMIN = 'ROLE_ADMIN';
export const ROLE_MODERATOR = 'ROLE_MODERATOR';
export const ROLE_USER = 'ROLE_USER';

// Article Type and Status
export const ACTIVE_STATUS = 'ACTIVE';
export const INACTIVE_STATUS = 'INACTIVE';
export const AWAITING_APPROVAL_STATUS = 'AWAITING_APPROVAL';
export const NORMAL_TYPE = 'NORMAL';
export const PROMO_TYPE = 'PROMO';

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

export function httpOptionMultipartData(): any {
  // headers.delete('Content-Type');
  return new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW', //boundary=----WebKitFormBoundary0ae4CymwYLjdqdI1
    Authorization: TOKEN_TYPE + window.sessionStorage.getItem(TOKEN_KEY)
  });
}

export function httpOptionsWithAuthorizationAndWithoutContentType(token?: string): any {
  if (token !== null) {

    return {
      headers: new HttpHeaders()
        .set('Authorization', `${TOKEN_TYPE + window.sessionStorage.getItem(TOKEN_KEY)}`)
    };
  } else {
    return null;
  }
}
