import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Products } from '../Interface/products';
@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  private apiUrl='https://fakestoreapi.com';
  public testUrl='http://127.0.0.1:8000/api';
  products:Products[]=[];
  constructor(private http:HttpClient) { }
  GetProducts():Observable<Products[]>{
    if(this.products.length){
      return of(this.products);
    }
    return this.http.get<Products[]>(`${this.apiUrl}/products`).pipe(
     map(res=>{
      this.products=res;
      return res;
     })
    )
  }
}
