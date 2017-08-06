import { BooksProvider } from './../../providers/books/books';
import {Component }from '@angular/core'; 
import {NavController, NavParams, ToastController }from 'ionic-angular'; 
import {User }from "../../models/User"; 
import {AuthProvider }from "../../providers/auth/auth"; 
import { BooksPage } from "../books/books";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info * on Ionic pages and navigation. */

@Component( {
selector:'page-login', 
templateUrl:'login.html', 
})
export class LoginPage {

private user = new User("bogdan_nic100@yahoo.com", "qwerty34"); 

constructor(public navCtrl:NavController, public navParams:NavParams, private authProvider:AuthProvider, private toast:ToastController,private booksProvider:BooksProvider ) {
  if (authProvider.getUser()){
    navCtrl.setRoot(BooksPage);
  }
}

ionViewDidLoad() {
console.log('ionViewDidLoad LoginPage'); 
}
async login(){
  var  message = "s";
  try {
    var response = await this.authProvider.loginUser(this.user).toPromise();
    if (!response.error){
      this.showToast("Welcome "+response.user.name);
      this.navCtrl.setRoot(BooksPage);
      this.authProvider.setUser(response.user); 
    }else{
      this.showToast("Error "+response.message);
    }
  } catch (error) {
    message = "orrro";
    console.log(error);
     this.showToast("Error "+error.message);
  } 
}
showToast(message){
   this.toast.create( {
        message:message, 
        duration:3000
    }).present();
}


async login2() {
    this.authProvider.loginUser(this.user).subscribe(data => this.getData(data), data => console.log("error" + data)); 

 
  // try {
  //    var  user = await this.authProvider.loginUser(this.user).toPromise();
  //    var books = await this.booksProvider.getBooks();
  //    console.log(user);
  //    console.log(books);
  // } catch (error) {
  //   var s=error;
  //   console.log(error);
  // }
   
}
getData(data) {
    console.log(data);
    if (!data.error) {
       localStorage.setItem("api",data.user.api);
       this.toast.create( {
        message:`Bun venit ${data.user.name}`, 
        duration:3000
    }).present();
      this.navCtrl.setRoot(BooksPage);
    }

  }



}
