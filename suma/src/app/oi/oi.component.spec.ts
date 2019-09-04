import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OiComponent } from './oi.component';

describe('OiComponent', () => {
  let component: OiComponent;
  let fixture: ComponentFixture<OiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
