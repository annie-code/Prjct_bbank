import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCampComponent } from './post-camp.component';

describe('PostCampComponent', () => {
  let component: PostCampComponent;
  let fixture: ComponentFixture<PostCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
