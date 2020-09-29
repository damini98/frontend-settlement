import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  op: string;
  value: number;
 
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {op : 'Daily Obligation', value : 29000},
  {op: 'Net Total',value : 56000 },
  {op : 'Bonus',value : 8402},
  {op : 'Closing Balance',value : 40305}
];

@Component({
  selector: 'app-corporate-action',
  templateUrl: './corporate-action.component.html',
  styleUrls: ['./corporate-action.component.css']
})
export class CorporateActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['op', 'value'];
  dataSource = ELEMENT_DATA;
}