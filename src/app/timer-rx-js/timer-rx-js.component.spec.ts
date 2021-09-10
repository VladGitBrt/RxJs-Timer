import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerRxJSComponent } from './timer-rx-js.component';

describe('TimerRxJSComponent', () => {
  let component: TimerRxJSComponent;
  let fixture: ComponentFixture<TimerRxJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerRxJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerRxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
