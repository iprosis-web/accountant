import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  faEdit = faEdit;
  private editDialog: MatDialogRef<CustomerEditComponent>;
  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.editDialog = this.dialog.open(CustomerEditComponent, {
      direction: 'rtl',
      data: {
        animal: "panda"
      },
      width: "400px",
      height: "400px"
    });
  }

  ngOnInit() {
    if(this.editDialog){
      this.editDialog.afterClosed().subscribe(data => {
        console.log("sadsaf");
      });
    }
  }

}
