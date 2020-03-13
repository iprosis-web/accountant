import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInstitutionsPaymentsComponent } from './report-institutions-payments.component';

describe('ReportInstitutionsPaymentsComponent', () => {
  let component: ReportInstitutionsPaymentsComponent;
  let fixture: ComponentFixture<ReportInstitutionsPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportInstitutionsPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInstitutionsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
