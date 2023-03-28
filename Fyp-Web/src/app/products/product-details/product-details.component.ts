import { CartModel } from './../../Services/products.model';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { faHeart, faShoppingBag, faShoppingBasket,faStar } from '@fortawesome/free-solid-svg-icons';
import { ProductsServiceService } from './../../Services/products-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { count, map } from 'rxjs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!:CartModel;
  cart:boolean=false;
  fav:boolean=false;
  productid:any;
  url!:string;
  faHeart=faHeart;
  faShoppingBag=faShoppingBag;
  faStar=faStar;
  quantity:number=1;
  disableDecrement:boolean=false;
  totalAmount:number=0;
  newPrice:any;
  constructor(private router:Router,private activatedroute:ActivatedRoute,private prodServ:ProductsServiceService,private http:HttpServicesService) { }

  ngOnInit(): void {
    this.url=this.router.url;
    console.log(this.url)
    console.log("component works")
    if(this.url.includes('/men')){
      this.activatedroute.paramMap.subscribe((param)=>{
        this.productid=param.get('id')
        let data=this.http.products.find(x=>x.id==this.productid);
        if(data){
          this.product={...data,quantity:1,totalPrice:0}
        }
        console.log(this.product)
      })
    }
    if(this.url.includes('/women')){
      this.activatedroute.paramMap.subscribe((param)=>{
        this.productid=param.get('id')
        // let data=this.http.products.find(x=>x.id==this.productid);
        // if(data){
        //   this.product={...data,quantity:1,totalPrice:0}
        // }
        // console.log(this.product)
        this.product=this.prodServ.WomensProducts.find(x=>x.id==this.productid)
        console.log(this.product)
      })
    }

  }
  AddtoCart(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.cart=true
    this.product.totalPrice=this.product.price! * this.quantity;
    // this.totalAmount=this.product.price! * this.quantity;
    this.product.quantity=this.quantity
    this.totalAmount= this.product.totalPrice;

    this.prodServ.totalCartAmount+=this.totalAmount;

    this.prodServ.ProductQuantity=this.quantity;

    console.log(this.product,"Products log")
    this.prodServ.cartProduct.push(this.product);
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
  // this.product.quantity=this.product.quantity!+1;
  console.log(typeof(this.product.quantity),"type")
  console.log(this.quantity)
  if(this.quantity > 1){
    this.disableDecrement=true
  }
}
decrement(){
  this.quantity=this.quantity-1
  this.product.quantity=this.product.quantity!-1;
  if(this.quantity < 2){
    this.disableDecrement=false;
  }

}
}

