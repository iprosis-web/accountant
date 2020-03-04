import { Component, OnInit , Renderer } from '@angular/core';
import { ReportsService } from './services/reports.service';
import { DateFilterModel } from './models/dateFilterModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
items = ['מסך ניהולי', 'הזנת דיווח חודשי ללקוח' , 'מסך ניתוח ללקוח' , 'תחזוקת נתוני לקוח' ]
hrefItems = ['reports' , 'monthly_customer_report' , 'customer_report' , 'maintenace_report']
  constructor(private render: Renderer){
  }

  routeSidebar(event:any){
    console.log(event.target);
    
    // event.preventDefault();
    this.render.setElementClass(event.target, "active", true);

  }
}
