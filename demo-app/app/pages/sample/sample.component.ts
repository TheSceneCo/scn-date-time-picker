import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  dateTime: any;

  constructor() { }

  ngOnInit() {
  }

  dateChange(dateTime) {
    console.log('NGMODEL', this.dateTime);
    console.log('dateTime', dateTime);
  }

}
