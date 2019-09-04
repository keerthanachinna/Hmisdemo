import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgaeComponent } from './pgae.component';

describe('PgaeComponent', () => {
  let component: PgaeComponent;
  let fixture: ComponentFixture<PgaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
