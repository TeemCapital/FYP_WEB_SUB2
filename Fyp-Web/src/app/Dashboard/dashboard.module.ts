import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SellerDashboardComponent,
    ManageProductsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
