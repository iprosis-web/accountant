import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { FullCustomerModel } from 'src/app/models/fullCustomerModel';
import { CustomersService } from 'src/app/services/customers.service';
import { customer } from 'src/app/models/customer';
import { contact } from 'src/app/models/contact';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private customerService: CustomersService,private dialogRef: MatDialogRef<CustomerEditComponent>) { }
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
      this.currentCustomerId = this.data.customerId;
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
    let result: any;
    if(customerForm.valid){
      let fullCustomer = customerForm.value;
      //edit current user
      if(this.editFlag){
        let customerData: customer = { id: this.currentCustomerId, companyName: fullCustomer.companyName, isActive: this.currentCustomer.customer.isActive, createdDate: null, contactID: this.currentCustomer.contact.id };
        let contact: contact = { id: this.currentCustomer.contact.id, customerId: this.currentCustomerId,
           city: fullCustomer.customerCity, street: fullCustomer.customerAddress, 
           building: fullCustomer.customerBuilding, email: fullCustomer.customerEmail, phone: fullCustomer.customerPhone };
        result = this.customerService.updateCustomer(customerData, contact);
        
      }
      //add new user 
      else{
        let customerData: customer = { id: null, companyName: fullCustomer.companyName, isActive: true, createdDate: null, contactID: null };
        let contact: contact = { id: null, customerId: null,
           city: fullCustomer.customerCity, street: fullCustomer.customerAddress, 
           building: fullCustomer.customerBuilding, email: fullCustomer.customerEmail, phone: fullCustomer.customerPhone };
           result = this.customerService.addNewCustomer(customerData, contact);
      }
      if(result.message != ''){
        this.dialogRef.close(result);
      }
    }
    else{
      let res = { data: {customer: null, contact: null}, message: "נתונים שהוכנסו לא תקינים" };
      this.dialogRef.close(result);
    }
  }



}
