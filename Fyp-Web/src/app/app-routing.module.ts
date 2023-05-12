import { productGuardService } from './guards/products-guard.service';
import { PaymentsComponent } from './payments/payments.component';
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
  {path:'favourite',component:FavouriteComponent},
  {path:':id/payments',component:PaymentsComponent},
  { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'accounts', loadChildren: () => import('./Accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'dashboard', loadChildren: () => import('./Dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'savedItems', loadChildren: () => import('./SavedItems/saved-items.module').then(m => m.SavedItemsModule) },
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
