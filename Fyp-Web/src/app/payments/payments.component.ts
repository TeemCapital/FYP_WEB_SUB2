import { faArrowRight,faShoppingBag,faTruck,faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../Services/products-service.service';
import { CartModel } from '../Services/products.model';
import { HttpClient } from '@angular/common/http';
import { HttpServicesService } from '../Services/http-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  showCheckoutData!:CartModel[];
  finalAmount!:number;
  products!:any[];
  buyerId:any=localStorage.getItem('BID');
  faArrow=faArrowRight;
  faShopping=faShoppingBag;
  faTruck=faTruck;
  faCreditCard=faCreditCard;
  address!:string;
  buyer_email_address!:string;
  buyer_contact_number!:string;
  paymentMethod:string[]=['Pay with card', 'Cash on Delivery']
  selectedPaymentMethod!:string;
  orderNoti:boolean=false;
  constructor(private httpSer:HttpServicesService,private prodServ:ProductsServiceService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.address=this.prodServ.address;
    this.buyer_email_address=this.prodServ.buyer_email_address;
    this.buyer_contact_number=this.prodServ.buyer_contact_number;

    this.http.get<any>(`${this.httpSer.testUrl}/buyer/${this.buyerId}/products`).subscribe(
      (res)=>{
        this.products=res
        console.log(this.products)
      })
      this.http.get<number>(`${this.httpSer.testUrl}/totalAmount`).subscribe(
        (res)=>{
          this.finalAmount=res
        }
      )
    }
    placeOrder(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      for (let i = 0; i < this.products.length; i++) {
        const data = this.products[i];
        data.address=this.address;
        data.buyer_contact_number=this.buyer_contact_number;
        data.buyer_email_address=this.buyer_email_address;
        data.payment_method=this.selectedPaymentMethod
        this.http.post<any>(`${this.httpSer.testUrl}/placeOrder`,data
        ).subscribe(
          (res)=>{
            if(res){
              this.orderNoti=true
              setTimeout(() => {
                this.orderNoti=false
                this.router.navigate(['home'])
              }, 2000);
            }
          }
        )
      }
      this.http.delete<any>(`${this.httpSer.testUrl}/${this.buyerId}/deleteCartItems`).subscribe(
        (res)=>{
          console.log(res)
        }
      )
    }

}
