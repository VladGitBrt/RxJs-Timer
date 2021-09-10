import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerRxJSComponent } from './timer-rx-js/timer-rx-js.component';
import { TimeService } from './time.service';

@NgModule({
  declarations: [AppComponent, TimerComponent, TimerRxJSComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TimeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
