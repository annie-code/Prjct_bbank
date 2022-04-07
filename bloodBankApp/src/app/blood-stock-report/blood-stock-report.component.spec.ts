import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodStockReportComponent } from './blood-stock-report.component';

describe('BloodStockReportComponent', () => {
  let component: BloodStockReportComponent;
  let fixture: ComponentFixture<BloodStockReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodStockReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodStockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
