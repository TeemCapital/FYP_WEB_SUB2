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
  logoutNotification: boolean=false;
  adminLogin=new Subject<boolean>();

  cartCounter!:number;

  UID=localStorage.getItem('UID')
  token=localStorage.getItem('Token')
  storeId: any=localStorage.getItem('UID');

  public searchTerm!:string;

  constructor(private router:Router,private httpServ:HttpServicesService,private prodServ:ProductsServiceService,private httpServe:HttpServicesService,private authSer:authService,private http:HttpClient){
    this.prodServ.cartItemsCount$.subscribe((res)=>{
    this.cartCounter=res;
    });
    console.log(this.cartCounter)
  }
  ngOnInit(): void {
    this.adminLogin.subscribe((res)=>{
      this.isLoggedIn=res
    })
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
      this.isLoggedIn=false;
      this.adminLogin.next(this.isLoggedIn)
      this.logoutNotification=true;
      setTimeout(() => {
          this.logoutNotification=false
          this.router.navigate(['/home'])

      }, 2000);
    }

  }
}
