import { finalize } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { productGuardService } from 'src/app/guards/products-guard.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  userId:any=localStorage.getItem('UID')
  orders!:any[];
  loadingData:boolean=false;
  orderDeletedNoti:boolean=false;
  faTruckPickup=faTruck;
  showData:boolean=false;
  status!:string;
  constructor(private httpSer:HttpClient,private httpService:HttpServicesService,private productSer:ProductsServiceService) { }


  ngOnInit(): void {
    this.loadingData=true;
    this.httpSer.get<any>(`${this.httpService.testUrl}/${this.userId}/showOrders`).pipe(
      finalize(()=>{
        this.loadingData=false

      })
    )
    .subscribe(
      (res)=>{
        this.orders=res
        if(res){
          this.showData=true;
        }
      }


    )
  }
  orderCompleted(i:any,order:any){
    this.orders.splice(i,1)
    this.httpSer.delete(`${this.httpService.testUrl}/${order.id}/orderCompleted`).subscribe(
      (res)=>{
        if(res){
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          this.orderDeletedNoti=true
          setTimeout(() => {
            this.orderDeletedNoti=false
          }, 2000);
        }
      }
    )
  }

}
