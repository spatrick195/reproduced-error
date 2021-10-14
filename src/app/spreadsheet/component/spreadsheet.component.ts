import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {GuiGridApi, GuiGridComponent, GuiSearching, GuiSorting} from "@generic-ui/ngx-grid";
import {source} from "../data/source";
import {columns} from "../data/columns";

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.css']
})
export class SpreadsheetComponent implements AfterViewInit {

  source = source;
  columns = columns;

  @ViewChild('grid', {static: true})
  gridComponent: GuiGridComponent | any;

  searching: GuiSearching = {
    enabled: true,
    highlighting: true,
    placeholder: 'Search dispatches'
  };

  sorting: GuiSorting = {
    enabled: true
  };

  constructor() {
  }

  updateRow() {

  }

  ngAfterViewInit(): void {
    const api: GuiGridApi = this.gridComponent.api;
    api.selectAll();
  }
}
