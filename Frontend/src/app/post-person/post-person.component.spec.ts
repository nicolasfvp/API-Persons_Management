import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPersonComponent } from './post-person.component';

describe('PostPersonComponent', () => {
  let component: PostPersonComponent;
  let fixture: ComponentFixture<PostPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
