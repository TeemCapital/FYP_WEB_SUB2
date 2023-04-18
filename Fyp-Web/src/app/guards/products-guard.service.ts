import { authService } from './../Services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class productGuardService implements CanActivate{
  constructor(private authSer:authService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authSer.isAutheticated()){
      return true
    }
    else{
        alert("You have to login first")
        this.router.navigate(['accounts/userlogin']);
        return false;
    }

}
}
