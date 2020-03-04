import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { MatCardModule,MatGridListModule,MatDialogModule } from '@angular/material';
=======
>>>>>>> 64a94fd28a25352cb1948228c5f3694973314436
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomerMonthlyReportComponent } from './customer-monthly-report/customer-monthly-report.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportsComponent } from './reports/reports.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateNewCustomerComponent } from './customers/create-new-customer/create-new-customer.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ReportsComponent,
    CreateNewCustomerComponent,
    CustomerMonthlyReportComponent,
    CustomerEditComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  entryComponents: [
    CustomerEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
