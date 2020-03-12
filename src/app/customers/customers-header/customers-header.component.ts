import { Component, OnInit } from '@angular/core';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
import { Helpers } from 'src/app/Utils/Helpers';
import { MatDialogRef, MatSnackBar, MatDialog } from '@angular/material';
import { CustomerCRUD } from 'src/app/Utils/Enums';
import { CustomersService } from 'src/app/services/customers.service';
import { CustomersFilterModel } from 'src/app/models/customersFilterModel';
import { HeaderService } from 'src/app/services/header.service';
import { Subscription } from 'rxjs';
import { customer } from 'src/app/models/customer';
import { FullCustomerModel } from 'src/app/models/fullCustomerModel';

@Component({
  selector: 'app-customers-header',
  templateUrl: './customers-header.component.html',
  styleUrls: ['./customers-header.component.css']
})
export class CustomersHeaderComponent implements OnInit {
  customersSubscription: Subscription;
  private addDialog: MatDialogRef<CustomerEditComponent>;
  customers: FullCustomerModel[] = [];
  selectedCustomer: string = "null";
  selectedStatus:boolean ;
  
  filtersCustomerObject: CustomersFilterModel = {
    companyId: this.selectedCustomer,
    isActive: this.selectedStatus
  };
  
  constructor(public dialog: MatDialog,
     private snackBar: MatSnackBar,
     private customerService : CustomersService,
     private headerService : HeaderService) { }

  ngOnInit() {
    this.customers = this.customerService.getFullCustomersDetails();
    this.customersSubscription = this.customerService.fullCustomerDetailsSubject.subscribe((data: FullCustomerModel[]) => {
      this.customers = data;
    });
  }

  onFilterSubmitted() {
    this.filtersCustomerObject.companyId = this.selectedCustomer == "null" ? null : this.selectedCustomer;
    //null boolean??
    this.filtersCustomerObject.isActive = this.selectedStatus;
    this.headerService.updateFilterCustomer(this.filtersCustomerObject);
    // console.log(this.filtersCustomerObject.companyId + " " ,this.filtersCustomerObject.isActive)
  }

    //add dialog
    openDialogForNew(){
      this.addDialog = this.dialog.open(CustomerEditComponent, {
        direction: 'rtl',
        data: {
          customerModel: null,
          flag: CustomerCRUD.add
        },
        width: "400px",
        maxHeight: '90vh'
      });
      
  
      this.addDialog.afterClosed().subscribe(result => {
        if(result != undefined && result != null && result.message != '' && result.message != undefined){
          new Helpers().displaySnackBar(this.snackBar,result.message,"");
          if(result.data){
            console.log(result);
          }
        }
      });
    }

}
