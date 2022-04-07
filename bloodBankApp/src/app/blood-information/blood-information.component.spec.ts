import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodInformationComponent } from './blood-information.component';

describe('BloodInformationComponent', () => {
  let component: BloodInformationComponent;
  let fixture: ComponentFixture<BloodInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
