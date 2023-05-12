import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authService{
  buyerId:any=localStorage.getItem('BID')
  loggedIn:boolean=false;

  logIn(){
    if(this.buyerId){
      this.loggedIn=true;
    }
    console.log("login worked")
  }
  logOut(){
    if(!this.buyerId){
      this.loggedIn=false
    }
   console.log("logout worked")
  }
  isAutheticated(){
    return this.loggedIn;
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
