import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
//Router Module for dynamic navigation
import {Routes ,RouterModule, Router} from '@angular/router';
//Http Module for fetching REST service
import { HttpModule } from '@angular/http';
//Data service
import { DataService } from './data.service';

//MDB Boostrap styling
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CategoryComponent } from './category/category.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegistrationComponent,
    AdminPanelComponent,
    CategoryComponent,
    RestaurantsComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    //app navigation
    RouterModule.forRoot([
    
      { path:'', redirectTo:'/home', pathMatch:'full' }, 
      { path:'home', component:HomeComponent },
      { path:'registration', component:RegistrationComponent },
      { path:'login', component:LoginComponent },
      { path:'restaurants', component:RestaurantsComponent }
      
    ]),
    //Styling
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
