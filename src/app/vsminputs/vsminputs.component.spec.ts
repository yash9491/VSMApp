import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSMInputsComponent } from './vsminputs.component';

describe('VSMInputsComponent', () => {
  let component: VSMInputsComponent;
  let fixture: ComponentFixture<VSMInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSMInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSMInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
