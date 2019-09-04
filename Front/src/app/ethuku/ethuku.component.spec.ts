import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthukuComponent } from './ethuku.component';

describe('EthukuComponent', () => {
  let component: EthukuComponent;
  let fixture: ComponentFixture<EthukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
