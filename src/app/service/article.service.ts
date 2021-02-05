import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CREATE_ARTICLE_URL, GET_ALL_ARTICLES, GET_ARTICLE_BY_ID, GET_COUNT_OF_AWAITING_APPROVAL_ARTICLES, GET_MY_ARTICLES} from '../shared/constant/url.constant';
import {httpOptions, httpOptionsWithAuthorizationAndWithoutContentType} from '../shared/constant/application.properties';
import {TokenService} from './token.service';
import {Observable} from 'rxjs';
import {IArticle} from '../shared/interface/IArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {
  }

  public getBrandsAndCategories(): Observable<any> {
    return this.http.get(CREATE_ARTICLE_URL, httpOptions(this.tokenService.getToken()));
  }

  public createArticle(
    articleCreateServiceModel: IArticle,
    image1: File,
    image2?: File,
    image3?: File,
    image4?: File,
    image5?: File,
    image6?: File,
  ): any {
    let fd = new FormData();
    fd.append('article',
      new Blob([
          JSON.stringify(articleCreateServiceModel)
        ],
        {
          type: 'application/json'
        }));
    fd.append('image1', image1, image1.name);
    image2 !== null ? fd.append('image2', image2, image2.name) : '';
    image3 !== null ? fd.append('image3', image3, image3.name) : '';
    image4 !== null ? fd.append('image4', image4, image4.name) : '';
    image5 !== null ? fd.append('image5', image5, image5.name) : '';
    image6 !== null ? fd.append('image6', image6, image6.name) : '';

    return this.http.post(CREATE_ARTICLE_URL, fd, httpOptionsWithAuthorizationAndWithoutContentType(this.tokenService.getToken()));
  }

  public getAllArticles(): Observable<any> {
    return this.http.get(GET_ALL_ARTICLES, httpOptions(this.tokenService.getToken()));
  }

  public getMyArticles(): Observable<any> {
    return this.http.get(GET_MY_ARTICLES, httpOptions(this.tokenService.getToken()));
  }

  public getArticleById(articleIdFromRoute: string): Observable<any> {
    return this.http.get(GET_ARTICLE_BY_ID + articleIdFromRoute, httpOptions(this.tokenService.getToken()));
  }

  public getCountOfAwaitingApprovalArticles(): Observable<any> {
    return this.http.get(GET_COUNT_OF_AWAITING_APPROVAL_ARTICLES, httpOptions(this.tokenService.getToken()))
  }
}
