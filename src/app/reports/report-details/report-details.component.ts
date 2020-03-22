import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ReportsService } from "../../services/reports.service";
import { CustomersService } from 'src/app/services/customers.service';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FullCustomerModel } from 'src/app/models/fullCustomerModel';
import { Helpers } from 'src/app/Utils/Helpers';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { ReportDetailsModel } from 'src/app/models/reportDetailsModel';
const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'DD MMMM YYYY',
  },
};

@Component({
  selector: "app-report-details",
  templateUrl: "./report-details.component.html",
  styleUrls: ["./report-details.component.css"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ReportDetailsComponent implements OnInit {
  customerData: FullCustomerModel;
  panelOpenState = false;
  reportId: string;
  loadFlag = false;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  loading = false;
  reportsData;
  statusStr;
  reportHandler;
  reportNumber;
  pcnRequirement;
  deductions;
  status;
  companyName;
  dateStr = new FormControl(new Date());
  selectePCNReportdDate = new FormControl(new Date());
  selectedArrivedDate = new FormControl(new Date());
  selectedStartJobDate = new FormControl(new Date());
  selectedModifiedDate = new FormControl(new Date());
  selectedEndReportDate = new FormControl(new Date());
  selectedDates = {
    dateStr: new FormControl(new Date()).value.toString(),
    selectePCNReportdDate: new FormControl(new Date()).value.toString(),
    selectedArrivedDate: new FormControl(new Date()).value.toString(),
    selectedStartJobDate: new FormControl(new Date()).value.toString(),
    selectedModifiedDate: new FormControl(new Date()).value.toString(),
    selectedEndReportDate: new FormControl(new Date()).value.toString()
  }

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportsService,
    private customerService: CustomersService) { }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.reportId = params["id"];
      this.getReportDetails(this.reportId)
    });
    this.customerService.getFullCustomersDetails().subscribe(res => {
      if (res.length > 0)
        this.customerData = res[0];
      //read only data
      this.customerData.clickableAdd = false;
      this.customerData.clickableDelete = false;
      this.customerData.clickableEdit = false;
      this.customerData.displayAdd = false;
      this.customerData.displayDelete = false;
      this.customerData.displayEdit = false;
      this.loading = false;
    })
  }

  getReportDetails(reportId) {

    this.reportService.getReportById(reportId).subscribe(result => {
      try {
        this.reportsData = result;
        this.getCustomersDetails(this.reportsData.customerId);
        this.reportHandler = this.reportsData.reportHandler == null ? 0 : this.reportsData.reportHandler;
        this.reportNumber = this.reportsData.reportNumber == null ? 0 : this.reportsData.reportNumber;
        this.pcnRequirement = this.reportsData.pcnRequirement == null ? 0 : this.reportsData.pcnRequirement;
        this.dateStr = this.reportsData.reportDate == null ? new FormControl(new Date()) : new FormControl(this.reportsData.reportDate);
        this.deductions = this.reportsData.deductions == null ? 0 : this.reportsData.deductions;
        this.status = this.reportsData.status == null ? 1 : this.reportsData.status;
        this.selectePCNReportdDate = this.reportsData.pcnReportDate == null ? new FormControl(new Date()) : new FormControl(this.reportsData.pcnReportDate);
        this.selectedArrivedDate = this.reportsData.arrivedToOffice == null ? new FormControl(new Date()) : new FormControl(this.reportsData.arrivedToOffice);
        this.selectedStartJobDate = this.reportsData.reportStartDate == null ? new FormControl(new Date()) : new FormControl(this.reportsData.reportStartDate);
        this.selectedModifiedDate = this.reportsData.reportLastChangeDate == null ? new FormControl(new Date()) : new FormControl(this.reportsData.reportLastChangeDate);
        this.selectedEndReportDate = this.reportsData.reportEndDate == null ? new FormControl(new Date()) : new FormControl(this.reportsData.reportEndDate);
        this.statusStr = (new Helpers().getSatusNameById(this.reportsData.status)).name;
      } catch (err) {
        this.reportsData = null;
        this.getCustomersDetails(null);
      }
    });
  }

  getCustomersDetails(customerId) {
    this.customerService.getFullCustomerInfoById(customerId).subscribe(res => {
      try {
        this.customerData = res[0];
        this.loadFlag = true;
        this.companyName = this.customerData.customer.companyName;
        this.customerData.clickableAdd = false;
        this.customerData.clickableDelete = false;
        this.customerData.clickableEdit = false;
        this.customerData.displayAdd = false;
        this.customerData.displayDelete = false;
        this.customerData.displayEdit = false;
        this.loading = false;

      } catch (err) {
        this.customerData = null;
      }
    });
  }

  updateReportsData() {
    let reportData;
    reportData = {
      reportHandler: this.reportHandler,
      reportNumber: this.reportNumber,
      pcnRequirement: this.pcnRequirement,
      reportDateNum: new Date(this.dateStr.value.toString()).getTime(),
      deductions: this.deductions,
      status: this.status, 
      pcnReportDateNum: new Date(this.selectePCNReportdDate.value.toString()).getTime(),
      arrivedToOfficeNum: new Date(this.selectedArrivedDate.value.toString()).getTime(),
      reportStartDateNum: new Date(this.selectedStartJobDate.value.toString()).getTime(),
      reportLastChangeDateNum: new Date(this.selectedModifiedDate.value.toString()).getTime(),
      reportEndDateNum: new Date(this.selectedEndReportDate.value.toString()).getTime()
    }
    this.reportService.updateReports(this.reportId, this.reportsData)
  }
}
