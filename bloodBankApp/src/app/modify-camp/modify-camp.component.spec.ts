import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCampComponent } from './modify-camp.component';

describe('ModifyCampComponent', () => {
  let component: ModifyCampComponent;
  let fixture: ComponentFixture<ModifyCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
