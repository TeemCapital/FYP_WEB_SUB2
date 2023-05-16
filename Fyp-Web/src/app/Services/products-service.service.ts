import { Products } from './../Interface/products';
import { ProductsModel, CartModel } from './products.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  productData:ProductsModel[]=[];
  cartProduct:Products[]=[];
  favProduct:Products[]=[];
  fetchedProducts:Products[]=[];
  cartItemsCount$: BehaviorSubject<number>=new BehaviorSubject(0);
  deleted$=new Subject<boolean>();
  count:number=1;
  ProductQuantity!:number;
  postedProduct:any;
  totalCartAmount:number=0;
  checkoutData:CartModel[]=[];
  finalCheckOutPrice!:number;


  address!:string;

  public search = new BehaviorSubject<string>("");


  //   getAllWomensProducts(){
  //   return[...this.WomensProducts]
  // }
  // getAllmenCartProducts(){
  //   return[...this.cartProduct]
  // }

}
