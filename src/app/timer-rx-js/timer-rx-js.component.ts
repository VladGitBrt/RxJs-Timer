import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-timer-rx-js',
  templateUrl: './timer-rx-js.component.html',
  styleUrls: ['./timer-rx-js.component.css'],
})
export class TimerRxJSComponent implements OnInit {
  minutes: number = 0;
  seconds: number = 0;
  justOneClick = false;
  delayTimer: any;
  delay = 500;
  Time: Observable<number> = interval(1000);
  constructor() {}
  start(): void {
    this.Time.subscribe((v) => (this.seconds = v));
  }
  stop(): void {
    this.seconds = 0;
  }
  oneClick(): void {
    this.justOneClick = false;
    this.delayTimer = setTimeout(() => {
      if (!this.justOneClick) {
        console.log('One click');
      }
    }, this.delay);
  }
  doubleClick(): void {
    this.justOneClick = true;
    clearTimeout(this.delayTimer);
    console.log('Double click');
  }
  reset(): void {
    this.seconds = 0;
    console.log(this.Time);
    this.Time.subscribe((v) => (this.seconds = v));
  }
  ngOnInit(): void {}
}
