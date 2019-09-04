import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillcComponent } from './billc.component';

describe('BillcComponent', () => {
  let component: BillcComponent;
  let fixture: ComponentFixture<BillcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
