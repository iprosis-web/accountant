import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerReportModel } from '../models/customerReportModel';
import { DateFilterModel } from '../models/dateFilterModel';
import { customer } from '../models/customer';
import { reports } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  customersReportsModelSubject = new Subject<CustomerReportModel[]>();
  // customersModelSubject = new Subject<>();
  private customers: customer[] = [{
    id: "1",
    companyName: "company",
    contactID: 1
  },
  {
    id: "2",
    companyName: "aminBeitCom",
    contactID: 2
  },
  {
    id: "3",
    companyName: "evgenyLTD",
    contactID: 3
  }
  ];

  private reports: reports[] = [{
    id: 1,
    customerId: "1",
    reportDate: new Date,
    creatDate: new Date,
    status: "בעבודה",
    indication: 1,
    comment: "חסרים דיווחי משכורות"
  },
  {
    id: 2,
    customerId: "2",
    reportDate: new Date,
    creatDate: new Date,
    status: "בעבודה",
    indication: 1,
    comment: "חסרים דיווחי משכורות"
  },
  {
    id: 3,
    customerId: "3",
    reportDate: new Date,
    creatDate: new Date,
    status: "בעבודה",
    indication: 1,
    comment: "חסרים דיווחי משכורות"
  },
  {
    id: 4,
    customerId: "1",
    reportDate: new Date,
    creatDate: new Date,
    status: "בחופש",
    indication: 1,
    comment: "חסרים דיווחי משכורות"
  }
  ];

  statuses = ["בעבודה","הסתיים","לא הותחל"]

  constructor() { }

  getCustomersReports(dateFilter: DateFilterModel, customerId: string, status: string){
    //bring all reports
    let filteredReports = this.reports.filter(report => 
      (report.customerId == customerId || customerId == undefined || customerId == null) &&
      (dateFilter.startDate == null || dateFilter.startDate == undefined || (report.reportDate >= dateFilter.startDate && report.reportDate <= dateFilter.endDate))&&
      (report.status == status || status == undefined || status == null));
    
    return this.mapReportsToCustomerReports(filteredReports, this.getAllCustomers());
  }

  mapReportsToCustomerReports(reports: reports[], customers: customer[]){
    let customersReports: CustomerReportModel[] = [];
    if(reports && customers){
      for(let report of reports){
        let currentUser = customers.find(c => c.id == report.customerId);
        if(currentUser){
          customersReports.push({
            reportID: report.id,
            customerID: currentUser.id,
            companyName: currentUser.companyName,
            companyEmail: null,
            date: report.reportDate,
            status: report.status,
            indication: report.indication,
            comment: report.comment
          });
        }
      }
    }
    return customersReports;
  }

  getAllCustomers(){
    if(this.customers){
      return this.customers.slice();
    }
  }

  getAllStatuses(){
    if(this.statuses){
      return this.statuses.slice();
    }
  }
}
