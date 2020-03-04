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
  dataTable:{companyName: string, date: string, status: string, indication: number, indicationStr: string, comment: string }=
  {companyName: null, date: null, status: null, indication: null, indicationStr: null, comment: null };
  dataTableArray=[];
  displayedColumns: string[] = ['לקוח', 'חודש', 'סטטוס', 'אינדיקציות', 'הערות'];
  dataSource;

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.customers = this.reportsService.getAllCustomers();
    for (var i = 0; i < this.customers.length; i++) {
      
      if(this.reportsService.getCustomersReports(null, this.customers[i].id, null)!=null)
      {      
        this.reports=this.reportsService.getCustomersReports(null, this.customers[i].id, null);        
        for(var j=0 ; j<this.reports.length;j++)
        {          
          this.dataTable.companyName=this.customers[i].companyName;
          this.dataTable.date=this.reports[j].date.getMonth()+1 + '.' + this.reports[j].date.getFullYear();
          this.dataTable.status=this.reports[j].status;
          this.dataTable.indication=this.reports[j].indication;
          this.dataTable.indicationStr=this.reports[j].indicationStr;
          this.dataTable.comment=this.reports[j].comment;
          this.dataTableArray.push(this.dataTable);
        }
      }
      else{
          this.dataTable.companyName=this.customers[i].companyName;
          this.dataTable.date=null;
          this.dataTable.status=null;
          this.dataTable.indication=null;
          this.dataTable.indicationStr=null;
          this.dataTable.comment=null;
          this.dataTableArray.push(this.dataTable);
      }
   

    }
    console.log(this.dataTableArray);
    this.dataSource = this.dataTableArray;

  }

}
