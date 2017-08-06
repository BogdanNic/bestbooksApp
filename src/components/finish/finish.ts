import { Component } from '@angular/core';

/**
 * Generated class for the FinishComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'finish',
  templateUrl: 'finish.html'
})
export class FinishComponent {

  text: string;

  constructor() {
    console.log('Hello FinishComponent Component');
    this.text = 'Hello FinishComponent';
  }

}
