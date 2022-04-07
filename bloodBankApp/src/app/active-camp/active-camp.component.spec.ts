import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCampComponent } from './active-camp.component';

describe('ActiveCampComponent', () => {
  let component: ActiveCampComponent;
  let fixture: ComponentFixture<ActiveCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
