import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
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
  private editDialog: MatDialogRef<CustomerEditComponent>;
  currentCustomerId = "1";
  currentCustomerModel: FullCustomerModel;
  constructor(public dialog: MatDialog, private customerService: CustomersService) { }

  openDialog(){
    this.editDialog = this.dialog.open(CustomerEditComponent, {
      direction: 'rtl',
      data: {
        customerId: this.currentCustomerId
      },
      width: "400px",
      maxHeight: '90vh'
    });

    this.editDialog.afterClosed().subscribe(data => {
      
    });
  }

  ngOnInit() {
    this.currentCustomerModel = this.customerService.getFullCustomerInfoById(this.currentCustomerId);
  }

}
