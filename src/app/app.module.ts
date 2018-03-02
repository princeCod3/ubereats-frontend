import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
//Router Module for dynamic navigation
import {RouterModule} from '@angular/router';

//MDB Boostrap styling
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FoodOutletComponent } from './food-outlet/food-outlet.component';
import { MenuComponent } from './food-outlet/menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './food-outlet/products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegistrationComponent,
    AdminPanelComponent,
    FoodOutletComponent,
    MenuComponent,
    CategoryComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    //app navigation
    RouterModule.forRoot([
      {
         path:'',
         redirectTo:'/home',
         pathMatch:'full'
      },
      {
        path:'home',
        component:HomeComponent

      }
    ]),
    //Styling
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
