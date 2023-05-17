import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  signupNoti=false;
  errorNoti=false;
  errorNotifMessage: any;
  constructor(private http:HttpClient,private httpSer:HttpServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(data:any){
    this.http.post<any>(`${this.httpSer.testUrl}/register`,data).subscribe(
      (res)=>{
        if(res){
          this.signupNoti=true;
          setTimeout(() => {
              this.signupNoti=false;
          }, 2000);
        }

      },(error)=>{
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
