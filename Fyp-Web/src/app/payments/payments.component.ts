import { faArrowRight,faShoppingBag,faTruck,faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../Services/products-service.service';
import { CartModel } from '../Services/products.model';
import { HttpClient } from '@angular/common/http';
import { HttpServicesService } from '../Services/http-services.service';
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

  paymentMethod:string[]=['Pay with card', 'Cash on Delivery']
  selectedPaymentMethod!:string;
  constructor(private httpSer:HttpServicesService,private prodServ:ProductsServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.paymentMethod)
    this.address=this.prodServ.address;

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
      this.http.post<any>(`${this.httpSer.testUrl}/placeOrder`,{...this.products[0],address:this.address,payment_method:this.selectedPaymentMethod}).subscribe(
        (res)=>{
          console.log(res)
        }
      )
    }

}
