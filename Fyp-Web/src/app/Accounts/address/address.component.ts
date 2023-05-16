import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  address!:string;
  userId:any=localStorage.getItem('BID');
  constructor(private productSer:ProductsServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  getData(){
    this.productSer.address=this.address;
    this.router.navigate([`${this.userId}/payments`])
  }
}
