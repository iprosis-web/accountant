import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-realistic-payment',
  templateUrl: './report-realistic-payment.component.html',
  styleUrls: ['../report-payments.component.css']
})
export class ReportRealisticPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log( Number(1200).toLocaleString('en-GB')); 
  }

}
