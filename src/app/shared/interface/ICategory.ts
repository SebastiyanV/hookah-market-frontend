import {IArticle} from './IArticle';

export interface ICategory {
  id: string;
  name: string;
  articles: Array<IArticle>;
}
