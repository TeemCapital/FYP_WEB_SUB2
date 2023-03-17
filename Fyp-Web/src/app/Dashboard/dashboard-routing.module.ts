import { ManageProductsComponent } from './manage-products/manage-products.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'dashboard',component:SellerDashboardComponent},
  {path:'manage',component:ManageProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
