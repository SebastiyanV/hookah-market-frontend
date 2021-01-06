import {IArticle} from './IArticle';

export interface IBrand {
  id: string;
  name: string;
  articles: Array<IArticle>;
}
