import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Environment} from "../../Environment";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text:string;
  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){
    this.text = Environment.URL_API;
  }
}
