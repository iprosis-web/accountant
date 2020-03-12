import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReportsService } from '../../services/reports.service';
import { CustomerReportModel } from 'src/app/models/customerReportModel';
import { HeaderService } from 'src/app/services/header.service';
import { ReportsFilterModel } from 'src/app/models/reportsFilterModel';
import { DateFilterModel } from 'src/app/models/dateFilterModel';
import { Helpers } from 'src/app/Utils/Helpers';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { PeriodicElement } from 'src/app/customers/customers-list/customers-list.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToggleDialogComponent } from '../toggle-dialog/toggle-dialog.component';

@Component({
  selector: 'app-app-tabel',
  templateUrl: './app-tabel.component.html',
  styleUrls: ['./app-tabel.component.css']
})
export class AppTabelComponent implements OnInit, OnDestroy {
  toggleEnabled: boolean = false;
  reportsFilterSubscription: Subscription;
  displayedColumns: string[] = ['arrivedToOffice','companyName', 'dateStr', 'status', 'indicationStr', 'comment'];
  reports;
  dataTableArray: CustomerReportModel[] = [];
  currDate = new Date();
  firstDay = new Date(this.currDate.getFullYear(), this.currDate.getMonth()-1, 1);
  endDay = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), -1);
  date = { startDate: this.firstDay, endDate: this.endDay };
  customerId = null;
  statusId = null;
  dataSource = new MatTableDataSource<CustomerReportModel>();
  reportsFilter;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private dialogRef: MatDialogRef<ToggleDialogComponent>;

  constructor(
    private reportsService: ReportsService,
    private headerService: HeaderService,
    private snackBar: MatSnackBar,
    private router: Router,
    public confirmDialog: MatDialog
  ) { }


  ngOnInit() {
    
    this.setTableData(this.date, this.customerId, this.statusId);
    this.reportsFilterSubscription = this.headerService.reportsFilterSubject.subscribe((filterData: ReportsFilterModel) => {
      let dateFilter: DateFilterModel = { startDate: new Date(filterData.startDate.getFullYear(), filterData.startDate.getMonth(), 1)
        , endDate: new Date(filterData.endDate.getFullYear(), filterData.endDate.getMonth()+1, -1)
      };
      this.date = dateFilter;
      this.customerId = filterData.company;
      this.statusId = filterData.status;
      this.setTableData(dateFilter, filterData.company, filterData.status);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.reportsFilterSubscription.unsubscribe();
  }

  setTableData(date, customerId, statusId) {    
    this.dataTableArray = [];
    this.dataTableArray = this.reportsService.getCustomersReports(date, customerId, statusId);
    console.log(this.dataTableArray);
    if (this.dataTableArray.length <= 0) {
      new Helpers().displaySnackBar(this.snackBar,'לא נמצאו דיווחים לפי הסינון',""  )
      this.dataTableArray = this.reportsService.getCustomersReports(date, customerId, statusId);
    }
    this.dataSource.data = this.dataTableArray;
  }

  getRowData(reportData){
      let rowData = JSON.stringify(reportData);    
      new Helpers().displaySnackBar(this.snackBar,"לקוח : " + reportData.companyName + " *****  " + 'תאריך דיווח : ' + reportData.dateStr,""  )
      this.router.navigate(['/report', reportData.reportID]);
  }

  arrivedToOfficeChange(event, element){
    event.stopPropagation();
    this.dialogRef = this.confirmDialog.open(ToggleDialogComponent,  {
      direction: 'rtl',
      data: {
        report: element,
        status: element.arrivedToOffice == null ? "add" : "delete"
      },
      width: "400px",
      maxHeight: '90vh'
    });

    this.dialogRef.afterClosed().subscribe((res) => {
        this.setTableData(this.date, this.customerId, this.statusId);
        //console.log(this.dataTableArray);
    });
  }

}
