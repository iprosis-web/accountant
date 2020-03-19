import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-report-realistic-payment',
  templateUrl: './report-realistic-payment.component.html',
  styleUrls: ['../report-institutions-payments.component.css']
})
export class ReportRealisticPaymentComponent implements OnInit {

  vatValue: number=0;
  incomeTaxDownPaymentsVal: number=0;
  incomeTaxDeductionsVal: number=0;
  nationalInsuranceDownPaymentsVal: number=0;
  nationalInsuranceDeductionsVal: number=0;
  contractorsVal: number=0;
  leaseVal: number=0;
  //
  vatReportPeriodType: number=0;
  incomeTaxDownPaymentsPeriodType: number=0;
  incomeTaxDeductionsPeriodType: number=0;
  nationalInsuranceDownPaymentsPeriodType: number=0;
  nationalInsuranceDeductionsPeriodType: number=0;
  contractorsEmployerPeriodType: number=0;
  leasePaymentPeriodType: number=0;
//default date ?
vatAppointedDate: Date;
// vatAppointedDateNum?: number;
incomeTaxDeductionsDate: Date;
// incomeTaxDeductionsDateNum?: number;
incomeTaxDownPaymentAppointedDate: Date;
//
incomeTaxSalaries: number=0;
incomeTaxWorkers: number=0;
lease: number=0;
contractors: number=0;
//
payrollExpenses: number=0;
workers: number=0;
totalContractors: number=0;
/////
salariesVat: number=0;
leaseVat: number=0;
contractorsVat: number=0;

incomeTaxDeductions:number=0;
totalDeductions:number=0;

  constructor() { }

  ngOnInit() {
  }


  saveReportActualCharge(){
    
  }
}
