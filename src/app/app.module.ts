import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { MatCardModule,MatGridListModule,MatDialogModule,
         MatFormFieldModule,MatButtonModule,MatInputModule,MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,MatGridListModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
>>>>>>> ab1d09c722d0048a70d016fcfaead373cb0b3ae2
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { CustomerMonthlyReportComponent } from './customer-monthly-report/customer-monthly-report.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportsComponent } from './reports/reports.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateNewCustomerComponent } from './customers/create-new-customer/create-new-customer.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { MomentDateModule } from '@angular/material-moment-adapter';
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
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MomentDateModule,
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [
    CustomerEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
