import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  customers;
  customerName;
  reports;
  dataTableArray: any = [];
  indications = [];
  indicationsColors = [];
  displayedColumns: string[] = ['לקוח', 'חודש', 'סטטוס', 'אינדיקציות', 'הערות'];
  dataSource = [];

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {

    this.setTableData();

  }


  setTableData() {
    this.customers = this.reportsService.getAllCustomers();
    for (var i = 0; i < this.customers.length; i++) {

      this.reports = this.reportsService.getCustomersReports(null, this.customers[i].id, null);
      for (var j = 0; j < this.reports.length; j++) {
        let dataTable: any = { companyName: '', date: '', status: '', color: '', indicationStr: '', comment: '' };
        dataTable.companyName = this.customers[i].companyName;
        dataTable.date = this.reports[j].date.getMonth() + 1 + '.' + this.reports[j].date.getFullYear();
        dataTable.status = this.reports[j].status;
        dataTable.color = "green";
        this.indications.push(this.reports[j].indication);
        dataTable.indicationStr = this.reports[j].indicationStr;
        dataTable.comment = this.reports[j].comment;
        console.log("dataTable", dataTable);

        this.dataTableArray.push(dataTable);
        console.log("array", this.dataTableArray);

      }
    }
    this.setIndicationColors();
  }


  setIndicationColors() {
    for (var i = 0; i < this.indications.length; i++) {
      console.log("i", i);

      console.log("indication", this.indications);

      switch (this.indications[i]) {
        case 1:
          this.dataTableArray[i].color = 'green';
          break;

        case 2:
          this.dataTableArray[i].color = 'yellow';
          break;

        case 3:
          this.dataTableArray[i].color = 'red';
          break;

        default:
          this.dataTableArray[i].color = 'white';
          break;

      }
    }
    console.log(this.dataTableArray);

    this.dataSource = this.dataTableArray;

  }


  filterDataTable(filterObject) {
    
  }

}
