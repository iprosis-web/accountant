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
<<<<<<< HEAD
  @Input() showFilters: boolean=false;
=======
  selectedCustomer: string;
  selectedStatus: string;
  startDate: Date;
  endDate: Date;
  @Input() showFilters: boolean = false;
  
>>>>>>> 8cb84ad53e375cb6c913796262f14e71df89a06b
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
<<<<<<< HEAD
    this.filtersDataObject.company = this.selectedCustomer;
    this.filtersDataObject.status = this.selectedStatus;
    this.dataFilter.emit(this.filtersDataObject);
    console.log(this.filtersDataObject.company);
    console.log(this.filtersDataObject.status);
    console.log(this.filtersDataObject.startDate);
    console.log(this.filtersDataObject.endDate);
=======
    this.model.companyName = this.selectedCustomer;
    this.model.status = this.selectedStatus;
    this.model.chosenStartDate = this.startDate;
    this.model.chosenEndDate = this.endDate;
    this.dataFilter.emit(this.model);
>>>>>>> 8cb84ad53e375cb6c913796262f14e71df89a06b
  }

  chosenStartYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.selectedStartDate.value;
    ctrlValue.year(normalizedYear.year());
    this.selectedStartDate.setValue(ctrlValue);

  }

  chosenStartMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.selectedStartDate.value;
    ctrlValue.month(normalizedMonth.month());
<<<<<<< HEAD
    this.selectedStartDate.setValue(ctrlValue);
    this.filtersDataObject.startDate = this.selectedStartDate.value.toDate();
=======
    this.dateStart.setValue(ctrlValue);
    this.startDate = normalizedMonth.toDate();
    this.minDate = this.startDate;
>>>>>>> 8cb84ad53e375cb6c913796262f14e71df89a06b
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
