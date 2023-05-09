import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authService{

  loggedIn:boolean=false;

  logIn(){
    this.loggedIn=true;
    console.log("login worked")
  }
  logOut(){
   this.loggedIn=false
   console.log("logout worked")

  }
  isAutheticated(){
    return this.loggedIn;
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
