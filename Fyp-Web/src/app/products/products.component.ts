import { ActivatedRoute, Router } from '@angular/router';
import { HttpServicesService } from './../Services/http-services.service';
import { ProductsModel } from './../Services/products.model';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../Services/products-service.service';
import { Products } from '../Interface/products';
import { authService } from '../Services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!:Products[];
  test:any;
  url !:string;
  searchKey:string ="";
  constructor(private authSer:authService,private router:Router,private productSer:ProductsServiceService,private httpServe:HttpServicesService,private activatedRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.authSer.loggedIn)


    this.url=this.router.url;
    if(this.url.includes("/men")){
      this.http.get<any>(`${this.httpServe.testUrl}/show`).subscribe(
        (res)=>{
          this.products=(res.products)
          
        }
        )
    }
    if(this.url.includes('/women')){
      this.products=this.productSer.getAllWomensProducts()
      console.log(this.products)
    }

    this.productSer.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  // getAllProducts():any{
  //   this.httpServe.GetProducts().subscribe(
  //     (resp)=>{
  //       this.products=resp;
  //     }
  //   )
  //   }


}
