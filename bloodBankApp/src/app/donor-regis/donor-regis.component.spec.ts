import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorRegisComponent } from './donor-regis.component';

describe('DonorRegisComponent', () => {
  let component: DonorRegisComponent;
  let fixture: ComponentFixture<DonorRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorRegisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
