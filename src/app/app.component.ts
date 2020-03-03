import { Component, OnInit } from '@angular/core';
import { ReportsService } from './services/reports.service';
import { DateFilterModel } from './models/dateFilterModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AccountantApp';
  
  constructor(){
    
  }
}
