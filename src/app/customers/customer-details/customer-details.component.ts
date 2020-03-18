import { Component, OnInit, Input } from '@angular/core';
import { faEdit,faUserPlus,faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
import { FullCustomerModel } from 'src/app/models/fullCustomerModel';
import { CustomersService } from 'src/app/services/customers.service';
import { Helpers } from 'src/app/Utils/Helpers';
import { CustomerCRUD } from 'src/app/Utils/Enums';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  faEdit = faEdit;
  faAdd = faUserPlus;
  faDelete = faUserMinus;
  @Input('customerModel') currentCustomerModel: FullCustomerModel;
  @Input('fromTable') fromTableFlag: boolean = false;
  private editDialog: MatDialogRef<CustomerEditComponent>;
  currentCustomerId: string;
  constructor(public dialog: MatDialog, private customerService: CustomersService,private snackBar: MatSnackBar) { }
  loading: boolean = true;
  ngOnInit() {
    //  this.currentCustomerModel = this.customerService.getFullCustomersDetails()[0];
    //   this.customerService.getFullCustomersDetails().subscribe(res => {
    //     this.currentCustomerModel = res[0];
    //     this.loading = false;
    //   });
  }

  //edit dialog
  openDialogForEdit(){
    this.editDialog = this.dialog.open(CustomerEditComponent, {
      direction: 'rtl',
      data: {
        customerModel: this.currentCustomerModel,
        flag: CustomerCRUD.edit
      },
      width: "400px",
      maxHeight: '90vh'
    });

    this.editDialog.afterClosed().subscribe(result => {
      if(result != undefined && result != null && result.message != '' && result.message != undefined){
        new Helpers().displaySnackBar(this.snackBar,result.message,"");
        this.currentCustomerModel.customer = result.data;
        this.currentCustomerModel.contact = result.data.contact;
        this.currentCustomerId = result.data.customerId;
      }
    });
  }

  //add dialog
  openDialogForNew(){
    this.editDialog = this.dialog.open(CustomerEditComponent, {
      direction: 'rtl',
      data: {
        customerModel: null,
        flag: CustomerCRUD.add
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
          this.currentCustomerId = result.data.customer.customerId;
        }
      }
    });
  }

  openDialogForDelete(){
    this.editDialog = this.dialog.open(CustomerEditComponent, {
      direction: 'rtl',
      data: {
        customerModel: this.currentCustomerModel,
        flag: CustomerCRUD.delete
      },
      width: "200px",
      maxHeight: '90vh'
    });

    this.editDialog.afterClosed().subscribe(result => {
      if(result != undefined && result != null && result.message != '' && result.message != undefined){
        new Helpers().displaySnackBar(this.snackBar,result.message,"");
        // this.currentCustomerModel.customer = result.data.customer;
        // this.currentCustomerModel.contact = result.data.contact;
        // this.currentCustomerId = result.data.customer.id;
        //insert after deletion logic
      }
    });
  }

}
