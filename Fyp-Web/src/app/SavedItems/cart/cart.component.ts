import { ProductsModel } from './../../Services/products.model';
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
  productData:ProductsModel[]=[];
  MenproductData:ProductsModel[]=[];
  faArrow=faArrowRight;
  showData:boolean=false;
  faShopping=faShoppingBag;

  constructor(private prodServ:ProductsServiceService) { }

  ngOnInit(): void {
    this.MenproductData= this.prodServ.getAllmenCartProducts();
    console.log(this.productData)

    if(this.MenproductData.length !=0){
      this.showData=true
    }
    else{
      this.showData=false
    }
  }

  delete(i:number){
    this.MenproductData.splice(i,1)
  }
}
