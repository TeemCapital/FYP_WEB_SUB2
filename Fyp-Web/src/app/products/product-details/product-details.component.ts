import { CartModel } from './../../Services/products.model';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { faHeart, faShoppingBag, faShoppingBasket,faStar } from '@fortawesome/free-solid-svg-icons';
import { ProductsServiceService } from './../../Services/products-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, count, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/Interface/products';
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
  faShoppingBag=faShoppingBag;
  faStar=faStar;
  quantity:any=1;
  disableDecrement:boolean=false;
  totalAmount:number=0;
  newPrice:any;
  data:any;



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
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.cart=true
    this.products[0].quantity=this.quantity;
    this.http.post<any>(`${this.httpServ.testUrl}/cart`,this.products[0]).subscribe((res)=>(console
      .log(res)))
    console.log(this.prodServ.cartProduct)
    let count=this.prodServ.count++;
    this.prodServ.cartItemsCount$.next((count));
    setTimeout(() => {
      this.cart=false
    }, 3000);
  }
  Addtofav(){
    // this.fav=true
    // this.activatedroute.paramMap.subscribe((param)=>{
    //   this.productid=param.get('id')
    //   this.product=this.prodServ.fetchedProducts.find(x=>x.id==this.productid)
    //   this.prodServ.favProduct=this.product;
    //   setTimeout(() => {
    //     this.fav=false
    //   }, 3000);
    // })
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

