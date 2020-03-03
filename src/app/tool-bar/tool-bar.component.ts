import { Component, OnInit, Input } from '@angular/core';

import { ReportsService } from '../services/reports.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  customers=[];
  statuses=[];
  @Input() showFilters:boolean;

  constructor(private reportsService:ReportsService) { }

  ngOnInit() {
    this.customers = this.reportsService.getAllCustomers();
    this.statuses = this.reportsService.getAllStatuses();
  }

}
