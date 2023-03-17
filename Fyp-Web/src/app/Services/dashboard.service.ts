import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  CreatedProduct:any[]=[];
  constructor() { }
  getCreatedProducts(){
    return [...this.CreatedProduct]
  }

}
