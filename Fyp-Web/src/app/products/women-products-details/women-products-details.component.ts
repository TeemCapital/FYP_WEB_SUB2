import { ProductsModel } from './../../Services/products.model';
import { ProductsServiceService } from './../../Services/products-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-products-details',
  templateUrl: './women-products-details.component.html',
  styleUrls: ['./women-products-details.component.scss']
})
export class WomenProductsDetailsComponent implements OnInit {
  product:any;
  productid:any;
  cart:boolean=false;
  constructor(private activatedroute:ActivatedRoute,private prodServ:ProductsServiceService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param)=>{
    this.productid=param.get('id')
    this.product=this.prodServ.WomensProducts.find(x=>x.id==this.productid)
    this.prodServ.productData.push(this.product)
    console.log(this.prodServ.productData)
  })

  }
  AddtoCart(){
    this.cart=true
    setTimeout(() => {
      this.cart=false
    }, 3000);
  }

}
