import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { ScnButtonDateTimeComponent } from './scn-button-date-time.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    DateTimePickerModule,
  ],
  declarations: [
      ScnButtonDateTimeComponent
  ],
  exports: [ScnButtonDateTimeComponent]
})
export class ScnButtonDateTimeModule {
}
