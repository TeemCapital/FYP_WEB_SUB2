import { finalize } from 'rxjs';
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
  buyerId:any=localStorage.getItem('BID');
  checkOutNotification:boolean=false;

  loadingData:boolean=true;
  constructor(private prodServ:ProductsServiceService,private router:Router,private http:HttpClient, private httpServ:HttpServicesService,private authSer:authService) { }

  ngOnInit(): void {
    console.log("The result is"+this.authSer.loggedIn);
    this.http.get<any>(`${this.httpServ.testUrl}/buyer/${this.buyerId}/products`).pipe(
      finalize(()=>{
          this.loadingData=false;
      })
    ).subscribe(
        (res)=>{this.MenproductData.push(...res)
        console.log(this.MenproductData)
        this.MenproductData.forEach(element => {
        this.finalAmount=this.finalAmount+element.totalPrice;
      }); }
    )
  }
  delete(i:number,productData:any){
    this.MenproductData.splice(i,1)
    this.http.delete(`${this.httpServ.testUrl}/delete/`+productData.id).subscribe((res)=>{
      this.prodServ.deleted$.next(true);

  })

    // this.prodServ.cartProduct=this.MenproductData;


  }
  checkOut(){
    this.router.navigate([`${this.userId}/payments`])
  }
ngOnDestroy(): void {
    this.finalAmount=0;
}
}
