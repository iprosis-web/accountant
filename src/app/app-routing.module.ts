import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateNewCustomerComponent } from './customers/create-new-customer/create-new-customer.component';
import { CustomerMonthlyReportComponent } from './customer-monthly-report/customer-monthly-report.component';

const routes: Routes = [
  {path:'',component:ReportsComponent},
  {path:'reports',component:ReportsComponent},
  {path:'createcustomer',component:CreateNewCustomerComponent},
  {path:'monthlyreport',component:CustomerMonthlyReportComponent},
  {path:'**',redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
