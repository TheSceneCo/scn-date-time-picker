import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ScnDateTimeComponent } from './scn-date-time.component';
import { ScnButtonDateTimeModule } from './scn-button-date-time/scn-button-date-time.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ScnButtonDateTimeModule
  ],
  declarations: [
      ScnDateTimeComponent,
  ],
  exports: [ScnDateTimeComponent]
})
export class ScnDateTimeModule {
}
