import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewregComponent } from './newreg.component';

describe('NewregComponent', () => {
  let component: NewregComponent;
  let fixture: ComponentFixture<NewregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
