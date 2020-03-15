import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRealisticPaymentComponent } from './report-realistic-payment.component';

describe('ReportRealisticPaymentComponent', () => {
  let component: ReportRealisticPaymentComponent;
  let fixture: ComponentFixture<ReportRealisticPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportRealisticPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportRealisticPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
