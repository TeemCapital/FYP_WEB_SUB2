import { DashboardService } from './../../Services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { HttpServicesService } from 'src/app/Services/http-services.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit {
  showProduct:any[]=[];
  availableData:boolean=false;
  constructor(private prodServ:DashboardService,private womenSer:ProductsServiceService,private http:HttpServicesService) { }

  ngOnInit(): void {
    this.showProduct=this.prodServ.getCreatedProducts();
    console.log(this.showProduct)
    if(this.showProduct.length > 0){
      this.availableData=true;
    }
  }
  postProduct(){
   this.womenSer.WomensProducts.push(...this.showProduct);
   this.http.products.push(...this.showProduct)
   console.log(this.womenSer.fetchedProducts)
  }


}
