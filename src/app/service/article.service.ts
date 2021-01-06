import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CREATE_ARTICLE_URL, GET_ALL_ARTICLES} from '../shared/constant/url.constant';
import {httpOptions} from '../shared/constant/application.properties';
import {TokenService} from './token.service';
import {Observable} from 'rxjs';
import {IArticle} from '../shared/interface/IArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
  }

  public getBrandsAndCategories(): Observable<any> {
    return this.http.get(CREATE_ARTICLE_URL, httpOptions(this.tokenService.getToken()));
  }

  public createArticle(article: IArticle): any {
    return this.http.post(CREATE_ARTICLE_URL, article, httpOptions(this.tokenService.getToken()));
  }

  public getAllArticles(): Observable<any> {
    return this.http.get(GET_ALL_ARTICLES, httpOptions(this.tokenService.getToken()));
  }
}
