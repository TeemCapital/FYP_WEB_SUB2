import { DashboardService } from './../../Services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/Interface/products';
import {faSmile} from '@fortawesome/free-regular-svg-icons'
import { faSlack } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit {
  showProduct!:Products[];
  availableData:boolean=true;
  showNotification:boolean=false;
  imageData:any;
  fasmile=faSmile;
  userId!:any;
  storeId=localStorage.getItem('UID');
  alert:boolean=false;
  welcomeNoti:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,private prodServ:DashboardService,private womenSer:ProductsServiceService,private route:Router,private http:HttpClient,private httpServ:HttpServicesService,private router:Router) { }

  ngOnInit(): void {
    // this.showProduct=this.prodServ.getCreatedProducts();
    // console.log(this.showProduct)
    this.welcomeNoti=true;
    setTimeout(() => {
        this.welcomeNoti=false
    }, 2000);
    this.activatedRoute.params.subscribe((param)=>{
      this.userId=param['id']
    })
    if(this.userId=this.storeId){
      this.http.get<any>(`${this.httpServ.testUrl}/user/${this.userId}/products`).subscribe(
        (res)=>{
          this.showProduct=res
        }
        )
    }
    else{
      this.alert=true;
      setTimeout(() => {
        this.alert=false;
        this.router.navigate([`dashboard/${this.storeId}/dashboard`])

      }, 2000);

    }
  }


  delete(productData:any,i:number){
    this.showProduct.splice(i,1)
    this.http.delete(`${this.httpServ.testUrl}/deleteProduct/`+productData.id).subscribe((res)=>(console.log(res)))
    this.showNotification=true
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setTimeout(() => {
    this.showNotification=false;
    }, 2000);

  }

  }

