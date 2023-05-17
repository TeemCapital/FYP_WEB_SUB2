import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { faTrash,faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  faCross=faTrash;
  faHeart=faHeart;
  buyerId:any=localStorage.getItem("BID")
  favourites!:any[];
  deleteNoti:boolean=false;
  constructor(private httpClient:HttpClient,private httpSer:HttpServicesService) { }

  ngOnInit(): void {
    this.httpClient.get<any>(`${this.httpSer.testUrl}/${this.buyerId}/showFavourites`).subscribe(
      (res)=>{this.favourites=res,console.log(this.favourites)}
    )

  }
  delete(i:number,product:any){
    this.favourites.splice(i,1)
    this.httpClient.delete<any>(`${this.httpSer.testUrl}/${product.id}/deleteFav`).subscribe(
      (res)=>{
        if(res){
          this.deleteNoti=true
          setTimeout(() => {
            this.deleteNoti=false;
          }, 2000);
        }
      }
    )
  }

}
