import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Products } from '../Interface/products';
@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  public testUrl='http://127.0.0.1:8000/api';
  products!:Products[];
  isLoggedIn!:boolean;
  userId!:number;
  constructor(private http:HttpClient) { }
}
