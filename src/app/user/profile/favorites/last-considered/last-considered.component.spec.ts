import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastConsideredComponent } from './last-considered.component';

describe('LastConsideredComponent', () => {
  let component: LastConsideredComponent;
  let fixture: ComponentFixture<LastConsideredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastConsideredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastConsideredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
