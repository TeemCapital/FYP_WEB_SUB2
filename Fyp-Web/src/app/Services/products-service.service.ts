import { Products } from './../Interface/products';
import { ProductsModel } from './products.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  productData:ProductsModel[]=[];
  cartProduct:ProductsModel[]=[];
  favProduct:Products[]=[];
  fetchedProducts:Products[]=[];
  cartItemsCount$: BehaviorSubject<number>=new BehaviorSubject(0);
  count:number=1;

  postedProduct:any;


  mensProducts:ProductsModel[]=[
    {
      id:1,
      title:'Jacket 1',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:2,
      title:'Jacket 2',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:3,
      title:'Jacket 3',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:4,
      title:'Jacket 4',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:5,
      title:'Jacket 5',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:6,
      title:'Jacket 6',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:7,
      title:'Jacket 7',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    }
  ]
  WomensProducts:any[]=[
    {
      id:8,
      title:'Jacket8',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:9,
      title:'Jacket9',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:10,
      title:'Jacket10',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:11,
      title:'Jacket11',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:12,
      title:'Jacket12',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:13,
      title:'Jacket13',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:14,
      title:'Jacket14',
      description:'Jackets to buy',
      price:10 ,
      image:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    }
  ]

  getAllMensProducts(){
    return[...this.mensProducts]
  }
  getAllWomensProducts(){
    return[...this.WomensProducts]
  }
  getAllmenCartProducts(){
    return[...this.cartProduct]
  }
  
}
