import { FinishComponent } from './../../components/finish/finish';
import { ImagesComponent } from './../../components/images/images';
import { DetailComponent } from './../../components/detail/detail';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddBookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
   entryComponents:[DetailComponent],
  selector: 'page-add-book',
  templateUrl: 'add-book.html',
 
})
export class AddBookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBookPage');
    
  }

}
