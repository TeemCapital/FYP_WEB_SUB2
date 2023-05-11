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
  products!:any;

  faArrow=faArrowRight;
  faShopping=faShoppingBag;
  faTruck=faTruck;
  faCreditCard=faCreditCard;
  constructor(private httpSer:HttpServicesService,private prodServ:ProductsServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<CartModel>(`${this.httpSer.testUrl}/showCart`).subscribe(
      (res)=>{
        this.products=res
      })
      this.http.get<number>(`${this.httpSer.testUrl}/totalAmount`).subscribe(
        (res)=>{
          this.finalAmount=res
        }
      )
    }

}
