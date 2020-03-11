import { Component, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ReportsService } from 'src/app/services/reports.service';
import { CustomersService } from 'src/app/services/customers.service';
import { FullCustomerModel } from 'src/app/models/fullCustomerModel'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Helpers } from 'src/app/Utils/Helpers';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;

}
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class CustomersListComponent implements OnInit {
  customersDataSubscription: Subscription;
  dataSource = new MatTableDataSource<FullCustomerModel>();
  columnsToDisplay: string[] = ['id', 'companyName', 'isActive'];
  expandedElement: PeriodicElement | null;
  dataTableArray: FullCustomerModel[] = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private reportsService: ReportsService,
    private customerService : CustomersService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.setTableData();
    this.customersDataSubscription = this.customerService.fullCustomerDetailsSubject.subscribe((data: FullCustomerModel[])=>{
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  //   this.customerService.reportsFilterSubject.subscribe((filterData: ReportsFilterModel) => {
  //   this.setTableData(dateFilter, filterData.company, filterData.status);
  // });
   // this.dataSource.data = this.customerService.getFullCustomersDetails();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.customersDataSubscription.unsubscribe();
  }

  setTableData() {    
    this.dataTableArray = [];    
    this.dataTableArray = this.customerService.getFullCustomersDetails();
    this.dataSource.data = this.dataTableArray;
  }

  getRowData(customertData){
    let rowData = JSON.stringify(customertData);
    console.log(rowData);  
    new Helpers().displaySnackBar(this.snackBar,"דיווח מספר : " + customertData.reportID,""  )

  }

}


