import { ProductsServiceService } from '../../Services/products-service.service';
import { Component, OnInit } from '@angular/core';
import {faArrowRight,faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import { Products } from '../../Interface/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productData:any;
  faArrow=faArrowRight;
  showData:boolean=false;
  faShopping=faShoppingBag;

  constructor(private prodServ:ProductsServiceService) { }

  ngOnInit(): void {
      this.productData=this.prodServ.cartProduct;
    if(this.productData.length != 0){
      this.showData= true;
    }
  }

}
