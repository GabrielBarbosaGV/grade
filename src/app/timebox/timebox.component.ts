import { Component, OnInit, Input } from '@angular/core';

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
  

  constructor() { }

  ngOnInit() {
  }

}
