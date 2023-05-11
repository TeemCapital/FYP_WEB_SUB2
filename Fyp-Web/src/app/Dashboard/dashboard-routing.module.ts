import { productGuardService } from '../guards/products-guard.service';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { OrdersComponent } from './orders/orders.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:':id/dashboard',component:SellerDashboardComponent},
  {path:':id/manage',component:ManageProductsComponent},
  {path:':id/orders',component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
