import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { reports } from 'src/app/models/report';
import { ReportsService } from 'src/app/services/reports.service';
import { Helpers } from 'src/app/Utils/Helpers';
import { CustomerReportModel } from 'src/app/models/customerReportModel';

@Component({
  selector: 'app-toggle-dialog',
  templateUrl: './toggle-dialog.component.html',
  styleUrls: ['./toggle-dialog.component.css']
})
export class ToggleDialogComponent implements OnInit {
  noticeMessage = "";
  addFlag = false;
  reportElement: CustomerReportModel;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private reportService: ReportsService,
  private snackBar: MatSnackBar,
  private dialogRef: MatDialogRef<ToggleDialogComponent>) { }

  ngOnInit() {
    if(this.data){
      this.reportElement = this.data.report;
      if(this.data.status == "add"){
        this.noticeMessage = "האם אתה בטוח שאתה רוצה לאשר הגעת מסמך למשרד?";
        this.addFlag = true;
      }
      else if(this.data.status == "delete"){
        this.noticeMessage = "האם אתה בטוח שאתה רוצה לבטל את הגעת המסמך למשרד";
        this.addFlag = false;
      }
    }
  }

  onSubmit(){
    let res = this.reportService.updateArriveToOffice(this.reportElement.reportID, this.addFlag);
    new Helpers().displaySnackBar(this.snackBar, "נשמר בהצלחה","");
    this.dialogRef.close(res);
  }

}
