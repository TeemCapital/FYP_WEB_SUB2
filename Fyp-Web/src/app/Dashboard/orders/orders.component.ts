import { finalize } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  userId:any=localStorage.getItem('UID')
  orders!:any[];
  loadingData:boolean=false;
  faTruckPickup=faTruck;
  constructor(private httpSer:HttpClient,private httpService:HttpServicesService) { }


  ngOnInit(): void {
    this.loadingData=true;
    this.httpSer.get<any>(`${this.httpService.testUrl}/${this.userId}/showOrders`).pipe(
      finalize(()=>{
        this.loadingData=false
      })
    )
    .subscribe(
      (res)=>(this.orders=res)

    )
  }

}
