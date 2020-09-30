import { Component, OnInit } from '@angular/core';
import { CostSettlementServiceService } from './cost-settlement-service.service';


export interface CostSettlementReport {
  op: number;
  do: number;
  cof: number;
  cos: number;
  total: number;
}

@Component({
  selector: 'app-cost-settlement-report',
  templateUrl: './cost-settlement-report.component.html',
  styleUrls: ['./cost-settlement-report.component.css']
})
export class CostSettlementReportComponent implements OnInit {
  displayedColumns: string[] = ['op', 'do', 'cof', 'cos','total'];
  public getData =[];
  constructor(private _httpService: CostSettlementServiceService) { }

  ngOnInit(): void {
    this._httpService.getCostSettlement().subscribe(data => this.getData =data);
  }
}
