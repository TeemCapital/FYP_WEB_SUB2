export interface Products {
  id ?:number,
  title:string,
  price:number,
  category:string,
  description:string,
  quantity?:number;
  image:string
  imagepath:string;
  totalPrice?:number;
}
