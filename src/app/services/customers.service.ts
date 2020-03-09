import { Injectable } from '@angular/core';
import { ReportsService } from './reports.service';
import { FullCustomerModel } from '../models/fullCustomerModel';
import { customer } from '../models/customer';
import { contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private reportService: ReportsService) { }

  getFullCustomerInfoById(id: string){
    let customer = this.reportService.getFullCustomersDetails().find(c => c.customer.id === id);
    return customer;
    }

    updateCustomer(customer: customer, contact: contact,newCustomerId: string = null){
      return this.reportService.updateCustomer(customer,contact,newCustomerId);
    }

    addNewCustomer(newCustomer: customer, newContact: contact){
      return this.reportService.addCustomer(newCustomer, newContact);
    }

  }
