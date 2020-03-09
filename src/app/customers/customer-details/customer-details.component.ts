import { Component, OnInit } from '@angular/core';
import { faEdit,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
import { FullCustomerModel } from 'src/app/models/fullCustomerModel';
import { CustomersService } from 'src/app/services/customers.service';
import { Helpers } from 'src/app/Utils/Helpers';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  faEdit = faEdit;
  faAdd = faUserPlus;
  private editDialog: MatDialogRef<CustomerEditComponent>;
  currentCustomerId = "318854125";
  currentCustomerModel: FullCustomerModel;
  constructor(public dialog: MatDialog, private customerService: CustomersService,private snackBar: MatSnackBar) { }

  openDialogForEdit(){
    this.editDialog = this.dialog.open(CustomerEditComponent, {
      direction: 'rtl',
      data: {
        customerId: this.currentCustomerId
      },
      width: "400px",
      maxHeight: '90vh'
    });

    this.editDialog.afterClosed().subscribe(result => {
      if(result != undefined && result != null && result.message != '' && result.message != undefined){
        new Helpers().displaySnackBar(this.snackBar,result.message,"");
        console.log(result.data);
        this.currentCustomerModel.customer = result.data.customer;
        this.currentCustomerModel.contact = result.data.contact;
        this.currentCustomerId = result.data.customer.id;
      }
    });
  }

  openDialogForNew(){
    this.editDialog = this.dialog.open(CustomerEditComponent, {
      direction: 'rtl',
      data: {
        customerId: null
      },
      width: "400px",
      maxHeight: '90vh'
    });

    this.editDialog.afterClosed().subscribe(result => {
      if(result != undefined && result != null && result.message != '' && result.message != undefined){
        new Helpers().displaySnackBar(this.snackBar,result.message,"");
        if(result.data){
          this.currentCustomerModel.customer = result.data.customer;
          this.currentCustomerModel.contact = result.data.contact;
          this.currentCustomerId = result.data.customer.id;
        }
      }
    });
  }

  ngOnInit() {
    this.currentCustomerModel = this.customerService.getFullCustomerInfoById(this.currentCustomerId);
    if(this.currentCustomerModel == undefined || this.currentCustomerModel == null){
      //insert customer dont exist logic 
    }
  }

}
