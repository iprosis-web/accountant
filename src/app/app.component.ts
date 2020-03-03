import { Component, OnInit } from '@angular/core';
import { ReportsService } from './services/reports.service';
import { DateFilterModel } from './models/dateFilterModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AccountantApp';
  
  constructor(private reportService: ReportsService){
    
  }

  ngOnInit(){
    let datefilter: DateFilterModel = { startDate: null, endDate : null };
    
    let test = this.reportService.getCustomersReports(datefilter,"1",null);
    console.log(test);
  }
}
