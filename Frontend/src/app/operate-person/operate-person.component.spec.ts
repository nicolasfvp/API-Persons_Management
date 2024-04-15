import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatePersonComponent } from './operate-person.component';

describe('OperatePersonComponent', () => {
  let component: OperatePersonComponent;
  let fixture: ComponentFixture<OperatePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperatePersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperatePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
