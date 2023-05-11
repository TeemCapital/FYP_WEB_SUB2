import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { productGuardService } from '../guards/products-guard.service';

const routes: Routes = [
  { path: 'men', component: ProductsComponent },
  {path:'men/:id',component:ProductDetailsComponent},
  {path:'women',component:ProductsComponent},
  {path:'women/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
