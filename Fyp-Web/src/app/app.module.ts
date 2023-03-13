import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './Accounts/Admin/login/login.component';
import { SignupComponent } from './Accounts/Admin/Signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './SavedItems/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { FavouriteComponent } from './SavedItems/favourite/favourite.component';
import { UserLoginComponent } from './Accounts/User/user-login/user-login.component';
import { UserSignupComponent } from './Accounts/User/user-signup/user-signup.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    CartComponent,
    FavouriteComponent,
    UserLoginComponent,
    UserSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ProductsModule,
    LoadingBarRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
