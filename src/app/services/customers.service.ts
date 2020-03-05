import { Injectable } from '@angular/core';
import { ReportsService } from './reports.service';
import { FullCustomerModel } from '../models/fullCustomerModel';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private reportService: ReportsService) { }

  getFullCustomerInfoById(id: string){
    let customer = this.reportService.getFullCustomersDetails().find(c => c.customer.id === id);
    return customer;
    }

  }
