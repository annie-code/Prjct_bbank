import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodRequestReportComponent } from './blood-request-report.component';

describe('BloodRequestReportComponent', () => {
  let component: BloodRequestReportComponent;
  let fixture: ComponentFixture<BloodRequestReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodRequestReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodRequestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
