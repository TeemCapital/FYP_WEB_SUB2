import { DashboardService } from 'src/app/Services/dashboard.service';
import { ProductsModel } from './../../Services/products.model';
import { ProductsServiceService } from './../../Services/products-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
  womenProducts:ProductsModel[]=[]
  constructor(private ProductSer:ProductsServiceService,private dashSer:DashboardService) { }

  ngOnInit(): void {
    this.womenProducts=this.ProductSer.getAllWomensProducts()
  }

}
