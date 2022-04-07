import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbloodbankComponent } from './search-blood-bank.component';

describe('SearchbloodbankComponent', () => {
  let component: SearchbloodbankComponent;
  let fixture: ComponentFixture<SearchbloodbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbloodbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbloodbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
