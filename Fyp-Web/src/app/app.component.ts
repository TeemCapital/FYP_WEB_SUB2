import { HttpServicesService } from './Services/http-services.service';
import { ProductsServiceService } from './Services/products-service.service';
import { Component } from '@angular/core';
import {faFacebook,faTwitter,faInstagram,faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faShoppingBasket,faUser,faHeart} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faFacebook= faFacebook;
  faInstagram= faInstagram;
  faTwitter=faTwitter ;
  faTelegram=faTelegram ;
  faShoppingBasket=faShoppingBasket;
  faUser=faUser;
  faHeart=faHeart;
  title = 'Fyp-Web';
  cartCounter!:number;
  constructor(private prodServ:ProductsServiceService,private httpServe:HttpServicesService){
    this.prodServ.cartItemsCount$.subscribe((res)=>{
    this.cartCounter=res;
    });
    console.log(this.cartCounter)

    this.httpServe.GetProducts().subscribe()
  }
}
