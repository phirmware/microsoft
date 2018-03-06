import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { AllComponent } from './all/all.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    CartComponent,
    AllComponent,
    AboutComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
       {path:'',component:HomeComponent},
       {path:'cart', component:CartComponent},
       {path:'all',component:AllComponent},
       {path:'about',component:AboutComponent},
       {path:'product/:item/:price/:imagelink/:description',component:ProductComponent},
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
