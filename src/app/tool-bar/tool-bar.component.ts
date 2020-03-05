import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import { ReportsService } from '../services/reports.service';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export interface filtersDataModel {
  companyName: string,
  status: string,
  chosenStartDate: Date,
  chosenEndDate: Date
}

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ToolBarComponent implements OnInit {

  customers = [];
  statuses = [];
  selectedCustomer: string;
  selectedStatus: string;
  startDate;
  endDate: Date;
  @Input() showFilters: boolean=false;
  @Output() dataFilter = new EventEmitter<filtersDataModel>();
  model: filtersDataModel = {
    companyName: this.selectedCustomer,
    status: this.selectedStatus,
    chosenStartDate: this.startDate,
    chosenEndDate: this.endDate
  };

  dateStart = new FormControl(moment());
  dateEnd = new FormControl(moment());
  minDate: Date;
  maxDate: Date;

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    this.startDate = new Date();
    this.endDate = new Date();
    this.customers = this.reportsService.getAllCustomers();
    this.statuses = this.reportsService.getAllStatuses();
    this.selectedCustomer = this.customers[0].companyName;
    this.selectedStatus = this.statuses[0].name;
  }

  onFilterSubmitted() {
    this.model.companyName = this.selectedCustomer;
    this.model.status = this.selectedStatus;
    this.model.chosenStartDate = this.startDate;
    this.model.chosenEndDate = this.endDate;
    this.dataFilter.emit(this.model);
    // console.log(this.model.companyName);
    // console.log(this.model.status);
    // console.log(this.model.chosenStartDate);
    // console.log(this.model.chosenEndDate);
  }

  chosenStartYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.dateStart.value;
    ctrlValue.year(normalizedYear.year());
    this.dateStart.setValue(ctrlValue);

  }

  chosenStartMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateStart.value;
    ctrlValue.month(normalizedMonth.month());
    this.dateStart.setValue(ctrlValue);
    this.startDate = normalizedMonth.toDate();
    this.minDate=this.startDate;
    datepicker.close();

  }

  chosenEndYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.dateEnd.value;
    ctrlValue.year(normalizedYear.year());
    this.dateEnd.setValue(ctrlValue);

  }

  chosenEndMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateEnd.value;
    ctrlValue.month(normalizedMonth.month());
    this.dateEnd.setValue(ctrlValue);
    this.endDate = normalizedMonth.toDate();
    datepicker.close();

  }
}

