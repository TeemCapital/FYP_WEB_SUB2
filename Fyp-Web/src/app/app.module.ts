import { authService } from './Services/auth.service';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './SavedItems/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { FavouriteComponent } from './SavedItems/favourite/favourite.component';
import { PaymentsComponent } from './payments/payments.component';
import { AboutComponent } from './about/about.component';
import { OfferingsComponent } from './offerings/offerings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    PaymentsComponent,
    AboutComponent,
    OfferingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    LoadingBarRouterModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
