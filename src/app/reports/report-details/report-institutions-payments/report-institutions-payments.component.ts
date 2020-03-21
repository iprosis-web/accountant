import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ReportsService } from '../../../services/reports.service'

@Component({
  selector: 'app-report-institutions-payments',
  templateUrl: './report-institutions-payments.component.html',
  styleUrls: ['../report-institutions-payments.component.css'],
})
export class ReportInstitutionsPaymentsComponent implements OnInit {
  @Input() reportId;
  reportsData;
  requiredCycleVal: number = 0;
  requiredCapitalCycleFee: number = 0;
  generalCycleVat: number = 0;
  exemptCycleFee: number = 0;
  exemptCapitalCycleFee: number = 0;
  addedValueFee: number = 0;
  generalRequiredCycleFee: number = 0;
  downPaymentsCycleFee: number = 0;
  addedValueKFee: number = 0;
  deductionsFee: number = 0;
  downPaymentPercentage: number = 0;
  vatPayment: number = 0;
  personalInvoiceCycleFee: number = 0;
  calculatedDownPayment: number = 0;

  totalDeductions: number = 0;
  vatValue: number = 0;
  actualDownPaymentsFee: number = 0;
  incomeTaxDeductions: number = 0;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(private reportService: ReportsService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) { }

  ngOnInit() {
    this.getReportDetails(this.reportId);
    //match media to max-width of 768
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getGeneralVAT() {
    this.generalCycleVat = this.requiredCycleVal + this.requiredCapitalCycleFee;
    this.generalRequiredCycleFee = this.exemptCycleFee + this.exemptCapitalCycleFee;
    this.downPaymentsCycleFee = this.requiredCycleVal + this.exemptCycleFee;
    this.vatPayment = ((17 / 100) * this.requiredCycleVal - (this.addedValueKFee + this.deductionsFee));
    this.calculatedDownPayment = (this.downPaymentPercentage * this.downPaymentsCycleFee - this.deductionsFee);
  }

  onSaveMethod() {

  }

  getReportDetails(reportId) {

    this.reportService.getReportById(reportId).subscribe(result => {
      try {
        this.reportsData = result;
        this.requiredCycleVal = this.reportsData.requiredCycleVal == null ? 0 : this.reportsData.requiredCycleVal;
        this.requiredCapitalCycleFee = this.reportsData.requiredCapitalCycleFee == null ? 0 : this.reportsData.requiredCapitalCycleFee;
        this.exemptCycleFee = this.reportsData.exemptCycleFee == null ? 0 : this.reportsData.exemptCycleFee;
        this.exemptCapitalCycleFee = this.reportsData.exemptCapitalCycleFee == null ? 0 : this.reportsData.exemptCapitalCycleFee;
        this.addedValueFee = this.reportsData.addedValueFee == null ? 0 : this.reportsData.addedValueFee;
        this.addedValueKFee = this.reportsData.addedValueKFee == null ? 0 : this.reportsData.addedValueKFee;
        this.deductionsFee = this.reportsData.deductionsFee == null ? 0 : this.reportsData.deductionsFee;
        this.downPaymentPercentage = this.reportsData.downPaymentPercentage == null ? 0 : this.reportsData.downPaymentPercentage;
        this.personalInvoiceCycleFee = this.reportsData.personalInvoiceCycleFee == null ? 0 : this.reportsData.personalInvoiceCycleFee;
        this.generalCycleVat = this.reportsData.generalCycleVat == null ? 0 : this.reportsData.generalCycleVat;
        this.vatPayment = this.reportsData.vatPayment == null ? 0 : this.reportsData.vatPayment;
        this.generalRequiredCycleFee = this.reportsData.generalRequiredCycleFee == null ? 0 : this.reportsData.generalRequiredCycleFee;
        this.downPaymentsCycleFee = this.reportsData.downPaymentsCycleFee == null ? 0 : this.reportsData.downPaymentsCycleFee;
        this.calculatedDownPayment = this.reportsData.calculatedDownPayment == null ? 0 : this.reportsData.calculatedDownPayment;
        this.totalDeductions = this.reportsData.totalDeductions == null ? 0 : this.reportsData.totalDeductions;
        this.vatValue = this.reportsData.vatValue == null ? 0 : this.reportsData.vatValue;
        this.actualDownPaymentsFee = this.reportsData.actualDownPaymentsFee == null ? 0 : this.reportsData.actualDownPaymentsFee;
        this.incomeTaxDeductions = this.reportsData.incomeTaxDeductions == null ? 0 : this.reportsData.incomeTaxDeductions;
      } catch (err) {
        this.reportsData = null;
      }
    });
  }


}
