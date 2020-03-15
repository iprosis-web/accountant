import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-institutions-payments',
  templateUrl: './report-institutions-payments.component.html',
  styleUrls: ['./report-institutions-payments.component.css']
})
export class ReportInstitutionsPaymentsComponent implements OnInit {

  taxableTurnoverA: number;
  taxableCapitalTurnoverB: number;
  generalVATTurnoverI: number;
  exemptionTurnoverC: number;
  exemptionCapitalTurnoverD: number;
  generalExemptionTurnoverJ: number;
  advanceTurnoverK: number;
  fInputTaxF: number;
  retentionTaxG:number;
  percentageOfAdvancesH: number;
  paypalVATN: number;
  calculatedDownPaymentL: number;
  constructor() { }

  ngOnInit() {
  }

  getGeneralVAT() {
    this.generalVATTurnoverI = this.taxableTurnoverA + this.taxableCapitalTurnoverB;
    this.generalExemptionTurnoverJ = this.exemptionTurnoverC + this.exemptionCapitalTurnoverD;
    this.advanceTurnoverK = this.taxableTurnoverA + this.exemptionTurnoverC;
    this.paypalVATN = ((17/100) * this.taxableTurnoverA-(this.fInputTaxF+this.retentionTaxG));
    this.calculatedDownPaymentL = (this.percentageOfAdvancesH * this.advanceTurnoverK - this.retentionTaxG);
  }

  onSaveMethod() {
    
  }

}
