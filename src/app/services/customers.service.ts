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

  getFilteredCustomers(customerId: string, status:boolean) {
    let filteredCustomers = this.getFullCustomersDetails().filter( curcustomer =>
      (curcustomer.customer.id == customerId || customerId == undefined || customerId == null)
      //  &&(curcustomer.customer.isActive == status)
    );
    // console.log("id  :" +status );
    // console.log("id 2  :" +this.getFullCustomersDetails().includes(this.getFullCustomerInfoById(customerId)) );
    // console.log("filtered customers  :" ,filteredCustomers );
    return filteredCustomers;
  }

    getFullCustomerInfoById(id: string){
      let customer = this.reportService.getFullCustomersDetails().find(c => c.customer.id === id);
      return customer;
    }

    getFullCustomersDetails(){
      return this.reportService.getFullCustomersDetails();
    }  

    updateCustomer(customer: customer, contact: contact,newCustomerId: string = null){
      return this.reportService.updateCustomer(customer,contact,newCustomerId);
    }

    addNewCustomer(newCustomer: customer, newContact: contact){
      return this.reportService.addCustomer(newCustomer, newContact);
    }

    deleteCustomer(customer: customer){
      return this.reportService.deleteCustomer(customer);
    }

  }
