import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBloodStockComponent } from './update-blood-stock.component';

describe('UpdateBloodStockComponent', () => {
  let component: UpdateBloodStockComponent;
  let fixture: ComponentFixture<UpdateBloodStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBloodStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBloodStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
