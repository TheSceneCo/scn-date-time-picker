import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DateTime } from './model/DateTime';


@Component({
  selector: 'scn-date-time',
  templateUrl: './scn-date-time.component.html',
  styleUrls: ['./scn-date-time.component.scss']
})
export class ScnDateTimeComponent implements OnInit {
  dateTime: DateTime = new DateTime();

  @Input() startLabel: string = 'From';
  @Input() endLabel: string = 'To';
  @Input() format: string = 'dd, MMMM y, h:mm a';
  @Input() returnObject: string = 'iso';
  @Input() theme: string = '#000000';
  @Output() dateChange: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  fromDateChange(moment: any) {
    console.log('fromDateTime', this.dateTime.from);
    console.log(moment);
    this.dateChange.emit(this.dateTime);
  }

  toDateChange(moment: any) {
    console.log('toDateTime', this.dateTime.from);
    console.log(moment);
    this.dateChange.emit(this.dateTime);
  }
}
