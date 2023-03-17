import { HttpServicesService } from 'src/app/Services/http-services.service';
import { faHeart, faShoppingBag, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { ProductsServiceService } from './../../Services/products-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { count } from 'rxjs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  cart:boolean=false;
  fav:boolean=false;
  productid:any;
  faHeart=faHeart;
  faShoppingBag=faShoppingBag;
  constructor(private activatedroute:ActivatedRoute,private prodServ:ProductsServiceService,private http:HttpServicesService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param)=>{
    this.productid=param.get('id')
    this.product=this.http.products.find(x=>x.id==this.productid)
    console.log(this.product)

  })

  }
  AddtoCart(){
    this.cart=true
    this.prodServ.cartProduct.push(this.product);
    let count=this.prodServ.count++;
    this.prodServ.cartItemsCount$.next((count));
    setTimeout(() => {
      this.cart=false
    }, 3000);
  }

  Addtofav(){
    this.fav=true
    this.activatedroute.paramMap.subscribe((param)=>{
      this.productid=param.get('id')
      this.product=this.prodServ.fetchedProducts.find(x=>x.id==this.productid)
      this.prodServ.favProduct=this.product;
      setTimeout(() => {
        this.fav=false
      }, 3000);
      console.log(this.prodServ.favProduct)
    })



}
}
