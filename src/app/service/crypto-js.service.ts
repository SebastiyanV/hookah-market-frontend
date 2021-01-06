import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {SECRET_KEY} from '../shared/constant/application.properties';

@Injectable({
  providedIn: 'root'
})
export class CryptoJsService {

  constructor() {
  }

  public encryptData(data: any): string {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    } catch (e) {
      console.log(e);
    }
  }

  decryptData(data): any {

    try {
      const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
