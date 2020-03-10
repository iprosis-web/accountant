import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ReportsFilterModel } from '../models/reportsFilterModel';
import { CustomersFilterModel } from '../models/customersFilterModel';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  reportsFilterSubject: Subject<ReportsFilterModel> = new Subject<ReportsFilterModel>();
  reportsFilterData: ReportsFilterModel = {startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
     endDate: new Date(), company: null,status: null};

  customersFilterSubject: Subject<CustomersFilterModel>= new Subject<CustomersFilterModel>();
  customersFilterData: CustomersFilterModel = {companyId: null, isActive:null} ;
  constructor() { }

  updateFilterData(filterData: ReportsFilterModel){
    this.reportsFilterData = filterData;
    this.reportsFilterSubject.next(filterData);
  }

  updateFilterCustomer(filterData: CustomersFilterModel) {
    this.customersFilterData = filterData;
    this.customersFilterSubject.next(filterData);

  }
}
