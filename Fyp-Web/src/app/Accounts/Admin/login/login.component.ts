import { Router } from '@angular/router';
import { faUser,faKey} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { authService } from 'src/app/Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpServicesService } from 'src/app/Services/http-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faUser= faUser;
  faKey=faKey;
  loginNotification:boolean=false;
  logoutNotification:boolean=false;
  userId:number=0;
  token:any;
  storeId=localStorage.getItem('UID');
  invalidPass:boolean=false;
  constructor(private authSer:authService,private router:Router,private http:HttpClient,private httpServ:HttpServicesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('Token')
  }
  submit(data:any){
    this.http.post<any>(`${this.httpServ.testUrl}/login`,data).subscribe(
      (res)=>{console.log(res.data),localStorage.setItem('Token',res.data.token),localStorage.setItem('UID',res.data.id),this.userId=res.data.id
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
          this.router.navigate([`dashboard/${this.userId}/dashboard`,])
        }, 2000);
      }
    )
  }
}
