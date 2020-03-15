import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestcompComponent } from "./testcomp/testcomp.component";
import { AppComponent } from "./app.component";
import { ReportsComponent } from "./reports/reports.component";
import { CreateNewCustomerComponent } from "./customers/create-new-customer/create-new-customer.component";
import { CustomerMonthlyReportComponent } from "./customer-monthly-report/customer-monthly-report.component";
import { CustomerDetailsComponent } from "./customers/customer-details/customer-details.component";
import { ReportDetailsComponent } from "./reports/report-details/report-details.component";
import { CustomersComponent } from './customers/customers.component';
const routes: Routes = [
  { path: "", component: ReportsComponent },
  { path: "reports", component: ReportsComponent },
  { path: "report/:id", component: ReportDetailsComponent },
  { path: "createcustomer", component: CreateNewCustomerComponent },
  { path: "monthlyreport", component: CustomerMonthlyReportComponent },
  { path: "customerdetails", component: CustomerDetailsComponent },
  { path: "customers", component: CustomersComponent },
  { path: "testcomp", component: TestcompComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
