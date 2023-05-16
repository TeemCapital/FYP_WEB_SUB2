import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Admin/login/login.component';
import { SignupComponent } from './Admin/Signup/signup.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserSignupComponent } from './User/user-signup/user-signup.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'usersignup',component:UserSignupComponent},
  {path:'userInfo',component:AddressComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule {}
