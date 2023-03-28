import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FilterPipe } from '../shared/filter.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductsModule { }
