import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMonthlyReportComponent } from './customer-monthly-report.component';

describe('CustomerMonthlyReportComponent', () => {
  let component: CustomerMonthlyReportComponent;
  let fixture: ComponentFixture<CustomerMonthlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMonthlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
