import { Component, OnInit, Input } from '@angular/core';
import Pair from '../pair';
import CourseClass, { TimeLocation } from '../course-class';
import { getRandomRgb } from '../coloring';

@Component({
  selector: 'app-schedule-display',
  templateUrl: './schedule-display.component.html',
  styleUrls: ['./schedule-display.component.css']
})
export class ScheduleDisplayComponent implements OnInit {
  @Input() classTimeLocations: Pair<CourseClass, TimeLocation>[];
  @Input() tbodyHeight: string = "600px";
  @Input() scheduleHeight: string = "1000px";
  @Input() colsWidth: string = "200px";
  @Input() fontSize: string = "11px";

  days: string[] = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  maxRgbValue: number = 127;
  backgroundColors = {}

  getCTLByDayNum(num: number) {
    return this.classTimeLocations.filter(ctl => {
      return ctl.second.day === num;
    });
  }

  getClassColor(className: string): string {
    if (this.backgroundColors[className]) {
      return this.backgroundColors[className];
    } else {
      let randomRgb = getRandomRgb(this.maxRgbValue);
      this.backgroundColors[className] = randomRgb;

      return randomRgb;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}