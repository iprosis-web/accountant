import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ReportsService } from '../../services/reports.service';
import { CustomerReportModel } from 'src/app/models/customerReportModel';
import { HeaderService } from 'src/app/services/header.service';
import { ReportsFilterModel } from 'src/app/models/reportsFilterModel';
import { DateFilterModel } from 'src/app/models/dateFilterModel';
import { customer } from 'src/app/models/customer';

@Component({
  selector: 'app-app-tabel',
  templateUrl: './app-tabel.component.html',
  styleUrls: ['./app-tabel.component.css']
})
export class AppTabelComponent implements OnInit,OnDestroy {
  displayedColumns: string[] = ['companyName', 'dateStr', 'status', 'indicationStr', 'comment'];
  reports;
  dataTableArray: CustomerReportModel[] = [];
  currDate = new Date();
  firstDay = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), 1);
  date = { startDate: this.firstDay, endDate: this.currDate };
  customerId = null;
  statusId = null;
  dataSource = new MatTableDataSource<CustomerReportModel>();
  static: false;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  constructor(
    private reportsService: ReportsService,private headerService: HeaderService
  ) { }


  ngOnInit() {
    this.setTableData(this.date, this.customerId, this.statusId);
    this.headerService.reportsFilterSubject.subscribe((filterData: ReportsFilterModel)=>{
      let dateFilter: DateFilterModel = {startDate: filterData.startDate, endDate: filterData.endDate};
      console.log(filterData);
      this.setTableData(dateFilter, filterData.company, filterData.status);
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


  }

  

  setTableData(date, customerId, statusId) {
    this.dataTableArray = [];
    this.dataTableArray = this.reportsService.getCustomersReports(date, customerId, statusId);
    if (this.dataTableArray.length <= 0) {
      //swap with snackbar
      alert('לא נמצאו דיווחים לפי הסינון');
      this.dataTableArray = this.reportsService.getCustomersReports(this.date,null,null);
    }
    this.dataSource.data = this.dataTableArray;
  }


  showFilterData(event) {

    this.customerId = event.company;
    this.statusId = event.status;
    this.date.startDate = new Date(event.startDate.getFullYear(), event.startDate.getMonth(), 1);
    this.date.endDate = new Date(event.endDate.getFullYear(), event.endDate.getMonth() + 1, -1);
    if (this.statusId == "null")
      this.statusId = null;
    if (this.customerId == "null") {
      this.customerId = null;
    }
    this.setTableData(this.date, this.customerId, this.statusId);

  }

  ngOnDestroy(){

  }

}
