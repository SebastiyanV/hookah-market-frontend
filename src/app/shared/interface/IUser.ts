import {IAuthority} from './Authority';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  authorities: Array<IAuthority>;
}
