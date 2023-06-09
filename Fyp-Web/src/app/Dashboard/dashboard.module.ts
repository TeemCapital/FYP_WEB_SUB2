import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    SellerDashboardComponent,
    ManageProductsComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,

    FontAwesomeModule
  ]
})
export class DashboardModule { }
