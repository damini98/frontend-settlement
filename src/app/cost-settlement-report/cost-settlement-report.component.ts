import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  op: number;
  do: number;
  cof: number;
  cos: number;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {op : 5000, do: 6700, cof: 12, cos: 567, total: 12279},
  {op: 8500, do: 5467, cof: 67, cos: 684, total: 14718},
];

@Component({
  selector: 'app-cost-settlement-report',
  templateUrl: './cost-settlement-report.component.html',
  styleUrls: ['./cost-settlement-report.component.css']
})
export class CostSettlementReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['op', 'do', 'cof', 'cos','total'];
  dataSource = ELEMENT_DATA;

}
