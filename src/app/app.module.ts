import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule,MatGridListModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomerMonthlyReportComponent } from './customer-monthly-report/customer-monthly-report.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportsComponent } from './reports/reports.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateNewCustomerComponent } from './customers/create-new-customer/create-new-customer.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { MomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ReportsComponent,
    CreateNewCustomerComponent,
    CustomerMonthlyReportComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
