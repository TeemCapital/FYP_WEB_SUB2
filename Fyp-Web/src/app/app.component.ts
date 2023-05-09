import { Subject, BehaviorSubject } from 'rxjs';
import { authService } from './Services/auth.service';
import { HttpServicesService } from './Services/http-services.service';
import { ProductsServiceService } from './Services/products-service.service';
import { Component, OnInit } from '@angular/core';
import {faFacebook,faTwitter,faInstagram,faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faShoppingBasket,faUser,faHeart} from '@fortawesome/free-solid-svg-icons'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faFacebook= faFacebook;
  faInstagram= faInstagram;
  faTwitter=faTwitter ;
  faTelegram=faTelegram ;
  faShoppingBasket=faShoppingBasket;
  faUser=faUser;
  faHeart=faHeart;
  title = 'Fyp-Web';
  isLoggedIn=false;
  cartCounter!:number;
  UID=localStorage.getItem('UID')
  token=localStorage.getItem('Token')
  login:BehaviorSubject<boolean> =new BehaviorSubject(false);

  public searchTerm !: string;
  storeId: any=localStorage.getItem('UID');
  logoutNotification: boolean=false;
  constructor(private router:Router,private httpServ:HttpServicesService,private prodServ:ProductsServiceService,private httpServe:HttpServicesService,private authSer:authService,private http:HttpClient){
    this.prodServ.cartItemsCount$.subscribe((res)=>{
    this.cartCounter=res;
    });
    console.log(this.cartCounter)

    // this.httpServe.GetProducts().subscribe()

  }
  ngOnInit(): void {
    if(this.UID){
      this.isLoggedIn=true
    }
    else{
      this.isLoggedIn=false
    }
    this.http.get<any>(`${this.httpServe.testUrl}`)
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.prodServ.search.next(this.searchTerm);
  }
  logout() {
    this.http.post<any>(`${this.httpServ.testUrl}/logout`,this.token).subscribe(
      (res)=>{
        console.log(res)
      }
    )
    if(this.token && this.storeId){
      localStorage.removeItem('Token')
      localStorage.removeItem('UID')
      this.authSer.logOut();
      this.logoutNotification=true;
      setTimeout(() => {
          this.logoutNotification=false
      }, 2000);
    }

  }
}
