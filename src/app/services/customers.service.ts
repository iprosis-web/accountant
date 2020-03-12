import { Injectable } from '@angular/core';
import { ReportsService } from './reports.service';
import { FullCustomerModel } from '../models/fullCustomerModel';
import { customer } from '../models/customer';
import { contact } from '../models/contact';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  fullCustomerDetailsSubject: Subject<FullCustomerModel[]> = new Subject<FullCustomerModel[]>();

  constructor(private reportService: ReportsService) { }

  getFilteredCustomers(customerId: string, statusString: string) {
    // changing status to string , adding statuses string array + changing to string in DB
    let status = false;
    if (statusString === 'true') {
      status = true;
    }


    let filteredCustomers = this.getFullCustomersDetails().filter(curCustomer => {
      return (curCustomer.customer.id === customerId || !customerId)
        && (curCustomer.customer.isActive === status)
    });

    return filteredCustomers;
  }

  getFullCustomerInfoById(id: string) {
    let customer = this.reportService.getFullCustomersDetails().find(c => c.customer.id === id);
    return customer;
  }

  getFullCustomersDetails() {
    return this.reportService.getFullCustomersDetails();
  }

  updateCustomer(customer: customer, contact: contact, newCustomerId: string = null) {
    let res = this.reportService.updateCustomer(customer, contact, newCustomerId);
    this.fullCustomerDetailsSubject.next(this.getFullCustomersDetails());
    return res;
  }

  addNewCustomer(newCustomer: customer, newContact: contact) {
    let res = this.reportService.addCustomer(newCustomer, newContact);
    this.fullCustomerDetailsSubject.next(this.getFullCustomersDetails());
    return res;
  }

  deleteCustomer(customer: customer) {
    let res = this.reportService.deleteCustomer(customer);
    this.fullCustomerDetailsSubject.next(this.getFullCustomersDetails());
    return res;
  }

}
