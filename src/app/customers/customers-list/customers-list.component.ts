import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class CustomersListComponent implements OnInit {

  dataSource = [];
  columnsToDisplay = ['companyName', 'isActive'];
  expandedElement: PeriodicElement | null;

  
  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    this.dataSource = this.reportsService.getAllCustomers();
    // this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;

}
