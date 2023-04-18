export class ProductsModel{
  id!:number
  title!:string
  description!:string
  price!:number
  image!:string
  quantity?:any
  category!:string
  imagepath?:string
  // quantity?:number;
}

export class CartModel{
  id?:number
  title?:string
  description?:string
  price?:number
  image?:string
  category?:string
  quantity?:number;
  totalPrice?:any
  rating?:any;
}
export class BuyerModel{
  id?:number;
  name!:string;
  email!:string
}
