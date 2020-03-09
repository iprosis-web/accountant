import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ReportsFilterModel } from '../models/reportsFilterModel';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  reportsFilterSubject: Subject<ReportsFilterModel> = new Subject<ReportsFilterModel>();
  reportsFilterData: ReportsFilterModel = {startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
     endDate: new Date(), company: null,status: null};

  constructor() { }

  updateFilterData(filterData: ReportsFilterModel){
    this.reportsFilterData = filterData;
    this.reportsFilterSubject.next(filterData);
  }
}
