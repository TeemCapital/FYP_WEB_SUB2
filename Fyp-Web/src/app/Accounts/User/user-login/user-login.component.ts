import { DashboardService } from 'src/app/Services/dashboard.service';
import { Router } from '@angular/router';
import { authService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faUser,faKey} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { HttpServicesService } from 'src/app/Services/http-services.service';
import { Subject, finalize } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  faUser= faUser;
  faKey=faKey;
  loginNotification:boolean=false;
  userId:number=0;
  token:any;
  invalidPass:boolean=false;
  adminLogin=new Subject<boolean>();
  isLoggedIn=false;

  constructor(private authSer:authService,private router:Router,private http:HttpClient,private httpServ:HttpServicesService) { }
  ngOnInit(): void {
    this.token=localStorage.getItem('Token')
    this.adminLogin.subscribe((res)=>{
      this.isLoggedIn=res
    })
  }
  submit(data:any){
    this.http.post<any>(`${this.httpServ.testUrl}/login`,data).subscribe(
      (res)=>{console.log(res.data),localStorage.setItem('Token',res.data.token),localStorage.setItem('BID',res.data.id),this.userId=res.data.id
      ,console.log(this.userId)
    },
      (error)=>{
        if(error){
          this.invalidPass=true
          setTimeout(() => {
            this.invalidPass=false
          }, 2000);
        }
      },
      ()=>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.authSer.logIn()
        this.loginNotification=true;
        setTimeout(() => {
          this.httpServ.userId=this.userId;
          this.router.navigate(['home'])
          this.adminLogin.next(this.isLoggedIn)
          this.httpServ.isLoggedIn=this.isLoggedIn;
        }, 2000);
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
    )
  }
}
