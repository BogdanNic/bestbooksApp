import { User } from './../../models/User';
import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from "../../app/app.config";


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }
  
  loginUser(user:User){
    
    var headers =new Headers();
    headers.append('Content-Type','application/json;charset=UTF-8')
    var data ={email:user.email, password:user.password};
    return this.http.post('http://bestbooks.herokuapp.com/user/login',data,{headers:headers}).map(resp => resp.json());
  }
  getUser():User {
    if (localStorage.getItem("auth")){
      return  <User>JSON.parse(localStorage.getItem("user"));
    }
  }
  setUser(user:User){
    localStorage.setItem("auth","true");
    localStorage.setItem("user",JSON.stringify(user));
  }

}
