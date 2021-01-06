import {IUser} from './IUser';
import {IBrand} from './IBrand';
import {ICategory} from './ICategory';

export interface IArticle {
  id: string;
  title: string;
  description: string;
  articleCondition: string;
  negotiable: boolean;
  price: number;
  chatConversation: boolean;
  publishedOn: Date;
  lastModify: Date;
  author: IUser;
  brand: IBrand;
  category: ICategory;
}
