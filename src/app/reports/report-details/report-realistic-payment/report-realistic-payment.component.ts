import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ReportsService } from '../../../services/reports.service'

@Component({
  selector: 'app-report-realistic-payment',
  templateUrl: './report-realistic-payment.component.html',
  styleUrls: ['../report-institutions-payments.component.css']
})
export class ReportRealisticPaymentComponent implements OnInit {
  @Input() reportId;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  reportsData;
  vatValue: number = 0;
  incomeTaxDownPaymentsVal: number = 0;
  incomeTaxDeductionsVal: number = 0;
  nationalInsuranceDownPaymentsVal: number = 0;
  nationalInsuranceDeductionsVal: number = 0;
  contractorsVal: number = 0;
  leaseVal: number = 0;
  vatReportPeriodType: number = 0;
  incomeTaxDownPaymentsPeriodType: number = 0;
  incomeTaxDeductionsPeriodType: number = 0;
  nationalInsuranceDownPaymentsPeriodType: number = 0;
  nationalInsuranceDeductionsPeriodType: number = 0;
  contractorsEmployerPeriodType: number = 0;
  leasePaymentPeriodType: number = 0;
  //default date ?
  vatAppointedDate: Date;
  // vatAppointedDateNum?: number;
  incomeTaxDeductionsDate: Date;
  // incomeTaxDeductionsDateNum?: number;
  incomeTaxDownPaymentAppointedDate: Date;
  incomeTaxSalaries: number = 0;
  incomeTaxWorkers: number = 0;
  lease: number = 0;
  contractors: number = 0;
  payrollExpenses: number = 0;
  workers: number = 0;
  totalContractors: number = 0;
  salariesVat: number = 0;
  leaseVat: number = 0;
  contractorsVat: number = 0;

  incomeTaxDeductions: number = 0;
  totalDeductions: number = 0;

  constructor(private reportService: ReportsService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) { }

  ngOnInit() {
    this.getReportDetails(this.reportId);
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  saveReportActualCharge() {

  }

  getReportDetails(reportId) {

    this.reportService.getReportById(reportId).subscribe(result => {
      try {
        this.reportsData = result;
        this.vatValue = this.reportsData.vatValue == null ? 0 : this.reportsData.vatValue ;
        this.incomeTaxDownPaymentsVal = this.reportsData.incomeTaxDownPaymentsVal  == null ? 0 : this.reportsData.incomeTaxDownPaymentsVal;
        this.incomeTaxDeductionsVal = this.reportsData.incomeTaxDeductionsVal == null ? 0 : this.reportsData.incomeTaxDeductionsVal;
        this.nationalInsuranceDownPaymentsVal = this.reportsData.nationalInsuranceDownPaymentsVal == null ? 0 : this.reportsData.nationalInsuranceDownPaymentsVal;
        this.nationalInsuranceDeductionsVal = this.reportsData.nationalInsuranceDeductionsVal ==  null ? 0 : this.reportsData.nationalInsuranceDeductionsVal;
        this.contractorsVal = this.reportsData.contractorsVal == null ? 0 : this.reportsData.contractorsVal;
        this.leaseVal = this.reportsData.leaseVal == null ? 0 : this.reportsData.leaseVal;
        this.vatReportPeriodType = this.reportsData.vatReportPeriodType == null ? 0 : this.reportsData.vatReportPeriodType;
        this.incomeTaxDownPaymentsPeriodType = this.reportsData.incomeTaxDownPaymentsPeriodType == null ? 0 : this.reportsData.incomeTaxDownPaymentsPeriodType;
        this.incomeTaxDeductionsPeriodType = this.reportsData.incomeTaxDeductionsPeriodType == null ? 0 : this.reportsData.incomeTaxDeductionsPeriodType;
        this.nationalInsuranceDownPaymentsPeriodType = this.reportsData.nationalInsuranceDownPaymentsPeriodType == null ? 0 : this.reportsData.nationalInsuranceDownPaymentsPeriodType;
        this.nationalInsuranceDeductionsPeriodType = this.reportsData.nationalInsuranceDeductionsPeriodType == null ? 0 : this.reportsData.nationalInsuranceDeductionsPeriodType;
        this.contractorsEmployerPeriodType = this.reportsData.contractorsEmployerPeriodType == null ? 0 : this.reportsData.contractorsEmployerPeriodType;
        this.leasePaymentPeriodType = this.reportsData.leasePaymentPeriodType == null ? 0 : this.reportsData.leasePaymentPeriodType;
        this.vatAppointedDate = this.reportsData.vatAppointedDate == null ? 0 : this.reportsData.vatAppointedDate;
        this.incomeTaxDeductionsDate = this.reportsData.incomeTaxDeductionsDate == null ? 0 : this.reportsData.incomeTaxDeductionsDate;
        this.incomeTaxDownPaymentAppointedDate = this.reportsData.incomeTaxDownPaymentAppointedDate == null ? 0 : this.reportsData.incomeTaxDownPaymentAppointedDate;
        this.incomeTaxSalaries = this.reportsData.incomeTaxSalaries == null ? 0 : this.reportsData.incomeTaxSalaries;
        this.incomeTaxWorkers = this.reportsData.incomeTaxWorkers == null ? 0 : this.reportsData.incomeTaxWorkers;
        this.lease = this.reportsData.lease == null ? 0 : this.reportsData.lease;
        this.contractors = this.reportsData.contractors == null ? 0 : this.reportsData.contractors;
        this.payrollExpenses = this.reportsData.payrollExpenses == null ? 0 : this.reportsData.payrollExpenses;
        this.workers = this.reportsData.workers == null ? 0 : this.reportsData.workers;
        this.totalContractors = this.reportsData.totalContractors ==  null ? 0 : this.reportsData.totalContractors;
        this.salariesVat = this.reportsData.salariesVat == null? 0 : this.reportsData.salariesVat;
        this.leaseVat = this.reportsData.leaseVat == null ? 0 : this.reportsData.leaseVat;
        this.contractorsVat = this.reportsData.contractorsVat == null ? 0 : this.reportsData.contractorsVat;
        this.incomeTaxDeductions = this.reportsData.incomeTaxDeductions == null ? 0 : this.reportsData.incomeTaxDeductions;
        this.totalDeductions = this.reportsData.totalDeductions == null ? 0 : this.reportsData.totalDeductions;
      } catch (err) {
        this.reportsData = null;
      }
    });
  }
}
