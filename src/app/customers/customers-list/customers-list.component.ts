import { Component, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ReportsService } from 'src/app/services/reports.service';
import { CustomersService } from 'src/app/services/customers.service';
import { FullCustomerModel } from 'src/app/models/fullCustomerModel'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Helpers } from 'src/app/Utils/Helpers';
//import { MatSnackBar } from '@angular/material';
import { HeaderService } from 'src/app/services/header.service';
import { CustomerReportModel } from 'src/app/models/customerReportModel';
import { CustomersFilterModel } from 'src/app/models/customersFilterModel';
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
export class CustomersListComponent implements OnInit , OnDestroy {

  filteredCustomersSubscription: Subscription;
  dataSource = new MatTableDataSource<FullCustomerModel>();
  columnsToDisplay: string[] = ['businessId', 'companyName', 'isActive'];
  expandedElement: PeriodicElement | null;
  dataTableArray: FullCustomerModel[] = [];
  customerId = null;
  statusId = null;
  allCustomersSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private reportsService: ReportsService,
    private customerService : CustomersService,
    //private snackBar: MatSnackBar,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    // this.setTableData(this.customerId, this.statusId);

    this.filteredCustomersSubscription = this.customerService.getFilteredCustomers(this.customerId, this.statusId).subscribe((filterData) => {
      this.dataTableArray = filterData;
      if (this.dataTableArray.length <= 0) {
        //new Helpers().displaySnackBar(this.snackBar,'לא נמצאו דיווחים לפי הסינון',""  )
      }
      this.dataSource.data = this.dataTableArray;
      // this.setTableData(this.customerId, this.statusId);
    });

    this.headerService.customersFilterSubject.subscribe(res => {
      this.customerId = res.companyId;
      this.statusId = res.isActive;
      this.filteredCustomersSubscription = this.customerService.getFilteredCustomers(res.companyId, res.isActive).subscribe((filterData) => {
        this.dataTableArray = filterData;
        if (this.dataTableArray.length <= 0) {
          //new Helpers().displaySnackBar(this.snackBar,'לא נמצאו דיווחים לפי הסינון',""  )
        }
        this.dataSource.data = this.dataTableArray;
        // this.setTableData(this.customerId, this.statusId);
      });
    });

    this.allCustomersSubscription = this.customerService.fullCustomerDetailsSubject.subscribe((data: FullCustomerModel[]) => {
      this.dataTableArray = data;
      if (this.dataTableArray.length <= 0) {
        //new Helpers().displaySnackBar(this.snackBar,'לא נמצאו דיווחים לפי הסינון',""  )
      }
      this.dataSource.data = this.dataTableArray;
      // this.setTableData(this.customerId, this.statusId);
    });
 
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.allCustomersSubscription.unsubscribe();
    this.filteredCustomersSubscription.unsubscribe();
  }

  setTableData(customerId, statusId) {    
    this.dataTableArray = [];  
        this.filteredCustomersSubscription = this.customerService.getFilteredCustomers(customerId,statusId).subscribe(res => {
      this.dataTableArray = res;
      if (this.dataTableArray.length <= 0) {
        //new Helpers().displaySnackBar(this.snackBar,'לא נמצאו דיווחים לפי הסינון',""  )
      }
      this.dataSource.data = this.dataTableArray;
    });

    
  }

  getRowData(customertData){
    let rowData = JSON.stringify(customertData);
    //new Helpers().displaySnackBar(this.snackBar,"דיווח מספר : " + customertData.reportID,""  )

  }

}


