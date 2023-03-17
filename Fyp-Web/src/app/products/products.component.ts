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
  products:any;
  constructor(private productSer:ProductsServiceService,private httpServe:HttpServicesService) { }

  ngOnInit(): void {
     this.getAllProducts();
  }

  getAllProducts():any{
    this.httpServe.GetProducts().subscribe(
      (resp)=>{
        this.products=resp;
      }
    )
    }

}
