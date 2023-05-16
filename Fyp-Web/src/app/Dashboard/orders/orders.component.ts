import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/Services/http-services.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  userId:any=localStorage.getItem('UID')
  orders!:any[];
  constructor(private httpSer:HttpClient,private httpService:HttpServicesService) { }


  ngOnInit(): void {
    this.httpSer.get<any>(`${this.httpService.testUrl}/${this.userId}/showOrders`).subscribe(
      (res)=>(console.log(res))

    )
  }

}
