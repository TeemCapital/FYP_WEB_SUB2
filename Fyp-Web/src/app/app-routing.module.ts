import { CartComponent } from './SavedItems/cart/cart.component';
import { SignupComponent } from './Accounts/Admin/Signup/signup.component';
import { LoginComponent } from './Accounts/Admin/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FavouriteComponent } from './SavedItems/favourite/favourite.component';
import { UserLoginComponent } from './Accounts/User/user-login/user-login.component';
import { UserSignupComponent } from './Accounts/User/user-signup/user-signup.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'usersignup',component:UserSignupComponent},
  { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
