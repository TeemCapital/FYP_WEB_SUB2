import { ActivatedRoute, Router } from '@angular/router';
import { HttpServicesService } from './../Services/http-services.service';
import { ProductsModel } from './../Services/products.model';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../Services/products-service.service';
import { Products } from '../Interface/products';
import { authService } from '../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!:Products[];
  test:any;
  url !:string;
  loadingData:boolean=true;
  searchKey:string ="";
  constructor(private authSer:authService,private router:Router,private productSer:ProductsServiceService,private httpServe:HttpServicesService,private activatedRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.url=this.router.url;
    if(this.url.includes("product/men")){
      this.http.get<any>(`${this.httpServe.testUrl}/show`).pipe(
        finalize(()=>{
          this.setBooleantofalse()
        })
      )
      .subscribe(
        (res)=>{this.products=res}
        )
    }
    if(this.url.includes('/women')){
      this.http.get<any>(`${this.httpServe.testUrl}/showWomenProducts`).pipe(
        finalize(()=>{
          this.setBooleantofalse()
        })
      ).subscribe(
          (res)=>(this.products=res)
          )
      }
      this.productSer.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  setBooleantofalse(){
    this.loadingData=false;
  }
}
