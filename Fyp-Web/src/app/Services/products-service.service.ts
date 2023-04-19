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
  count:number=1;
  ProductQuantity!:number;
  postedProduct:any;
  totalCartAmount:number=0;
  checkoutData:CartModel[]=[];
  finalCheckOutPrice!:number;

  public search = new BehaviorSubject<string>("");


  WomensProducts:any[]=[
    {
      id:700,
      title:'Jacket8',
      description:'Jackets to buy',
      rating:{
        rate:5
      },
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:800,
      title:'Jacket9',
      description:'Jackets to buy',
            rating:{
        rate:5
      },
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:900,
      title:'Jacket10',
      description:'Jackets to buy',
            rating:{
        rate:5
      },
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:100,
      title:'Jacket11',
      description:'Jackets to buy',
            rating:{
        rate:5
      },
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:1200,
      title:'Jacket12',
      description:'Jackets to buy',
            rating:{
        rate:5
      },
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:1300,
      title:'Jacket13',
      description:'Jackets to buy',
            rating:{
        rate:5
      },
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:1400,
      title:'Jacket14',
      description:'Jackets to buy',
            rating:{
        rate:5
      },
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    }
  ]

  getAllWomensProducts(){
    return[...this.WomensProducts]
  }
  getAllmenCartProducts(){
    return[...this.cartProduct]
  }

}
