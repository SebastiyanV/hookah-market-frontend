import {IArticle} from './IArticle';

export interface IArticleView {
  id: string;
  article: IArticle;
  ipAddress: string;
  date: Date
}
