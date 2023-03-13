import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Interface/products';
@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  private apiUrl='https://fakestoreapi.com'
  constructor(private http:HttpClient) { }
  GetProducts():Observable<Products>{
    return this.http.get<Products>(`${this.apiUrl}/products`)
  }
}
