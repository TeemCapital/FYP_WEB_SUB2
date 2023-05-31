import { CartModel } from './../../Services/products.model';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { faHeart, faShoppingBag, faShoppingBasket,faStar } from '@fortawesome/free-solid-svg-icons';
import { ProductsServiceService } from './../../Services/products-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, count, finalize, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/Interface/products';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  cart:boolean=false;
  fav:boolean=false;
  productid:any;
  url!:string;
  faHeart=faHeart;
  faTshirt=faTshirt;
  faShoppingBag=faShoppingBag;
  faStar=faStar;
  quantity:any=1;
  disableDecrement:boolean=false;
  totalAmount:number=0;
  newPrice:any;
  data:any;
  buyerId:any=localStorage.getItem('BID')
  favNoti:boolean=false;


  products:Products[]=[];

  constructor(private router:Router,private activatedroute:ActivatedRoute,private prodServ:ProductsServiceService,private http:HttpClient,private httpServ:HttpServicesService) { }

  ngOnInit(): void {
    this.url=this.router.url;
      this.activatedroute.paramMap.subscribe((param)=>{
        this.productid=param.get('id')
        this.http.get<any>(`${this.httpServ.testUrl}/show/`+this.productid).subscribe(
          (res)=>{this.products.push(res)}
          )
          console.log(this.products)
      })
  }
  AddtoCart(data:any){
    this.prodServ.deleted$.next(true);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.cart=true
    this.products[0].quantity=this.quantity;
    this.http.post<any>(`${this.httpServ.testUrl}/cart`,{...this.products[0],user_id:+this.buyerId}).subscribe((res)=>(console
      .log(res)))
    console.log(this.prodServ.cartProduct)
    this.http.get<number>(`${this.httpServ.testUrl}/getProductCount`).subscribe(
      res=>{
        let count=res;
        this.prodServ.cartItemsCount$.next((count));
      }
    )
    setTimeout(() => {
      this.cart=false
    }, 3000);
  }

  Addtofav(){
  this.http.post<any>(`${this.httpServ.testUrl}/addToFavourites`,{...this.products[0],user_id:this.buyerId}).pipe(
    finalize(()=>{
      this.favNoti=true
      setTimeout(() => {
        this.favNoti=false
      }, 2000);
    })
  ).subscribe(
    (res)=>{
      console.log(res)
    }

  )
}

increment(){
  this.quantity=this.quantity+1
  console.log(this.quantity)
  if(this.quantity > 1){
    this.disableDecrement=true
  }
}
decrement(){
  this.quantity=this.quantity-1
  if(this.quantity < 2){
    this.disableDecrement=false;
  }

}
}
