import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPersonComponent } from './put-person.component';

describe('PutPersonComponent', () => {
  let component: PutPersonComponent;
  let fixture: ComponentFixture<PutPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
