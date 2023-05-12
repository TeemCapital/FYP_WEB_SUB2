import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedItemsRoutingModule } from './saved-items-routing.module';
import { CartComponent } from './cart/cart.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CartComponent,
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    SavedItemsRoutingModule,
    FontAwesomeModule
  ],
  providers:[]
})

export class SavedItemsModule { }
