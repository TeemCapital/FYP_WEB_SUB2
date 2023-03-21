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
  cartData:any;
  Productquantity!:number;
  finalAmount:number=0;
  constructor(private prodServ:ProductsServiceService) { }

  ngOnInit(): void {
    this.MenproductData= this.prodServ.getAllmenCartProducts();
    this.Productquantity=this.prodServ.ProductQuantity
    console.log(this.MenproductData)

    if(this.MenproductData.length > 0){
      this.showData=true
    }
    else{
      this.showData=false
    }
    this.finalAmount+=this.prodServ.totalCartAmout
    console.log(this.finalAmount)
  }

  delete(i:number,productData:any){
    this.MenproductData.splice(i,1)
    this.prodServ.cartProduct=this.MenproductData;
    this.finalAmount=this.finalAmount-(productData.price *  this.Productquantity)
    this.prodServ.count=this.prodServ.count-1;
    let itemCount=this.prodServ.count-1;
    if(!this.MenproductData.length){
      this.showData=false
    }
    this.prodServ.cartItemsCount$.next((itemCount));

  }

}
