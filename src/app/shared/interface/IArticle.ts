import {IUser} from './IUser';
import {IBrand} from './IBrand';
import {ICategory} from './ICategory';
import {IArticleImage} from './IArticleImage';
import {IArticleView} from './IArticleView';

export interface IArticle {
  id: string;
  title: string;
  description: string;
  articleCondition: string;
  negotiable: boolean;
  price: number;
  chatConversation: boolean;
  type: string;
  status: string;
  publishedOn: Date;
  lastModify: Date;
  author: IUser;
  brand: IBrand;
  category: ICategory;
  images: Array<IArticleImage>
  views: Array<IArticleView>
}
