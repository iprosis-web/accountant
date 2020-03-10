import { Component, OnInit } from '@angular/core';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
import { Helpers } from 'src/app/Utils/Helpers';
import { MatDialogRef, MatSnackBar, MatDialog } from '@angular/material';
import { CustomerCRUD } from 'src/app/Utils/Enums';

@Component({
  selector: 'app-customers-header',
  templateUrl: './customers-header.component.html',
  styleUrls: ['./customers-header.component.css']
})
export class CustomersHeaderComponent implements OnInit {

  private addDialog: MatDialogRef<CustomerEditComponent>;
  customers = [];
  statuses = [];
  selectedCustomer: string = "null";
  selectedStatus: string = "null";
  
  constructor(public dialog: MatDialog,
     private snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.customers = this.reportsService.getAllCustomers();
    // this.statuses = this.reportsService.getAllStatuses();
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
