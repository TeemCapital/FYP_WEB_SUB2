import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faUser,faKey,faStore} from '@fortawesome/free-solid-svg-icons';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { BuyerModel } from 'src/app/Services/products.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  faUser= faUser;
  faKey=faKey;
  faStore=faStore
  showNoti=false;
  errorNoti=false;
  errorNotifMessage!:string;
  constructor(private http:HttpClient,private httpSer:HttpServicesService) { }

  ngOnInit(): void {
  }
  submit(data:any){
    this.http.post<BuyerModel>(`${this.httpSer.testUrl}/register`,data).subscribe(
       (res) => {
        this.showNoti=true;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        setTimeout(() => {
          this.showNoti=false;
        }, 4000);
        console.log(res)
        }
        ,(error)=>{
          this.errorNotifMessage=error.error.message;
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          this.errorNoti=true
          setTimeout(() => {
              this.errorNoti=false
          }, 2000);
          console.log(error.error.message)
        }
    )
  }
}
