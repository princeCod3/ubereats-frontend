import { Injectable } from '@angular/core';
//Objects
import { Menu } from'./Objects/Menu';

// research what these do
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// find out difference between Promise and Observable
import { Observable } from "rxjs/Observable";

//injecting Http into data service
import { Http, Response } from '@angular/http';


@Injectable()
export class DataService {
  
  // URL to web API
   private FoodOutletsUrl = '/restaurants/active';
   private MenuUrl = '/menu/active';  

  constructor(private http: Http) { }
  
    // Get all food outlets
/*  getFoodOutlets(): Promise<FoodOutlet[]> {
    return this.http.get(this.FoodOutletsUrl)
               .toPromise()
               .then(response => response.json() as FoodOutlet[])
              .catch(this.handleError); 
  }
*/
  
  //Get all menus
  
  
   private handleError(error: any): Promise<any> {
    console.error('Error', error); // for debugging purposes (will be removed)
    return Promise.reject(error.message || error);
  }

}
