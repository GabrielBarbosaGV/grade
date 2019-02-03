import { Component, OnInit, Input } from '@angular/core';
import { TimeLocation, TimeStamp } from '../course-class'
import { invertRgb } from '../coloring';

@Component({
  selector: 'app-timebox',
  templateUrl: './timebox.component.html',
  styleUrls: ['./timebox.component.css']
})
export class TimeboxComponent implements OnInit {
  @Input() code: string;
  @Input() name: string;
  @Input() teacher: string;
  @Input() backgroundColor: string;
  @Input() timeLocation: TimeLocation;

  style = {
    "background-color": "rgb(0, 0, 0)",
    "position": "absolute",
    "top": "0%",
    "height": "0%",
    "width": "100%",
    "color": "rgb(255, 255, 255)"
  }
  

  constructor() { }

  ngOnInit() {
    //the top attribute will be how far the staringTime TimeStamp is from midnight
    //we want this translated to a percentage
    let distMidnight = this.timeLocation.startingTime.diffInSeconds(new TimeStamp(0));
    this.style["top"] = ((distMidnight / (24 * 60 * 60)) * 100).toString() + '%';

    //height will be the distance from the TimeLocation's first TimeStamp to the second
    let innerDist = this.timeLocation.endingTime.diffInSeconds(this.timeLocation.startingTime);
    this.style["height"] = ((innerDist / (24 * 60 * 60)) * 100).toString() + '%';

    this.style["background-color"] = this.backgroundColor;
    this.style["color"] = invertRgb(this.backgroundColor);
  }

}