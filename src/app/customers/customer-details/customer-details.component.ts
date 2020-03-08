import { Component, OnInit } from '@angular/core';
import { faEdit,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
import { FullCustomerModel } from 'src/app/models/fullCustomerModel';
import { CustomersService } from 'src/app/services/customers.service';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  faEdit = faEdit;
  faAdd = faUserPlus;
  private editDialog: MatDialogRef<CustomerEditComponent>;
  currentCustomerId = "1";
  currentCustomerModel: FullCustomerModel;
  constructor(public dialog: MatDialog, private customerService: CustomersService) { }

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
      if(result != undefined && result != null && result.message != '')
        alert(result.message);
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
      if(result != undefined && result != null && result.message != ''){
        alert(result.message);
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
  }

}
