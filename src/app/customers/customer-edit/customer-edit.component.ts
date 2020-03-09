import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { FullCustomerModel } from 'src/app/models/fullCustomerModel';
import { CustomersService } from 'src/app/services/customers.service';
import { customer } from 'src/app/models/customer';
import { contact } from 'src/app/models/contact';
import { Helpers } from 'src/app/Utils/Helpers';
import { CustomerCRUD } from 'src/app/Utils/Enums';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @ViewChild('cf') customerForm: NgForm;
  editFlag = false;
  deleteFlag = false;
  currentCustomerId: string = "318854125";
  currentCustomer: FullCustomerModel;
  currentCustomerImg: string;
  fileUploadFlag = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
   private customerService: CustomersService,
   private dialogRef: MatDialogRef<CustomerEditComponent>,
   private snackBar: MatSnackBar) { }

  ngOnInit() {
    //if this is edit
    if(this.data.flag && this.data.customerModel){
      if(this.data.flag == CustomerCRUD.edit){
        this.editFlag = true;
        this.deleteFlag = false;
        this.currentCustomerId = this.data.customerModel.customer.id;
        this.currentCustomer = this.customerService.getFullCustomerInfoById(this.currentCustomerId);
        if(this.currentCustomer){
          console.log(this.currentCustomer);
          if(this.currentCustomer.contact){
            this.fileUploadFlag = true;
            this.currentCustomerImg = this.currentCustomer.contact.imgUrl;
            
          }
          this.setEditFormValues();
        }
      }
      //delete
      else if(this.data.flag == CustomerCRUD.delete){
        this.editFlag = false;
        this.deleteFlag = true;
        this.currentCustomerId = this.data.customerModel.customer.id;
        this.currentCustomer = this.data.customerModel;
      }
      //add
      else{
        this.editFlag = false;
        this.deleteFlag = false;
        this.fileUploadFlag = true;
        this.currentCustomerImg = "";
        this.currentCustomerId = this.data.customerId;
      }
    }
  }

  setEditFormValues(){
    setTimeout(() => {
      this.customerForm.setValue({
        companyId: this.currentCustomer.customer.id,
        companyName: this.currentCustomer.customer.companyName,
        customerEmail: this.currentCustomer.contact.email,
        customerPhone: this.currentCustomer.contact.phone,
        customerCity: this.currentCustomer.contact.city,
        customerAddress: this.currentCustomer.contact.street,
        customerBuilding: this.currentCustomer.contact.building
      });
    },);
  }

  fileChange(event){
    if(event.target.files && event.target.files.length){
      let file = event.target.files[0];
      //check if file is img
      if(file.type == "image/png" || file.type == "image/jpg" || file.type == "image/gif"){
        this.currentCustomerImg = file.name;
        this.fileUploadFlag = true;
        
      }
      else{
        this.currentCustomerImg = null;
        this.fileUploadFlag = false;
      }
    }
    else{
      this.fileUploadFlag = true;
      this.currentCustomerImg = this.currentCustomer.contact.imgUrl;
    }
  }

  onSubmit(customerForm){
    let result: any;
    console.log(customerForm);
    if(customerForm.valid){
      let fullCustomer = customerForm.value;
      let newCustomerImg = this.currentCustomerImg == null ? this.currentCustomer.contact.imgUrl : this.currentCustomerImg;
      //edit current user
      if(this.editFlag){
        //check if customer already exists by id
        let findCustomer = this.customerService.getFullCustomerInfoById(fullCustomer.companyId);
        if(findCustomer && findCustomer.customer.id != this.currentCustomerId){
          new Helpers().displaySnackBar(this.snackBar, "לקוח עם מספר חברה זה קיים במערכת","");
          return;
        }
        let customerData: customer = { id: this.currentCustomerId, companyName: fullCustomer.companyName, isActive: this.currentCustomer.customer.isActive, createdDate: null, contactID: this.currentCustomer.contact.id };
        let contact: contact = { id: this.currentCustomer.contact.id, customerId: this.currentCustomerId,
           city: fullCustomer.customerCity, street: fullCustomer.customerAddress, imgUrl: newCustomerImg, 
           building: fullCustomer.customerBuilding, email: fullCustomer.customerEmail, phone: fullCustomer.customerPhone };
        result = this.customerService.updateCustomer(customerData, contact,fullCustomer.companyId);
        
      }
      //add new user 
      else if(this.editFlag == false && this.deleteFlag == false){
        //check if customer already exists by id
        let findCustomer = this.customerService.getFullCustomerInfoById(fullCustomer.companyId);
        if(findCustomer){
          new Helpers().displaySnackBar(this.snackBar, "לקוח עם מספר חברה זה קיים במערכת","");
          return;
        }
        let customerData: customer = { id: fullCustomer.companyId, companyName: fullCustomer.companyName, isActive: true, createdDate: null, contactID: null };
        let contact: contact = { id: null, customerId: fullCustomer.companyId,
           city: fullCustomer.customerCity, street: fullCustomer.customerAddress, imgUrl: '',
           building: fullCustomer.customerBuilding, email: fullCustomer.customerEmail, phone: fullCustomer.customerPhone };
           result = this.customerService.addNewCustomer(customerData, contact);
      }
      //remove user
      else{

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

  onDelete(){
    let result = this.customerService.deleteCustomer(this.currentCustomer.customer);
    console.log(result);
    if(result.message != ''){
      this.dialogRef.close(result);
    }
  }



}
