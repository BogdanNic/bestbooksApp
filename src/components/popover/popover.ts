import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;

  constructor(private viewCtrl:ViewController) {
    console.log('Hello PopoverComponent Component');
    this.text = 'Hello World';

  }


}
