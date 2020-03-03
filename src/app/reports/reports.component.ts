import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  customers;
  constructor( private reportsService:ReportsService) { }

  ngOnInit(): void {
    this.customers= this.reportsService.getAllCustomers();
  }

}
