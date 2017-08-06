import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AddBookPage } from './../pages/add-book/add-book';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ToastController } from 'ionic-angular';
import { Deeplinks } from '@ionic-native/deeplinks';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { HttpModule } from "@angular/http";
import { LoginPage } from "../pages/login/login";
import { BooksProvider } from '../providers/books/books';
import { BooksPage } from "../pages/books/books";
import { ImagesComponent } from '../components/images/images';
import { DetailComponent } from '../components/detail/detail';
import { FinishComponent } from '../components/finish/finish';

//import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    BooksPage,
    AddBookPage,
    ImagesComponent,
    DetailComponent,
    FinishComponent, 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    BooksPage,
    AddBookPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    BooksProvider,
    BarcodeScanner,
    Camera,
    Deeplinks
    ,
  ]
})
export class AppModule {}
