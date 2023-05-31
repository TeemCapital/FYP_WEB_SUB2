export interface Products {
  id ?:number,
  title:string,
  price:number,
  category:string,
  description:string,
  quantity?:number;
  size?:string;
  image:string
  imagepath:string;
  totalPrice?:number;
}
