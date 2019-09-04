import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewoComponent } from './newo.component';

describe('NewoComponent', () => {
  let component: NewoComponent;
  let fixture: ComponentFixture<NewoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
