import {Pipe, PipeTransform} from '@angular/core';
import {IArticle} from '../interface/IArticle';

@Pipe({
  name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {

  transform(
    articles: Array<IArticle>,
    searchFieldTitle: string,
    searchFieldDescription: string,
    searchFieldAuthor: string,
    searchFieldPrice: number
  ): Array<IArticle> {

    let wordsForTitle = searchFieldTitle.trim().split(/\s+/);
    let wordsForDesc = searchFieldDescription.trim().split(/\s+/);
    let wordsForAuthor = searchFieldAuthor.trim().split(/\s+/);
    let searchedPrice = searchFieldPrice;

    if (!articles) {
      return articles;
    }

    if (wordsForTitle.length === 0) {
      return articles;
    }

    let searchResult: Array<IArticle> = [];
    articles.forEach(article => {
      let flag: boolean = true;

      let authorsNames = article.author.firstName + ' ' + article.author.lastName;

      if (!checkIfContainsWords(article.title, wordsForTitle)
        || !checkIfContainsWords(article.description, wordsForDesc)
        || !checkIfContainsWords(authorsNames, wordsForAuthor)
      ) {
        flag = false;
      }

      if (flag) {
        if (!containsObject(article, searchResult)) {
          searchResult.push(article);
        }
      }
    });
    return searchResult;
  }

}

function checkIfContainsWords(string: string, words: Array<String>): boolean {
  let flag: boolean = true;
  words.forEach(word => {
    if (!string.toLowerCase().includes(word.toLowerCase())) {
      flag = false;
    }
  });
  return flag;
}

function containsObject(article: IArticle, searchResult: Array<IArticle>): boolean {
  let flag: boolean = false;
  searchResult.forEach(currentArticle => {
    if (currentArticle === article) {
      flag = true;
    }
  });
  return flag;
}
