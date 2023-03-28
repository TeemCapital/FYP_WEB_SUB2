import { ActivatedRoute, Router } from '@angular/router';
import { HttpServicesService } from './../Services/http-services.service';
import { ProductsModel } from './../Services/products.model';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../Services/products-service.service';
import { Products } from '../Interface/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any[]=[];
  test:any;
  url !:string;
  searchKey:string ="";
  constructor(private router:Router,private productSer:ProductsServiceService,private httpServe:HttpServicesService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.url=this.router.url;
    if(this.url.includes("/men")){
      this.getAllProducts();
    }
    if(this.url.includes('/women')){
      this.products=this.productSer.getAllWomensProducts()
      console.log(this.products)
    }

    this.productSer.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  getAllProducts():any{
    this.httpServe.GetProducts().subscribe(
      (resp)=>{
        this.products=resp;
      }
    )
    }

}
