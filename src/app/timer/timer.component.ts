import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  minutes: number = 0;
  seconds: number = 0;
  timer: any;
  justOneClick: boolean = false;
  delay: number = 500;

  time: any;
  constructor() {}

  start(): void {
    clearInterval(this.time);
    this.time = setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
      if (this.minutes === 60) {
        this.seconds = 0;
        this.minutes = 0;
      }
    }, 1000);
  }
  stop(): void {
    clearInterval(this.time);
    this.minutes = 0;
    this.seconds = 0;
  }
  oneClick(): void {
    this.timer = 0;
    this.justOneClick = false;
    this.timer = setTimeout(() => {
      if (!this.justOneClick) {
        console.log('One click');
      }
    }, this.delay);
  }
  doubleClick(): void {
    this.justOneClick = true;
    clearTimeout(this.timer);
    clearInterval(this.time);
    console.log('Double click');
  }
  reset(): void {
    this.minutes = 0;
    this.seconds = 0;
    clearInterval(this.time);
    this.time = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  ngOnInit(): void {
    console.log('Timer Component lifecycle starts');
  }
}
