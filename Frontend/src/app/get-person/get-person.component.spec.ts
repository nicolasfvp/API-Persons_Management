import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPersonComponent } from './get-person.component';

describe('GetPersonComponent', () => {
  let component: GetPersonComponent;
  let fixture: ComponentFixture<GetPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
