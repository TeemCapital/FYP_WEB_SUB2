import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { CartComponent } from './cart/cart.component';
import { productGuardService } from '../guards/products-guard.service';

const routes: Routes = [
  {path:'favourites',component:FavouriteComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedItemsRoutingModule { }
