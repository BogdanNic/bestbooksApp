import { AddBookPage } from './../add-book/add-book';
import { Book } from './../../models/Book';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from "../../providers/books/books";


/**
 * Generated class for the BooksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  books : Book[] = [];
  storeBooks :Book[] =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private booksProvider :BooksProvider) {
    this.books.push(new Book("my title","my description",2006));
    this.books.push(new Book("my title2","my description2",20016));
  }

  async ionViewDidLoad() {
     var books   = await this.booksProvider.getBooks();
     console.log(books);
     this.books = books;
     this.storeBooks = books;
  }
  getItems(ev:any){
    let val = ev.target.value;
    if (val && val.trim()!=''){
      this.books = this.storeBooks.filter((book)=>{
        return (book.title.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }
  addBook(){
    this.navCtrl.push(AddBookPage);
  }
  

}
