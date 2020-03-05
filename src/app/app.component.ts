import { Component, OnInit , Renderer } from '@angular/core';
import { ReportsService } from './services/reports.service';
import { DateFilterModel } from './models/dateFilterModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private render: Renderer){
  }

  routeSidebar(event:any){
    console.log(event.target);
    
    // event.preventDefault();
    this.render.setElementClass(event.target, "active", true);

  }
}
