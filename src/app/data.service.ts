import { Injectable } from '@angular/core';

//injecting Http into data service
import { Http } from '@angular/http';


@Injectable()
export class DataService {
  
   private FoodOutletsUrl = '/restaurants/active';  // URL to web API

  constructor(private http: Http) { }
  
    // Get all food outlets
/*  getFoodOutlets(): Promise<FoodOutlet[]> {
    return this.http.get(this.FoodOutletsUrl)
               .toPromise()
               .then(response => response.json() as FoodOutlet[])
              .catch(this.handleError); 
  }
*/
  
  
   private handleError(error: any): Promise<any> {
    console.error('Error', error); // for debugging purposes (will be removed)
    return Promise.reject(error.message || error);
  }

}
