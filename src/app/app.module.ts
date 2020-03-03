import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerMonthlyReportComponent } from './customer-monthly-report/customer-monthly-report.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportsComponent } from './reports/reports.component';
<<<<<<< HEAD
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    CustomerEditComponent,
    CustomerDetailsComponent
=======
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateNewCustomerComponent } from './create-new-customer/create-new-customer.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ReportsComponent,
    CreateNewCustomerComponent,
    CustomerMonthlyReportComponent
>>>>>>> e6227a0e729b030c3b98aed3daa4d1d56fee1b88
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NoopAnimationsModule
=======
    BrowserAnimationsModule,
    MatToolbarModule
>>>>>>> e6227a0e729b030c3b98aed3daa4d1d56fee1b88
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
