import { Component, OnInit} from '@angular/core';

//app component injects data service
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
 
  
  constructor(private dataService: DataService) {}
  
   ngOnInit() {
 
   }


  
  }
