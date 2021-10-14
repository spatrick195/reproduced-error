import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpreadsheetComponent} from './component/spreadsheet.component';
import {GuiGridModule} from "@generic-ui/ngx-grid";


@NgModule({
  declarations: [
    SpreadsheetComponent
  ],
  imports: [
    CommonModule,
    GuiGridModule
  ],
  exports: [
    SpreadsheetComponent
  ]
})
export class SpreadsheetModule {
}
