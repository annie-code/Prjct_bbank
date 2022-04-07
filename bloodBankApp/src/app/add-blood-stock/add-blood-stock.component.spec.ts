import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodStockComponent } from './add-blood-stock.component';

describe('AddBloodStockComponent', () => {
  let component: AddBloodStockComponent;
  let fixture: ComponentFixture<AddBloodStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBloodStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
