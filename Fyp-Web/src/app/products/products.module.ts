import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { WomenComponent } from './women/women.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WomenProductsDetailsComponent } from './women-products-details/women-products-details.component';


@NgModule({
  declarations: [
    ProductsComponent,
    WomenComponent,
    ProductDetailsComponent,
    WomenProductsDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
