import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faUser,faKey,faStore} from '@fortawesome/free-solid-svg-icons';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { BuyerModel } from 'src/app/Services/products.model';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  faUser= faUser;
  faKey=faKey;
  faStore=faStore
  showNoti=false;
  constructor(private http:HttpClient,private httpSer:HttpServicesService) { }

  ngOnInit(): void {
  }
  submit(data:any){
    this.http.post<any>(`${this.httpSer.testUrl}/register`,data).subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }

}
