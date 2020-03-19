import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatMenuModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatListModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule
} from "@angular/material";

import { OverlayModule } from '@angular/cdk/overlay';

import { FlexLayoutModule } from "@angular/flex-layout";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { MatDialogModule } from "@angular/material/dialog";
import { AppComponent } from "./app.component";
import { CustomerMonthlyReportComponent } from "./customer-monthly-report/customer-monthly-report.component";
import { ToolBarComponent } from "./tool-bar/tool-bar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReportsComponent } from "./reports/reports.component";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CreateNewCustomerComponent } from "./customers/create-new-customer/create-new-customer.component";
import { CustomerDetailsComponent } from "./customers/customer-details/customer-details.component";
import { MomentDateModule } from "@angular/material-moment-adapter";
import { CustomerEditComponent } from "./customers/customer-edit/customer-edit.component";
import { CustomersListComponent } from "./customers/customers-list/customers-list.component";
import { AppTabelComponent } from "./reports/app-tabel/app-tabel.component";
import { AppHeaderComponent } from "./reports/app-header/app-header.component";
import { MatPaginatorModule, MatSortModule } from "@angular/material";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ReportDetailsComponent } from "./reports/report-details/report-details.component";
import { CustomersHeaderComponent } from "./customers/customers-header/customers-header.component";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, AngularFirestore } from "@angular/fire/firestore";
import {MatExpansionModule} from '@angular/material/expansion';
import { CustomersComponent } from './customers/customers.component';
import { ToggleDialogComponent } from "./reports/toggle-dialog/toggle-dialog.component";
import { TestcompComponent } from "./testcomp/testcomp.component";
import { ReportInstitutionsPaymentsComponent } from './reports/report-details/report-institutions-payments/report-institutions-payments.component';
// import { ReportInstitutionsPaymentsComponent } from './reportDetails/report-institutions-payments/report-institutions-payment';
import { ReportRealisticPaymentComponent } from './reports/report-details/report-realistic-payment/report-realistic-payment.component';
import { ProgressSpinnerComponent } from './Utils/progress-spinner/progress-spinner.component';
import { AngularFireStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ReportsComponent,
    CreateNewCustomerComponent,
    CustomerMonthlyReportComponent,
    CustomerEditComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    AppTabelComponent,
    AppHeaderComponent,
    ReportDetailsComponent,
    CustomersHeaderComponent,
    CustomersComponent,
    ToggleDialogComponent,
    TestcompComponent,
    ReportInstitutionsPaymentsComponent,
    ReportRealisticPaymentComponent,
    ProgressSpinnerComponent
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
    MatSelectModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    OverlayModule
  ],
  entryComponents: [CustomerEditComponent, ToggleDialogComponent],
  providers: [
    AngularFireStorage,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
