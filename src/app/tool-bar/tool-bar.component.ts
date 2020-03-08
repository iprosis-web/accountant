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
  company: string,
  status: string,
  startDate: Date,
  endDate: Date
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
  @Input() showFilters: boolean=false;
  @Output() dataFilter = new EventEmitter<filtersDataModel>();
  selectedCustomer: string;
  selectedStatus: string;
  selectedStartDate = new FormControl(moment());
  selectedEndDate = new FormControl(moment());

  constructor(private reportsService: ReportsService) { }
  filtersDataObject: filtersDataModel = {
    company: this.selectedCustomer,
    status: this.selectedStatus,
    startDate: new Date(),
    endDate: new Date()
  };
  ngOnInit() {
    this.customers = this.reportsService.getAllCustomers();
    this.statuses = this.reportsService.getAllStatuses();
  }

  onFilterSubmitted() {
    this.filtersDataObject.company = this.selectedCustomer;
    this.filtersDataObject.status = this.selectedStatus;
    this.dataFilter.emit(this.filtersDataObject);
  }

  chosenStartYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.selectedStartDate.value;
    ctrlValue.year(normalizedYear.year());
    this.selectedStartDate.setValue(ctrlValue);

  }

  chosenStartMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.selectedStartDate.value;
    ctrlValue.month(normalizedMonth.month());
    this.selectedStartDate.setValue(ctrlValue);
    this.filtersDataObject.startDate = this.selectedStartDate.value.toDate();
    datepicker.close();

  }

  chosenEndYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.selectedEndDate.value;
    ctrlValue.year(normalizedYear.year());
    this.selectedEndDate.setValue(ctrlValue);

  }

  chosenEndMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.selectedEndDate.value;
    ctrlValue.month(normalizedMonth.month());
    this.selectedEndDate.setValue(ctrlValue);
    this.filtersDataObject.endDate  = this.selectedEndDate.value.toDate();
    datepicker.close();

  }
  
}
