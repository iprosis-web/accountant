import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTabelComponent } from './app-tabel.component';

describe('AppTabelComponent', () => {
  let component: AppTabelComponent;
  let fixture: ComponentFixture<AppTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
