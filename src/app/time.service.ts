import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  time = interval(1000);
  constructor() {}
  getStream(): any {
    return this.time;
  }
}
