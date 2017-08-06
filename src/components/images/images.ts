import { Component } from '@angular/core';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the ImagesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'images',
  templateUrl: 'images.html'
})
export class ImagesComponent {

  text: string;

 options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}
  imageUrl = "http://lorempixel.com/400/200/sports";

  constructor(private barcodeScanner :BarcodeScanner,private camera:Camera) {
    console.log('Hello ImagesComponent Component');
    this.text = 'Hello ImagesComponent';
  }
 


  startCamera(){
    console.log("camera");
    this.camera.getPicture(this.options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imageUrl = imageData;
      this.text="ok";
    }, (err) => {
       this.text="erropr";
      });
  }
  startBarcode(){
     console.log("barcode");
    this.barcodeScanner.scan().then((barcodeData) => {
     this.text=barcodeData.text;;
        }, (err) => {
        // An error occurred
           this.text=err;
      });
  }
  openGallery(){
    console.log("gallery");
  }

}
