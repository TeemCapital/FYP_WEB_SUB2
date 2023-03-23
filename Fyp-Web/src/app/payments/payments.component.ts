import { faArrowRight,faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../Services/products-service.service';
import { CartModel } from '../Services/products.model';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  showCheckoutData!:CartModel[];
  finalAmount!:number;

  faArrow=faArrowRight;
  faShopping=faShoppingBag;
  constructor(private prodServ:ProductsServiceService) { }

  ngOnInit(): void {
    this.showCheckoutData=this.prodServ.checkoutData;
    this.finalAmount=this.prodServ.finalCheckOutPrice;
  }

}
