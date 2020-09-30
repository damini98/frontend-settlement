import { Component, OnInit } from '@angular/core';
import { CostSettlementServiceService } from './cost-settlement-service.service';


export interface CostSettlementReport {
  op: number;
  do: number;
  cof: number;
  cos: number;
  total: number;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {op : 5000, do: 6700, cof: 12, cos: 567, total: 12279},
//   {op: 8500, do: 5467, cof: 67, cos: 684, total: 14718},
// ];

@Component({
  selector: 'app-cost-settlement-report',
  templateUrl: './cost-settlement-report.component.html',
  styleUrls: ['./cost-settlement-report.component.css']
})
export class CostSettlementReportComponent implements OnInit {
  displayedColumns: string[] = ['op', 'do', 'cof', 'cos','total'];
  public getData =[];//obs
  constructor(private _httpService: CostSettlementServiceService) { }

  ngOnInit(): void {
    this._httpService.getCostSettlement().subscribe(data => this.getData =data);
  }
  
  // dataSource = ELEMENT_DATA;

}
