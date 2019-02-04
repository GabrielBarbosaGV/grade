import { Component, OnInit, Input } from '@angular/core';
import { ClassTimeLocation } from '../course-class';

@Component({
  selector: 'app-schedule-display',
  templateUrl: './schedule-display.component.html',
  styleUrls: ['./schedule-display.component.css']
})
export class ScheduleDisplayComponent implements OnInit {
  @Input() classTimeLocations: ClassTimeLocation[];
  days: string[] = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  getCTLByDayNum(dayNum: number) {
    return this.classTimeLocations.filter(classTimeLocation => {
      return classTimeLocation.day == dayNum;
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
