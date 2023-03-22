import { DashboardService } from './../../Services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit {
  showProduct:any[]=[];
  availableData:boolean=false;
  showNotification:boolean=false;
  constructor(private prodServ:DashboardService,private womenSer:ProductsServiceService,private http:HttpServicesService,private route:Router) { }

  ngOnInit(): void {
    this.showProduct=this.prodServ.getCreatedProducts();
    console.log(this.showProduct)
    if(this.showProduct.length > 0){
      this.availableData=true;
    }
  }

  postProduct(){
    this.showNotification=true;
    setTimeout(() => {
      this.womenSer.WomensProducts.push(...this.showProduct);
      this.http.products.push(...this.showProduct)
      this.showProduct.length=0;
      this.showNotification=false;
      this.route.navigate(['dashboard/manage'])

    }, 3000);


    }

  }
