import { WomenProductsDetailsComponent } from './women-products-details/women-products-details.component';
import { WomenComponent } from './women/women.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'men', component: ProductsComponent },
  {path:'men/:id',component:ProductDetailsComponent},
  {path:'women',component:WomenComponent},
  {path:'women/:id',component:WomenProductsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
