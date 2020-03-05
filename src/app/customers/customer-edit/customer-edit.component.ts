import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { FullCustomerModel } from 'src/app/models/fullCustomerModel';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private customerService: CustomersService) { }
  @ViewChild('cf') customerForm: NgForm;
  editFlag = false;
  currentCustomerId: string;
  currentCustomer: FullCustomerModel;

  ngOnInit() {
    //if this is edit
    if(this.data.customerId){
      this.editFlag = true;
      this.currentCustomerId = this.data.customerId;
      console.log(this.currentCustomerId);
      this.currentCustomer = this.customerService.getFullCustomerInfoById(this.currentCustomerId);
      this.setEditFormValues();
    }
    else{
      this.editFlag = false;
    }
  }

  setEditFormValues(){
    setTimeout(() => {
      this.customerForm.setValue({
        companyName: this.currentCustomer.customer.companyName,
        customerEmail: this.currentCustomer.contact.email,
        customerPhone: this.currentCustomer.contact.phone,
        customerCity: this.currentCustomer.contact.city,
        customerAddress: this.currentCustomer.contact.street,
        customerBuilding: this.currentCustomer.contact.building
      });
    },);
  }

  onSubmit(customerForm){
    console.log(customerForm.valid);
  }



}
