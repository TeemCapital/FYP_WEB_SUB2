import { Router } from '@angular/router';
import { authService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faUser,faKey} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { HttpServicesService } from 'src/app/Services/http-services.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  faUser= faUser;
  faKey=faKey;
  loginNotification:boolean=false;
  constructor(private authSer:authService,private router:Router,private http:HttpClient,private httpServ:HttpServicesService) { }

  ngOnInit(): void {

  }
  logout(){
    this.authSer.logOut()
  }
  submit(data:any){
    this.http.post<any>(`${this.httpServ.testUrl}/login`,data).subscribe(
      (error)=>{
        alert(error)
      },
      ()=>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.authSer.logIn()
        this.loginNotification=true;
        setTimeout(() => {
          this.router.navigate(['/home'])
        }, 2000);
      }
    )
  }
}
