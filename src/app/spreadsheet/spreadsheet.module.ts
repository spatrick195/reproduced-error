import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpreadsheetComponent} from './component/spreadsheet.component';
import {GuiGridModule} from "@generic-ui/ngx-grid";
import { SpreadsheetService } from './service/spreadsheet.service';


@NgModule({
  declarations: [
    SpreadsheetComponent
  ],
  imports: [
    CommonModule,
    GuiGridModule
  ],
  providers: [
    SpreadsheetService
  ],
  exports: [
    SpreadsheetComponent
  ]
})
export class SpreadsheetModule {
}
