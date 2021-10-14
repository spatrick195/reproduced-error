import { Injectable } from '@angular/core';
import {throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";

const SPREADSHEET_API = environment.apiUrl + 'shipment/spreadsheet/';
const DEFAULT_SPREADSHEET = SPREADSHEET_API + 'shipment/spreadsheet/default/';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {

  constructor(private http: HttpClient) { }
  private static handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  getSpreadsheet(date: any){
    return this.http.get(DEFAULT_SPREADSHEET + `${date}`).pipe(retry(3), catchError(SpreadsheetService.handleError));
  }

  postData(obj: any): any {
    return this.http.post(SPREADSHEET_API, obj);
  }

  updateCell(day: any, column: any, row: any, serial: any, cellData: any){
    return this.http.put(DEFAULT_SPREADSHEET + `${day}/update/${column}/${row}/${serial}`, cellData)
      .pipe(retry(3), catchError(SpreadsheetService.handleError));
  }}
