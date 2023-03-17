import { HttpServicesService } from './../../Services/http-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Interface/products';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  Product:any;
  value:any[]=[]
  constructor(private ProdServ:DashboardService,private route:Router,private http:HttpServicesService) { }

  ngOnInit(): void {
  }
  submit(data:any){
    this.Product={...data,id:this.http.products.length+5}
    console.log(data)
    this.ProdServ.CreatedProduct.push(this.Product)
    this.route.navigate(['dashboard/dashboard'])
  }

}
