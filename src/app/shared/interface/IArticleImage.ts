import {IArticle} from './IArticle';

export interface IArticleImage {
  id: string;
  imageName: string;
  coverImage: boolean;
  article: IArticle;
}
