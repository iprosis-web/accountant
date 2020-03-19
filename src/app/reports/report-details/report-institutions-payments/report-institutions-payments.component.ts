import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-report-institutions-payments',
  templateUrl: './report-institutions-payments.component.html',
  styleUrls: ['../report-institutions-payments.component.css'],
})
export class ReportInstitutionsPaymentsComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  taxableTurnoverA: number=0;
  taxableCapitalTurnoverB: number=0;
  generalVATTurnoverI: number=0;
  exemptionTurnoverC: number=0;
  exemptionCapitalTurnoverD: number=0;
  inputsE: number=0;
  generalExemptionTurnoverJ: number=0;
  advanceTurnoverK: number=0;
  fInputTaxF: number=0;
  retentionTaxG:number=0;
  percentageOfAdvancesH: number=0;
  paypalVATN: number=0;
  invoicingM:number=0;
  calculatedDownPaymentL: number=0;
  
  totalDeductions: number=0;
  vatValue: number=0;
  actualDownPaymentsFee: number=0;
  incomeTaxDeductions: number=0;
  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) { }

  ngOnInit() {
      //match media to max-width of 768
      this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
      this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(){
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getGeneralVAT() {
    this.generalVATTurnoverI = this.taxableTurnoverA + this.taxableCapitalTurnoverB;
    this.generalExemptionTurnoverJ = this.exemptionTurnoverC + this.exemptionCapitalTurnoverD;
    this.advanceTurnoverK = this.taxableTurnoverA + this.exemptionTurnoverC;
    this.paypalVATN = ((17 / 100) * this.taxableTurnoverA - (this.fInputTaxF + this.retentionTaxG));
    this.calculatedDownPaymentL = (this.percentageOfAdvancesH * this.advanceTurnoverK - this.retentionTaxG);
  }

  onSaveMethod() {

  }

}
