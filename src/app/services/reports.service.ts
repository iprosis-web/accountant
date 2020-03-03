import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerReportModel } from '../models/customerReportModel';
import { DateFilterModel } from '../models/dateFilterModel';
import { customer } from '../models/customer';

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

  constructor() { }

  getCustomersReports(dateFilter: DateFilterModel, customerId: number, status: string){
    //bring all reports
    
  }

  getAllCustomers(){
    if(this.customers){
      return this.customers.slice();
    }
  }
}
