import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ScnButtonDateTimeComponent),
  multi: true
};

@Component({
  selector: 'scn-button-date-time',
  templateUrl: './scn-button-date-time.component.html',
  styleUrls: ['./scn-button-date-time.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ScnButtonDateTimeComponent implements OnInit, ControlValueAccessor {
  @Input() text: string = '';
  @Input() format: string = 'short';
  @Input() returnObject: string = 'iso';
  @Input() theme: string = '#000000';
  @Output() dateTimePickerChange: EventEmitter<any> = new EventEmitter();

  _momentValue: any;

  constructor() {
  }

  ngOnInit() {
  }

  private onChangeCallback: (_: any) => void = noop;

  get momentValue(): any {
    return this._momentValue;
  };

  set momentValue(v: any) {
    if (v !== this._momentValue) {
      this._momentValue = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any) {
    if (value !== this._momentValue) {
      this._momentValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
  }

  _dateTimePickerChange(moment: any) {
    this.dateTimePickerChange.emit(moment)
  }

  clear() {
    this.momentValue = null;
  }
}
