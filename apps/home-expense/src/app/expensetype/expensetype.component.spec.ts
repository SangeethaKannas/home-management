import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensetypeComponent } from './expensetype.component';

describe('ExpensetypeComponent', () => {
  let component: ExpensetypeComponent;
  let fixture: ComponentFixture<ExpensetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update name and remarks', () => {
    
  });

});
