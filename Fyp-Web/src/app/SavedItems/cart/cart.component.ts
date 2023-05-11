import { Router } from '@angular/router';
import { ProductsModel, CartModel } from './../../Services/products.model';
import { ProductsServiceService } from '../../Services/products-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {faArrowRight,faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import { Products } from '../../Interface/products';
import { HttpClient } from '@angular/common/http';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { authService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit,OnDestroy {
  productData:ProductsModel[]=[];
  MenproductData:CartModel[]=[];
  faArrow=faArrowRight;
  faShopping=faShoppingBag;
  cartData:any;
  Productquantity!:number;
  finalAmount:number=0;
  userId:any=localStorage.getItem('UID');
  checkOutNotification:boolean=false;

  constructor(private prodServ:ProductsServiceService,private router:Router,private http:HttpClient, private httpServ:HttpServicesService,private authSer:authService) { }

  ngOnInit(): void {
    console.log("The result is"+this.authSer.loggedIn);
    this.http.get<any>(`${this.httpServ.testUrl}/showCart`).subscribe(
        (res)=>{this.MenproductData.push(...res)
        console.log(this.MenproductData)
        this.MenproductData.forEach(element => {
        this.finalAmount=this.finalAmount+element.totalPrice;
      }); }
    )
    console.log(this.MenproductData.length)

    console.log(this.finalAmount,"After product add")
  }

  delete(i:number,productData:any){
    this.MenproductData.splice(i,1)
    this.http.delete(`${this.httpServ.testUrl}/delete/`+productData.id).subscribe((res)=>{
      this.prodServ.deleted$.next(true);
      // this.finalAmount=this.finalAmount - productData.totalPrice;
      // this.prodServ.count=this.prodServ.count-1;
      // let itemCount=this.prodServ.count-1;
      // this.prodServ.cartItemsCount$.next((itemCount));
  })

    // this.prodServ.cartProduct=this.MenproductData;


  }
  checkOut(){
    // this.prodServ.checkoutData=this.MenproductData;
    // console.log(this.prodServ.checkoutData,"checkoutData")
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    // this.checkOutNotification=true
    // setTimeout(() => {
    //   this.checkOutNotification=false;
    //   this.prodServ.finalCheckOutPrice=this.finalAmount;
    //   this.router.navigate(["/payment"])
    // }, 2000);
    this.router.navigate([`${this.userId}/payments`])

  }
ngOnDestroy(): void {
    this.finalAmount=0;
}
}
