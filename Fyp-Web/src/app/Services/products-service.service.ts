import { Products } from './../Interface/products';
import { ProductsModel } from './products.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  productData:Products[]=[]
  cartProduct:Products[]=[];
  favProduct:Products[]=[];
  fetchedProducts:Products[]=[];
  mensProducts:ProductsModel[]=[
    {
      id:1,
      name:'Jacket 1',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:2,
      name:'Jacket 2',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:3,
      name:'Jacket 3',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:4,
      name:'Jacket 4',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:5,
      name:'Jacket 5',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:6,
      name:'Jacket 6',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    },
    {
      id:7,
      name:'Jacket 7',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg',
      category:'Mens Biker Jacket with inner-ligning'
    }
  ]
  WomensProducts:ProductsModel[]=[
    {
      id:8,
      name:'Jacket8',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:9,
      name:'Jacket9',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:10,
      name:'Jacket10',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:11,
      name:'Jacket11',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:12,
      name:'Jacket12',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:13,
      name:'Jacket13',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    },
    {
      id:14,
      name:'Jacket14',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg',
      category:'Girls Jacket-Woolen inner ligning'
    }
  ]

  getAllMensProducts(){
    return[...this.mensProducts]
  }
  getAllWomensProducts(){
    return[...this.WomensProducts]
  }

}
