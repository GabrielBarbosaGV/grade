import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeboxComponent } from './timebox/timebox.component';
import { ScheduleDisplayComponent } from './schedule-display/schedule-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeboxComponent,
    ScheduleDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
