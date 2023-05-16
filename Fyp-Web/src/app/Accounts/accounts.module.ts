import { authService } from './../Services/auth.service';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { SignupComponent } from './Admin/Signup/signup.component';
import { LoginComponent } from './Admin/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { UserSignupComponent } from './User/user-signup/user-signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    UserLoginComponent,
    UserSignupComponent,
    AddressComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FontAwesomeModule,
    FormsModule

  ],
  providers:[]
})
export class AccountsModule { }
