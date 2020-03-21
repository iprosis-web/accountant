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
import { MatSnackBar, MatDialog, MatDialogRef, MatSliderChange } from '@angular/material';
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
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  loading = false;
  toggleEnabled: boolean = false;
  reportsFilterSubscription: Subscription;
  displayedColumns: string[] = ['arrivedToOffice','companyName', 'dateStr', 'status', 'indicationStr', 'comment'];
  reports;
  dataTableArray: CustomerReportModel[] = [];
  currDate = new Date();
  firstDay = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), 1);
  endDay = new Date(this.currDate.getFullYear(), this.currDate.getMonth() + 1, -1);
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
    this.reportsFilterSubscription = this.headerService.reportsFilterSubject.subscribe(res=> {
      let dateFilter: DateFilterModel = { startDate: new Date(res.startDate.getFullYear(), res.startDate.getMonth(), 1)
        , endDate: new Date(res.endDate.getFullYear(), res.endDate.getMonth()+1, -1)
      };
      this.customerId = res.company;
      this.statusId = res.status;
      this.setTableData(dateFilter, this.customerId,this.statusId);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.reportsFilterSubscription.unsubscribe();
  }

  setTableData(date, customerId, statusId) {    
    this.dataTableArray = [];
    this.reportsService.getCustomersReports(date, customerId, statusId).subscribe(result => {
      this.dataTableArray = result;      
      this.dataSource.data = this.dataTableArray;
      if (this.dataTableArray.length <= 0) {
        new Helpers().displaySnackBar(this.snackBar,'לא נמצאו דיווחים לפי הסינון',""  )
        this.dataSource.data = [];
  
      }
      this.loading = false;
    });

  }

  getRowData(reportData){
      let rowData = JSON.stringify(reportData);    
      this.router.navigate(['/report', reportData.reportID]);
  }

  disablePropagationEvent(event){
    if(event.source.checked == true)
      event.source.checked = false;
    else
      event.source.checked = true;  
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
      this.loading = true;
        this.setTableData(this.date, this.customerId, this.statusId);
    });
  }

}
