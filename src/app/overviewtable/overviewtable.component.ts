import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with pagination
 */
export interface OpeningBalance {
  clearingmember: string;
  cash: number;
  apple: number;
  google: number;
}

const ELEMENT_DATA: OpeningBalance[] = [
  {cash: 10, clearingmember: 'Citi', apple: 1.0079, google: 1522},
  {cash: 20, clearingmember: 'GS', apple: 4.0026, google: 65},
  {cash: 35, clearingmember: 'DB', apple: 6.941, google: 45},
  {cash: 44, clearingmember: 'MS', apple: 9.0122, google: 45},
  {cash: 57, clearingmember: 'BoA', apple: 10.811, google: 78},

];

@Component({
  selector: 'app-overviewtable',
  templateUrl: './overviewtable.component.html',
  styleUrls: ['./overviewtable.component.css']
})
export class OverviewtableComponent {

  displayedColumns: string[] = ['clearingmember', 'position','apple','google' ];
  dataSource = ELEMENT_DATA;
}
