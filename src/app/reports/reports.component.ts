import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';
import { CustomersService } from '../services/customers.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private customerService:CustomersService,
              private reportService:ReportsService) { }

  ngOnInit(): void { 
    if(!environment.firebaseConfig.reportCreatInitialFlag){
      let customersId;
      this.customerService.getFullCustomersDetails().subscribe(res => {
        customersId = res.map(id=>id.customer.customerId)
        this.reportService.createReportForCustomersByLastMonth(customersId).subscribe(res => { 
          environment.firebaseConfig.reportCreatInitialFlag = true;
        });
      })
    }

  }

}