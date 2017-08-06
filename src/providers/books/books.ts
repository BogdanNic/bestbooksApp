import { AppConfig } from './../../app/app.config';
import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/topromise';

/*
  Generated class for the BooksProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BooksProvider {

  

  constructor(public http: Http) {
    console.log('Hello BooksProvider Provider');
  }
  getBooks(){
    
    var header = new Headers();
    header.append("Authentication",'23119b4e-1916-4b00-ab3a-080f42169bac')
    
    return this.http.get(AppConfig.BOOKS_URL).map(data=>data.json()).toPromise();
  }

}
