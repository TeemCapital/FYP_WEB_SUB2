import { Subject, BehaviorSubject, finalize } from 'rxjs';
import { authService } from './Services/auth.service';
import { HttpServicesService } from './Services/http-services.service';
import { ProductsServiceService } from './Services/products-service.service';
import { Component, OnInit } from '@angular/core';
import {faFacebook,faTwitter,faInstagram,faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faShoppingBasket,faUser,faHeart,faBook,faChalkboard,faArrowAltCircleLeft,faPlus} from '@fortawesome/free-solid-svg-icons'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faFacebook= faFacebook;
  faBook=faBook;
  faPlus=faPlus;
  faArrowAltCircleLeft=faArrowAltCircleLeft;
  faChalkboard=faChalkboard;
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
  BuyerId: any=localStorage.getItem('BID');

  buyerLoggedIn:boolean=false;
  public searchTerm!:string;

  ordersCount!:number;

  constructor(private router:Router,private httpServ:HttpServicesService,private prodServ:ProductsServiceService,private httpServe:HttpServicesService,private authSer:authService,private http:HttpClient){

  }

  ngOnInit(): void {
    this.getCartCount();
    this.prodServ.deleted$.subscribe(res=>{
      if(res){
        this.getCartCount();
      }
    })
    this.adminLogin.subscribe((res)=>{
      this.isLoggedIn=res
    })
    if(this.UID){
      this.isLoggedIn=true
    }
    else{
      this.isLoggedIn=false
    }
    if(this.BuyerId){
      this.buyerLoggedIn=true
    }else{
      this.buyerLoggedIn=false;
    }
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.prodServ.search.next(this.searchTerm);
  }
  getCartCount():void{
    this.http.get<number>(`${this.httpServ.testUrl}/getProductCount`).subscribe(
      res=>{
        this.cartCounter=res
      }
    )
  }

  logout() {
    this.http.post<any>(`${this.httpServ.testUrl}/logout`,this.token).pipe(
      finalize(()=>{
        this.router.navigate(['home'])
      })
    ).subscribe(
      (res)=>{
        console.log(res)
      }
    )
    if(this.token && this.storeId || this.BuyerId){
      localStorage.removeItem('Token')
      localStorage.removeItem('UID')
      localStorage.removeItem('BID')
      this.authSer.logOut();
      this.isLoggedIn=false;
      this.adminLogin.next(this.isLoggedIn)
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.logoutNotification=true;
      setTimeout(() => {
          this.logoutNotification=false
          this.buyerLoggedIn=false
          window.location.reload();
      }, 2000);
    }

  }
}
